"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 오늘도 개인정보 처리방침. App Store Connect / Play Console 의 개인정보처리방침 URL.
 * 사실관계: 계정·서버·네트워크·광고·분석 없음. 기록은 기기에만 저장. 알림은 로컬 예약. 잠금은 Face ID·기기 암호(시스템 처리).
 */

const EFFECTIVE = "2026-09-26";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "오늘도 · Oneuldo", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "오늘도는 하루 한 줄 일기 앱입니다. 회원가입이 없고 서버도 없으며, 앱은 인터넷에 접속하지 않습니다. 모든 기록은 이용자의 기기 안에만 저장되고, 그 밖의 개인정보는 받지 않습니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**일기 기록** — 날짜, 기분, 한 줄 내용, 앱 설정(리마인더 시각, 테마, 잠금 여부). 모두 이 기기 안에만 저장되며 어디로도 전송되지 않습니다.", "앱은 **네트워크 요청을 전혀 하지 않습니다.**"] },
      { h: "2. 광고와 추적", body: ["광고가 없고, 광고 식별자를 읽지 않으며, 분석 도구도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "3. 알림", body: ["리마인더는 기기 안에서 예약되는 로컬 알림이며 외부 서버를 거치지 않습니다. 알림 권한은 이용자가 리마인더를 켤 때만 요청합니다."] },
      { h: "4. 잠금", body: ["잠금을 켜면 Face ID 또는 기기 암호로 앱을 엽니다. 인증은 운영체제가 처리하며, 앱은 성공·실패 결과만 받고 **생체 정보에는 접근할 수 없습니다.**"] },
      { h: "5. 내보내기와 공유", body: ["설정의 내보내기(텍스트·CSV)와 월간 회고 카드 공유는 이용자가 직접 실행할 때만 파일이나 이미지를 만들며, 어디로 보낼지는 이용자가 고릅니다. 앱이 스스로 내보내지 않습니다."] },
      { h: "6. 삭제", body: ["기록은 앱 안에서 항목별로 삭제할 수 있습니다. 앱을 삭제하면 모든 기록과 설정이 함께 지워집니다.", "서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "7. 아동", body: ["오늘도는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "8. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "9. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "오늘도 · Oneuldo", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Oneuldo is a one-line-a-day diary. There is no sign-up, no server, and the app never connects to the internet. Every entry stays on your device, and we collect no other personal information.",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Diary entries** — date, mood, the line you wrote, and app settings (reminder time, theme, lock). All of it is stored only on your device and is never uploaded.", "The app makes **no network requests at all.**"] },
      { h: "2. Advertising and tracking", body: ["No ads, no advertising identifier, no analytics, no tracking."] },
      { h: "3. Notifications", body: ["The reminder is a local notification scheduled on the device; it never goes through an external server. Permission is requested only when you turn the reminder on."] },
      { h: "4. Lock", body: ["With the lock on, the app opens with Face ID or your device passcode. The operating system performs the check; the app receives only a pass/fail result and **cannot access biometric data.**"] },
      { h: "5. Export and sharing", body: ["Export (text or CSV) in Settings and sharing a monthly recap card create a file or image only when you run them, and you choose where it goes. The app never exports on its own."] },
      { h: "6. Deletion", body: ["Entries can be deleted one by one inside the app. Deleting the app removes every entry and setting.", "Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "7. Children", body: ["Oneuldo is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "8. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "9. Contact", body: [`${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function OneuldoPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/oneuldo" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 오늘도" : "← Oneuldo"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">📔</span><span className="text-lg font-semibold tracking-tight text-[#F4A261]">{t.app}</span></div>
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
