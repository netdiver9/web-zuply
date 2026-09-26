"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 노나 개인정보 처리방침. 사실관계: 계정·광고·분석 전송 없음. 기록은 기기 저장. 초대 링크를 만든 여행만
 * 기기에서 AES-256-GCM 으로 암호화된 항목이 동기화 서버(nona-api.zuply.co.kr)에 저장되며 서버·개발자는 복호화 불가.
 * 환율은 open.er-api.com 에서 조회(개인정보 미전송).
 */
const EFFECTIVE = "2026-09-26";
const CONTACT = "divekimdev@gmail.com";
const T = {
  ko: { lang: "EN", app: "노나 · Nona", title: "개인정보 처리방침", updated: `시행일 ${EFFECTIVE}`,
    intro: "노나는 여행 경비를 기록하고 정산하는 앱입니다. 회원가입이 없고, 이름·이메일·전화번호를 받지 않습니다. 기록은 이용자의 기기에 저장되며, 공유한 여행의 기록은 기기에서 암호화된 뒤에만 서버를 거칩니다.",
    sections: [
      { h: "1. 받는 정보", body: ["이름, 이메일, 전화번호, 주소록, 위치 정보를 **받지 않습니다.** 계정이 없으므로 이용자를 식별하지 않습니다.", "**여행 기록** — 여행 이름·기간·기준 통화, 멤버 이름, 지출(금액·통화·결제자·분담·카테고리·메모), 정산 완료 상태, 앱 설정. 기본적으로 이 기기 안에만 저장됩니다."] },
      { h: "2. 함께 기록하기(동기화)", body: ["여행방에서 **초대 링크를 만든 경우에만** 그 여행의 기록이 동기화 서버(nona-api.zuply.co.kr)에 저장됩니다.", "기록은 기기에서 **AES-256-GCM 으로 암호화된 뒤** 전송됩니다. 복호화 열쇠는 초대 링크 안에만 있고 서버로 보내지지 않으므로, **서버 운영자도 개발자도 내용을 읽을 수 없습니다.** 서버에는 방 식별자, 쓰기 권한 확인값, 암호화된 바이트, 순번만 남습니다.", "초대 링크를 만들지 않은 여행은 기기를 떠나지 않습니다. 링크를 회수하면 이후 참여가 막히고, 마지막 기록 후 180일이 지난 방은 서버에서 삭제됩니다."] },
      { h: "3. 환율 조회", body: ["환율은 **open.er-api.com** 에서 하루 한 번 받아옵니다. 이 요청에는 개인정보나 여행 정보가 포함되지 않으며, 인터넷 요청의 특성상 해당 서비스는 접속 IP 주소를 볼 수 있습니다."] },
      { h: "4. 광고와 추적", body: ["광고가 없고, 광고 식별자를 읽지 않으며, 이용자를 추적하지 않습니다.", "앱 안에서 사용 이벤트를 기록하지만 **기기 안에만 저장되고 외부로 전송되지 않습니다.** 금액·멤버 이름·지출 이름·메모는 이 기록에 포함되지 않습니다."] },
      { h: "5. 삭제", body: ["앱의 **설정 → 모든 데이터 삭제** 로 기기의 기록을 지울 수 있습니다. 앱을 삭제해도 함께 삭제됩니다.", "공유한 여행은 여행방에서 **방 삭제** 를 하면 서버의 암호화된 기록도 즉시 삭제됩니다."] },
      { h: "6. 아동", body: ["노나는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다."] },
      { h: "7. 변경", body: ["이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다."] },
      { h: "8. 문의", body: [`${CONTACT}`] } ] },
  en: { lang: "한국어", app: "Nona", title: "Privacy Policy", updated: `Effective ${EFFECTIVE}`,
    intro: "Nona records and settles trip expenses. There is no sign-up, and we never ask for your name, email or phone number. Records live on your device; records of shared trips pass through our server only after being encrypted on the device.",
    sections: [
      { h: "1. What we collect", body: ["We **do not** collect your name, email, phone number, contacts or location. There are no accounts, so we cannot identify you.", "**Trip records** — trip name, dates and base currency, member names, expenses (amount, currency, payer, split, category, note), settlement status and app settings. By default they are stored only on this device."] },
      { h: "2. Recording together (sync)", body: ["Only when you **create an invite link** for a trip are that trip's records stored on our sync server (nona-api.zuply.co.kr).", "Records are **encrypted on the device with AES-256-GCM** before they are sent. The decryption key exists only inside the invite link and is never sent to the server, so **neither the server operator nor the developer can read them.** The server keeps a room identifier, a write-permission check value, the encrypted bytes and a sequence number.", "Trips without an invite link never leave the device. Revoking the link blocks further joins, and rooms untouched for 180 days are deleted from the server."] },
      { h: "3. Exchange rates", body: ["Rates are fetched once a day from **open.er-api.com**. The request carries no personal or trip data; as with any internet request, that service can see the connecting IP address."] },
      { h: "4. Advertising and tracking", body: ["No ads, no advertising identifier, no tracking.", "The app records usage events but they are **stored only on the device and never transmitted.** Amounts, member names, expense names and notes are never part of these records."] },
      { h: "5. Deletion", body: ["**Settings → Delete all data** removes the records on this device. Deleting the app does the same.", "For a shared trip, **Delete room** in the trip removes the encrypted records from the server immediately."] },
      { h: "6. Children", body: ["Nona is not directed at children under 14, and we do not knowingly collect their information."] },
      { h: "7. Changes", body: ["Any change is posted on this page with a new effective date."] },
      { h: "8. Contact", body: [`${CONTACT}`] } ] },
} as const;
function RichText({ text }: { text: string }) { const parts = text.split(/(\*\*[^*]+\*\*)/g); return (<>{parts.map((p, i) => p.startsWith("**") && p.endsWith("**") ? <strong key={i} className="font-semibold text-white">{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>)}</>); }
export default function NonaPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("en"); const t = T[lang];
  return (<main className="min-h-screen bg-[#0a0a0a] text-white"><div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
    <header className="mb-14"><div className="mb-8 flex items-center justify-between"><Link href="/nona" className="text-sm text-white/50 transition-colors hover:text-white">← Nona</Link><button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button></div>
      <div className="mb-3 flex items-center gap-3"><span className="text-3xl">➗</span><span className="text-lg font-semibold tracking-tight text-[#3FB08A]">{t.app}</span></div><h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h1><p className="mt-3 text-sm text-white/40">{t.updated}</p><p className="mt-8 text-[15px] leading-relaxed text-white/70">{t.intro}</p></header>
    <div className="space-y-12">{t.sections.map((s) => (<section key={s.h}><h2 className="mb-4 text-lg font-semibold tracking-tight">{s.h}</h2><ul className="space-y-3">{s.body.map((line, i) => <li key={i} className="text-[15px] leading-relaxed text-white/65"><RichText text={line} /></li>)}</ul></section>))}</div>
    <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-white/40"><p>{t.app} · Zuply · <a href={`mailto:${CONTACT}`} className="underline underline-offset-4 transition-colors hover:text-white">{CONTACT}</a></p></footer>
  </div></main>);
}
