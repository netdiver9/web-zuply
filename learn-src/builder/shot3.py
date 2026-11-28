import asyncio, sys
from pathlib import Path
from playwright.async_api import async_playwright
OUT=Path(sys.argv[1]); names=sys.argv[2].split(','); steps=[int(x) for x in sys.argv[3].split(',')]
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        for name in names:
            for tag,vp in [('wide',dict(width=1440,height=900)),('mob',dict(width=390,height=844))]:
                for step in steps:
                    pg=await b.new_page(viewport=vp); errs=[]; pg.on('pageerror',lambda e: errs.append(str(e)))
                    await pg.goto(Path(f'public/learn/{name}/index.html').resolve().as_uri()+f'#step-{step}')
                    await pg.wait_for_timeout(1500)
                    await pg.locator('#stage').screenshot(path=str(OUT/f'{name}-{tag}-{step}.png'))
                    if errs: print(name,tag,step,'ERR',errs)
                    await pg.close()
        await b.close()
asyncio.run(main())
