"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon, AppNav } from "@/components/AppNav";

/**
 * Kamusta 앱 사용 설명서 겸 지원 페이지 (한국어 / 영어).
 * App Store · Play 의 지원 URL 로 씁니다. 앱 기능이 바뀌면 여기도 같이 고칩니다.
 */

const CONTACT = "greenbi@gmail.com";

const T = {
  ko: {
    lang: "EN",
    tagline: "한글 발음으로 배우는 필리핀어. 인터넷 없이, 언제 어디서나.",
    intro:
      "Kamusta는 한국인은 필리핀어(타갈로그어)를, 필리핀인은 한국어를 배우는 양방향 학습 앱입니다. 문장·단어·기초 강의·사전이 모두 앱 안에 들어 있어 인터넷 없이 동작하고, 계정도 로그인도 없습니다.",
    stepsTitle: "이렇게 시작해요",
    steps: [
      ["학습 방향 고르기", "첫 실행 때 ‘필리핀어 배우기’ 또는 ‘한국어 배우기’를 고릅니다. 화면 언어와 학습 대상 언어가 함께 바뀌며, 설정 탭에서 언제든 바꿀 수 있습니다."],
      ["회화 탭에서 문장 듣기", "인사·식당·쇼핑·교통·병원·직장·연애 등 8개 상황, 144문장. 스피커 버튼을 누르면 읽어 주고, 길게 누르면 천천히 읽어 줍니다. 별표(★)로 즐겨찾기, 길게 눌러 복사할 수 있습니다."],
      ["단어 탭에서 외우기", "10개 주제 188단어. 카드를 뒤집어 뜻을 확인하고 ‘알아요 / 아직이요’로 표시하면, 모르는 단어부터 다시 나옵니다. 4지선다 퀴즈(10문제)로 확인하면 최고 점수가 남습니다."],
      ["기초 탭에서 발음·문법 익히기", "한국 학습자는 타갈로그 모음·자음, 발음 규칙, 존댓말(po/opo), 기초 문법을, 필리핀 학습자는 한글 자모와 받침, 기초 문법을 단계별로 배웁니다."],
      ["사전 탭에서 찾기", "한국어·타갈로그·영어·로마자·한글 발음 어느 쪽으로 검색해도 단어와 문장을 함께 찾아 줍니다."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["🔥", "오늘의 문장과 연속 학습일", "매일 문장 하나가 바뀌고, 이어서 학습한 날이 🔥로 쌓입니다."],
      ["⏰", "매일 학습 알림", "설정 탭에서 원하는 시각에 알림을 받을 수 있습니다."],
      ["🎚", "음성 속도", "설정에서 읽어 주는 속도를 조절하고 미리 들어볼 수 있습니다."],
      ["📴", "100% 오프라인", "비행기에서도, 데이터가 안 터지는 곳에서도 그대로 동작합니다."],
      ["🌓", "라이트 / 다크", "시스템 설정을 따르거나 직접 고를 수 있습니다."],
      ["🔒", "계정 없음", "학습 기록은 이 기기 안에만 저장되고 어디로도 전송되지 않습니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["필리핀어 발음이 스페인어처럼 들려요.", "iPhone에는 타갈로그 음성이 내장되어 있지 않아, 발음 체계가 가장 가까운 스페인어 음성으로 읽어 줍니다. 설정 탭 아래쪽에서 실제 어떤 음성이 쓰이는지 볼 수 있습니다. Android는 기기에 설치된 음성 엔진을 따르며, Google TTS에 필리핀어 음성을 추가하면 그 음성으로 읽습니다."],
      ["학습 방향을 바꾸고 싶어요.", "설정 탭 → 학습 방향에서 바꿀 수 있습니다. 화면 언어(한국어/영어)도 함께 바뀝니다."],
      ["학습 기록을 지우고 싶어요.", "설정 탭 → 학습 기록 초기화를 누르면 즐겨찾기, 아는 단어 표시, 퀴즈 점수, 연속 학습일이 모두 지워집니다. 앱을 삭제해도 함께 사라집니다."],
      ["알림이 오지 않아요.", "설정 탭에서 알림이 켜져 있는지, 기기 설정에서 Kamusta의 알림 권한이 허용되어 있는지 확인해 주세요."],
      ["문장이나 뜻이 틀린 것 같아요.", "메일로 문장을 알려주시면 다음 업데이트에서 고치겠습니다."],
    ],
    contactTitle: "문의",
    contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어",
    tagline: "Learn real Korean with romanized pronunciation and audio. Fully offline.",
    intro:
      "Kamusta is a two-way language app: Filipinos learn Korean, Koreans learn Filipino (Tagalog). Every phrase, word, lesson and the dictionary are bundled inside the app, so it works with no internet, no account and no sign-in.",
    stepsTitle: "Getting started",
    steps: [
      ["Pick your direction", "On first launch choose “Learn Korean” or “Learn Filipino”. The app language and the language you study switch together, and you can change it any time in Settings."],
      ["Listen in the Phrases tab", "144 phrases across 8 situations: greetings, dining, shopping, transport, hospital, workplace and relationships. Tap the speaker to hear a phrase, long-press to hear it slowly. Star (★) to save a favorite, long-press to copy."],
      ["Memorize in the Words tab", "188 words in 10 topics. Flip a card to check the meaning and mark it “Know it / Not yet” so unknown words come back first. A 10-question quiz keeps your best score."],
      ["Learn the basics", "Filipino learners get Hangul vowels and consonants, double consonants, batchim and basic grammar step by step. Korean learners get Tagalog vowels, consonants, pronunciation rules, polite speech (po/opo) and basic grammar."],
      ["Look things up in the Dictionary", "Search in Korean, Tagalog, English or romanized form. Words and phrases show up together."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["🔥", "Phrase of the day & streak", "A new phrase every day, and a 🔥 streak for the days you keep going."],
      ["⏰", "Daily reminder", "Set a reminder at whatever time suits you in Settings."],
      ["🎚", "Speech speed", "Adjust how fast phrases are read and preview it."],
      ["📴", "100% offline", "Works on the plane and anywhere the signal doesn't reach."],
      ["🌓", "Light / Dark", "Follow the system or pick one."],
      ["🔒", "No account", "Your progress stays on this device and is never uploaded."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Korean audio doesn't sound right.", "Korean is read by the device's built-in Korean voice. On iPhone you can download a higher-quality voice in Settings → Accessibility → Spoken Content → Voices → Korean. On Android it depends on the installed speech engine; Google Text-to-speech with a Korean voice works best."],
      ["How do I switch direction?", "Settings tab → Learning direction. The app language (Korean/English) switches with it."],
      ["How do I reset my progress?", "Settings tab → Reset learning data clears favorites, known words, quiz scores and the streak. Deleting the app removes it as well."],
      ["Reminders aren't showing.", "Check the reminder is on in the Settings tab, and that notifications for Kamusta are allowed in your phone's settings."],
      ["I found a wrong phrase or translation.", "Email us the phrase and we'll fix it in the next update."],
    ],
    contactTitle: "Contact",
    contactBody: "If your question isn't here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function KamustaPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-sm text-white/50 transition-colors hover:text-white">
            ← Zuply
          </Link>
          <button
            onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            {t.lang}
          </button>
        </div>

        <header className="mb-16">
          <AppIcon slug="kamusta" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Kamusta</h1>
          <p className="mt-3 text-lg text-[#FF9A6B]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>

        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF7A45]/20 text-sm font-semibold text-[#FF9A6B]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1 font-medium">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-white/60">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.featuresTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.features.map(([icon, title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 text-2xl">{icon}</div>
                <h3 className="mb-1 font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.supportTitle}</h2>
          <div className="space-y-5">
            {t.faq.map(([q, a]) => (
              <div key={q} className="border-l-2 border-[#FF7A45]/40 pl-5">
                <h3 className="mb-1.5 font-medium">{q}</h3>
                <p className="text-[15px] leading-relaxed text-white/60">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a
            href={`mailto:${CONTACT}`}
            className="inline-block rounded-full bg-[#FF7A45] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {CONTACT}
          </a>
        </section>

        <footer className="border-t border-white/10 pt-8 text-sm text-white/40 flex flex-wrap items-center justify-between gap-4">
          <Link href="/kamusta/privacy" className="underline underline-offset-4 transition-colors hover:text-white">
            {t.privacy}
          </Link>
          <AppNav current="kamusta" label={lang === "ko" ? "다른 앱" : "Other apps"} />
        </footer>
      </div>
    </main>
  );
}
