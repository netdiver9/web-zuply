"use client";

import { useState } from "react";

/**
 * 앱 다운로드 센터.
 * App Store / Play Store 에 올리기 전 단계의 빌드를 직접 내려받게 하는 페이지입니다.
 * 빌드를 새로 올릴 때는 아래 BUILDS 배열에 한 줄 추가하고,
 * APK 파일을 /public/apps/ 에 같은 이름으로 넣으면 됩니다.
 */

type Build = {
  id: string;
  emoji: string;
  platform: "Android" | "iOS";
  version: string;
  size: string;
  /** shasum -a 256 <file> 결과 */
  sha256: string;
  file: string;
  accent: string;
  name: { ko: string; en: string };
  tagline: { ko: string; en: string };
  notes: { ko: string[]; en: string[] };
};

const BUILDS: Build[] = [
  {
    id: "kamusta-android",
    emoji: "🇰🇷",
    platform: "Android",
    version: "v1.0",
    size: "7.6MB",
    sha256: "1be5396495c1abeedeae8c936692e987a18a9e466abea5b9ec33f144c1ce4a67",
    file: "/apps/Kamusta-android-v1.0.apk",
    accent: "#FF5C47",
    name: { ko: "Kamusta", en: "Kamusta" },
    tagline: {
      ko: "한국인은 타갈로그를, 필리핀인은 한국어를. 인터넷 없이 동작합니다.",
      en: "Tagalog for Koreans, Korean for Filipinos — works fully offline.",
    },
    notes: {
      ko: [
        "회화 144문장 · 단어 188개 · 기초 9단원 내장",
        "듣기(TTS), 길게 누르면 느리게 재생",
        "단어 카드 뒤집기 · 4지선다 퀴즈 · 즐겨찾기 · 학습 연속일",
        "다크 모드, 매일 학습 알림",
      ],
      en: [
        "144 phrases, 188 words and 9 basics lessons built in",
        "Listen (TTS); long-press to hear it slowly",
        "Flashcards, 4-choice quiz, favorites and study streak",
        "Dark mode and a daily study reminder",
      ],
    },
  },
];

const T = {
  ko: {
    lang: "EN",
    back: "← Zuply",
    badge: "베타 빌드",
    h1: "앱 다운로드",
    sub: "스토어에 올리기 전 빌드를 여기서 먼저 받아 보실 수 있습니다.",
    download: "APK 다운로드",
    whatsInside: "들어있는 것",
    checksum: "체크섬 (SHA-256)",
    checksumHelp: "받은 파일이 올바른지 확인하려면 터미널에서 아래를 실행해 값을 비교하세요.",
    installTitle: "설치 방법",
    install: [
      "휴대폰에서 위 버튼으로 APK를 내려받습니다.",
      "파일을 열면 “알 수 없는 앱 설치”를 허용할지 물어봅니다. 허용해 주세요.",
      "설치를 누르면 끝입니다.",
    ],
    warnTitle: "미리 알아두실 점",
    warn: "스토어를 거치지 않은 테스트 빌드입니다. 정식 서명 키가 아니라서 나중에 스토어 버전을 설치하려면 이 버전을 먼저 지워야 할 수 있습니다.",
    copy: "복사",
    copied: "복사했어요",
    empty: "지금 받을 수 있는 빌드가 없습니다.",
  },
  en: {
    lang: "한국어",
    back: "← Zuply",
    badge: "Beta build",
    h1: "App downloads",
    sub: "Grab a build here before it reaches the app stores.",
    download: "Download APK",
    whatsInside: "What's inside",
    checksum: "Checksum (SHA-256)",
    checksumHelp: "To verify the file you downloaded, run this in a terminal and compare the value.",
    installTitle: "How to install",
    install: [
      "Download the APK on your phone using the button above.",
      "Open the file. Android will ask whether to allow installs from this source — allow it.",
      "Tap Install. That's it.",
    ],
    warnTitle: "Before you install",
    warn: "This is a test build that did not come through a store. It is not signed with the production key, so you may need to uninstall it before installing a future store release.",
    copy: "Copy",
    copied: "Copied",
    empty: "No builds are available right now.",
  },
} as const;

type Lang = keyof typeof T;

export default function DownloadPage() {
  const [lang, setLang] = useState<Lang>("ko");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const t = T[lang];

  async function copySha(build: Build) {
    try {
      await navigator.clipboard.writeText(build.sha256);
      setCopiedId(build.id);
      window.setTimeout(() => setCopiedId(null), 1600);
    } catch {
      // 클립보드를 막아둔 브라우저에서는 조용히 넘어간다 — 값은 화면에 그대로 보인다.
    }
  }

  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <a href="/" className="text-sm text-white/50 transition-colors hover:text-white">
            {t.back}
          </a>
          <button
            onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            {t.lang}
          </button>
        </div>

        <header className="mb-14">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.h1}</h1>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">{t.sub}</p>
        </header>

        {BUILDS.length === 0 ? (
          <p className="text-white/50">{t.empty}</p>
        ) : (
          <div className="space-y-8">
            {BUILDS.map((build) => (
              <article
                key={build.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start gap-4">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] text-3xl"
                      style={{
                        background: `linear-gradient(135deg, ${build.accent}, #FFA826)`,
                      }}
                    >
                      {build.emoji}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h2 className="text-2xl font-bold tracking-tight">
                          {build.name[lang]}
                        </h2>
                        <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-white/60">
                          {build.platform} · {build.version} · {build.size}
                        </span>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                          style={{
                            background: `${build.accent}22`,
                            color: build.accent,
                          }}
                        >
                          {t.badge}
                        </span>
                      </div>
                      <p className="text-[15px] leading-relaxed text-white/60">
                        {build.tagline[lang]}
                      </p>
                    </div>
                  </div>

                  <a
                    href={build.file}
                    download
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: build.accent }}
                  >
                    ↓ {t.download}
                  </a>

                  <section className="mt-8">
                    <h3 className="mb-3 text-sm font-semibold tracking-tight text-white/80">
                      {t.whatsInside}
                    </h3>
                    <ul className="space-y-2">
                      {build.notes[lang].map((note) => (
                        <li
                          key={note}
                          className="flex gap-2.5 text-[14px] leading-relaxed text-white/55"
                        >
                          <span style={{ color: build.accent }}>·</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="mt-8">
                    <h3 className="mb-2 text-sm font-semibold tracking-tight text-white/80">
                      {t.installTitle}
                    </h3>
                    <ol className="space-y-2">
                      {t.install.map((step, i) => (
                        <li
                          key={step}
                          className="flex gap-3 text-[14px] leading-relaxed text-white/55"
                        >
                          <span className="shrink-0 text-white/30">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="mt-8">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold tracking-tight text-white/80">
                        {t.checksum}
                      </h3>
                      <button
                        onClick={() => copySha(build)}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60 transition-colors hover:border-white/40 hover:text-white"
                      >
                        {copiedId === build.id ? t.copied : t.copy}
                      </button>
                    </div>
                    <p className="mb-2 text-[13px] leading-relaxed text-white/40">
                      {t.checksumHelp}
                    </p>
                    <code className="block overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-[12px] text-white/70">
                      shasum -a 256 {build.file.split("/").pop()}
                    </code>
                    <code className="mt-2 block overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-[12px] break-all text-white/50">
                      {build.sha256}
                    </code>
                  </section>
                </div>

                <div className="border-t border-white/10 bg-white/[0.02] px-6 py-5 sm:px-8">
                  <h3 className="mb-1.5 text-sm font-semibold tracking-tight text-white/80">
                    {t.warnTitle}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-white/45">{t.warn}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
