"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ── i18n ─────────────────────────────────────────────────────────
const T = {
  en: {
    nav: ["About", "Services", "AI & Data", "Stack", "Team", "Contact"],
    cta_primary: "Get Started",
    cta_secondary: "View Services",
    badge: "Personal WEB · APP · AI Studio",
    hero_h1: ["We build apps", "powered by AI,", "for real people."],
    hero_sub: "Zuply delivers personalised web, mobile, and AI-powered applications — built around your life, not a corporation's roadmap.",
    terminal_lines: [
      "$ zuply init my-app --ai",
      "  ✓ Analysing requirements...",
      "  ✓ Connecting LLM pipeline...",
      "  ✓ Training personalised model...",
      "  ✓ Building & deploying...",
      "  🚀 Your AI app is live at zuply.app/me",
    ],
    about_badge: "About",
    about_h2: ["Not just apps.", "Intelligence built in."],
    about_p1: "Zuply is a personal technology studio. We design and ship web, mobile, and AI applications entirely around the individual — not enterprise org charts.",
    about_p2: "From LLM integrations and RAG pipelines to real-time data dashboards, we bring cutting-edge AI capabilities into products that feel personal and effortless.",
    about_tags: ["LLM Integration", "RAG Pipeline", "Personal WEB", "Mobile APP", "Data Analytics", "Fast launch"],
    graph_title: "Core capabilities",
    graph_labels: ["AI / LLM Integration", "Data Analytics", "UX Design", "Dev & Deployment"],
    stat_labels: ["Users served", "Apps shipped", "Satisfaction", "Years running"],
    ai_badge: "AI & Data",
    ai_h2: "Intelligent systems, built personal.",
    ai_sub: "We integrate state-of-the-art AI into every product we ship.",
    ai_cards: [
      {
        icon: "🧠",
        title: "LLM Integration",
        desc: "GPT-4o, Claude, Gemini — we wire large language models directly into your product. Conversational agents, document Q&A, content generation.",
        tags: ["OpenAI", "Anthropic", "LangChain"],
      },
      {
        icon: "🔗",
        title: "RAG Pipeline",
        desc: "Retrieval-Augmented Generation over your own data. Vector search, semantic chunking, re-ranking — answers grounded in your documents.",
        tags: ["Pinecone", "pgvector", "Embeddings"],
      },
      {
        icon: "📊",
        title: "Data Analytics",
        desc: "Real-time dashboards, predictive models, behavioural analytics. Turn raw data into decisions with interactive visualisations.",
        tags: ["Python", "pandas", "D3.js"],
      },
      {
        icon: "🤖",
        title: "AI Agent Workflows",
        desc: "Multi-step autonomous agents that browse, reason, and act. Built on LangGraph and custom orchestration layers.",
        tags: ["LangGraph", "Tools", "Memory"],
      },
      {
        icon: "🗂️",
        title: "Vector Search",
        desc: "Semantic search across millions of documents in milliseconds. Hybrid keyword + embedding search with relevance tuning.",
        tags: ["FAISS", "Weaviate", "OpenSearch"],
      },
      {
        icon: "📈",
        title: "Predictive Modelling",
        desc: "Forecast trends, classify content, detect anomalies. ML pipelines from training to production with continuous monitoring.",
        tags: ["scikit-learn", "PyTorch", "MLflow"],
      },
    ],
    pipeline_title: "RAG Pipeline — How it works",
    services_badge: "Services",
    services_h2: "What we build",
    services_sub: "WEB, APP, and AI — all three, or any one.",
    web_title: "WEB Services",
    web_desc: "Portfolio sites, personal brands, subscription platforms, communities — anything you can imagine on the web.",
    web_features: ["Custom design & development", "Fully responsive", "Domain & hosting included", "SEO-ready"],
    app_title: "APP Services",
    app_desc: "iOS & Android apps that fit your daily life — automation, notifications, personal dashboards, and more.",
    app_features: ["iOS & Android support", "Personalised UX design", "Push & automation", "App store deployment"],
    other_services: [
      { icon: "📰", title: "Morning Briefing", desc: "AI-curated daily digest of stocks, crypto, weather & news.", tags: ["Stocks", "Crypto", "Weather", "News"], badge: null },
      { icon: "🎓", title: "Education", desc: "Adaptive learning platform powered by AI tutoring.", tags: [], badge: "Coming soon" },
      { icon: "💼", title: "Career", desc: "AI-matched career paths tailored to your skills.", tags: [], badge: "Coming soon" },
    ],
    stack_badge: "Tech Stack",
    stack_h2: "Built with modern technology",
    stack_sub: "The same tools powering the world's best AI products.",
    team_badge: "Team",
    team_h2: "The people behind Zuply",
    team_sub: "Specialists across every discipline — from AI research to infrastructure.",
    team: [
      { name: "Seunghwan", role: "Product Planner", desc: "Defines product vision and AI strategy. Translates complex AI capabilities into user-centric roadmaps.", skills: ["LLM Strategy", "RAG Design", "Product Roadmap", "AI Workflow"] },
      { name: "Kairo", role: "UI/UX Designer", desc: "Crafts intuitive interfaces for complex AI products. Specialises in data-heavy dashboard design and interaction systems.", skills: ["Figma", "Design System", "Prototyping", "Dashboard UX"] },
      { name: "Yumi", role: "Frontend Engineer", desc: "Builds performant, real-time AI interfaces. Expert in streaming LLM output, interactive data visualisation, and SSE.", skills: ["Next.js", "TypeScript", "D3.js", "WebSocket", "SSE"] },
      { name: "Jaden", role: "Backend Engineer", desc: "Architects AI pipelines and API layers. Builds RAG systems, LangChain integrations, and high-throughput inference servers.", skills: ["FastAPI", "LangChain", "LangGraph", "pgvector", "Redis"] },
      { name: "Ryan", role: "Infrastructure Engineer", desc: "Manages cloud infrastructure for AI workloads. Optimises GPU instances, vector DBs, and model serving at scale.", skills: ["AWS", "Docker", "Kubernetes", "MLflow", "Pinecone"] },
      { name: "Sophie", role: "Product Manager", desc: "Drives delivery across AI product cycles. Coordinates between research, engineering, and design to ship on time.", skills: ["Agile", "JIRA", "A/B Testing", "Analytics", "OKR"] },
      { name: "Ethan", role: "QA Engineer", desc: "Ensures reliability of AI systems. Designs evaluation frameworks for LLM output quality, latency, and edge-case robustness.", skills: ["LLM Evaluation", "Pytest", "k6", "Playwright", "CI/CD"] },
      { name: "Hana", role: "Data Analyst", desc: "Turns raw data into product insights. Builds predictive models, behavioural analytics pipelines, and executive dashboards.", skills: ["Python", "pandas", "SQL", "scikit-learn", "Tableau"] },
    ],
    contact_badge: "Contact",
    contact_h2: "Start your project",
    contact_sub: "Tell us what you need. We'll handle the rest.",
    form_name: "Name", form_name_ph: "Jane Doe (min. 2 chars)",
    form_email: "Email", form_email_ph: "hello@example.com",
    form_subject: "Subject", form_subject_ph: "What would you like to build?",
    form_message: "Message", form_message_ph: "Describe your idea or request. (min. 10 chars)",
    privacy_title: "Privacy & Data Consent",
    privacy_body: "We collect your name, email, and message solely to respond to your inquiry. Data is retained for 6 months after the inquiry is resolved.",
    privacy_agree: "I agree to the collection and use of my personal data.",
    submit: "Send message", submitting: "Sending...",
    err_name: "Name must be at least 2 characters.",
    err_email: "Please enter a valid email address.",
    err_subject: "Subject is required.",
    err_message: "Message must be at least 10 characters.",
    err_agreed: "Please agree to the privacy policy.",
    success_h: "Message received!",
    success_p: "We'll get back to you as soon as possible.",
    footer_tagline: "Personal WEB · APP · AI Studio",
    footer_copy: "© 2025 Zuply. All rights reserved.",
  },
  ko: {
    nav: ["소개", "서비스", "AI & 데이터", "기술", "팀", "연락처"],
    cta_primary: "시작하기",
    cta_secondary: "서비스 보기",
    badge: "개인을 위한 WEB · APP · AI 스튜디오",
    hero_h1: ["AI로 만든 앱을", "당신에게", "직접 제공합니다."],
    hero_sub: "Zuply는 개인을 위한 맞춤형 WEB·APP·AI 서비스를 제공합니다. 기업용 소프트웨어가 아닌, 당신의 일상에 맞는 지능형 서비스입니다.",
    terminal_lines: [
      "$ zuply init my-app --ai",
      "  ✓ 요구사항 분석 중...",
      "  ✓ LLM 파이프라인 연결 중...",
      "  ✓ 개인화 모델 학습 중...",
      "  ✓ 빌드 & 배포 중...",
      "  🚀 AI 앱 배포 완료: zuply.app/me",
    ],
    about_badge: "소개",
    about_h2: ["단순한 앱이 아닙니다.", "AI가 내장된 서비스."],
    about_p1: "Zuply는 개인을 위한 기술 스튜디오입니다. WEB·APP·AI 서비스를 개인의 라이프스타일에 맞게 설계하고 제공합니다.",
    about_p2: "LLM 연동, RAG 파이프라인, 실시간 데이터 대시보드까지 — 최첨단 AI 기술을 개인이 바로 쓸 수 있는 서비스로 만들어 드립니다.",
    about_tags: ["LLM 연동", "RAG 파이프라인", "개인 맞춤 WEB", "모바일 APP", "데이터 분석", "빠른 출시"],
    graph_title: "핵심 역량",
    graph_labels: ["AI / LLM 연동", "데이터 분석", "UX 설계", "개발·배포"],
    stat_labels: ["누적 사용자", "출시 앱·서비스", "고객 만족도", "서비스 운영"],
    ai_badge: "AI & 데이터",
    ai_h2: "개인을 위한 지능형 시스템.",
    ai_sub: "최신 AI 기술을 모든 서비스에 직접 연결합니다.",
    ai_cards: [
      {
        icon: "🧠",
        title: "LLM 연동",
        desc: "GPT-4o, Claude, Gemini 등 대형 언어 모델을 서비스에 직접 연결합니다. 대화형 에이전트, 문서 Q&A, 콘텐츠 생성 등 다양하게 활용.",
        tags: ["OpenAI", "Anthropic", "LangChain"],
      },
      {
        icon: "🔗",
        title: "RAG 파이프라인",
        desc: "내 데이터 기반의 검색 증강 생성(RAG). 벡터 검색, 시맨틱 청킹, 리랭킹으로 내 문서에서 정확한 답변을 제공합니다.",
        tags: ["Pinecone", "pgvector", "임베딩"],
      },
      {
        icon: "📊",
        title: "데이터 분석",
        desc: "실시간 대시보드, 예측 모델, 행동 분석. 원시 데이터를 인터랙티브 시각화로 전환해 의사결정을 돕습니다.",
        tags: ["Python", "pandas", "D3.js"],
      },
      {
        icon: "🤖",
        title: "AI 에이전트 워크플로우",
        desc: "검색·추론·실행을 자동으로 수행하는 멀티스텝 에이전트. LangGraph와 커스텀 오케스트레이션으로 구현합니다.",
        tags: ["LangGraph", "Tools", "Memory"],
      },
      {
        icon: "🗂️",
        title: "벡터 검색",
        desc: "수백만 문서를 밀리초 안에 의미 기반으로 검색. 키워드+임베딩 하이브리드 검색과 관련도 튜닝 지원.",
        tags: ["FAISS", "Weaviate", "OpenSearch"],
      },
      {
        icon: "📈",
        title: "예측 모델링",
        desc: "트렌드 예측, 콘텐츠 분류, 이상 탐지. 학습부터 프로덕션까지 ML 파이프라인을 지속적으로 모니터링합니다.",
        tags: ["scikit-learn", "PyTorch", "MLflow"],
      },
    ],
    pipeline_title: "RAG 파이프라인 — 동작 방식",
    services_badge: "서비스",
    services_h2: "무엇을 만드나요",
    services_sub: "WEB, APP, AI — 세 가지 모두, 또는 필요한 것만.",
    web_title: "WEB 서비스",
    web_desc: "포트폴리오, 개인 브랜딩, 구독 플랫폼, 커뮤니티 — 웹에서 상상할 수 있는 모든 것.",
    web_features: ["맞춤 디자인·개발", "완전 반응형", "도메인·호스팅 포함", "SEO 기본 세팅"],
    app_title: "APP 서비스",
    app_desc: "일상을 편리하게 만드는 iOS·Android 앱 — 자동화, 알림, 개인 대시보드 등.",
    app_features: ["iOS & Android 지원", "개인 맞춤 UX 설계", "푸시·자동화 기능", "앱스토어 배포"],
    other_services: [
      { icon: "📰", title: "모닝브리핑", desc: "AI가 큐레이션한 주식·코인·날씨·뉴스 일일 요약.", tags: ["주식", "코인", "날씨", "뉴스"], badge: null },
      { icon: "🎓", title: "교육 서비스", desc: "AI 튜터링 기반 적응형 학습 플랫폼.", tags: [], badge: "개발 중" },
      { icon: "💼", title: "취업 서비스", desc: "AI가 매칭하는 나만의 커리어 경로.", tags: [], badge: "개발 중" },
    ],
    stack_badge: "기술 스택",
    stack_h2: "최신 기술로 만들어집니다",
    stack_sub: "세계 최고 AI 제품들이 사용하는 기술 스택을 동일하게 활용합니다.",
    team_badge: "팀",
    team_h2: "Zuply를 만드는 사람들",
    team_sub: "AI 리서치부터 인프라까지 각 분야 전문가들이 함께합니다.",
    team: [
      { name: "Seunghwan", role: "프로덕트 플래너", desc: "제품 비전과 AI 전략을 수립합니다. 복잡한 AI 기술을 사용자 중심 로드맵으로 전환하는 역할을 맡습니다.", skills: ["LLM 전략", "RAG 설계", "프로덕트 로드맵", "AI 워크플로우"] },
      { name: "Kairo", role: "UI/UX 디자이너", desc: "AI 제품을 위한 직관적인 인터페이스를 설계합니다. 데이터 대시보드와 인터랙션 시스템 설계에 특화되어 있습니다.", skills: ["Figma", "디자인 시스템", "프로토타이핑", "대시보드 UX"] },
      { name: "Yumi", role: "프론트엔드 엔지니어", desc: "고성능 실시간 AI 인터페이스를 구현합니다. LLM 스트리밍 출력, 인터랙티브 데이터 시각화, SSE 처리에 능숙합니다.", skills: ["Next.js", "TypeScript", "D3.js", "WebSocket", "SSE"] },
      { name: "Jaden", role: "백엔드 엔지니어", desc: "AI 파이프라인과 API 레이어를 설계합니다. RAG 시스템, LangChain 연동, 고성능 추론 서버를 구축합니다.", skills: ["FastAPI", "LangChain", "LangGraph", "pgvector", "Redis"] },
      { name: "Ryan", role: "인프라 엔지니어", desc: "AI 워크로드를 위한 클라우드 인프라를 운영합니다. GPU 인스턴스, 벡터 DB, 모델 서빙을 최적화합니다.", skills: ["AWS", "Docker", "Kubernetes", "MLflow", "Pinecone"] },
      { name: "Sophie", role: "프로덕트 매니저", desc: "AI 제품 개발 사이클 전체를 조율합니다. 리서치·엔지니어링·디자인 팀 간 협업을 통해 일정 내 제품을 출시합니다.", skills: ["Agile", "JIRA", "A/B 테스팅", "Analytics", "OKR"] },
      { name: "Ethan", role: "QA 엔지니어", desc: "AI 시스템의 안정성을 검증합니다. LLM 출력 품질, 지연 시간, 엣지케이스 견고성을 위한 평가 프레임워크를 설계합니다.", skills: ["LLM 평가", "Pytest", "k6", "Playwright", "CI/CD"] },
      { name: "Hana", role: "데이터 분석가", desc: "원시 데이터를 제품 인사이트로 전환합니다. 예측 모델, 행동 분석 파이프라인, 경영진 대시보드를 구축합니다.", skills: ["Python", "pandas", "SQL", "scikit-learn", "Tableau"] },
    ],
    contact_badge: "연락처",
    contact_h2: "프로젝트 시작하기",
    contact_sub: "원하시는 것을 말씀해 주세요. 나머지는 저희가 합니다.",
    form_name: "이름", form_name_ph: "홍길동 (2자 이상)",
    form_email: "이메일", form_email_ph: "hello@example.com",
    form_subject: "제목", form_subject_ph: "어떤 서비스를 만들고 싶으신가요?",
    form_message: "내용", form_message_ph: "아이디어나 문의 내용을 입력해주세요. (10자 이상)",
    privacy_title: "개인정보 수집·이용 동의",
    privacy_body: "수집 항목: 이름, 이메일, 문의 내용 / 수집 목적: 문의 접수 및 답변 발송 / 보유 기간: 처리 완료 후 6개월",
    privacy_agree: "개인정보 수집·이용에 동의합니다.",
    submit: "문의 보내기", submitting: "전송 중...",
    err_name: "이름은 2자 이상 입력해주세요.",
    err_email: "올바른 이메일 주소를 입력해주세요.",
    err_subject: "제목을 입력해주세요.",
    err_message: "내용은 10자 이상 입력해주세요.",
    err_agreed: "개인정보 수집·이용에 동의해주세요.",
    success_h: "문의가 접수되었습니다!",
    success_p: "빠른 시일 내에 연락드리겠습니다.",
    footer_tagline: "개인을 위한 WEB · APP · AI 스튜디오",
    footer_copy: "© 2025 Zuply. All rights reserved.",
  },
} as const;
type Lang = keyof typeof T;

// ── Typewriter ────────────────────────────────────────────────────
function Typewriter({ lines }: { lines: readonly string[] }) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [cur, setCur] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  useEffect(() => {
    if (lineIdx >= lines.length) return;
    if (charIdx < lines[lineIdx].length) {
      const t = setTimeout(() => { setCur(lines[lineIdx].slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 25);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => { setDisplayed(d => [...d, lines[lineIdx]]); setCur(""); setCharIdx(0); setLineIdx(l => l + 1); }, 350);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx, lines]);
  return (
    <div className="font-mono text-sm leading-7">
      {displayed.map((l, i) => (
        <div key={i} className={l.includes("🚀") ? "text-emerald-400" : l.includes("✓") ? "text-indigo-400" : "text-gray-300"}>{l}</div>
      ))}
      {lineIdx < lines.length && <div className="text-gray-300">{cur}<span className="animate-pulse">▌</span></div>}
    </div>
  );
}

// ── CountUp ───────────────────────────────────────────────────────
function useCountUp(target: number, dur = 2000, active = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let t0: number | null = null;
    const tick = (ts: number) => { if (!t0) t0 = ts; const p = Math.min((ts - t0) / dur, 1); setN(Math.floor((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }, [active, target, dur]);
  return n;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Stats ─────────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Stats({ t }: { t: any }) {
  const { ref, inView } = useInView(0.1);
  const u = useCountUp(12400, 2000, inView);
  const a = useCountUp(38, 1800, inView);
  const s = useCountUp(97, 1600, inView);
  const y = useCountUp(5, 1200, inView);
  const vals = [
    { v: u.toLocaleString(), suf: "+", label: t.stat_labels[0] },
    { v: a, suf: "+", label: t.stat_labels[1] },
    { v: s, suf: "%", label: t.stat_labels[2] },
    { v: y, suf: "+", label: t.stat_labels[3] },
  ];
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-10">
      {vals.map((s) => (
        <div key={s.label} className="text-center py-4">
          <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">{s.v}<span className="text-2xl sm:text-3xl">{s.suf}</span></div>
          <div className="text-sm text-gray-400">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ── Graph ─────────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Graph({ t }: { t: any }) {
  const { ref, inView } = useInView(0.2);
  const bars = [
    { pct: 96, color: "from-indigo-500 to-indigo-400" },
    { pct: 93, color: "from-violet-500 to-violet-400" },
    { pct: 91, color: "from-sky-500 to-sky-400" },
    { pct: 88, color: "from-emerald-500 to-emerald-400" },
  ];
  return (
    <div ref={ref} className="space-y-5">
      {bars.map((b, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm mb-2"><span className="text-gray-300">{t.graph_labels[i]}</span><span className="text-gray-500">{b.pct}%</span></div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className={`h-full rounded-full bg-gradient-to-r ${b.color} transition-all duration-1000`} style={{ width: inView ? `${b.pct}%` : "0%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── RAG Pipeline Diagram ──────────────────────────────────────────
function RagDiagram({ title }: { title: string }) {
  const { ref, inView } = useInView(0.2);
  const steps = [
    { label: "User Query", color: "border-indigo-500/50 bg-indigo-500/10 text-indigo-300" },
    { label: "Embedding\nModel", color: "border-violet-500/50 bg-violet-500/10 text-violet-300" },
    { label: "Vector\nSearch", color: "border-sky-500/50 bg-sky-500/10 text-sky-300" },
    { label: "Context\nRetrieval", color: "border-cyan-500/50 bg-cyan-500/10 text-cyan-300" },
    { label: "LLM\nGeneration", color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-300" },
    { label: "Response", color: "border-green-500/50 bg-green-500/10 text-green-300" },
  ];
  return (
    <div ref={ref} className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
      <p className="text-xs text-gray-500 font-mono mb-6">{`// ${title}`}</p>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`px-3 py-2 rounded-xl border text-xs font-mono text-center leading-tight whitespace-pre transition-all duration-700 ${s.color} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 120}ms` }}>
              {s.label}
            </div>
            {i < steps.length - 1 && (
              <div className={`text-gray-600 text-sm transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 120 + 80}ms` }}>→</div>
            )}
          </div>
        ))}
      </div>
      {/* Data flow line */}
      <div className="mt-6 font-mono text-xs text-gray-600 space-y-1">
        <div><span className="text-indigo-400">query</span> <span className="text-gray-700">→</span> <span className="text-violet-400">embed()</span> <span className="text-gray-700">→</span> <span className="text-sky-400">vectorDB.search(k=5)</span> <span className="text-gray-700">→</span> <span className="text-emerald-400">llm.generate(ctx)</span></div>
        <div><span className="text-gray-600">// similarity: cosine · model: text-embedding-3-large · top_k: 5</span></div>
      </div>
    </div>
  );
}

// ── Live Data Chart ───────────────────────────────────────────────
function LiveChart() {
  const [data, setData] = useState<number[]>([40, 55, 48, 62, 58, 70, 65, 78, 72, 85, 80, 92]);
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const next = [...prev.slice(1), Math.floor(60 + Math.random() * 35)];
        return next;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);
  const max = Math.max(...data);
  const min = Math.min(...data);
  const h = 80;
  const w = 100 / (data.length - 1);
  const points = data.map((v, i) => {
    const x = i * w;
    const y = h - ((v - min) / (max - min + 1)) * h;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-400 font-mono">model_accuracy · live</span>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />LIVE
        </span>
      </div>
      <svg viewBox={`0 0 100 ${h}`} className="w-full" preserveAspectRatio="none" style={{ height: 80 }}>
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`0,${h} ${points} 100,${h}`} fill="url(#chartGrad)" />
        <polyline points={points} fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((v, i) => (
          <circle key={i} cx={i * w} cy={h - ((v - min) / (max - min + 1)) * h} r="1.5" fill="#818cf8" />
        ))}
      </svg>
      <div className="mt-3 flex justify-between text-xs font-mono text-gray-600">
        <span>t-{data.length}</span><span>accuracy: {data[data.length - 1]}%</span><span>now</span>
      </div>
    </div>
  );
}

// ── Tech Stack ────────────────────────────────────────────────────
const STACK = [
  { label: "Next.js", color: "border-white/20 text-white" },
  { label: "React", color: "border-sky-500/40 text-sky-400" },
  { label: "TypeScript", color: "border-blue-500/40 text-blue-400" },
  { label: "Python", color: "border-yellow-500/40 text-yellow-400" },
  { label: "LangChain", color: "border-emerald-500/40 text-emerald-400" },
  { label: "LangGraph", color: "border-teal-500/40 text-teal-400" },
  { label: "OpenAI API", color: "border-green-500/40 text-green-400" },
  { label: "Anthropic", color: "border-orange-500/40 text-orange-400" },
  { label: "pgvector", color: "border-indigo-500/40 text-indigo-400" },
  { label: "Pinecone", color: "border-violet-500/40 text-violet-400" },
  { label: "PyTorch", color: "border-red-500/40 text-red-400" },
  { label: "FastAPI", color: "border-cyan-500/40 text-cyan-400" },
  { label: "PostgreSQL", color: "border-blue-400/40 text-blue-300" },
  { label: "Redis", color: "border-red-400/40 text-red-300" },
  { label: "Docker", color: "border-sky-400/40 text-sky-300" },
  { label: "AWS", color: "border-orange-400/40 text-orange-300" },
  { label: "Vercel", color: "border-white/15 text-gray-300" },
  { label: "React Native", color: "border-violet-400/40 text-violet-300" },
];

const TEAM_COLORS = [
  "from-indigo-500 to-indigo-600", "from-rose-500 to-pink-600",
  "from-violet-500 to-purple-600", "from-sky-500 to-blue-600",
  "from-slate-400 to-slate-600", "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-500", "from-cyan-500 to-sky-500",
];

// ── Main ──────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = useCallback(() => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = t.err_name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.err_email;
    if (!form.subject.trim()) e.subject = t.err_subject;
    if (form.message.trim().length < 10) e.message = t.err_message;
    if (!agreed) e.agreed = t.err_agreed;
    return e;
  }, [form, agreed, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xgorwywd", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) setSubmitted(true);
    } finally { setSubmitting(false); }
  };

  const navHrefs = ["#about", "#services", "#ai", "#stack", "#team", "#contact"];

  return (
    <main className="min-h-screen bg-[#080810] text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#080810]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold"><span className="text-indigo-400">Z</span>uply</a>
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            {t.nav.map((n, i) => <a key={i} href={navHrefs[i]} className="hover:text-white transition-colors">{n}</a>)}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(l => l === "en" ? "ko" : "en")}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all">
              {lang === "en" ? "한국어" : "English"}
            </button>
            <a href="#contact" className="hidden sm:block px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full text-sm font-medium transition-all">{t.cta_primary}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.5) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />{t.badge}
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              {t.hero_h1.map((line, i) => (
                <span key={i} className={i === 1 ? "block bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent" : "block"}>{line}</span>
              ))}
            </h1>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">{t.hero_sub}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25">{t.cta_primary}</a>
              <a href="#services" className="px-6 py-3 border border-white/10 hover:border-white/25 rounded-full text-sm text-gray-300 hover:text-white transition-all">{t.cta_secondary}</a>
            </div>
          </div>
          {/* Terminal */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-red-500/60" /><span className="w-3 h-3 rounded-full bg-amber-500/60" /><span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-gray-500 font-mono">zuply — terminal</span>
            </div>
            <div className="p-6 min-h-[200px]"><Typewriter lines={t.terminal_lines} /></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto"><Stats t={t} /></div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-6">{t.about_badge}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              {t.about_h2.map((line, i) => <span key={i} className={i === 1 ? "block text-indigo-400" : "block"}>{line}</span>)}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">{t.about_p1}</p>
            <p className="text-gray-400 leading-relaxed mb-8">{t.about_p2}</p>
            <div className="flex flex-wrap gap-2">
              {t.about_tags.map(tag => <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 bg-white/[0.03]">{tag}</span>)}
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8">
              <h3 className="text-sm font-medium text-gray-400 mb-6">{t.graph_title}</h3>
              <Graph t={t} />
            </div>
            <LiveChart />
          </div>
        </div>
      </section>

      {/* AI & DATA */}
      <section id="ai" className="py-32 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs mb-4">{t.ai_badge}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.ai_h2}</h2>
            <p className="text-gray-500 max-w-lg mx-auto">{t.ai_sub}</p>
          </div>

          {/* AI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {t.ai_cards.map((card) => (
              <div key={card.title} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 hover:bg-white/[0.04] transition-all group">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="font-bold text-base mb-2 text-white">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{card.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map(tag => <span key={tag} className="px-2 py-0.5 rounded text-xs bg-violet-500/10 text-violet-400 border border-violet-500/20 font-mono">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* RAG Diagram */}
          <RagDiagram title={t.pipeline_title} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-4">{t.services_badge}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.services_h2}</h2>
            <p className="text-gray-500 max-w-lg mx-auto">{t.services_sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { title: t.web_title, desc: t.web_desc, features: t.web_features, icon: "🌐", border: "border-indigo-500/20", bg: "from-indigo-500/10", accent: "text-indigo-400", dot: "▸" },
              { title: t.app_title, desc: t.app_desc, features: t.app_features, icon: "📱", border: "border-violet-500/20", bg: "from-violet-500/10", accent: "text-violet-400", dot: "▸" },
            ].map(s => (
              <div key={s.title} className={`relative p-8 rounded-2xl overflow-hidden border ${s.border} bg-gradient-to-br ${s.bg} to-transparent hover:border-opacity-60 transition-all group`}>
                <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xl mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2">{s.features.map(f => <li key={f} className={`flex items-center gap-2 text-sm text-gray-300`}><span className={`${s.accent} text-xs`}>{s.dot}</span>{f}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {t.other_services.map((s) => (
              <div key={s.title} className="p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all">
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                {s.badge && <span className="px-3 py-1.5 rounded-full text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20">{s.badge}</span>}
                {s.tags.length > 0 && <div className="flex flex-wrap gap-2">{s.tags.map(tag => <span key={tag} className="px-3 py-1.5 rounded-full text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">{tag}</span>)}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="py-32 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-4">{t.stack_badge}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.stack_h2}</h2>
            <p className="text-gray-500 max-w-lg mx-auto">{t.stack_sub}</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {STACK.map(s => <span key={s.label} className={`px-4 py-2 rounded-full border text-sm font-mono ${s.color} bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-default`}>{s.label}</span>)}
          </div>
          {/* Architecture */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 font-mono text-xs text-gray-500 overflow-x-auto">
            <div className="text-gray-600 mb-3">{`// AI application architecture`}</div>
            <div className="space-y-1.5">
              <div><span className="text-indigo-400">Client</span> <span className="text-gray-700">(React / React Native)</span></div>
              <div className="pl-4">↓ <span className="text-gray-600">HTTPS / WebSocket / SSE</span></div>
              <div><span className="text-sky-400">API Gateway</span> <span className="text-gray-700">(Next.js / FastAPI)</span></div>
              <div className="pl-4">↓</div>
              <div className="flex flex-wrap gap-8">
                <span><span className="text-violet-400">LLM Router</span> <span className="text-gray-700">(LangChain)</span></span>
                <span><span className="text-emerald-400">RAG Engine</span> <span className="text-gray-700">(pgvector + Pinecone)</span></span>
                <span><span className="text-pink-400">Agent</span> <span className="text-gray-700">(LangGraph)</span></span>
              </div>
              <div className="pl-4">↓</div>
              <div className="flex flex-wrap gap-8">
                <span><span className="text-orange-400">OpenAI / Anthropic</span></span>
                <span><span className="text-yellow-400">PyTorch</span> <span className="text-gray-700">(custom models)</span></span>
                <span><span className="text-red-400">Redis</span> <span className="text-gray-700">(cache + session)</span></span>
              </div>
              <div className="pl-4">↓</div>
              <div><span className="text-teal-400">Deploy</span> <span className="text-gray-700">(Vercel + Docker + AWS Lambda)</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-4">{t.team_badge}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.team_h2}</h2>
            <p className="text-gray-500 max-w-md mx-auto">{t.team_sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.team.map((m, i) => (
              <div key={m.name} className="rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all overflow-hidden group">
                <div className={`h-1 bg-gradient-to-r ${TEAM_COLORS[i]}`} />
                <div className="p-6">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${TEAM_COLORS[i]} mb-4 flex items-center justify-center text-white font-bold text-base`}>{m.name[0]}</div>
                  <p className="font-semibold text-sm text-white">{m.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5 mb-3">{m.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">{m.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.skills.map(s => (
                      <span key={s} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/8 text-gray-400">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 bg-white/[0.015] border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-4">{t.contact_badge}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.contact_h2}</h2>
            <p className="text-gray-500">{t.contact_sub}</p>
          </div>
          {submitted ? (
            <div className="text-center py-16 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">{t.success_h}</h3>
              <p className="text-gray-500 text-sm">{t.success_p}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[{ key: "name", label: t.form_name, ph: t.form_name_ph, type: "text" }, { key: "email", label: t.form_email, ph: t.form_email_ph, type: "email" }].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">{f.label} <span className="text-red-400">*</span></label>
                    <input type={f.type} value={form[f.key as keyof typeof form]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} placeholder={f.ph}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${errors[f.key] ? "border-red-500/40" : "border-white/8"} text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm`} />
                    {errors[f.key] && <p className="text-red-400 text-xs mt-1">{errors[f.key]}</p>}
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">{t.form_subject} <span className="text-red-400">*</span></label>
                <input type="text" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} placeholder={t.form_subject_ph}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${errors.subject ? "border-red-500/40" : "border-white/8"} text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm`} />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">{t.form_message} <span className="text-red-400">*</span></label>
                <textarea value={form.message} rows={5} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder={t.form_message_ph}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${errors.message ? "border-red-500/40" : "border-white/8"} text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none text-sm`} />
                <div className="flex justify-between mt-1">
                  {errors.message ? <p className="text-red-400 text-xs">{errors.message}</p> : <span />}
                  <p className="text-xs text-gray-600">{form.message.length} chars</p>
                </div>
              </div>
              <div className={`p-4 rounded-xl border ${errors.agreed ? "border-red-500/30 bg-red-500/5" : "border-white/8 bg-white/[0.02]"}`}>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed"><span className="text-gray-300 font-medium">{t.privacy_title}</span><br />{t.privacy_body}</p>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="w-4 h-4 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/30" />
                  <span className="text-sm text-gray-300">{t.privacy_agree} <span className="text-red-400">*</span></span>
                </label>
                {errors.agreed && <p className="text-red-400 text-xs mt-1">{errors.agreed}</p>}
              </div>
              <button type="submit" disabled={submitting}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-xl text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20">
                {submitting ? t.submitting : t.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div><p className="text-white font-bold mb-0.5"><span className="text-indigo-400">Z</span>uply</p><p className="text-xs">{t.footer_tagline}</p></div>
          <p className="text-xs">{t.footer_copy}</p>
        </div>
      </footer>
    </main>
  );
}
