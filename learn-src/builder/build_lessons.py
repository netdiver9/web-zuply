"""Build phone/ and network/ lessons from the computer lesson template."""
import re, sys
from pathlib import Path

ROOT = Path(sys.argv[1])
TPL = (ROOT / "public/learn/computer/index.html").read_text(encoding="utf-8")


def sub1(s, old, new):
    assert s.count(old) == 1, old[:80]
    return s.replace(old, new)


# ---------- shared template changes ----------
def base(s):
    # chip text on CPU / SSD drawings becomes configurable
    s = sub1(s, '<text class="chip" x="0" y="0">CPU</text>', '<text class="chip" x="0" y="0">${n.chip||\'CPU\'}</text>')
    s = sub1(s, 'style="fill:#1d3a6b">SSD</text>', 'style="fill:#1d3a6b">${n.chip||\'SSD\'}</text>')
    # new device drawings
    s = sub1(s, "function device(n,s){let g='',top;\n", "function device(n,s){let g='',top;\n const X=dev2(n,s);if(X)return X;\n")
    s = sub1(s, "function device(n,s)", DEV2 + "\nfunction device(n,s)")
    # zones (network areas) drawn behind everything
    s = sub1(s, '<g id="gE"></g>', '<g id="gZ"></g><g id="gE"></g>')
    s = sub1(s, '>Hi A</text>', '>${n.scr||\'Hi A\'}</text>')
    s = sub1(s, '+slab(0,T,d,n.tile,1)+dv.g;', '+slab(0,T,d,n.tile,1)+dv.g;const B=n.float?dv.g:b;')
    s = sub1(s, '<g class="bd">${b}</g>', '<g class="bd">${B}</g>')
    s = sub1(s, "st.e.forEach(([a,b,f])=>{const e=edgeEl(a,b);", "st.e.forEach(([a,b,f])=>{if(!st.show.includes(a)||!st.show.includes(b))return;const e=edgeEl(a,b);")
    s = sub1(s, "S=clamp(Math.min(W,H)*(port?.155:.175),40,96)", "S=clamp(Math.min(W,H)*(port?.155:.175)*(typeof SCALE==='number'?SCALE:1),34,96)")
    s = sub1(s, "/erased/.test(it.n[1])", "/erased|down|Crashed/i.test(it.n[1])")
    s = sub1(s, " gN.innerHTML=Object.keys(NODES).map(nodeSVG).join('');\n",
             " gN.innerHTML=Object.keys(NODES).map(nodeSVG).join('');$('gZ').innerHTML=zoneSVG();\n")
    s = sub1(s, "function render(){", ZONE_JS + "\nfunction render(){")
    s = sub1(s, "/* svg */\n", "/* svg */\n" + ZONE_CSS + "\n")
    return s


DEV2 = r"""function wv(x,y,s,n=2){let d='';for(let i=1;i<=n;i++){const r=s*(.07+.07*i);d+=`<path class="wave" d="M${x+r*.55} ${y-r*.8}A${r} ${r} 0 0 1 ${x+r*.55} ${y+r*.8}M${x-r*.55} ${y-r*.8}A${r} ${r} 0 0 0 ${x-r*.55} ${y+r*.8}"/>`}return d}
function dev2(n,s){let g='',top;
 if(typeof DEV_EXTRA==='function'){const X=DEV_EXTRA(n,s);if(X)return X}
 if(n.t==='ph'){const U=s*.2,V=s*.38,Z=s*.045;
  const sc=`<rect x="${-U*.86}" y="${-V*.92}" width="${U*1.72}" height="${V*1.84}" rx="${U*.22}" fill="url(#mscr)"/>`+
   `<circle cx="0" cy="${-V*.38}" r="${U*.42}" fill="#2a3a46"/><circle cx="0" cy="${-V*.38}" r="${U*.24}" fill="${n.c||'#7fd3a8'}"/>`+
   `<rect x="${-U*.55}" y="${V*.08}" width="${U*1.1}" height="${V*.09}" rx="1" fill="#c9b8ff" opacity=".85"/>`+
   `<rect x="${-U*.4}" y="${V*.26}" width="${U*.8}" height="${V*.07}" rx="1" fill="#9fc4f5" opacity=".8"/>`+
   `<circle cx="0" cy="${V*.66}" r="${U*.24}" fill="#2ee58a"/>`;
  g=csh(U,V)+box(U,V,Z,0,['#2b3137','#1e2328','#15181b'],{top:sc});top=-(U+V)*ISO-Z}
 else if(n.t==='tw'){const H=s*1.05,b=s*.04,z0=s*.05,ty=-H-z0*1.2;
  const pnl=(u,v)=>`<g transform="translate(${(u-v).toFixed(1)} ${((u+v)*ISO).toFixed(1)})">${box(s*.02,s*.05,s*.2,H*.68,['#ffffff','#e3e8ec','#c4ccd2'])}</g>`;
  g=csh(s*.22,s*.22)+box(s*.22,s*.22,z0,0,METAL)+pnl(-s*.06,0)+pnl(0,-s*.06)+box(b,b,H,z0,['#d9dfe4','#aab4bc','#8a959e'])+
   `<path class="mast" d="M${-s*.15} ${-z0}L0 ${-H*.55}L${s*.15} ${-z0}" fill="none"/>`+pnl(s*.06,0)+pnl(0,s*.06)+
   LED(0,ty,s*.025,'#e5484d')+wv(0,ty+s*.05,s,3);top=ty-s*.25}
 else if(n.t==='rep'){const U=s*.26,V=s*.17,Z=s*.24,ax=-s*.06,ay=-(V-U)*ISO*0-Z-s*.02;
  g=csh(U,V)+box(U,V,Z,0,['url(#t-w)','var(--w3)','var(--w4)'],{rf:LED(V*.45,Z*.4,s*.022,'#2ee58a')+LED(V*1.05,Z*.4,s*.022,'#f5a300')})+
   `<path class="mast" d="M${ax} ${ay}v${-s*.3}M${ax+s*.14} ${ay+s*.04}v${-s*.3}"/>`+wv(ax+s*.07,ay-s*.32,s,2);top=ay-s*.5}
 else if(n.t==='core'){const U=s*.36,V=s*.3,Z=s*.15;let q='';
  for(let i=0;i<3;i++)q+=box(U,V,Z,i*(Z+s*.02),DARK,{rf:[.3,.55,.8].map((x,j)=>LED(2*V*x,Z*.5,s*.02,j===(i%3)?'#f5a300':'#2ee58a')).join('')+`<rect x="${V*.1}" y="${Z*.25}" width="${V*.3}" height="${Z*.5}" rx="1" fill="#15191c"/>`});
  g=csh(U,V)+q;top=-(U+V)*ISO-3*Z-s*.08}
 else if(n.t==='bat'){const U=s*.3,V=s*.22,Z=s*.12;
  g=csh(U,V)+box(U,V,Z,0,['#3d454c','#262c31','#1c2025'],{top:`<rect x="${-U*.82}" y="${-V*.7}" width="${U*1.64}" height="${V*1.4}" rx="2" fill="#f4f7f9"/><rect x="${-U*.76}" y="${-V*.6}" width="${U*1.15}" height="${V*1.2}" rx="1.5" fill="#2ee58a"/><path d="M${U*.25} ${-V*.35}l${-U*.16} ${V*.4}h${U*.14}l${-U*.12} ${V*.35}" fill="none" stroke="#15191c" stroke-width="1.6" stroke-linejoin="round"/>`})+
   box(s*.05,s*.08,s*.03,Z,METAL);top=-(U+V)*ISO-Z-s*.05}
 else if(n.t==='srv'){const U=s*.2,V=s*.3,Z=s*.62;let rf='';for(let i=0;i<4;i++)rf+=`<rect x="${V*.18}" y="${Z*(.1+i*.15)}" width="${V*1.1}" height="${Z*.09}" rx="1" fill="#2a3138"/>`;
  rf+=LED(V*1.6,Z*.16,s*.02,'#2ee58a')+LED(V*1.6,Z*.31,s*.02,'#2ee58a')+LED(V*1.6,Z*.46,s*.02,'#f5a300');
  g=csh(U,V)+box(U,V,Z,0,['url(#t-m)','var(--m3)','var(--m4)'],{rf,top:n.chip?`<text class="chip" x="0" y="0" style="fill:#2a3138">${n.chip}</text>`:''});top=-(U+V)*ISO-Z}
 else if(n.t==='db'){const r=s*.34,ry=r*ISO,h=s*.44,b=-h*.5;
  g=`<ellipse class="sh" cx="0" cy="${ry*.4}" rx="${r*1.15}" ry="${ry*.9}"/>`+`<path class="ol" d="M${-r} ${-h}V0A${r} ${ry} 0 0 0 ${r} 0V${-h}Z" fill="url(#s-b)"/>`+
   `<path class="ol" d="M${-r} ${b}A${r} ${ry} 0 0 0 ${r} ${b}" fill="none"/><path class="ol" d="M${-r} ${-h*.08}A${r} ${ry} 0 0 0 ${r} ${-h*.08}" fill="none" opacity=".4"/>`+
   `<ellipse class="ol" cx="0" cy="${-h}" rx="${r}" ry="${ry}" fill="url(#t-b)"/>`+LED(r*.55,b+ry*.55,s*.022,'#2ee58a');top=-h-ry}
 else if(n.t==='lb'){const U=s*.36,V=s*.26,Z=s*.12,c='#2ee58a';
  g=csh(U,V)+box(U,V,Z,0,DARK,{top:`<path d="M${-U*.75} 0H${-U*.15}M${-U*.15} 0L${U*.55} ${-V*.6}M${-U*.15} 0H${U*.55}M${-U*.15} 0L${U*.55} ${V*.6}" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/><circle cx="${-U*.15}" cy="0" r="${s*.035}" fill="${c}"/>`});top=-(U+V)*ISO-Z}
 else if(n.t==='box'){const U=s*.27,Z=s*.34,p=n.p||'g';
  g=csh(U,U)+box(U,U,Z,0,[`url(#t-${p})`,`var(--${p}3)`,`var(--${p}4)`],{top:n.chip?`<text class="chip" x="0" y="0" style="fill:var(--ink)">${n.chip}</text>`:''});top=-2*U*ISO-Z}
 else if(n.t==='ctrs'){const u=s*.13,Z=s*.2,d=s*.3;
  g=csh(s*.3,s*.3)+[-1,0,1].map((k,i)=>{const p=['v','b','a'][i];return `<g transform="translate(${k*d} ${k*d*ISO})">${box(u,u,Z,0,[`url(#t-${p})`,`var(--${p}3)`,`var(--${p}4)`])}</g>`}).join('');top=-2*u*ISO-Z-d*ISO}
 else if(n.t==='rt'){const r=s*.46,ry=r*ISO,h=s*.28,p=n.p||'b',ac=[];
  for(const a of [45,135,225,315]){const c=Math.cos(a*Math.PI/180),q=Math.sin(a*Math.PI/180),out=a===45||a===225,
    P0=[c*r*.2,q*r*.2*ISO-h],P1=[c*r*.72,q*r*.72*ISO-h],tip=out?P1:P0,bk=out?P0:P1,ux=(tip[0]-bk[0]),uy=(tip[1]-bk[1]),L=Math.hypot(ux,uy)||1,nx=ux/L,ny=uy/L,w=s*.07;
    ac.push(`M${bk[0].toFixed(1)} ${bk[1].toFixed(1)}L${tip[0].toFixed(1)} ${tip[1].toFixed(1)}M${(tip[0]-nx*w-ny*w*.7).toFixed(1)} ${(tip[1]-ny*w+nx*w*.7).toFixed(1)}L${tip[0].toFixed(1)} ${tip[1].toFixed(1)}L${(tip[0]-nx*w+ny*w*.7).toFixed(1)} ${(tip[1]-ny*w-nx*w*.7).toFixed(1)}`)}
  g=`<ellipse class="sh" cx="0" cy="${ry*.35}" rx="${r*1.12}" ry="${ry*.85}"/>`+
   `<path class="ol" d="M${-r} ${-h}V0A${r} ${ry} 0 0 0 ${r} 0V${-h}Z" fill="url(#s-${p})"/>`+
   [-.5,-.25,0,.25].map((x,i)=>LED(r*x+r*.12,-h*.45+ry*Math.sqrt(1-(x+.12)**2)*.95,s*.018,i===2?'#f5a300':'#2ee58a')).join('')+
   `<ellipse class="ol" cx="0" cy="${-h}" rx="${r}" ry="${ry}" fill="url(#t-${p})"/>`+
   `<ellipse cx="0" cy="${-h}" rx="${r*.86}" ry="${ry*.86}" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1"/>`+
   `<path d="${ac.join('')}" fill="none" stroke="#fff" stroke-width="${Math.max(2,s*.035).toFixed(1)}" stroke-linecap="round" stroke-linejoin="round"/>`;top=-h-ry}
 else if(n.t==='sat'){const z0=s*.42,b=s*.15,Z=s*.24,pz=z0+Z*.45,pw=s*.3,pd=s*.12,off=s*.48;
  const panel=k=>`<g transform="translate(${(k*off).toFixed(1)} ${(k*off*ISO).toFixed(1)})">${box(pw,pd,s*.02,pz,['#2f6fd6','#1f4fa0','#173b78'],{top:[-.5,0,.5].map(x=>`<path d="M${pw*x} ${-pd}V${pd}" stroke="#9fc4f5" stroke-width=".8"/>`).join('')+`<path d="M${-pw} 0H${pw}" stroke="#9fc4f5" stroke-width=".8"/>`})}</g>`;
  g=`<ellipse class="sh" cx="0" cy="${s*.08}" rx="${s*.5}" ry="${s*.16}" opacity=".6"/>`+panel(-1)+`<path class="mast" d="M${-off*.7} ${-pz+(-off*.7)*ISO*0}L${off*.7} ${-pz}" opacity="0"/>`+
   box(b,b,Z,z0,['#f3d27a','#d9a93c','#b7862a'],{top:`<circle r="${b*.45}" fill="#f6f8fa" stroke="#1b2a22" stroke-width="1"/>`})+panel(1)+
   `<path d="M0 ${-z0-Z-b*2*ISO}v${-s*.14}" stroke="#1b2a22" stroke-width="1.6"/>`+LED(0,-z0-Z-b*2*ISO-s*.15,s*.025,'#e5484d');top=-z0-Z-b*2*ISO-s*.2}
 else if(n.t==='dish'){const z0=s*.18,U=s*.3,V=s*.24;
  g=csh(s*.12,s*.12)+box(s*.04,s*.04,z0,0,['#d9dfe4','#aab4bc','#8a959e'])+
   box(U,V,s*.04,z0,['#f6f8fa','#d6dce1','#b9c2c9'],{top:`<rect x="${-U*.86}" y="${-V*.82}" width="${U*1.72}" height="${V*1.64}" rx="${s*.05}" fill="#e9eef2" stroke="#c3ccd3" stroke-width=".8"/>`+[-.4,0,.4].map(x=>`<path d="M${U*x} ${-V*.8}V${V*.8}M${-U*.84} ${V*x}H${U*.84}" stroke="#d3dae0" stroke-width=".6"/>`).join('')})+
   wv(0,-z0-s*.25,s,2);top=-z0-(U+V)*ISO-s*.4}
 else if(n.t==='gs'){const cy=-s*.62,r=s*.42;
  g=csh(s*.24,s*.24)+box(s*.24,s*.24,s*.1,0,METAL)+box(s*.05,s*.05,s*.36,s*.1,['#d9dfe4','#aab4bc','#8a959e'])+
   `<g transform="rotate(-28 0 ${cy})"><ellipse class="ol" cx="0" cy="${cy}" rx="${r}" ry="${r*.42}" fill="url(#t-w)"/><ellipse cx="0" cy="${cy+r*.04}" rx="${r*.8}" ry="${r*.32}" fill="var(--w3)"/>`+
   `<path d="M${-r*.6} ${cy}L0 ${cy-r*.62}M${r*.6} ${cy}L0 ${cy-r*.62}" stroke="#1b2a22" stroke-width="1.4"/><circle cx="0" cy="${cy-r*.62}" r="${s*.035}" fill="#1b2a22"/></g>`;top=cy-r*.75}
 else return null;
 return {g,top}}"""

ZONE_JS = r"""function zoneSVG(){if(!ZONES.length)return '';const pad=Math.max(HW,62)+10;return ZONES.map(z=>{const ps=z.ids.map(id=>Object.assign(P(id),{t:TOP[id]||0}));
 const x0=clamp(Math.min(...ps.map(p=>p.x))-pad,4,W),x1=clamp(Math.max(...ps.map(p=>p.x))+pad,0,W-4),y0=clamp(Math.min(...ps.map(p=>p.y+p.t))-30,4,H),y1=clamp(Math.max(...ps.map(p=>p.y))+BOT+40,0,H-4);
 return `<g class="zn ${z.c||''}"><rect x="${x0}" y="${y0}" width="${x1-x0}" height="${y1-y0}" rx="18"/><text x="${x0+14}" y="${y0+18}">${z.l}</text></g>`}).join('')}"""

ZONE_CSS = (".zn rect{fill:color-mix(in srgb,var(--green) 6%,transparent);stroke:color-mix(in srgb,var(--green) 55%,transparent);stroke-width:1.5;stroke-dasharray:7 6}"
            ".zn text{font:700 12px 'Space Grotesk',sans-serif;letter-spacing:.1em;fill:var(--green-ink)}"
            ".zn.core rect{fill:color-mix(in srgb,#7c5cff 7%,transparent);stroke:color-mix(in srgb,#7c5cff 55%,transparent)}.zn.core text{fill:light-dark(#4a3a9c,#c9b8ff)}")


def lesson(s, *, title, h1, lead, aria, note, rtitle, data):
    s = base(s)
    s = sub1(s, "<title>컴퓨터의 원리</title>", f"<title>{title}</title>")
    s = re.sub(r"<h1>컴퓨터는 어떻게 동작할까</h1>\s*<p>.*?</p>", f"<h1>{h1}</h1>\n    <p>{lead}</p>", s, count=1, flags=re.S)
    s = sub1(s, 'aria-label="컴퓨터 부품 구성도"', f'aria-label="{aria}"')
    s = sub1(s, '<p class="note-s">걸리는 시간은 일반적인 PC 기준 대략값입니다.</p>', f'<p class="note-s">{note}</p>')
    s = sub1(s, "<span>How a Computer Works</span>", f"<span>{rtitle}</span>")
    a, b = s.index("const NODES="), s.index("const MLAB=")
    b = s.index("\n", b) + 1
    return s[:a] + data.strip() + "\n" + s[b:]


PHONE = r"""
const NODES={touch:{t:'ph',l:'터치스크린 · 입력',e:'Touchscreen · Input',tile:'a'},soc:{t:'cpu',chip:'AP',l:'AP · 처리',e:'AP · Process',tile:'g'},ram:{t:'ram',l:'RAM · 기억',e:'RAM · Memory',tile:'v'},flash:{t:'ssd',chip:'UFS',l:'플래시 · 저장',e:'Flash · Storage',tile:'b'},modem:{t:'rep',l:'모뎀 · 통신',e:'Modem · Radio',tile:'w'},bat:{t:'bat',l:'배터리 · 전원',e:'Battery · Power',tile:'m'}};
const LAND={touch:[0,.86],soc:[.42,.86],modem:[1,.9],ram:[.3,.04],flash:[.74,0],bat:[0,.12]};
const PORT={modem:[.16,0],flash:[.84,0],ram:[.82,.42],soc:[.3,.58],bat:[.86,.9],touch:[.3,1]};
const ZONES=[];
const ALL=[['touch','soc'],['soc','ram'],['ram','flash'],['soc','modem'],['bat','soc']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['touch','soc','ram','flash','modem','bat'];
const STEPS=[
{t:'손안의 작은 컴퓨터',te:'A computer in your hand',se:'Six parts work together: touch, AP, memory, storage, radio and battery.',s:'터치스크린 · AP · RAM · 저장장치 · 모뎀 · 배터리. 여섯 부품이 함께 일한다.',show:SHOW,e:act(...ALL),m:['6개 부품','—','—','손안의 사무실'],
 x:'스마트폰도 컴퓨터와 같은 원리로 움직입니다. 다른 점은 모든 부품이 손바닥만 한 판 위에 촘촘히 붙어 있고, 배터리 하나로 하루를 버텨야 한다는 것입니다. 특히 AP(Application Processor)라는 칩 하나에 CPU, 그래픽 장치(GPU), 인공지능 연산 장치까지 모두 들어 있습니다.',
 k:'컴퓨터의 키보드와 모니터가 스마트폰에서는 터치스크린 한 장으로 합쳐졌습니다. 입력과 출력을 같은 유리판이 함께 맡습니다.',
 f:[{n:['touch','Input + Output']},{n:['soc','Process']},{n:['ram','Memory (short-term)']},{n:['flash','Storage (long-term)']},{n:['modem','Radio']},{n:['bat','Power']}]},
{t:'손가락을 좌표로 바꾼다',te:'Your touch becomes coordinates',se:'The screen senses a tiny change in electric charge and sends the x, y position to the AP.',s:'화면은 손가락이 닿을 때 생기는 미세한 전기 변화를 감지해 위치(x, y)를 AP로 보낸다.',show:SHOW,e:act(['touch','soc']),m:['화면 → AP','약 10 ms','—','초인종'],
 x:'스마트폰 화면 유리 아래에는 아주 가는 전극이 바둑판처럼 깔려 있습니다. 손가락은 전기가 조금 통하기 때문에, 닿는 곳의 전기량이 살짝 바뀝니다. 터치 칩은 이 변화를 1초에 100번 넘게 확인해 손가락의 위치를 좌표로 계산하고 AP에 알립니다.',
 k:'일반 장갑을 끼면 터치가 잘 안 되는 이유가 이것입니다. 화면은 누르는 힘이 아니라 손가락의 전기를 느낍니다.',
 f:[{n:['touch','Tap']},['touch','soc','x 540, y 1820','push'],{n:['soc','Tap on Camera']}]},
{t:'앱을 저장장치에서 꺼낸다',te:'Loading the app',se:'The app is copied from flash storage into RAM so the AP can run it.',s:'앱은 플래시 저장장치에서 RAM으로 복사되어야 AP가 실행할 수 있다.',show:SHOW,e:act(['soc','ram'],['ram','flash']),m:['플래시 → RAM','약 0.3초','플래시엔 남음','서랍 → 책상'],
 x:'카메라 앱은 평소에 플래시 저장장치(UFS)에 들어 있습니다. 앱을 열면 필요한 부분이 RAM으로 복사되고, AP는 RAM에서 명령을 하나씩 꺼내 실행합니다. 최근에 쓴 앱은 RAM에 남겨 두기 때문에 다시 열 때 더 빠릅니다.',
 k:'RAM이 넉넉하면 여러 앱을 RAM에 올려 둔 채로 오갈 수 있습니다. 부족하면 오래 쓰지 않은 앱부터 RAM에서 내려갑니다.',
 f:[['soc','ram','Open Camera'],['ram','flash','Load app'],['flash','ram','Camera app','ack'],{n:['ram','Ready']},['ram','soc','Run','ack']]},
{t:'AP가 계산하고 그린다',te:'The AP thinks and draws',se:'The CPU decides what to show, and the GPU draws it on the screen.',s:'AP 안의 CPU가 무엇을 보여 줄지 정하고, GPU가 화면에 그린다.',show:SHOW,e:act(['touch','soc'],['soc','ram']),m:['AP → 화면','약 8–16 ms','—','두뇌와 화가'],
 x:'AP 안의 CPU는 앱의 명령을 처리하고, GPU는 화면에 보일 픽셀 수백만 개의 색을 한꺼번에 계산합니다. 완성된 화면 한 장은 디스플레이로 보내지고, 화면은 보통 1초에 60번에서 120번 새로 그려집니다.',
 k:'CPU는 복잡한 계산을 차례로, GPU는 단순한 계산을 아주 많이 동시에 하는 데 강합니다. 한 칩 안에서 둘이 역할을 나눕니다.',
 f:[{n:['soc','CPU: logic']},{n:['soc','GPU: pixels']},['soc','touch','New frame','ack'],{n:['touch','Camera view']}]},
{t:'모뎀이 전파로 내보낸다',te:'The modem goes on air',se:'To send a photo, the modem turns data into radio waves for the nearest base station.',s:'사진을 보내면 모뎀이 데이터를 전파로 바꿔 가까운 기지국으로 보낸다.',show:SHOW,e:act(['soc','modem'],['soc','ram']),m:['AP → 모뎀','수십 ms부터','—','우체통'],
 x:'사진을 찍어 친구에게 보내면, AP가 사진 데이터를 모뎀에 넘깁니다. 모뎀은 0과 1을 전파의 모양으로 바꿔 안테나로 내보내고, 가까운 기지국이 이를 받습니다. 기지국에서 친구에게 가는 길은 "전화망의 원리" 레슨에서 이어집니다.',
 k:'모뎀은 데이터를 보내기만 하는 게 아니라, 주변 기지국 신호의 세기를 계속 재서 가장 좋은 기지국을 고릅니다. 화면 위의 안테나 막대가 그 결과입니다.',
 f:[['ram','soc','photo.jpg'],['soc','modem','2 MB','push'],{n:['modem','Data → radio']},{n:['modem','To base station']}]},
{t:'배터리가 모두를 움직인다',te:'The battery powers it all',se:'The AP saves power by slowing down and switching off parts it doesn\'t need.',s:'AP는 필요 없는 부품을 끄고 속도를 낮춰 배터리를 아낀다.',show:SHOW,e:act(['bat','soc'],['touch','soc'],['soc','modem']),m:['배터리 → 모든 부품','하루 남짓','RAM은 사라짐','도시락'],
 x:'모든 부품은 배터리의 전기로 움직입니다. 전기를 가장 많이 쓰는 것은 밝은 화면, 바쁜 AP, 그리고 신호가 약할 때의 모뎀입니다. 그래서 스마트폰은 할 일이 없으면 AP의 속도를 낮추고, 화면과 모뎀을 잠깐씩 꺼서 전기를 아낍니다.',
 k:'전원이 꺼지면 RAM의 내용은 사라지고, 플래시에 저장된 사진과 앱은 남습니다. 컴퓨터와 같은 원리입니다.',
 f:[['bat','soc','Power','beat'],{n:['soc','Idle: slow down']},{n:['touch','Screen dim']},{n:['modem','Sleep']}]}];
const MLAB=['지금 일하는 곳','걸리는 시간','전원을 끄면','비유'];
"""

NETWORK = r"""
const NODES={phoneA:{t:'ph',l:'내 폰',e:'My phone',tile:'a'},rep:{t:'rep',l:'중계기',e:'Repeater',tile:'w'},btsA:{t:'tw',l:'기지국 A',e:'Base station A',tile:'g'},core:{t:'core',l:'코어망',e:'Core network',tile:'v'},btsB:{t:'tw',l:'기지국 B',e:'Base station B',tile:'g'},phoneB:{t:'ph',c:'#c9b8ff',l:'상대 폰',e:"Friend's phone",tile:'b'}};
const LAND={phoneA:[0,1],rep:[.1,.5],btsA:[.25,.98],core:[.5,.12],btsB:[.75,.98],phoneB:[1,1]};
const PORT={core:[.5,0],btsA:[.1,.46],btsB:[.9,.46],rep:[0,.76],phoneA:[.26,1],phoneB:[.9,.96]};
const ZONES=[{ids:['phoneA','rep','btsA'],l:'ACCESS NETWORK'},{ids:['core'],l:'CORE NETWORK',c:'core'},{ids:['btsB','phoneB'],l:'ACCESS NETWORK'}];
const ALL=[['phoneA','rep'],['rep','btsA'],['btsA','core'],['core','btsB'],['btsB','phoneB']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['phoneA','rep','btsA','core','btsB','phoneB'];
const STEPS=[
{t:'전화망은 두 층으로 되어 있다',te:'Two layers: access and core',se:'A call crosses an access network, the core network, then another access network.',s:'통화는 액세스망 → 코어망 → 액세스망을 지나 상대에게 간다.',show:SHOW,e:act(...ALL),m:['6개 지점','—','—','동네 우체국과 집중국'],
 x:'전화망은 크게 두 층으로 나뉩니다. 액세스망(Access network)은 휴대폰과 가장 가까운 구간으로, 중계기와 기지국이 전파로 휴대폰을 붙잡아 줍니다. 코어망(Core network)은 통신사 안쪽의 중심 구간으로, 가입자를 찾고 통화를 연결하고 먼 곳까지 데이터를 실어 나릅니다. 기지국과 코어망 사이는 광케이블로 이어져 있습니다.',
 k:'우편에 비유하면 액세스망은 동네 우체국, 코어망은 전국의 우편물을 모아 나누는 우편 집중국입니다.',
 f:[{n:['phoneA','Me']},{n:['phoneB','Friend']},{w:900}]},
{t:'지하에서는 중계기가 잇는다',te:'A repeater fills the gap',se:'Underground, a repeater picks up weak signals and passes them on to the base station.',s:'전파가 약한 지하나 건물 안에서는 중계기가 신호를 받아 키워 기지국으로 이어 준다.',show:SHOW,e:act(['phoneA','rep'],['rep','btsA']),m:['폰 ↔ 중계기 ↔ 기지국','1 ms 미만','전파','징검다리'],
 x:'기지국의 전파는 땅속이나 두꺼운 벽을 잘 통과하지 못합니다. 그래서 지하철역, 터널, 큰 건물 안에는 중계기를 둡니다. 중계기는 휴대폰과 기지국 사이에서 약한 신호를 받아 키운 뒤 다시 보내 줍니다. 내용을 판단하지 않고 신호를 이어 주기만 합니다.',
 k:'중계기는 액세스망의 일부입니다. 신호가 강한 곳에서는 휴대폰이 기지국과 바로 연결되고, 약한 곳에서만 중계기를 거칩니다.',
 f:[{n:['phoneA','Weak signal']},['phoneA','rep','Radio'],{n:['rep','Amplify']},['rep','btsA','Radio','push'],{n:['btsA','Connected']}]},
{t:'번호로 상대를 찾는다',te:'Finding who you called',se:'The core network finds which base station your friend is near, then rings their phone.',s:'코어망이 상대 폰이 어느 기지국 근처에 있는지 찾아 벨을 울린다.',show:SHOW,e:act(...ALL),m:['코어망','약 1–3초','제어 신호','교환원'],
 x:'번호를 누르고 통화 버튼을 누르면, "이 번호와 연결해 달라"는 요청이 액세스망을 지나 코어망으로 갑니다. 코어망의 가입자 정보 저장소(HSS)에는 각 휴대폰이 지금 어느 지역에 접속해 있는지 기록되어 있습니다. 코어망은 상대가 있는 지역의 기지국으로 호출을 보내고, 상대 폰의 벨이 울립니다.',
 k:'목소리를 보내기 전에 먼저 길을 찾고 연결을 잡습니다. 목소리는 이 연결이 만들어진 뒤에야 흐르기 시작합니다.',
 f:[['phoneA','rep','Call 010-…'],['rep','btsA','Call'],['btsA','core','Call'],{n:['core','Where is Friend?']},{n:['core','Near B']},['core','btsB','Ring','push'],['btsB','phoneB','Ring','push'],{n:['phoneB','Ringing']}]},
{t:'목소리는 작은 묶음이 된다',te:'Voice becomes small packets',se:'Your phone turns sound into numbers and sends them in a packet every 20 ms.',s:'휴대폰은 목소리를 숫자로 바꿔 20 ms마다 작은 묶음(패킷)으로 보낸다.',show:SHOW,e:act(['phoneA','rep']),m:['내 폰','20 ms마다','디지털','받아쓰기'],
 x:'상대가 전화를 받으면 목소리가 흐르기 시작합니다. 마이크가 공기의 떨림을 전기 신호로 바꾸고, 휴대폰은 이를 1초에 수천 번 넘게 재서 숫자로 만듭니다. 코덱이 이 숫자를 작게 압축하고, 20 ms 분량씩 묶어 패킷으로 보냅니다. LTE와 5G 통화(VoLTE)는 이렇게 데이터처럼 전달됩니다.',
 k:'1초 동안의 말은 50개의 작은 패킷이 됩니다. 패킷 몇 개가 늦거나 빠져도 대화가 이어지도록 설계되어 있습니다.',
 f:[{n:['phoneA','“Hello”']},{n:['phoneA','Sound → numbers']},['phoneA','rep','Packet 1'],['phoneA','rep','Packet 2']]},
{t:'코어망을 가로지른다',te:'Across the core network',se:'Base stations send packets over fiber to the core, which routes them to the other side.',s:'기지국은 광케이블로 코어망에 패킷을 보내고, 코어망은 상대 쪽 기지국으로 길을 골라 넘긴다.',show:SHOW,e:act(['rep','btsA'],['btsA','core'],['core','btsB']),m:['기지국 → 코어망 → 기지국','수 ms','빛 (광케이블)','고속도로'],
 x:'기지국에 도착한 패킷은 이제 전파가 아니라 광케이블 속의 빛으로 달립니다. 코어망은 패킷을 받아 상대가 연결된 기지국으로 길을 골라 보냅니다. 서울에서 부산까지도 몇 ms면 닿습니다.',
 k:'전파는 양쪽 끝의 짧은 구간에서만 쓰입니다. 통화 거리의 대부분은 땅속과 바닷속의 광케이블이 맡습니다.',
 f:[['rep','btsA','Packet'],['btsA','core','Packet','push'],{n:['core','Route to B']},['core','btsB','Packet','push']]},
{t:'다시 소리가 된다',te:'Back into sound',se:'Your friend\'s phone turns packets back into sound, while their voice travels back to you.',s:'상대 폰이 패킷을 다시 소리로 바꾼다. 그 사이 상대의 목소리도 같은 길을 거꾸로 온다.',show:SHOW,e:act(...ALL),m:['상대 폰','0.15초 안팎','소리','실시간 대화'],
 x:'기지국 B는 패킷을 다시 전파에 실어 상대 폰으로 보냅니다. 상대 폰은 숫자를 소리로 되돌려 스피커로 들려줍니다. 입에서 귀까지는 보통 0.15초 안팎이라 대화가 자연스럽습니다. 그 사이 상대의 목소리도 같은 길을 거꾸로 지나 나에게 옵니다.',
 k:'통화는 두 방향의 길이 동시에 열려 있는 것입니다. 지연이 길어지면 말이 자꾸 겹쳐 대화가 어색해집니다.',
 f:[['btsB','phoneB','Packet'],{n:['phoneB','“Hello”']},['phoneB','btsB','“Hi!”','ack'],['btsB','core','“Hi!”','ack'],['core','btsA','“Hi!”','ack'],['btsA','rep','“Hi!”','ack'],['rep','phoneA','“Hi!”','ack'],{n:['phoneA','“Hi!”']}]}];
const MLAB=['지금 일하는 곳','걸리는 시간','신호 형태','비유'];
"""

out = {
    "phone": lesson(TPL, title="스마트폰의 원리", h1="스마트폰은 어떻게 동작할까",
                    lead="화면을 터치하면 손안의 작은 컴퓨터가 일을 시작합니다. 스마트폰 속 여섯 부품이 하는 일을 6단계로 따라가 보세요.",
                    aria="스마트폰 부품 구성도", note="걸리는 시간은 일반적인 스마트폰 기준 대략값입니다.",
                    rtitle="How a Smartphone Works", data=PHONE),
    "network": lesson(TPL, title="전화망의 원리", h1="전화는 어떻게 연결될까",
                      lead="전화를 걸면 목소리는 액세스망과 코어망을 지나 상대에게 갑니다. 중계기, 기지국, 코어망이 하는 일을 6단계로 따라가 보세요.",
                      aria="전화망 구성도", note="걸리는 시간은 LTE·5G 통화 기준 대략값입니다.",
                      rtitle="How a Phone Network Works", data=NETWORK),
}
exec((Path(__file__).with_name('lessons_more.py')).read_text(encoding='utf-8'))
exec((Path(__file__).with_name('lessons_net.py')).read_text(encoding='utf-8'))
exec((Path(__file__).with_name('lessons_sat.py')).read_text(encoding='utf-8'))
exec((Path(__file__).with_name('lessons_scale.py')).read_text(encoding='utf-8'))
exec((Path(__file__).with_name('lessons_data.py')).read_text(encoding='utf-8'))
exec((Path(__file__).with_name('lessons_comm.py')).read_text(encoding='utf-8'))
for name, html in out.items():
    d = ROOT / "public/learn" / name
    d.mkdir(parents=True, exist_ok=True)
    (d / "index.html").write_text(html, encoding="utf-8")
    print("wrote", d / "index.html", len(html))
