"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Packly 개인정보 처리방침. App Store Connect / Play Console 의 개인정보처리방침 URL.
 * 사실관계: 계정·서버·광고·분석 전송 없음. 네트워크는 Open-Meteo 예보 조회(도시 좌표만 전송)뿐.
 * 여행·목록·설정·이벤트 로그는 기기에만 저장. 알림은 로컬 예약.
 */

const EFFECTIVE = "2026-09-26";
const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", app: "Packly", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "Packly는 여행 준비물 목록을 만들어 주는 앱입니다. 회원가입이 없고 서버도 없습니다. 여행과 목록은 이용자의 기기 안에만 저장되며, 그 밖의 개인정보는 받지 않습니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 위치 권한도 요청하지 않습니다.", "**여행과 목록** — 목적지, 날짜, 동행·활동 선택, 준비물 항목, 체크 상태, 메모, 함께 가는 사람의 이름, 앱 설정. 모두 기기 안에만 저장되며 어디로도 전송되지 않습니다."] },
      { h: "2. 날씨 예보 조회", body: ["출발일 예보를 가져오기 위해 **Open-Meteo**(open-meteo.com)에 이용자가 고른 **도시의 좌표와 날짜**만 보냅니다. 이름이나 기기 식별자는 보내지 않습니다.", "인터넷 요청의 특성상 Open-Meteo 서버는 접속 IP 주소를 볼 수 있습니다. Open-Meteo의 처리 방침은 해당 사이트를 참고하세요."] },
      { h: "3. 광고와 추적", body: ["광고가 없고, 광고 식별자를 읽지 않으며, 이용자를 추적하지 않습니다.", "앱 안에서 사용 이벤트(예: 목록 생성)를 기록하지만 **기기 안에만 저장되고 외부로 전송되지 않습니다.** 여행지 이름·항목명·메모는 이 기록에 포함되지 않습니다."] },
      { h: "4. 알림", body: ["출발 알림은 기기 안에서 예약되는 로컬 알림이며 외부 서버를 거치지 않습니다. 알림 권한은 이용자가 켤 때만 요청합니다."] },
      { h: "5. 삭제", body: ["앱의 **설정 → 모든 데이터 삭제** 를 누르면 여행·목록·설정이 모두 지워집니다. 앱을 삭제해도 함께 삭제됩니다.", "서버에 저장된 정보가 없으므로 별도의 삭제 요청 절차가 필요 없습니다."] },
      { h: "6. 아동", body: ["Packly는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "7. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "8. 문의", body: [`${CONTACT}`] },
    ],
  },
  en: {
    lang: "한국어", app: "Packly", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Packly builds packing lists for your trips. There is no sign-up and no server. Trips and lists stay on your device, and we collect no other personal information.",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location, and we never request location permission.", "**Trips and lists** — destination, dates, companion and activity choices, packing items, check-offs, notes, companion names and app settings. All of it is stored only on your device and is never uploaded."] },
      { h: "2. Weather forecast", body: ["To fetch the forecast for your dates, the app sends only the **coordinates of the city you chose and the dates** to **Open-Meteo** (open-meteo.com). No name or device identifier is sent.", "As with any internet request, Open-Meteo's servers can see the connecting IP address. See Open-Meteo's own policy for how they handle it."] },
      { h: "3. Advertising and tracking", body: ["No ads, no advertising identifier, no tracking.", "The app records usage events (for example, a list being generated) but they are **stored only on the device and never transmitted.** Destination names, item names and notes are not part of these records."] },
      { h: "4. Notifications", body: ["Departure reminders are local notifications scheduled on the device; they never go through an external server. Permission is requested only when you turn reminders on."] },
      { h: "5. Deletion", body: ["In the app, **Settings → Delete all data** removes every trip, list and setting. Deleting the app removes it as well.", "Because nothing is stored on a server, no separate deletion request is needed."] },
      { h: "6. Children", body: ["Packly is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "7. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "8. Contact", body: [`${CONTACT}`] },
    ],
  },
} as const;

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (<>{parts.map((part, i) => part.startsWith("**") && part.endsWith("**") ? <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>)}</>);
}

export default function PacklyPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/packly" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← Packly" : "← Packly"}</Link>
            <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
          </div>
          <div className="mb-3 flex items-center gap-3"><span className="text-3xl">🧳</span><span className="text-lg font-semibold tracking-tight text-[#5B8DEF]">{t.app}</span></div>
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
