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
# 인스타 전체 화면 UI(위 '릴스' 머리글, 아래 계정·설명 글, 오른쪽 버튼)와 피드 4:5 잘림을 피하도록 위 15%, 아래 21% 여백을 둔다
VIDEO_CSS = ("<style>.reel{padding:0!important}.rframe{position:relative;height:100vh!important;width:100vw!important;"
             "border-radius:0!important;padding:15vh 12% 21vh 5%!important}.rside,.rhint{display:none!important}"
             # 휴대폰에서 읽기 쉽게 글자를 키운다
             ".rhead{font-size:18px!important}.rcap h3{font-size:31px!important;margin-bottom:6px!important}"
             ".rcap p{font-size:21px!important;line-height:1.35!important;color:var(--ink)!important}"
             ".lbl{font-size:19px!important;font-weight:700!important}"
             ".pk text,.nt text{font-size:18px!important}.pk rect,.nt rect{y:-19px;height:38px;rx:19px}"
             # 시작 질문, 마무리 안내 (영어만)
             ".card{position:absolute;inset:0;z-index:5;background:var(--mist);display:flex;flex-direction:column;"
             "justify-content:center;gap:22px;padding:15vh 12% 21vh 8%;font-family:'Space Grotesk','IBM Plex Sans KR',sans-serif;"
             "animation:cin .5s ease-out}.card[hidden]{display:none}@keyframes cin{from{opacity:0;transform:translateY(12px)}}"
             ".card small{font:700 20px 'Space Grotesk',sans-serif;color:var(--green-ink);letter-spacing:.06em}"
             ".card h1{margin:0;font:700 52px/1.1 'Space Grotesk',sans-serif;letter-spacing:-.03em;color:var(--ink)}"
             ".card p{margin:0;font-size:25px;line-height:1.4;color:var(--muted)}"
             ".card .links{display:flex;flex-direction:column;gap:10px}"
             ".card .links b{font:700 34px 'Space Grotesk',sans-serif;color:var(--green-ink)}"
             ".card .links span{font:600 26px 'Space Grotesk',sans-serif;color:var(--ink)}"
             ".wm{margin-top:14px;font:600 17px 'Space Grotesk',sans-serif;color:var(--green-ink);opacity:.85}"
             ".card .k{display:inline-block;padding:2px 14px;border-radius:10px;background:#ffc233;color:#2a1a00;border:2px solid var(--ink)}</style>")
CARDS = """
<div class="card" id="intro" lang="en"><small>HOW A COMPUTER WORKS</small>
<h1>What happens inside your computer when you press <span class="k">A</span>?</h1>
<p>Follow one key press through five parts.</p></div>
<div class="card" id="outro" lang="en" hidden><small>ZUPLY LEARN</small>
<h1>Explore the interactive lesson.</h1>
<div class="links"><b>zuply.co.kr/learn</b><span>Follow @seunghwan.daily</span></div><p>Link in bio.</p></div>"""
# 영상 내내 아래쪽에 작게 표시 (영상이 퍼져도 출처가 남도록)
WATERMARK_TEXT = '@seunghwan.daily · zuply.co.kr/learn'
INTRO_MS, OUTRO_MS = 2800, 3200


async def record(frames_dir: Path):
    frames = []
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 540, "height": 960}, device_scale_factor=2, color_scheme="light")
        # 영상에서는 글자가 커지므로 RAM 위 말풍선이 SSD 라벨과 겹치지 않게 RAM을 조금 내리고,
        # 안전 영역 때문에 다이어그램이 납작해져도 세로 배치를 쓴다
        html = SRC.read_text(encoding="utf-8").replace("const PORT={monitor:[.2,0],ssd:[.84,0],ram:[.8,.42],cpu:[.26,.62],keyboard:[.42,1]}", "const PORT={monitor:[.16,0],ssd:[.86,.02],ram:[.86,.62],cpu:[.18,.56],keyboard:[.56,1]}").replace("(port?.155:.175),40,96)", "(port?.13:.175),36,96)").replace("y=p.y+BOT+52", "y=p.y+BOT+66").replace("port=H/W>1.05", "port=H/W>.75")
        tmp = frames_dir / "page.html"
        tmp.write_text(html, encoding="utf-8")
        await page.goto(tmp.as_uri() + "#step-1")
        await page.evaluate("css => document.head.insertAdjacentHTML('beforeend', css)", CSS + VIDEO_CSS)
        await page.evaluate("document.fonts.ready")
        await page.wait_for_timeout(800)
        # 자동 재생을 잠시 멈추고 시작 카드를 띄운 뒤 녹화를 시작한다
        await page.evaluate("document.getElementById('reelBtn').click(); document.getElementById('rplay').click()")
        await page.evaluate("h => document.querySelector('.rframe').insertAdjacentHTML('beforeend', h)", CARDS)
        # 위쪽 제목 줄 자리에 계정·주소를 넣는다 (제목은 시작 카드에 있음)
        await page.evaluate("t => document.querySelector('.rhead span').textContent = t", WATERMARK_TEXT)
        await page.wait_for_timeout(300)
        cdp = await page.context.new_cdp_session(page)

        def on_frame(ev):
            frames.append((ev["metadata"]["timestamp"], ev["data"]))
            asyncio.ensure_future(cdp.send("Page.screencastFrameAck", {"sessionId": ev["sessionId"]}))

        cdp.on("Page.screencastFrame", on_frame)
        await cdp.send("Page.startScreencast", {"format": "jpeg", "quality": 92, "maxWidth": 1080, "maxHeight": 1920})
        await page.wait_for_timeout(INTRO_MS)
        # 마지막 단계가 끝나고 1단계로 돌아가는 순간, 그리기 전에 마무리 카드를 띄운다
        await page.evaluate("""() => {
          const rn = document.getElementById('rnum'), total = document.querySelectorAll('#segs2 .seg').length;
          let last = false;
          new MutationObserver(() => {
            const t = rn.textContent;
            if (t.startsWith(total + ' /')) last = true;
            else if (last && t.startsWith('1 /') && !window.__end) {
              window.__end = true; document.getElementById('outro').hidden = false; }
          }).observe(rn, {childList: true, characterData: true, subtree: true});
        }""")
        await page.evaluate("""() => { document.getElementById('rplay').click();
          document.querySelector('#segs2 .seg').click(); document.getElementById('intro').hidden = true; }""")
        for _ in range(3000):  # 최대 5분
            await page.wait_for_timeout(100)
            if await page.evaluate("!!window.__end"):
                break
        await page.wait_for_timeout(OUTRO_MS)
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
