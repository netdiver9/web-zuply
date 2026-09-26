"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Kamusta 개인정보 처리방침.
 * App Store Connect / Google Play Console 의 "개인정보처리방침 URL" 에 쓰이는 페이지입니다.
 * 앱이 실제로 다루는 데이터만 적혀 있어야 하므로, 앱을 고칠 때(특히 광고·네트워크 추가 시)
 * 이 문서도 같이 봐야 합니다.
 *
 * 현재 사실관계:
 *  - 회원가입·서버 없음. 학습 기록은 기기 안(UserDefaults / SharedPreferences)에만 저장.
 *  - iOS: Google AdMob 배너 광고 + ATT 팝업 (SDK 가 링크된 빌드에 한함).
 *  - Android: 광고 없음, INTERNET 권한 없음 → 어떤 데이터도 기기 밖으로 나가지 않음.
 */

const EFFECTIVE = "2026-09-26";
const CONTACT = "greenbi@gmail.com";

const T = {
  ko: {
    lang: "EN",
    app: "Kamusta",
    title: "개인정보 처리방침",
    updated: `시행일 ${EFFECTIVE}`,
    intro:
      "Kamusta는 한국어와 필리핀어(타갈로그어)를 인터넷 없이 배우는 앱입니다. 회원가입이 없고 서버도 없습니다. 학습 기록은 이용자의 기기 안에만 남으며, 그 밖의 개인정보는 받지 않습니다.",
    sections: [
      {
        h: "1. 받는 정보",
        body: [
          "이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.",
          "**학습 기록** — 즐겨찾기, 아는 단어 표시, 퀴즈 점수, 연속 학습일, 최근 검색어, 앱 설정. 이 정보는 기기 안에만 저장되며 어디로도 전송되지 않습니다.",
        ],
      },
      {
        h: "2. 광고 (iOS 버전)",
        body: [
          "iOS 버전은 일부 목록 화면 하단에 **Google AdMob** 배너 광고를 표시합니다. Google은 광고를 보여 주기 위해 기기 광고 식별자(IDFA), IP 주소, 기기 정보를 수집할 수 있습니다.",
          "맞춤 광고 허용 여부는 iOS의 **앱 추적 투명성(ATT)** 팝업에서 이용자가 직접 선택합니다. 거부해도 앱의 모든 기능을 그대로 쓸 수 있습니다.",
          "Google의 데이터 처리는 Google 개인정보처리방침(policies.google.com/privacy)을 따릅니다.",
          "**Android 버전에는 광고가 없으며 인터넷 권한 자체가 없습니다.** 어떤 데이터도 기기 밖으로 나가지 않습니다.",
        ],
      },
      {
        h: "3. 다른 회사와의 관계",
        body: [
          "위 광고 서비스(iOS 한정) 외에는 어떤 제3자에게도 정보를 넘기지 않습니다. 분석 도구나 마케팅 목적의 공유는 없습니다.",
        ],
      },
      {
        h: "4. 삭제",
        body: [
          "앱의 **설정 → 학습 기록 초기화** 를 누르면 모든 학습 기록이 지워집니다. 앱을 삭제해도 함께 삭제됩니다.",
          "서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다.",
        ],
      },
      {
        h: "5. 기기 권한",
        body: [
          "**알림** — 매일 학습 알림을 켤 때만 요청합니다. 알림은 기기 안에서 예약되며 외부 서버를 거치지 않습니다.",
          "**음성 합성(TTS)** — 기기에 내장된 음성 엔진으로 문장을 읽어 줍니다. 읽어 준 내용은 저장되거나 전송되지 않습니다.",
        ],
      },
      {
        h: "6. 아동",
        body: [
          "Kamusta는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다.",
        ],
      },
      {
        h: "7. 변경",
        body: [
          "이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다.",
        ],
      },
      {
        h: "8. 문의",
        body: [`${CONTACT}`],
      },
    ],
  },
  en: {
    lang: "한국어",
    app: "Kamusta",
    title: "Privacy Policy",
    updated: `Effective ${EFFECTIVE}`,
    intro:
      "Kamusta is an offline app for learning Korean and Filipino (Tagalog). There is no sign-up and no server. Your learning data stays on your device, and we collect no other personal information.",
    sections: [
      {
        h: "1. What we collect",
        body: [
          "We **do not** collect your name, email, phone number, contacts, or location. There are no accounts, so we cannot identify you.",
          "**Learning data** — favorites, words you marked as known, quiz scores, study streak, recent searches, and app settings. All of it is stored only on your device and is never uploaded.",
        ],
      },
      {
        h: "2. Advertising (iOS version)",
        body: [
          "The iOS version shows **Google AdMob** banner ads at the bottom of some list screens. To serve ads, Google may collect the device advertising identifier (IDFA), IP address, and device information.",
          "You decide whether to allow personalized ads through iOS **App Tracking Transparency (ATT)**. Declining does not limit any feature of the app.",
          "Google's handling of data is described in the Google Privacy Policy (policies.google.com/privacy).",
          "**The Android version has no ads and no internet permission at all.** No data ever leaves your device.",
        ],
      },
      {
        h: "3. Third parties",
        body: [
          "Apart from the advertising service above (iOS only), no one receives your data. There is no sharing for analytics or marketing.",
        ],
      },
      {
        h: "4. Deletion",
        body: [
          "In the app, **Settings → Reset learning data** erases all learning data. Deleting the app removes it as well.",
          "Because nothing is stored on a server, no separate deletion request is needed.",
        ],
      },
      {
        h: "5. Device permissions",
        body: [
          "**Notifications** — requested only when you turn on the daily study reminder. Reminders are scheduled on the device and never go through an external server.",
          "**Text-to-speech** — phrases are read aloud by your device's built-in speech engine. Nothing is recorded or sent.",
        ],
      },
      {
        h: "6. Children",
        body: [
          "Kamusta is not directed at children under 14, and we do not knowingly collect their information.",
        ],
      },
      {
        h: "7. Changes",
        body: [
          "Any change is posted on this page with a new effective date.",
        ],
      },
      {
        h: "8. Contact",
        body: [`${CONTACT}`],
      },
    ],
  },
} as const;

/** **굵게** 표기만 간단히 해석합니다. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function KamustaPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const t = T[lang];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              ← Zuply
            </Link>
            <button
              onClick={() => setLang(lang === "ko" ? "en" : "ko")}
              className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              {t.lang}
            </button>
          </div>

          <div className="mb-3 flex items-center gap-3">
            <span className="text-3xl">🇵🇭</span>
            <span className="text-lg font-semibold tracking-tight text-[#FF8A5B]">
              {t.app}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-3 text-sm text-white/40">{t.updated}</p>

          <p className="mt-8 text-[15px] leading-relaxed text-white/70">
            {t.intro}
          </p>
        </header>

        <div className="space-y-12">
          {t.sections.map((section) => (
            <section key={section.h}>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">
                {section.h}
              </h2>
              <ul className="space-y-3">
                {section.body.map((line, i) => (
                  <li
                    key={i}
                    className="text-[15px] leading-relaxed text-white/65"
                  >
                    <RichText text={line} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-white/40">
          <p>
            {t.app} · Zuply ·{" "}
            <a
              href={`mailto:${CONTACT}`}
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              {CONTACT}
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
