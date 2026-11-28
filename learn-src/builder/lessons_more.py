# Executed inside build_lessons.py: adds server / web / vm / cloud lessons to `out`.

SERVER = r"""
const NODES={phone:{t:'ph',l:'폰 앱',e:'Phone app',tile:'a'},web:{t:'mon',scr:'GET /',l:'웹 브라우저',e:'Web browser',tile:'w'},api:{t:'srv',chip:'API',l:'API 서버',e:'API server',tile:'g'},db:{t:'db',l:'데이터베이스',e:'Database',tile:'b'}};
const LAND={phone:[0,.08],web:[0,.95],api:[.5,.55],db:[1,.5]};
const PORT={phone:[.12,0],web:[.88,.06],api:[.5,.56],db:[.5,1]};
const ZONES=[];
const ALL=[['phone','api'],['web','api'],['api','db']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['phone','web','api','db'];
const STEPS=[
{t:'부탁하는 쪽, 들어주는 쪽',te:'One asks, one answers',se:'Clients ask for things. Servers answer them.',s:'클라이언트는 요청하고, 서버는 응답한다.',show:SHOW,e:act(...ALL),m:['4개 지점','—','—','손님과 주방'],
 x:'앱이나 브라우저처럼 우리가 손에 쥐고 쓰는 쪽을 클라이언트(Client), 멀리서 요청을 받아 처리하는 컴퓨터를 서버(Server)라고 합니다. 서버는 데이터베이스에서 정보를 꺼내 클라이언트에게 돌려줍니다. 배달 앱의 메뉴, 은행 잔고, SNS 피드가 모두 이렇게 서버에서 옵니다.',
 k:'식당에 비유하면 클라이언트는 주문하는 손님, 서버는 주방, 데이터베이스는 식재료 창고입니다.',
 f:[{n:['phone','Client']},{n:['web','Client']},{n:['api','Server']},{n:['db','Data']}]},
{t:'요청을 보낸다',te:'Sending a request',se:'The app sends an HTTP request that says what it wants.',s:'앱은 원하는 것을 담아 HTTP 요청을 보낸다.',show:SHOW,e:act(['phone','api']),m:['폰 → 서버','약 50 ms','—','주문서'],
 x:'메뉴 화면을 열면 앱은 서버에 "GET /menu" 같은 요청을 보냅니다. GET은 "가져다 달라", POST는 "새로 저장해 달라"는 뜻입니다. 요청에는 주소(경로)와 함께 누가 보냈는지 알려 주는 정보도 들어갑니다.',
 k:'요청은 HTTP라는 정해진 형식을 따릅니다. 그래서 어떤 회사의 앱이든, 어떤 언어로 만든 서버든 서로 알아들을 수 있습니다.',
 f:[{n:['phone','Open menu']},['phone','api','GET /menu','push'],{n:['api','Request received']}]},
{t:'서버가 일한다',te:'The server does the work',se:'The server checks the request and reads data from the database.',s:'서버는 요청을 확인하고 데이터베이스에서 필요한 정보를 읽는다.',show:SHOW,e:act(['api','db']),m:['서버 ↔ DB','약 5 ms','DB에 저장','주방과 창고'],
 x:'서버는 먼저 요청이 올바른지, 보낸 사람에게 권한이 있는지 확인합니다. 그다음 데이터베이스에 "메뉴 목록을 달라"고 묻고, 받은 결과를 앱이 쓰기 좋은 형태로 정리합니다.',
 k:'서버 프로그램은 꺼져도 다시 켜면 되지만, 데이터는 데이터베이스에 저장되어 있어야 사라지지 않습니다.',
 f:[{n:['api','Check request']},['api','db','SELECT menu'],{n:['db','12 rows']},['db','api','Menu data','ack']]},
{t:'응답이 돌아온다',te:'The response comes back',se:'The server replies with a status code and data, usually JSON.',s:'서버는 상태 코드와 데이터(주로 JSON)를 담아 응답한다.',show:SHOW,e:act(['phone','api']),m:['서버 → 폰','약 50 ms','—','완성된 요리'],
 x:'응답에는 결과를 알려 주는 상태 코드가 붙습니다. 200은 성공, 404는 찾을 수 없음, 500은 서버 오류입니다. 데이터는 보통 JSON이라는 글자 형식으로 담겨 오고, 앱은 이것을 읽어 화면에 메뉴를 그립니다.',
 k:'클라이언트와 서버가 주고받기로 약속한 요청과 응답의 목록을 API라고 부릅니다.',
 f:[['api','phone','200 OK · JSON','ack'],{n:['phone','Menu shown']}]},
{t:'여러 손님을 한꺼번에',te:'Many clients at once',se:'One server handles requests from many clients at the same time.',s:'서버 하나가 여러 클라이언트의 요청을 동시에 처리한다.',show:SHOW,e:act(...ALL),m:['서버','초당 수천 건','—','바쁜 주방'],
 x:'서버는 같은 시간에 휴대폰 앱, 웹 브라우저 등 수많은 클라이언트의 요청을 받습니다. 요청마다 일을 나눠 동시에 처리하기 때문에, 한 사람의 요청이 느려도 다른 사람은 기다리지 않아도 됩니다.',
 k:'요청이 서버의 처리 능력을 넘으면 응답이 느려집니다. 서버를 여러 대로 늘리는 방법은 "클라우드의 원리" 레슨에서 다룹니다.',
 f:[{p:[['phone','api','GET /menu'],['web','api','GET /menu']]},{n:['api','2 requests']},['api','db','SELECT'],['db','api','Data','ack'],{p:[['api','phone','200 OK','ack'],['api','web','200 OK','ack']]}]},
{t:'서버는 기억하지 않는다',te:'Servers don\'t remember you',se:'Each request carries a token, so the server knows who is asking.',s:'요청마다 토큰을 함께 보내야 서버가 누구인지 안다.',show:SHOW,e:act(['web','api'],['api','db']),m:['브라우저 → 서버','약 50 ms','토큰 확인','놀이공원 손목 밴드'],
 x:'HTTP 서버는 보통 지난 요청을 기억하지 않습니다. 그래서 로그인하면 서버가 토큰(출입증)을 발급하고, 클라이언트는 이후 모든 요청에 토큰을 붙여 보냅니다. 서버는 토큰을 확인해 누구의 요청인지 알아냅니다.',
 k:'기억을 서버가 아니라 요청에 담으면, 어느 서버가 요청을 받아도 똑같이 처리할 수 있습니다. 서버를 여러 대로 늘리기 쉬운 이유입니다.',
 f:[['web','api','Login'],['api','db','Check user'],['db','api','OK','ack'],['api','web','Token','ack'],{n:['web','Token saved']},['web','api','GET /orders + token','push'],{n:['api','User: Seoa']}]}];
const MLAB=['지금 일하는 곳','걸리는 시간','데이터','비유'];
"""

WEB = r"""
const NODES={browser:{t:'mon',scr:'zuply',l:'브라우저',e:'Browser',tile:'w'},dns:{t:'srv',chip:'DNS',l:'DNS 서버',e:'DNS server',tile:'v'},cdn:{t:'srv',chip:'CDN',l:'CDN',e:'CDN',tile:'a'},server:{t:'srv',chip:'WEB',l:'웹 서버',e:'Web server',tile:'g'},db:{t:'db',l:'데이터베이스',e:'Database',tile:'b'}};
const LAND={browser:[0,.55],dns:[.38,0],cdn:[.38,1],server:[.7,.52],db:[1,.06]};
const PORT={server:[.28,0],db:[.86,.02],dns:[.1,.52],cdn:[.9,.56],browser:[.48,1]};
const ZONES=[];
const ALL=[['browser','dns'],['browser','server'],['browser','cdn'],['server','db']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['browser','dns','cdn','server','db'];
const STEPS=[
{t:'주소를 입력한다',te:'You type an address',se:'You type zuply.co.kr. The browser checks whether it already knows the way.',s:'주소를 입력하면 브라우저는 먼저 이미 아는 길이 있는지 확인한다.',show:SHOW,e:act(),m:['브라우저','—','—','택시에 행선지 말하기'],
 x:'주소창에 zuply.co.kr을 입력하고 Enter를 누르면 여행이 시작됩니다. 이 주소는 사람이 읽기 쉬운 이름일 뿐이고, 컴퓨터가 찾아가려면 숫자로 된 IP 주소가 필요합니다. 브라우저는 최근에 방문하며 기억해 둔 IP가 있는지부터 확인합니다.',
 k:'웹사이트가 열리기까지 보통 1초 남짓 걸리지만, 그 안에서 여러 컴퓨터가 차례로 일합니다.',
 f:[{n:['browser','zuply.co.kr ⏎']},{n:['browser','Cache: not found']}]},
{t:'이름을 숫자로 바꾼다',te:'DNS finds the IP address',se:'A DNS server turns the name into an IP address, like a phone book.',s:'DNS 서버가 이름을 IP 주소로 바꿔 준다. 전화번호부처럼.',show:SHOW,e:act(['browser','dns']),m:['브라우저 ↔ DNS','약 20 ms','—','전화번호부'],
 x:'브라우저는 DNS 서버에 "zuply.co.kr의 IP 주소가 뭐야?"라고 묻습니다. DNS는 인터넷의 전화번호부로, 이름에 맞는 IP 주소(예: 203.0.113.10)를 알려 줍니다. 한 번 받은 답은 한동안 기억해 두고 다음에는 다시 묻지 않습니다.',
 k:'사람은 이름을, 컴퓨터는 숫자를 씁니다. DNS가 그 사이를 통역합니다.',
 f:[['browser','dns','zuply.co.kr?'],{n:['dns','Look up']},['dns','browser','203.0.113.10','ack'],{n:['browser','IP saved']}]},
{t:'연결하고 암호화한다',te:'Connect and encrypt',se:'The browser opens a connection and sets up encryption. That is the S in HTTPS.',s:'브라우저는 서버와 연결을 열고 암호화를 설정한다. HTTPS의 S가 이것이다.',show:SHOW,e:act(['browser','server']),m:['브라우저 ↔ 서버','약 50–100 ms','암호화됨','비밀 악수'],
 x:'IP 주소를 알았으니 이제 서버와 연결을 엽니다(TCP). 이어서 서버는 자신이 진짜 zuply.co.kr이라는 인증서를 보여 주고, 둘은 대화를 암호화할 열쇠를 정합니다(TLS). 주소창의 자물쇠 표시가 이 과정이 끝났다는 뜻입니다.',
 k:'암호화된 연결에서는 중간에서 누가 엿보더라도 내용을 읽을 수 없습니다. 비밀번호와 카드 번호가 안전하게 오가는 이유입니다.',
 f:[['browser','server','Hello'],['server','browser','Certificate','ack'],{n:['browser','Verified']},['browser','server','Key exchange','push'],{n:['server','Encrypted']}]},
{t:'페이지를 요청한다',te:'Requesting the page',se:'The server builds the page, reading from the database when it needs to.',s:'서버는 필요하면 데이터베이스를 읽어 페이지를 만든다.',show:SHOW,e:act(['browser','server'],['server','db']),m:['서버 ↔ DB','약 10–200 ms','—','주문 받은 주방'],
 x:'브라우저가 "GET /"으로 첫 페이지를 요청하면, 서버는 필요한 데이터를 데이터베이스에서 꺼내 HTML 문서를 만듭니다. 내용이 자주 바뀌지 않는 페이지는 미리 만들어 둔 HTML을 바로 보내기도 합니다.',
 k:'HTML은 페이지의 뼈대입니다. 제목, 글, 이미지가 어디에 들어갈지 적혀 있습니다.',
 f:[['browser','server','GET /','push'],['server','db','Query'],['db','server','Data','ack'],{n:['server','Build HTML']},['server','browser','index.html','ack']]},
{t:'필요한 파일을 더 받는다',te:'Fetching the extras',se:'The HTML asks for CSS, scripts and images. Many come from a nearby CDN.',s:'HTML에 적힌 CSS, 스크립트, 이미지를 더 받는다. 많은 파일은 가까운 CDN에서 온다.',show:SHOW,e:act(['browser','cdn']),m:['CDN → 브라우저','약 10–30 ms','—','동네 편의점'],
 x:'HTML을 읽던 브라우저는 꾸밈(CSS), 동작(JavaScript), 이미지 파일이 더 필요하다는 것을 알고 한꺼번에 요청합니다. 이런 파일은 전 세계 곳곳에 복사본을 둔 CDN에서 가장 가까운 곳을 골라 빠르게 받습니다.',
 k:'CDN은 본사 창고 대신 동네 편의점에 물건을 미리 갖다 두는 것과 같습니다. 멀리 있는 서버까지 가지 않아도 됩니다.',
 f:[{n:['browser','Read HTML']},{p:[['browser','cdn','style.css'],['browser','cdn','app.js']]},{p:[['cdn','browser','CSS','ack'],['cdn','browser','JS','ack']]},['cdn','browser','Images','ack']]},
{t:'화면을 그린다',te:'Drawing the page',se:'The browser combines HTML and CSS, lays out every box and paints the pixels.',s:'브라우저는 HTML과 CSS를 합쳐 위치를 계산하고 픽셀을 칠한다.',show:SHOW,e:act(),m:['브라우저','약 50–300 ms','—','설계도로 집 짓기'],
 x:'브라우저는 HTML로 문서 구조(DOM)를 만들고, CSS를 적용해 글자와 상자 하나하나의 크기와 위치를 계산합니다(레이아웃). 그다음 색을 칠해 화면에 보여 줍니다. JavaScript가 실행되면 버튼이 눌리고 화면이 바뀌는 등 페이지가 살아 움직입니다.',
 k:'주소를 입력하고 화면이 뜨기까지 DNS, 연결, 요청, 응답, 그리기가 1초 남짓 안에 모두 일어납니다.',
 f:[{n:['browser','HTML → DOM']},{n:['browser','CSS → Layout']},{n:['browser','Paint']},{n:['browser','Page ready']}]}];
const MLAB=['지금 일하는 곳','걸리는 시간','보안','비유'];
"""

VM = r"""
const NODES={hw:{t:'core',l:'실제 서버',e:'Physical server',tile:'m'},hv:{t:'box',chip:'HV',p:'g',l:'하이퍼바이저',e:'Hypervisor',tile:'g'},vm1:{t:'box',chip:'VM 1',p:'v',l:'VM 1',e:'VM 1 · Linux',tile:'v'},vm2:{t:'box',chip:'VM 2',p:'b',l:'VM 2',e:'VM 2 · Windows',tile:'b'},vm3:{t:'box',chip:'VM 3',p:'a',l:'VM 3',e:'VM 3 · Linux',tile:'a'},hw2:{t:'core',l:'다른 서버',e:'Another server',tile:'m'},ctr:{t:'ctrs',l:'컨테이너',e:'Containers',tile:'w'}};
const LAND={vm1:[0,0],vm2:[.33,0],vm3:[.66,0],hv:[.33,.5],hw:[.33,1],hw2:[1,1],ctr:[1,.42]};
const PORT={vm1:[.08,0],vm2:[.5,0],vm3:[.92,0],hv:[.5,.34],hw:[.5,.64],hw2:[.16,1],ctr:[.84,1]};
const ZONES=[{ids:['vm1','vm2','vm3','hv','hw'],l:'ONE PHYSICAL SERVER'}];
const ALL=[['hw','hv'],['hv','vm1'],['hv','vm2'],['hv','vm3'],['hw','hw2'],['hw2','ctr']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const BASE=['hw','hv','vm1','vm2','vm3'];
const STACK=[['hw','hv'],['hv','vm1'],['hv','vm2'],['hv','vm3']];
const STEPS=[
{t:'컴퓨터 한 대를 여러 대처럼',te:'One machine, many computers',se:'A hypervisor lets one physical server run several virtual machines.',s:'하이퍼바이저를 쓰면 실제 서버 한 대에서 여러 가상 머신(VM)을 돌릴 수 있다.',show:BASE,e:act(...STACK),m:['실제 서버 1대','—','—','아파트 한 동'],
 x:'가상 머신(Virtual Machine)은 소프트웨어로 만든 "컴퓨터 속의 컴퓨터"입니다. 실제 서버 위에서 하이퍼바이저라는 프로그램이 돌면서 CPU와 메모리를 쪼개 여러 대의 가상 컴퓨터를 만들어 냅니다. 각 VM은 자기가 진짜 컴퓨터를 혼자 쓰고 있다고 생각합니다.',
 k:'건물 한 동(실제 서버)을 여러 집(VM)으로 나눈 아파트와 같습니다. 관리사무소(하이퍼바이저)가 전기와 물을 나눠 줍니다.',
 f:[{n:['vm1','Virtual']},{n:['vm2','Virtual']},{n:['vm3','Virtual']}]},
{t:'하이퍼바이저가 자원을 나눈다',te:'Slicing up the hardware',se:'The hypervisor gives each VM its own share of CPU, memory and disk.',s:'하이퍼바이저는 CPU, 메모리, 디스크를 VM마다 나눠 준다.',show:BASE,e:act(...STACK),m:['하이퍼바이저','—','—','관리사무소'],
 x:'실제 서버에 CPU 코어 32개와 메모리 128 GB가 있다면, 하이퍼바이저는 VM 1에 4코어·16 GB, VM 2에 8코어·32 GB처럼 나눠 줍니다. VM이 하드웨어를 쓰려고 하면 하이퍼바이저가 중간에서 받아 실제 하드웨어로 이어 줍니다.',
 k:'요즘 CPU에는 가상화를 돕는 기능이 들어 있어서, VM도 실제 컴퓨터와 거의 같은 속도로 동작합니다.',
 f:[['hw','hv','32 cores · 128 GB','push'],{p:[['hv','vm1','4 cores'],['hv','vm2','8 cores'],['hv','vm3','4 cores']]},{n:['hv','Shared fairly']}]},
{t:'VM마다 자기만의 운영체제',te:'Each VM runs its own OS',se:'One VM can run Linux while another runs Windows, on the same machine.',s:'같은 서버에서 한 VM은 리눅스, 다른 VM은 윈도우를 돌릴 수 있다.',show:BASE,e:act(['hv','vm1'],['hv','vm2'],['hv','vm3']),m:['각 VM','부팅 수십 초','—','집마다 다른 인테리어'],
 x:'각 VM 안에는 운영체제(OS)가 통째로 설치됩니다. 그래서 같은 실제 서버 위에서 VM 1은 리눅스로 웹 서버를, VM 2는 윈도우로 사내 프로그램을 돌릴 수 있습니다. VM을 켜는 것은 컴퓨터를 부팅하는 것과 같아서 보통 수십 초가 걸립니다.',
 k:'OS를 통째로 담기 때문에 VM 하나의 크기는 보통 수 GB에 이릅니다.',
 f:[{p:[['hv','vm1','Boot'],['hv','vm2','Boot'],['hv','vm3','Boot']]},{n:['vm1','Linux']},{n:['vm2','Windows']},{n:['vm3','Linux']}]},
{t:'서로 격리되어 있다',te:'Walls between VMs',se:'If one VM crashes, the others keep running.',s:'VM 하나가 멈춰도 나머지는 그대로 돈다.',show:BASE,st:{vm2:'dead'},e:act(['hw','hv'],['hv','vm1'],['hv','vm3']),m:['VM 2','—','나머지는 남음','벽으로 나뉜 집'],
 x:'VM끼리는 벽으로 나뉘어 있어 서로의 메모리와 파일을 볼 수 없습니다. VM 2의 프로그램이 오류로 멈추거나 공격을 받아도, 같은 서버의 VM 1과 VM 3는 영향을 받지 않고 계속 동작합니다.',
 k:'여러 회사가 서버 한 대를 나눠 써도 안전한 이유가 이 격리입니다. 클라우드는 이 원리 위에 세워져 있습니다.',
 f:[{n:['vm2','Crashed']},{n:['vm1','Still running']},{n:['vm3','Still running']}]},
{t:'통째로 복사하고 옮긴다',te:'Copy and move a whole machine',se:'A VM is just files, so it can be saved, copied and moved to another server.',s:'VM은 결국 파일이라서 스냅숏을 찍고, 복사하고, 다른 서버로 옮길 수 있다.',show:[...BASE,'hw2'],e:act(['hw','hv'],['hv','vm3'],['hw','hw2']),m:['서버 → 다른 서버','수 초~수 분','스냅숏은 남음','이삿짐 통째로'],
 x:'VM의 디스크와 설정은 파일로 저장되어 있습니다. 그래서 특정 순간의 상태를 스냅숏으로 저장해 두었다가 되돌릴 수 있고, 실행 중인 VM을 다른 실제 서버로 옮길 수도 있습니다(라이브 마이그레이션). 서버를 점검할 때도 서비스를 멈추지 않아도 됩니다.',
 k:'하드웨어와 소프트웨어가 분리되었기 때문에, 서버가 고장 나도 VM을 다른 서버에서 다시 켜면 됩니다.',
 f:[{n:['vm3','Snapshot']},['vm3','hv','VM 3 files'],['hv','hw','VM 3 files'],['hw','hw2','VM 3 →','push'],{n:['hw2','VM 3 running']}]},
{t:'컨테이너는 더 가볍다',te:'Containers are lighter',se:'Containers share the host OS, so they start in about a second and use less memory.',s:'컨테이너는 운영체제를 함께 써서 1초 안팎이면 켜지고 메모리도 적게 쓴다.',show:[...BASE,'hw2','ctr'],e:act(['hw2','ctr']),m:['컨테이너','1초 안팎','—','셰어하우스의 방'],
 x:'VM은 각자 OS를 통째로 갖지만, 컨테이너(Docker 등)는 하나의 OS 위에서 프로그램과 필요한 파일만 묶어 따로따로 실행합니다. OS를 새로 켤 필요가 없어 1초 안팎이면 시작되고, 크기도 보통 수십~수백 MB로 작습니다. 대신 VM보다 격리 수준은 조금 약합니다.',
 k:'VM이 각자 부엌까지 갖춘 아파트라면, 컨테이너는 부엌을 함께 쓰는 셰어하우스의 방입니다. 실제로는 VM 위에서 컨테이너를 돌리는 경우가 많습니다.',
 f:[['hw2','ctr','Shared OS'],{n:['ctr','App A · App B · App C']},{n:['ctr','Start: ~1 s']}]}];
const MLAB=['지금 일하는 곳','걸리는 시간','남는 것','비유'];
"""

CLOUD = r"""
const NODES={users:{t:'ph',l:'사용자',e:'Users',tile:'a'},lb:{t:'lb',l:'로드밸런서',e:'Load balancer',tile:'g'},s1:{t:'srv',chip:'1',l:'서버 1',e:'Server 1',tile:'w'},s2:{t:'srv',chip:'2',l:'서버 2',e:'Server 2',tile:'w'},s3:{t:'srv',chip:'3',l:'서버 3',e:'Server 3',tile:'w'},db:{t:'db',l:'데이터베이스',e:'Database',tile:'b'}};
const LAND={users:[0,.5],lb:[.3,.5],s1:[.62,0],s2:[.62,.52],s3:[.62,1],db:[1,.5]};
const PORT={users:[.5,0],lb:[.5,.3],s1:[.1,.64],s2:[.5,.64],s3:[.9,.64],db:[.5,1]};
const ZONES=[{ids:['lb','s1','s2','s3','db'],l:'CLOUD REGION'}];
const ALL=[['users','lb'],['lb','s1'],['lb','s2'],['lb','s3'],['s1','db'],['s2','db'],['s3','db']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const STEPS=[
{t:'남의 데이터센터를 빌려 쓴다',te:'Renting a data center',se:'Cloud providers run huge data centers and rent out servers by the second.',s:'클라우드 회사는 거대한 데이터센터를 운영하고 서버를 초 단위로 빌려준다.',show:['users','lb','s1','db'],e:act(['users','lb'],['lb','s1'],['s1','db']),m:['데이터센터','—','—','렌터카'],
 x:'AWS, Google Cloud, Azure 같은 클라우드 회사는 전 세계에 수많은 서버가 들어찬 데이터센터를 운영합니다. 우리는 서버를 직접 사는 대신 필요한 만큼 빌려 쓰고, 쓴 만큼 돈을 냅니다. 이렇게 빌려주는 서버는 대부분 "가상 머신" 레슨에서 본 VM입니다.',
 k:'자동차를 사는 대신 렌터카를 빌리는 것과 같습니다. 정비와 주차는 클라우드 회사가 맡습니다.',
 f:[{n:['users','Users']},{n:['s1','Rented VM']},{n:['db','Managed DB']}]},
{t:'몇 분 만에 서버가 생긴다',te:'A server in minutes',se:'With a few clicks or one command, a new server is ready in about a minute.',s:'클릭 몇 번이나 명령 한 줄이면 1분 남짓 만에 새 서버가 준비된다.',show:['users','lb','s1','s2','db'],e:act(['lb','s2'],['s2','db']),m:['클라우드 콘솔','1분 남짓','—','주문형 사무실'],
 x:'예전에는 서버를 주문하고 설치하는 데 몇 주가 걸렸습니다. 클라우드에서는 원하는 CPU, 메모리, 운영체제를 고르고 버튼을 누르면, 데이터센터 어딘가의 실제 서버 위에 새 VM이 바로 만들어집니다. 설정 파일 하나로 똑같은 서버를 몇 대든 찍어 낼 수도 있습니다.',
 k:'서버가 "사는 물건"에서 "필요할 때 만드는 것"으로 바뀌었습니다. 이것이 클라우드가 가져온 가장 큰 변화입니다.',
 f:[{n:['s2','Create: 2 CPU · 4 GB']},{n:['s2','Booting']},['lb','s2','Connect','push'],{n:['s2','Ready']}]},
{t:'로드밸런서가 나눠 준다',te:'Sharing the load',se:'A load balancer spreads incoming requests across the servers.',s:'로드밸런서가 들어오는 요청을 여러 서버에 고르게 나눈다.',show:['users','lb','s1','s2','db'],e:act(['users','lb'],['lb','s1'],['lb','s2'],['s1','db'],['s2','db']),m:['로드밸런서','1 ms 미만','—','은행 번호표'],
 x:'사용자는 서버가 몇 대인지 모릅니다. 모든 요청은 먼저 로드밸런서로 오고, 로드밸런서는 지금 덜 바쁜 서버를 골라 요청을 넘깁니다. 서버들은 같은 데이터베이스를 보기 때문에 어느 서버가 받든 같은 결과를 돌려줍니다.',
 k:'"서버와 클라이언트" 레슨에서 본 것처럼 서버가 사용자를 기억하지 않기 때문에, 이렇게 아무 서버에나 요청을 보낼 수 있습니다.',
 f:[['users','lb','Request 1'],['lb','s1','Request 1'],['users','lb','Request 2'],['lb','s2','Request 2'],{p:[['s1','db','Read'],['s2','db','Read']]}]},
{t:'사람이 몰리면 늘어난다',te:'Scaling out automatically',se:'When traffic spikes, auto scaling adds servers. When it drops, it removes them.',s:'사람이 몰리면 오토스케일링이 서버를 늘리고, 한가해지면 줄인다.',show:['users','lb','s1','s2','s3','db'],e:act(['users','lb'],['lb','s1'],['lb','s2'],['lb','s3']),m:['오토스케일링','1–3분','—','계산대 더 열기'],
 x:'이벤트가 시작되거나 뉴스에 나와 접속이 갑자기 늘면 서버의 CPU 사용률이 올라갑니다. 오토스케일링은 이 수치를 지켜보다가 정해 둔 기준(예: 70%)을 넘으면 서버를 자동으로 더 만들고 로드밸런서에 연결합니다. 사람이 줄면 다시 서버를 꺼서 비용을 아낍니다.',
 k:'마트 계산대에 줄이 길어지면 계산대를 더 여는 것과 같습니다.',
 f:[['users','lb','×1000'],{p:[['lb','s1','Busy'],['lb','s2','Busy']]},{n:['s1','CPU 90%']},{n:['s3','Auto: new server']},['lb','s3','Requests','push'],{n:['s3','Sharing load']}]},
{t:'하나가 고장 나도 괜찮다',te:'Surviving a failure',se:'Health checks spot a failed server, and traffic moves to the healthy ones.',s:'상태 검사로 고장 난 서버를 찾아내고, 요청을 건강한 서버로 돌린다.',show:['users','lb','s1','s2','s3','db'],st:{s2:'dead'},e:act(['users','lb'],['lb','s1'],['lb','s3']),m:['로드밸런서','수 초','데이터는 남음','대신 뛰는 선수'],
 x:'로드밸런서는 몇 초마다 각 서버에 "괜찮아?"라고 묻는 상태 검사를 합니다. 서버 2가 응답하지 않으면 그 서버로는 요청을 보내지 않고, 오토스케일링이 대신할 새 서버를 만듭니다. 데이터는 따로 떨어진 데이터베이스에 있어서 서버가 죽어도 사라지지 않습니다.',
 k:'클라우드에서는 서버 한 대쯤 고장 나는 것을 당연하게 여기고 설계합니다. 그래서 서비스는 멈추지 않습니다.',
 f:[{n:['s2','Server down']},['lb','s2','Health check','lost'],{n:['lb','Skip server 2']},['users','lb','Request'],['lb','s3','Request','push'],{n:['s3','OK']}]},
{t:'쓴 만큼만 낸다',te:'Pay only for what you use',se:'At night, servers scale back in, and you stop paying for the ones you don\'t need.',s:'밤이 되면 서버가 다시 줄고, 쓰지 않는 서버에는 돈을 내지 않는다.',show:['users','lb','s1','db'],e:act(['users','lb'],['lb','s1'],['s1','db']),m:['요금','초 단위','—','수도 요금'],
 x:'접속이 적은 새벽에는 오토스케일링이 서버를 1대까지 줄입니다. 클라우드 요금은 서버를 켜 둔 시간, 저장 공간, 밖으로 내보낸 데이터 양만큼 계산됩니다. 처음에는 작게 시작했다가 서비스가 커지면 그만큼 늘리면 됩니다.',
 k:'큰돈을 들여 서버를 미리 사 두지 않아도 되기 때문에, 작은 팀도 큰 서비스를 시작할 수 있습니다.',
 f:[{n:['users','Night: quiet']},{n:['lb','Scale in → 1']},['users','lb','Request'],['lb','s1','Request'],{n:['s1','Pay per second']}]}];
const MLAB=['지금 일하는 곳','걸리는 시간','데이터','비유'];
"""

out.update({
    "server": lesson(TPL, title="서버와 클라이언트", h1="서버와 클라이언트는 어떻게 대화할까",
                     lead="앱을 열면 멀리 있는 서버가 대답합니다. 요청과 응답, API, 동시 접속까지 6단계로 따라가 보세요.",
                     aria="서버와 클라이언트 구성도", note="걸리는 시간은 일반적인 서비스 기준 대략값입니다.",
                     rtitle="Servers and Clients", data=SERVER),
    "web": lesson(TPL, title="웹사이트가 열리기까지", h1="주소를 입력하면 무슨 일이 일어날까",
                  lead="zuply.co.kr을 입력하고 화면이 뜨기까지. DNS, 암호화 연결, 서버, CDN, 화면 그리기를 6단계로 따라가 보세요.",
                  aria="웹사이트 요청 흐름도", note="걸리는 시간은 일반적인 웹사이트 기준 대략값입니다.",
                  rtitle="How a Website Loads", data=WEB),
    "vm": lesson(TPL, title="가상 머신의 원리", h1="컴퓨터 한 대를 여러 대처럼 쓰는 법",
                 lead="하이퍼바이저가 실제 서버를 여러 가상 머신으로 나눕니다. 격리, 이동, 컨테이너까지 6단계로 따라가 보세요.",
                 aria="가상 머신 구성도", note="크기와 시간은 일반적인 서버 기준 대략값입니다.",
                 rtitle="How Virtual Machines Work", data=VM),
    "cloud": lesson(TPL, title="클라우드의 원리", h1="클라우드는 어떻게 버틸까",
                    lead="서버를 빌리고, 사람이 몰리면 늘리고, 고장 나도 멈추지 않는 법. 로드밸런서와 오토스케일링을 6단계로 따라가 보세요.",
                    aria="클라우드 구성도", note="시간은 일반적인 클라우드 서비스 기준 대략값입니다.",
                    rtitle="How the Cloud Works", data=CLOUD),
})

NETWORK2 = r"""
const NODES={phoneA:{t:'ph',l:'내 폰',e:'My phone',tile:'a'},rep:{t:'rep',l:'중계기',e:'Repeater',tile:'w'},btsA:{t:'tw',l:'기지국 A',e:'Base station A',tile:'g'},ctrl:{t:'srv',chip:'MME',l:'제어',e:'Control',tile:'v'},hss:{t:'db',l:'가입자 DB',e:'Subscriber DB',tile:'b'},ims:{t:'srv',chip:'IMS',l:'음성',e:'Voice (IMS)',tile:'a'},gw:{t:'rt',l:'게이트웨이',e:'Gateway',tile:'g'},btsB:{t:'tw',l:'기지국 B',e:'Base station B',tile:'g'},phoneB:{t:'ph',c:'#c9b8ff',l:'상대 폰',e:"Friend's phone",tile:'b'}};
const SCALE=.8;
const LAND={phoneA:[0,1],rep:[0,.3],btsA:[.17,.78],ctrl:[.41,0],hss:[.6,0],ims:[.6,.5],gw:[.41,.86],btsB:[.86,.78],phoneB:[1,.3]};
const PORT={ctrl:[.2,0],hss:[.8,0],gw:[.2,.3],ims:[.8,.3],btsA:[.06,.68],rep:[.42,.86],phoneA:[.06,1],btsB:[.92,.68],phoneB:[.92,1]};
const ZONES=[{ids:['phoneA','rep','btsA'],l:'ACCESS NETWORK'},{ids:['ctrl','hss','ims','gw'],l:'CORE NETWORK',c:'core'},{ids:['btsB','phoneB'],l:'ACCESS NETWORK'}];
const ALL=[['phoneA','rep'],['rep','btsA'],['btsA','ctrl'],['btsA','gw'],['ctrl','hss'],['ims','hss'],['gw','ims'],['gw','btsB'],['btsB','phoneB']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=Object.keys(NODES);
const STEPS=[
{t:'전화망은 두 층으로 되어 있다',te:'Two layers: access and core',se:'A call crosses an access network, the core network, then another access network.',s:'통화는 액세스망 → 코어망 → 액세스망을 지나 상대에게 간다.',show:SHOW,e:act(...ALL),m:['9개 장비','—','—','동네 우체국과 집중국'],
 x:'전화망은 크게 액세스망과 코어망으로 나뉩니다. 액세스망(Access network)은 휴대폰을 전파로 붙잡아 주는 가장 바깥 구간으로, 중계기와 기지국이 여기에 속합니다. 코어망(Core network)은 통신사 안쪽의 두뇌로, 가입자를 인증하고, 상대를 찾고, 통화와 데이터를 목적지까지 실어 나릅니다. 기지국과 코어망 사이는 백홀(backhaul)이라 부르는 광케이블로 이어져 있습니다.',
 k:'우편에 비유하면 중계기와 기지국은 동네 우체국, 코어망은 전국의 우편물을 모아 나누는 우편 집중국입니다.',
 f:[{n:['phoneA','Me']},{n:['phoneB','Friend']},{w:900}]},
{t:'중계기: 약한 전파를 이어 준다',te:'Repeaters: bridging weak signals',se:'Underground or indoors, a repeater picks up weak signals, amplifies them and passes them on.',s:'지하나 건물 안에서는 중계기가 약한 전파를 받아 키운 뒤 기지국으로 이어 준다.',show:SHOW,e:act(['phoneA','rep'],['rep','btsA']),m:['폰 ↔ 중계기 ↔ 기지국','1 ms 미만','전파 증폭','징검다리'],
 x:'기지국 전파는 땅속이나 두꺼운 벽, 엘리베이터 안까지 잘 들어가지 못합니다. 그래서 지하철역, 터널, 지하 주차장, 큰 건물에는 중계기를 설치합니다. 중계기는 기지국 신호를 받아 키워서 안쪽으로 뿌려 주고, 휴대폰의 약한 신호도 받아 키워서 기지국으로 돌려보냅니다. 기지국 신호를 공중에서 받는 RF 중계기와, 광케이블로 받아 멀리까지 보내는 광중계기가 있습니다.',
 k:'중계기는 신호를 키워 전달할 뿐, 통화를 연결하거나 판단하지는 않습니다. 중계기가 있어도 휴대폰이 실제로 연결된 상대는 여전히 기지국입니다.',
 f:[{n:['phoneA','Weak signal']},['phoneA','rep','Radio'],{n:['rep','Amplify']},['rep','btsA','Radio / fiber','push'],{n:['btsA','Connected']}]},
{t:'기지국: 셀을 맡아 관리한다',te:'Base stations: running a cell',se:'Each base station serves one area, called a cell, and shares its radio among the phones in it.',s:'기지국은 셀이라 부르는 구역을 맡아, 그 안의 휴대폰들에게 전파를 나눠 준다.',show:SHOW,e:act(['rep','btsA'],['btsA','ctrl'],['btsA','gw']),m:['기지국','1 ms 단위','전파 ↔ 광케이블','동네 우체국'],
 x:'기지국(LTE는 eNB, 5G는 gNB)은 반경 수백 m에서 수 km의 셀을 맡습니다. 셀 안의 수많은 휴대폰에게 언제, 어떤 주파수로 보낼지 1 ms 단위로 나눠 주고, 전파로 받은 신호를 디지털 데이터로 바꿔 광케이블(백홀)로 코어망에 올려 보냅니다. 사용자가 움직여 다른 셀로 넘어가면 통화를 끊지 않고 옆 기지국으로 넘겨줍니다(핸드오버).',
 k:'액세스망의 끝은 기지국입니다. 기지국까지는 전파로, 기지국부터는 광케이블로 달립니다.',
 f:[['rep','btsA','Radio'],{n:['btsA','Schedule every 1 ms']},{p:[['btsA','ctrl','Control'],['btsA','gw','Data']]},{n:['btsA','Backhaul: fiber']}]},
{t:'코어망 ① 접속과 인증',te:'Core ①: attach and authenticate',se:'When your phone connects, the control unit checks your SIM against the subscriber database.',s:'휴대폰이 접속하면 제어 장비가 가입자 DB와 USIM 정보를 맞춰 보고 인증한다.',show:SHOW,e:act(['phoneA','rep'],['rep','btsA'],['btsA','ctrl'],['ctrl','hss']),m:['제어 ↔ 가입자 DB','수십 ms','제어 신호','출입 관리실'],
 x:'휴대폰을 켜면 코어망의 제어 장비(LTE는 MME, 5G는 AMF)가 "누구세요?"라고 묻습니다. 제어 장비는 가입자 DB(LTE는 HSS, 5G는 UDM)에 저장된 비밀 키로 휴대폰의 USIM 칩을 확인해 진짜 가입자인지 인증합니다. 인증이 끝나면 이 휴대폰이 지금 어느 지역에 있는지 기록해 둡니다.',
 k:'코어망은 크게 제어(누가, 어디에 있나)와 데이터 전달(무엇을, 어디로 보내나)로 나뉩니다. 이 단계는 제어 쪽의 일입니다.',
 f:[['phoneA','rep','Attach'],['rep','btsA','Attach'],['btsA','ctrl','Who are you?'],['ctrl','hss','Check SIM'],['hss','ctrl','Verified','ack'],{n:['ctrl','Location saved']}]},
{t:'코어망 ② 상대를 찾아 벨을 울린다',te:'Core ②: finding and ringing',se:'The voice system (IMS) looks up your friend and rings their phone through the gateway.',s:'음성 통화 시스템(IMS)이 상대를 찾아 게이트웨이를 거쳐 상대 폰의 벨을 울린다.',show:SHOW,e:act(['btsA','gw'],['gw','ims'],['ims','hss'],['gw','btsB'],['btsB','phoneB']),m:['IMS ↔ 가입자 DB','약 1–3초','제어 신호','교환원'],
 x:'통화 버튼을 누르면 "이 번호와 연결해 주세요"라는 요청이 게이트웨이를 지나 IMS로 갑니다. IMS는 LTE와 5G에서 음성 통화를 맡는 시스템으로, 가입자 DB에 물어 상대가 어디에 있는지 확인합니다. 상대 폰이 쉬고 있으면 제어 장비가 상대 지역의 기지국들에 호출(페이징)을 보내 깨우고, 상대 폰의 벨이 울립니다.',
 k:'목소리를 보내기 전에 먼저 길을 찾고 연결을 잡습니다. 목소리는 상대가 전화를 받은 뒤에야 흐르기 시작합니다.',
 f:[['btsA','gw','Call 010-…'],['gw','ims','Call'],['ims','hss','Where is Friend?'],['hss','ims','Near B','ack'],['ims','gw','Ring'],['gw','btsB','Ring','push'],['btsB','phoneB','Ring','push'],{n:['phoneB','Ringing']}]},
{t:'목소리는 작은 묶음이 된다',te:'Voice becomes small packets',se:'Your phone turns sound into numbers and sends them in a packet every 20 ms.',s:'휴대폰은 목소리를 숫자로 바꿔 20 ms마다 작은 묶음(패킷)으로 보낸다.',show:SHOW,e:act(['phoneA','rep'],['rep','btsA']),m:['내 폰','20 ms마다','디지털','받아쓰기'],
 x:'상대가 전화를 받으면 목소리가 흐르기 시작합니다. 마이크가 공기의 떨림을 전기 신호로 바꾸고, 휴대폰은 이를 1초에 수천 번 넘게 재서 숫자로 만듭니다. 코덱이 이 숫자를 작게 압축하고, 20 ms 분량씩 묶어 패킷으로 보냅니다. LTE와 5G 통화(VoLTE, VoNR)는 이렇게 데이터처럼 전달됩니다.',
 k:'1초 동안의 말은 50개의 작은 패킷이 됩니다. 패킷 몇 개가 늦거나 빠져도 대화가 이어지도록 설계되어 있습니다.',
 f:[{n:['phoneA','“Hello”']},{n:['phoneA','Sound → numbers']},['phoneA','rep','Packet 1'],['rep','btsA','Packet 1']]},
{t:'게이트웨이를 지나 상대 쪽으로',te:'Through the gateway',se:'Voice packets take the data path: base station, gateway, then the other base station.',s:'목소리 패킷은 데이터 길을 따라 기지국 → 게이트웨이 → 상대 기지국으로 간다.',show:SHOW,e:act(['btsA','gw'],['gw','btsB']),m:['기지국 → 게이트웨이 → 기지국','수 ms','빛 (광케이블)','고속도로 톨게이트'],
 x:'목소리 패킷은 제어 장비를 거치지 않고, 데이터 전달을 맡는 게이트웨이(LTE는 S-GW·P-GW, 5G는 UPF)를 지나 상대 쪽 기지국으로 갑니다. 게이트웨이는 패킷이 어디로 가야 하는지 알고, 요금 계산을 위해 사용량도 셉니다. 이 구간은 모두 광케이블이라 서울에서 부산까지도 몇 ms면 닿습니다.',
 k:'제어 신호와 실제 데이터가 서로 다른 길로 다니는 것이 요즘 코어망의 특징입니다. 데이터가 늘어나면 데이터 길만 늘리면 됩니다.',
 f:[['btsA','gw','Packet','push'],{n:['gw','Route → B']},['gw','btsB','Packet','push'],['btsB','phoneB','Packet']]},
{t:'다시 소리가 된다',te:'Back into sound',se:'Your friend\'s phone turns packets back into sound, while their voice travels back to you.',s:'상대 폰이 패킷을 다시 소리로 바꾼다. 그 사이 상대의 목소리도 같은 길을 거꾸로 온다.',show:SHOW,e:act(['phoneA','rep'],['rep','btsA'],['btsA','gw'],['gw','btsB'],['btsB','phoneB']),m:['상대 폰','0.15초 안팎','소리','실시간 대화'],
 x:'상대 폰은 받은 숫자를 소리로 되돌려 스피커로 들려줍니다. 입에서 귀까지는 보통 0.15초 안팎이라 대화가 자연스럽습니다. 그 사이 상대의 목소리도 기지국 B → 게이트웨이 → 기지국 A → 중계기를 거꾸로 지나 나에게 옵니다.',
 k:'통화는 두 방향의 길이 동시에 열려 있는 것입니다. 지연이 길어지면 말이 자꾸 겹쳐 대화가 어색해집니다.',
 f:[{n:['phoneB','“Hello”']},['phoneB','btsB','“Hi!”','ack'],['btsB','gw','“Hi!”','ack'],['gw','btsA','“Hi!”','ack'],['btsA','rep','“Hi!”','ack'],['rep','phoneA','“Hi!”','ack'],{n:['phoneA','“Hi!”']}]}];
const MLAB=['지금 일하는 곳','걸리는 시간','신호 형태','비유'];
"""

out["network"] = lesson(TPL, title="전화망의 원리", h1="전화는 어떻게 연결될까",
                        lead="전화를 걸면 목소리는 중계기와 기지국(액세스망), 제어·가입자 DB·IMS·게이트웨이(코어망)를 지나 상대에게 갑니다. 8단계로 따라가 보세요.",
                        aria="전화망 구성도", note="걸리는 시간은 LTE·5G 통화 기준 대략값입니다. 괄호 안은 LTE/5G 장비 이름입니다.",
                        rtitle="How a Phone Network Works", data=NETWORK2)
