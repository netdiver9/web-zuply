"use client";

import { useState } from "react";

/**
 * Hueday 개인정보 처리방침.
 * App Store·Google Play 심사와 스토어 메타데이터에 쓰이는 페이지입니다.
 * 앱이 실제로 다루는 데이터만 적혀 있어야 하므로, 앱을 고칠 때 이 문서도 같이 봐야 합니다.
 */

const EFFECTIVE = "2026-08-31";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN",
    app: "Hueday",
    title: "개인정보 처리방침",
    updated: `시행일 ${EFFECTIVE}`,
    intro:
      "Hueday는 서버가 없습니다. 촬영한 사진, 남긴 문장, 앱 설정은 모두 이용자의 기기 안에만 저장되며 어디로도 전송되지 않습니다. 개발자는 이용자의 사진이나 기록을 볼 수 없습니다.",
    sections: [
      {
        h: "1. 받는 정보",
        body: [
          "**없습니다.** 이름, 이메일, 전화번호, 위치, 주소록, 기기 식별자를 포함해 어떠한 개인정보도 받지 않습니다.",
          "회원가입이나 로그인 절차가 없습니다.",
          "분석 도구, 광고 SDK, 크래시 리포팅 도구를 넣지 않았습니다.",
        ],
      },
      {
        h: "2. 기기에만 남는 정보",
        body: [
          "**촬영하거나 불러온 사진**, 그리고 적용된 무드와 강도",
          "**사진에 남긴 한 줄 기록**",
          "**앱 설정** — 날짜 스탬프 형식, 갤러리 저장 여부 등",
          "이 정보는 서버로 보내지 않으며, 앱을 삭제하면 함께 지워집니다.",
          "**백업되지 않습니다.** 기기를 잃어버리거나 앱을 지우면 다이어리 기록은 복구할 수 없습니다. 중요한 사진은 저장할 때 사진 앱(갤러리)에도 함께 저장해 두시기를 권합니다.",
        ],
      },
      {
        h: "3. 접근 권한",
        body: [
          "**카메라** — 사진을 촬영하기 위해 씁니다. 카메라 영상은 화면에 보여주고 사진을 만드는 데에만 쓰이며, 따로 저장하거나 전송하지 않습니다.",
          "**사진 · 갤러리** — 완성한 사진을 기기의 사진 앱에 저장하기 위해 씁니다. iOS에서는 **추가 전용 권한**만 요청하므로 앱이 기존 사진을 열람할 수 없습니다.",
          "갤러리에서 사진을 불러올 때는 운영체제가 제공하는 사진 선택 화면을 쓰며, 이용자가 고른 사진 한 장만 앱에 전달됩니다.",
          "두 권한 모두 거부해도 나머지 기능은 그대로 쓸 수 있습니다.",
        ],
      },
      {
        h: "4. 결제",
        body: [
          "Hueday Plus 구독과 이용권 결제는 **Apple App Store 또는 Google Play가 처리**합니다.",
          "개발자는 카드번호를 포함한 어떠한 결제 정보도 받지 않고 저장하지 않습니다.",
          "앱은 구독이 유효한지 여부만 스토어에 확인하며, 그 결과는 기기 안에서만 씁니다.",
          "결제와 관련한 개인정보 처리는 각 스토어의 방침을 따릅니다.",
        ],
      },
      {
        h: "5. 제3자 제공",
        body: [
          "받는 정보가 없으므로 제3자에게 넘기거나 처리를 맡기는 정보도 없습니다. 어떤 데이터도 팔지 않습니다.",
        ],
      },
      {
        h: "6. 보관과 삭제",
        body: [
          "개발자가 보관하는 정보가 없습니다.",
          "기기에 저장된 사진과 기록은 앱 안에서 하나씩 지우거나, **설정 → 모든 기록 삭제**로 한 번에 지울 수 있습니다.",
          "앱을 삭제해도 함께 지워집니다.",
        ],
      },
      {
        h: "7. 아동",
        body: [
          "Hueday는 만 14세 미만 아동을 대상으로 하지 않습니다.",
          "받는 정보가 없으므로 아동으로부터 개인정보를 받는 일도 없습니다.",
        ],
      },
      {
        h: "8. 이용자의 권리",
        body: [
          "받거나 보관하는 개인정보가 없어 열람·정정·삭제를 요청할 대상이 존재하지 않습니다.",
          "기기에 저장된 데이터는 이용자가 언제든 직접 지울 수 있습니다.",
          `문의는 ${CONTACT} 으로 보내주세요.`,
        ],
      },
      {
        h: "9. 변경",
        body: [
          "변경이 있으면 이 페이지에 새 시행일과 함께 올립니다. 받는 정보가 늘어나는 등 중요한 변경은 앱 안에서도 알립니다.",
        ],
      },
      {
        h: "10. 문의",
        body: [`${CONTACT}`],
      },
    ],
  },
  en: {
    lang: "한국어",
    app: "Hueday",
    title: "Privacy Policy",
    updated: `Effective ${EFFECTIVE}`,
    intro:
      "Hueday has no server. Photos you take, the notes you write, and your settings are stored only on your device and are never transmitted anywhere. The developer cannot see your photos or records.",
    sections: [
      {
        h: "1. What we collect",
        body: [
          "**Nothing.** We collect no personal information of any kind, including name, email, phone number, location, contacts, or device identifiers.",
          "There is no sign-up and no login.",
          "No analytics, advertising, or crash-reporting SDKs are included.",
        ],
      },
      {
        h: "2. What stays on your device",
        body: [
          "**Photos** you take or import, along with the mood and intensity applied",
          "**One-line notes** you write on a photo",
          "**App settings** such as date stamp format and whether to save to your gallery",
          "None of this is sent to a server, and all of it is removed when you delete the app.",
          "**It is not backed up.** If you lose your device or delete the app, your diary cannot be recovered. We recommend keeping the save-to-gallery option enabled.",
        ],
      },
      {
        h: "3. Permissions",
        body: [
          "**Camera** — to take photos. The camera feed is used only to show the preview and produce a photo; it is not stored or transmitted separately.",
          "**Photos / gallery** — to save finished photos to your device's photo library. On iOS the app requests **add-only access**, so it cannot read your existing photos.",
          "When importing, the app uses the system photo picker, and only the single photo you choose is handed to the app.",
          "You can deny either permission and continue using the rest of the app.",
        ],
      },
      {
        h: "4. Payments",
        body: [
          "Hueday Plus subscriptions and the lifetime purchase are **processed by the Apple App Store or Google Play**.",
          "The developer never receives or stores payment information, including card numbers.",
          "The app only checks with the store whether a subscription is active, and uses that result on the device.",
          "Payment-related data is handled under each store's own privacy policy.",
        ],
      },
      {
        h: "5. Third parties",
        body: [
          "Since nothing is collected, nothing is shared with or processed by third parties. No data is ever sold.",
        ],
      },
      {
        h: "6. Retention and deletion",
        body: [
          "The developer holds no data.",
          "Photos and records on your device can be deleted individually in the app, or all at once with **Settings → Delete all records**.",
          "Deleting the app removes them as well.",
        ],
      },
      {
        h: "7. Children",
        body: [
          "Hueday is not directed at children under 14.",
          "Because nothing is collected, no information is collected from children either.",
        ],
      },
      {
        h: "8. Your rights",
        body: [
          "As no personal information is collected or held, there is nothing to access, correct, or delete on our side.",
          "Data stored on your device can be deleted by you at any time.",
          `For questions, write to ${CONTACT}.`,
        ],
      },
      {
        h: "9. Changes",
        body: [
          "Any change is posted on this page with a new effective date. Significant changes, such as newly collected data, are also announced inside the app.",
        ],
      },
      {
        h: "10. Contact",
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

export default function HuedayPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const t = T[lang];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <a
              href="/"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              ← Zuply
            </a>
            <button
              onClick={() => setLang(lang === "ko" ? "en" : "ko")}
              className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              {t.lang}
            </button>
          </div>

          <div className="mb-3 flex items-center gap-3">
            <span
              aria-hidden
              className="h-7 w-7 rounded-full bg-gradient-to-br from-[#CDB2F5] to-[#F3A96F]"
            />
            <span className="text-lg font-semibold tracking-tight text-[#B7A6E0]">
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
              href="/hueday/terms"
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              {lang === "ko" ? "이용약관" : "Terms"}
            </a>{" "}
            ·{" "}
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
