"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 데일리 텐 개인정보 처리방침 — 컨셉 단계의 약속입니다. 출시 전에 실제 앱과 맞춰 갱신하고 시행일을 새로 적습니다.
 * 원칙: 계정·광고·분석 없음. 녹음은 기기 안에서만 비교, 전송 없음. 레슨 팩 내려받기만 네트워크 사용(식별값 없음).
 * 알림은 로컬 알림. 기록은 iOS 기기 백업에 포함될 수 있음(개발자 서버 아님).
 */

const EFFECTIVE = "2026-09-26";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "데일리 텐 · Daily Ten", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE} · 출시 전에 갱신됩니다`,
    intro: "데일리 텐은 하루 열 문장을 듣고 따라 말하는 영어 학습 앱입니다. 회원가입이 없고, 내 목소리 녹음은 이 기기 밖으로 나가지 않으며, 인터넷은 레슨 팩을 내려받을 때만 씁니다. 아래는 데일리 텐이 출시될 때 지키기로 한 원칙입니다.",
    sections: [
      { h: "1. 이 문서에 대해", body: ["데일리 텐은 아직 개발 중인 컨셉입니다. 이 방침은 **출시 시점에 지킬 약속**을 미리 적은 것이며, 출시 전에 실제 앱의 동작과 맞춰 갱신하고 시행일을 새로 적습니다."] },
      { h: "2. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**학습 기록과 설정** — 문장별 ‘됐다/아직’ 표시, 복습 일정, 연속 학습일, 알림 시각 같은 설정. 모두 이 기기 안에만 저장되며 어디로도 전송되지 않습니다.", "광고 식별자를 읽지 않고, 분석 도구도 없습니다."] },
      { h: "3. 마이크와 녹음", body: ["**마이크 권한**은 따라 말하기를 녹음하는 데만 씁니다. 녹음은 이용자가 카드를 열어 말하는 동안에만 이루어집니다.", "녹음 파일은 **이 기기에만** 저장됩니다. 서버로 보내지 않고, 원음과의 비교도 기기 안에서 처리합니다. 음성 인식이나 외부 API 를 쓰지 않습니다.", "녹음은 30일 뒤 자동으로 지워지며(설정에서 변경), 설정에서 언제든 모두 지울 수 있습니다."] },
      { h: "4. 레슨 팩 내려받기", body: ["레슨 팩을 내려받을 때만 개발자가 운영하는 서버에 연결합니다. 요청에 담기는 것은 **팩 이름과 앱 버전**뿐이며, 이용자를 식별하는 값은 없습니다.", "서버는 어떤 기기가 어떤 팩을 받았는지 이용자와 연결해 저장하지 않습니다. 내려받은 뒤의 학습은 인터넷 없이 이루어집니다."] },
      { h: "5. 알림", body: ["‘오늘의 열 문장’ 알림은 기기 안에서 예약하는 **로컬 알림**입니다. 서버 푸시가 아니며, 알림 권한을 거절해도 앱은 동작합니다."] },
      { h: "6. 백업", body: ["학습 기록은 iOS 기기 백업(iCloud 백업)에 포함될 수 있습니다. 이는 이용자의 Apple 계정 안에서 이루어지며, 개발자는 접근할 수 없습니다. 녹음 파일은 기본적으로 백업에서 제외합니다."] },
      { h: "7. 광고와 추적", body: ["광고가 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "8. 삭제", body: ["앱을 삭제하면 기기 안의 학습 기록, 설정, 녹음, 레슨 팩이 모두 지워집니다.", "서버에 이용자와 연결된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "9. 아동", body: ["데일리 텐은 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "10. 변경", body: ["출시 전에 실제 앱과 맞춰 이 방침을 갱신합니다. 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "11. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "데일리 텐 · Daily Ten", title: "Privacy Policy", updated: `Effective ${EFFECTIVE} · to be updated before release`,
    intro: "Daily Ten is an English-learning app built around listening to and shadowing ten sentences a day. There is no sign-up, your voice recordings never leave this device, and the internet is used only to download lesson packs. Below are the commitments Daily Ten will keep when it ships.",
    sections: [
      { h: "1. About this document", body: ["Daily Ten is a concept still in development. This policy states the **commitments the app will keep at release.** It will be revised to match the actual app before release, with a new effective date."] },
      { h: "2. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Study records and settings** — “Got it / Not yet” marks per sentence, the review schedule, your streak, and settings such as reminder time. All of it is stored only on your device and is never uploaded.", "No advertising identifier is read and there are no analytics."] },
      { h: "3. Microphone and recordings", body: ["**Microphone access** is used only to record your shadowing. Recording happens only while you have a card open and are speaking.", "Recordings are stored **on this device only.** They are not uploaded, and the comparison with the original is processed on the device. No speech recognition or external API is used.", "Recordings are deleted automatically after 30 days (adjustable in Settings), and you can delete them all at any time."] },
      { h: "4. Downloading lesson packs", body: ["The app connects to a server operated by the developer only when you download a lesson pack. The request carries **the pack name and the app version** and nothing that identifies you.", "The server does not keep a record linking a device or person to the packs they downloaded. After the download, studying happens offline."] },
      { h: "5. Notifications", body: ["The “today's ten” reminder is a **local notification** scheduled on the device. It is not a server push, and the app works if you decline notifications."] },
      { h: "6. Backup", body: ["Study records may be included in your iOS device backup (iCloud Backup). That happens inside your Apple account; the developer has no access to it. Recordings are excluded from backup by default."] },
      { h: "7. Advertising and tracking", body: ["No ads, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "8. Deletion", body: ["Deleting the app removes every study record, setting, recording and lesson pack on the device.", "Because nothing linked to you is stored on a server, no separate deletion request is needed."] },
      { h: "9. Children", body: ["Daily Ten is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "10. Changes", body: ["This policy will be updated to match the actual app before release. Any change is posted on this page with a new effective date."] },
      { h: "11. Contact", body: [`${CONTACT}`] },
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
