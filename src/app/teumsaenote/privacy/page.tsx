"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 틈새 노트 개인정보 처리방침. App Store Connect / Play Console 의 개인정보처리방침 URL.
 * 사실관계: 계정·개발자 서버·광고·분석 없음. 메모는 기기와 이용자의 iCloud 개인 데이터베이스(CloudKit)에 저장, 개발자 접근 불가.
 * 카메라·사진(글자 인식은 기기 내 Vision), 마이크·음성 인식(Apple Speech — 기기 미지원 시 Apple 서버), Face ID 잠금.
 */

const EFFECTIVE = "2026-09-26";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "틈새 노트 · Teumsae Note", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "틈새 노트는 사진·음성·직접 작성으로 메모를 남기는 앱입니다. 회원가입이 없고 개발자가 운영하는 서버도 없습니다. 메모는 이용자의 기기와 이용자 본인의 iCloud에만 저장되며, 개발자는 그 내용에 접근할 수 없습니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**메모** — 제목, 본문, 태그, 작성 시각, 음성 메모의 원본 녹음, 스캔한 원본 사진, 앱 설정. 이 기기와 아래 2항의 iCloud에만 저장되며 개발자에게 전송되지 않습니다."] },
      { h: "2. iCloud 동기화", body: ["메모는 Apple의 CloudKit을 통해 **이용자 본인의 iCloud 개인 데이터베이스**에 저장되어 같은 Apple 계정의 기기끼리 동기화됩니다. 이 데이터베이스는 이용자의 Apple 계정에 속하며, **개발자는 읽을 수도 접근할 수도 없습니다.**", "iCloud 동기화는 iOS 설정 → Apple 계정 → iCloud에서 틈새 노트를 끄면 중단되며, 그 뒤로는 메모가 이 기기에만 남습니다. iCloud의 처리 방침은 Apple의 개인정보 처리방침을 따릅니다."] },
      { h: "3. 카메라와 사진", body: ["촬영 스캔에서만 카메라 또는 사진 보관함을 사용하며, 권한은 그 기능을 처음 쓸 때 요청합니다.", "사진 속 글자 인식은 **기기 안에서(Apple Vision)** 이루어지며 사진이 외부로 전송되지 않습니다. 원본 사진은 메모와 함께 보관되고, 메모 안에서 따로 삭제할 수 있습니다."] },
      { h: "4. 마이크와 음성 인식", body: ["음성 메모에서만 마이크를 사용하며, 녹음 파일은 메모와 함께 보관되고 따로 삭제할 수 있습니다.", "받아쓰기는 Apple의 음성 인식(Speech) 기능을 씁니다. 기기가 지원하면 **기기 안에서** 처리되고, 지원하지 않으면 **음성이 Apple의 음성 인식 서버로 전송**되어 Apple의 개인정보 처리방침에 따라 처리됩니다. Android에서는 기기에 내장된 음성 인식 서비스(예: Google)가 같은 역할을 합니다.", "읽어주기는 기기의 음성 합성 기능을 사용하며 메모가 외부로 전송되지 않습니다."] },
      { h: "5. 잠금", body: ["잠금을 켜면 Face ID 또는 기기 암호로 앱을 엽니다. 인증은 운영체제가 처리하며, 앱은 성공·실패 결과만 받고 **생체 정보에는 접근할 수 없습니다.**"] },
      { h: "6. 위젯", body: ["홈 화면 위젯은 최근 메모 3건을 보여줍니다. 위젯이 읽는 데이터는 기기 안의 앱 공유 저장소에만 있습니다."] },
      { h: "7. 광고와 추적", body: ["광고가 없고, 광고 식별자를 읽지 않으며, 분석 도구도 없습니다. 이용자를 추적하지 않습니다."] },
      { h: "8. 삭제", body: ["메모는 앱 안에서 항목별로 삭제할 수 있으며, iCloud 동기화가 켜져 있으면 다른 기기에서도 함께 삭제됩니다.", "앱을 삭제하면 이 기기의 메모가 지워집니다. iCloud에 남은 데이터는 iOS 설정 → Apple 계정 → iCloud → 저장 공간 관리에서 이용자가 직접 지울 수 있습니다.", "개발자 서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "9. 아동", body: ["틈새 노트는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "10. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "11. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "틈새 노트 · Teumsae Note", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Teumsae Note captures notes from photos, voice or typing. There is no sign-up and no server run by the developer. Notes are stored only on your device and in your own iCloud, and the developer cannot access them.",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There is no account, so you are never identified.", "**Notes** — title, body, tags, timestamps, the original recording of a voice note, the original photo of a scan, and app settings. They are stored only on this device and in the iCloud database described in section 2, and are never sent to the developer."] },
      { h: "2. iCloud sync", body: ["Notes are saved through Apple's CloudKit to **your own iCloud private database** and synced between devices signed in to the same Apple Account. That database belongs to your Apple Account; **the developer can neither read nor access it.**", "Turning Teumsae Note off under Settings → Apple Account → iCloud stops sync, after which notes stay on this device only. iCloud itself is governed by Apple's privacy policy."] },
      { h: "3. Camera and photos", body: ["The camera or photo library is used only for Scan, and permission is requested the first time you use it.", "Text recognition runs **on the device (Apple Vision)**; photos are never uploaded. The original photo is kept with the note and can be removed separately inside the note."] },
      { h: "4. Microphone and speech recognition", body: ["The microphone is used only for voice notes. The recording is kept with the note and can be removed separately.", "Dictation uses Apple's Speech recognition. When the device supports it, recognition happens **on the device**; otherwise **audio is sent to Apple's speech recognition servers** and handled under Apple's privacy policy. On Android, the speech service built into the device (for example Google's) plays the same role.", "Read-aloud uses the device's speech synthesizer; notes are never transmitted."] },
      { h: "5. Lock", body: ["With the lock on, the app opens with Face ID or your device passcode. The operating system performs the check; the app receives only a pass/fail result and **cannot access biometric data.**"] },
      { h: "6. Widget", body: ["The Home Screen widget shows your latest three notes. The data it reads lives only in the app's shared storage on the device."] },
      { h: "7. Advertising and tracking", body: ["No ads, no advertising identifier, no analytics, no tracking."] },
      { h: "8. Deletion", body: ["Notes can be deleted one by one inside the app; with iCloud sync on, they are removed on your other devices as well.", "Deleting the app removes the notes on this device. Anything left in iCloud can be cleared yourself under Settings → Apple Account → iCloud → Manage Storage.", "Because nothing is stored on a developer server, no separate deletion request is needed."] },
      { h: "9. Children", body: ["Teumsae Note is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "10. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "11. Contact", body: [`${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function TeumsaeNotePrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/teumsaenote" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 틈새 노트" : "← Teumsae Note"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">🗒️</span><span className="text-lg font-semibold tracking-tight text-[#4FC3B0]">{t.app}</span></div>
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
