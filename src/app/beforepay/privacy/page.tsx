"use client";

import Link from "next/link";
import { useState } from "react";
/**
 * 결제전 개인정보 처리방침. App Store · Google Play 의 개인정보처리방침 URL.
 * 사실관계: 계정·광고·분석·결제·서버 없음, 네트워크 요청 없음(Android 인터넷 권한 없음). 구독 기록·설정은 기기 안에만.
 * 카드번호·계좌·은행 로그인을 받지 않고 문자·이메일을 읽지 않음. 해지·결제 대행 없음(저장한 링크를 브라우저로 여는 것뿐).
 * 알림은 로컬 알림. JSON 백업 내보내기·복원은 이용자가 실행할 때만. 기기 백업 포함 가능.
 */

const EFFECTIVE = "2026-09-27";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "결제전 · Beforepay", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "결제전은 구독료와 무료체험 종료일을 모아 보는 앱입니다. 회원가입이 없고, 서버가 없으며, 인터넷을 쓰지 않습니다. 모든 기록은 이 기기 안에만 저장되고, 카드번호·계좌·은행 로그인은 묻지 않습니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**구독 기록** — 서비스명, 금액과 통화, 결제 주기와 결제일, 분류, 무료체험 여부와 취소할 날짜, 서비스별 알림 설정, 해지 페이지 링크, 메모, 유지·해지 표시와 날짜. **설정** — 알림 시각, 새 구독의 기본 알림 일수, 기본 통화. 모두 이 기기 안에만 저장되며 어디로도 전송되지 않습니다.", "광고 식별자를 읽지 않고, 분석 도구도 없습니다."] },
      { h: "2. 받지 않는 정보", body: ["카드번호, 계좌번호, 은행·카드사 로그인 정보를 **묻지 않습니다.** 금융 기관과 연결하지 않습니다.", "문자 메시지나 이메일을 읽지 않고, 그런 권한을 요청하지 않습니다.", "결제전은 구독을 **대신 해지하거나 결제하지 않습니다.**"] },
      { h: "3. 권한과 알림", body: ["**알림 권한**은 결제일과 무료체험 취소할 날짜를 알려주는 데만 씁니다. 알림은 기기 안에서 예약하는 **로컬 알림**이며 서버 푸시가 아닙니다. 거절해도 앱은 그대로 동작합니다.", "Android에서는 정한 시각에 알림을 보내기 위한 정확한 알람(허용하지 않으면 몇 분 늦을 수 있습니다)과, 기기를 다시 켠 뒤 알림을 다시 예약하기 위한 부팅 완료 신호를 씁니다.", "연락처, 위치, 사진, 카메라, 마이크 권한은 요청하지 않습니다."] },
      { h: "4. 네트워크와 외부 링크", body: ["결제전은 인터넷에 **연결하지 않습니다.** 개발자가 운영하는 서버가 없고, 앱이 보내거나 받는 데이터가 없습니다. Android 앱은 인터넷 권한을 요청하지 않습니다.", "‘해지 페이지 열기’는 이용자가 저장한 링크를 기기의 브라우저로 여는 것뿐입니다. 열린 페이지에는 해당 서비스의 개인정보 처리방침이 적용됩니다."] },
      { h: "5. 백업", body: ["설정의 JSON 백업 내보내기와 복원은 이용자가 직접 실행할 때만 파일을 만들거나 읽으며, 파일을 어디에 둘지는 이용자가 고릅니다. 앱이 스스로 내보내지 않습니다. 내보낸 파일에는 구독 기록이 들어 있으니 직접 관리해 주세요.", "기록은 기기 백업(iCloud 백업, Android 백업)에 포함될 수 있습니다. 이는 이용자의 Apple 또는 Google 계정 안에서 이루어지며, 개발자는 접근할 수 없습니다."] },
      { h: "6. 광고와 추적", body: ["광고와 인앱 구입이 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "7. 삭제", body: ["구독은 앱 안에서 하나씩 삭제할 수 있고, 설정의 ‘모든 데이터 삭제’로 한 번에 지울 수 있습니다. 앱을 삭제해도 모두 지워집니다.", "이미 내보낸 백업 파일은 이용자가 직접 삭제해야 합니다. 서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "8. 아동", body: ["결제전은 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "9. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "10. 문의", body: ["이메일로 문의하시면 보내주신 이메일 주소와 문의 내용은 답변을 위해서만 처리합니다. 카드번호, 로그인 정보나 구독 백업 파일은 보내지 마세요.", `${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "결제전 · Beforepay", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Beforepay keeps subscription costs and free-trial deadlines in one place. There is no sign-up, no server, and the app never uses the internet. Everything is stored only on this device, and it never asks for card numbers, bank accounts or bank logins.",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Subscription records** — service name, amount and currency, billing cycle and dates, category, trial status and cancel-by date, per-subscription reminder settings, cancellation link, notes, and kept or canceled marks with their dates. **Settings** — reminder time, default lead days for new subscriptions and default currency. All of it is stored only on your device and is never uploaded.", "No advertising identifier is read and there are no analytics."] },
      { h: "2. What we never ask for", body: ["The app **never asks for** card numbers, bank account numbers, or bank or card-issuer logins, and it does not connect to any financial institution.", "It does not read text messages or email, and asks for no such permission.", "Beforepay **never cancels or pays** for anything on your behalf."] },
      { h: "3. Permissions and notifications", body: ["**Notification permission** is used only to remind you of billing dates and trial cancel-by dates. Reminders are **local notifications** scheduled on the device, not a server push. The app works if you decline.", "On Android the app uses exact alarms to remind you on time (without them, reminders may arrive a few minutes late) and the boot-completed signal to reschedule reminders after a restart.", "No contacts, location, photos, camera or microphone permission is requested."] },
      { h: "4. Network and external links", body: ["Beforepay **does not connect to the internet.** There is no developer-operated server, and the app sends and receives no data. The Android app does not request internet permission.", "“Open cancellation page” only opens the link you saved in your device's browser. That page is subject to the service's own privacy policy."] },
      { h: "5. Backup", body: ["JSON backup export and restore in Settings create or read a file only when you run them, and you choose where the file goes. The app never exports on its own. An exported file contains your subscription records, so keep it safe.", "Records may be included in your device backup (iCloud Backup or Android backup). That happens inside your Apple or Google account; the developer has no access to it."] },
      { h: "6. Advertising and tracking", body: ["No ads, no in-app purchases, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "7. Deletion", body: ["Subscriptions can be deleted one by one in the app, or all at once with Delete all data in Settings. Deleting the app removes everything too.", "Backup files you have exported must be deleted by you. Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "8. Children", body: ["Beforepay is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "9. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "10. Contact", body: ["If you email support, your email address and message are used only to reply. Do not include card numbers, login details or subscription backup files.", `${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function BeforepayPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/beforepay" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 결제전" : "← Beforepay"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">🔔</span><span className="text-lg font-semibold tracking-tight text-[#FFBE79]">{t.app}</span></div>
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
