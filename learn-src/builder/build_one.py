"""Build only the lessons defined in one data file.
Usage (from the zuply folder): python3 <scratchpad>/build_one.py <scratchpad>/lessons_X.py
The data file must call out.update({...}) like lessons_net.py does."""
import sys
from pathlib import Path
here = Path(__file__).resolve().parent
src = (here / "build_lessons.py").read_text(encoding="utf-8")
src = src[:src.index("\nout = {")]          # keep helpers, TPL, lesson(), DEV2 ...
g = {"__file__": str(here / "build_lessons.py"), "__name__": "build_one"}
sys.argv = [sys.argv[0], ".", *sys.argv[1:]]
exec(compile(src, "build_lessons.py", "exec"), g)
g["out"] = {}
data = Path(sys.argv[2]).resolve()
exec(compile(data.read_text(encoding="utf-8"), str(data), "exec"), g)
for name, html in g["out"].items():
    d = Path("public/learn") / name
    d.mkdir(parents=True, exist_ok=True)
    (d / "index.html").write_text(html, encoding="utf-8")
    print("wrote", d / "index.html")
