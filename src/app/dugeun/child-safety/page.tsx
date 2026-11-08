"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 두근(Dugeun) 아동 안전 표준.
 * Google Play 의 "아동 안전 표준" 선언(소셜·커뮤니케이션 앱 필수)에 쓰이는 공개 페이지입니다.
 */

const EFFECTIVE = "2026-10-11";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN",
    app: "두근",
    title: "아동 안전 표준",
    updated: `시행일 ${EFFECTIVE}`,
    intro:
      "두근은 초대 코드로 연결한 한 사람과만 사진을 주고받는 앱입니다. 두근은 아동 성적 학대 및 착취(CSAE)와 아동 성적 학대 자료(CSAM)를 어떤 형태로도 허용하지 않으며, 이를 발견하면 즉시 조치합니다.",
    sections: [
      { h: "1. 금지 사항", body: [
        "아동을 성적으로 학대하거나 착취하는 콘텐츠, 아동 성적 학대 자료(CSAM), 아동을 성적 대상으로 삼는 모든 콘텐츠와 행위를 금지합니다.",
        "아동을 대상으로 한 그루밍, 성적 착취, 인신매매를 위한 앱 사용을 금지합니다.",
        "두근은 만 18세 이상을 대상으로 하며, 아동을 대상으로 하지 않습니다.",
      ]},
      { h: "2. 앱 안에서 신고하기", body: [
        "받은 사진을 열고 **신고하기**를 누르면 해당 사진이 운영자에게 신고됩니다.",
        "**우리** 탭의 **연결 해제**로 상대와의 연결을 즉시 끊을 수 있습니다. 연결이 끊기면 더 이상 사진을 주고받을 수 없습니다.",
        "앱 밖에서도 아래 연락처로 신고할 수 있습니다.",
      ]},
      { h: "3. 신고 처리", body: [
        "신고가 접수되면 운영자가 확인하고, 위반이 확인되면 해당 콘텐츠를 삭제하고 계정을 영구 정지합니다.",
        "CSAM이 확인되면 관련 법에 따라 국가 기관(대한민국 경찰청, 방송통신심의위원회 등) 및 NCMEC 등 관련 기관에 신고합니다.",
      ]},
      { h: "4. 법령 준수", body: [
        "두근은 아동 안전과 관련된 대한민국 법령과 서비스가 제공되는 국가의 관련 법령을 준수합니다.",
      ]},
      { h: "5. 아동 안전 담당 연락처", body: [
        `두근의 아동 안전 정책과 신고 처리에 관한 문의: **${CONTACT}**`,
      ]},
    ],
  },
  en: {
    lang: "한국어",
    app: "Dugeun",
    title: "Child Safety Standards",
    updated: `Effective ${EFFECTIVE}`,
    intro:
      "Dugeun lets a person share photos only with the one partner they connected with through an invite code. Dugeun does not tolerate child sexual abuse and exploitation (CSAE) or child sexual abuse material (CSAM) in any form, and acts on it immediately.",
    sections: [
      { h: "1. What is prohibited", body: [
        "Any content or behavior that sexually abuses or exploits children, any child sexual abuse material (CSAM), and any content that sexualizes minors.",
        "Using the app to groom, sexually exploit or traffic children.",
        "Dugeun is intended for users aged 18 and over and is not directed at children.",
      ]},
      { h: "2. Reporting in the app", body: [
        "Open a received photo and tap **Report** (신고하기) to report it to us.",
        "In the **Us** tab (우리), tap **Disconnect** (연결 해제) to end the connection immediately. Once disconnected, no more photos can be exchanged.",
        "You can also report outside the app using the contact below.",
      ]},
      { h: "3. How reports are handled", body: [
        "We review every report. When a violation is confirmed we remove the content and permanently ban the account.",
        "Confirmed CSAM is reported to the relevant authorities as required by law, including Korean law enforcement and NCMEC.",
      ]},
      { h: "4. Compliance", body: [
        "Dugeun complies with child safety laws of the Republic of Korea and of the countries where the service is offered.",
      ]},
      { h: "5. Child safety point of contact", body: [
        `Questions about Dugeun's child safety standards or reports: **${CONTACT}**`,
      ]},
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

export default function DugeunChildSafetyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/dugeun"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >{lang === "ko" ? "← 두근" : "← Dugeun"}</Link>
            <button
              onClick={() => setLang(lang === "ko" ? "en" : "ko")}
              className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              {t.lang}
            </button>
          </div>

          <div className="mb-3 flex items-center gap-3">
            <span className="text-3xl">💗</span>
            <span className="text-lg font-semibold tracking-tight text-[#FF5C7A]">
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
