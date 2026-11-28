# Database lessons: indexes, SQL vs NoSQL, replication, sharding.
# ICONS defines custom isometric drawings (DEV_EXTRA) shared by the four lessons.

ICONS = r"""
const DEV_EXTRA=(n,s)=>{let g='',top;const f1=v=>v.toFixed(1),T=(u,v)=>`translate(${f1(u-v)} ${f1((u+v)*ISO)})`,
 PAL=p=>[`url(#t-${p})`,`var(--${p}3)`,`var(--${p}4)`],PAPER=['var(--w1)','var(--w2)','var(--w3)'],
 mcyl=(x,y,r,h,p)=>`<path class="ol" d="M${f1(x-r)} ${f1(y-h)}V${f1(y)}A${f1(r)} ${f1(r*ISO)} 0 0 0 ${f1(x+r)} ${f1(y)}V${f1(y-h)}Z" fill="url(#s-${p})"/><ellipse class="ol" cx="${f1(x)}" cy="${f1(y-h)}" rx="${f1(r)}" ry="${f1(r*ISO)}" fill="url(#t-${p})"/>`;
 if(n.t==='tbl'){const U=s*.44,V=s*.32,Z=s*.13,p=n.p||'b',R=6,C=4,du=2*U/R,dv=2*V/C;
  let t=`<rect x="${-U}" y="${-V}" width="${2*U}" height="${2*V}" fill="var(--w1)"/><rect x="${-U}" y="${-V}" width="${du}" height="${2*V}" fill="var(--${p}3)"/>`;
  if(n.hl)t+=`<rect x="${-U+du*n.hl}" y="${-V}" width="${du}" height="${2*V}" fill="#ffd36b"/>`;
  let d='';for(let i=1;i<R;i++)d+=`M${f1(-U+i*du)} ${-V}V${V}`;for(let j=1;j<C;j++)d+=`M${-U} ${f1(-V+j*dv)}H${U}`;
  t+=`<path class="olt" d="${d}" fill="none"/>`;
  const lf=`<path class="olt" d="M0 ${f1(Z*.5)}H${f1(2*U)}" fill="none"/>`,rf=`<path class="olt" d="M0 ${f1(Z*.5)}H${f1(2*V)}" fill="none"/>`;
  g=csh(U,V)+box(U,V,Z,0,['var(--w1)',`var(--${p}3)`,`var(--${p}4)`],{top:t,lf,rf});top=-(U+V)*ISO-Z}
 else if(n.t==='tree'){const U=s*.44,V=s*.025,Z=s*.62,z0=s*.06,W=2*U,hl=n.hl||'';
  const nd=(cx,y,w,h,c)=>`<rect class="olt" x="${f1(cx-w/2)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="2" fill="${c}"/>`,
   ln=(x1,y1,x2,y2)=>`M${f1(x1)} ${f1(y1)}L${f1(x2)} ${f1(y2)}`,hi='#2ee58a';
  const yR=Z*.1,yM=Z*.4,yL=Z*.7,h=Z*.17;
  let lf=`<path d="${ln(W*.5,yR+h,W*.27,yM)+ln(W*.5,yR+h,W*.73,yM)+[[.27,.13],[.27,.38],[.73,.62],[.73,.87]].map(([a,b])=>ln(W*a,yM+h,W*b,yL)).join('')}" stroke="var(--ol)" stroke-width="1.4" fill="none"/>`;
  lf+=nd(W*.5,yR,W*.3,h,hl==='root'?hi:'var(--v3)');
  lf+=[.27,.73].map(x=>nd(W*x,yM,W*.26,h,'var(--v2)')).join('');
  lf+=[.13,.38,.62,.87].map((x,i)=>nd(W*x,yL,W*.2,h,hl==='leaf'&&i===1?hi:'var(--a3)')).join('');
  g=csh(s*.4,s*.14)+box(s*.38,s*.12,z0,0,METAL)+box(U,V,Z,z0,['var(--w1)','var(--w1)','var(--w3)'],{lf});top=-(U+V)*ISO-Z-z0}
 else if(n.t==='cards'){const tz=s*.06,cu=s*.016,cv=s*.22,cz=s*.36,L='AFKPU';
  g=csh(s*.36,s*.27)+box(s*.36,s*.27,tz,0,DARK);
  for(let i=0;i<5;i++){const u=(i-2)*s*.13,tv=(i%2?.1:-.1)*s,p=['v','b','g','a','m'][i];
   g+=`<g transform="${T(u,0)}">`+box(cu,cv,cz,tz,PAPER,{rf:`<text class="chip" x="${f1(cv)}" y="${f1(cz*.45)}" style="font-size:${f1(s*.13)}px">${L[i]}</text>`})+
    `<g transform="${T(0,tv)}">`+box(cu,s*.06,s*.07,tz+cz,PAL(p))+`</g></g>`}
  top=-(s*.26+s*.22)*ISO-tz-cz-s*.07}
 else if(n.t==='docs'){const U=s*.27,V=s*.35,Z=s*.035,dz=s*.07,p=n.p||'a';
  g=csh(U,V);for(let i=0;i<3;i++){const o=(i-1)*s*.035;
   const tp=i<2?'':`<text class="chip" x="0" y="${f1(-V*.5)}" style="fill:var(--ink)">{ }</text>`+
    [[-.05,.8],[.2,.6],[.45,.72],[.7,.5]].map(([y,w])=>`<rect x="${f1(-U*.75)}" y="${f1(V*y)}" width="${f1(U*1.5*w)}" height="${f1(V*.1)}" rx="1.5" fill="var(--${p}3)"/>`).join('');
   g+=`<g transform="${T(-o,o)}">`+box(U,V,Z,i*dz,PAPER,{top:tp})+`</g>`}
  top=-(U+V)*ISO-2*dz-Z-s*.04}
 else if(n.t==='kv'){const u=s*.12,Z=s*.22,d=s*.27;
  const key=`<g fill="none" stroke="var(--ol)" stroke-width="1.8" stroke-linecap="round"><circle cx="${f1(-u*.45)}" cy="0" r="${f1(u*.3)}"/><path d="M${f1(-u*.15)} 0H${f1(u*.75)}M${f1(u*.45)} 0v${f1(u*.28)}M${f1(u*.68)} 0v${f1(u*.22)}"/></g>`;
  g=csh(s*.34,s*.34);['g','b','a'].forEach((p,i)=>{const k=i-1;g+=`<g transform="${T(k*d,0)}">`+box(u,u,Z,0,PAL(p),{top:key,lf:`<rect x="${f1(u*.4)}" y="${f1(Z*.35)}" width="${f1(u*1.2)}" height="${f1(Z*.3)}" rx="1.5" fill="var(--w1)" opacity=".9"/>`})+`</g>`});
  top=-(d+2*u)*ISO-Z}
 else if(n.t==='wcol'){const U=s*.46,V=s*.15,Z=s*.09,gap=s*.13,p=n.p||'m',pat=['10110110','11011011','01101101'];
  g=csh(U,V);pat.forEach((r,j)=>{const z0=j*gap,cw=2*U/8;let lf='';
   for(let i=0;i<8;i++)lf+=`<rect class="olt" x="${f1(i*cw+cw*.12)}" y="${f1(Z*.2)}" width="${f1(cw*.76)}" height="${f1(Z*.6)}" rx="1" fill="${r[i]==='1'?`var(--${p==='m'?'g':p}3)`:'var(--w1)'}"/>`;
   let tp='';if(j===2){for(let i=1;i<8;i++)tp+=`M${f1(-U+i*cw)} ${f1(-V)}V${f1(V)}`;tp=`<path class="olt" d="${tp}" fill="none"/>`}
   g+=box(U,V,Z,z0,['var(--w1)','var(--w2)','var(--w3)'],{lf,top:tp})});
  top=-(U+V)*ISO-2*gap-Z}
 else if(n.t==='graph'){const U=s*.42,Z=s*.05,P=(u,v)=>[(u-v)*s,(u+v)*s*ISO-Z],
   N=[[-.24,-.22,'v'],[.2,-.26,'b'],[.02,.02,'a'],[-.26,.22,'g'],[.26,.2,'v']],E=[[0,1],[0,2],[1,2],[2,3],[2,4],[1,4],[0,3]];
  g=csh(U,U)+box(U,U,Z,0,['var(--w1)','var(--w3)','var(--w4)']);
  g+=`<path d="${E.map(([a,b])=>{const A=P(N[a][0],N[a][1]),B=P(N[b][0],N[b][1]);return `M${f1(A[0])} ${f1(A[1]-s*.05)}L${f1(B[0])} ${f1(B[1]-s*.05)}`}).join('')}" stroke="var(--ol)" stroke-width="2" fill="none"/>`;
  g+=N.map((q,i)=>[q,i]).sort((a,b)=>(a[0][0]+a[0][1])-(b[0][0]+b[0][1])).map(([q])=>{const A=P(q[0],q[1]);return mcyl(A[0],A[1],s*.075,s*.09,q[2])}).join('');
  top=-2*U*ISO-Z}
 else if(n.t==='cyl'){const r=s*.34,ry=r*ISO,h=s*.44,b=-h*.5,p=n.p||'b';
  g=`<ellipse class="sh" cx="0" cy="${f1(ry*.4)}" rx="${f1(r*1.15)}" ry="${f1(ry*.9)}"/>`+`<path class="ol" d="M${-r} ${-h}V0A${r} ${ry} 0 0 0 ${r} 0V${-h}Z" fill="url(#s-${p})"/>`+
   `<path class="ol" d="M${-r} ${b}A${r} ${ry} 0 0 0 ${r} ${b}" fill="none"/>`+
   `<ellipse class="ol" cx="0" cy="${-h}" rx="${r}" ry="${ry}" fill="url(#t-${p})"/>`+LED(r*.55,b+ry*.55,s*.022,n.led||'#2ee58a')+
   (n.chip?`<g transform="matrix(.82 ${f1(ISO*.82)} -.82 ${f1(ISO*.82)} 0 ${f1(-h)})"><text class="chip" x="0" y="0" style="fill:var(--ink)">${n.chip}</text></g>`:'');
  top=-h-ry}
 else if(n.t==='ring'){const U=s*.4,Z=s*.07,R=U*.68,ang=[[20,'#86afe8'],[110,'#8fdbb5'],[200,'#c0b1f3'],[290,'#ffc976']];
  let t=`<circle cx="0" cy="0" r="${f1(R)}" fill="none" stroke="#e9eef2" stroke-width="3"/>`;
  for(const a of [55,75,150,170,240,255,330,350])t+=`<circle cx="${f1(R*Math.cos(a*Math.PI/180))}" cy="${f1(R*Math.sin(a*Math.PI/180))}" r="${f1(U*.05)}" fill="#e9eef2"/>`;
  for(const [a,c] of ang)t+=`<circle class="olt" cx="${f1(R*Math.cos(a*Math.PI/180))}" cy="${f1(R*Math.sin(a*Math.PI/180))}" r="${f1(U*.13)}" fill="${c}"/>`;
  g=csh(U,U)+box(U,U,Z,0,DARK,{top:t});top=-2*U*ISO-Z}
 else return null;
 return {g,top}};
"""

DBINDEX = r"""
const NODES={app:{t:'mon',scr:'SELECT',l:'앱',e:'App',tile:'w'},engine:{t:'srv',chip:'SQL',l:'DB 엔진',e:'Query engine',tile:'g'},root:{t:'tree',hl:'root',l:'인덱스 (B-트리)',e:'Index · B-tree',tile:'v'},leaf:{t:'cards',l:'인덱스 잎',e:'Sorted leaves',tile:'a'},table:{t:'tbl',hl:3,l:'테이블',e:'Table · 10M rows',tile:'b'}};
const LAND={app:[0,.5],engine:[.3,.5],root:[.62,0],leaf:[1,.3],table:[.8,1]};
const PORT={app:[.15,0],engine:[.15,.42],root:[.85,.22],leaf:[.85,.7],table:[.3,1]};
const ZONES=[{ids:['root','leaf'],l:'INDEX',c:'core'}];
const ALL=[['app','engine'],['engine','table'],['engine','root'],['root','leaf'],['leaf','table']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['app','engine','root','leaf','table'];
const STEPS=[
{t:'1,000만 줄에서 한 줄 찾기',te:'One row among ten million',se:'A users table has ten million rows. How does the database find one email quickly?',s:'회원 1,000만 명이 담긴 테이블에서 이메일 하나로 한 사람을 찾아야 한다.',show:SHOW,e:act(...ALL),m:['5개 지점','—','—','두꺼운 전화번호부'],
 x:'로그인할 때마다 앱은 데이터베이스에 "이메일이 kim@zuply.kr인 회원을 찾아 줘"라고 묻습니다. 회원 테이블에 1,000만 줄이 있다면, 그중 딱 한 줄을 골라내야 합니다. 데이터베이스는 데이터를 페이지라는 묶음(흔히 8~16 KB) 단위로 디스크에서 읽고, 한 페이지에는 회원 약 100명이 들어갑니다. 그러니 테이블 전체는 약 10만 페이지, 1.6 GB쯤 됩니다. 빠른 검색이란 결국 "이 10만 페이지 중 몇 장만 읽고 끝내느냐"의 문제입니다.',
 k:'디스크와 메모리 사이를 오가는 페이지 수가 쿼리 속도를 거의 결정합니다. CPU가 비교하는 시간은 그에 비하면 아주 작습니다.',
 f:[{n:['app','Find kim@zuply.kr']},{n:['table','10M rows · 100K pages']},{n:['root','Index: sorted emails']}]},
{t:'인덱스가 없으면 전부 훑는다',te:'No index: scan the whole table',se:'Without an index, the database reads every page and checks every row.',s:'인덱스가 없으면 데이터베이스는 첫 페이지부터 마지막 페이지까지 모두 읽는다.',show:SHOW,e:act(['app','engine'],['engine','table']),m:['테이블 전체','약 10만 페이지','수 초','책을 첫 장부터 넘기기'],
 x:'인덱스가 없으면 DB 엔진은 테이블의 페이지를 처음부터 차례로 읽으며, 줄마다 이메일이 같은지 비교합니다. 이를 전체 테이블 스캔(full table scan)이라고 합니다. 예시 테이블이라면 약 10만 페이지, 1.6 GB를 읽어야 하므로 디스크에서 읽으면 수 초가 걸릴 수 있습니다. 찾는 사람이 앞쪽에 있어도, 이메일이 유일하다는 보장이 없으면 끝까지 읽어야 합니다. 회원이 2배가 되면 읽을 양도, 시간도 약 2배가 됩니다.',
 k:'로그인 한 번에 수 초라면, 동시에 100명만 로그인해도 디스크가 포화됩니다. 느린 쿼리 하나가 다른 쿼리까지 줄 세우게 됩니다.',
 f:[['app','engine','WHERE email = kim@…'],{n:['engine','No index → scan']},['engine','table','Page 1','push'],['engine','table','Page 2','push'],{n:['table','… page 100,000']},['table','engine','1 match','ack'],{n:['engine','100K pages read']},['engine','app','Found · ~3 s','ack']]},
{t:'인덱스는 정렬된 목차',te:'An index is a sorted lookup',se:'An index stores the emails in sorted order, each with a pointer to its row.',s:'인덱스는 이메일만 따로 정렬해 두고, 각 이메일 옆에 원래 줄의 위치를 적어 둔다.',show:SHOW,e:act(['engine','root'],['root','leaf']),m:['인덱스','이메일 + 줄 위치','—','책 뒤의 찾아보기'],
 x:'CREATE INDEX 명령으로 이메일 열에 인덱스를 만들면, 데이터베이스는 테이블과 별도로 "이메일 → 줄의 위치" 목록을 가나다순으로 정리해 저장합니다. 대부분의 관계형 데이터베이스는 이 목록을 B-트리(B-tree)라는 나무 모양으로 만듭니다. 맨 아래 잎 페이지들에 정렬된 이메일과 위치가 차례로 담기고, 그 위의 가지와 뿌리 페이지에는 "a~k는 이쪽, l~z는 저쪽" 같은 갈림길만 적혀 있습니다. 예를 들어 kim@zuply.kr은 k로 시작하므로 왼쪽 가지로 내려가면 됩니다.',
 k:'정렬되어 있다는 것이 핵심입니다. 정렬된 목록에서는 "이 범위에는 없다"는 것을 바로 알 수 있어, 나머지 대부분을 아예 보지 않아도 됩니다.',
 f:[{n:['root','Root: a–k | l–z']},['root','leaf','k… → left branch','push'],{n:['leaf','…, kim@…, kwon@…']},{n:['leaf','kim@ → row 4,821,377']}]},
{t:'페이지 4장으로 찾는다',te:'Four page reads instead of 100,000',se:'The B-tree is wide and shallow: about three index pages plus one table page.',s:'B-트리는 넓고 낮아서 인덱스 3장, 테이블 1장, 모두 약 4페이지만 읽으면 된다.',show:SHOW,e:act(['app','engine'],['engine','root'],['root','leaf'],['leaf','table']),m:['인덱스 → 테이블','약 4페이지','약 1 ms','찾아보기 보고 바로 펴기'],
 x:'B-트리의 한 페이지에는 갈림길이 수백 개 들어갑니다. 한 페이지에 300개라면 뿌리 1장 아래에 300장, 그 아래에 9만 장이 달리므로, 3단계만으로 약 2,700만 개를 구분할 수 있습니다. 그래서 1,000만 명 중 kim@zuply.kr을 찾는 데 뿌리, 가지, 잎 3장을 읽고, 잎에 적힌 위치로 테이블 페이지 1장을 더 읽으면 끝납니다. 자주 쓰는 뿌리와 가지는 보통 메모리에 있어서 실제 디스크 읽기는 1~2번 정도입니다.',
 k:'데이터가 1,000배로 늘어도 B-트리는 한두 단계만 깊어집니다. 전체 스캔은 데이터에 비례해 느려지지만, 인덱스 검색은 거의 같은 속도를 유지합니다.',
 f:[['app','engine','WHERE email = kim@…'],['engine','root','Read root (1)'],{n:['root','k… → branch (2)']},['root','leaf','Read leaf (3)','push'],{n:['leaf','kim@ → row 4,821,377']},['leaf','table','Read page (4)','push'],['table','engine','1 row','ack'],{n:['engine','4 pages read']},['engine','app','Found · ~1 ms','ack']]},
{t:'대신 쓰기는 조금 느려진다',te:'The cost: slower writes',se:'Every insert must also place the new key into each index, in sorted order.',s:'새 줄을 넣을 때마다 모든 인덱스에도 정렬 순서에 맞춰 끼워 넣어야 한다.',show:SHOW,e:act(['app','engine'],['engine','table'],['engine','root'],['root','leaf']),m:['테이블 + 인덱스','인덱스 수만큼 추가','쓰기 느려짐','목차도 다시 쓰기'],
 x:'새 회원 lee@zuply.kr이 가입하면 테이블에 줄을 하나 추가할 뿐 아니라, 이메일 인덱스에서도 l로 시작하는 자리를 찾아 끼워 넣어야 합니다. 그 잎 페이지가 꽉 차 있으면 페이지를 둘로 나누고 위쪽 갈림길도 고치는 분할(split)이 일어납니다. 테이블에 인덱스가 5개 있다면 가입 한 번에 테이블 1곳과 인덱스 5곳을 고치는 셈입니다. 인덱스 자체도 디스크 공간을 차지해서, 인덱스가 테이블보다 커지는 일도 드물지 않습니다.',
 k:'읽기는 많고 쓰기는 적은 테이블일수록 인덱스가 이득입니다. 초당 수만 건씩 기록만 쌓는 로그 테이블이라면 인덱스를 최소로 두는 편이 낫습니다.',
 f:[['app','engine','INSERT lee@…'],{p:[['engine','table','Append row'],['engine','root','Find l… slot','push']]},['root','leaf','Insert in order'],{n:['leaf','Page full → split']},{n:['engine','1 row = 1 + 5 writes']}]},
{t:'어느 열에 만들까',te:'Which columns to index',se:'Index columns used often in WHERE, JOIN or ORDER BY that have many distinct values.',s:'자주 찾고, 잇고(JOIN), 정렬하는 열 중 값이 다양한 열에 인덱스를 만든다.',show:SHOW,e:act(['app','engine'],['engine','root']),m:['DB 엔진','—','EXPLAIN으로 확인','자주 찾는 단어만 목차에'],
 x:'인덱스는 WHERE 조건, JOIN, ORDER BY에 자주 등장하는 열에 만드는 것이 기본입니다. 그리고 값이 다양할수록 효과가 큽니다. 이메일은 1,000만 줄이 거의 모두 달라서 한 줄로 바로 좁혀지지만, 회원 상태(정상, 휴면, 탈퇴)처럼 값이 3가지뿐이면 "정상"만 해도 수백만 줄이라 인덱스를 거쳐도 많이 읽어야 합니다. 이럴 때 DB 엔진은 인덱스를 무시하고 그냥 스캔하기도 합니다. 실제로 인덱스를 쓰는지는 EXPLAIN 명령으로 실행 계획을 보면 확인할 수 있습니다.',
 k:'인덱스를 만들어도 WHERE LOWER(email) = …처럼 열에 함수를 씌우면 정렬 순서를 쓸 수 없어 무시됩니다. 쿼리 모양도 인덱스에 맞춰야 합니다.',
 f:[['app','engine','EXPLAIN SELECT …'],{n:['engine','email: 10M distinct']},{n:['engine','status: 3 values']},['engine','root','Use email index','push'],{n:['root','status: scan instead']}]},
{t:'여러 열 인덱스는 순서가 중요',te:'Composite indexes: order matters',se:'An index on (city, age) is sorted by city first, so age alone cannot use it well.',s:'(도시, 나이) 인덱스는 도시로 먼저 정렬되므로, 나이만으로 찾을 때는 제대로 쓰이지 않는다.',show:SHOW,e:act(['app','engine'],['engine','root'],['root','leaf'],['leaf','table']),m:['복합 인덱스','—','왼쪽 열부터','성, 이름 순 전화번호부'],
 x:'여러 열을 묶은 인덱스를 복합 인덱스라고 합니다. (city, age) 인덱스는 먼저 도시로 정렬하고, 같은 도시 안에서 다시 나이로 정렬합니다. 그래서 "서울에 사는 30세"는 서울 구간 안의 30세 구간으로 바로 내려가 빠르게 찾습니다. "서울에 사는 사람"도 앞 열만 쓰면 되므로 빠릅니다. 하지만 "30세인 사람"만 찾으면 30세가 도시마다 흩어져 있어 인덱스를 거의 처음부터 다 훑어야 합니다.',
 k:'같다(=)로 찾는 열을 앞에, 범위(>, BETWEEN)로 찾는 열을 뒤에 두는 것이 일반적인 요령입니다. 범위 조건 뒤에 오는 열은 정렬의 도움을 받기 어렵기 때문입니다.',
 f:[{n:['root','(city, age) sorted']},['app','engine','city=Seoul AND age=30'],['engine','root','Seoul → 30','push'],['root','leaf','Seoul, 30, …'],['leaf','table','Matching rows'],{n:['engine','Uses both: fast']},['app','engine','age = 30 only'],{n:['engine','City first: no help']}]}];
const MLAB=['지금 일하는 곳','읽는 양','걸리는 시간','비유'];
"""

SQLNOSQL = r"""
const NODES={app:{t:'mon',scr:'App',l:'앱',e:'App',tile:'w'},sql:{t:'tbl',p:'b',l:'관계형 DB',e:'SQL · tables',tile:'b'},doc:{t:'docs',p:'a',l:'문서형',e:'Document',tile:'a'},kv:{t:'kv',l:'키-값',e:'Key-value',tile:'g'},wide:{t:'wcol',l:'와이드 컬럼',e:'Wide-column',tile:'m'},graph:{t:'graph',l:'그래프',e:'Graph',tile:'v'}};
const SCALE=.9;
const LAND={sql:[0,.5],app:[.4,.5],doc:[.78,0],kv:[1,.4],wide:[1,1],graph:[.7,1]};
const PORT={sql:[.5,0],app:[.5,.36],doc:[0,.7],kv:[.24,1],wide:[.76,1],graph:[1,.7]};
const ZONES=[{ids:['sql'],l:'SQL'},{ids:['doc','kv','wide','graph'],l:'NOSQL',c:'core'}];
const ALL=[['app','sql'],['app','doc'],['app','kv'],['app','wide'],['app','graph']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['app','sql','doc','kv','wide','graph'];
const STEPS=[
{t:'데이터를 담는 두 가지 방식',te:'Two ways to store data',se:'SQL databases use tables with fixed columns. NoSQL is a family of other shapes.',s:'SQL은 정해진 칸이 있는 표에 담고, NoSQL은 표가 아닌 여러 모양으로 담는다.',show:SHOW,e:act(...ALL),m:['5가지 모양','—','—','서류철과 여러 상자'],
 x:'데이터베이스는 크게 두 계열로 나뉩니다. SQL(관계형) 데이터베이스는 데이터를 행과 열로 된 표에 담고, SQL이라는 언어로 질문합니다. PostgreSQL, MySQL, Oracle이 대표적입니다. NoSQL은 표만 고집하지 않는 데이터베이스들을 묶어 부르는 말로, 문서형, 키-값, 와이드 컬럼, 그래프처럼 서로 꽤 다른 종류가 있습니다. 이 레슨에서는 쇼핑몰 하나를 예로 들어, 같은 서비스의 데이터가 어디에 어떻게 담기는지 비교합니다.',
 k:'NoSQL은 하나의 제품이나 기술이 아니라 "관계형이 아닌 것들"의 모음입니다. 그래서 "NoSQL이 더 빠르다"처럼 한 문장으로 비교할 수 없습니다.',
 f:[{n:['sql','Rows & columns']},{n:['doc','JSON documents']},{n:['kv','key → value']},{n:['wide','Huge sparse rows']},{n:['graph','Nodes & links']}]},
{t:'SQL: 스키마와 JOIN',te:'SQL: schema and joins',se:'Data is split into tables with a fixed schema, then joined back together when you ask.',s:'데이터를 여러 표로 나눠 정해진 형식(스키마)으로 담고, 필요할 때 JOIN으로 다시 잇는다.',show:SHOW,e:act(['app','sql']),m:['표 (행 · 열)','미리 정한다','JOIN, 복잡한 질문','칸이 정해진 서류철'],
 x:'관계형 데이터베이스는 먼저 스키마를 정합니다. 회원 표에는 번호, 이름, 이메일 열이, 주문 표에는 주문 번호, 회원 번호, 금액 열이 있다고 정해 두고, 형식에 맞지 않는 데이터는 거부합니다. 주문 표에는 회원 이름 대신 회원 번호 7만 적어 둡니다. "김 씨의 지난달 주문 합계"를 물으면 JOIN으로 두 표를 회원 번호로 이어 한 번에 답합니다. 김 씨가 이름을 바꿔도 회원 표의 한 줄만 고치면 모든 주문에 반영됩니다.',
 k:'같은 정보를 한곳에만 두는 것을 정규화라고 합니다. 데이터가 어긋날 틈이 적은 대신, 읽을 때마다 표를 잇는 비용을 냅니다.',
 f:[['app','sql','SELECT … JOIN orders'],{n:['sql','users.id = orders.user_id']},{n:['sql','Kim: 3 orders']},['sql','app','Total ₩182,000','ack']]},
{t:'SQL: 트랜잭션',te:'SQL: transactions',se:'A transaction groups several changes so they all succeed or all fail together.',s:'트랜잭션은 여러 변경을 하나로 묶어, 모두 성공하거나 모두 취소되게 한다.',show:SHOW,e:act(['app','sql']),m:['표 (행 · 열)','미리 정한다','전부 아니면 전무','계좌 이체'],
 x:'주문 한 건은 여러 변경으로 이루어집니다. 재고를 1개 줄이고, 주문 줄을 추가하고, 포인트 1,000점을 깎아야 합니다. 재고만 줄이고 주문을 쓰기 전에 서버가 멈추면, 물건은 사라졌는데 주문은 없는 이상한 상태가 됩니다. 트랜잭션은 세 작업을 하나로 묶어 모두 성공하면 확정(COMMIT)하고, 하나라도 실패하면 처음 상태로 되돌립니다(ROLLBACK). 이런 보장을 흔히 ACID(원자성, 일관성, 격리성, 지속성)라고 부릅니다.',
 k:'격리성 덕분에 마지막 재고 1개를 두 사람이 동시에 사도, 한 사람만 성공합니다. 이 보장을 앱 코드로 직접 만들기는 생각보다 어렵습니다.',
 f:[['app','sql','BEGIN'],{n:['sql','stock: 5 → 4']},{n:['sql','+ order #1042']},{n:['sql','points: −1,000']},['app','sql','COMMIT','push'],['sql','app','All 3 saved','ack']]},
{t:'문서형과 키-값',te:'Document and key-value stores',se:'Document stores keep flexible JSON. Key-value stores fetch a value by its key, very fast.',s:'문서형은 형식이 자유로운 JSON 문서를, 키-값은 열쇠 하나로 값을 아주 빠르게 꺼낸다.',show:SHOW,e:act(['app','doc'],['app','kv']),m:['JSON · 키와 값','유연하다','빠른 읽기·쓰기','상자와 사물함'],
 x:'문서형 데이터베이스(MongoDB 등)는 상품 하나를 JSON 문서 하나에 통째로 담습니다. 옷이라면 사이즈와 색상, 노트북이라면 CPU와 무게처럼 상품마다 항목이 달라도 같은 곳에 저장할 수 있고, 한 번 읽으면 필요한 정보가 다 나옵니다. 키-값 저장소(Redis, DynamoDB 등)는 더 단순해서, "cart:7" 같은 열쇠로 값을 넣고 꺼내는 일만 합니다. 대신 Redis는 데이터를 메모리에 두어 1 ms 안쪽으로 답합니다. 그래서 장바구니, 로그인 세션, 캐시에 많이 쓰입니다.',
 k:'유연한 스키마는 스키마가 없다는 뜻이 아닙니다. 형식을 지키는 책임이 데이터베이스에서 앱 코드로 옮겨 온 것입니다.',
 f:[['app','doc','Save product {…}'],{n:['doc','{size, color, …}']},['app','kv','GET cart:7','push'],{n:['kv','Key lookup in RAM']},['kv','app','[shirt, mug] · <1 ms','ack']]},
{t:'와이드 컬럼과 그래프',te:'Wide-column and graph stores',se:'Wide-column stores take huge write streams. Graph databases follow links between things.',s:'와이드 컬럼은 엄청난 양의 쓰기를, 그래프는 사물 사이의 연결을 따라가는 일을 잘한다.',show:SHOW,e:act(['app','wide'],['app','graph']),m:['넓은 행 · 점과 선','유연하다','대량 쓰기 · 관계 탐색','장부와 인맥도'],
 x:'와이드 컬럼 데이터베이스(Cassandra 등)는 한 행에 열을 수천 개까지 붙일 수 있고, 처음부터 여러 서버에 나눠 담도록 설계되었습니다. 쇼핑몰의 클릭 기록처럼 초당 수십만 건씩 쏟아지는 데이터를 빠르게 받아 적는 데 강합니다. 그래프 데이터베이스(Neo4j 등)는 회원, 상품 같은 점과 "구매했다", "친구다" 같은 선을 그대로 저장합니다. "내 친구들이 산 상품 중 내가 안 산 것"처럼 연결을 두세 단계 따라가는 추천 질문을 빠르게 처리합니다.',
 k:'관계형 DB로도 같은 추천을 할 수 있지만, 단계마다 JOIN이 한 겹씩 늘어 데이터가 크면 급격히 느려집니다. 그래프 DB는 선을 따라가는 비용이 데이터 전체 크기와 거의 무관합니다.',
 f:[['app','wide','Click log ×100K/s','push'],{n:['wide','Append, spread out']},['app','graph','Friends bought?'],{n:['graph','Me → friends → items']},['graph','app','3 picks','ack']]},
{t:'늘리는 방식이 다르다',te:'They scale differently',se:'SQL databases usually scale up one big machine. Many NoSQL stores spread out over many.',s:'SQL은 주로 한 대를 키우고, 많은 NoSQL은 처음부터 여러 대로 나눠 담도록 만들어졌다.',show:SHOW,e:act(...ALL),m:['서버 여러 대','—','수직 vs 수평 확장','큰 창고 vs 여러 창고'],
 x:'관계형 데이터베이스는 JOIN과 트랜잭션이 한곳에 모인 데이터를 전제로 하기 때문에, 보통 서버 한 대를 더 큰 서버로 바꾸는 수직 확장으로 버팁니다. 요즘 서버 한 대는 메모리 수 TB까지 가능해서 생각보다 멀리 갑니다. 많은 NoSQL은 처음부터 데이터를 여러 서버에 나눠 담는 수평 확장을 염두에 두고, 그 대가로 여러 서버에 걸친 JOIN을 빼거나 일관성을 조금 느슨하게 했습니다. 다만 요즘은 경계가 흐려져, 여러 대로 나뉘는 분산 SQL도, 트랜잭션을 지원하는 MongoDB도 있습니다.',
 k:'느슨한 일관성이란, 방금 쓴 값을 다른 서버에서 잠깐 옛 값으로 읽을 수 있다는 뜻입니다. 좋아요 수라면 괜찮지만 계좌 잔액이라면 곤란합니다.',
 f:[{n:['sql','Bigger machine']},{n:['wide','+ more machines']},{n:['kv','+ more machines']},{n:['doc','+ more machines']}]},
{t:'무엇을 고를까',te:'How to choose',se:'Start from your data and questions. Many apps use SQL at the core with NoSQL beside it.',s:'데이터의 모양과 자주 하는 질문을 보고 고른다. 여러 데이터베이스를 함께 쓰는 서비스도 많다.',show:SHOW,e:act(...ALL),m:['앱 전체','—','용도에 맞게','연장통의 도구'],
 x:'데이터 사이의 관계가 많고 숫자가 정확해야 한다면 관계형 데이터베이스가 좋은 출발점입니다. 상품 정보처럼 형식이 제각각이면 문서형, 세션과 캐시는 키-값, 쏟아지는 기록은 와이드 컬럼, 추천처럼 관계를 따라가는 일은 그래프가 잘 맞습니다. 실제 쇼핑몰은 주문과 결제는 PostgreSQL에, 장바구니는 Redis에, 클릭 기록은 Cassandra에 두는 식으로 여러 개를 함께 씁니다. 이를 폴리글랏 퍼시스턴스라고 부릅니다.',
 k:'데이터베이스가 늘수록 백업, 모니터링, 데이터 동기화 부담도 늘어납니다. 꼭 필요할 때만 하나씩 더하는 것이 좋습니다.',
 f:[['app','sql','Orders, payments'],['app','kv','Carts, sessions'],['app','wide','Click logs'],['app','graph','Recommendations'],{n:['app','Right tool, each job']}]}];
const MLAB=['데이터 모양','스키마','강점','비유'];
"""

REPLICATION = r"""
const NODES={user:{t:'ph',l:'사용자',e:'Users',tile:'a'},app:{t:'srv',chip:'APP',l:'앱 서버',e:'App server',tile:'g'},leader:{t:'cyl',p:'a',chip:'R/W',led:'#f5a300',l:'리더',e:'Leader (primary)',tile:'a'},f1:{t:'cyl',p:'b',chip:'R',l:'팔로워 1',e:'Follower 1',tile:'b'},f2:{t:'cyl',p:'b',chip:'R',l:'팔로워 2',e:'Follower 2',tile:'b'}};
const LAND={user:[0,.05],app:[.5,.05],f1:[.15,1],leader:[.5,1],f2:[.85,1]};
const PORT={user:[.12,0],app:[.5,.3],f1:[0,.92],leader:[.5,1],f2:[1,.92]};
const ZONES=[{ids:['f1','leader','f2'],l:'DATABASE CLUSTER'}];
const ALL=[['user','app'],['app','leader'],['app','f1'],['app','f2'],['leader','f1'],['leader','f2']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['user','app','leader','f1','f2'];
const STEPS=[
{t:'같은 데이터를 여러 벌로',te:'The same data, several copies',se:'Replication keeps identical copies of the database on several servers.',s:'복제는 같은 데이터베이스를 여러 서버에 똑같이 복사해 두는 것이다.',show:SHOW,e:act(...ALL),m:['3대','—','같은 내용 3벌','원본과 복사본'],
 x:'초당 읽기 5,000건, 쓰기 200건을 받는 커뮤니티 서비스가 있다고 해 봅시다. 데이터베이스 서버가 한 대뿐이면, 그 서버의 디스크가 고장 나는 순간 서비스가 멈추고 데이터를 잃을 수도 있습니다. 또 읽기가 계속 늘면 한 대로는 버티기 어렵습니다. 그래서 같은 데이터를 여러 서버에 복사해 둡니다. 가장 흔한 방식은 쓰기를 받는 리더 한 대와, 리더를 따라 복사하는 팔로워 여러 대로 역할을 나누는 것입니다.',
 k:'복제는 백업과 다릅니다. 실수로 DELETE를 실행하면 그 삭제도 팔로워에 그대로 복제됩니다. 시간을 되돌리려면 별도의 백업이 필요합니다.',
 f:[{n:['leader','Original']},{n:['f1','Copy']},{n:['f2','Copy']}]},
{t:'쓰기는 리더에게',te:'Writes go to the leader',se:'Only the leader accepts writes, then streams each change to its followers.',s:'쓰기는 리더만 받고, 리더는 바뀐 내용을 변경 기록에 적어 팔로워들에게 보낸다.',show:SHOW,e:act(['user','app'],['app','leader'],['leader','f1'],['leader','f2']),m:['리더 → 팔로워','수 ms','리더가 가장 최신','본사 공지 → 지점'],
 x:'사용자가 댓글을 쓰면 앱 서버는 이 쓰기를 리더(primary)에게만 보냅니다. 리더는 댓글을 저장하면서, 무엇을 어떤 순서로 바꿨는지를 변경 기록(로그)에 1042번, 1043번처럼 번호를 붙여 적습니다. 팔로워들은 이 로그를 받아 같은 순서대로 똑같이 적용합니다. 같은 순서로 같은 변경을 적용하면 결과도 같아지기 때문에, 세 서버의 내용이 일치하게 됩니다. 쓰는 곳이 한 곳뿐이라 두 서버가 서로 다른 값을 저장하는 충돌도 생기지 않습니다.',
 k:'팔로워는 로그의 몇 번까지 적용했는지 기억합니다. 잠시 연결이 끊겼다가 돌아와도 그 다음 번호부터 받아 이어 갈 수 있습니다.',
 f:[['user','app','Post comment'],['app','leader','INSERT','push'],{n:['leader','Saved · log #1043']},{p:[['leader','f1','Log #1043'],['leader','f2','Log #1043']]},{n:['f1','Applied #1043']},{n:['f2','Applied #1043']}]},
{t:'읽기는 팔로워에게',te:'Reads go to followers',se:'Reads are spread across the followers, so the leader is free to handle writes.',s:'읽기는 팔로워들이 나눠 맡아, 리더는 쓰기에 집중할 수 있다.',show:SHOW,e:act(['user','app'],['app','f1'],['app','f2']),m:['팔로워들','수 ms','—','지점에서 안내'],
 x:'대부분의 서비스는 쓰기보다 읽기가 훨씬 많습니다. 예시 서비스도 읽기가 쓰기의 25배입니다. 그래서 읽기 요청은 팔로워들에게 나눠 보냅니다. 팔로워가 2대면 각자 초당 약 2,500건씩 맡고, 읽기가 더 늘면 팔로워를 3대, 4대로 늘리면 됩니다. 이렇게 읽기 전용 복사본을 읽기 복제본(read replica)이라고도 부릅니다.',
 k:'팔로워를 늘려도 쓰기 성능은 그대로입니다. 모든 쓰기는 여전히 리더 한 대를 거치고, 팔로워가 많을수록 리더가 로그를 보낼 곳도 늘어납니다.',
 f:[{p:[['user','app','Read feed'],['user','app','Read post']]},{p:[['app','f1','SELECT'],['app','f2','SELECT']]},{n:['f1','~2,500 reads/s']},{n:['f2','~2,500 reads/s']},{p:[['f1','app','Rows','ack'],['f2','app','Rows','ack']]}]},
{t:'복제 지연',te:'Replication lag',se:'Copying takes time, so a follower may briefly return old data.',s:'복사에는 시간이 걸려서, 팔로워가 잠깐 옛 데이터를 돌려줄 수 있다.',show:SHOW,e:act(['app','leader'],['app','f2'],['leader','f2']),m:['리더 → 팔로워','보통 1초 미만','팔로워가 잠깐 뒤처짐','늦게 도착한 공지'],
 x:'리더는 보통 쓰기를 저장하자마자 "완료"라고 답하고, 팔로워에게는 그 뒤에 로그를 보냅니다. 이를 비동기 복제라고 합니다. 리더가 1043번까지 적용했는데 팔로워 2는 아직 1042번이라면, 그 틈에 팔로워 2로 간 읽기는 방금 쓴 댓글이 없는 옛 데이터를 받습니다. 이 차이를 복제 지연(replication lag)이라고 하며, 보통은 수 ms~1초 미만이지만 팔로워가 바쁘거나 대량 작업이 돌면 수십 초까지 늘어날 수 있습니다. 시간이 지나면 팔로워도 결국 리더를 따라잡습니다.',
 k:'결국은 같아진다는 이 성질을 최종적 일관성(eventual consistency)이라고 합니다. 지연은 초 단위로 꼭 모니터링해야 하는 지표입니다.',
 f:[['app','leader','INSERT comment','push'],{n:['leader','At log #1043']},['app','f2','SELECT comments'],{n:['f2','Still at #1042']},['f2','app','Comment missing','lost'],['leader','f2','Log #1043'],{n:['f2','Caught up · lag 0.3 s']}]},
{t:'내가 쓴 글은 바로 보이게',te:'Read your own writes',se:'For a short while, read your own changes from the leader so they never seem to vanish.',s:'방금 쓴 사람의 읽기는 잠시 리더에서 읽어, 내 글이 사라진 것처럼 보이지 않게 한다.',show:SHOW,e:act(['user','app'],['app','leader'],['app','f1']),m:['리더 · 팔로워','수 ms','내 글은 항상 보임','작성자는 원본 확인'],
 x:'다른 사람의 댓글이 1초 늦게 보이는 것은 괜찮지만, 내가 쓴 댓글이 새로고침 후 사라지면 사용자는 다시 쓰거나 버그로 신고합니다. 그래서 흔히 "쓰기를 한 사용자는 10초 동안 리더에서 읽는다" 같은 규칙을 둡니다. 다른 방법으로, 쓰기 응답에 로그 번호 1043을 함께 돌려주고, 읽을 때 1043번 이상을 적용한 팔로워에서만 읽게 할 수도 있습니다. 내 프로필처럼 나만 고치는 데이터는 항상 리더에서 읽는 서비스도 많습니다.',
 k:'모든 읽기를 리더로 보내면 복제의 의미가 사라집니다. 반드시 최신이어야 하는 읽기만 골라 리더로 보내는 것이 요령입니다.',
 f:[['user','app','Post + refresh'],['app','leader','INSERT','push'],{n:['app','Kim wrote → leader 10 s']},['app','leader','SELECT (Kim)'],['leader','app','Kim sees comment','ack'],['app','f1','SELECT (others)'],{n:['f1','Others: may lag']}]},
{t:'동기냐 비동기냐',te:'Synchronous vs asynchronous',se:'Synchronous replication waits for a follower before saying done. Safer, but slower.',s:'동기 복제는 팔로워가 받았다고 답할 때까지 기다린 뒤 완료한다. 안전하지만 느리다.',show:SHOW,e:act(['app','leader'],['leader','f1'],['leader','f2']),m:['리더 ↔ 팔로워','왕복 1번 추가','동기: 2곳에 있음','등기 vs 일반 우편'],
 x:'동기 복제에서는 리더가 팔로워로부터 "받았다"는 확인을 받은 뒤에야 앱에 완료를 알립니다. 같은 데이터센터라면 왕복 약 0.5 ms, 다른 지역이라면 수십 ms가 쓰기마다 더해집니다. 대신 리더가 곧바로 고장 나도 그 데이터는 최소 두 곳에 있습니다. 문제는 동기 팔로워가 멈추면 쓰기도 함께 멈춘다는 점입니다. 그래서 흔히 팔로워 하나만 동기로, 나머지는 비동기로 두는 반동기(semi-synchronous) 방식을 씁니다.',
 k:'동기냐 비동기냐는 "고장이 났을 때 최근 쓰기를 잃어도 되는가"라는 질문에 대한 답입니다. 결제 기록과 조회수의 답은 다릅니다.',
 f:[['app','leader','INSERT'],{p:[['leader','f1','Log (sync)','push'],['leader','f2','Log (async)']]},{n:['leader','Waiting for F1…']},['f1','leader','Got it','ack'],['leader','app','Done (+0.5 ms)','ack'],{n:['f1','Safe in 2 places']}]},
{t:'리더가 쓰러지면',te:'Failover: when the leader dies',se:'If the leader fails, a follower is promoted to become the new leader.',s:'리더가 고장 나면 가장 최신인 팔로워가 새 리더로 승격된다.',show:SHOW,e:act(['user','app'],['app','f1'],['leader','f2']).map(([a,b,f])=>a==='leader'?[a,b,'d']:[a,b,f]),st:{leader:'dead'},m:['팔로워 1 → 새 리더','수 초~수십 초','비동기면 일부 유실 가능','부지점장이 대신'],
 x:'새벽 3시에 리더 서버의 전원 장치가 고장 났다고 해 봅시다. 감시 시스템이 리더에게 몇 초 간격으로 확인 신호를 보내다가, 연속으로 답이 없으면 고장이라고 판단합니다. 그리고 로그를 가장 많이 적용한 팔로워(여기서는 1043번까지 받은 동기 팔로워 1)를 새 리더로 승격시키고, 앱의 쓰기와 팔로워 2가 새 리더를 따르도록 바꿉니다. 이 과정을 장애 조치(failover)라고 하며, 보통 수 초에서 수십 초가 걸립니다. 비동기 팔로워가 승격되었다면 옛 리더가 미처 보내지 못한 마지막 쓰기 몇 건은 사라질 수 있습니다.',
 k:'가장 위험한 것은 옛 리더가 다시 살아나 자신이 아직 리더라고 착각하는 경우(split brain)입니다. 그래서 옛 리더는 쓰기를 받지 못하도록 확실히 격리해야 합니다.',
 f:[{n:['leader','Leader down']},{w:500},{n:['f1','Has log #1043']},{n:['f1','Promoted: leader']},['app','f1','INSERT','push'],{n:['f2','Now follows F1']},['f1','app','Saved','ack']]}];
const MLAB=['지금 일하는 곳','걸리는 시간','데이터 상태','비유'];
"""

SHARDING = r"""
const NODES={app:{t:'srv',chip:'APP',l:'앱 서버',e:'App server',tile:'g'},router:{t:'ring',l:'샤드 라우터',e:'Shard router',tile:'m'},A:{t:'cyl',p:'b',chip:'A',l:'샤드 A',e:'Shard A',tile:'b'},B:{t:'cyl',p:'g',chip:'B',l:'샤드 B',e:'Shard B',tile:'g'},C:{t:'cyl',p:'v',chip:'C',l:'샤드 C',e:'Shard C',tile:'v'},D:{t:'cyl',p:'a',chip:'D',l:'샤드 D',e:'Shard D',tile:'a'}};
const SCALE=.9;
const LAND={app:[0,.5],router:[.36,.5],A:[.78,0],B:[1,.4],C:[1,1],D:[.52,1]};
const PORT={app:[.5,0],router:[.5,.4],A:[0,.74],B:[.28,1],C:[.72,1],D:[1,.74]};
const ZONES=[];
const ALL=[['app','router'],['router','A'],['router','B'],['router','C'],['router','D'],['C','D']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const S3=['app','router','A','B','C'];
const SHOW=['app','router','A','B','C','D'];
const R3=[['app','router'],['router','A'],['router','B'],['router','C']];
const STEPS=[
{t:'한 대에 다 담을 수 없다',te:'Too big for one server',se:'When data outgrows one machine, sharding splits it across several databases.',s:'데이터가 한 대에 담기지 않을 만큼 커지면 여러 데이터베이스에 나눠 담는다. 이것이 샤딩이다.',show:S3,e:act(...R3),m:['샤드 3개','각자 약 1/3','—','백과사전을 여러 권으로'],
 x:'회원 3억 명, 데이터 30 TB, 초당 쓰기 5만 건인 메신저를 생각해 봅시다. 이 정도면 가장 큰 서버 한 대로도 저장 공간과 쓰기 속도가 모자랍니다. 복제는 같은 데이터를 여러 벌 만들 뿐이라, 쓰기와 저장 공간 문제는 그대로 남습니다. 샤딩(sharding)은 데이터를 조각(샤드)으로 나눠, 각 서버가 전체의 일부만 맡게 합니다. 샤드 3개라면 각자 약 10 TB, 초당 약 1만 7천 건씩 나눠 맡습니다.',
 k:'실제로는 샤딩과 복제를 함께 씁니다. 각 샤드가 다시 리더와 팔로워를 가져, 조각마다 고장에 대비합니다.',
 f:[{n:['app','30 TB · 50K writes/s']},{n:['A','~10 TB']},{n:['B','~10 TB']},{n:['C','~10 TB']}]},
{t:'키로 나눠 담는다',te:'Split by a shard key',se:'Each row goes to a shard chosen by its shard key, such as the user ID.',s:'회원 번호 같은 샤드 키를 보고 각 데이터가 들어갈 샤드를 정한다.',show:S3,e:act(...R3),m:['샤드 라우터','—','샤드 키','성씨별 서랍'],
 x:'나누는 기준이 되는 값을 샤드 키라고 합니다. 회원 번호를 샤드 키로 정하면, 한 회원의 메시지와 친구 목록은 언제나 같은 샤드에 모여 한 번에 읽을 수 있습니다. 가장 쉬운 방법은 범위로 나누는 것입니다. 1번~1억 번은 A, 1억~2억 번은 B, 그 뒤는 C에 담는 식입니다. 하지만 새로 가입하는 회원은 모두 번호가 크므로 쓰기가 마지막 샤드 C에만 몰립니다. 그래서 해시로 고르게 흩뿌리는 방법을 많이 씁니다.',
 k:'샤드 키는 나중에 바꾸기가 매우 어렵습니다. 여러 샤드에 걸친 JOIN과 트랜잭션은 느리고 복잡해서, 자주 함께 쓰는 데이터가 한 샤드에 모이게 골라야 합니다.',
 f:[['app','router','user 7'],{n:['router','1–100M → A']},['router','A','user 7','push'],['app','router','user 250,000,001'],{n:['router','200M+ → C']},['router','C','new user','push'],{n:['C','All new signups here']}]},
{t:'해시를 N으로 나눈 나머지',te:'hash(key) mod N',se:'Hash the key into a number, divide by the number of shards, and keep the remainder.',s:'키를 해시로 숫자로 바꾸고, 샤드 수로 나눈 나머지로 샤드를 고른다.',show:S3,e:act(['app','router'],['router','A']),m:['샤드 라우터','—','hash % 3','번호표 나머지로 줄 서기'],
 x:'해시 함수는 어떤 값이든 고르게 흩어진 숫자로 바꿔 줍니다. 비슷한 키도 전혀 다른 숫자가 나오기 때문에, 연속된 회원 번호도 샤드에 고르게 퍼집니다. 예를 들어 hash("user:42")가 9,819라면, 샤드 수 3으로 나눈 나머지는 0이므로 샤드 A에 저장합니다. hash("user:43")이 5,330이라면 나머지 2이므로 샤드 C로 갑니다. 같은 키는 언제나 같은 해시값이 나오므로, 읽을 때도 똑같이 계산해 목록을 찾아볼 필요 없이 바로 그 샤드로 갑니다.',
 k:'해시로 흩뿌리면 쓰기는 고르게 퍼지지만, "회원 1번~1000번"처럼 범위로 묻는 질문은 모든 샤드에 물어봐야 합니다. 무엇을 얻고 무엇을 잃는지 함께 봐야 합니다.',
 f:[['app','router','user:42'],{n:['router','hash = 9,819']},{n:['router','9,819 % 3 = 0 → A']},['router','A','user:42','push'],{n:['A','Stored']},['app','router','user:43'],{n:['router','5,330 % 3 = 2 → C']},['router','C','user:43','push']]},
{t:'한 대 늘리면 대이동',te:'Add a server, almost everything moves',se:'Change N from 3 to 4 and about three quarters of all keys land on a different shard.',s:'샤드를 3개에서 4개로 늘리면 나머지가 바뀌어, 데이터의 약 4분의 3이 자리를 옮겨야 한다.',show:SHOW,e:act(['router','A'],['router','B'],['router','C'],['router','D']),m:['모든 샤드','약 75% (22 TB)','hash % 4','반 편성을 처음부터 다시'],
 x:'데이터가 늘어 샤드 D를 추가하면, 이제 나누는 수가 4가 됩니다. 9,819 % 4는 3이므로 user:42는 A에서 D로 옮겨야 합니다. 5,330 % 4는 2라서 user:43은 C에 그대로 남습니다. 문제는 옮겨야 하는 쪽이 대부분이라는 점입니다. 3으로 나눈 나머지와 4로 나눈 나머지가 같은 키는 약 4분의 1뿐이라, 나머지 약 75%, 30 TB 중 약 22 TB가 다른 샤드로 이사해야 합니다.',
 k:'옮기는 동안에는 키마다 옛 위치와 새 위치 중 어디에 있는지 헷갈리는 시간이 생깁니다. 데이터 이동량이 크면 이 위험한 시간도 길어집니다.',
 f:[{n:['D','New shard']},{n:['router','N: 3 → 4']},{n:['router','9,819 % 4 = 3 → D']},{p:[['A','router','Move keys','lost'],['B','router','Move keys','lost'],['C','router','Move keys','lost']]},['router','D','~75% of keys move','push']]},
{t:'일관된 해싱: 고리 위에 놓기',te:'Consistent hashing: the ring',se:'Servers and keys sit on a ring. Each key belongs to the next server clockwise.',s:'서버와 키를 둥근 고리 위에 놓고, 키는 시계 방향으로 처음 만나는 서버에 저장한다.',show:SHOW,e:act(['router','D'],['C','D']),m:['샤드 C → D','약 1/4 (7.5 TB)','고리에서 다음 서버','원탁 자리 배치'],
 x:'일관된 해싱(consistent hashing)은 해시값 범위 0~2³²을 시계 문자판처럼 둥근 고리로 봅니다. 서버 이름도 해시해서 고리 위에 점으로 찍습니다. 예를 들어 A는 12시, B는 4시, C는 8시에 놓입니다. 키는 자기 해시 위치에서 시계 방향으로 가다가 처음 만나는 서버에 저장됩니다. 새 서버 D를 10시에 넣으면, 8시와 10시 사이의 키만 C에서 D로 옮겨 가고 A와 B의 키는 하나도 움직이지 않습니다.',
 k:'서버가 N대일 때 한 대를 더하면 옮겨지는 데이터는 평균 약 1/N입니다. 서버가 빠질 때도 그 서버의 몫만 다음 서버로 넘어갑니다.',
 f:[{n:['router','Key → next clockwise']},{n:['D','Joins at 10 o\'clock']},['C','D','8–10 o\'clock keys','push'],{n:['A','No change']},{n:['B','No change']},{n:['D','~1/4 of data']}]},
{t:'가상 노드로 고르게',te:'Virtual nodes even it out',se:'Each server takes many points on the ring, so every share comes out close to equal.',s:'서버마다 고리 위에 여러 개의 점(가상 노드)을 찍어, 맡는 양을 고르게 맞춘다.',show:SHOW,e:act(['router','A'],['router','B'],['router','C'],['router','D']),m:['모든 샤드','각자 조금씩','서버당 점 수백 개','여러 자리에 나눠 앉기'],
 x:'서버마다 고리 위에 점을 하나씩만 두면, 해시가 찍어 준 위치에 따라 어떤 서버는 고리의 40%를, 어떤 서버는 10%를 맡는 불공평이 생깁니다. 앞 단계에서 D가 C의 몫만 가져온 것도 같은 문제입니다. 그래서 서버 하나를 "A-1, A-2, … A-200"처럼 수백 개의 가상 노드로 고리 곳곳에 흩어 놓습니다. 그러면 각 서버의 몫이 평균에 가까워지고, D가 들어올 때도 A, B, C에서 조금씩 데이터를 받아 부담이 한 서버에 몰리지 않습니다.',
 k:'성능이 두 배인 서버에 가상 노드를 두 배 주면 데이터도 두 배 맡길 수 있습니다. Cassandra, DynamoDB가 이런 방식을 씁니다.',
 f:[{n:['A','A × 200 points']},{n:['D','D × 200 points']},{p:[['A','router','A little'],['B','router','A little'],['C','router','A little']]},['router','D','Even 25% share','push'],{n:['router','Each ~25%']}]},
{t:'한 키에 몰리는 핫 키',te:'Hot keys',se:'If one key gets huge traffic, its shard is overloaded no matter how you split.',s:'인기 있는 키 하나에 요청이 몰리면, 아무리 잘 나눠도 그 샤드만 과부하가 걸린다.',show:SHOW,e:act(['app','router'],['router','B']),m:['샤드 B','—','캐시 · 키 쪼개기','한 계산대에만 긴 줄'],
 x:'구독자 1,000만 명인 유명인이 새 글을 올리면, 몇 분 사이에 초당 수십만 건의 읽기가 그 글 하나에 몰립니다. 그 글의 키가 있는 샤드 B만 바빠지고, A, C, D는 한가합니다. 샤드를 아무리 늘려도 그 키는 여전히 한곳에 있으니 소용이 없습니다. 이럴 때는 그 글을 캐시(Redis 등)에 올려 샤드까지 오지 않게 하거나, "post:99#1 … post:99#10"처럼 키 뒤에 번호를 붙여 10개 샤드에 복사해 나눠 읽게 합니다.',
 k:'샤딩은 요청이 키 전체에 고르게 퍼진다는 가정 위에서 동작합니다. 그래서 키별 요청 수를 측정해 핫 키를 미리 찾아내는 것이 중요합니다.',
 f:[['app','router','post:99'],['router','B','post:99','beat'],['router','B','post:99','beat'],['router','B','post:99','beat'],{n:['B','Overloaded · 300K/s']},{n:['A','Idle']},{n:['router','Fix: cache or split key']}]}];
const MLAB=['지금 일하는 곳','옮겨지는 데이터','규칙','비유'];
"""

out.update({
    "dbindex": lesson(TPL, title="데이터베이스 인덱스", h1="인덱스는 어떻게 빨리 찾을까",
                      lead="1,000만 줄에서 한 줄을 찾을 때, 인덱스가 있으면 페이지 몇 장만 읽으면 됩니다. 전체 스캔, B-트리, 쓰기 비용, 복합 인덱스를 7단계로 따라가 보세요.",
                      aria="데이터베이스 인덱스 구성도", note="페이지 수와 시간은 일반적인 관계형 데이터베이스 기준 대략값입니다.",
                      rtitle="How Database Indexes Work", data=ICONS + DBINDEX),
    "sqlnosql": lesson(TPL, title="SQL과 NoSQL", h1="표에 담을까, 다르게 담을까",
                       lead="관계형 데이터베이스와 여러 NoSQL은 데이터를 담는 모양도, 잘하는 일도 다릅니다. 쇼핑몰 하나를 예로 스키마, JOIN, 트랜잭션, 확장 방식을 7단계로 비교해 보세요.",
                       aria="SQL과 NoSQL 데이터베이스 구성도", note="제품 이름은 각 계열의 대표적인 예시입니다. 실제 기능은 제품과 버전마다 다릅니다.",
                       rtitle="SQL vs NoSQL", data=ICONS + SQLNOSQL),
    "replication": lesson(TPL, title="데이터베이스 복제", h1="데이터를 여러 벌 두는 이유",
                          lead="리더가 쓰기를 받고 팔로워가 따라 복사합니다. 읽기 분산, 복제 지연, 동기·비동기, 장애 조치를 7단계로 따라가 보세요.",
                          aria="데이터베이스 복제 구성도", note="걸리는 시간은 같은 데이터센터 안의 일반적인 대략값입니다.",
                          rtitle="Database Replication", data=ICONS + REPLICATION),
    "sharding": lesson(TPL, title="샤딩과 일관된 해싱", h1="데이터를 여러 서버에 나누는 법",
                       lead="데이터가 너무 크면 조각내어 여러 서버에 담습니다. 샤드 키, hash mod N, 일관된 해싱, 가상 노드, 핫 키를 7단계로 따라가 보세요.",
                       aria="샤딩 구성도", note="해시값, 용량, 비율은 설명을 위한 예시와 대략값입니다.",
                       rtitle="Sharding and Consistent Hashing", data=ICONS + SHARDING),
})
