"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ── i18n ──────────────────────────────────────────────────────────
const T = {
  en: {
    nav: ["About", "Services", "Stack", "Team", "Contact"],
    cta_primary: "Get Started",
    cta_secondary: "View Services",
    badge: "Personal WEB & APP Studio",
    hero_h1: ["Build apps", "for you,", "not enterprises."],
    hero_sub: "Zuply designs and delivers personalised web & mobile applications — crafted around your life, not a corporation's.",
    terminal_lines: [
      "$ zuply init my-app",
      "  ✓ Analysing requirements...",
      "  ✓ Designing personalised UX...",
      "  ✓ Building & deploying...",
      "  🚀 Your app is live at zuply.app/me",
    ],
    about_badge: "About",
    about_h2: ["Not for enterprises.", "Built for you."],
    about_p1: "Most software is built for organisations. Zuply flips that — we build web & mobile apps designed entirely around the individual.",
    about_p2: "You describe what you need, we handle the technology. From idea to deployed product, we manage everything.",
    about_tags: ["Personal WEB", "Mobile APP", "End-to-end delivery", "Fast launch"],
    graph_title: "Core capabilities",
    graph_labels: ["Personalisation", "UX Design", "Dev speed", "Client satisfaction"],
    stat_labels: ["Users served", "Apps shipped", "Satisfaction", "Years running"],
    services_badge: "Services",
    services_h2: "What we build",
    services_sub: "Two main tracks, built around your needs.",
    web_title: "WEB Services",
    web_desc: "Portfolio sites, personal brands, subscription platforms, communities — anything you can imagine on the web.",
    web_features: ["Custom design & development", "Fully responsive", "Domain & hosting included", "SEO-ready"],
    app_title: "APP Services",
    app_desc: "iOS & Android apps that fit your daily life — automation, notifications, personal dashboards, and more.",
    app_features: ["iOS & Android support", "Personalised UX design", "Push & automation", "App store deployment"],
    other_services: [
      { icon: "📰", title: "Morning Briefing", desc: "Daily digest of stocks, crypto, weather & news — delivered every morning.", tags: ["Stocks", "Crypto", "Weather", "News"], badge: null },
      { icon: "🎓", title: "Education", desc: "A learning platform anyone can grow with.", tags: [], badge: "Coming soon" },
      { icon: "💼", title: "Career", desc: "Find the career path that truly fits you.", tags: [], badge: "Coming soon" },
    ],
    stack_badge: "Tech Stack",
    stack_h2: "Built with modern technology",
    stack_sub: "We use the same tools powering the world's best products.",
    team_badge: "Team",
    team_h2: "The people behind Zuply",
    team_sub: "Specialists across every discipline — from strategy to infrastructure.",
    team: [
      { name: "Seunghwan", role: "Product Planner" },
      { name: "Sungjin", role: "UI/UX Designer" },
      { name: "Yumi", role: "Frontend Engineer" },
      { name: "Jaden", role: "Backend Engineer" },
      { name: "Ryan", role: "Infrastructure" },
      { name: "Sophie", role: "Product Manager" },
      { name: "Ethan", role: "QA Engineer" },
      { name: "Hana", role: "Data Analyst" },
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
    submit: "Send message",
    submitting: "Sending...",
    err_name: "Name must be at least 2 characters.",
    err_email: "Please enter a valid email address.",
    err_subject: "Subject is required.",
    err_message: "Message must be at least 10 characters.",
    err_agreed: "Please agree to the privacy policy.",
    success_h: "Message received!",
    success_p: "We'll get back to you as soon as possible.",
    footer_tagline: "Personal WEB & APP Studio",
    footer_copy: "© 2025 Zuply. All rights reserved.",
  },
  ko: {
    nav: ["소개", "서비스", "기술", "팀", "연락처"],
    cta_primary: "시작하기",
    cta_secondary: "서비스 보기",
    badge: "개인을 위한 WEB & APP 스튜디오",
    hero_h1: ["기업이 아닌", "당신을 위한", "앱을 만듭니다."],
    hero_sub: "Zuply는 개인을 위한 맞춤형 웹·모바일 앱을 설계하고 제공합니다. 기업용 소프트웨어가 아닌, 당신의 일상에 맞는 서비스입니다.",
    terminal_lines: [
      "$ zuply init my-app",
      "  ✓ 요구사항 분석 중...",
      "  ✓ 개인화 UX 설계 중...",
      "  ✓ 빌드 & 배포 중...",
      "  🚀 앱이 배포되었습니다: zuply.app/me",
    ],
    about_badge: "소개",
    about_h2: ["기업용 소프트웨어는 그만.", "이제 당신을 위한 앱."],
    about_p1: "대부분의 소프트웨어는 기업을 위해 만들어집니다. Zuply는 반대입니다. 개인을 위해 설계된 WEB·APP 서비스를 제공합니다.",
    about_p2: "원하는 것만 말씀해 주세요. 기술은 저희가 담당합니다. 아이디어부터 배포까지 전부 처리합니다.",
    about_tags: ["개인 맞춤 WEB", "모바일 APP", "전체 개발·배포", "빠른 출시"],
    graph_title: "핵심 역량",
    graph_labels: ["개인화", "UX 설계", "개발 속도", "고객 만족도"],
    stat_labels: ["누적 사용자", "출시 앱·서비스", "고객 만족도", "서비스 운영"],
    services_badge: "서비스",
    services_h2: "무엇을 만드나요",
    services_sub: "두 가지 핵심 트랙, 모두 당신 중심입니다.",
    web_title: "WEB 서비스",
    web_desc: "포트폴리오, 개인 브랜딩, 구독 플랫폼, 커뮤니티 — 웹에서 상상할 수 있는 모든 것.",
    web_features: ["맞춤 디자인·개발", "완전 반응형", "도메인·호스팅 포함", "SEO 기본 세팅"],
    app_title: "APP 서비스",
    app_desc: "일상을 편리하게 만드는 iOS·Android 앱 — 자동화, 알림, 개인 대시보드 등.",
    app_features: ["iOS & Android 지원", "개인 맞춤 UX 설계", "푸시·자동화 기능", "앱스토어 배포"],
    other_services: [
      { icon: "📰", title: "모닝브리핑", desc: "매일 아침 주식·코인·날씨·뉴스를 한눈에 정리해서 전달합니다.", tags: ["주식", "코인", "날씨", "뉴스"], badge: null },
      { icon: "🎓", title: "교육 서비스", desc: "누구나 쉽게 배우고 성장할 수 있는 교육 플랫폼.", tags: [], badge: "개발 중" },
      { icon: "💼", title: "취업 서비스", desc: "당신에게 딱 맞는 커리어를 찾을 수 있도록 도와드립니다.", tags: [], badge: "개발 중" },
    ],
    stack_badge: "기술 스택",
    stack_h2: "최신 기술로 만들어집니다",
    stack_sub: "세계 최고 제품들이 사용하는 기술 스택을 동일하게 활용합니다.",
    team_badge: "팀",
    team_h2: "Zuply를 만드는 사람들",
    team_sub: "전략부터 인프라까지 각 분야 전문가들이 함께합니다.",
    team: [
      { name: "Seunghwan", role: "프로덕트 플래너" },
      { name: "Sungjin", role: "UI/UX 디자이너" },
      { name: "Yumi", role: "프론트엔드 엔지니어" },
      { name: "Jaden", role: "백엔드 엔지니어" },
      { name: "Ryan", role: "인프라" },
      { name: "Sophie", role: "프로덕트 매니저" },
      { name: "Ethan", role: "QA 엔지니어" },
      { name: "Hana", role: "데이터 분석가" },
    ],
    contact_badge: "연락처",
    contact_h2: "프로젝트 시작하기",
    contact_sub: "원하시는 것을 말씀해 주세요. 나머지는 저희가 합니다.",
    form_name: "이름", form_name_ph: "홍길동 (2자 이상)",
    form_email: "이메일", form_email_ph: "hello@example.com",
    form_subject: "제목", form_subject_ph: "어떤 앱을 만들고 싶으신가요?",
    form_message: "내용", form_message_ph: "아이디어나 문의 내용을 입력해주세요. (10자 이상)",
    privacy_title: "개인정보 수집·이용 동의",
    privacy_body: "수집 항목: 이름, 이메일, 문의 내용 / 수집 목적: 문의 접수 및 답변 발송 / 보유 기간: 처리 완료 후 6개월",
    privacy_agree: "개인정보 수집·이용에 동의합니다.",
    submit: "문의 보내기",
    submitting: "전송 중...",
    err_name: "이름은 2자 이상 입력해주세요.",
    err_email: "올바른 이메일 주소를 입력해주세요.",
    err_subject: "제목을 입력해주세요.",
    err_message: "내용은 10자 이상 입력해주세요.",
    err_agreed: "개인정보 수집·이용에 동의해주세요.",
    success_h: "문의가 접수되었습니다!",
    success_p: "빠른 시일 내에 연락드리겠습니다.",
    footer_tagline: "개인을 위한 WEB & APP 스튜디오",
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
      const t = setTimeout(() => {
        setCur(lines[lineIdx].slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayed(d => [...d, lines[lineIdx]]);
        setCur("");
        setCharIdx(0);
        setLineIdx(l => l + 1);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx, lines]);

  return (
    <div className="font-mono text-sm leading-7">
      {displayed.map((l, i) => (
        <div key={i} className={l.startsWith("  🚀") ? "text-emerald-400" : l.startsWith("  ✓") ? "text-indigo-400" : "text-gray-300"}>
          {l}
        </div>
      ))}
      {lineIdx < lines.length && (
        <div className="text-gray-300">{cur}<span className="animate-pulse">▌</span></div>
      )}
    </div>
  );
}

// ── CountUp ───────────────────────────────────────────────────────
function useCountUp(target: number, dur = 2000, active = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let t0: number | null = null;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, dur]);
  return n;
}

// ── useInView ─────────────────────────────────────────────────────
function useInView(threshold = 0.2) {
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
          <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
            {s.v}<span className="text-2xl sm:text-3xl">{s.suf}</span>
          </div>
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
    { pct: 95, color: "from-indigo-500 to-indigo-400" },
    { pct: 91, color: "from-violet-500 to-violet-400" },
    { pct: 88, color: "from-sky-500 to-sky-400" },
    { pct: 97, color: "from-emerald-500 to-emerald-400" },
  ];
  return (
    <div ref={ref} className="space-y-5">
      {bars.map((b, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-300">{t.graph_labels[i]}</span>
            <span className="text-gray-500">{b.pct}%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${b.color} transition-all duration-1000`}
              style={{ width: inView ? `${b.pct}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Tech Stack ────────────────────────────────────────────────────
const STACK = [
  { label: "Next.js", color: "border-white/20 text-white" },
  { label: "React", color: "border-sky-500/40 text-sky-400" },
  { label: "TypeScript", color: "border-blue-500/40 text-blue-400" },
  { label: "Tailwind CSS", color: "border-cyan-500/40 text-cyan-400" },
  { label: "Node.js", color: "border-green-500/40 text-green-400" },
  { label: "PostgreSQL", color: "border-indigo-500/40 text-indigo-400" },
  { label: "Redis", color: "border-red-500/40 text-red-400" },
  { label: "AWS", color: "border-orange-500/40 text-orange-400" },
  { label: "Vercel", color: "border-white/20 text-white" },
  { label: "Docker", color: "border-sky-400/40 text-sky-300" },
  { label: "React Native", color: "border-violet-500/40 text-violet-400" },
  { label: "GraphQL", color: "border-pink-500/40 text-pink-400" },
];

const TEAM_COLORS = [
  "from-indigo-500 to-indigo-600",
  "from-rose-500 to-pink-600",
  "from-violet-500 to-purple-600",
  "from-sky-500 to-blue-600",
  "from-slate-400 to-slate-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-500",
  "from-cyan-500 to-sky-500",
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
      const res = await fetch("https://formspree.io/f/xgorwywd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } finally { setSubmitting(false); }
  };

  return (
    <main className="min-h-screen bg-[#080810] text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#080810]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="text-indigo-400">Z</span>uply
          </a>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            {t.nav.map((n, i) => (
              <a key={i} href={`#${["about","services","stack","team","contact"][i]}`}
                className="hover:text-white transition-colors">{n}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(l => l === "en" ? "ko" : "en")}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all">
              {lang === "en" ? "한국어" : "English"}
            </button>
            <a href="#contact"
              className="hidden sm:block px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full text-sm font-medium transition-all">
              {t.cta_primary}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* bg effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.5) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              {t.badge}
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              {t.hero_h1.map((line, i) => (
                <span key={i} className={i === 1 ? "block bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent" : "block"}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">{t.hero_sub}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25">
                {t.cta_primary}
              </a>
              <a href="#services" className="px-6 py-3 border border-white/10 hover:border-white/25 rounded-full text-sm text-gray-300 hover:text-white transition-all">
                {t.cta_secondary}
              </a>
            </div>
          </div>

          {/* right — terminal */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-amber-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-gray-500 font-mono">zuply — terminal</span>
            </div>
            <div className="p-6 min-h-[200px]">
              <Typewriter lines={t.terminal_lines} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <Stats t={t} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-6">{t.about_badge}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              {t.about_h2.map((line, i) => (
                <span key={i} className={i === 1 ? "block text-indigo-400" : "block"}>{line}</span>
              ))}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">{t.about_p1}</p>
            <p className="text-gray-400 leading-relaxed mb-8">{t.about_p2}</p>
            <div className="flex flex-wrap gap-2">
              {t.about_tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-300 bg-white/[0.03]">{tag}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8">
            <h3 className="text-sm font-medium text-gray-400 mb-6">{t.graph_title}</h3>
            <Graph t={t} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-4">{t.services_badge}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.services_h2}</h2>
            <p className="text-gray-500 max-w-lg mx-auto">{t.services_sub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* WEB */}
            <div className="relative p-8 rounded-2xl overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-transparent group hover:border-indigo-500/40 transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/10 transition-all" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center text-xl mb-6">🌐</div>
                <h3 className="text-xl font-bold mb-3">{t.web_title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.web_desc}</p>
                <ul className="space-y-2">
                  {t.web_features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-indigo-400 text-xs">▸</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* APP */}
            <div className="relative p-8 rounded-2xl overflow-hidden border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent group hover:border-violet-500/40 transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-500/10 transition-all" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl border border-violet-500/30 bg-violet-500/10 flex items-center justify-center text-xl mb-6">📱</div>
                <h3 className="text-xl font-bold mb-3">{t.app_title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.app_desc}</p>
                <ul className="space-y-2">
                  {t.app_features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-violet-400 text-xs">▸</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {t.other_services.map((s) => (
              <div key={s.title} className="p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all">
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                {s.badge && <span className="px-3 py-1.5 rounded-full text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20">{s.badge}</span>}
                {s.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(tag => <span key={tag} className="px-3 py-1.5 rounded-full text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">{tag}</span>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-4">{t.stack_badge}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.stack_h2}</h2>
            <p className="text-gray-500 max-w-lg mx-auto">{t.stack_sub}</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {STACK.map(s => (
              <span key={s.label} className={`px-4 py-2 rounded-full border text-sm font-mono ${s.color} bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-default`}>
                {s.label}
              </span>
            ))}
          </div>
          {/* Architecture diagram feel */}
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 font-mono text-xs text-gray-500 overflow-x-auto">
            <div className="text-gray-600 mb-3">{`// architecture overview`}</div>
            <div className="space-y-1">
              <div><span className="text-indigo-400">Client</span> <span className="text-gray-600">(React / React Native)</span></div>
              <div className="pl-4">↓ <span className="text-gray-600">HTTPS / WebSocket</span></div>
              <div><span className="text-sky-400">API Gateway</span> <span className="text-gray-600">(Next.js / Node.js)</span></div>
              <div className="pl-4">↓</div>
              <div className="flex flex-wrap gap-6">
                <span><span className="text-violet-400">Auth</span> <span className="text-gray-600">(JWT)</span></span>
                <span><span className="text-emerald-400">DB</span> <span className="text-gray-600">(PostgreSQL + Redis)</span></span>
                <span><span className="text-orange-400">Storage</span> <span className="text-gray-600">(AWS S3)</span></span>
              </div>
              <div className="pl-4">↓</div>
              <div><span className="text-pink-400">Deploy</span> <span className="text-gray-600">(Vercel + Docker + AWS)</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-32 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs mb-4">{t.team_badge}</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.team_h2}</h2>
            <p className="text-gray-500 max-w-md mx-auto">{t.team_sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.team.map((m, i) => (
              <div key={m.name} className="group rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${TEAM_COLORS[i]}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${TEAM_COLORS[i]} mb-5 flex items-center justify-center text-white font-bold text-lg`}>
                    {m.name[0]}
                  </div>
                  <p className="font-semibold text-base text-white">{m.name}</p>
                  <p className="text-gray-500 text-sm mt-1">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6">
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
                {[
                  { key: "name", label: t.form_name, ph: t.form_name_ph, type: "text" },
                  { key: "email", label: t.form_email, ph: t.form_email_ph, type: "email" },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">{f.label} <span className="text-red-400">*</span></label>
                    <input type={f.type} value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      placeholder={f.ph}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${errors[f.key] ? "border-red-500/40" : "border-white/8"} text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm`}
                    />
                    {errors[f.key] && <p className="text-red-400 text-xs mt-1">{errors[f.key]}</p>}
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">{t.form_subject} <span className="text-red-400">*</span></label>
                <input type="text" value={form.subject}
                  onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                  placeholder={t.form_subject_ph}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${errors.subject ? "border-red-500/40" : "border-white/8"} text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm`}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">{t.form_message} <span className="text-red-400">*</span></label>
                <textarea value={form.message} rows={5}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder={t.form_message_ph}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${errors.message ? "border-red-500/40" : "border-white/8"} text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none text-sm`}
                />
                <div className="flex justify-between mt-1">
                  {errors.message ? <p className="text-red-400 text-xs">{errors.message}</p> : <span />}
                  <p className="text-xs text-gray-600">{form.message.length} chars</p>
                </div>
              </div>
              <div className={`p-4 rounded-xl border ${errors.agreed ? "border-red-500/30 bg-red-500/5" : "border-white/8 bg-white/[0.02]"}`}>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  <span className="text-gray-300 font-medium">{t.privacy_title}</span><br />
                  {t.privacy_body}
                </p>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/30" />
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
          <div>
            <p className="text-white font-bold mb-0.5"><span className="text-indigo-400">Z</span>uply</p>
            <p className="text-xs">{t.footer_tagline}</p>
          </div>
          <p className="text-xs">{t.footer_copy}</p>
        </div>
      </footer>
    </main>
  );
}
