"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 꾸준 개인정보 처리방침. App Store · Google Play 의 개인정보처리방침 URL.
 * 사실관계: 계정·광고·분석·서버·네트워크 없음. 습관·체크·연속 기록은 기기 안(iOS App Group, Android 앱 저장소)에만.
 * 알림은 로컬 알림. 위젯은 기기 안의 데이터만 읽고 씀. 기록은 기기 백업에 포함될 수 있음. CSV 내보내기는 이용자가 실행할 때만.
 */

const EFFECTIVE = "2026-09-27";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "꾸준 · Kkujun", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "꾸준은 습관 몇 개를 하루 한 번의 탭으로 이어 가는 앱입니다. 회원가입이 없고, 서버가 없으며, 인터넷을 쓰지 않습니다. 습관과 기록은 이 기기 밖으로 나가지 않습니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**습관 기록과 설정** — 습관 이름·이모지·색·요일·알림 시각, 날짜별 체크, 되살리기 사용 기록, 알림 사용 여부·기본 알림 시각·주 시작 요일 같은 설정. 모두 이 기기 안에만 저장되며 어디로도 전송되지 않습니다.", "광고 식별자를 읽지 않고, 분석 도구도 없습니다."] },
      { h: "2. 알림", body: ["**알림 권한**은 습관마다 정한 시각에 알림을 보내는 데만 씁니다. 권한은 습관에 알림을 켜서 저장할 때 묻습니다. 알림은 기기 안에서 예약하는 **로컬 알림**이며 서버 푸시가 아닙니다.", "알림 권한을 거절해도 앱은 그대로 동작합니다. 알림 시각과 요일은 언제든 바꾸거나 끌 수 있습니다.", "Android에서는 정한 시각에 알림을 보내기 위한 정확한 알람(허용하지 않으면 대략적인 시각에 옵니다), 기기를 다시 켠 뒤 알림을 다시 예약하기 위한 부팅 완료 신호, 진동 권한을 씁니다. 모두 기기 안에서만 동작합니다."] },
      { h: "3. 위젯", body: ["위젯은 앱이 **이 기기에 저장한 데이터를 읽어** 오늘의 체크와 연속 기록을 보여줍니다. iPhone에서는 앱과 위젯이 기기 안의 공유 저장소(App Group)를 함께 쓰며, 그 밖의 앱은 이 저장소에 접근할 수 없습니다.", "위젯은 네트워크에 연결하지 않고, 어떤 정보도 기기 밖으로 보내지 않습니다. 위젯에서 체크하면 같은 기기 안의 저장소만 바뀝니다."] },
      { h: "4. 네트워크", body: ["꾸준은 인터넷에 **연결하지 않습니다.** 개발자가 운영하는 서버가 없고, 앱이 보내거나 받는 데이터가 없습니다."] },
      { h: "5. CSV 내보내기", body: ["설정의 CSV 내보내기는 이용자가 직접 실행할 때만 파일을 만들며, 파일을 어디에 둘지는 이용자가 고릅니다. 앱이 스스로 내보내지 않습니다."] },
      { h: "6. 백업", body: ["습관 기록과 설정은 기기 백업(iCloud 백업, Android 백업)에 포함될 수 있습니다. 이는 이용자의 Apple 또는 Google 계정 안에서 이루어지며, 개발자는 접근할 수 없습니다."] },
      { h: "7. 광고와 추적", body: ["광고와 인앱 구입이 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "8. 삭제", body: ["습관을 ‘보내면’ 그 습관의 체크와 연속 기록이 함께 지워집니다. 앱을 삭제하면 기기 안의 습관, 체크 기록, 연속 기록, 설정이 모두 지워지고 위젯도 함께 사라집니다.", "서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "9. 아동", body: ["꾸준은 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "10. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "11. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "꾸준 · Kkujun", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Kkujun keeps a few habits going with one tap a day. There is no sign-up, no server, and the app never uses the internet. Your habits and records never leave this device.",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Habit records and settings** — habit names, emoji, colors, scheduled days and reminder times, checks by date, repairs used, and settings such as reminders on/off, the default reminder time and the first day of the week. All of it is stored only on your device and is never uploaded.", "No advertising identifier is read and there are no analytics."] },
      { h: "2. Notifications", body: ["**Notification permission** is used only to deliver the reminder you set for each habit. It is requested when you save a habit with a reminder on. Reminders are **local notifications** scheduled on the device, not a server push.", "The app works if you decline notifications. Reminder times and days can be changed or turned off at any time.", "On Android the app uses exact alarms to remind you on time (without them, reminders arrive at about the right time), the boot-completed signal to reschedule reminders after a restart, and vibration. All of it runs on the device."] },
      { h: "3. Widgets", body: ["Widgets **read the data the app has stored on this device** to show today's checks and your streak. On iPhone the app and its widgets share an on-device container (an App Group) that no other app can access.", "Widgets do not connect to the network and send nothing off the device. Checking a habit from a widget changes only that on-device store."] },
      { h: "4. Network", body: ["Kkujun **does not connect to the internet.** There is no developer-operated server, and the app sends and receives no data."] },
      { h: "5. CSV export", body: ["CSV export in Settings creates a file only when you run it, and you choose where the file goes. The app never exports on its own."] },
      { h: "6. Backup", body: ["Habit records and settings may be included in your device backup (iCloud Backup or Android backup). That happens inside your Apple or Google account; the developer has no access to it."] },
      { h: "7. Advertising and tracking", body: ["No ads, no in-app purchases, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "8. Deletion", body: ["Retiring a habit deletes its checks and streak. Deleting the app removes every habit, check, streak and setting on the device, and its widgets with them.", "Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "9. Children", body: ["Kkujun is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "10. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "11. Contact", body: [`${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function KkujunPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/kkujun" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 꾸준" : "← Kkujun"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">🌱</span><span className="text-lg font-semibold tracking-tight text-[#2F9E6B]">{t.app}</span></div>
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
