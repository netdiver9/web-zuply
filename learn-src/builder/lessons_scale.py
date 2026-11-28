# Scaling-basics lessons: caching / scaling / rate limiting / latency.

CACHING = r"""
const DEV_EXTRA=(n,s)=>{if(n.t==='cache'){const U=s*.34,V=s*.27,Z1=s*.06,U2=U*.86,V2=V*.82,Z=s*.16,k=V2*.95;
 const bolt=`<g transform="rotate(-45)"><path d="M${k*.2} ${-k}L${-k*.48} ${k*.12}H${-k*.02}L${-k*.2} ${k}L${k*.48} ${-k*.16}H${k*.04}Z" fill="#2a2f35" stroke="#2a2f35" stroke-width="1.2" stroke-linejoin="round"/></g>`;
 let chips='';for(let i=0;i<4;i++)chips+=`<rect x="${(2*U2*(.07+i*.235)).toFixed(1)}" y="${(Z*.24).toFixed(1)}" width="${(2*U2*.17).toFixed(1)}" height="${(Z*.52).toFixed(1)}" rx="1" fill="#2a3138"/>`;
 let pins='';for(let i=0;i<9;i++)pins+=`<rect x="${(2*U*(.08+i*.1)).toFixed(1)}" y="${(Z1*.25).toFixed(1)}" width="${(2*U*.05).toFixed(1)}" height="${(Z1*.5).toFixed(1)}" fill="${GOLD}"/>`;
 const g=csh(U,V)+box(U,V,Z1,0,DARK,{lf:pins})+box(U2,V2,Z,Z1,['url(#t-a)','var(--a3)','var(--a4)'],{top:bolt,lf:chips,rf:LED(2*V2*.72,Z*.5,s*.022,'#2ee58a')+LED(2*V2*.88,Z*.5,s*.022,'#2ee58a')});
 return {g,top:-(U2+V2)*ISO-Z1-Z}}return null};
const NODES={client:{t:'mon',scr:'SHOP',l:'웹 브라우저',e:'Web browser',tile:'w'},phone:{t:'ph',l:'모바일 앱',e:'Mobile app',tile:'a'},app:{t:'srv',chip:'APP',l:'앱 서버',e:'App server',tile:'g'},cache:{t:'cache',l:'캐시',e:'Cache (Redis)',tile:'a'},db:{t:'db',l:'데이터베이스',e:'Database',tile:'b'}};
const LAND={client:[0,.1],phone:[0,.95],app:[.38,.55],cache:[1,.05],db:[1,.95]};
const PORT={client:[.12,0],phone:[.88,0],app:[.5,.42],cache:[.12,1],db:[.88,1]};
const ZONES=[{ids:['app','cache','db'],l:'BACKEND'}];
const ALL=[['client','app'],['phone','app'],['app','cache'],['app','db']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['client','phone','app','cache','db'];
const STEPS=[
{t:'자주 쓰는 것은 가까이',te:'Keep hot data close',se:'A cache keeps copies of popular data in memory, so the database is asked less often.',s:'캐시는 자주 찾는 데이터의 복사본을 메모리에 두어 DB까지 가는 일을 줄인다.',show:SHOW,e:act(...ALL),m:['5개 지점','DB 약 20 ms · 캐시 약 1 ms','—','책상 위에 둔 책'],
 x:'온라인 쇼핑몰에서 상품 페이지를 열면, 앱 서버는 상품 이름과 가격, 재고를 데이터베이스(DB)에서 읽어 옵니다. DB는 데이터를 디스크에 안전하게 보관하지만 질의 하나에 약 10~20 ms가 걸리고, 동시에 처리할 수 있는 질의 수에도 한계가 있습니다. 캐시는 자주 찾는 데이터의 복사본을 메모리에 두는 저장소로, Redis와 Memcached가 대표적입니다. 같은 상품 정보를 캐시에서 꺼내면 약 1 ms면 충분합니다. 특가 행사로 1초에 1만 명이 같은 상품을 연다면, 이 차이가 서비스가 버티느냐 못 버티느냐를 가릅니다.',
 k:'캐시는 "키 → 값" 짝으로 저장합니다. product:1001이라는 키에 상품 정보 묶음을 통째로 넣어 두고, 키 하나로 바로 꺼냅니다.',
 f:[{n:['db','Disk · ~20 ms']},{n:['cache','Memory · ~1 ms']},{n:['cache','product:1001 → {…}']},{n:['app','Ask the cache first']}]},
{t:'캐시 미스: 처음엔 DB까지',te:'Cache miss: go to the database',se:'On a miss, the app reads the database, then stores a copy in the cache.',s:'캐시에 없으면(미스) DB에서 읽고, 다음을 위해 캐시에 복사해 둔다.',show:SHOW,e:act(['client','app'],['app','cache'],['app','db']),m:['앱 서버 → DB','약 22 ms','없음 → 저장','책상에 없으면 서고로'],
 x:'오전 10시, 특가 상품 1001번 페이지를 처음 연 사람이 있습니다. 앱 서버는 먼저 캐시에 "product:1001 있어?"라고 묻지만, 아직 아무도 찾지 않았으니 없습니다. 이것을 캐시 미스(miss)라고 합니다. 앱 서버는 DB에서 상품 정보를 읽어 사용자에게 돌려주고, 다음 사람을 위해 그 결과를 캐시에 복사해 둡니다. 캐시를 묻는 1 ms, DB를 읽는 20 ms 남짓을 더해 이 사람은 약 22 ms를 기다렸습니다.',
 k:'앱이 캐시를 먼저 보고, 없으면 DB에서 가져와 채우는 이 방식을 cache-aside라고 합니다. 원본은 언제나 DB에 있고, 캐시는 빨리 꺼내 보기 위한 복사본입니다.',
 f:[['client','app','GET /product/1001'],['app','cache','GET product:1001'],['cache','app','MISS (empty)','ack'],['app','db','SELECT id=1001','push'],{n:['db','Read disk · 20 ms']},['db','app','Row: price 19,900','ack'],['app','cache','SET product:1001','push'],{n:['cache','Stored · TTL 60s']},['app','client','Page · 22 ms','ack']]},
{t:'캐시 히트: DB는 쉰다',te:'Cache hit: the database rests',se:'On a hit, the app answers straight from the cache without touching the database.',s:'캐시에 있으면(히트) DB에 묻지 않고 바로 돌려준다.',show:SHOW,e:act(['phone','app'],['app','cache']),m:['앱 서버 ↔ 캐시','약 2 ms','있음 (HIT)','책상 위 책 바로 펴기'],
 x:'몇 초 뒤, 다른 사람이 모바일 앱으로 같은 상품을 엽니다. 이번에는 캐시에 product:1001이 있으니 캐시 히트(hit)입니다. 앱 서버는 DB에 묻지 않고 캐시의 복사본으로 바로 페이지를 만들어 약 2 ms 만에 돌려줍니다. 처음 사람보다 10배 넘게 빠릅니다. 그 사이 DB는 이 요청 때문에 아무 일도 하지 않았습니다.',
 k:'인기 있는 데이터일수록 효과가 큽니다. 60초 동안 1,000명이 같은 상품을 보면 DB는 한 번만 읽고, 나머지 999번은 캐시가 답합니다.',
 f:[['phone','app','GET /product/1001'],['app','cache','GET product:1001'],['cache','app','HIT · price 19,900','ack'],['app','phone','Page · 2 ms','ack'],{n:['db','Idle']}]},
{t:'TTL: 캐시의 유통기한',te:'TTL: an expiry date',se:'Each entry gets a time to live. When it expires, the next read fetches fresh data.',s:'캐시에 넣을 때 유통기한(TTL)을 정하고, 기한이 지나면 스스로 지운다.',show:SHOW,e:act(['client','app'],['app','cache'],['app','db']),m:['캐시','60초 뒤 만료','만료 → 다시 채움','우유 유통기한'],
 x:'캐시에 넣을 때는 보통 TTL(Time To Live), 즉 유통기한을 함께 정합니다. 아까 product:1001을 넣을 때 TTL을 60초로 정했으니, 60초가 지나면 캐시가 그 항목을 스스로 지웁니다. 그 뒤 처음 온 요청은 다시 미스가 되어 DB에서 최신 정보를 가져오고, 새로 60초짜리 복사본을 넣습니다. 덕분에 캐시 속 데이터는 아무리 오래되어도 60초를 넘지 않습니다. 재고처럼 자주 바뀌는 값은 5초, 상품 설명처럼 거의 안 바뀌는 값은 1시간처럼 데이터마다 다르게 정합니다.',
 k:'TTL이 길면 적중률은 높지만 오래된 값을 보여 줄 수 있고, 짧으면 신선하지만 DB를 자주 찾습니다. "얼마나 오래된 값까지 괜찮은가"를 먼저 정하는 것이 출발점입니다.',
 f:[{n:['cache','product:1001 · TTL 60s']},{n:['cache','TTL 30s']},{n:['cache','TTL 0s']},{n:['cache','product:1001 erased']},['client','app','GET /product/1001'],['app','cache','GET product:1001'],['cache','app','MISS','ack'],['app','db','SELECT id=1001','push'],['db','app','Fresh row','ack'],['app','cache','SET · TTL 60s','push']]},
{t:'바뀌면 캐시를 지운다',te:'Invalidate on change',se:'When data changes, the app updates the database first, then deletes the old cached copy.',s:'데이터가 바뀌면 DB를 먼저 고치고, 캐시의 옛 복사본을 지운다.',show:SHOW,e:act(['client','app'],['phone','app'],['app','cache'],['app','db']),m:['앱 서버','—','지움 (무효화)','바뀐 가격표 떼기'],
 x:'특가 행사가 끝나 판매자가 가격을 19,900원에서 29,900원으로 바꿨습니다. DB의 원본은 바뀌었지만, 캐시에 옛 가격이 남아 있으면 TTL이 끝날 때까지 손님들은 19,900원을 보게 됩니다. 그래서 앱 서버는 DB를 고친 직후 캐시의 product:1001을 지웁니다. 이것을 캐시 무효화(invalidation)라고 합니다. 다음 요청은 미스가 되어 DB에서 새 가격을 읽고, 캐시를 다시 채웁니다.',
 k:'순서가 중요합니다. 캐시를 먼저 지우고 DB를 나중에 고치면, 그 짧은 틈에 다른 요청이 옛 가격을 다시 캐시에 넣을 수 있습니다.',
 f:[['client','app','Price → 29,900'],['app','db','UPDATE price','push'],['db','app','OK','ack'],['app','cache','DEL product:1001','push'],{n:['cache','product:1001 erased']},['phone','app','GET /product/1001'],['app','cache','GET product:1001'],['cache','app','MISS','ack'],['app','db','SELECT id=1001','push'],['db','app','Row: price 29,900','ack'],['app','phone','New price','ack']]},
{t:'적중률과 밀어내기',te:'Hit rate and eviction',se:'With a 95% hit rate, the database handles only 5 of every 100 reads. When memory is full, old entries are evicted.',s:'요청 100개 중 95개를 캐시가 답하면 DB는 5개만 처리한다. 메모리가 차면 오래 안 쓴 것부터 밀어낸다.',show:SHOW,e:act(...ALL),m:['캐시','평균 약 3 ms','적중률 95%','단골 메뉴 미리 준비'],
 x:'전체 요청 중 캐시가 바로 답한 비율을 적중률(hit rate)이라고 합니다. 적중률이 95%라면 1초에 1만 건이 와도 DB는 500건만 처리하면 됩니다. 평균 응답 시간도 히트 2 ms와 미스 22 ms를 섞어 약 3 ms가 됩니다. 다만 캐시는 메모리라서 DB만큼 넉넉하지 않습니다. 가득 차면 가장 오래 쓰지 않은 항목부터 밀어내는데, 이것을 LRU(Least Recently Used) 방식이라고 합니다.',
 k:'모든 데이터를 캐시할 필요는 없습니다. 보통 상위 몇 퍼센트의 인기 상품에 요청 대부분이 몰리기 때문에, 작은 캐시로도 적중률이 높게 나옵니다.',
 f:[{p:[['client','app','×50'],['phone','app','×50']]},['app','cache','100 GETs'],['cache','app','95 HIT','ack'],['app','db','5 MISS → SELECT','push'],{n:['cache','Hit rate 95%']},{n:['cache','Memory full']},{n:['cache','Evict least used (LRU)']}]},
{t:'한꺼번에 미스가 나면',te:'When everyone misses at once',se:'If a hot key expires during a rush, thousands of misses can hit the database together.',s:'인기 항목이 만료되는 순간 요청이 몰리면, 수천 개의 미스가 한꺼번에 DB로 간다.',show:SHOW,e:act(...ALL),m:['DB','수백 ms까지','한꺼번에 미스','문 열자마자 몰린 손님'],
 x:'10시 정각 행사 시작에 맞춰 product:1001의 TTL이 끝났다고 해 봅시다. 바로 그 순간 1,000명이 페이지를 열면, 모두 미스가 나서 1,000개의 같은 질의가 동시에 DB로 몰립니다. 이것을 캐시 쇄도(cache stampede)라고 하며, DB가 느려지거나 멈출 수 있습니다. 흔한 해결책은 첫 요청 하나만 DB에서 읽어 캐시를 채우고 나머지는 잠깐 기다렸다가 캐시에서 읽게 하는 것입니다. TTL에 몇 초씩 무작위 값을 더해 만료 시점을 흩어 놓거나, 행사 전에 미리 캐시를 채워 두기도 합니다.',
 k:'캐시는 DB를 보호하는 방패이기도 합니다. 그래서 캐시가 비거나 멈추는 순간이 가장 위험하며, 큰 서비스는 이 순간을 따로 대비합니다.',
 f:[{n:['cache','product:1001 erased']},{p:[['client','app','×500'],['phone','app','×500']]},['app','cache','1,000 GETs'],['cache','app','1,000 MISS','ack'],['app','db','1,000 SELECTs','push'],{n:['db','Overloaded']},{n:['app','Fix: 1 refills, rest wait']},['app','db','1 SELECT'],['db','app','Row','ack'],['app','cache','SET product:1001','push'],['cache','app','999 HIT','ack']]}];
const MLAB=['지금 일하는 곳','걸리는 시간','캐시 상태','비유'];
"""

SCALING = r"""
const DEV_EXTRA=(n,s)=>{if(n.t==='bigsrv'){const U=s*.3,V=s*.36,Z=s*.8;let rf='';
 for(let i=0;i<6;i++)rf+=`<rect x="${(V*.15).toFixed(1)}" y="${(Z*(.07+i*.14)).toFixed(1)}" width="${(V*1.25).toFixed(1)}" height="${(Z*.085).toFixed(1)}" rx="1" fill="#2a3138"/>`+LED(V*1.7,Z*(.112+i*.14),s*.018,i%3===2?'#f5a300':'#2ee58a');
 let lf='';for(let i=0;i<5;i++)lf+=`<path d="M${(2*U*.2).toFixed(1)} ${(Z*(.12+i*.07)).toFixed(1)}h${(2*U*.6).toFixed(1)}" stroke="#8a959e" stroke-width="1.4" stroke-linecap="round"/>`;
 const g=csh(U,V)+box(U,V,Z,0,['url(#t-m)','var(--m3)','var(--m4)'],{rf,lf,top:`<text class="chip" x="0" y="0" style="fill:#2a3138">${n.chip||''}</text>`});
 return {g,top:-(U+V)*ISO-Z}}return null};
const NODES={users:{t:'ph',l:'사용자',e:'Users',tile:'a'},lb:{t:'lb',l:'로드밸런서',e:'Load balancer',tile:'g'},s1:{t:'srv',chip:'1',l:'서버 1',e:'Server 1',tile:'w'},big:{t:'bigsrv',chip:'XL',l:'큰 서버',e:'Big server (32 CPU)',tile:'w'},s2:{t:'srv',chip:'2',l:'서버 2',e:'Server 2',tile:'w'},s3:{t:'srv',chip:'3',l:'서버 3',e:'Server 3',tile:'w'},store:{t:'db',l:'공유 저장소',e:'Shared DB',tile:'b'}};
const SCALE=.85;
const LAND={users:[0,.5],lb:[.28,.5],s1:[.56,0],big:[.56,0],s2:[.72,.5],s3:[.56,1],store:[1,.5]};
const PORT={users:[.5,0],lb:[.5,.3],s1:[.1,.64],big:[.1,.64],s2:[.5,.64],s3:[.9,.64],store:[.5,1]};
const ZONES=[];
const ALL=[['users','s1'],['users','big'],['users','lb'],['lb','s1'],['lb','s2'],['lb','s3'],['s1','store'],['big','store'],['s2','store'],['s3','store']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const HZ=(...p)=>act(...p).filter(([a,b])=>a!=='users'||b==='lb');
const SHOW=['users','lb','s1','s2','s3','store'];
const STEPS=[
{t:'서버 한 대로 시작한다',te:'Starting with one server',se:'As users grow, a single server gets busy and slow. There are two ways to grow.',s:'사람이 늘면 서버 한 대가 버거워진다. 키우는 방법은 두 가지다.',show:['users','s1','store'],e:act(['users','s1'],['s1','store']),m:['서버 1','수 초까지 느려짐','1대','요리사 한 명인 식당'],
 x:'막 시작한 배달 앱이 있습니다. 서버 한 대(CPU 4개, 메모리 16 GB)와 DB 하나로, 평소 1초에 100건 정도의 요청을 여유 있게 처리합니다. 그런데 점심 12시가 되자 주문이 1초에 1,000건으로 몰리고, CPU 사용률이 95%까지 올라 화면 하나 뜨는 데 몇 초씩 걸립니다. 이때 고를 수 있는 길은 두 가지입니다. 서버를 더 크게 바꾸는 수직 확장과, 서버를 더 늘리는 수평 확장입니다.',
 k:'서버가 느려지면 먼저 어디가 병목인지(CPU, 메모리, DB, 네트워크) 확인해야 합니다. 병목이 아닌 곳을 키우면 돈만 들고 빨라지지 않습니다.',
 f:[['users','s1','×100/s'],['s1','store','Read'],{n:['s1','CPU 10%']},['users','s1','Lunch: ×1000/s','push'],['s1','store','Read ×1000'],{n:['s1','CPU 95% · slow']},{n:['users','Waiting 3 s…']}]},
{t:'수직 확장: 더 큰 기계로',te:'Scale up: a bigger machine',se:'Scaling up means moving to a server with more CPU and memory.',s:'수직 확장은 CPU와 메모리가 더 많은 큰 서버로 바꾸는 것이다.',show:['users','big','store'],e:act(['users','big'],['big','store']),m:['큰 서버','바꾸는 동안 몇 분 멈춤','1대 (더 큼)','요리사를 장인으로'],
 x:'수직 확장(scale up)은 서버에 CPU, 메모리, 디스크를 더 얹거나 더 큰 서버로 바꾸는 것입니다. 클라우드에서는 서버 크기를 CPU 4개짜리에서 32개짜리로 고르고 다시 시작하면 끝납니다. 프로그램은 한 줄도 고칠 필요가 없어서 가장 간단합니다. 새 서버는 점심시간의 1,000건도 CPU 30% 정도로 여유 있게 처리합니다. 다만 서버를 바꾸는 몇 분 동안은 서비스가 멈춥니다.',
 k:'DB처럼 데이터를 여러 대로 나누기 어려운 곳에서는 지금도 수직 확장을 가장 먼저, 가장 많이 씁니다.',
 f:[{n:['big','4 → 32 CPU']},{n:['big','16 → 128 GB RAM']},{n:['big','Restarting · ~3 min']},['users','big','×1000/s','push'],['big','store','Read ×1000'],{n:['big','CPU 30%']}]},
{t:'수직 확장의 한계',te:'The limits of scaling up',se:'Machines have a maximum size, prices climb fast, and one server is a single point of failure.',s:'기계 크기에는 끝이 있고, 값은 빠르게 오르며, 한 대가 멈추면 전부 멈춘다.',show:['users','big','store'],st:{big:'dead'},e:act(['users','big'],['big','store']),m:['큰 서버','멈추면 전부 멈춤','1대뿐','요리사가 아프면 휴업'],
 x:'그런데 한 대를 키우는 데는 끝이 있습니다. 클라우드에서 빌릴 수 있는 가장 큰 서버도 크기가 정해져 있고, 아주 큰 서버일수록 성능에 비해 값이 비싸집니다. 더 큰 문제는 여전히 서버가 한 대뿐이라는 점입니다. 이 서버의 부품 하나가 고장 나거나 보안 업데이트로 재시작하기만 해도, 그동안 들어온 주문은 모두 실패합니다.',
 k:'이렇게 하나가 멈추면 전체가 멈추는 곳을 단일 장애점(SPOF, Single Point of Failure)이라고 합니다. 큰 서비스는 단일 장애점을 하나씩 찾아 없애는 데 많은 노력을 씁니다.',
 f:[{n:['big','Largest size reached']},{n:['big','Crashed']},['users','big','Order','lost'],{n:['users','Error 503']}]},
{t:'수평 확장: 여러 대로 나눈다',te:'Scale out: more machines',se:'Scaling out adds more servers, and a load balancer spreads requests across them.',s:'수평 확장은 서버를 여러 대 두고, 로드밸런서가 요청을 나눠 준다.',show:SHOW,e:HZ(['users','lb'],['lb','s1'],['lb','s2'],['lb','s3'],['s1','store'],['s2','store'],['s3','store']),m:['로드밸런서','1 ms 미만 추가','3대','요리사 여러 명'],
 x:'수평 확장(scale out)은 평범한 서버를 여러 대 두고 일을 나누는 것입니다. 사용자는 로드밸런서라는 하나의 주소로 접속하고, 로드밸런서가 요청을 서버들에 차례로, 또는 덜 바쁜 곳으로 나눠 줍니다. 1초에 1,000건이 오면 서버 3대가 약 333건씩 나눠 맡아 각자 CPU 35% 정도로 일합니다. 사람이 더 늘면 서버를 더 붙이면 되므로 늘릴 수 있는 한계가 훨씬 높습니다. 큰 서비스는 이렇게 수백, 수천 대로 일합니다.',
 k:'작은 서버 여러 대는 필요할 때만 켜고 끌 수 있어 비용을 사용량에 맞추기 쉽습니다. 한 대가 바빠도 나머지가 받쳐 준다는 것도 큰 장점입니다.',
 f:[['users','lb','×1000/s','push'],{n:['lb','Take turns']},{p:[['lb','s1','~333/s'],['lb','s2','~333/s'],['lb','s3','~333/s']]},{p:[['s1','store','Read'],['s2','store','Read'],['s3','store','Read']]},{n:['s2','CPU 35%']}]},
{t:'서버는 기억을 갖지 않는다',te:'Keep servers stateless',se:'Sessions live in a shared store, so any server can handle any request.',s:'로그인 정보 같은 상태는 공유 저장소에 두어, 어느 서버든 같은 요청을 처리하게 한다.',show:SHOW,e:HZ(['users','lb'],['lb','s1'],['lb','s2'],['s1','store'],['s2','store']),m:['공유 저장소','약 1 ms 추가','어느 서버든 같음','공용 주문 장부'],
 x:'서버가 여러 대가 되면 새 문제가 생깁니다. 로그인 요청을 받은 서버 1이 "이 사람은 사용자 7번"이라는 세션 정보를 자기 메모리에만 적어 두면, 장바구니를 여는 다음 요청이 서버 2로 갔을 때 서버 2는 이 사람을 모릅니다. 그래서 세션과 장바구니처럼 요청 사이에 기억해야 할 정보는 서버 밖, 모두가 함께 보는 저장소(DB나 Redis)에 둡니다. 서버 2는 저장소에서 "사용자 7번, 떡볶이 1개와 김밥 2줄"을 읽어 바로 답합니다. 이렇게 스스로는 아무것도 기억하지 않는 서버를 무상태(stateless) 서버라고 합니다.',
 k:'같은 사용자를 늘 같은 서버로 보내는 고정 세션(sticky session)이라는 방법도 있지만, 그 서버가 멈추면 세션도 함께 사라집니다. 그래서 공유 저장소가 더 튼튼합니다.',
 f:[['users','lb','Log in'],['lb','s1','Log in'],['s1','store','SET session:7','push'],{n:['s1','Keeps nothing']},['users','lb','Open cart'],['lb','s2','Open cart'],['s2','store','GET session:7'],['store','s2','User 7 · 2 items','ack'],['s2','lb','Cart','ack'],['lb','users','Cart','ack']]},
{t:'한 대가 멈춰도 계속된다',te:'One fails, the rest carry on',se:'The load balancer checks each server and stops sending traffic to one that fails.',s:'로드밸런서가 서버 상태를 확인하다가 멈춘 서버를 빼고 나머지로 계속 서비스한다.',show:SHOW,st:{s2:'dead'},e:HZ(['users','lb'],['lb','s1'],['lb','s2'],['lb','s3'],['s1','store'],['s3','store']),m:['로드밸런서','몇 초 안에 우회','2대로 계속','교대 근무'],
 x:'수평 확장의 또 다른 장점은 튼튼함입니다. 로드밸런서는 몇 초마다 각 서버에 "살아 있니?"라고 묻는 상태 확인(health check)을 보냅니다. 서버 2가 연달아 대답하지 않으면 목록에서 빼고, 들어오는 1,000건을 서버 1과 3에 500건씩 나눕니다. 사용자는 서버 한 대가 멈춘 줄도 모릅니다. 서버 2가 다시 살아나 대답하면 로드밸런서가 알아서 목록에 다시 넣습니다.',
 k:'그래서 서버는 한 대가 빠져도 버틸 만큼 여유 있게 둡니다. 3대가 필요하면 4대를 두는 식이며, 이것을 N+1 구성이라고 합니다.',
 f:[{n:['s2','Crashed']},['lb','s2','Health check','lost'],{n:['lb','Server 2 removed']},['users','lb','×1000/s','push'],{p:[['lb','s1','500/s'],['lb','s3','500/s']]},{p:[['s1','store','Read'],['s3','store','Read']]},{n:['s1','CPU 52%']}]},
{t:'실제로는 섞어 쓴다',te:'In practice: both',se:'App servers scale out automatically, while the database usually scales up and adds read replicas.',s:'앱 서버는 수평으로 자동으로 늘리고, DB는 보통 수직으로 키우고 복제본을 붙인다.',show:SHOW,e:HZ(['users','lb'],['lb','s1'],['lb','s2'],['lb','s3'],['s1','store'],['s2','store'],['s3','store']),m:['전체','—','점심 10대 · 새벽 2대','바쁜 시간 아르바이트'],
 x:'실제 서비스는 두 방법을 섞어 씁니다. 상태가 없는 앱 서버는 늘리기 쉬워서, 점심시간에는 10대, 새벽에는 2대처럼 사용량에 따라 자동으로 늘리고 줄입니다(오토스케일링). 반면 데이터를 가진 DB는 여러 대로 나누기 어려워 보통 큰 서버로 키우고, 읽기 전용 복제본(replica)을 붙여 읽기 요청을 나눠 받습니다. 그래도 한계에 다다르면 사용자 번호에 따라 데이터를 여러 DB에 나눠 담는 샤딩(sharding)을 씁니다.',
 k:'수직 확장은 간단하지만 끝이 있고, 수평 확장은 복잡하지만 거의 끝없이 늘릴 수 있습니다. 어려운 부분은 언제나 "상태를 어디에 둘 것인가"입니다.',
 f:[['users','lb','Lunch: ×3000/s','push'],{n:['lb','Auto: 3 → 10 servers']},{p:[['lb','s1','Orders'],['lb','s2','Orders'],['lb','s3','Orders']]},{p:[['s1','store','Read'],['s2','store','Read'],['s3','store','Write']]},{n:['store','Scale up + replicas']}]}];
const MLAB=['지금 일하는 곳','걸리는 시간','서버 수','비유'];
"""

RATELIMIT = r"""
const DEV_EXTRA=(n,s)=>{
 if(n.t==='bucket'){const r=s*.32,ry=r*ISO,rb=r*.78,ryb=rb*ISO,h=s*.44,cr=r*.24;let coins='';
  [[-.42,-.12,0],[.02,-.4,1],[.42,-.08,0],[-.14,.24,1],[.26,.3,0]].forEach(([x,y,up])=>{const cx=x*r,cy=-h+y*ry-up*s*.035;
   coins+=`<ellipse cx="${cx.toFixed(1)}" cy="${(cy+2).toFixed(1)}" rx="${cr.toFixed(1)}" ry="${(cr*ISO).toFixed(1)}" fill="#a77d22"/><ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${cr.toFixed(1)}" ry="${(cr*ISO).toFixed(1)}" fill="${GOLD}" stroke="#7a5a14" stroke-width="1"/><ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${(cr*.55).toFixed(1)}" ry="${(cr*ISO*.55).toFixed(1)}" fill="none" stroke="#fff3c4" stroke-width="1"/>`});
  const g=`<ellipse class="sh" cx="0" cy="${ryb*.4}" rx="${rb*1.25}" ry="${ryb}"/>`+
   `<path class="ol" d="M${-r*.98} ${-h}Q0 ${-h-r*1.55} ${r*.98} ${-h}" fill="none" style="stroke-width:2.4"/>`+
   `<path class="ol" d="M${-r} ${-h}L${-rb} 0A${rb} ${ryb} 0 0 0 ${rb} 0L${r} ${-h}Z" fill="url(#s-b)"/>`+
   `<path d="M${-r*.93} ${-h*.78}A${r*.93} ${ry*.93} 0 0 0 ${r*.93} ${-h*.78}M${-r*.86} ${-h*.24}A${r*.86} ${ry*.86} 0 0 0 ${r*.86} ${-h*.24}" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.6"/>`+
   `<ellipse class="ol" cx="0" cy="${-h}" rx="${r}" ry="${ry}" fill="#24303a"/>`+coins+
   `<path class="ol" d="M${-r} ${-h}A${r} ${ry} 0 0 0 ${r} ${-h}" fill="none" style="stroke-width:2.2"/>`;
  return {g,top:-h-r*.8}}
 if(n.t==='bot'){const U=s*.25,V=s*.25,z0=s*.07,Z=s*.3,z1=z0+Z,d='#1b2228';
  const eye=x=>`<circle cx="${x}" cy="${Z*.4}" r="${s*.05}" fill="${d}"/><circle cx="${x}" cy="${Z*.4}" r="${s*.028}" fill="#ff5a5f"/>`;
  const face=eye(2*U*.3)+eye(2*U*.7)+`<rect x="${2*U*.24}" y="${Z*.68}" width="${2*U*.52}" height="${Z*.13}" rx="1.5" fill="${d}"/>`+[.38,.5,.62].map(x=>`<path d="M${2*U*x} ${Z*.68}v${Z*.13}" stroke="#8a959e" stroke-width="1"/>`).join('');
  const ear=`<rect x="${2*V*.32}" y="${Z*.26}" width="${2*V*.36}" height="${Z*.4}" rx="3" fill="#5c6670"/>`;
  const g=csh(U,V)+box(s*.12,s*.12,z0,0,DARK)+box(U,V,Z,z0,['url(#t-m)','var(--m3)','var(--m4)'],{lf:face,rf:ear})+
   `<path class="mast" d="M0 ${-z1}v${-s*.17}"/>`+LED(0,-z1-s*.19,s*.032,'#ff5a5f');
  return {g,top:-(U+V)*ISO-z1}}
 return null};
const NODES={user:{t:'mon',scr:'TICKET',l:'사용자',e:'User',tile:'w'},bot:{t:'bot',l:'봇',e:'Bot',tile:'m'},lb:{t:'lb',l:'로드밸런서',e:'Load balancer',tile:'g'},api1:{t:'srv',chip:'API',l:'API 서버 1',e:'API server 1',tile:'v'},api2:{t:'srv',chip:'API',l:'API 서버 2',e:'API server 2',tile:'v'},redis:{t:'bucket',l:'공유 토큰 저장소',e:'Shared buckets',tile:'a'}};
const LAND={user:[0,.1],bot:[0,.95],lb:[.32,.55],api1:[.64,.05],api2:[.64,1],redis:[1,.55]};
const PORT={user:[.12,0],bot:[.88,0],lb:[.5,.32],api1:[.12,.66],api2:[.88,.66],redis:[.5,1]};
const ZONES=[];
const ALL=[['user','lb'],['bot','lb'],['lb','api1'],['lb','api2'],['api1','redis'],['api2','redis']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const FOUR=['user','bot','lb','api1'];
const SHOW=['user','bot','lb','api1','api2','redis'];
const STEPS=[
{t:'왜 요청을 제한할까',te:'Why limit requests?',se:'One client flooding a server can slow it down for everyone else.',s:'누군가 요청을 쏟아부으면 다른 모든 사용자까지 느려진다.',show:FOUR,e:act(['user','lb'],['bot','lb'],['lb','api1']),m:['API 서버','—','느려짐','놀이기구 탑승 인원'],
 x:'콘서트 티켓 예매가 열리는 순간, 누군가 프로그램(봇)으로 1초에 1,000번씩 좌석 조회 요청을 보낸다고 해 봅시다. API 서버가 1초에 2,000건을 처리할 수 있다면, 봇 하나가 그 절반을 차지해 수만 명의 진짜 사용자 화면이 느려집니다. 로그인 화면에 비밀번호를 수만 번 대입하는 공격이나, 데이터를 통째로 긁어 가는 일도 같은 방식으로 들어옵니다. 요청 제한(rate limiting)은 한 사용자가 일정 시간에 보낼 수 있는 요청 수에 상한을 두어, 서버와 다른 사용자를 지키는 장치입니다.',
 k:'요청 제한은 공격만 막는 게 아닙니다. 버그로 같은 요청을 끝없이 반복하는 앱이나, 요청할 때마다 돈이 드는 외부 서비스 비용이 폭주하는 것도 막아 줍니다.',
 f:[['bot','lb','×1000/s','push'],['lb','api1','×1000/s','push'],{n:['api1','CPU 100%']},['user','lb','Seat list'],['lb','api1','Seat list'],{n:['api1','Queue: 3 s wait']},{n:['user','Too slow…']}]},
{t:'토큰 버킷',te:'The token bucket',se:'Each user has a bucket of tokens, and every request spends one.',s:'사용자마다 토큰 바구니가 있고, 요청 하나에 토큰 하나를 쓴다.',show:FOUR,e:act(['user','lb'],['lb','api1']),m:['API 서버','10 → 9 → 6','200 OK','놀이공원 이용권'],
 x:'가장 널리 쓰이는 방법은 토큰 버킷(token bucket)입니다. 사용자마다 토큰이 최대 10개 들어가는 바구니가 있고, 요청 하나를 처리할 때마다 토큰을 하나씩 꺼냅니다. 사용자 7번이 좌석 조회를 1번 하면 토큰은 10개에서 9개로, 이어서 3번 더 하면 6개로 줄어듭니다. 토큰이 남아 있는 한 요청은 평소처럼 200 OK로 처리됩니다. 서버가 하는 일은 남은 토큰 수와 마지막으로 채운 시각, 숫자 두 개를 기억하고 계산하는 것뿐이라 아주 가볍습니다.',
 k:'토큰을 하나씩 넣어 주는 타이머가 실제로 도는 것은 아닙니다. 요청이 올 때 "지난번 이후 몇 초 지났는지"를 계산해, 그만큼을 한꺼번에 채워 넣습니다.',
 f:[{n:['api1','user:7 · 10/10']},['user','lb','Request'],['lb','api1','Request'],{n:['api1','Take 1 → 9/10']},['api1','lb','200 OK','ack'],['lb','user','200 OK','ack'],['user','lb','Request ×3'],['lb','api1','Request ×3'],{n:['api1','Take 3 → 6/10']},['api1','lb','200 OK ×3','ack'],['lb','user','200 OK ×3','ack']]},
{t:'토큰은 다시 찬다',te:'Tokens refill over time',se:'Tokens refill at a steady rate, up to the bucket size, so short bursts are fine but floods are not.',s:'토큰은 일정한 속도로 바구니 크기까지만 다시 찬다. 잠깐 몰리는 것은 괜찮지만 쉬지 않고 쏟아지는 것은 막힌다.',show:FOUR,e:act(['user','lb'],['lb','api1']),m:['API 서버','6 → 10 → 0','모두 200 OK','충전되는 교통카드'],
 x:'토큰은 1초에 5개씩 다시 채워집니다. 6개가 남은 상태에서 1초가 지나면 11개가 되어야 하지만, 바구니는 10개까지만 담기므로 10개에서 멈춥니다. 그래서 한동안 쉬었다가 한꺼번에 10개를 보내는 것(버스트)은 모두 통과합니다. 하지만 길게 보면 1초에 평균 5개를 넘을 수 없습니다. 바구니 크기는 "잠깐 몰리는 것을 얼마나 봐줄지", 채우는 속도는 "오래 보면 얼마까지 허용할지"를 정합니다.',
 k:'사람은 화면을 열 때 요청이 잠깐 몰렸다가 다시 조용해집니다. 토큰 버킷은 이런 자연스러운 몰림은 허용하고, 쉬지 않고 두드리는 봇만 걸러 냅니다.',
 f:[{n:['api1','user:7 · 6/10']},{n:['api1','+1 s → +5 tokens']},{n:['api1','Cap: 10/10']},['user','lb','Burst ×10','push'],['lb','api1','×10'],{n:['api1','10/10 → 0/10']},['api1','lb','200 OK ×10','ack'],['lb','user','All OK','ack']]},
{t:'바구니가 비면 429',te:'Empty bucket: HTTP 429',se:'When the bucket is empty, the server replies 429 Too Many Requests with a Retry-After header.',s:'바구니가 비면 서버는 429 응답과 함께 몇 초 뒤에 다시 오라고 알려 준다.',show:FOUR,e:act(['bot','lb'],['lb','api1']),m:['API 서버','0/10','429','매진 안내판'],
 x:'이번에는 봇이 한꺼번에 50개를 보냅니다. 처음 10개는 토큰으로 처리되지만, 바구니가 빈 뒤의 40개는 바로 거절됩니다. 이때 서버는 HTTP 상태 코드 429(Too Many Requests)를 돌려주고, Retry-After 머리말에 몇 초 뒤에 다시 오면 되는지 적어 줍니다. 토큰이 1초에 5개씩 차므로 1초 뒤에 오라고 하면 됩니다. 거절은 숫자 하나를 확인하면 끝나서, 봇이 계속 두드려도 서버에는 거의 부담이 없습니다.',
 k:'잘 만든 앱은 429를 받으면 바로 다시 보내지 않고, 알려 준 시간만큼 기다리거나 1초, 2초, 4초처럼 점점 길게 기다렸다가 다시 시도합니다. 이것을 지수 백오프라고 합니다.',
 f:[{n:['api1','bot · 10/10']},['bot','lb','×50 at once','push'],['lb','api1','×50','push'],{n:['api1','10 OK → 0/10']},{n:['api1','40 rejected']},['api1','lb','429 Too Many Requests','ack'],['lb','bot','429 · Retry-After: 1','ack'],{n:['bot','Wait 1 s']}]},
{t:'바구니는 사람마다 따로',te:'One bucket per key',se:'Limits are counted per user ID, API key or IP address, so a bot cannot use up anyone else\'s share.',s:'바구니는 사용자 ID, API 키, IP 주소마다 따로 있어서 봇이 남의 몫을 쓰지 못한다.',show:FOUR,e:act(['user','lb'],['bot','lb'],['lb','api1']),m:['API 서버','user:7 6/10 · 봇 0/10','200 · 429','1인당 구매 한도'],
 x:'바구니는 하나가 아니라 사용자마다 따로 있습니다. 바구니를 구분하는 이름을 키(key)라고 하며, 로그인한 사용자는 사용자 ID나 API 키로, 로그인하지 않은 요청은 IP 주소로 구분하는 경우가 많습니다. 봇이 자기 바구니를 다 비워도 사용자 7번의 바구니에는 토큰 6개가 그대로 남아 있습니다. 같은 서비스 안에서도 기능마다 한도를 다르게 둡니다. 좌석 조회는 1초에 5번이지만, 로그인 시도는 1분에 5번처럼 훨씬 엄격하게 정합니다.',
 k:'IP로만 구분하면 공유기나 통신사 NAT 뒤에서 같은 공인 IP를 쓰는 여러 사람이 한 바구니를 나눠 쓰게 됩니다. 그래서 가능하면 사용자 단위로 셉니다.',
 f:[{p:[['user','lb','key user:7'],['bot','lb','key ip:198.51.100.9']]},['lb','api1','2 keys'],{n:['api1','user:7 → 6/10']},{n:['api1','ip:…100.9 → 0/10']},['api1','lb','200 · 429','ack'],{p:[['lb','user','200 OK','ack'],['lb','bot','429','ack']]}]},
{t:'서버가 여러 대라면?',te:'What about many servers?',se:'If each server keeps its own buckets, a client gets the limit once per server.',s:'서버마다 따로 세면, 서버 수만큼 한도가 늘어나 버린다.',show:['user','bot','lb','api1','api2'],e:act(['bot','lb'],['lb','api1'],['lb','api2']),m:['API 서버 2대','서버마다 10개','20개 모두 200','창구마다 따로 센 한도'],
 x:'예매 날 사람이 몰려 API 서버를 두 대로 늘렸다고 해 봅시다. 각 서버가 자기 메모리에만 바구니를 두면, 로드밸런서가 요청을 반씩 나누는 바람에 봇은 서버 1에서 10개, 서버 2에서 10개, 모두 20개를 통과시킵니다. 서버가 10대라면 한도가 10배로 늘어나는 셈입니다. 게다가 로드밸런서가 어느 서버로 보낼지에 따라 같은 사용자가 어떤 때는 통과하고 어떤 때는 막히는, 들쭉날쭉한 결과가 나옵니다.',
 k:'한도는 서비스 전체에서 지켜져야 합니다. 서버마다 따로 세면 서버를 늘릴수록 제한이 느슨해집니다.',
 f:[['bot','lb','×20','push'],{p:[['lb','api1','×10'],['lb','api2','×10']]},{n:['api1','bot: 10/10 → 0']},{n:['api2','bot: 10/10 → 0']},{p:[['api1','lb','200 ×10','ack'],['api2','lb','200 ×10','ack']]},{n:['lb','Limit 10, passed 20']}]},
{t:'모두가 보는 바구니',te:'Shared buckets',se:'All servers keep the buckets in one fast shared store, so the limit holds everywhere.',s:'모든 서버가 하나의 빠른 저장소에서 바구니를 함께 보면, 한도가 정확히 지켜진다.',show:SHOW,e:act(['bot','lb'],['lb','api1'],['lb','api2'],['api1','redis'],['api2','redis']),m:['공유 저장소','모두 합쳐 10개','10개만 200','공용 출입 명부'],
 x:'그래서 바구니를 모든 서버가 함께 보는 빠른 저장소(주로 Redis)에 둡니다. 서버 1이든 서버 2든 요청을 받으면 저장소에 "bot의 토큰 하나 꺼내 줘"라고 묻고, 저장소가 남은 수를 줄여 답합니다. 봇이 20개를 보내면 서버 1에서 6개, 서버 2에서 4개가 통과한 뒤 바구니가 비고, 나머지는 어느 서버로 가든 429를 받습니다. 저장소는 "확인하고 빼기"를 한 동작으로 처리해서, 두 서버가 동시에 물어도 마지막 토큰을 두 번 내주지 않습니다.',
 k:'요청마다 저장소에 한 번 묻는 만큼 약 1 ms가 더 걸립니다. 저장소가 멈췄을 때 모든 요청을 막을지, 모두 통과시킬지도 미리 정해 두어야 합니다.',
 f:[{n:['redis','bot · 10/10']},['bot','lb','×20','push'],{p:[['lb','api1','×10'],['lb','api2','×10']]},{p:[['api1','redis','Take token'],['api2','redis','Take token']]},{n:['redis','6 + 4 → 0/10']},{p:[['redis','api1','Empty','ack'],['redis','api2','Empty','ack']]},{p:[['api1','lb','429','ack'],['api2','lb','429','ack']]},['lb','bot','10 OK · 10 × 429','ack']]}];
const MLAB=['지금 일하는 곳','남은 토큰','응답 코드','비유'];
"""

LATENCY = r"""
const DEV_EXTRA=(n,s)=>{if(n.t==='globe'){const R=s*.33,cy=s*.6,w='stroke="#fff" stroke-opacity=".75" stroke-width="1.3" fill="none"',rb=s*.17,ryb=rb*ISO,hb=s*.06,Rr=R*1.14;
 const pt=a=>[(Rr*Math.cos(a*Math.PI/180)).toFixed(1),(-cy+Rr*Math.sin(a*Math.PI/180)).toFixed(1)],A=pt(-115),B=pt(95);
 const land=`<path d="M${-R*.55} ${-cy-R*.45}q${R*.25} ${-R*.2} ${R*.45} ${-R*.05}q${R*.1} ${R*.25} ${-R*.1} ${R*.4}q${-R*.25} ${R*.15} ${-R*.35} ${-R*.05}z M${R*.1} ${-cy+R*.05}q${R*.35} ${-R*.1} ${R*.5} ${R*.15}q${-R*.05} ${R*.35} ${-R*.3} ${R*.4}q${-R*.25} ${-R*.2} ${-R*.2} ${-R*.55}z" fill="#7fd3a8" opacity=".9"/>`;
 const g=`<ellipse class="sh" cx="0" cy="${ryb*.4}" rx="${rb*1.3}" ry="${ryb}"/>`+
  `<path class="ol" d="M${-rb} ${-hb}V0A${rb} ${ryb} 0 0 0 ${rb} 0V${-hb}Z" fill="var(--m4)"/><ellipse class="ol" cx="0" cy="${-hb}" rx="${rb}" ry="${ryb}" fill="url(#t-m)"/>`+
  `<path class="mast" d="M0 ${-hb}V${B[1]}"/>`+
  `<circle class="ol" cx="0" cy="${-cy}" r="${R}" fill="url(#t-b)"/>`+land+
  `<ellipse cx="0" cy="${-cy}" rx="${R*.45}" ry="${R}" ${w}/><ellipse cx="0" cy="${-cy}" rx="${R}" ry="${R*.3}" ${w}/>`+
  `<path d="M0 ${-cy-R}V${-cy+R}M${-R*.86} ${-cy-R*.5}H${R*.86}M${-R*.86} ${-cy+R*.5}H${R*.86}" ${w}/>`+
  `<circle class="ol" cx="0" cy="${-cy}" r="${R}" fill="none"/>`+
  `<path class="mast" d="M${A[0]} ${A[1]}A${Rr} ${Rr} 0 1 0 ${B[0]} ${B[1]}" fill="none"/>`+LED(R*.38,-cy-R*.28,s*.03,'#e5484d');
 return {g,top:-cy-Rr}}return null};
const NODES={users:{t:'ph',l:'사용자',e:'Users',tile:'a'},cpu:{t:'cpu',chip:'CPU',l:'CPU',e:'CPU',tile:'g'},ram:{t:'ram',l:'메모리',e:'RAM',tile:'v'},ssd:{t:'ssd',chip:'SSD',l:'SSD',e:'SSD',tile:'b'},near:{t:'srv',chip:'DB',l:'같은 지역 서버',e:'Same-region DB',tile:'w'},far:{t:'globe',l:'해외 서버',e:'Overseas server',tile:'m'}};
const LAND={users:[0,.5],ram:[.25,0],ssd:[.25,1],cpu:[.45,.5],near:[.8,.05],far:[1,.95]};
const PORT={users:[.5,0],ram:[.1,.38],ssd:[.9,.38],cpu:[.5,.5],near:[.15,1],far:[.85,1]};
const ZONES=[{ids:['cpu','ram','ssd'],l:'OUR SERVER'}];
const ALL=[['users','cpu'],['cpu','ram'],['cpu','ssd'],['cpu','near'],['cpu','far']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['users','cpu','ram','ssd','near','far'];
const STEPS=[
{t:'지연과 처리량은 다르다',te:'Latency vs throughput',se:'Latency is how long one request takes. Throughput is how many requests finish per second.',s:'지연은 요청 하나에 걸리는 시간, 처리량은 1초에 끝내는 요청의 개수다.',show:SHOW,e:act(['users','cpu']),m:['서버','20 ms','초당 500개','도로의 소요 시간과 통행량'],
 x:'지연(latency)은 요청 하나를 보내고 응답을 받기까지 걸리는 시간이고, 처리량(throughput)은 1초에 끝내는 요청의 개수입니다. 고속도로에 비유하면 지연은 서울에서 부산까지 걸리는 시간이고, 처리량은 1시간에 톨게이트를 지나는 차의 수입니다. 차선을 4개에서 8개로 늘리면 지나가는 차는 두 배가 되지만, 차 한 대가 부산까지 가는 시간은 그대로입니다. 서버도 같습니다. 배달 앱의 주문 내역 요청 하나에 20 ms가 걸리는 서버가 동시에 10개씩 처리하면, 1초에 약 500개를 끝냅니다.',
 k:'사용자가 느끼는 "빠르다"는 주로 지연이고, 서버가 몇 명을 감당하는지는 처리량입니다. 무엇이 문제인지에 따라 해결책이 완전히 달라집니다.',
 f:[['users','cpu','Request'],{n:['cpu','Latency: 20 ms']},['cpu','users','Response','ack'],{n:['cpu','10 at a time']},['users','cpu','×500/s','push'],{n:['cpu','Throughput: 500/s']}]},
{t:'메모리와 저장장치',te:'Memory vs storage',se:'Reading RAM takes about 100 ns. Reading an SSD takes about 100 µs, a thousand times longer.',s:'RAM은 약 100 ns, SSD는 약 100 µs. 약 1,000배 차이가 난다.',show:SHOW,e:act(['cpu','ram'],['cpu','ssd']),m:['CPU ↔ RAM · SSD','약 100 ns · 약 100 µs','—','책상과 서랍'],
 x:'먼저 서버 한 대 안을 봅시다. CPU가 RAM에서 데이터를 읽는 데는 약 100 ns(나노초, 1초의 10억분의 1)가 걸립니다. SSD에서 읽으면 약 100 µs(마이크로초, 1초의 100만분의 1)로, RAM보다 약 1,000배 느립니다. CPU 안의 작은 캐시는 이보다 더 빨라서 약 1 ns면 됩니다. 그래서 자주 쓰는 데이터는 RAM에 올려 두고, 캐시 서버도 대부분 메모리에 데이터를 둡니다.',
 k:'RAM에서 한 번 읽는 데 1초가 걸린다고 늘려 보면, SSD에서 한 번 읽는 데는 약 17분이 걸리는 셈입니다.',
 f:[['cpu','ram','Read'],['ram','cpu','~100 ns','ack'],['cpu','ssd','Read'],{n:['ssd','Find block…']},['ssd','cpu','~100 µs','ack'],{n:['ssd','~1,000× slower']}]},
{t:'네트워크는 훨씬 멀다',te:'The network is far away',se:'A server in the same region answers in about 1 ms. Across an ocean, it takes 100+ ms.',s:'같은 지역 서버는 약 1 ms, 바다 건너 서버는 100 ms가 넘는다.',show:SHOW,e:act(['cpu','near'],['cpu','far']),m:['네트워크','약 1 ms · 약 150 ms','—','옆 건물과 바다 건너'],
 x:'서울 데이터센터의 앱 서버가 같은 지역의 DB에 질의를 보내고 답을 받는 데는 약 0.5~1 ms가 걸립니다. 그런데 미국 서부에 있는 서버까지 다녀오려면 약 130~150 ms가 걸립니다. 서울에서 로스앤젤레스까지는 약 1만 km이고, 광케이블 속 빛은 1초에 약 20만 km를 가므로 편도만 약 50 ms, 왕복 약 100 ms가 거리만으로 생깁니다. 여기에 실제 케이블이 돌아가는 길과 라우터를 거치는 시간이 더해집니다.',
 k:'앞의 비율로 늘리면 같은 지역은 약 3시간, 바다 건너는 약 17일입니다. 빛보다 빠를 수는 없으니, 먼 거리를 줄이는 방법은 데이터를 가까이 옮기는 것뿐입니다.',
 f:[['cpu','near','Query'],['near','cpu','~1 ms','ack'],['cpu','far','Request','push'],{n:['far','~10,000 km away']},['far','cpu','~150 ms','ack'],{n:['cpu','150× the DB query']}]},
{t:'평균 말고 p99를 본다',te:'Look at p99, not the average',se:'p50 is the typical request. p99 is the slowest 1 in 100, the tail users still feel.',s:'p50은 보통의 요청, p99는 100번 중 가장 느린 한 번이다.',show:SHOW,e:act(['users','cpu']),m:['서버','p50 20 ms · p99 400 ms','—','100명 중 가장 늦은 1명'],
 x:'같은 요청이라도 걸리는 시간은 매번 조금씩 다릅니다. 요청 100개를 빠른 순서로 줄 세웠을 때 50번째가 p50(중앙값), 99번째가 p99입니다. p50이 20 ms인데 p99가 400 ms라면, 100번 중 한 번은 보통보다 20배 느린 셈입니다. 이렇게 드물게 아주 느린 요청을 꼬리 지연(tail latency)이라고 하며, 메모리 정리(가비지 컬렉션), 디스크 대기, 패킷 재전송 같은 일이 원인이 됩니다.',
 k:'화면 하나를 그리려고 서버 내부에서 요청을 50번 보낸다면, 그중 하나라도 p99보다 느릴 확률은 약 40%입니다. 그래서 평균은 멀쩡해도 사용자는 자주 느리다고 느낍니다.',
 f:[['users','cpu','100 requests','push'],{n:['cpu','Sort by time']},{n:['cpu','#50 → p50: 20 ms']},{n:['cpu','#99 → p99: 400 ms']},['cpu','users','99 fast · 1 slow','ack']]},
{t:'바쁘면 줄이 생긴다',te:'Busy servers build queues',se:'Near full capacity, requests wait in line and latency shoots up.',s:'서버가 거의 꽉 차면 요청이 줄을 서고, 지연이 갑자기 커진다.',show:SHOW,e:act(['users','cpu']),m:['서버','40 → 200 → 400 ms','초당 최대 500개','계산대 줄'],
 x:'1초에 500건을 처리할 수 있는 서버가 있다고 해 봅시다. 요청이 250건(사용률 50%)일 때는 줄이 거의 없어 약 40 ms면 끝납니다. 450건(90%)이 되면 앞의 요청이 끝나기를 기다리는 줄이 생겨 약 200 ms로, 475건(95%)이면 약 400 ms로 뜁니다. 요청이 조금 늘었을 뿐인데 지연은 10배가 되었습니다. 처리량이 한계에 닿은 뒤에도 요청이 계속 더 들어오면, 줄은 끝없이 길어집니다.',
 k:'그래서 서버는 사용률 60~70% 정도에서 여유를 두고 운영합니다. 줄이 넘칠 때는 새 요청을 일부러 빨리 거절하는 편이, 모두가 함께 느려지는 것보다 낫습니다.',
 f:[['users','cpu','250/s'],{n:['cpu','Busy 50% · 40 ms']},['users','cpu','450/s','push'],{n:['cpu','Busy 90% · 200 ms']},['users','cpu','475/s','push'],{n:['cpu','Busy 95% · 400 ms']},{n:['cpu','Queue: ~19 waiting']},['cpu','users','Slow responses','ack']]},
{t:'기다림을 겹치고 묶는다',te:'Overlap and batch the waits',se:'Independent calls can run in parallel, and many small queries can be batched into one.',s:'서로 기다릴 필요 없는 요청은 동시에 보내고, 작은 질의 여러 개는 하나로 묶는다.',show:SHOW,e:act(['cpu','near'],['cpu','far']),m:['네트워크','450 → 150 ms','—','장보기를 나눠서'],
 x:'주문 화면을 만들려고 해외 서버에 세 가지를 물어야 한다고 해 봅시다. 하나씩 순서대로 물으면 150 ms씩 세 번, 450 ms를 기다립니다. 세 질문이 서로의 답을 필요로 하지 않는다면 동시에(병렬로) 보내서, 가장 느린 하나만큼인 약 150 ms만 기다리면 됩니다. 같은 지역 DB에 상품 100개를 하나씩 물으면 1 ms씩 100번이지만, 100개를 한 질의로 묶으면 약 2 ms로 끝납니다. 지연의 대부분은 계산이 아니라 오가는 시간이기 때문입니다.',
 k:'가까운 1 ms도 100번 쌓이면 100 ms가 됩니다. 느린 서비스를 살펴보면 이렇게 작은 왕복이 쌓인 경우가 아주 많습니다.',
 f:[['cpu','far','Call A'],['far','cpu','A · 150 ms','ack'],['cpu','far','Call B'],['far','cpu','B · 300 ms','ack'],{n:['cpu','Serial: 3 × 150 = 450 ms']},['cpu','far','A + B + C at once','push'],['far','cpu','All · ~150 ms','ack'],['cpu','near','100 IDs, 1 query'],['near','cpu','~2 ms, not 100','ack']]},
{t:'가까이 두고, 늘린다',te:'Move closer, add capacity',se:'Cache hot results, copy data near users, and add servers to raise throughput.',s:'자주 쓰는 결과는 캐시하고, 데이터는 사용자 가까이 두고, 처리량은 서버를 늘려 높인다.',show:SHOW,e:act(['users','cpu'],['cpu','ram'],['cpu','far']),m:['곳곳','150 ms → 수 ms','서버 2배 → 약 2배','자주 쓰는 물건은 현관에'],
 x:'남은 방법은 거리를 줄이는 것입니다. 해외 서버에서 받아 온 결과를 메모리에 캐시해 두면, 다음 요청은 150 ms 대신 1 ms도 안 걸립니다. 해외 서버의 데이터를 서울 근처에 복사해 두거나 CDN을 쓰면 처음 요청도 수 ms로 줄어듭니다. 처리량은 서버를 늘리거나 한 서버가 동시에 처리하는 요청 수를 늘려서 높입니다. 1초에 500건을 처리하던 서버를 2대로 늘리면 약 1,000건을 처리합니다.',
 k:'서버를 늘리면 처리량이 늘어 앞에서 본 줄이 짧아지고, 그 덕에 바쁠 때의 지연도 함께 줄어듭니다. 하지만 한가할 때 요청 하나의 지연은 서버를 늘려도 그대로입니다.',
 f:[['cpu','far','Request'],['far','cpu','~150 ms','ack'],['cpu','ram','Cache result'],{n:['ram','Next time: <1 ms']},{n:['far','Copy to Seoul (CDN)']},['users','cpu','×1000/s','push'],{n:['cpu','2 servers → ~1000/s']}]}];
const MLAB=['지금 일하는 곳','지연','처리량','비유'];
"""

out.update({
    "caching": lesson(TPL, title="캐시의 원리", h1="자주 쓰는 데이터는 가까이 둔다",
                      lead="같은 데이터를 매번 데이터베이스에서 꺼낼 필요는 없습니다. 쇼핑몰 특가 상품을 예로 캐시 히트와 미스, TTL, 무효화, 적중률, 캐시 쇄도까지 7단계로 따라가 보세요.",
                      aria="캐시 구성도", note="걸리는 시간은 일반적인 웹 서비스 기준 대략값입니다. 가격과 상품 번호는 예시입니다.",
                      rtitle="How Caching Works", data=CACHING),
    "scaling": lesson(TPL, title="수직 확장과 수평 확장", h1="서버를 키울까, 늘릴까",
                      lead="점심시간에 주문이 몰리면 서버를 더 크게 바꾸거나 더 많이 둡니다. 배달 앱을 예로 두 방법의 차이와 한계, 무상태 서버까지 7단계로 따라가 보세요.",
                      aria="서버 확장 구성도", note="서버 크기와 요청 수는 설명을 위한 대략적인 예시입니다.",
                      rtitle="Scaling Up vs Out", data=SCALING),
    "ratelimit": lesson(TPL, title="요청 제한", h1="몰려드는 요청을 어떻게 막을까",
                        lead="한 사람이 요청을 쏟아부어도 서비스가 버티게 하는 장치, 요청 제한. 티켓 예매를 예로 토큰 버킷, 429 응답, 공유 저장소까지 7단계로 따라가 보세요.",
                        aria="요청 제한 구성도", note="토큰 수와 시간은 설명을 위한 예시입니다. IP 주소는 문서용 예시입니다.",
                        rtitle="How Rate Limiting Works", data=RATELIMIT),
    "latency": lesson(TPL, title="지연과 처리량", h1="빠르다는 것은 무엇일까",
                      lead="요청 하나가 얼마나 걸리는지와 1초에 몇 개를 처리하는지는 다릅니다. 메모리부터 바다 건너까지의 시간, p99, 대기열, 병렬화까지 7단계로 따라가 보세요.",
                      aria="지연과 처리량 구성도", note="시간은 일반적인 하드웨어와 네트워크 기준 대략값입니다. 대기열 수치는 단순한 모델로 계산한 예시입니다.",
                      rtitle="Latency and Throughput", data=LATENCY),
})
