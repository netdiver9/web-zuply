"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 찰나 개인정보 처리방침 — 컨셉 단계의 약속입니다. 출시 전에 실제 앱과 맞춰 갱신하고 시행일을 새로 적습니다.
 * 원칙: 계정·광고·분석·서버 없음. 현상 전 컷은 앱 안에만, 현상되면 사진 앱 '찰나' 앨범에 저장(추가 권한만).
 * 현상 알림은 로컬 알림. 사진에 위치 정보를 넣지 않음.
 */

const EFFECTIVE = "2026-09-26";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "찰나 · Chalna", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE} · 출시 전에 갱신됩니다`,
    intro: "찰나는 필름 롤처럼 찍고 다음 날 아침에 보는 카메라 앱입니다. 회원가입이 없고, 서버가 없으며, 사진은 이 기기의 사진 보관함에만 저장됩니다. 아래는 찰나가 출시될 때 지키기로 한 원칙입니다.",
    sections: [
      { h: "1. 이 문서에 대해", body: ["찰나는 아직 개발 중인 컨셉입니다. 이 방침은 **출시 시점에 지킬 약속**을 미리 적은 것이며, 출시 전에 실제 앱의 동작과 맞춰 갱신하고 시행일을 새로 적습니다."] },
      { h: "2. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**롤 기록과 설정** — 어떤 룩으로 몇 컷을 찍었는지, 현상 시각 같은 설정. 모두 이 기기 안에만 저장되며 어디로도 전송되지 않습니다.", "광고 식별자를 읽지 않고, 분석 도구도 없습니다."] },
      { h: "3. 카메라와 사진 권한", body: ["**카메라 권한**은 찍는 데만 씁니다. 화면에 보이는 것을 앱이 따로 저장하거나 분석하지 않습니다.", "**사진 추가 권한**은 현상된 사진을 사진 보관함의 ‘찰나’ 앨범에 저장하기 위해서만 요청합니다. 보관함에 있는 다른 사진은 읽지 않습니다.", "찍은 사진에 **위치 정보를 넣지 않습니다.** 위치 권한도 요청하지 않습니다."] },
      { h: "4. 현상 전 사진", body: ["아직 현상되지 않은 컷은 **앱 전용 저장 공간에만** 있습니다. 현상되는 순간 사진 보관함에 저장되며, 그 뒤 앱 안의 사본은 지워집니다.", "어느 단계에서도 사진이 서버로 가지 않습니다. 찰나에는 서버가 없습니다."] },
      { h: "5. 알림", body: ["현상이 끝났다는 알림은 기기 안에서 예약하는 **로컬 알림**입니다. 서버 푸시가 아니며, 알림 권한을 거절해도 앱은 동작합니다."] },
      { h: "6. 공유와 인쇄", body: ["밀착 인화지 공유와 인쇄는 이용자가 직접 실행할 때만 이미지를 만들며, 어디로 보낼지는 이용자가 고릅니다. 앱이 스스로 내보내지 않습니다."] },
      { h: "7. 광고와 추적", body: ["광고가 없고, 광고 식별자를 읽지 않으며, 분석 도구나 제3자 SDK 도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "8. 삭제", body: ["앱을 삭제하면 앱 안의 롤 기록, 설정, 현상 전 컷이 모두 지워집니다.", "이미 사진 보관함에 저장된 사진은 이용자의 것이므로 남습니다. 지우려면 사진 앱에서 직접 삭제하세요.", "서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "9. 아동", body: ["찰나는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "10. 변경", body: ["출시 전에 실제 앱과 맞춰 이 방침을 갱신합니다. 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "11. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "찰나 · Chalna", title: "Privacy Policy", updated: `Effective ${EFFECTIVE} · to be updated before release`,
    intro: "Chalna is a camera app that shoots like a roll of film and shows you the pictures the next morning. There is no sign-up, no server, and photos are saved only to this device's Photos library. Below are the commitments Chalna will keep when it ships.",
    sections: [
      { h: "1. About this document", body: ["Chalna is a concept still in development. This policy states the **commitments the app will keep at release.** It will be revised to match the actual app before release, with a new effective date."] },
      { h: "2. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Roll records and settings** — which look you used, how many frames you took, your developing time. All of it is stored only on your device and is never uploaded.", "No advertising identifier is read and there are no analytics."] },
      { h: "3. Camera and Photos permissions", body: ["**Camera access** is used only to take pictures. The app does not store or analyse what the preview shows.", "**Add-to-Photos access** is requested only to save developed pictures to a “Chalna” album in your library. The app does not read other photos in your library.", "**No location data** is written into your photos, and location permission is never requested."] },
      { h: "4. Undeveloped frames", body: ["Frames that have not developed yet live **only in the app's private storage.** At developing time they are saved to your Photos library, and the app's copy is then removed.", "At no stage do photos go to a server. Chalna has no server."] },
      { h: "5. Notifications", body: ["The “roll developed” notification is a **local notification** scheduled on the device. It is not a server push, and the app works if you decline notifications."] },
      { h: "6. Sharing and printing", body: ["Sharing or printing a contact sheet creates an image only when you run it, and you choose where it goes. The app never exports on its own."] },
      { h: "7. Advertising and tracking", body: ["No ads, no advertising identifier, no analytics, no third-party SDKs, no tracking."] },
      { h: "8. Deletion", body: ["Deleting the app removes every roll record, setting and undeveloped frame inside the app.", "Photos already saved to your library are yours and remain. Delete them in the Photos app if you wish.", "Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "9. Children", body: ["Chalna is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "10. Changes", body: ["This policy will be updated to match the actual app before release. Any change is posted on this page with a new effective date."] },
      { h: "11. Contact", body: [`${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function ChalnaPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/chalna" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 찰나" : "← Chalna"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">🎞️</span><span className="text-lg font-semibold tracking-tight text-[#D98E3F]">{t.app}</span></div>
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
