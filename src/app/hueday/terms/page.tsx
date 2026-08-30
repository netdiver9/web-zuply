"use client";

import { useState } from "react";

/**
 * Hueday 이용약관.
 * 구독 조건(자동 갱신·해지·환불)이 스토어 심사에서 확인되는 부분이라,
 * 앱 안 결제 화면의 문구와 어긋나지 않아야 합니다.
 */

const EFFECTIVE = "2026-08-31";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN",
    app: "Hueday",
    title: "이용약관",
    updated: `시행일 ${EFFECTIVE}`,
    intro:
      "Hueday를 설치하고 사용하면 이 약관에 동의한 것으로 봅니다. 동의하지 않으시면 앱을 사용하지 말고 삭제해 주세요.",
    sections: [
      {
        h: "1. 서비스",
        body: [
          "Hueday는 무드를 먼저 고르고 그 색감으로 사진을 찍는 카메라 앱입니다. 촬영한 사진은 기기 안의 무드 다이어리에 날짜별로 기록됩니다.",
          "모든 처리는 기기 안에서 이루어지며, 서비스 제공을 위한 서버는 없습니다.",
        ],
      },
      {
        h: "2. 무료 기능과 Hueday Plus",
        body: [
          "Hueday는 무료로 쓸 수 있습니다. 무료 이용자는 무드 3종(Cozy · Fresh · Retro)을 쓰고, 저장한 사진에 HUEDAY 표시가 남습니다.",
          "**Hueday Plus**를 구매하면 무드 6종 전체(Dreamy · Midnight · Melancholy 추가)를 쓰고, 워터마크 없이 저장하며, 이후 추가되는 무드도 쓸 수 있습니다.",
        ],
      },
      {
        h: "3. 구독 조건",
        body: [
          "Hueday Plus는 **월간 구독, 연간 구독, 평생 이용권** 중에서 고를 수 있습니다. 가격은 앱 안 결제 화면에 표시되며 국가와 스토어 정책에 따라 다를 수 있습니다.",
          "**자동 갱신** — 구독은 기간이 끝나기 전에 해지하지 않으면 자동으로 갱신되고 같은 금액이 결제됩니다. 갱신 시점은 스토어 정책을 따릅니다(App Store는 기간 만료 24시간 전).",
          "**해지** — 기기의 스토어 설정에서 언제든 해지할 수 있습니다. iPhone은 설정 → Apple 계정 → 구독, Android는 Play 스토어 → 프로필 → 결제 및 정기 결제에서 할 수 있습니다.",
          "**해지 후** — 이미 결제한 기간이 끝날 때까지 계속 쓸 수 있고, 그 뒤 무료 기능으로 돌아갑니다.",
          "**평생 이용권** — 한 번만 결제하며 자동 갱신되지 않습니다.",
          "**환불** — 결제는 Apple 또는 Google이 처리하므로 환불도 해당 스토어의 정책과 절차를 따릅니다. 개발자가 직접 결제를 취소하거나 환불할 수 없습니다.",
        ],
      },
      {
        h: "4. 사진과 기록의 소유권",
        body: [
          "이용자가 촬영하거나 불러온 사진, 그리고 남긴 문장은 **전적으로 이용자의 것**입니다.",
          "개발자는 이에 대한 어떠한 권리도 주장하지 않으며, 서버가 없으므로 접근할 수도 없습니다.",
        ],
      },
      {
        h: "5. 데이터 보관에 관한 안내",
        body: [
          "Hueday는 사진과 기록을 **기기 안에만** 저장합니다. 클라우드 백업이나 계정 동기화 기능이 없습니다.",
          "따라서 앱을 삭제하거나, 기기를 잃어버리거나 초기화하거나, 새 기기로 옮기면 다이어리 기록은 복구할 수 없습니다.",
          "중요한 사진은 저장할 때 **사진 앱(갤러리)에도 함께 저장**해 두시기를 권합니다. 앱 설정에서 기본으로 켜져 있습니다.",
        ],
      },
      {
        h: "6. 금지되는 행위",
        body: [
          "앱을 역설계하거나 변형해 배포하는 행위",
          "결제 절차를 우회해 유료 기능을 쓰는 행위",
          "타인의 권리를 침해하거나 법령을 위반하는 목적으로 앱을 쓰는 행위",
        ],
      },
      {
        h: "7. 면책",
        body: [
          "Hueday는 있는 그대로 제공됩니다. 개발자는 앱이 오류 없이 동작하거나 특정 목적에 적합하다는 것을 보증하지 않습니다.",
          "다만 개발자의 고의 또는 중대한 과실로 생긴 손해에 대한 책임은 배제되지 않습니다.",
          "그 밖의 경우 개발자의 배상 책임은 해당 이용자가 최근 12개월간 지불한 금액을 넘지 않습니다.",
        ],
      },
      {
        h: "8. 약관의 변경",
        body: [
          "약관이 변경되면 이 페이지에 새 시행일과 함께 올립니다.",
          "이용자에게 불리한 변경은 시행일 30일 전에 앱 안에서도 알립니다.",
          "변경 후에도 앱을 계속 쓰면 변경된 약관에 동의한 것으로 봅니다.",
        ],
      },
      {
        h: "9. 준거법",
        body: [
          "이 약관은 대한민국 법에 따릅니다. 분쟁이 생기면 민사소송법에 따른 관할 법원에 제기합니다.",
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
    title: "Terms of Use",
    updated: `Effective ${EFFECTIVE}`,
    intro:
      "By installing and using Hueday you agree to these terms. If you do not agree, please do not use the app and delete it.",
    sections: [
      {
        h: "1. The service",
        body: [
          "Hueday is a camera app where you choose a mood first and shoot with that color. Photos are recorded by date in a mood diary on your device.",
          "Everything runs on your device; there is no server behind the service.",
        ],
      },
      {
        h: "2. Free features and Hueday Plus",
        body: [
          "Hueday is free to use. Free users get three moods (Cozy, Fresh, Retro), and saved photos carry a HUEDAY mark.",
          "**Hueday Plus** unlocks all six moods (adding Dreamy, Midnight, Melancholy), removes the watermark, and includes moods added later.",
        ],
      },
      {
        h: "3. Subscription terms",
        body: [
          "Plus is available as a **monthly subscription, a yearly subscription, or a one-time lifetime purchase**. Prices are shown on the purchase screen and vary by country and store.",
          "**Auto-renewal** — Subscriptions renew automatically for the same amount unless cancelled before the period ends. Renewal timing follows store policy (24 hours before expiry on the App Store).",
          "**Cancelling** — You can cancel any time in your store settings. iPhone: Settings → Apple Account → Subscriptions. Android: Play Store → Profile → Payments and subscriptions.",
          "**After cancelling** — You keep access until the paid period ends, then return to the free features.",
          "**Lifetime purchase** — Charged once and does not renew.",
          "**Refunds** — Payments are processed by Apple or Google, so refunds follow their policies and procedures. The developer cannot cancel a charge or issue a refund directly.",
        ],
      },
      {
        h: "4. Ownership of your photos",
        body: [
          "Photos you take or import and the notes you write are **entirely yours**.",
          "The developer claims no rights to them and, having no server, cannot access them.",
        ],
      },
      {
        h: "5. About data storage",
        body: [
          "Hueday stores photos and records **only on your device**. There is no cloud backup or account sync.",
          "If you delete the app, lose or reset your device, or move to a new phone, your diary cannot be recovered.",
          "We recommend keeping **save to gallery** enabled for photos that matter. It is on by default.",
        ],
      },
      {
        h: "6. Prohibited use",
        body: [
          "Reverse engineering the app or redistributing a modified version",
          "Bypassing payment to use paid features",
          "Using the app to infringe others' rights or to break the law",
        ],
      },
      {
        h: "7. Disclaimer",
        body: [
          "Hueday is provided as is. The developer does not warrant that it will run without errors or be fit for a particular purpose.",
          "Nothing here excludes liability for the developer's wilful misconduct or gross negligence.",
          "Otherwise, liability is limited to the amount you paid in the preceding twelve months.",
        ],
      },
      {
        h: "8. Changes",
        body: [
          "Any change is posted on this page with a new effective date.",
          "Changes unfavourable to users are announced inside the app 30 days before they take effect.",
          "Continuing to use the app after a change means you accept the revised terms.",
        ],
      },
      {
        h: "9. Governing law",
        body: [
          "These terms are governed by the laws of the Republic of Korea, with jurisdiction as provided by the Civil Procedure Act.",
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

export default function HuedayTermsPage() {
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
              href="/hueday/privacy"
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              {lang === "ko" ? "개인정보 처리방침" : "Privacy"}
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
