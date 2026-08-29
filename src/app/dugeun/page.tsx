"use client";

import { useState } from "react";

/**
 * 두근 앱 소개 겸 지원 페이지.
 * App Store Connect 의 "지원 URL" 로 쓰입니다 (제출 필수 항목).
 * 앱이 늘어나면 /<앱이름> 아래에 같은 형태로 하나씩 추가합니다.
 */

const CONTACT = "greenbi@gmail.com";

const T = {
  ko: {
    lang: "EN",
    tagline: "휴대폰을 열 때마다 둘만의 순간이 먼저 보이도록.",
    intro:
      "두근은 가까운 한 사람에게만 사진을 보내는 앱입니다. 보낸 사진은 상대의 홈 화면 위젯에 바로 뜹니다. 좋아요도, 팔로워도, 끝없는 피드도 없습니다.",
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["📷", "사진 위젯", "찍어서 보내면 상대 홈 화면에 바로 뜹니다."],
      ["💗", "D-Day", "함께한 날과 다가오는 기념일을 세어줍니다."],
      ["🥰", "오늘의 감정", "지금 기분과 상태를 한 번의 탭으로 알립니다."],
      ["💬", "오늘의 질문", "매일 하나씩, 서로를 알아가는 질문."],
      ["🖼", "타임라인", "주고받은 순간이 날짜별로 쌓입니다."],
      ["🔒", "둘만", "공개 지표 없이 둘 사이에서만 오갑니다."],
    ],
    supportTitle: "도움이 필요하신가요",
    faq: [
      [
        "상대와 어떻게 연결하나요?",
        "앱에서 6자리 초대 코드를 받아 상대에게 알려주세요. 상대가 그 코드를 입력하면 바로 연결됩니다.",
      ],
      [
        "위젯이 안 보여요.",
        "홈 화면 빈 곳을 길게 누르고 왼쪽 위 ＋ 를 눌러 ‘두근’을 검색해 추가해 주세요. 위젯을 올려두지 않으면 사진이 도착해도 홈 화면에 뜨지 않습니다.",
      ],
      [
        "사진이 안 와요.",
        "두 사람이 연결되어 있는지, 알림 권한이 켜져 있는지 확인해 주세요. 앱을 한 번 열면 그때 새 사진을 받아옵니다.",
      ],
      [
        "계정을 지우고 싶어요.",
        "앱의 「우리」 탭에서 계정 삭제를 누르면 계정과 주고받은 사진이 영구히 삭제됩니다.",
      ],
    ],
    contactTitle: "문의",
    contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어",
    tagline: "So the moments you share are the first thing you see.",
    intro:
      "Dugeun sends photos to one person close to you, and they appear right on their Home Screen widget. No likes, no followers, no endless feed.",
    featuresTitle: "What's inside",
    features: [
      ["📷", "Photo widget", "Take a photo and it lands on their Home Screen."],
      ["💗", "D-Day", "Counts your days together and what's coming up."],
      ["🥰", "Today's mood", "Share how you feel with a single tap."],
      ["💬", "Question of the day", "One question a day to keep learning each other."],
      ["🖼", "Timeline", "Every moment you share, kept by date."],
      ["🔒", "Just the two of you", "No public counts. Nothing leaves the pair."],
    ],
    supportTitle: "Need a hand?",
    faq: [
      [
        "How do we connect?",
        "Get your 6-character invite code in the app and share it. The moment they enter it, you're connected.",
      ],
      [
        "I can't find the widget.",
        "Touch and hold an empty spot on your Home Screen, tap ＋ at the top left, and search for “Dugeun”. Without the widget, photos won't show on your Home Screen.",
      ],
      [
        "Photos aren't arriving.",
        "Check that you're connected and that notifications are allowed. Opening the app also pulls in anything new.",
      ],
      [
        "I want to delete my account.",
        "In the Us tab, tap Delete account. Your account and every shared photo are permanently removed.",
      ],
    ],
    contactTitle: "Contact",
    contactBody: "If your question isn't here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function DugeunPage() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const t = T[lang];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <a href="/" className="text-sm text-white/50 transition-colors hover:text-white">
            ← Zuply
          </a>
          <button
            onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            {t.lang}
          </button>
        </div>

        <header className="mb-16">
          <div
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-[22px] text-4xl"
            style={{ background: "linear-gradient(135deg,#FF8FA3,#FF5C7A 55%,#E2477E)" }}
          >
            💗
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">두근</h1>
          <p className="mt-3 text-lg text-[#FF8FA3]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>

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
              <div key={q} className="border-l-2 border-[#FF5C7A]/40 pl-5">
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
            className="inline-block rounded-full bg-[#FF5C7A] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {CONTACT}
          </a>
        </section>

        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <a
            href="/dugeun/privacy"
            className="underline underline-offset-4 transition-colors hover:text-white"
          >
            {t.privacy}
          </a>
        </footer>
      </div>
    </main>
  );
}
