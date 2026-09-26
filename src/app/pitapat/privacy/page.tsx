"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 피타팟 개인정보 처리방침. App Store Connect / Play Console 의 개인정보처리방침 URL.
 * 사실관계 (1.0): 계정·광고·분석·인앱 구입 없음, 서버 없음, 수집하는 데이터 없음. 모든 게임은 한 폰에서 오프라인으로 가능.
 * iOS '같은 방에서'는 로컬 Multipeer(서버 없음, 로컬 네트워크 권한만). 원거리 중계와 테마 팩은 앱에서 꺼져 있음.
 */

const EFFECTIVE = "2026-09-27";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "피타팟 · Pitapat", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "피타팟은 둘이서 하는 미니게임 앱입니다. 회원가입이 없고, 모든 게임은 폰 하나로 인터넷 없이 즐길 수 있습니다. 피타팟은 어떤 데이터도 수집하지 않으며, 서버도 없습니다.",
    sections: [
      { h: "1. 받는 정보", body: ["**아무것도 수집하지 않습니다.** 이름, 이메일, 전화번호, 주소록, 위치 정보, 기기 식별자를 받지 않으며, 계정이 없으므로 이용자를 식별하지 않습니다.", "**게임 기록과 설정** — 점수, 오늘의 밸런스 결과, 효과음 등 설정. 모두 이 기기 안에만 저장되며 어디로도 전송되지 않습니다.", "광고 식별자를 읽지 않고, 분석 도구도 없습니다."] },
      { h: "2. 한 폰으로 놀기", body: ["폰 하나를 주고받는 방식은 **네트워크를 전혀 쓰지 않습니다.** 18가지 게임 모두 이 방식으로 즐길 수 있습니다."] },
      { h: "3. 같은 방에서 (iPhone)", body: ["같은 방에 있는 두 iPhone 은 Apple 의 로컬 연결(Multipeer Connectivity)로 **직접** 연결됩니다. 서버도 인터넷도 거치지 않으며, 오가는 것은 게임 수뿐입니다.", "이를 위해 iOS 가 **로컬 네트워크 권한**을 묻습니다. 이 권한은 근처 기기를 찾는 데만 쓰이며, 다른 기기의 정보를 수집하지 않습니다."] },
      { h: "4. 서버와 결제", body: ["피타팟은 **서버가 없습니다.** 앱이 인터넷으로 보내는 것은 아무것도 없습니다.", "인앱 구입도 없습니다. 모든 게임은 무료이며, 앱과 개발자는 결제 정보를 다루지 않습니다."] },
      { h: "5. 광고와 추적", body: ["광고가 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "6. 공유", body: ["점수 카드 공유는 이용자가 직접 실행할 때만 이미지를 만들며, 어디로 보낼지는 이용자가 고릅니다. 앱이 스스로 내보내지 않습니다."] },
      { h: "7. 삭제", body: ["앱을 삭제하면 기기 안의 기록과 설정이 모두 지워집니다.", "서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "8. 아동", body: ["피타팟은 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "9. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "10. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "피타팟 · Pitapat", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Pitapat is a mini-game app for two. There is no sign-up, and every game can be played on one phone without the internet. Pitapat collects no data at all, and there is no server.",
    sections: [
      { h: "1. What we collect", body: ["**Nothing.** We do not collect your name, email, phone number, contacts, location or any device identifier. There is no account, so you are never identified.", "**Game records and settings** — scores, today's balance results, and settings such as sound. All of it is stored only on your device and is never uploaded.", "No advertising identifier is read and there are no analytics."] },
      { h: "2. Playing on one phone", body: ["Passing one phone back and forth uses **no network at all.** All 18 games can be played this way."] },
      { h: "3. Together (iPhone)", body: ["Two iPhones in the same room link **directly** using Apple's local connection (Multipeer Connectivity). No server or internet is involved, and only game moves pass between them.", "iOS asks for **Local Network permission** for this. It is used only to find the nearby phone and collects nothing about other devices."] },
      { h: "4. Server and purchases", body: ["Pitapat has **no server.** The app sends nothing over the internet.", "There are no in-app purchases. Every game is free, and neither the app nor the developer handles any payment details."] },
      { h: "5. Advertising and tracking", body: ["No ads, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "6. Sharing", body: ["Sharing a score card creates an image only when you run it, and you choose where it goes. The app never exports on its own."] },
      { h: "7. Deletion", body: ["Deleting the app removes every record and setting on the device.", "Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "8. Children", body: ["Pitapat is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "9. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "10. Contact", body: [`${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function PitapatPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/pitapat" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 피타팟" : "← Pitapat"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">💞</span><span className="text-lg font-semibold tracking-tight text-[#FF7EA0]">{t.app}</span></div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h1>
          <p className="mt-3 text-sm text-white/40">{t.updated}</p>
          <p className="mt-8 text-[15px] leading-relaxed text-white/70">{t.intro}</p>
        </header>
        <div className="space-y-12">
          {t.sections.map((section) => (
            <section key={section.h}>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">{section.h}</h2>
              <ul className="space-y-3">{section.body.map((line, i) => <li key={i} className="text-[15px] leading-relaxed text-white/65"><RichText text={line} /></li>)}</ul>
            </section>
          ))}
        </div>
        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-white/40">
          <p>{t.app} · Zuply · <a href={`mailto:${CONTACT}`} className="underline underline-offset-4 transition-colors hover:text-white">{CONTACT}</a></p>
        </footer>
      </div>
    </main>
  );
}
