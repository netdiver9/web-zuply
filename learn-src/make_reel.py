"""레슨 페이지를 릴스 모드로 자동 재생해서 인스타 릴스용 MP4(1080x1920)를 만든다.

사용법 (zuply 폴더에서):
    python3 learn-src/make_reel.py public/learn/computer/index.html learn-src/computer-reel.mp4

준비물 (처음 한 번):
    pip3 install playwright && python3 -m playwright install chromium
    brew install ffmpeg
    cd learn-src && npm i --no-save @fontsource/space-grotesk@5 @fontsource/ibm-plex-sans-kr@5
"""
import asyncio, base64, os, shutil, subprocess, sys, tempfile
from pathlib import Path
from playwright.async_api import async_playwright

SRC = Path(sys.argv[1]).resolve()
OUT = Path(sys.argv[2]).resolve()
FONTS = Path(__file__).resolve().parent / "node_modules" / "@fontsource"
CSS = "".join(
    f'<link rel="stylesheet" href="{(FONTS / pkg / f"{w}.css").as_uri()}">'
    for pkg, ws in [("ibm-plex-sans-kr", [400, 500, 600, 700]), ("space-grotesk", [500, 700])]
    for w in ws
) if FONTS.exists() else ""
# 인스타 UI(하단 설명, 오른쪽 버튼)에 가리지 않도록 여백을 둔다
VIDEO_CSS = ("<style>.reel{padding:0!important}.rframe{height:100vh!important;width:100vw!important;"
             "border-radius:0!important;padding:9% 13% 26% 6%!important}.rside,.rhint{display:none!important}</style>")


async def record(frames_dir: Path):
    frames = []
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 540, "height": 960}, device_scale_factor=2, color_scheme="light")
        await page.goto(SRC.as_uri() + "#step-1")
        await page.evaluate("css => document.head.insertAdjacentHTML('beforeend', css)", CSS + VIDEO_CSS)
        await page.evaluate("document.fonts.ready")
        await page.wait_for_timeout(800)
        await page.click("#reelBtn")
        cdp = await page.context.new_cdp_session(page)

        def on_frame(ev):
            frames.append((ev["metadata"]["timestamp"], ev["data"]))
            asyncio.ensure_future(cdp.send("Page.screencastFrameAck", {"sessionId": ev["sessionId"]}))

        cdp.on("Page.screencastFrame", on_frame)
        await cdp.send("Page.startScreencast", {"format": "jpeg", "quality": 92, "maxWidth": 1080, "maxHeight": 1920})
        seen_last = False
        total = await page.evaluate("document.querySelectorAll('#segs2 .seg').length")
        for _ in range(3000):  # 최대 5분
            await page.wait_for_timeout(100)
            t = await page.inner_text("#rnum")
            if t.startswith(f"{total} /"):
                seen_last = True
            if seen_last and t.startswith("1 /"):
                break
        await cdp.send("Page.stopScreencast")
        await browser.close()

    lines = []
    for i, (ts, data) in enumerate(frames):
        fn = frames_dir / f"f{i:05d}.jpg"
        fn.write_bytes(base64.b64decode(data))
        dur = frames[i + 1][0] - ts if i + 1 < len(frames) else 0.5
        lines.append(f"file '{fn}'\nduration {dur:.4f}")
    lines.append(f"file '{frames_dir / f'f{len(frames) - 1:05d}.jpg'}'")
    (frames_dir / "list.txt").write_text("\n".join(lines))
    print(f"frames {len(frames)}, {frames[-1][0] - frames[0][0]:.1f}s")


def main():
    frames_dir = Path(tempfile.mkdtemp(prefix="reel-"))
    try:
        asyncio.run(record(frames_dir))
        subprocess.run([
            "ffmpeg", "-y", "-loglevel", "error",
            "-f", "concat", "-safe", "0", "-i", str(frames_dir / "list.txt"),
            "-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo",
            "-vf", "fps=30,scale=1080:1920:flags=lanczos,format=yuv420p",
            "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-profile:v", "high",
            "-c:a", "aac", "-b:a", "128k", "-shortest", "-movflags", "+faststart", str(OUT),
        ], check=True)
        print("saved", OUT)
    finally:
        shutil.rmtree(frames_dir, ignore_errors=True)


if __name__ == "__main__":
    main()
