"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon, AppNav } from "@/components/AppNav";

/**
 * 앱 소개 페이지 공용 레이아웃: 소개 · 핵심 기능 · 스토어 · History(버전 기록) · 설명서/개인정보 링크.
 * 각 앱은 /src/app/<slug>/page.tsx 에서 데이터만 넘깁니다. 버전을 낼 때 history 에 한 줄 추가하세요.
 */

export type Lang = "ko" | "en";
export type Bilingual = { ko: string; en: string };

export type HistoryEntry = {
  /** "1.0" 처럼 숫자로 시작하면 v 를 붙여 보여주고, "Concept" 같은 말은 그대로 보여줍니다. */
  version: string;
  /** YYYY-MM-DD. 아직 심사 중이면 status 로 표시 */
  date: string;
  status?: "in-review" | "released" | "planned";
  notes: { ko: string[]; en: string[] };
};

export type AppOverviewData = {
  slug: string;
  name: string;
  tagline: Bilingual;
  intro: Bilingual;
  features: { icon: string; title: Bilingual; desc: Bilingual }[];
  appStore?: string;
  playStore?: string;
  history: HistoryEntry[];
  hasTerms?: boolean;
  accent: string;
};

const L = {
  ko: { lang: "EN", back: "← 앱 목록", features: "핵심 기능", store: "다운로드", soon: "출시 준비 중", inReview: "심사 중", planned: "예정", history: "History", guide: "사용 설명서", privacy: "개인정보 처리방침", terms: "이용약관", other: "다른 앱" },
  en: { lang: "한국어", back: "← Apps", features: "Highlights", store: "Download", soon: "Coming soon", inReview: "In review", planned: "Planned", history: "History", guide: "User guide", privacy: "Privacy Policy", terms: "Terms of Use", other: "Other apps" },
} as const;

export function AppOverview({ app }: { app: AppOverviewData }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = L[lang];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/#apps" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button
            onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            {t.lang}
          </button>
        </div>

        <header className="mb-14">
          <AppIcon slug={app.slug} size={88} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{app.name}</h1>
          <p className="mt-3 text-lg" style={{ color: app.accent }}>{app.tagline[lang]}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{app.intro[lang]}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {app.appStore ? (
              <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90">App Store ↗</a>
            ) : (
              <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">App Store · {t.soon}</span>
            )}
            {app.playStore ? (
              <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90">Google Play ↗</a>
            ) : (
              <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">Google Play · {t.soon}</span>
            )}
            <Link href={`/${app.slug}/guide`} className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white">{t.guide} →</Link>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="mb-5 text-lg font-semibold tracking-tight">{t.features}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {app.features.map((f) => (
              <div key={f.title.en} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 text-2xl">{f.icon}</div>
                <h3 className="mb-1 font-semibold">{f.title[lang]}</h3>
                <p className="text-sm leading-relaxed text-white/55">{f.desc[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-5 text-lg font-semibold tracking-tight">{t.history}</h2>
          <ol className="space-y-6">
            {app.history.map((h) => (
              <li key={h.version} className="border-l-2 pl-5" style={{ borderColor: `${app.accent}66` }}>
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <span className="font-semibold">{/^\d/.test(h.version) ? `v${h.version}` : h.version}</span>
                  <span className="text-xs text-white/40">{h.date}</span>
                  {h.status && h.status !== "released" && (
                    <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-300">
                      {h.status === "in-review" ? t.inReview : t.planned}
                    </span>
                  )}
                </div>
                <ul className="list-disc space-y-1 pl-4 text-[15px] leading-relaxed text-white/60">
                  {h.notes[lang].map((n) => <li key={n}>{n}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40">
          <div className="flex flex-wrap gap-5">
            <Link href={`/${app.slug}/guide`} className="underline underline-offset-4 transition-colors hover:text-white">{t.guide}</Link>
            <Link href={`/${app.slug}/privacy`} className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
            {app.hasTerms && <Link href={`/${app.slug}/terms`} className="underline underline-offset-4 transition-colors hover:text-white">{t.terms}</Link>}
          </div>
          <AppNav current={app.slug} label={t.other} />
        </footer>
      </div>
    </main>
  );
}
