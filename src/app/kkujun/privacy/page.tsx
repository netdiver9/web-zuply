"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 꾸준 개인정보 처리방침 — 컨셉 단계의 약속입니다. 출시 전에 실제 앱과 맞춰 갱신하고 시행일을 새로 적습니다.
 * 원칙: 계정·광고·분석·서버 없음. 습관·체크·연속 기록은 기기 안에만. 알림은 로컬 알림(알림 권한).
 * 위젯은 앱이 기기에 저장한 공유 데이터를 읽기만 하고 네트워크를 쓰지 않음. 기록은 iOS 기기 백업에 포함될 수 있음.
 */

const EFFECTIVE = "2026-09-26";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "꾸준 · Kkujun", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE} · 출시 전에 갱신됩니다`,
    intro: "꾸준은 습관 몇 개를 하루 한 번의 탭으로 이어 가는 앱입니다. 회원가입이 없고, 서버가 없으며, 습관과 기록은 이 기기 밖으로 나가지 않습니다. 아래는 꾸준이 출시될 때 지키기로 한 원칙입니다.",
    sections: [
      { h: "1. 이 문서에 대해", body: ["꾸준은 아직 개발 중인 컨셉입니다. 이 방침은 **출시 시점에 지킬 약속**을 미리 적은 것이며, 출시 전에 실제 앱의 동작과 맞춰 갱신하고 시행일을 새로 적습니다."] },
      { h: "2. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**습관 기록과 설정** — 습관 이름과 이모지, 요일, 날짜별 체크, 되살리기 사용 여부, 연속 기록, 알림 시각 같은 설정. 모두 이 기기 안에만 저장되며 어디로도 전송되지 않습니다.", "광고 식별자를 읽지 않고, 분석 도구도 없습니다."] },
      { h: "3. 알림", body: ["**알림 권한**은 습관마다 정한 시각에 알림을 보내는 데만 씁니다. 알림은 기기 안에서 예약하는 **로컬 알림**이며 서버 푸시가 아닙니다.", "알림 권한을 거절해도 앱은 그대로 동작합니다. 알림 시각과 요일은 설정에서 언제든 바꾸거나 끌 수 있습니다."] },
      { h: "4. 위젯", body: ["홈 화면·잠금화면 위젯은 앱이 **이 기기에 저장한 데이터를 읽어** 오늘의 체크와 연속 기록을 보여줍니다. 앱과 위젯은 기기 안의 공유 저장소(App Group)를 함께 쓰며, 그 밖의 앱은 이 저장소에 접근할 수 없습니다.", "위젯은 네트워크에 연결하지 않고, 어떤 정보도 기기 밖으로 보내지 않습니다. 위젯에서 체크하는 기능은 같은 기기 안의 저장소만 바꿉니다."] },
      { h: "5. 네트워크", body: ["꾸준은 인터넷에 **연결하지 않습니다.** 개발자가 운영하는 서버가 없고, 앱이 보내거나 받는 데이터가 없습니다."] },
      { h: "6. 백업", body: ["습관 기록과 설정은 iOS 기기 백업(iCloud 백업)에 포함될 수 있습니다. 이는 이용자의 Apple 계정 안에서 이루어지며, 개발자는 접근할 수 없습니다."] },
      { h: "7. 광고와 추적", body: ["광고가 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "8. 삭제", body: ["앱을 삭제하면 기기 안의 습관, 체크 기록, 연속 기록, 설정이 모두 지워지고 위젯도 함께 사라집니다.", "서버에 이용자와 연결된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "9. 아동", body: ["꾸준은 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "10. 변경", body: ["출시 전에 실제 앱과 맞춰 이 방침을 갱신합니다. 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "11. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "꾸준 · Kkujun", title: "Privacy Policy", updated: `Effective ${EFFECTIVE} · to be updated before release`,
    intro: "Kkujun keeps a few habits going with one tap a day. There is no sign-up and no server, and your habits and records never leave this device. Below are the commitments Kkujun will keep when it ships.",
    sections: [
      { h: "1. About this document", body: ["Kkujun is a concept still in development. This policy states the **commitments the app will keep at release.** It will be revised to match the actual app before release, with a new effective date."] },
      { h: "2. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Habit records and settings** — habit names and emoji, scheduled days, checks by date, whether a repair was used, streaks, and settings such as reminder times. All of it is stored only on your device and is never uploaded.", "No advertising identifier is read and there are no analytics."] },
      { h: "3. Notifications", body: ["**Notification permission** is used only to deliver the reminder you set for each habit. Reminders are **local notifications** scheduled on the device, not a server push.", "The app works if you decline notifications. Reminder times and days can be changed or turned off in Settings at any time."] },
      { h: "4. Widgets", body: ["The Home Screen and Lock Screen widgets **read the data the app has stored on this device** to show today's checks and your streak. The app and its widgets share an on-device container (an App Group) that no other app can access.", "Widgets do not connect to the network and send nothing off the device. Checking a habit from a widget changes only that on-device store."] },
      { h: "5. Network", body: ["Kkujun **does not connect to the internet.** There is no developer-operated server, and the app sends and receives no data."] },
      { h: "6. Backup", body: ["Habit records and settings may be included in your iOS device backup (iCloud Backup). That happens inside your Apple account; the developer has no access to it."] },
      { h: "7. Advertising and tracking", body: ["No ads, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "8. Deletion", body: ["Deleting the app removes every habit, check, streak and setting on the device, and its widgets with them.", "Because nothing linked to you is stored on a server, no separate deletion request is needed."] },
      { h: "9. Children", body: ["Kkujun is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "10. Changes", body: ["This policy will be updated to match the actual app before release. Any change is posted on this page with a new effective date."] },
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
