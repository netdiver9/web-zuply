"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 담다 개인정보 처리방침. App Store Connect 의 개인정보처리방침 URL.
 * 사실관계: 계정·서버 없음. 네트워크는 Apple 인앱 구입(Damda Pro)뿐. 이벤트·사진·설정은 기기와 위젯이 공유하는 App Group 에만 저장.
 * 알림은 로컬 예약. JSON 백업 내보내기·가져오기는 이용자가 실행할 때만. 광고·분석 없음.
 */

const EFFECTIVE = "2026-09-26";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "담다 · Damda", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "담다는 디데이·기념일 위젯 앱입니다. 회원가입이 없고 서버도 없습니다. 모든 날짜·메모·사진은 이용자의 기기 안에만 저장되며, 앱이 인터넷을 쓰는 것은 Apple 인앱 구입(Damda Pro)을 처리할 때뿐입니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**이벤트** — 제목, 날짜, 메모, 반복·계산 방식, 테마, 알림 설정. **사진** — 이용자가 꾸미기에서 고른 사진. **앱 설정** — 정렬, 테마 등. 모두 이 기기 안, 그리고 앱과 위젯이 함께 쓰는 **App Group** 저장 공간에만 저장되며 어디로도 전송되지 않습니다.", "설정의 ‘사용 통계’ 토글은 기기의 시스템 로그에만 남기며 아무것도 보내지 않습니다."] },
      { h: "2. 네트워크", body: ["담다에는 **서버가 없습니다.** 앱이 인터넷을 쓰는 것은 Damda Pro 구입과 구입 복원을 위해 Apple 의 결제(StoreKit)와 통신할 때뿐입니다.", "결제는 Apple 이 처리하며, 앱과 개발자는 **결제 정보를 받지 않습니다.**"] },
      { h: "3. 사진", body: ["사진 보관함은 이용자가 꾸미기에서 사진을 고를 때만 접근하며, 고른 사진 한 장만 앱 저장 공간에 복사해 위젯에 그립니다. 사진은 업로드되지 않습니다."] },
      { h: "4. 알림", body: ["알림은 기기 안에서 예약되는 로컬 알림이며 외부 서버를 거치지 않습니다. 알림 권한은 이용자가 알림을 켤 때만 요청합니다."] },
      { h: "5. 백업", body: ["JSON 백업 내보내기와 가져오기는 이용자가 직접 실행할 때만 파일을 만들거나 읽으며, 파일을 어디에 둘지는 이용자가 고릅니다. 앱이 스스로 내보내지 않습니다."] },
      { h: "6. 광고와 추적", body: ["광고가 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "7. 다른 앱과의 관계", body: ["설정에 함께 만든 커플 앱 두근(Dugeun)으로 가는 링크가 있습니다. 링크를 여는 것 외에 어떤 데이터도 두근으로 넘어가지 않습니다."] },
      { h: "8. 삭제", body: ["이벤트는 앱 안에서 하나씩 삭제할 수 있습니다. 앱을 삭제하면 이벤트·메모·사진·설정이 모두 지워집니다.", "서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "9. 아동", body: ["담다는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "10. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "11. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "담다 · Damda", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Damda is a D-day and anniversary widget app. There is no sign-up and no server. Every date, note and photo stays on your device, and the app uses the internet only to process the Apple in-app purchase (Damda Pro).",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Events** — title, date, note, repeat and counting rules, theme and reminder settings. **Photos** — the photo you chose when decorating. **App settings** — sort order, theme and so on. All of it is stored only on your device, in the app and in the **App Group** storage shared with the widget, and is never uploaded.", "The “usage statistics” toggle in Settings writes only to the device's system log and sends nothing."] },
      { h: "2. Network", body: ["Damda has **no server.** The only time the app uses the internet is to talk to Apple's payment system (StoreKit) for buying or restoring Damda Pro.", "Apple handles payment; the app and the developer **receive no payment details.**"] },
      { h: "3. Photos", body: ["The photo library is accessed only when you pick a photo while decorating, and just that one photo is copied into the app's storage to draw the widget. Photos are never uploaded."] },
      { h: "4. Notifications", body: ["Reminders are local notifications scheduled on the device; they never go through an external server. Permission is requested only when you turn a reminder on."] },
      { h: "5. Backup", body: ["JSON backup export and import create or read a file only when you run them, and you choose where the file goes. The app never exports on its own."] },
      { h: "6. Advertising and tracking", body: ["No ads, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "7. Other apps", body: ["Settings has a link to Dugeun, our companion couple app. Nothing but opening the link happens; no data is passed to Dugeun."] },
      { h: "8. Deletion", body: ["Events can be deleted one by one inside the app. Deleting the app removes every event, note, photo and setting.", "Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "9. Children", body: ["Damda is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "10. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "11. Contact", body: [`${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function DamdaPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/damda" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 담다" : "← Damda"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">📆</span><span className="text-lg font-semibold tracking-tight text-[#E8607A]">{t.app}</span></div>
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
