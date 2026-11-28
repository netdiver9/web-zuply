# Executed by build_one.py / build_lessons.py: message queue, real-time, retry and auth lessons.

# ---- custom isometric icons, shared by the lessons below ----
ICONS = r"""
const DEV_EXTRA=(n,s)=>{let g='',top;const PAL=p=>[`url(#t-${p})`,`var(--${p}3)`,`var(--${p}4)`];
 if(n.t==='tray'){const p=n.p||'v',U=s*.46,V=s*.25,Z=s*.08,cz=Z*.6,cv=V*.74,ch=s*.3,cols=n.bad?['#f6f8fa','#f6f8fa','#f6f8fa','#e5484d']:['#f6f8fa','#f6f8fa','#f6f8fa','#ffc233'];
  const card=(k,c,front)=>{const u=k*U*.6;const face=`<path d="M${cv*.12} ${ch*.14}L${cv} ${ch*.5}L${cv*1.88} ${ch*.14}" fill="none" stroke="${c==='#f6f8fa'?'#8b97a0':'#5a2a00'}" stroke-width="1.3" stroke-linejoin="round"/>`+
    (n.bad&&front?`<path d="M${cv*.7} ${ch*.55}l${cv*.6} ${ch*.3}M${cv*1.3} ${ch*.55}l${-cv*.6} ${ch*.3}" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>`:'');
   return `<g transform="translate(${(u).toFixed(1)} ${(u*ISO).toFixed(1)})">${box(s*.022,cv,ch,cz,[c,c==='#f6f8fa'?'#d6dce1':c,c==='#f6f8fa'?'#e9eef2':c],{rf:face})}</g>`};
  g=csh(U,V)+box(U,V,Z,0,PAL(p))+[-1.5,-.5,.5,1.5].map((k,i)=>card(k,cols[i],i===3)).join('');
  top=-(-U*.6*1.5+cv)*ISO-cz-ch-s*.04}
 else if(n.t==='hub'){const p=n.p||'v',U=s*.3,Z=s*.14,r=s*.09,mz=s*.22;const sp=[[-1,0],[1,0],[0,-1],[0,1]].map(([a,b])=>`<path d="M0 0L${a*U*.72} ${b*U*.72}" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".9"/><circle cx="${a*U*.72}" cy="${b*U*.72}" r="${s*.04}" fill="#2ee58a" stroke="var(--ol)" stroke-width="1"/>`).join('');
  g=csh(U,U)+box(U,U,Z,0,PAL(p),{top:sp,rf:LED(U*.5,Z*.5,s*.02,'#2ee58a')+LED(U*.9,Z*.5,s*.02,'#2ee58a')+LED(U*1.3,Z*.5,s*.02,'#f5a300')})+
   box(s*.05,s*.05,mz,Z,['#f4f6f8','#d6dce1','#b9c2c9'])+`<circle class="ol" cx="0" cy="${-Z-mz-s*.03}" r="${s*.055}" fill="#ffc233"/>`+wv(0,-Z-mz-s*.03,s,2);top=-Z-mz-s*.3}
 else if(n.t==='brk'){const U=s*.3,V=s*.1,Z=s*.56,W=2*U;
  const lf=`<rect x="${W*.26}" y="${Z*.14}" width="${W*.48}" height="${Z*.62}" rx="3" fill="#1d252b" stroke="var(--ol)" stroke-width="1"/>`+
   `<rect x="${W*.36}" y="${Z*.2}" width="${W*.28}" height="${Z*.26}" rx="2" fill="#f5a300" stroke="var(--ol)" stroke-width="1"/>`+
   `<rect x="${W*.36}" y="${Z*.2}" width="${W*.28}" height="${Z*.07}" rx="1" fill="#fff" opacity=".55"/>`+
   `<path d="M${W*.1} ${Z*.86}l${W*.05} ${-Z*.12}h${W*.04}l${-W*.03} ${Z*.06}h${W*.05}l${-W*.08} ${Z*.13}l${W*.02} ${-Z*.07}h${-W*.05}z" fill="#ffc233" stroke="var(--ol)" stroke-width=".8"/>`+
   LED(W*.86,Z*.12,s*.022,'#2ee58a');
  g=csh(U,V*2)+box(U,V,Z,0,['#f4f6f8','#e3e8ec','#c4ccd2'],{lf});top=-(U+V)*ISO-Z}
 else if(n.t==='lock'){const U=s*.3,V=s*.14,Z=s*.38,a=U*.56,h=s*.2,W=2*U,X=(u,z)=>`${u.toFixed(1)} ${(u*ISO-z).toFixed(1)}`;
  const sh=`M${X(-a,Z)}L${X(-a,Z+h)}C${X(-a,Z+h+a*1.35)} ${X(a,Z+h+a*1.35)} ${X(a,Z+h)}L${X(a,Z)}`;
  const lf=`<circle cx="${W*.5}" cy="${Z*.36}" r="${Z*.11}" fill="#3a2a10"/><path d="M${W*.46} ${Z*.4}h${W*.08}l${W*.03} ${Z*.3}h${-W*.14}z" fill="#3a2a10"/>`;
  g=csh(U,V)+`<path d="${sh}" fill="none" stroke="var(--ol)" stroke-width="${(s*.1).toFixed(1)}" stroke-linecap="round"/><path d="${sh}" fill="none" stroke="#c9d1d8" stroke-width="${(s*.07).toFixed(1)}" stroke-linecap="round"/><path d="${sh}" fill="none" stroke="#fff" stroke-width="${(s*.018).toFixed(1)}" stroke-linecap="round" opacity=".7" transform="translate(${-s*.012} 0)"/>`+
   box(U,V,Z,0,['#f6d77e','#e0b450','#b7862a'],{lf});top=-a*ISO-Z-h-a*1.05}
 else if(n.t==='watch'){const r=s*.34,ry=r*ISO,h=s*.12,cy=-h;
  g=`<ellipse class="sh" cx="0" cy="${ry*.35}" rx="${r*1.1}" ry="${ry*.85}"/>`+
   `<path class="ol" d="M${-r} ${cy}V0A${r} ${ry} 0 0 0 ${r} 0V${cy}Z" fill="url(#s-a)"/>`+
   `<rect class="ol" x="${-s*.03}" y="${cy-ry-s*.1}" width="${s*.06}" height="${s*.12}" fill="#c9d1d8"/><rect class="ol" x="${-s*.07}" y="${cy-ry-s*.15}" width="${s*.14}" height="${s*.06}" rx="${s*.02}" fill="#e5484d"/>`+
   `<ellipse class="ol" cx="0" cy="${cy}" rx="${r}" ry="${ry}" fill="url(#t-a)"/><ellipse class="ol" cx="0" cy="${cy}" rx="${r*.8}" ry="${ry*.8}" fill="#f6f8fa"/>`+
   [0,1,2,3,4,5,6,7,8,9,10,11].map(i=>{const t=i*Math.PI/6,c=Math.cos(t),q=Math.sin(t);return `<path d="M${c*r*.68} ${cy+q*ry*.68}L${c*r*.76} ${cy+q*ry*.76}" stroke="#55616b" stroke-width="${i%3?1:1.8}"/>`}).join('')+
   `<path d="M0 ${cy}L${r*.5} ${cy-ry*.25}" stroke="#e5484d" stroke-width="2.4" stroke-linecap="round"/><path d="M0 ${cy}L${-r*.1} ${cy-ry*.55}" stroke="#1d252b" stroke-width="2.4" stroke-linecap="round"/><circle cx="0" cy="${cy}" r="${s*.025}" fill="#1d252b"/>`;
  top=cy-ry-s*.17}
 else return null;
 return {g,top}};
"""

QUEUE = ICONS + r"""
const NODES={user:{t:'ph',l:'사용자',e:'Shopper',tile:'a'},web:{t:'srv',chip:'WEB',l:'웹 서버 (생산자)',e:'Web server · producer',tile:'g'},q:{t:'tray',p:'v',l:'메시지 큐',e:'Message queue',tile:'v'},w1:{t:'srv',chip:'W1',l:'작업자 1 (소비자)',e:'Worker 1 · consumer',tile:'w'},w2:{t:'srv',chip:'W2',l:'작업자 2 (소비자)',e:'Worker 2 · consumer',tile:'w'},dlq:{t:'tray',p:'m',bad:1,l:'데드레터 큐',e:'Dead-letter queue',tile:'m'}};
const LAND={user:[0,.38],web:[.28,.38],q:[.56,.38],w1:[1,0],w2:[1,.86],dlq:[.56,1]};
const PORT={user:[.12,0],web:[.88,0],q:[.5,.36],w1:[.12,.68],w2:[.88,.68],dlq:[.5,1]};
const ZONES=[];
const ALL=[['user','web'],['web','q'],['q','w1'],['q','w2'],['q','dlq']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['user','web','q','w1','w2'];
const STEPS=[
{t:'일을 줄 세워 두는 곳',te:'A waiting line for work',se:'A producer puts messages into a queue, and consumers take them out in order.',s:'생산자가 할 일을 큐에 넣고, 소비자가 차례로 꺼내 처리한다.',show:SHOW,e:act(['web','q'],['q','w1'],['q','w2']),m:['큐','—','0개','식당 주문표 걸이'],
 x:'메시지 큐(Message Queue)는 "해야 할 일"을 적은 메시지를 잠시 보관하는 줄입니다. 일을 넣는 쪽을 생산자(producer), 꺼내서 처리하는 쪽을 소비자(consumer) 또는 작업자(worker)라고 부릅니다. 둘은 서로를 직접 부르지 않고 큐만 바라보기 때문에, 한쪽이 잠시 멈추거나 느려져도 다른 쪽은 계속 일할 수 있습니다. 메시지는 보통 들어온 순서대로 나갑니다(FIFO, First In First Out). RabbitMQ, Apache Kafka, Amazon SQS 같은 제품이 이 역할을 합니다.',
 k:'생산자와 소비자를 떼어 놓는 것을 "느슨한 결합"이라고 합니다. 작업자 코드를 고쳐 다시 배포하는 동안에도 웹 서버는 주문을 계속 받을 수 있습니다.',
 f:[{n:['web','Producer: puts jobs in']},{n:['q','Queue: holds jobs']},{p:[['web','q','Job A','push'],['q','w1','Job 0']]},{n:['w1','Consumer: takes jobs out']},{n:['q','Length: 1']}]},
{t:'지금 답하고, 일은 나중에',te:'Reply now, do the work later',se:'The web server drops an "email" job in the queue and confirms the order in about 50 ms.',s:'웹 서버는 메일 보내기 일을 큐에 넣자마자 약 0.05초 만에 주문 완료를 알린다.',show:SHOW,e:act(['user','web'],['web','q']),m:['웹 서버 → 큐','약 0.05초','1개','주문 접수 영수증'],
 x:'온라인 쇼핑몰에서 주문 버튼을 누르면 주문 확인 이메일을 보내야 합니다. 메일 서버와 주고받는 데는 2~3초가 걸리기도 하는데, 그동안 손님을 빈 화면 앞에서 기다리게 할 이유는 없습니다. 그래서 웹 서버는 주문을 DB에 저장한 뒤 "주문 #1042 확인 메일 보내기"라는 메시지만 큐에 넣고 바로 "주문 완료" 화면을 돌려줍니다. 메시지를 넣는 데는 수 ms면 충분하므로, 손님은 3초 대신 약 0.05초 만에 답을 받습니다. 실제 메일은 몇 초 뒤 작업자가 보냅니다.',
 k:'사진 크기 줄이기, 동영상 변환, 알림 발송, 통계 집계처럼 "곧 끝나야 하지만 지금 당장일 필요는 없는 일"이 큐에 잘 맞습니다.',
 f:[['user','web','Place order #1042'],{n:['web','Save order to DB']},['web','q','Email for #1042','push'],{n:['q','Length: 0 → 1']},['web','user','Order confirmed!','ack'],{n:['user','Waited ~0.05 s']}]},
{t:'꺼내고, 처리하고, 확인한다',te:'Pull, process, acknowledge',se:'A worker takes the message, sends the email, then sends an ACK so the queue can delete it.',s:'작업자가 메시지를 꺼내 처리하고, 끝나면 ACK를 보내 큐에서 지우게 한다.',show:SHOW,e:act(['q','w1']),m:['큐 ↔ 작업자 1','약 2초','1 → 0개','택배 수령 서명'],
 x:'작업자는 큐에 "일 있어요?"라고 물어 메시지 하나를 받아 갑니다. 이때 큐는 메시지를 바로 지우지 않고, 다른 작업자에게 보이지 않게 잠시 숨겨 둡니다(예: 30초). 작업자 1이 메일을 다 보내고 "처리 완료(ACK)"를 알리면 그제야 큐가 메시지를 지웁니다. 만약 30초 안에 ACK가 오지 않으면 메시지는 다시 보이게 되어 다른 작업자가 가져갈 수 있습니다. 이렇게 해서 작업자가 도중에 멈춰도 일이 사라지지 않습니다.',
 k:'ACK를 "꺼낼 때"가 아니라 "다 끝낸 뒤"에 보내는 것이 핵심입니다. 꺼내자마자 지우면, 처리 중에 작업자가 멈췄을 때 그 일은 영영 사라집니다.',
 f:[['w1','q','Any job?'],['q','w1','Email for #1042'],{n:['q','Hidden for 30 s']},{n:['w1','Sending email… 2 s']},['w1','q','ACK #1042','ack'],{n:['q','Deleted · length 0']}]},
{t:'몰려와도 버틴다',te:'Absorbing traffic spikes',se:'During a flash sale, 10,000 orders arrive in a minute. The queue grows, and the worker keeps its steady pace.',s:'반짝 할인에 1분 만에 주문 1만 건이 몰려도, 큐가 길어질 뿐 작업자는 제 속도로 일한다.',show:SHOW,e:act(['user','web'],['web','q'],['q','w1']),m:['큐','대기 늘어남','약 1만 개','저수지'],
 x:'밤 9시 반짝 할인이 시작되자 1분 동안 주문이 1만 건 들어왔다고 해 봅시다. 웹 서버가 메일을 직접 보냈다면 메일 서버가 몰려드는 요청을 버티지 못해 주문까지 실패했을 것입니다. 큐가 있으면 메시지가 줄에 쌓일 뿐이고, 작업자 1은 1초에 약 20통이라는 자기 속도를 지키며 하나씩 처리합니다. 이 속도라면 1만 통을 다 보내는 데 약 8분이 걸립니다. 큐가 넘치는 물을 잠시 담았다가 천천히 흘려보내는 저수지 역할을 합니다.',
 k:'큐 길이는 시스템의 건강 지표입니다. 길이가 꾸준히 늘기만 한다면 들어오는 속도를 처리 속도가 못 따라가고 있다는 뜻입니다.',
 f:[{p:[['user','web','Order'],['web','q','Job','push']]},{n:['q','Length: 2,000']},{p:[['user','web','Order'],['web','q','Job','push']]},{n:['q','Length: 6,000']},{p:[['user','web','Order'],['web','q','Job','push'],['q','w1','Job']]},{n:['q','Length: 10,000']},{n:['w1','Still 20 per second']}]},
{t:'작업자를 늘리면 빨라진다',te:'More consumers, in parallel',se:'Two workers pull from the same queue at once, and each message goes to only one of them.',s:'작업자 두 대가 같은 큐에서 동시에 꺼내 간다. 메시지 하나는 한 작업자에게만 간다.',show:SHOW,e:act(['web','q'],['q','w1'],['q','w2']),m:['작업자 1 · 2','약 8분 → 4분','1만 → 0개','계산대 추가'],
 x:'작업자를 한 대 더 붙이면 1초에 40통을 보낼 수 있어 1만 통이 약 4분 만에 끝납니다. 열 대를 붙이면 1분이 채 안 걸립니다. 큐는 메시지 하나를 한 번에 한 작업자에게만 건네주기 때문에, 작업자가 늘어도 같은 메일이 동시에 두 번 나가지 않습니다. 생산자인 웹 서버는 작업자가 몇 대인지 몰라도 되고, 코드도 바꿀 필요가 없습니다. 클라우드에서는 큐 길이에 맞춰 작업자 수를 자동으로 늘렸다 줄이기도 합니다.',
 k:'작업자를 늘릴 때는 그 뒤에 있는 메일 서버나 DB도 늘어난 속도를 버틸 수 있는지 함께 확인해야 합니다. 병목은 옮겨 갈 뿐 사라지지 않습니다.',
 f:[{n:['q','Length: 10,000']},{p:[['q','w1','Job 1'],['q','w2','Job 2']]},{p:[['w1','q','ACK 1','ack'],['w2','q','ACK 2','ack']]},{n:['q','Length: 5,000']},{p:[['q','w1','Job 3'],['q','w2','Job 4']]},{n:['q','Length: 0 · done in 4 min']}]},
{t:'두 번 와도 괜찮게',te:'At-least-once: be idempotent',se:'If a worker crashes before its ACK, the message is delivered again, so handling it twice must be safe.',s:'작업자가 ACK 전에 멈추면 메시지가 다시 배달된다. 그래서 두 번 처리해도 안전해야 한다.',show:SHOW,st:{w1:'dead'},e:act(['q','w1'],['q','w2']),m:['큐 → 작업자 2','약 30초 뒤','다시 1개','같은 택배 재배송'],
 x:'작업자 1이 주문 #1042의 메일을 보낸 직후, ACK를 보내기 직전에 멈춰 버렸습니다. 큐는 메일이 나갔는지 알 길이 없으니, 숨겨 둔 30초가 지나면 같은 메시지를 작업자 2에게 다시 줍니다. 이처럼 "최소 한 번은 배달한다(at-least-once)"는 방식은 일을 잃어버리지 않는 대신 가끔 같은 메시지가 두 번 올 수 있습니다. 그래서 작업자 2는 메일을 보내기 전에 "#1042 메일은 이미 보냈나?"를 DB에서 확인하고, 보냈다면 건너뛰어야 합니다. 그렇지 않으면 손님은 같은 메일을 두 통 받습니다.',
 k:'같은 일을 여러 번 해도 결과가 한 번 한 것과 같은 성질을 멱등성(idempotency)이라고 합니다. "정확히 한 번" 배달은 매우 어렵기 때문에, 실무에서는 at-least-once 배달에 멱등한 작업자를 짝지웁니다.',
 f:[['q','w1','Email for #1042'],{n:['w1','Email sent']},{n:['w1','Crashed before ACK']},{n:['q','30 s, no ACK']},{n:['q','Visible again · length 1']},['q','w2','Email for #1042'],{n:['w2','#1042 already sent? yes']},{n:['w2','Skip, no 2nd email']},['w2','q','ACK #1042','ack']]},
{t:'계속 실패하면 따로 모은다',te:'The dead-letter queue',se:'A message that fails three times moves to a dead-letter queue, so it stops blocking the line.',s:'세 번 실패한 메시지는 데드레터 큐로 옮겨, 줄을 막지 않게 하고 사람이 살펴본다.',show:['user','web','q','w1','w2','dlq'],e:act(['q','w2'],['q','dlq']),m:['큐 → 데드레터 큐','재시도 3회 후','1개 격리','반송함'],
 x:'손님이 이메일 주소를 "mina@gmial"처럼 잘못 적었다면 몇 번을 다시 시도해도 메일은 나가지 않습니다. 이런 메시지가 계속 큐로 돌아오면 작업자의 시간을 잡아먹고, 순서를 지켜야 하는 큐라면 뒤의 메시지까지 막힙니다. 그래서 큐마다 "최대 3번"처럼 재시도 한도를 정해 두고, 한도를 넘긴 메시지는 데드레터 큐(DLQ, Dead-Letter Queue)라는 별도의 줄로 옮깁니다. 개발자는 나중에 데드레터 큐를 열어 원인을 확인하고, 고친 뒤 원래 큐에 다시 넣거나 버립니다.',
 k:'데드레터 큐는 비어 있는 것이 정상입니다. 여기에 메시지가 쌓이기 시작하면 경보를 울리도록 설정해 두는 것이 좋습니다.',
 f:[['q','w2','Email for #1077'],{n:['w2','Bad address · fail 1/3']},['q','w2','Email for #1077'],{n:['w2','Fail 2/3']},['q','w2','Email for #1077'],{n:['w2','Fail 3/3']},['q','dlq','#1077','push'],{n:['dlq','Parked for a human']},{n:['q','Line keeps moving']}]}];
STEPS.forEach(st=>{const o=[],last={};let t=0;for(const it of st.f){if(it&&it.n){const id=it.n[0];if(last[id]!=null&&t-last[id]<2100){const w=2100-(t-last[id]);o.push({w});t+=w}last[id]=t;t+=700}else if(it&&it.w)t+=it.w;else t+=900;o.push(it)}st.f=o});
const MLAB=['지금 일하는 곳','걸리는 시간','큐에 쌓인 일','비유'];
"""

REALTIME = ICONS + r"""
const NODES={me:{t:'mon',scr:'chat',l:'내 브라우저',e:'You · browser',tile:'w'},ws1:{t:'srv',chip:'S1',l:'채팅 서버 1',e:'Chat server 1',tile:'g'},friend:{t:'ph',c:'#c9b8ff',l:'친구 폰',e:"Friend's phone",tile:'a'},ws2:{t:'srv',chip:'S2',l:'채팅 서버 2',e:'Chat server 2',tile:'g'},bus:{t:'hub',p:'v',l:'메시지 브로커',e:'Pub/Sub broker',tile:'v'}};
const LAND={me:[0,.36],ws1:[.42,.36],friend:[1,.36],bus:[.42,1],ws2:[1,1]};
const PORT={me:[.12,0],friend:[.88,0],ws1:[.5,.5],ws2:[.88,.74],bus:[.12,1]};
const ZONES=[];
const ALL=[['me','ws1'],['friend','ws1'],['ws1','bus'],['friend','ws2'],['ws2','bus']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['me','ws1','friend'];
const STEPS=[
{t:'웹은 물어야 답한다',te:'The web only answers when asked',se:'In plain HTTP the browser asks and the server answers. The server cannot start the conversation.',s:'보통의 HTTP에서는 브라우저가 물어야 서버가 답한다. 서버가 먼저 말을 걸 수 없다.',show:SHOW,e:act(['me','ws1'],['friend','ws1']),m:['브라우저 → 서버','—','요청 1번에 응답 1번','손님과 점원'],
 x:'웹의 기본 약속인 HTTP는 "요청 하나에 응답 하나"입니다. 브라우저가 페이지를 달라고 하면 서버가 답하고, 대화는 거기서 끝납니다. 그런데 친구가 채팅 서버로 "점심 먹었어?"라는 메시지를 보냈다면, 서버는 그 메시지를 내 화면에 먼저 밀어 넣을 방법이 없습니다. 내가 묻기 전까지 서버는 기다릴 수밖에 없습니다. 실시간 통신 기술은 모두 이 문제를 푸는 서로 다른 방법입니다.',
 k:'채팅, 알림, 주식 시세, 배달 위치처럼 "새 소식이 생기는 쪽"이 서버일 때 이 문제가 생깁니다.',
 f:[['me','ws1','GET /chat'],['ws1','me','Page + old messages','ack'],{n:['me','Conversation over']},['friend','ws1','Lunch?','push'],{n:['ws1','New message for you…']},{n:['ws1','…but can\'t reach you']}]},
{t:'계속 물어보기: 폴링',te:'Polling: asking again and again',se:'The browser asks "anything new?" every 3 seconds, and most answers are "no".',s:'브라우저가 3초마다 "새 소식 있어?"라고 묻는다. 대답은 대부분 "없어"다.',show:SHOW,e:act(['me','ws1']),m:['브라우저 ↔ 서버','최대 3초 늦음','요청 대부분 헛걸음','"도착했어요?"'],
 x:'가장 쉬운 방법은 정해진 간격마다 다시 묻는 폴링(polling)입니다. 3초마다 "새 메시지 있어?"라고 물으면, 새 메시지는 늦어도 3초 안에 보입니다. 하지만 사용자 100만 명이 3초마다 묻는다면 서버는 1초에 약 33만 개의 요청을 받고, 그중 대부분은 "없음"으로 끝나는 헛걸음입니다. 간격을 1초로 줄이면 더 빨라지지만 요청은 세 배가 됩니다. 반대로 간격을 늘리면 서버는 편해지지만 메시지가 늦게 보입니다.',
 k:'폴링은 단순하고 어떤 환경에서도 잘 동작한다는 큰 장점이 있습니다. 몇 분에 한 번 바뀌는 정보라면 지금도 좋은 선택입니다.',
 f:[['me','ws1','Anything new?'],['ws1','me','No','ack'],{n:['me','Wait 3 s']},['me','ws1','Anything new?'],['ws1','me','No','ack'],{n:['me','Wait 3 s']},['me','ws1','Anything new?'],['ws1','me','1 new: Lunch?','ack'],{n:['ws1','1M users = ~330k req/s']}]},
{t:'붙잡고 기다리기: 롱 폴링',te:'Long polling: hold the line',se:'The server holds the request open until there is news, then answers at once.',s:'서버는 새 소식이 생길 때까지 요청을 붙잡고 있다가, 생기는 즉시 답한다.',show:SHOW,e:act(['me','ws1'],['friend','ws1']),m:['채팅 서버','거의 즉시','헛걸음 크게 줄어듦','"오면 알려 주세요"'],
 x:'롱 폴링(long polling)은 질문을 받은 서버가 바로 답하지 않고 기다리는 방식입니다. 브라우저가 "새 메시지 생기면 알려 줘"라고 요청을 보내면, 서버는 그 요청을 열어 둔 채 붙잡고 있습니다. 친구가 메시지를 보내는 순간 서버는 붙잡고 있던 요청에 메시지를 실어 답하고, 브라우저는 받자마자 다음 질문을 다시 보냅니다. 30초쯤 아무 일이 없으면 서버가 빈 답을 보내고 새로 시작합니다. 덕분에 메시지는 거의 즉시 도착하고 헛걸음 요청도 크게 줄어듭니다.',
 k:'그래도 메시지를 하나 받을 때마다 요청을 새로 보내야 하고, 요청마다 쿠키 같은 머리말이 따라붙습니다. 메시지가 잦으면 이 부담이 쌓입니다.',
 f:[['me','ws1','Tell me when new'],{n:['ws1','Holding request… 0 s']},{n:['ws1','Holding… 12 s']},['friend','ws1','Lunch?','push'],['ws1','me','Lunch?','ack'],{n:['me','Got it instantly']},['me','ws1','Tell me when new'],{n:['ws1','Holding again']}]},
{t:'계속 열린 길: 웹소켓',te:'WebSocket: a two-way pipe',se:'One handshake opens a lasting connection, and both sides can send at any time.',s:'한 번 연결을 맺으면 계속 열려 있고, 양쪽 모두 아무 때나 보낼 수 있다.',show:SHOW,e:act(['me','ws1'],['friend','ws1']),m:['브라우저 ↔ 서버','수십 ms','양방향','전화 통화'],
 x:'웹소켓(WebSocket)은 처음에 HTTP로 "이 연결을 웹소켓으로 바꾸자(Upgrade)"고 요청하고, 서버가 "101 Switching Protocols"로 동의하면 그 연결을 끊지 않고 계속 씁니다. 이후로는 브라우저와 서버 누구든 원할 때 메시지를 보낼 수 있습니다. 메시지마다 붙는 머리말은 2~14바이트 정도라, 매번 수백 바이트의 HTTP 머리말을 보내는 폴링보다 훨씬 가볍습니다. 친구가 "점심 먹었어?"를 보내면 서버가 내 연결로 바로 밀어 주고, 내 답장 "응, 너는?"도 같은 연결로 올라갑니다.',
 k:'편지를 주고받는 대신 전화를 걸어 놓고 계속 이야기하는 것과 같습니다. 채팅, 온라인 게임, 공동 문서 편집처럼 양쪽이 자주 주고받는 곳에 쓰입니다.',
 f:[['me','ws1','Upgrade: websocket'],['ws1','me','101 Switching','ack'],{n:['me','Connection stays open']},['friend','ws1','Lunch?','push'],['ws1','me','Lunch?','ack'],['me','ws1','Yes, you?','push'],['ws1','friend','Yes, you?','ack'],{n:['ws1','Same pipe, both ways']}]},
{t:'한쪽으로 흘려보내기: SSE',te:'Server-Sent Events: one-way stream',se:'With SSE the server keeps one HTTP response open and adds a line whenever there is news.',s:'SSE는 HTTP 응답 하나를 열어 둔 채, 소식이 생길 때마다 한 줄씩 덧붙여 보낸다.',show:SHOW,e:act(['me','ws1']),m:['서버 → 브라우저','즉시','한 방향','라디오 방송'],
 x:'서버가 보내기만 하면 되는 경우도 많습니다. 축구 중계 점수, 주가, 배달 위치, AI 챗봇이 답을 한 글자씩 써 내려가는 화면이 그렇습니다. SSE(Server-Sent Events)는 평범한 HTTP 요청을 보내면 서버가 응답을 끝내지 않고 열어 둔 채, 소식이 생길 때마다 "data: 2-1" 같은 줄을 덧붙여 보냅니다. 연결이 끊기면 브라우저가 알아서 다시 연결하고, 마지막으로 받은 번호를 알려 놓친 소식부터 이어 받을 수 있습니다. 일반 HTTP 그대로라서 기존 서버나 프록시와도 잘 어울립니다.',
 k:'라디오처럼 한 방향으로만 흐릅니다. 브라우저가 보낼 것이 생기면 평소처럼 별도의 HTTP 요청을 보내면 됩니다.',
 f:[['me','ws1','GET /match/7 (stream)'],{n:['ws1','Keep response open']},['ws1','me','data: 1-0','ack'],{n:['me','Score 1-0']},['ws1','me','data: 2-0','ack'],{n:['me','Score 2-0']},['ws1','me','data: 2-1','ack'],{n:['me','Score 2-1']}]},
{t:'무엇을 고를까',te:'Which one to choose',se:'Rare updates: polling. Server-to-user feeds: SSE. Fast two-way chat or games: WebSocket.',s:'가끔 바뀌면 폴링, 서버가 보내기만 하면 SSE, 양쪽이 자주 주고받으면 웹소켓.',show:SHOW,e:act(['me','ws1'],['friend','ws1']),m:['설계 단계','—','—','편지 · 라디오 · 전화'],
 x:'고르는 기준은 "얼마나 자주, 어느 방향으로" 바뀌는지입니다. 택배 배송 상태처럼 몇 분에 한 번 바뀌는 정보라면 30초 간격의 폴링으로 충분하고 가장 단순합니다. 알림, 피드, 진행률 표시, AI 답변처럼 서버에서 사용자 쪽으로만 흐르면 SSE가 가볍고 다루기 쉽습니다. 채팅, 멀티플레이 게임, 여러 사람이 함께 그리는 화이트보드처럼 양쪽이 1초에도 여러 번 주고받는다면 웹소켓이 맞습니다. 앱이 꺼져 있을 때 오는 알림은 이와 별개로 휴대폰의 푸시 알림 서비스가 맡습니다.',
 k:'한 서비스 안에서도 섞어 씁니다. 채팅 화면은 웹소켓, 공지 배너는 폴링, AI 답변은 SSE처럼 기능마다 맞는 방식을 고릅니다.',
 f:[{n:['me','Every few min: polling']},{n:['ws1','Server → you: SSE']},{n:['friend','Both ways, fast: WebSocket']}]},
{t:'연결 100만 개 버티기',te:'Scaling a million open connections',se:'Each server holds its own users\' connections, and a broker passes messages between servers.',s:'서버마다 자기 사용자의 연결을 붙잡고, 브로커가 서버 사이로 메시지를 전한다.',show:['me','ws1','friend','ws2','bus'],e:act(['friend','ws2'],['ws2','bus'],['ws1','bus'],['me','ws1']),m:['서버들과 브로커','수십 ms','서버당 약 5만 연결','방송국 중계망'],
 x:'열린 연결은 쉬지 않고 메모리를 조금씩 차지합니다. 동시 접속자가 100만 명인 채팅 앱이라면, 서버 한 대가 약 5만 개의 연결을 맡는다고 할 때 20대쯤이 필요합니다. 그런데 나는 서버 1에, 친구는 서버 2에 연결되어 있다면 메시지를 어떻게 전할까요? 서버들은 Redis 같은 메시지 브로커에 "7번 대화방 소식을 받겠다"고 구독(subscribe)해 둡니다. 서버 2가 친구의 메시지를 브로커에 발행(publish)하면, 구독한 서버 1이 받아 내 연결로 밀어 줍니다.',
 k:'서버를 배포하거나 재시작하면 그 서버의 연결 5만 개가 한꺼번에 끊깁니다. 그래서 클라이언트는 무작위로 조금씩 기다렸다가 다시 연결하도록 만들어, 재접속이 한순간에 몰리지 않게 합니다.',
 f:[{n:['me','Connected to S1']},{n:['friend','Connected to S2']},['friend','ws2','Lunch?','push'],['ws2','bus','Publish: room 7','push'],{n:['bus','Room 7 subscribers: S1']},['bus','ws1','room 7: Lunch?'],['ws1','me','Lunch?','ack']]}];
STEPS.forEach(st=>{const o=[],last={};let t=0;for(const it of st.f){if(it&&it.n){const id=it.n[0];if(last[id]!=null&&t-last[id]<2100){const w=2100-(t-last[id]);o.push({w});t+=w}last[id]=t;t+=700}else if(it&&it.w)t+=it.w;else t+=900;o.push(it)}st.f=o});
const MLAB=['지금 일하는 곳','늦어지는 정도','방향 · 비용','비유'];
"""

RETRY = ICONS + r"""
const NODES={app:{t:'mon',scr:'Pay',l:'내 앱',e:'Your app',tile:'w'},users:{t:'ph',c:'#c9b8ff',l:'다른 사용자들',e:'Other shoppers',tile:'a'},api:{t:'srv',chip:'API',l:'주문 서버',e:'Order server',tile:'g'},cb:{t:'brk',l:'서킷 브레이커',e:'Circuit breaker',tile:'a'},clk:{t:'watch',l:'타임아웃',e:'Timeout 2 s',tile:'k'},pay:{t:'srv',chip:'PAY',l:'결제 서비스',e:'Payment service',tile:'v'},db:{t:'db',l:'결제 DB',e:'Payment DB',tile:'b'}};
const SCALE=.9;
const LAND={users:[0,0],app:[0,1],api:[.33,.55],clk:[.3,0],cb:[.6,0],pay:[.68,.62],db:[1,.15]};
const PORT={users:[.12,0],app:[.88,0],api:[.5,.3],clk:[.12,.56],cb:[.88,.48],pay:[.6,.75],db:[.15,1]};
const ZONES=[];
const ALL=[['app','api'],['users','api'],['api','pay'],['pay','db'],['api','cb'],['api','clk']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['app','users','api','pay','db'];
const STEPS=[
{t:'부르면 실패할 수 있다',te:'Every remote call can fail',se:'The order server calls the payment service over the network, and that call can be slow, lost or fail.',s:'주문 서버는 네트워크 너머의 결제 서비스를 부른다. 이 호출은 느려지거나, 사라지거나, 실패할 수 있다.',show:SHOW,e:act(['app','api'],['api','pay'],['pay','db']),m:['주문 서버 → 결제','평소 약 0.2초','성공','전화로 주문하기'],
 x:'쇼핑 앱에서 "결제하기"를 누르면 주문 서버가 결제 서비스를 부르고, 결제 서비스는 결제 DB에 기록합니다. 평소에는 이 왕복이 약 0.2초면 끝납니다. 하지만 서버끼리의 호출은 같은 컴퓨터 안의 함수 호출과 달리 네트워크를 건넙니다. 패킷이 사라질 수도, 상대가 배포 중이라 잠깐 멈출 수도, 너무 바빠 느려질 수도 있습니다. 서비스가 많아질수록 이런 일은 "가끔"이 아니라 "매일" 일어납니다.',
 k:'호출 하나의 성공률이 99.9%여도, 한 요청이 서비스 10개를 거치면 약 1%는 어딘가에서 실패합니다. 그래서 실패를 다루는 방법을 처음부터 설계해 둡니다.',
 f:[['app','api','Pay ₩30,000'],['api','pay','Charge'],['pay','db','Record'],['db','pay','Saved','ack'],['pay','api','OK','ack'],['api','app','Paid','ack'],{n:['api','Round trip ~0.2 s']}]},
{t:'기다림에도 끝이 있어야 한다',te:'Every call needs a timeout',se:'If the payment service hangs, the order server gives up after 2 seconds instead of waiting forever.',s:'결제 서비스가 멈춰도 주문 서버는 영원히 기다리지 않고 2초 뒤 포기한다.',show:['app','users','api','pay','db','clk'],e:act(['app','api'],['api','pay'],['api','clk']),m:['주문 서버','2초에서 끊음','실패를 알림','전화 연결음'],
 x:'결제 서비스가 고장 나서 답을 하지 않는다고 해 봅시다. 타임아웃이 없으면 주문 서버는 답을 하염없이 기다리며 일손(스레드나 연결) 하나를 계속 붙잡고 있습니다. 주문 서버의 일손이 200개뿐인데 1초에 100건씩 들어온다면, 단 2초 만에 모든 일손이 기다리는 데 묶여 결제와 상관없는 상품 조회까지 멈춥니다. 그래서 모든 호출에 "2초 안에 답이 없으면 포기한다" 같은 타임아웃을 정해 둡니다. 2초는 평소 응답 시간 0.2초보다 넉넉하지만, 사용자가 지쳐 떠나기 전입니다.',
 k:'고장은 기다림을 타고 번집니다. 타임아웃은 고장 난 서비스 하나가 부르는 쪽까지 끌어내리지 않게 막는 첫 번째 안전장치입니다.',
 f:[['app','api','Pay'],['api','pay','Charge'],{n:['pay','No answer…']},['api','clk','Start 2 s timer'],{n:['clk','0.5 s · 1 s · 1.5 s']},{n:['clk','2 s: time\'s up']},{n:['api','Give up · free the worker']},['api','app','Please retry','ack']]},
{t:'점점 길게 쉬며 다시 시도',te:'Retry with exponential backoff',se:'Retry after 1 second, then 2, then 4, so a struggling service gets room to recover.',s:'1초, 2초, 4초처럼 점점 길게 쉬고 다시 시도해, 상대가 회복할 틈을 준다.',show:SHOW,e:act(['api','pay'],['pay','db']),m:['주문 서버 → 결제','1초 → 2초 → 4초','3번째에 성공','다시 걸기 전 잠깐 쉬기'],
 x:'잠깐의 네트워크 문제나 배포 중의 짧은 끊김은 조금 뒤에 다시 시도하면 대부분 해결됩니다. 하지만 실패하자마자 바로 또 보내면 이미 힘든 상대를 더 몰아붙입니다. 그래서 기다리는 시간을 1초, 2초, 4초처럼 두 배씩 늘리는 지수 백오프(exponential backoff)를 씁니다. 동시에 "최대 3번"처럼 재시도 횟수에 한도를 두어, 끝내 안 되면 깔끔하게 실패를 알립니다. 예를 들어 첫 시도와 두 번째 시도가 실패하고 세 번째에 성공하면, 사용자는 약 3초 늦게 결과를 받지만 결제는 성공합니다.',
 k:'잘못된 카드 번호처럼 다시 해도 결과가 같은 실패(4xx 오류)는 재시도하지 않습니다. 재시도는 일시적인 실패(타임아웃, 503 등)에만 의미가 있습니다.',
 f:[['api','pay','Try 1','lost'],{n:['api','Wait 1 s']},['api','pay','Try 2','lost'],{n:['api','Wait 2 s (doubled)']},['api','pay','Try 3'],['pay','db','Record'],['pay','api','OK','ack'],{n:['api','Success on try 3']}]},
{t:'모두가 동시에 다시 오면',te:'Retry storms and jitter',se:'If everyone retries at the same moment, the load multiplies. Random jitter spreads the retries out.',s:'모두가 같은 순간에 다시 시도하면 부하가 몇 배가 된다. 무작위 지연(지터)으로 흩어 준다.',show:SHOW,e:act(['users','api'],['app','api'],['api','pay']),m:['결제 서비스','회복이 늦어짐','부하 약 3배','퇴근길 엘리베이터'],
 x:'결제 서비스가 10초 동안 느려져 1만 건의 요청이 한꺼번에 실패했다고 해 봅시다. 모두 똑같이 정확히 1초 뒤에 다시 보내면, 1초 뒤 1만 건이 또 동시에 몰리고, 2초 뒤에 또 몰립니다. 앱도 재시도하고 주문 서버도 재시도하면 요청 하나가 3 × 3 = 9번이 될 수도 있습니다. 이렇게 재시도가 부하를 몇 배로 불려 회복을 막는 현상을 재시도 폭풍(retry storm)이라고 합니다. 기다리는 시간에 무작위 값을 섞는 지터(jitter)를 쓰면, 1초 대신 0~1초 사이 아무 때나 다시 시도하게 되어 파도가 잔물결로 바뀝니다.',
 k:'재시도는 한 층에서만 하는 것이 원칙입니다. 여러 층이 각자 재시도하면 횟수가 곱해지기 때문입니다.',
 f:[{n:['pay','Slow · 10,000 failed']},{p:[['users','api','Retry at 1.000 s'],['app','api','Retry at 1.000 s']]},['api','pay','10,000 at once','push'],{n:['pay','Overloaded · down']},{n:['api','Add jitter: 0–1 s random']},{p:[['users','api','Retry 0.31 s'],['app','api','Retry 0.87 s']]},['api','pay','Spread out'],{n:['pay','Recovering']}]},
{t:'두 번 보내도 한 번만',te:'Idempotency keys make retries safe',se:'Each payment carries a unique key, so a repeated charge is recognized and not done twice.',s:'결제마다 고유한 키를 붙여, 같은 결제가 다시 와도 두 번 처리하지 않는다.',show:SHOW,e:act(['api','pay'],['pay','db']),m:['결제 서비스','—','결제 1번만','영수증 번호'],
 x:'결제는 성공했는데 "성공" 답장만 돌아오는 길에 사라졌다면 어떻게 될까요? 주문 서버는 타임아웃으로 실패라고 판단하고 다시 보내고, 자칫 3만 원이 두 번 빠져나갑니다. 그래서 주문 서버는 결제 요청마다 "a1b2"처럼 고유한 멱등성 키(idempotency key)를 만들어 붙이고, 재시도할 때도 같은 키를 씁니다. 결제 서비스는 처리한 키와 결과를 DB에 기록해 두었다가, 같은 키가 다시 오면 새로 결제하지 않고 저장해 둔 결과를 그대로 돌려줍니다. 사용자 입장에서는 몇 번을 재시도해도 결제는 정확히 한 번입니다.',
 k:'조회처럼 원래 몇 번 해도 같은 요청은 마음껏 재시도할 수 있습니다. 결제, 주문, 송금처럼 상태를 바꾸는 요청에는 반드시 키를 붙입니다.',
 f:[['api','pay','Charge · key a1b2'],['pay','db','Save a1b2 = paid'],['pay','api','OK','lost'],{n:['api','Timeout · retry same key']},['api','pay','Charge · key a1b2'],['pay','db','a1b2 seen?'],['db','pay','Yes: already paid','ack'],['pay','api','OK (stored result)','ack'],{n:['api','Charged once, not twice']}]},
{t:'차단기를 내린다',te:'Circuit breaker: open',se:'After 5 failures in a row, the breaker opens and calls fail fast without touching the sick service.',s:'연속 5번 실패하면 차단기가 열려, 아픈 서비스는 건드리지 않고 바로 실패를 돌려준다.',show:['app','users','api','cb','pay','db'],st:{pay:'dead'},e:act(['app','api'],['api','cb'],['api','pay']),m:['서킷 브레이커','즉시 (0.001초)','닫힘 → 열림','두꺼비집'],
 x:'결제 서비스가 완전히 멈췄다면 재시도는 소용없고, 매번 타임아웃 2초씩만 낭비합니다. 서킷 브레이커(circuit breaker)는 주문 서버 안에서 최근 호출 결과를 세다가, 예를 들어 "연속 5번 실패"를 넘으면 열림(open) 상태가 됩니다. 열려 있는 동안에는 결제 서비스를 아예 부르지 않고 곧바로 실패나 대체 응답("결제가 잠시 지연되고 있어요, 잠시 후 다시 시도해 주세요")을 돌려줍니다. 사용자는 2초 대신 즉시 답을 받고, 결제 서비스는 쏟아지는 요청 없이 회복할 시간을 얻습니다.',
 k:'두꺼비집이 과전류를 감지하면 내려가 집 전체를 지키는 것과 같은 원리이고, 이름도 여기서 왔습니다. 빨리 실패하는 것(fail fast)이 오래 기다리다 실패하는 것보다 낫습니다.',
 f:[{n:['cb','CLOSED · fails 0/5']},['api','pay','Charge','lost'],{n:['cb','Fails 3/5']},['api','pay','Charge','lost'],{n:['cb','5/5 → OPEN']},['app','api','Pay'],['api','cb','Allowed?'],['cb','api','No: fail fast','ack'],['api','app','Try again soon','ack']]},
{t:'살짝 열어 보고 되돌린다',te:'Half-open, then closed again',se:'After 30 seconds the breaker lets one test call through. If it works, traffic flows again.',s:'30초 뒤 차단기는 시험 요청 하나만 보내 보고, 성공하면 다시 닫아 평소대로 돌린다.',show:['app','users','api','cb','pay','db'],e:act(['api','cb'],['api','pay'],['pay','db'],['app','api'],['users','api']),m:['서킷 브레이커','약 30초 뒤','열림 → 반열림 → 닫힘','두꺼비집 다시 올리기'],
 x:'차단기가 영원히 열려 있으면 결제 서비스가 고쳐져도 쓸 수 없습니다. 그래서 열린 지 정해진 시간(예: 30초)이 지나면 반열림(half-open) 상태가 되어 시험 요청 하나만 통과시킵니다. 시험 요청이 성공하면 닫힘(closed)으로 돌아가 모든 요청이 다시 흐르고, 실패하면 다시 열려 30초를 더 기다립니다. 정리하면 타임아웃은 기다림을 끊고, 백오프와 지터는 재시도를 흩어 주고, 멱등성 키는 재시도를 안전하게 만들고, 서킷 브레이커는 고장 난 곳을 잠시 피해 갑니다. 넷을 함께 써야 일부의 고장이 전체 장애로 번지지 않습니다.',
 k:'전기 회로처럼 닫혀 있어야 흐릅니다. 닫힘은 정상, 열림은 차단, 반열림은 시험 중이라고 기억하면 헷갈리지 않습니다.',
 f:[{n:['cb','OPEN · 30 s passed']},{n:['cb','→ HALF-OPEN']},['api','cb','1 test call?'],['api','pay','Test charge'],['pay','db','Record'],['pay','api','OK','ack'],{n:['cb','→ CLOSED']},{p:[['app','api','Pay'],['users','api','Pay']]},['api','pay','Traffic flows','push']]}];
STEPS.forEach(st=>{const o=[],last={};let t=0;for(const it of st.f){if(it&&it.n){const id=it.n[0];if(last[id]!=null&&t-last[id]<2100){const w=2100-(t-last[id]);o.push({w});t+=w}last[id]=t;t+=700}else if(it&&it.w)t+=it.w;else t+=900;o.push(it)}st.f=o});
const MLAB=['지금 일하는 곳','기다리는 시간','상태','비유'];
"""

AUTH = ICONS + r"""
const NODES={phone:{t:'ph',l:'내 휴대폰',e:'Your phone',tile:'a'},user:{t:'mon',scr:'Login',l:'내 브라우저',e:'You · browser',tile:'w'},idp:{t:'srv',chip:'IdP',l:'구글 (로그인 제공자)',e:'Google · IdP',tile:'v'},app:{t:'lock',l:'웹 서비스 (로그인)',e:'Web app · login',tile:'g'},db:{t:'db',l:'사용자 DB',e:'User DB',tile:'b'}};
const LAND={phone:[0,.05],user:[0,.9],idp:[.5,.05],app:[.5,.9],db:[1,.45]};
const PORT={phone:[.15,0],idp:[.85,0],user:[.15,.52],app:[.85,.56],db:[.5,1]};
const ZONES=[];
const ALL=[['phone','user'],['user','app'],['app','db'],['user','idp'],['app','idp']];
const act=(...p)=>ALL.map(([x,y])=>[x,y,p.some(([a,b])=>(a===x&&b===y)||(a===y&&b===x))?'':'d']);
const SHOW=['user','app','db'];
const STEPS=[
{t:'누구인지, 무엇을 해도 되는지',te:'Authentication vs authorization',se:'Authentication checks who you are. Authorization checks what you are allowed to do.',s:'인증은 "누구인가"를 확인하고, 인가는 "무엇을 해도 되는가"를 정한다.',show:SHOW,e:act(['user','app'],['app','db']),m:['웹 서비스','—','—','신분증과 출입 권한'],
 x:'로그인은 인증(authentication)입니다. "나는 민아입니다"라는 주장을 비밀번호 같은 증거로 확인하는 일입니다. 인가(authorization)는 그다음 단계로, 확인된 민아가 무엇을 할 수 있는지 정합니다. 예를 들어 카페 커뮤니티에서 민아는 자기 글은 지울 수 있지만 남의 글은 지울 수 없고, 관리자 화면에도 들어갈 수 없습니다. 둘은 비슷해 보이지만 따로 설계하고, 요청이 올 때마다 따로 검사해야 합니다.',
 k:'오류 코드도 다릅니다. 누구인지 모르면 401(Unauthorized), 누구인지는 알지만 권한이 없으면 403(Forbidden)을 돌려줍니다.',
 f:[['user','app','I am Mina'],{n:['app','AuthN: prove who you are']},['user','app','Delete post #88'],['app','db','Mina\'s role? Owner of #88?'],['db','app','Member · not owner','ack'],{n:['app','AuthZ: not allowed']},['app','user','403 Forbidden','ack']]},
{t:'비밀번호는 그대로 저장하지 않는다',te:'Passwords as slow, salted hashes',se:'The server stores only a slow, salted hash, and checks a login by hashing the typed password again.',s:'서버는 비밀번호 대신 느린 솔트 해시만 저장하고, 로그인 때 입력값을 다시 해시해 비교한다.',show:SHOW,e:act(['user','app'],['app','db']),m:['웹 서비스 ↔ 사용자 DB','해시 1번에 약 0.1초','해시만','지문 대조'],
 x:'해시(hash)는 원래 값을 알아낼 수 없게 뒤섞는 한 방향 계산입니다. 서버는 비밀번호에 사용자마다 다른 무작위 값(솔트, salt)을 섞어 해시한 결과만 저장합니다. 로그인할 때는 입력한 비밀번호에 같은 솔트를 섞어 다시 해시하고, 저장된 값과 같은지만 비교합니다. bcrypt나 Argon2처럼 일부러 한 번에 약 0.1초가 걸리게 만든 해시를 쓰면, 로그인하는 사람은 차이를 못 느끼지만 DB를 훔친 공격자가 10억 개의 비밀번호 후보를 맞혀 보는 데는 수년이 걸립니다.',
 k:'솔트 덕분에 같은 비밀번호를 쓰는 두 사람도 저장된 값이 서로 다르고, 미리 계산해 둔 해시 표로 한꺼번에 푸는 공격도 막힙니다. 해시는 암호화와 달리 되돌릴 키가 없습니다.',
 f:[['user','app','mina / ••••••••','push'],['app','db','Get Mina\'s salt + hash'],['db','app','salt x7Q… · hash $2b$12$…','ack'],{n:['app','hash(typed pw + salt)']},{n:['app','~0.1 s on purpose']},{n:['app','Hashes match → it\'s Mina']}]},
{t:'세션 쿠키로 기억한다',te:'Staying logged in: session cookie',se:'The server saves a session and gives the browser a random session ID in a cookie.',s:'서버는 세션을 저장하고, 브라우저에는 무작위 세션 번호를 쿠키로 준다.',show:SHOW,e:act(['user','app'],['app','db']),m:['브라우저 ↔ 웹 서비스','요청마다','서버에 세션','옷 보관소 번호표'],
 x:'페이지를 넘길 때마다 비밀번호를 입력할 수는 없습니다. 그래서 로그인에 성공하면 서버는 "세션 s9x… = 민아, 2주 뒤 만료"라는 기록을 저장소에 만들고, 추측할 수 없을 만큼 긴 무작위 세션 번호를 쿠키로 브라우저에 줍니다. 브라우저는 이후 같은 사이트로 보내는 요청마다 이 쿠키를 자동으로 붙이고, 서버는 번호로 저장소를 찾아 누구인지 압니다. 로그아웃하거나 휴대폰을 잃어버렸을 때는 서버에서 세션 기록을 지우기만 하면 그 번호는 즉시 쓸모가 없어집니다.',
 k:'쿠키에는 HttpOnly(자바스크립트가 못 읽음), Secure(HTTPS로만 전송), SameSite(다른 사이트에서 온 요청에 안 붙음) 설정을 켜 두어야 세션 번호를 도둑맞지 않습니다.',
 f:[['app','db','Session s9x = Mina, 14 days'],['app','user','Set-Cookie: sid=s9x','ack'],{n:['user','Cookie stored']},['user','app','GET /orders · sid=s9x','push'],['app','db','Who is s9x?'],['db','app','Mina','ack'],['app','user','Mina\'s orders','ack']]},
{t:'서명된 토큰을 들고 다닌다',te:'Tokens: a signed JWT',se:'A JWT carries the user info and a signature, so a server can check it without looking anything up.',s:'JWT는 사용자 정보와 서명을 함께 담아, 서버가 저장소를 찾지 않고도 검증할 수 있다.',show:SHOW,e:act(['user','app']),m:['브라우저 ↔ 웹 서비스','요청마다','토큰 안에','도장 찍힌 출입증'],
 x:'토큰 방식에서는 서버가 정보를 저장하는 대신 사용자에게 들려 보냅니다. 서버는 "민아, 일반 회원, 15분 뒤 만료" 같은 정보를 담은 토큰을 만들고 자기만 아는 비밀 키로 서명합니다. 대표적인 형식이 JWT(JSON Web Token)로, "eyJhbGci…"로 시작하는 긴 문자열입니다. 클라이언트는 요청마다 이 토큰을 보내고, 서버는 서명만 확인하면 되니 세션 저장소를 찾아볼 필요가 없습니다. 내용을 한 글자라도 바꾸면 서명이 맞지 않아 바로 들통납니다.',
 k:'JWT의 내용은 암호화가 아니라 서명만 된 것이라 누구나 읽을 수 있습니다. 비밀은 넣지 말고, 수명을 짧게 한 뒤 리프레시 토큰으로 새로 받는 방식이 흔합니다.',
 f:[['app','user','JWT {Mina, 15 min} + sig','ack'],{n:['user','Keep token']},['user','app','Bearer eyJhbGci…','push'],{n:['app','Check signature: valid']},{n:['app','Expires in 9 min: OK']},{n:['app','No DB lookup needed']},['app','user','Mina\'s orders','ack']]},
{t:'세션과 토큰, 무엇이 다를까',te:'Sessions vs tokens',se:'Sessions are easy to revoke but need a shared store. Tokens need no lookup but are hard to cancel early.',s:'세션은 취소가 쉽지만 공용 저장소가 필요하고, 토큰은 조회가 필요 없지만 일찍 취소하기 어렵다.',show:SHOW,e:act(['user','app'],['app','db']),m:['설계 단계','—','서버 쪽 vs 손님 쪽','보관소 번호표 vs 출입증'],
 x:'세션 방식은 기록이 서버에 있으니, "모든 기기에서 로그아웃" 버튼 하나로 즉시 끊을 수 있습니다. 대신 요청마다 저장소를 조회해야 하고, 서버가 여러 대라면 모두가 같은 저장소(예: Redis)를 봐야 합니다. 토큰 방식은 조회 없이 서명만 확인하니 빠르고, 서로 다른 서비스가 같은 토큰을 믿기 쉽습니다. 하지만 이미 나간 토큰은 만료 전까지 막기 어려워, 도둑맞으면 15분 동안은 쓰일 수 있습니다. 그래서 웹사이트는 세션 쿠키, 모바일 앱과 서비스 사이 호출은 짧은 토큰을 쓰는 경우가 많습니다.',
 k:'정답은 하나가 아닙니다. 많은 서비스가 로그인 상태는 세션으로 관리하고, 내부 서비스끼리 주고받을 때만 짧은 토큰을 발급하는 식으로 둘을 섞어 씁니다.',
 f:[{n:['db','Session: revoke anytime']},{n:['user','Token: valid until expiry']},['user','app','Log out all devices'],['app','db','Delete Mina\'s sessions'],{n:['db','3 sessions → 0']},{n:['app','Tokens: wait out 15 min']}]},
{t:'구글로 로그인',te:'Sign in with Google: OAuth & OIDC',se:'Google checks your password and hands the app a signed ID token. The app never sees the password.',s:'비밀번호 확인은 구글이 하고, 서비스는 구글이 서명한 신분 토큰만 받는다.',show:['user','app','db','idp'],e:act(['user','idp'],['user','app'],['app','idp']),m:['구글 ↔ 웹 서비스','수 초','비밀번호는 구글만','대신 확인해 주는 보증인'],
 x:'"구글로 로그인"을 누르면 브라우저는 구글 로그인 화면으로 이동합니다. 구글에서 로그인하고 "이름과 이메일을 이 서비스에 알려 주는 것"에 동의하면, 구글은 브라우저를 통해 몇 분만 쓸 수 있는 일회용 코드를 서비스로 돌려보냅니다. 서비스는 이 코드를 구글에 직접 보내, "이 사람은 mina@gmail.com"이라고 구글이 서명한 ID 토큰으로 바꿉니다. 서비스는 구글의 공개 키로 서명을 확인하고 민아를 로그인시킵니다. 권한을 맡기는 약속이 OAuth 2.0이고, 그 위에서 "누구인지"를 알려 주는 약속이 OpenID Connect(OIDC)입니다.',
 k:'코드를 브라우저가 아니라 서버끼리 토큰으로 바꾸는 이유는, 브라우저 주소창이나 기록에 남을 수 있는 값으로는 진짜 신분 증명을 넘기지 않기 위해서입니다.',
 f:[['user','app','Sign in with Google'],['app','user','Go to Google','ack'],['user','idp','Login + consent','push'],['idp','user','One-time code','ack'],['user','app','Code'],['app','idp','Code → ID token'],['idp','app','ID token: mina@…','ack'],{n:['app','Signature OK · logged in']},{n:['app','Never saw the password']}]},
{t:'한 번 더 확인하는 2단계 인증',te:'Two-factor authentication',se:'Besides the password, you prove you hold your phone with a 6-digit code that changes every 30 seconds.',s:'비밀번호에 더해, 30초마다 바뀌는 6자리 코드로 내 휴대폰을 가졌음을 증명한다.',show:['phone','user','app','db'],e:act(['phone','user'],['user','app'],['app','db']),m:['휴대폰 → 브라우저 → 서비스','30초마다 새 코드','공유된 비밀 키','열쇠와 비밀번호 둘 다'],
 x:'비밀번호는 유출되거나 여러 사이트에서 겹쳐 쓰이기 쉽습니다. 2단계 인증(2FA)은 "아는 것(비밀번호)"에 "가진 것(휴대폰)"을 더합니다. 인증 앱은 처음 QR 코드를 찍을 때 서비스와 나눠 가진 비밀 키와 현재 시각으로 30초마다 새 6자리 코드를 만듭니다(TOTP). 서버도 같은 비밀 키와 같은 시각으로 계산해 두 숫자가 같은지 확인하므로, 휴대폰이 인터넷에 연결되어 있지 않아도 됩니다. 비밀번호를 훔친 사람도 내 휴대폰이 없으면 들어올 수 없습니다.',
 k:'문자(SMS) 코드는 유심 복제 같은 공격에 약해 인증 앱보다 덜 안전합니다. 최근에는 기기의 지문이나 얼굴 인식으로 비밀번호 없이 로그인하는 패스키(passkey)도 널리 쓰입니다.',
 f:[['user','app','Password OK'],['app','user','Enter 6-digit code','ack'],{n:['phone','482 913 · 30 s left']},['phone','user','482 913'],['user','app','482 913','push'],['app','db','Get Mina\'s 2FA secret'],{n:['app','Same secret + time = 482 913']},{n:['user','Logged in']}]}];
STEPS.forEach(st=>{const o=[],last={};let t=0;for(const it of st.f){if(it&&it.n){const id=it.n[0];if(last[id]!=null&&t-last[id]<2100){const w=2100-(t-last[id]);o.push({w});t+=w}last[id]=t;t+=700}else if(it&&it.w)t+=it.w;else t+=900;o.push(it)}st.f=o});
const MLAB=['지금 일하는 곳','걸리는 시간','저장되는 것','비유'];
"""

out.update({
    "queue": lesson(TPL, title="메시지 큐", h1="일을 줄 세워 두면 생기는 일",
                    lead="오래 걸리는 일은 큐에 넣어 두고 나중에 처리합니다. 생산자와 소비자, ACK, 트래픽 폭주, 재배달과 데드레터 큐를 7단계로 따라가 보세요.",
                    aria="메시지 큐 구성도", note="시간과 개수는 설명을 위한 대략값입니다.",
                    rtitle="How Message Queues Work", data=QUEUE),
    "realtime": lesson(TPL, title="실시간 통신", h1="새 메시지는 어떻게 바로 뜰까",
                       lead="채팅 메시지와 경기 점수는 새로고침 없이 바로 바뀝니다. 폴링, 롱 폴링, 웹소켓, SSE와 연결 100만 개를 버티는 법을 7단계로 따라가 보세요.",
                       aria="실시간 통신 구성도", note="지연 시간과 연결 수는 일반적인 대략값입니다.",
                       rtitle="Real-time Updates", data=REALTIME),
    "retry": lesson(TPL, title="타임아웃과 재시도", h1="실패를 다루는 기술",
                    lead="다른 서버는 언젠가 느려지고 멈춥니다. 타임아웃, 백오프와 지터, 멱등성 키, 서킷 브레이커로 장애가 번지지 않게 막는 법을 7단계로 따라가 보세요.",
                    aria="타임아웃과 재시도 흐름도", note="시간과 횟수는 흔히 쓰는 설정 예시입니다.",
                    rtitle="Timeouts and Retries", data=RETRY),
    "auth": lesson(TPL, title="로그인과 인증", h1="로그인하면 무슨 일이 일어날까",
                   lead="비밀번호를 입력하는 순간부터 로그인 상태가 유지되기까지. 해시, 세션, 토큰, 구글 로그인, 2단계 인증을 7단계로 따라가 보세요.",
                   aria="로그인과 인증 흐름도", note="시간은 대략값이며, 계정과 코드는 설명을 위한 예시입니다.",
                   rtitle="Login and Authentication", data=AUTH),
})
