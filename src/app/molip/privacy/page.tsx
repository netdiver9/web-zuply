"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 몰입 개인정보 처리방침. App Store · Google Play 의 개인정보처리방침 URL.
 * 사실관계: 계정·광고·분석·서버·네트워크 없음. 오디오는 내장 소리 재생만(마이크 없음). 세션 기록·설정은 기기 안 JSON 하나에만.
 * 인증 카드는 기기에서 만들고 이용자가 공유 시트로 보낼 때만 나감(카드 메모는 저장하지 않음). 알림은 로컬 알림.
 * iOS 는 audio 백그라운드 모드, Android 는 mediaPlayback 포그라운드 서비스(상시 알림).
 */

const EFFECTIVE = "2026-09-27";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "몰입 · Molip", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "몰입은 내장 소리와 함께 쓰는 집중 타이머입니다. 회원가입이 없고, 서버가 없으며, 인터넷과 마이크를 쓰지 않습니다. 세션 기록은 이 기기 밖으로 나가지 않습니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**세션 기록과 설정** — 끝까지 마친 세션의 시작·끝 시각과 길이, 고른 소리, 이용자가 붙인 작업 이름(선택), 그리고 집중·휴식 시간, 프리셋, 자동 시작, 종소리, 소리와 볼륨 같은 설정과 진행 중인 타이머의 상태. 모두 이 기기 안에만 저장되며 어디로도 전송되지 않습니다.", "인증 카드에 적는 한 줄 메모는 카드 이미지에만 들어가고 앱에 저장하지 않습니다.", "광고 식별자를 읽지 않고, 분석 도구도 없습니다."] },
      { h: "2. 오디오", body: ["몰입은 앱에 **내장된 소리를 재생만** 합니다. **마이크를 쓰지 않으며**, 마이크 권한을 요청하지 않고, 어떤 소리도 녹음하거나 분석하지 않습니다.", "화면이 잠긴 뒤에도 소리와 타이머를 이어 가기 위해 iPhone에서는 백그라운드 오디오 재생을, Android에서는 남은 시간을 상시 알림으로 보여 주는 미디어 재생 포그라운드 서비스와 화면 꺼짐 중 동작 유지(wake lock)를 씁니다. 이 밖의 용도로는 쓰지 않습니다."] },
      { h: "3. 공부 인증 카드", body: ["인증 카드는 **기기 안에서** 이미지로 만들어지며, 날짜·오늘 집중 시간·세션 수·소리 이름·연속 일수와 이용자가 직접 적은 메모만 담깁니다.", "카드는 이용자가 공유 시트로 보낼 때만 기기 밖으로 나갑니다. 어디로 보냈는지 앱은 알지 못하고 기록하지 않습니다."] },
      { h: "4. 알림", body: ["세션이 끝났음을 알리는 알림은 기기 안에서 만드는 **로컬 알림**입니다. 서버 푸시가 아니며, 알림 권한을 거절해도 앱 안의 종소리와 타이머는 그대로 동작합니다. 진동은 끝을 알리는 데만 씁니다."] },
      { h: "5. 네트워크", body: ["몰입은 인터넷에 **연결하지 않습니다.** 소리는 앱에 들어 있어 내려받지 않고, 개발자가 운영하는 서버가 없으며, 앱이 보내거나 받는 데이터가 없습니다."] },
      { h: "6. 백업", body: ["세션 기록과 설정은 기기 백업(iCloud 백업, Android 백업)에 포함될 수 있습니다. 이는 이용자의 Apple 또는 Google 계정 안에서 이루어지며, 개발자는 접근할 수 없습니다."] },
      { h: "7. 광고와 추적", body: ["광고와 인앱 구입이 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "8. 삭제", body: ["기록 탭에서 세션을 하나씩 지울 수 있습니다. 앱을 삭제하면 기기 안의 세션 기록, 프리셋, 설정이 모두 지워집니다. 이미 공유한 카드 이미지는 이용자가 보낸 곳에 남습니다.", "서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "9. 아동", body: ["몰입은 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "10. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "11. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "몰입 · Molip", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Molip is a focus timer with bundled ambient sounds. There is no sign-up and no server, it never uses the internet or the microphone, and your session log never leaves this device.",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Session log and settings** — the start and end time and length of each finished session, the sound you chose, an optional task name, and settings such as focus and break lengths, presets, auto-start, chime, sound and volume, plus the state of a running timer. All of it is stored only on your device and is never uploaded.", "The one-line note you type on a proof card goes into the card image only; the app does not store it.", "No advertising identifier is read and there are no analytics."] },
      { h: "2. Audio", body: ["Molip **only plays sounds bundled** with the app. It **does not use the microphone**, does not ask for microphone access, and never records or analyses any sound.", "To keep the sound and timer going after the screen locks, the app uses background audio on iPhone, and on Android a media-playback foreground service that shows the time left in an ongoing notification, plus a wake lock. They are used for nothing else."] },
      { h: "3. The study-proof card", body: ["The proof card is rendered **on the device** as an image and contains only the date, today's focus time, session count, sound name, streak and any note you typed yourself.", "A card leaves the device only when you send it through the share sheet. The app does not know, and does not record, where you sent it."] },
      { h: "4. Notifications", body: ["The end-of-session alert is a **local notification** created on the device. It is not a server push, and if you decline notifications the in-app chime and timer still work. Vibration is used only to mark the end."] },
      { h: "5. Network", body: ["Molip **does not connect to the internet.** The sounds ship with the app and are not downloaded, there is no developer-operated server, and the app sends and receives no data."] },
      { h: "6. Backup", body: ["The session log and settings may be included in your device backup (iCloud Backup or Android backup). That happens inside your Apple or Google account; the developer has no access to it."] },
      { h: "7. Advertising and tracking", body: ["No ads, no in-app purchases, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "8. Deletion", body: ["Sessions can be deleted one by one in the Log tab. Deleting the app removes every session, preset and setting on the device. Card images you have already shared remain wherever you sent them.", "Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "9. Children", body: ["Molip is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "10. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "11. Contact", body: [`${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function MolipPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/molip" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 몰입" : "← Molip"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">⏳</span><span className="text-lg font-semibold tracking-tight text-[#8B8EE8]">{t.app}</span></div>
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
