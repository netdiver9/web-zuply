"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 쌤노트 서비스 소개 페이지.
 * 쌤노트는 스토어 앱이 아니라 운영 중인 웹 서비스(https://www.ssamnote.co.kr)라서
 * AppOverview(설명서·개인정보 링크 포함) 대신 전용 레이아웃을 씁니다.
 * 내용의 근거: ~/Project/app/ssamnote/docs/SSAMNOTE_PRODUCT_PLAN.md, BRAND.md
 */

type Lang = "ko" | "en";

const GREEN = "#17735F"; // 쌤그린
const HIGHLIGHT = "#FFD34D"; // 형광펜 — 화면당 한 곳만
const SITE = "https://www.ssamnote.co.kr";
const MAIL = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN",
    back: "← 홈",
    live: "운영 중 · 웹 서비스",
    name: "쌤노트 · Ssamnote",
    pitch: "선생님의 정성이 담긴 노트",
    intro:
      "쌤노트는 공부방·과외 선생님을 위한 수업 기록 서비스입니다. 수업이 끝나면 선생님이 수업노트를 남기고, 학부모는 그 내용을 바로 확인합니다. 출결·수업료·상담 일정까지 한 곳에서 관리해, 손글씨 노트와 카톡으로 흩어지던 기록을 정리합니다.",
    open: "ssamnote.co.kr 열기",
    who_h: "이런 분을 위해",
    who: [
      { icon: "🧑‍🏫", title: "공부방·과외 선생님", desc: "학생을 등록하고 수업노트·출결·수업료·일정을 관리합니다. 가입은 무료이고 승인 없이 바로 씁니다." },
      { icon: "👨‍👩‍👧", title: "학부모", desc: "선생님이 보낸 초대 링크나 코드로 가입해 자녀의 수업노트·알림장·출결을 보고 상담을 신청합니다." },
      { icon: "🎒", title: "학생", desc: "학부모나 선생님이 등록합니다. 고학년 학생은 본인 노트를 직접 볼 수 있습니다." },
    ],
    features_h: "핵심 기능",
    features: [
      { icon: "📝", title: "수업노트 · 알림장", desc: "수업 후 리치 에디터로 내용을 적고 사진을 첨부합니다. 학부모와 학생이 바로 열람합니다." },
      { icon: "✅", title: "출결 관리", desc: "출석·지각·조퇴·결석을 수업마다 기록하고, 학부모 화면에서 함께 확인합니다." },
      { icon: "💳", title: "수업료 기록", desc: "월별 수업료를 기록하고 납부 여부를 체크합니다. 청구 내역이 한눈에 정리됩니다." },
      { icon: "📅", title: "상담 · 일정 예약", desc: "학부모가 상담이나 보강 일정을 신청하면 선생님이 확정합니다." },
      { icon: "🔗", title: "학부모 초대", desc: "학생을 등록하면 초대 링크와 코드가 만들어집니다. 학부모는 그것으로 가입해 자녀와 연결됩니다." },
    ],
    pricing_h: "요금",
    pricing_free_t: "무료",
    pricing_free_d: "선생님 가입 무료. 학생 5명까지 모든 기능을 그대로 씁니다.",
    pricing_paid_t: "학생 5명 추가마다 월 1,000원",
    pricing_paid_d: "6번째 학생부터는 5명 단위로 슬롯을 늘립니다.",
    pricing_note: "지금은 메일로 신청하시면 입금 확인 후 슬롯을 열어드립니다. 카드 정기결제는 준비 중입니다.",
    built_h: "만든 방법",
    built_d: "kls 프레임워크를 바탕으로 만들었습니다. 학생·노트·출결 데이터는 선생님 단위로 분리되어 자기 학생 것만 보입니다.",
    built: ["Spring Boot 3.4 · Java 21", "PostgreSQL", "Next.js", "AWS ap-northeast-2", "개인정보 암호화", "JWT 인증"],
    contact_h: "문의",
    contact_d: "가입, 유료 슬롯 신청, 비밀번호 문의는 메일로 보내주세요.",
    footer_home: "Zuply 홈",
  },
  en: {
    lang: "한국어",
    back: "← Home",
    live: "Live · Web service",
    name: "쌤노트 · Ssamnote",
    pitch: "Notes with a teacher's care in them",
    intro:
      "Ssamnote is a lesson-record service for private tutors and small study rooms. After each class the teacher writes a class note, and parents see it right away. Attendance, tuition and consultation bookings live in the same place, so records no longer scatter across paper notebooks and chat threads.",
    open: "Open ssamnote.co.kr",
    who_h: "Who it is for",
    who: [
      { icon: "🧑‍🏫", title: "Private tutors", desc: "Register students and manage class notes, attendance, tuition and schedules. Sign-up is free and works immediately, no approval step." },
      { icon: "👨‍👩‍👧", title: "Parents", desc: "Join with the invite link or code the teacher sends, then read your child's class notes, notices and attendance, and book a consultation." },
      { icon: "🎒", title: "Students", desc: "Registered by a parent or the teacher. Older students can read their own notes." },
    ],
    features_h: "Core features",
    features: [
      { icon: "📝", title: "Class notes and notices", desc: "Write up each lesson in a rich editor and attach photos. Parents and students read it as soon as it is posted." },
      { icon: "✅", title: "Attendance", desc: "Mark present, late, left early or absent for every lesson; parents see the same record." },
      { icon: "💳", title: "Tuition records", desc: "Record monthly tuition and tick off payments, so what is billed and what is paid stays clear." },
      { icon: "📅", title: "Consultations and scheduling", desc: "Parents request a consultation or a make-up lesson; the teacher confirms it." },
      { icon: "🔗", title: "Parent invites", desc: "Registering a student creates an invite link and code. The parent signs up with it and is linked to the child." },
    ],
    pricing_h: "Pricing",
    pricing_free_t: "Free",
    pricing_free_d: "Free teacher account. Every feature, for up to 5 students.",
    pricing_paid_t: "₩1,000 / month per 5 extra students",
    pricing_paid_d: "From the 6th student on, add slots in blocks of five.",
    pricing_note: "For now, request slots by email; they are opened once the bank transfer is confirmed. Card subscriptions are in preparation.",
    built_h: "How it is built",
    built_d: "Built on the kls framework. Student, note and attendance data is scoped per teacher, so each teacher sees only their own students.",
    built: ["Spring Boot 3.4 · Java 21", "PostgreSQL", "Next.js", "AWS ap-northeast-2", "PII encryption", "JWT auth"],
    contact_h: "Contact",
    contact_d: "For sign-up, paid slots or password help, send an email.",
    footer_home: "Zuply home",
  },
} as const;

export default function SsamnotePage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/#services" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button
            onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            {t.lang}
          </button>
        </div>

        {/* HERO */}
        <header className="mb-14">
          <div
            aria-hidden
            className="mb-6 grid h-[88px] w-[88px] place-items-center rounded-[22%] text-4xl shadow-lg shadow-black/40"
            style={{ backgroundColor: GREEN }}
          >
            📒
          </div>
          <span
            className="mb-4 inline-block rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
            style={{ borderColor: `${GREEN}80`, backgroundColor: `${GREEN}26`, color: "#8FE3CB" }}
          >
            {t.live}
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.name}</h1>
          {/* 형광펜 — 이 페이지에서 노랑을 쓰는 유일한 자리 */}
          <p className="mt-4 text-lg text-white/90">
            <span
              className="rounded-sm px-1"
              style={{ backgroundImage: `linear-gradient(transparent 58%, ${HIGHLIGHT}66 58%)` }}
            >
              {t.pitch}
            </span>
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href={SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-[#FBFAF6] transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              {t.open} ↗
            </a>
            <a
              href={`mailto:${MAIL}`}
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              {t.contact_h} →
            </a>
          </div>
        </header>

        {/* WHO */}
        <section className="mb-14">
          <h2 className="mb-5 text-lg font-semibold tracking-tight">{t.who_h}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.who.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 text-2xl">{w.icon}</div>
                <h3 className="mb-1 font-semibold">{w.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="mb-14">
          <h2 className="mb-5 text-lg font-semibold tracking-tight">{t.features_h}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 text-2xl">{f.icon}</div>
                <h3 className="mb-1 font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="mb-14">
          <h2 className="mb-5 text-lg font-semibold tracking-tight">{t.pricing_h}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border p-6" style={{ borderColor: `${GREEN}80`, backgroundColor: `${GREEN}1A` }}>
              <div className="text-2xl font-bold tracking-tight">{t.pricing_free_t}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{t.pricing_free_d}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-2xl font-bold tracking-tight">{t.pricing_paid_t}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{t.pricing_paid_d}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/45">{t.pricing_note}</p>
        </section>

        {/* BUILT */}
        <section className="mb-14">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.built_h}</h2>
          <p className="mb-4 text-sm leading-relaxed text-white/55">{t.built_d}</p>
          <div className="flex flex-wrap gap-2">
            {t.built.map((b) => (
              <span key={b} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70">{b}</span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mb-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">{t.contact_h}</h2>
          <p className="mb-4 text-sm leading-relaxed text-white/55">{t.contact_d}</p>
          <a href={`mailto:${MAIL}`} className="text-sm underline underline-offset-4 transition-colors hover:text-white" style={{ color: "#8FE3CB" }}>
            {MAIL}
          </a>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/" className="underline underline-offset-4 transition-colors hover:text-white">{t.footer_home}</Link>
          <a href={SITE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors hover:text-white">ssamnote.co.kr ↗</a>
        </footer>
      </div>
    </main>
  );
}
