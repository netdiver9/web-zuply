# Executed inside build_lessons.py after lessons_more.py: TCP / NAT / routing lessons.

TCP = r"""
const NODES={client:{t:'mon',scr:'SYN',l:'클라이언트',e:'Your computer',tile:'w'},r1:{t:'rt',l:'라우터 1',e:'Router 1',tile:'g'},r2:{t:'rt',l:'라우터 2',e:'Router 2',tile:'g'},server:{t:'srv',chip:'WEB',l:'서버',e:'Server :443',tile:'v'}};
const LAND={client:[0,.55],r1:[.33,.05],r2:[.66,.95],server:[1,.45]};
const PORT={client:[.2,0],r1:[.8,.33],r2:[.2,.66],server:[.8,1]};
const ZONES=[];
const ALL=[['client','r1'],['r1','r2'],['r2','server']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['client','r1','r2','server'];
const STEPS=[
{t:'인터넷의 약속, TCP/IP',te:'The rules of the internet: TCP/IP',se:'IP delivers packets to an address. TCP makes sure they all arrive, in order.',s:'IP는 패킷을 주소까지 배달하고, TCP는 빠짐없이 순서대로 도착하게 한다.',show:SHOW,e:act(...ALL),m:['4개 지점','—','—','택배 송장과 등기'],
 x:'인터넷의 모든 기기는 TCP/IP라는 약속을 따릅니다. 아래층의 IP(Internet Protocol)는 패킷에 출발지와 목적지 주소를 붙여 라우터에서 라우터로 배달합니다. 위층의 TCP(Transmission Control Protocol)는 패킷에 순번을 매기고, 받았는지 확인하고, 빠진 것은 다시 보내 데이터가 빠짐없이 순서대로 도착하게 합니다. 웹(HTTP)도 이 위에서 동작합니다.',
 k:'IP만으로는 패킷이 사라지거나 순서가 뒤바뀌어도 알 수 없습니다. TCP가 그 빈자리를 채워 믿을 수 있는 연결을 만듭니다.',
 f:[{n:['client','HTTP · TCP · IP']},{n:['r1','IP only']},{n:['r2','IP only']},{n:['server','HTTP · TCP · IP']}]},
{t:'데이터는 패킷으로 쪼개진다',te:'Data is split into packets',se:'Each packet gets a header with addresses, ports and a sequence number.',s:'데이터는 패킷으로 나뉘고, 각 패킷에는 주소, 포트, 순번이 적힌 머리말이 붙는다.',show:SHOW,e:act(['client','r1']),m:['내 컴퓨터','—','seq 번호','택배 상자와 송장'],
 x:'보낼 데이터는 보통 1,500바이트 안팎의 작은 패킷으로 나뉩니다. 각 패킷 앞에는 IP 머리말(보내는 IP, 받는 IP)과 TCP 머리말(포트 번호, 순번 seq, 확인 번호 ack)이 붙습니다. 포트 번호는 한 컴퓨터 안에서 어느 프로그램의 데이터인지 구분하는 번호로, HTTPS는 보통 443번을 씁니다.',
 k:'IP 주소가 건물 주소라면, 포트 번호는 그 건물의 호수입니다.',
 f:[{n:['client','Data: 4 KB']},{n:['client','→ 3 packets']},['client','r1','to 203.0.113.10:443','push'],{n:['r1','Read IP header']}]},
{t:'악수 ① SYN',te:'Handshake ①: SYN',se:'The client asks to connect and sends its starting sequence number.',s:'클라이언트가 연결을 요청하며 자신의 시작 순번을 보낸다.',show:SHOW,e:act(...ALL),m:['클라이언트 → 서버','왕복의 절반','seq 100','"여보세요?"'],
 x:'데이터를 보내기 전에 TCP는 먼저 연결을 맺습니다. 클라이언트는 SYN(동기화) 표시와 함께 "내 순번은 100부터 시작할게"라는 정보를 서버에 보냅니다. 실제 시작 순번은 보안을 위해 무작위로 정합니다.',
 k:'이 패킷은 라우터 몇 개를 거쳐 서버까지 갑니다. 라우터는 TCP 내용은 보지 않고 IP 주소만 보고 다음 길을 고릅니다.',
 f:[['client','r1','SYN seq=100'],['r1','r2','SYN seq=100'],['r2','server','SYN seq=100'],{n:['server','Got SYN']}]},
{t:'악수 ② SYN-ACK',te:'Handshake ②: SYN-ACK',se:'The server agrees, confirms the client\'s number and sends its own.',s:'서버는 받았다는 확인(ACK)과 함께 자신의 시작 순번을 보낸다.',show:SHOW,e:act(...ALL),m:['서버 → 클라이언트','왕복의 절반','seq 300 · ack 101','"네, 들려요. 제 말도 들리나요?"'],
 x:'서버는 SYN과 ACK 표시를 함께 담아 답합니다. ack=101은 "100번까지 잘 받았으니 다음은 101번을 보내 달라"는 뜻이고, seq=300은 서버 쪽의 시작 순번입니다.',
 k:'ACK 번호는 언제나 "다음에 받고 싶은 번호"입니다. 이 규칙 하나로 무엇이 도착했고 무엇이 빠졌는지 알 수 있습니다.',
 f:[['server','r2','SYN-ACK seq=300 ack=101','ack'],['r2','r1','SYN-ACK','ack'],['r1','client','SYN-ACK','ack'],{n:['client','Got SYN-ACK']}]},
{t:'악수 ③ ACK, 연결 완료',te:'Handshake ③: ACK, connected',se:'The client confirms the server\'s number. Both sides are ready.',s:'클라이언트가 서버의 순번을 확인하면 양쪽 모두 준비가 끝난다.',show:SHOW,e:act(...ALL),m:['클라이언트 → 서버','왕복 1번','ack 301','"네, 잘 들려요."'],
 x:'클라이언트가 ack=301을 보내면 3단계 악수(3-way handshake)가 끝납니다. 세 번을 주고받는 이유는, 양쪽 모두 "내가 보낸 것이 상대에게 닿았고, 상대가 보낸 것도 내가 받았다"는 것을 확인하고 서로의 시작 순번에 합의해야 하기 때문입니다.',
 k:'연결을 맺는 데 왕복 한 번이 걸립니다. 서울과 미국 서부 사이라면 약 0.15초입니다. HTTPS는 여기에 암호화 악수(TLS)가 더해집니다.',
 f:[['client','r1','ACK ack=301','push'],['r1','r2','ACK'],['r2','server','ACK'],{n:['server','Connected']},{n:['client','Connected']}]},
{t:'보내고, 확인하고, 다시 보낸다',te:'Send, confirm, resend',se:'The receiver acknowledges data. If a packet is lost, the sender sends it again.',s:'받는 쪽은 받았다고 알리고, 패킷이 사라지면 보내는 쪽이 다시 보낸다.',show:SHOW,e:act(...ALL),m:['양쪽','수 ms부터','seq로 정렬','등기 우편'],
 x:'이제 진짜 데이터가 오갑니다. 받는 쪽은 받은 데이터만큼 ACK 번호를 올려 알려 줍니다. 중간에 패킷이 사라져 ACK가 오지 않으면, 보내는 쪽은 잠시 기다렸다가 그 패킷을 다시 보냅니다. 순서가 뒤바뀌어 도착해도 seq 번호로 다시 정렬합니다.',
 k:'TCP는 네트워크가 막히면 보내는 속도를 줄이고, 여유가 생기면 다시 늘립니다. 이를 혼잡 제어라고 합니다.',
 f:[['client','r1','Data seq=101'],['r1','r2','Data seq=101','lost'],{n:['client','No ACK · resend']},['client','r1','Data seq=101'],['r1','r2','Data seq=101'],['r2','server','Data seq=101'],['server','r2','ACK','ack'],['r2','r1','ACK','ack'],['r1','client','ACK','ack']]},
{t:'정중하게 끊는다',te:'Saying goodbye: FIN',se:'Each side sends FIN and gets an ACK, so no data is cut off.',s:'양쪽이 FIN을 보내고 확인을 받아, 남은 데이터 없이 연결을 닫는다.',show:SHOW,e:act(...ALL),m:['양쪽','왕복 2번 안팎','—','"끊을게요." "네, 저도요."'],
 x:'다 주고받았으면 연결을 닫습니다. 한쪽이 FIN(끝)을 보내면 상대가 ACK로 답하고, 상대도 남은 데이터를 다 보낸 뒤 FIN을 보내 ACK를 받습니다. 양쪽이 따로 닫기 때문에 보통 네 번을 주고받으며, 그림에서는 가운데 두 개를 하나로 묶어 보였습니다.',
 k:'갑자기 끊지 않고 이렇게 닫기 때문에, 마지막 데이터까지 빠짐없이 전달됩니다.',
 f:[['client','r1','FIN'],['r1','r2','FIN'],['r2','server','FIN'],['server','r2','ACK + FIN','ack'],['r2','r1','ACK + FIN','ack'],['r1','client','ACK + FIN','ack'],['client','r1','ACK','push'],{n:['client','Closed']}]}];
const MLAB=['지금 일하는 곳','걸리는 시간','순번','비유'];
"""

NAT = r"""
const NODES={laptop:{t:'mon',scr:'LAN',l:'노트북',e:'Laptop .10',tile:'w'},phone:{t:'ph',l:'휴대폰',e:'Phone .11',tile:'a'},router:{t:'rep',l:'공유기',e:'Home router',tile:'g'},isp:{t:'core',l:'통신사 망',e:'ISP network',tile:'v'},server:{t:'srv',chip:'WEB',l:'웹 서버',e:'Web server',tile:'b'}};
const LAND={laptop:[.02,.2],phone:[.02,1],router:[.3,.6],isp:[.66,.55],server:[1,.55]};
const PORT={server:[.5,0],isp:[.5,.3],router:[.5,.66],laptop:[.12,1],phone:[.88,1]};
const ZONES=[{ids:['laptop','phone','router'],l:'HOME LAN'},{ids:['isp','server'],l:'INTERNET (WAN)',c:'core'}];
const ALL=[['laptop','router'],['phone','router'],['router','isp'],['isp','server']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['laptop','phone','router','isp','server'];
const STEPS=[
{t:'집 안의 망, 바깥의 망',te:'Inside and outside: LAN and WAN',se:'Home devices share a LAN. The router links it to the WAN, the wider internet.',s:'집 안 기기들은 LAN으로 묶이고, 공유기가 이를 바깥의 넓은 망(WAN)과 잇는다.',show:SHOW,e:act(...ALL),m:['5개 지점','—','LAN · WAN','아파트 단지와 도로'],
 x:'LAN(Local Area Network)은 집이나 사무실처럼 좁은 공간 안의 망입니다. Wi-Fi나 랜선으로 노트북, 휴대폰, TV가 공유기에 연결됩니다. WAN(Wide Area Network)은 도시와 나라를 잇는 넓은 망으로, 인터넷이 가장 큰 WAN입니다. 공유기는 LAN과 WAN 사이의 문 역할을 합니다.',
 k:'아파트 단지 안의 길이 LAN, 단지 밖의 도로가 WAN이라면, 공유기는 단지 정문입니다.',
 f:[{n:['laptop','LAN']},{n:['phone','LAN']},{n:['router','LAN ↔ WAN']},{n:['isp','WAN']}]},
{t:'공유기가 사설 IP를 나눠 준다',te:'The router hands out private IPs',se:'Using DHCP, the router gives each device a private address like 192.168.0.10.',s:'공유기는 DHCP로 기기마다 192.168.0.10 같은 사설 IP를 나눠 준다.',show:SHOW,e:act(['laptop','router'],['phone','router']),m:['공유기','192.168.0.x','LAN 안에서만','단지 안 동·호수'],
 x:'기기가 Wi-Fi에 연결되면 공유기에 "주소 하나 주세요"라고 요청하고, 공유기는 DHCP라는 방식으로 192.168.0.10, 192.168.0.11 같은 주소를 빌려줍니다. 이런 사설 IP는 집 안에서만 쓰는 주소라서, 옆집도 똑같이 192.168.0.10을 써도 문제가 없습니다.',
 k:'사설 IP 대역은 정해져 있습니다. 10.x.x.x, 172.16~31.x.x, 192.168.x.x는 인터넷에 직접 나가지 않는 주소입니다.',
 f:[['laptop','router','Need an IP'],['router','laptop','192.168.0.10','ack'],['phone','router','Need an IP'],['router','phone','192.168.0.11','ack']]},
{t:'바깥 주소는 하나뿐',te:'One public IP for the whole home',se:'The internet provider gives your router a single public IP address.',s:'통신사는 공유기에 공인 IP 하나를 준다. 집 전체가 이 주소 하나를 함께 쓴다.',show:SHOW,e:act(['router','isp']),m:['공유기 ↔ 통신사','203.0.113.7','인터넷 전체','단지 대표 주소'],
 x:'인터넷에서 서로를 찾으려면 겹치지 않는 공인 IP가 필요합니다. 통신사(ISP)는 집의 공유기에 공인 IP를 하나 줍니다. 집 안 기기가 몇 대이든, 바깥에서 보면 이 집은 203.0.113.7 하나로 보입니다.',
 k:'IPv4 주소는 약 43억 개뿐이라 모든 기기에 하나씩 줄 수 없습니다. 그래서 집마다 하나만 받아 나눠 씁니다.',
 f:[['isp','router','Public IP: 203.0.113.7','push'],{n:['router','WAN: 203.0.113.7']},{n:['router','LAN: 192.168.0.1']}]},
{t:'NAT: 나갈 때 주소를 바꾼다',te:'NAT: rewriting on the way out',se:'The router swaps the private address for its public one and notes it in a table.',s:'공유기는 나가는 패킷의 사설 주소를 공인 주소로 바꾸고, 그 사실을 표에 적어 둔다.',show:SHOW,e:act(['laptop','router'],['router','isp'],['isp','server']),m:['공유기','사설 → 공인','—','정문 경비실의 출입 기록'],
 x:'노트북이 웹 서버에 요청을 보내면, 패킷의 보내는 주소는 192.168.0.10:5000입니다. 공유기는 이를 자신의 공인 주소 203.0.113.7:40001로 바꿔서 내보내고, "40001번은 노트북의 5000번"이라고 NAT 표에 적어 둡니다. 이것이 NAT(Network Address Translation)입니다.',
 k:'서버는 노트북의 사설 주소를 전혀 모릅니다. 서버 눈에는 공유기가 요청을 보낸 것으로 보입니다.',
 f:[['laptop','router','from 192.168.0.10:5000'],{n:['router','→ 203.0.113.7:40001']},['router','isp','from 203.0.113.7:40001','push'],['isp','server','Request']]},
{t:'돌아올 때 다시 바꾼다',te:'And back again',se:'Replies come to the public address. The router checks its table and forwards them inside.',s:'응답은 공인 주소로 돌아오고, 공유기는 표를 보고 집 안의 원래 기기로 넘긴다.',show:SHOW,e:act(['laptop','router'],['router','isp'],['isp','server']),m:['공유기','공인 → 사설','—','경비실이 택배를 호수로'],
 x:'서버의 응답은 203.0.113.7:40001로 돌아옵니다. 공유기는 NAT 표에서 40001번을 찾아 "노트북 192.168.0.10의 5000번"으로 주소를 되돌려 노트북에 넘겨줍니다. 표에 없는 번호로 들어온 패킷은 받을 기기를 알 수 없어 버려집니다.',
 k:'바깥에서 먼저 집 안 기기로 연결을 걸 수 없는 이유가 이것입니다. 덕분에 NAT는 간단한 방어벽 역할도 합니다.',
 f:[['server','isp','Response','ack'],['isp','router','to 203.0.113.7:40001','ack'],{n:['router','40001 → laptop']},['router','laptop','to 192.168.0.10:5000','ack']]},
{t:'여러 기기가 주소 하나를 나눠 쓴다',te:'Many devices, one address',se:'Different port numbers keep each device\'s traffic apart.',s:'포트 번호를 다르게 붙여 여러 기기의 통신을 구분한다.',show:SHOW,e:act(...ALL),m:['공유기','포트로 구분','—','같은 주소, 다른 호수'],
 x:'노트북과 휴대폰이 동시에 인터넷을 써도, 공유기는 노트북에는 40001번, 휴대폰에는 40002번처럼 다른 포트를 붙여 구분합니다. 이렇게 공인 IP 하나로 수십 대의 기기가 함께 인터넷을 씁니다. 주소가 넉넉한 IPv6가 널리 쓰이면 기기마다 공인 주소를 줄 수 있습니다.',
 k:'회사, 카페, 통신사 안에서도 같은 원리의 NAT가 쓰입니다. 검색해서 보는 "내 IP"는 대부분 공유기나 통신사의 공인 IP입니다.',
 f:[{p:[['laptop','router','Laptop'],['phone','router','Phone']]},{n:['router','40001 · 40002']},['router','isp','203.0.113.7','push'],['isp','server','2 requests']]}];
const MLAB=['지금 일하는 곳','주소','범위','비유'];
"""

ROUTING = r"""
const NODES={client:{t:'mon',scr:'tracert',l:'내 컴퓨터',e:'You',tile:'w'},home:{t:'rep',l:'공유기',e:'Home router',tile:'a'},ispA:{t:'rt',l:'통신사 A',e:'ISP A router',tile:'g'},ixr:{t:'rt',p:'v',l:'중계 망',e:'Transit router',tile:'v'},ispB:{t:'rt',l:'통신사 B',e:'ISP B router',tile:'g'},server:{t:'srv',chip:'WEB',l:'서버',e:'Server',tile:'b'}};
const LAND={client:[0,.6],home:[.22,.6],ispA:[.46,.08],ixr:[.64,.95],ispB:[.8,.08],server:[1,.6]};
const PORT={client:[.15,0],home:[.72,.06],ispA:[.2,.4],ixr:[.85,.6],ispB:[.25,.8],server:[.78,1]};
const ZONES=[{ids:['client','home'],l:'HOME'},{ids:['ispB','server'],l:'ISP B',c:'core'}];
const ALL=[['client','home'],['home','ispA'],['ispA','ispB'],['ispA','ixr'],['ixr','ispB'],['ispB','server']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['client','home','ispA','ixr','ispB','server'];
const MAIN=[['client','home'],['home','ispA'],['ispA','ispB'],['ispB','server']];
const STEPS=[
{t:'인터넷은 망들의 망',te:'A network of networks',se:'The internet is thousands of separate networks, linked by routers.',s:'인터넷은 수만 개의 망이 라우터로 이어진 거대한 그물이다.',show:SHOW,e:act(...ALL),m:['6개 지점','—','—','전국 도로망'],
 x:'인터넷은 한 회사가 운영하는 하나의 망이 아닙니다. 통신사, 기업, 대학, 클라우드 회사가 각자 운영하는 수만 개의 망(AS, Autonomous System)이 서로 연결된 것입니다. 망과 망이 만나는 곳에는 라우터가 있어 패킷을 다음 망으로 넘겨줍니다.',
 k:'전국 도로가 동네 골목, 시내 도로, 고속도로로 이어지듯, 인터넷도 작은 망과 큰 망이 층층이 이어져 있습니다.',
 f:[{n:['ispA','Network A']},{n:['ixr','Transit']},{n:['ispB','Network B']}]},
{t:'라우터는 다음 칸만 안다',te:'Routers only know the next hop',se:'Each router checks its routing table and sends the packet one step closer.',s:'라우터는 라우팅 표를 보고 패킷을 목적지에 한 칸 더 가까운 곳으로 넘긴다.',show:SHOW,e:act(['client','home'],['home','ispA']),m:['라우터','1 ms 미만','—','갈림길 표지판'],
 x:'라우터는 목적지까지의 전체 경로를 알지 못합니다. 대신 "이 주소 범위로 가는 패킷은 저쪽으로"라고 적힌 라우팅 표가 있어서, 패킷이 올 때마다 목적지 IP를 보고 다음 라우터(next hop)를 고릅니다. 집 공유기의 표는 단순해서, 집 밖으로 가는 패킷은 모두 통신사 쪽으로 보냅니다.',
 k:'갈림길마다 서 있는 표지판만 보고도 서울에서 부산까지 갈 수 있는 것과 같습니다.',
 f:[['client','home','to 203.0.113.10'],{n:['home','Not local → ISP']},['home','ispA','Packet','push'],{n:['ispA','Table: → ISP B']}]},
{t:'한 칸씩 건너간다',te:'Hop by hop',se:'Every hop lowers the packet\'s TTL by one, so lost packets can\'t loop forever.',s:'패킷은 라우터를 한 칸씩 건너가고, 칸마다 TTL 값이 1씩 줄어든다.',show:SHOW,e:act(...MAIN),m:['라우터들','칸마다 수 ms','TTL 64 → 61','버스 정류장'],
 x:'패킷은 라우터를 하나씩 건너뛰며(hop) 목적지로 갑니다. 패킷에는 TTL(Time To Live)이라는 숫자가 있어서, 라우터를 지날 때마다 1씩 줄어듭니다. 0이 되면 패킷은 버려집니다. 길을 잘못 들어 같은 곳을 맴도는 패킷이 인터넷을 영원히 떠돌지 않게 하는 장치입니다.',
 k:'서울에서 미국 서버까지는 보통 10~20개의 라우터를 거칩니다.',
 f:[['client','home','TTL 64'],['home','ispA','TTL 63'],['ispA','ispB','TTL 62','push'],['ispB','server','TTL 61'],{n:['server','Arrived']}]},
{t:'망끼리 길을 알려 준다',te:'Networks share routes with BGP',se:'Networks tell each other which addresses they can reach, using BGP.',s:'망들은 BGP로 "이 주소들은 우리를 통해 갈 수 있다"고 서로 알린다.',show:SHOW,e:act(['ispA','ispB'],['ispA','ixr'],['ixr','ispB']),m:['통신사 라우터','수 초~수 분','—','교통 안내 방송'],
 x:'라우팅 표는 누가 채울까요? 망과 망 사이에서는 BGP(Border Gateway Protocol)라는 약속으로 정보를 주고받습니다. 통신사 B가 "203.0.113.0으로 시작하는 주소는 우리 망에 있다"고 알리면, 이웃 망들이 이를 기록하고 또 그 이웃에게 전합니다. 이렇게 전 세계 라우터가 어디로 보내야 하는지를 배웁니다.',
 k:'BGP는 가장 짧은 길만이 아니라 요금, 계약 관계 같은 정책까지 고려해 길을 고릅니다.',
 f:[{p:[['ispB','ispA','203.0.113.0/24 here'],['ispB','ixr','203.0.113.0/24 here']]},['ixr','ispA','Via transit too','ack'],{n:['ispA','2 routes known']}]},
{t:'길이 끊기면 돌아간다',te:'Routing around failures',se:'If a link breaks, routers switch to another path within seconds.',s:'연결이 끊기면 라우터는 몇 초 안에 다른 길로 바꾼다.',show:SHOW,e:act(['client','home'],['home','ispA'],['ispA','ixr'],['ixr','ispB'],['ispB','server']).map(([a,b,f])=>a==='ispA'&&b==='ispB'?[a,b,'x']:[a,b,f]),m:['통신사 라우터','수 초','—','우회 도로'],
 x:'통신사 A와 B를 잇는 광케이블이 공사 중에 끊겼다고 해 봅시다. 라우터는 이웃과 주고받던 신호가 끊긴 것을 알아채고, 미리 알고 있던 다른 길(중계 망을 거치는 길)로 패킷을 보냅니다. 조금 더 멀리 돌아가지만 연결은 이어집니다.',
 k:'인터넷은 처음부터 일부가 망가져도 전체가 멈추지 않도록 설계되었습니다.',
 f:[{n:['ispA','Link down']},['ispA','ispB','Packet','lost'],{n:['ispA','Reroute → transit']},['ispA','ixr','Packet','push'],['ixr','ispB','Packet'],['ispB','server','Packet'],{n:['server','Arrived']}]},
{t:'traceroute로 길을 본다',te:'Seeing the path with traceroute',se:'traceroute sends packets with TTL 1, 2, 3… and lists each router that replies.',s:'traceroute는 TTL을 1, 2, 3…으로 늘려 보내며 답하는 라우터를 차례로 보여 준다.',show:SHOW,e:act(['client','home'],['home','ispA']),m:['내 컴퓨터','칸마다 측정','TTL 1, 2, 3…','징검다리 세기'],
 x:'TTL이 0이 되면 라우터는 패킷을 버리면서 보낸 사람에게 "여기서 끝났다"는 알림을 돌려보냅니다. traceroute(윈도우는 tracert)는 이 성질을 이용해 TTL을 1, 2, 3…으로 하나씩 늘려 보내고, 답을 보낸 라우터의 주소와 걸린 시간을 차례로 보여 줍니다.',
 k:'터미널에서 직접 해 볼 수 있습니다. macOS나 리눅스는 traceroute zuply.co.kr, 윈도우는 tracert zuply.co.kr입니다.',
 f:[['client','home','TTL 1'],['home','client','Hop 1: home','ack'],['client','home','TTL 2'],['home','ispA','TTL 1'],['ispA','home','Hop 2: ISP A','ack'],['home','client','Hop 2','ack'],{n:['client','Hop 1 · 2 · 3 …']}]}];
const MLAB=['지금 일하는 곳','걸리는 시간','표시','비유'];
"""

out.update({
    "tcp": lesson(TPL, title="TCP/IP와 핸드셰이크", h1="연결은 악수로 시작한다",
                  lead="데이터를 보내기 전에 컴퓨터와 서버는 세 번 악수합니다. 패킷, 포트, SYN·ACK, 재전송까지 7단계로 따라가 보세요.",
                  aria="TCP 연결 흐름도", note="시간은 일반적인 인터넷 연결 기준 대략값입니다. IP 주소는 문서용 예시입니다.",
                  rtitle="TCP/IP Handshake", data=TCP),
    "nat": lesson(TPL, title="LAN·WAN·NAT", h1="집 안의 망과 바깥의 망",
                  lead="공유기는 집 안 기기에 사설 IP를 나눠 주고, 바깥으로 나갈 때 주소를 바꿉니다. LAN, WAN, NAT를 6단계로 따라가 보세요.",
                  aria="LAN과 WAN 구성도", note="IP 주소와 포트 번호는 설명을 위한 예시입니다.",
                  rtitle="LAN, WAN and NAT", data=NAT),
    "routing": lesson(TPL, title="인터넷 라우팅", h1="패킷은 어떻게 길을 찾을까",
                      lead="라우터는 다음 칸만 알고도 패킷을 지구 반대편까지 보냅니다. 라우팅 표, TTL, BGP, traceroute를 6단계로 따라가 보세요.",
                      aria="인터넷 라우팅 구성도", note="시간과 홉 수는 일반적인 대략값입니다. IP 주소는 문서용 예시입니다.",
                      rtitle="How Internet Routing Works", data=ROUTING),
})
