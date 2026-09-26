"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 피타팟 개인정보 처리방침. App Store Connect / Play Console 의 개인정보처리방침 URL.
 * 사실관계: 계정·광고·분석 없음. 모든 게임은 한 폰에서 오프라인으로 가능. iOS '같은 방에서'는 로컬 Multipeer(서버 없음).
 * 선택 '떨어져서'는 개발자 서버(pitapat-api.zuply.co.kr)로 게임 수만 중계 — 무작위 설치 ID 와 방 코드만, 세션이 끝나면 남지 않음.
 * 테마 팩은 Apple 인앱 구입(iOS 만).
 */

const EFFECTIVE = "2026-09-26";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "피타팟 · Pitapat", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "피타팟은 둘이서 하는 미니게임 앱입니다. 회원가입이 없고, 모든 게임은 폰 하나로 인터넷 없이 즐길 수 있습니다. 각자 폰으로 놀기 위해 연결할 때만 최소한의 정보가 오가며, 그마저도 그 판이 끝나면 남지 않습니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**게임 기록과 설정** — 점수, 오늘의 밸런스 결과, 효과음 등 설정. 모두 이 기기 안에만 저장되며 어디로도 전송되지 않습니다.", "광고 식별자를 읽지 않고, 분석 도구도 없습니다."] },
      { h: "2. 한 폰으로 놀기", body: ["폰 하나를 주고받는 방식은 **네트워크를 전혀 쓰지 않습니다.** 18가지 게임 모두 이 방식으로 즐길 수 있습니다."] },
      { h: "3. 같은 방에서 (iPhone)", body: ["같은 방에 있는 두 iPhone 은 Apple 의 로컬 연결(Multipeer Connectivity)로 **직접** 연결됩니다. 서버도 인터넷도 거치지 않으며, 오가는 것은 게임 수뿐입니다.", "이를 위해 iOS 가 **로컬 네트워크 권한**을 묻습니다. 이 권한은 근처 기기를 찾는 데만 쓰이며, 다른 기기의 정보를 수집하지 않습니다."] },
      { h: "4. 떨어져서 (선택)", body: ["떨어져 있는 두 폰을 이으려면 개발자가 운영하는 중계 서버(**pitapat-api.zuply.co.kr**)를 거칩니다. 서버로 가는 것은 **설치 때 무작위로 만든 클라이언트 ID** 하나와 **4자리 방 코드**, 그리고 게임 수(선택한 답, 탭 시각 등)뿐입니다.", "클라이언트 ID 는 끊긴 연결을 다시 잇기 위한 값이며 이용자와 연결되지 않습니다. 서버는 게임 수를 상대 폰으로 넘길 뿐 **세션이 끝난 뒤에는 아무것도 보관하지 않습니다.**", "앱과 서버 사이의 통신은 암호화(HTTPS/WSS)됩니다."] },
      { h: "5. 테마 팩 구입", body: ["테마 팩은 iOS 에서만 Apple 인앱 구입으로 판매합니다. 결제는 Apple 이 처리하며, 앱과 개발자는 **결제 정보를 받지 않습니다.** 구입 여부는 Apple 의 영수증으로 확인합니다."] },
      { h: "6. 광고와 추적", body: ["광고가 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "7. 공유", body: ["점수 카드 공유는 이용자가 직접 실행할 때만 이미지를 만들며, 어디로 보낼지는 이용자가 고릅니다. 앱이 스스로 내보내지 않습니다."] },
      { h: "8. 삭제", body: ["앱을 삭제하면 기기 안의 기록과 설정이 모두 지워집니다.", "서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "9. 아동", body: ["피타팟은 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "10. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "11. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "피타팟 · Pitapat", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Pitapat is a mini-game app for two. There is no sign-up, and every game can be played on one phone without the internet. Only when you link two phones to play apart does a minimum of information pass through, and none of it remains once the round is over.",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Game records and settings** — scores, today's balance results, and settings such as sound. All of it is stored only on your device and is never uploaded.", "No advertising identifier is read and there are no analytics."] },
      { h: "2. Playing on one phone", body: ["Passing one phone back and forth uses **no network at all.** All 18 games can be played this way."] },
      { h: "3. Together (iPhone)", body: ["Two iPhones in the same room link **directly** using Apple's local connection (Multipeer Connectivity). No server or internet is involved, and only game moves pass between them.", "iOS asks for **Local Network permission** for this. It is used only to find the nearby phone and collects nothing about other devices."] },
      { h: "4. Apart (optional)", body: ["To link two phones that are apart, moves go through a relay server operated by the developer (**pitapat-api.zuply.co.kr**). The only things sent are a **random client ID created at install**, the **4-digit room code**, and the game moves themselves (chosen answers, tap times and so on).", "The client ID exists so a dropped connection can be resumed; it is not linked to you. The server passes moves to the other phone and **keeps nothing after the session ends.**", "Traffic between the app and the server is encrypted (HTTPS/WSS)."] },
      { h: "5. Theme packs", body: ["Theme packs are sold on iOS only, through Apple in-app purchase. Apple handles payment; the app and the developer **receive no payment details.** Ownership is checked through Apple's receipt."] },
      { h: "6. Advertising and tracking", body: ["No ads, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "7. Sharing", body: ["Sharing a score card creates an image only when you run it, and you choose where it goes. The app never exports on its own."] },
      { h: "8. Deletion", body: ["Deleting the app removes every record and setting on the device.", "Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "9. Children", body: ["Pitapat is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "10. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "11. Contact", body: [`${CONTACT}`] },
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
