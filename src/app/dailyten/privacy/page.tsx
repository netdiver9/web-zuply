"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 데일리 텐 개인정보 처리방침. App Store · Google Play 의 개인정보처리방침 URL.
 * 사실관계: 계정·광고·분석·결제·서버 없음, 네트워크 사용 없음(900문장 앱 내장, 원음은 시스템 TTS). 녹음은 기기 안에서만,
 * 백업 제외. 학습 기록(progress.json)은 기기 백업에 포함될 수 있음(개발자 서버 아님). 알림은 로컬 알림.
 */

const EFFECTIVE = "2026-09-27";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "데일리 텐 · Daily Ten", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "데일리 텐은 하루 열 문장을 듣고 따라 말하는 영어 학습 앱입니다. 회원가입이 없고, 서버가 없으며, 인터넷을 쓰지 않습니다. 모든 문장은 앱 안에 들어 있고, 내 목소리 녹음은 이 기기 밖으로 나가지 않습니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**학습 기록과 설정** — 고른 레슨 팩과 진행 일수, 문장별 ‘됐다/아직’ 표시, 복습 일정, 연속 학습일과 되살리기 기록, 읽기 속도·알림 시각·녹음 자동 삭제 같은 설정. 모두 이 기기 안에만 저장되며 어디로도 전송되지 않습니다.", "광고 식별자를 읽지 않고, 분석 도구도 없습니다."] },
      { h: "2. 마이크와 녹음", body: ["**마이크 권한**은 따라 말하기를 녹음하는 데만 씁니다. 권한은 처음 ‘듣고 따라 말하기’를 누를 때 묻고, 녹음은 이용자가 그 버튼을 누른 뒤 멈출 때까지(최대 12초)만 이루어집니다.", "녹음 파일은 **이 기기에만** 저장됩니다. 서버로 보내지 않고, 원음과의 비교도 기기 안에서 처리합니다. 음성 인식이나 외부 API 를 쓰지 않습니다.", "녹음은 30일 뒤 자동으로 지워지며(설정에서 끌 수 있음), 설정에서 언제든 모두 지울 수 있습니다."] },
      { h: "3. 네트워크", body: ["데일리 텐은 **인터넷을 쓰지 않습니다.** 세 레슨 팩 900문장이 모두 앱에 들어 있어 내려받을 것이 없습니다.", "원음은 기기에 들어 있는 영어 음성(시스템 TTS)이 기기 안에서 읽습니다."] },
      { h: "4. 알림", body: ["‘오늘의 열 문장’ 알림은 기기 안에서 예약하는 **로컬 알림**입니다. 서버 푸시가 아니며, 알림 권한을 거절해도 앱은 동작합니다. Android에서는 기기를 다시 켠 뒤 알림을 다시 예약하기 위해 부팅 완료 신호를 받습니다."] },
      { h: "5. 백업", body: ["학습 기록은 기기 백업(iCloud 백업, Android 백업)에 포함될 수 있습니다. 이는 이용자의 Apple 또는 Google 계정 안에서 이루어지며, 개발자는 접근할 수 없습니다. 녹음 파일은 백업에서 제외합니다."] },
      { h: "6. 광고와 추적", body: ["광고와 인앱 구입이 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "7. 삭제", body: ["설정에서 녹음을 모두 지우거나 진행 기록을 초기화할 수 있습니다. 앱을 삭제하면 기기 안의 학습 기록, 설정, 녹음이 모두 지워집니다.", "서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "8. 아동", body: ["데일리 텐은 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "9. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "10. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "데일리 텐 · Daily Ten", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Daily Ten is an English-learning app built around listening to and shadowing ten sentences a day. There is no sign-up, no server, and the app never uses the internet. Every sentence is built into the app, and your voice recordings never leave this device.",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Study records and settings** — your lesson pack and how far you are, “Got it / Not yet” marks per sentence, the review schedule, your streak and repairs, and settings such as speech rate, reminder time and recording auto-delete. All of it is stored only on your device and is never uploaded.", "No advertising identifier is read and there are no analytics."] },
      { h: "2. Microphone and recordings", body: ["**Microphone access** is used only to record your shadowing. It is requested the first time you tap “Listen and shadow”, and recording happens only from that tap until you stop (up to 12 seconds).", "Recordings are stored **on this device only.** They are not uploaded, and the comparison with the original is processed on the device. No speech recognition or external API is used.", "Recordings are deleted automatically after 30 days (you can turn this off in Settings), and you can delete them all at any time."] },
      { h: "3. Network", body: ["Daily Ten **never uses the internet.** All three lesson packs — 900 sentences — are built into the app, so there is nothing to download.", "The original audio is read on the device by its built-in English voice (system text-to-speech)."] },
      { h: "4. Notifications", body: ["The “today's ten” reminder is a **local notification** scheduled on the device. It is not a server push, and the app works if you decline notifications. On Android the app listens for the boot-completed signal to reschedule the reminder after a restart."] },
      { h: "5. Backup", body: ["Study records may be included in your device backup (iCloud Backup or Android backup). That happens inside your Apple or Google account; the developer has no access to it. Recordings are excluded from backup."] },
      { h: "6. Advertising and tracking", body: ["No ads, no in-app purchases, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "7. Deletion", body: ["Settings lets you delete every recording or reset your progress. Deleting the app removes every study record, setting and recording on the device.", "Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "8. Children", body: ["Daily Ten is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "9. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "10. Contact", body: [`${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function DailyTenPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/dailyten" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 데일리 텐" : "← Daily Ten"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">🔟</span><span className="text-lg font-semibold tracking-tight text-[#3F7BD9]">{t.app}</span></div>
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
