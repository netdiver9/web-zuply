SAT = r"""
const NODES={laptop:{t:'mon',scr:'Wi-Fi',l:'노트북',e:'Your laptop',tile:'w'},dish:{t:'dish',l:'위성 단말',e:'Dish (terminal)',tile:'a'},sat1:{t:'sat',float:1,l:'위성 A',e:'Satellite A',tile:'v'},sat2:{t:'sat',float:1,l:'위성 B',e:'Satellite B',tile:'v'},gs:{t:'gs',l:'지상국',e:'Ground station',tile:'g'},net:{t:'srv',chip:'NET',l:'인터넷',e:'Internet',tile:'b'}};
const LAND={laptop:[0,1],dish:[.2,.82],sat1:[.36,0],sat2:[.66,0],gs:[.74,.86],net:[1,.86]};
const PORT={sat1:[.18,0],sat2:[.82,0],dish:[.16,.58],gs:[.84,.6],laptop:[.2,1],net:[.82,1]};
const ZONES=[{ids:['sat1','sat2'],l:'LOW EARTH ORBIT',c:'core'}];
const ALL=[['laptop','dish'],['dish','sat1'],['sat1','sat2'],['sat1','gs'],['sat2','gs'],['gs','net']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['laptop','dish','sat1','sat2','gs','net'];
const STEPS=[
{t:'하늘에도 통신망이 있다',te:'A network in the sky',se:'Where there are no cables or towers, satellites carry the internet.',s:'케이블과 기지국이 닿지 않는 곳에서는 위성이 인터넷을 실어 나른다.',show:SHOW,e:act(...ALL),m:['6개 지점','—','—','하늘의 중계탑'],
 x:'바다 위의 배, 하늘의 비행기, 산간 마을, 재난 현장처럼 케이블과 기지국이 닿지 않는 곳이 많습니다. 위성 통신은 우주에 떠 있는 위성을 중계탑처럼 써서 이런 곳에 인터넷과 전화를 연결합니다. 크게 약 36,000 km 높이의 정지궤도(GEO) 위성과, 약 550 km 높이에서 빠르게 도는 저궤도(LEO) 위성이 쓰입니다.',
 k:'지상의 망이 땅에 깔린 길이라면, 위성망은 하늘을 거쳐 가는 길입니다. 마지막에는 결국 지상의 인터넷과 만납니다.',
 f:[{n:['dish','User terminal']},{n:['sat1','LEO · ~550 km']},{n:['gs','Gateway']}]},
{t:'접시 안테나가 위성을 따라간다',te:'The dish tracks the satellite',se:'A flat antenna steers its beam electronically to follow fast-moving satellites.',s:'평평한 안테나가 전파의 방향을 전자적으로 바꿔 빠르게 움직이는 위성을 따라간다.',show:SHOW,e:act(['laptop','dish'],['dish','sat1']),m:['위성 단말','—','—','손전등으로 비행기 비추기'],
 x:'노트북은 Wi-Fi로 집 밖의 위성 단말(접시 안테나)에 연결됩니다. 저궤도 위성은 몇 분 만에 하늘을 가로질러 지나가기 때문에, 단말은 수많은 작은 안테나 소자의 신호 타이밍을 조절해 전파의 방향을 바꿉니다(위상 배열 안테나). 몸체를 돌리지 않고도 위성을 따라갈 수 있습니다.',
 k:'단말이 하늘을 넓게 볼 수 있어야 합니다. 나무나 건물이 가리면 연결이 자주 끊깁니다.',
 f:[['laptop','dish','Wi-Fi'],{n:['dish','Find satellite']},{n:['dish','Steer beam']},['dish','sat1','Hello','push'],{n:['sat1','Connected']}]},
{t:'위성까지 올라간다',te:'Up to the satellite',se:'Data rides radio waves about 550 km up to a satellite moving at 7.6 km/s.',s:'데이터는 전파를 타고 약 550 km 위, 초속 약 7.6 km로 움직이는 위성까지 올라간다.',show:SHOW,e:act(['laptop','dish'],['dish','sat1']),m:['단말 → 위성','약 550 km','편도 약 2 ms','공중의 징검다리'],
 x:'단말은 데이터를 높은 주파수의 전파에 실어 위성으로 쏘아 올립니다(업링크). 전파는 빛의 속도로 달리므로 550 km를 가는 데 약 2 ms면 충분합니다. 위성은 초속 약 7.6 km로 지구를 돌기 때문에, 단말은 몇 분마다 다음 위성으로 연결을 넘깁니다(핸드오버).',
 k:'저궤도 위성 한 대가 내려다보는 땅은 좁아서, 지구 전체를 덮으려면 수천 대가 함께 돌아야 합니다.',
 f:[['laptop','dish','Packet'],['dish','sat1','Uplink','push'],{n:['sat1','7.6 km/s']},{n:['sat1','Handover soon']}]},
{t:'위성끼리 레이저로 잇는다',te:'Laser links between satellites',se:'Over oceans, satellites pass data to each other by laser until a ground station is in view.',s:'바다 위처럼 지상국이 없는 곳에서는 위성끼리 레이저로 데이터를 넘긴다.',show:SHOW,e:act(['sat1','sat2'],['sat2','gs']),m:['위성 ↔ 위성','수천 km','수 ms','릴레이 달리기'],
 x:'바로 아래에 지상국이 없다면, 위성은 옆 위성에게 레이저로 데이터를 넘깁니다. 진공에서는 빛이 광케이블 속보다 빠르게 달리기 때문에 먼 거리에서는 오히려 유리할 수 있습니다. 데이터는 지상국이 보이는 위성까지 릴레이처럼 전달됩니다.',
 k:'최신 저궤도 위성망은 우주에 또 하나의 광케이블 망을 깔고 있는 셈입니다.',
 f:[{n:['sat1','No station below']},['sat1','sat2','Laser','push'],{n:['sat2','Station in view']},['sat2','gs','Downlink']]},
{t:'지상국에서 인터넷으로',te:'From ground station to the internet',se:'The ground station receives the signal and hands it to the internet over fiber.',s:'지상국은 위성 신호를 받아 광케이블로 일반 인터넷에 넘긴다.',show:SHOW,e:act(['laptop','dish'],['dish','sat1'],['sat1','gs'],['gs','net']),m:['지상국 → 인터넷','—','수 ms','항구의 하역장'],
 x:'지상국(게이트웨이)은 큰 접시 안테나로 위성의 신호를 받아, 광케이블로 인터넷에 연결된 데이터센터에 넘깁니다. 여기서부터는 앞에서 배운 라우팅과 TCP/IP가 그대로 쓰입니다. 응답은 같은 길을 거꾸로 거쳐 노트북으로 돌아옵니다.',
 k:'위성망도 결국 지상의 인터넷에 이어집니다. 위성은 닿기 어려운 구간을 대신 이어 주는 역할입니다.',
 f:[['sat1','gs','Downlink'],{n:['gs','Radio → fiber']},['gs','net','Packet','push'],['net','gs','Response','ack'],['gs','sat1','Response','ack'],['sat1','dish','Response','ack'],['dish','laptop','Response','ack']]},
{t:'높이가 지연을 정한다',te:'Altitude sets the delay',se:'Geostationary links take about 600 ms per round trip. Low orbit brings it down to tens of ms.',s:'정지궤도 위성은 왕복 약 0.6초, 저궤도 위성은 수십 ms의 지연이 생긴다.',show:SHOW,e:act(['dish','sat1'],['sat1','gs']),m:['위성 높이','36,000 km · 550 km','약 600 ms · 약 30–60 ms','먼 산과 가까운 언덕'],
 x:'정지궤도 위성은 약 36,000 km 높이에서 지구와 같은 속도로 돌아 하늘의 한 점에 멈춘 것처럼 보이고, 3대 정도로 지구 대부분을 덮습니다. 하지만 요청과 응답이 그 먼 거리를 오가면 왕복 약 0.6초가 걸려 화상 통화나 게임에는 불편합니다. 저궤도 위성은 훨씬 가까워 왕복 수십 ms로 지상 인터넷에 가깝지만, 위성이 많이 필요하고 계속 연결을 넘겨야 합니다.',
 k:'비나 눈이 많이 오면 전파가 약해질 수 있습니다. 그래도 케이블이 없는 곳에서는 가장 좋은 선택지가 되기도 합니다.',
 f:[{n:['sat1','LEO: ~30–60 ms']},{n:['gs','GEO: ~600 ms']},['dish','sat1','Ping'],['sat1','gs','Ping'],['gs','sat1','Pong','ack'],['sat1','dish','Pong','ack']]}];
const MLAB=['지금 일하는 곳','거리','지연','비유'];
"""
out.update({
    "satellite": lesson(TPL, title="위성 통신의 원리", h1="하늘을 거쳐 가는 인터넷",
                        lead="케이블과 기지국이 없는 곳에서는 위성이 길이 됩니다. 접시 안테나, 저궤도 위성, 레이저 링크, 지상국을 6단계로 따라가 보세요.",
                        aria="위성 통신 구성도", note="거리와 지연은 일반적인 저궤도·정지궤도 위성 기준 대략값입니다.",
                        rtitle="How Satellite Internet Works", data=SAT),
})
