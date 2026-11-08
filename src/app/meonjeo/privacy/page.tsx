"use client";

import Link from "next/link";
import { useState } from "react";
/**
 * 먼저먹기 개인정보 처리방침. App Store · Google Play 의 개인정보처리방침 URL.
 * 사실관계: 계정·광고·분석·결제·서버 없음, 네트워크 요청 없음(Android 인터넷 권한 없음). 재고·사용 완료 기록·장보기·설정은
 * 기기 안 JSON 파일 하나에만. 알림은 로컬 알림(켤 때만 권한 요청). 백업 내보내기·복원은 이용자가 실행할 때만. 기기 백업 포함 가능.
 */

const EFFECTIVE = "2026-09-27";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "먼저먹기 · Meonjeo", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "먼저먹기는 냉장고 재고와 포장에 적힌 날짜, 장보기 목록을 관리하는 앱입니다. 회원가입이 없고, 서버가 없으며, 인터넷을 쓰지 않습니다. 모든 기록은 이 기기 안에만 저장됩니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**재고와 기록** — 식재료 이름, 보관 장소, 입력한 날짜, 수량과 메모, 재료별 알림 여부, 등록·사용 완료 시각, 장보기 목록. **설정** — 알림 사용 여부, 알림 시각, 미리 알림 일수. 모두 이 기기 안의 앱 전용 저장 공간에만 저장되며 어디로도 전송되지 않습니다.", "광고 식별자를 읽지 않고, 분석 도구도 없습니다."] },
      { h: "2. 권한", body: ["**알림 권한**은 날짜 알림을 켤 때만(온보딩의 ‘알림 켜고 시작하기’ 또는 설정) 요청합니다. 거절해도 재고와 장보기 목록은 그대로 쓸 수 있습니다.", "Android에서는 정한 시각에 알림을 보내기 위한 정확한 알람(허용하지 않으면 대략적인 시각에 옵니다)과, 기기를 다시 켠 뒤 알림을 다시 예약하기 위한 부팅 완료 신호를 씁니다.", "카메라, 사진, 연락처, 위치, 마이크 권한은 요청하지 않습니다."] },
      { h: "3. 알림", body: ["날짜 알림은 기기 안에서 예약하는 **로컬 알림**입니다. 서버 푸시가 아니며, 입력한 날짜 며칠 전(기본 3일, 1~7일)과 당일에만 예약합니다."] },
      { h: "4. 네트워크", body: ["먼저먹기는 인터넷에 **연결하지 않습니다.** 개발자가 운영하는 서버가 없고, 앱이 보내거나 받는 데이터가 없습니다. Android 앱은 인터넷 권한을 요청하지 않습니다."] },
      { h: "5. 백업 파일", body: ["설정의 백업 파일(JSON) 내보내기와 복원은 이용자가 직접 실행할 때만 파일을 만들거나 읽으며, 파일을 어디에 둘지는 이용자가 고릅니다. 앱이 스스로 내보내지 않습니다. 내보낸 파일에는 재고, 사용 완료 기록, 장보기 목록, 설정이 들어 있으니 직접 관리해 주세요.", "기록은 기기 백업(iCloud 백업, Android 백업)에 포함될 수 있습니다. 이는 이용자의 Apple 또는 Google 계정 안에서 이루어지며, 개발자는 접근할 수 없습니다."] },
      { h: "6. 광고와 추적", body: ["광고와 인앱 구입이 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "7. 삭제", body: ["재료와 사용 완료 기록은 앱 안에서 하나씩 지울 수 있고, 설정의 ‘모든 데이터 삭제’로 재고, 사용 완료 기록, 장보기 목록을 한 번에 지웁니다. 앱을 삭제해도 모두 지워집니다.", "이미 내보낸 백업 파일은 이용자가 직접 삭제해야 합니다. 서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "8. 식품 안전", body: ["표시된 날짜는 사용자가 입력한 기록으로, 식품의 안전 여부를 판정하지 않습니다."] },
      { h: "9. 아동", body: ["먼저먹기는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "10. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "11. 문의", body: ["이메일로 문의하시면 보내주신 이메일 주소와 문의 내용은 답변을 위해서만 처리합니다. 식재료 기록이나 백업 파일을 보낼 필요는 없습니다.", `${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "먼저먹기 · Meonjeo", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Meonjeo manages your food stock, the dates printed on packaging and your shopping list. There is no sign-up, no server, and the app never uses the internet. Everything is stored only on this device.",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Stock and history** — food names, storage locations, the dates you entered, quantity and memo, per-item reminder on/off, when items were added and marked used, and your shopping list. **Settings** — reminders on/off, reminder time and early-reminder days. All of it is stored only in the app's private storage on this device and is never uploaded.", "No advertising identifier is read and there are no analytics."] },
      { h: "2. Permissions", body: ["**Notification permission** is requested only when you turn date reminders on (“Turn on reminders” in onboarding, or in Settings). If you decline, stock and shopping lists still work.", "On Android the app uses exact alarms to remind you on time (without them, reminders arrive at about the right time) and the boot-completed signal to reschedule reminders after a restart.", "No camera, photos, contacts, location or microphone permission is requested."] },
      { h: "3. Notifications", body: ["Date reminders are **local notifications** scheduled on the device, not a server push. They are scheduled only a few days before (3 by default, 1 to 7) and on the date you entered."] },
      { h: "4. Network", body: ["Meonjeo **does not connect to the internet.** There is no developer-operated server, and the app sends and receives no data. The Android app does not request internet permission."] },
      { h: "5. Backup files", body: ["Backup export and restore (JSON) in Settings create or read a file only when you run them, and you choose where the file goes. The app never exports on its own. An exported file contains your stock, used history, shopping list and settings, so keep it safe.", "Records may be included in your device backup (iCloud Backup or Android backup). That happens inside your Apple or Google account; the developer has no access to it."] },
      { h: "6. Advertising and tracking", body: ["No ads, no in-app purchases, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "7. Deletion", body: ["Items and used records can be deleted one by one in the app, and Delete all data in Settings removes your stock, used history and shopping list at once. Deleting the app removes everything too.", "Backup files you have exported must be deleted by you. Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "8. Food safety", body: ["Dates shown are records you entered. They are not a determination of food safety."] },
      { h: "9. Children", body: ["Meonjeo is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "10. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "11. Contact", body: ["If you email support, your email address and message are used only to reply. You do not need to send food records or backup files.", `${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function MeonjeoPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/meonjeo" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 먼저먹기" : "← Meonjeo"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">🥬</span><span className="text-lg font-semibold tracking-tight text-[#76C893]">{t.app}</span></div>
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
