"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 노나 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store 지원 URL. */
const CONTACT = "divekimdev@gmail.com";
const T = {
  ko: { lang: "EN", back: "← 노나 소개", tagline: "여행은 즐겁게, 계산은 깔끔하게.",
    intro: "노나는 여행 경비를 기록하고 정산안을 계산하는 앱입니다. 지출은 기기 안에 저장되고, 초대 링크를 만든 여행만 암호화되어 동기화됩니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["여행방 만들기", "이름·기간·기준 통화를 정하고 함께 가는 사람의 이름을 적습니다. 계정은 필요 없습니다."],
      ["지출 적기", "금액과 통화, 누가 냈는지, 누가 나눌지를 고릅니다. 균등·몫·비율·금액 지정 중 고를 수 있고, 입력 중에 각자 얼마인지 미리 보입니다. 1원 나머지를 누가 가져갔는지도 표시됩니다."],
      ["잔액 보기", "잔액 화면에서 사람별 받을 돈·보낼 돈이 막대로 보이고, 누르면 근거가 되는 지출까지 내려갑니다. 합계는 항상 0입니다."],
      ["정산하기", "정산 화면이 송금 횟수가 가장 적은 안을 제시합니다. 보낸 건은 체크하고, 실수하면 되돌릴 수 있습니다."],
      ["함께 기록하기", "여행방의 공유에서 초대 링크를 만들어 보내세요. 링크를 연 기기가 같은 여행에 기록합니다. 링크를 회수하면 더 이상 참여할 수 없습니다."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [["💱", "환율 근거", "환산 금액마다 어떤 환율·출처·시각을 썼는지 보여줍니다. 여행별 고정 환율은 소급 적용됩니다."], ["📤", "내보내기", "단톡방용 텍스트 요약과 멤버별 열이 있는 CSV."], ["🔁", "중복 알림", "같은 결제자·통화·금액이 60분 안에 두 번 들어오면 알려만 주고 지우지 않습니다."], ["🧳", "Packly 연동", "도시·기간·동행자를 Packly 로 넘기거나 받아옵니다. 금액은 넘기지 않습니다."]],
    supportTitle: "자주 묻는 질문",
    faq: [["환율이 오늘 것이 아니에요.", "환율은 하루 한 번 받아 오고, 인터넷이 없으면 앱에 내장된 스냅샷을 씁니다. 그 경우 화면에 그 사실이 표시됩니다. 여행 설정에서 고정 환율을 직접 정할 수도 있습니다."], ["초대 링크를 잃어버렸어요.", "여행방 공유 화면에서 다시 볼 수 있습니다. 링크에는 열쇠가 들어 있으니 아무에게나 보내지 마세요. 걱정되면 회수하고 새로 만드세요."], ["공유하지 않은 여행은 어디에 있나요?", "이 기기 안에만 있습니다. 기기를 잃으면 사라지니, 오래 남기고 싶은 여행은 초대 링크를 한 번 만들어 두거나 CSV 로 내보내 두세요."], ["멤버를 지울 수 없어요.", "지출에 엮인 멤버는 지울 수 없습니다. 그 사람이 낸·나눈 지출을 먼저 고치세요."], ["계산이 이상해요.", "어떤 여행이었는지와 함께 메일로 알려주세요. 계산 규칙은 공개된 명세대로이며 두 플랫폼이 같은 검증 벡터를 씁니다."]],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.", privacy: "개인정보 처리방침" },
  en: { lang: "한국어", back: "← Nona", tagline: "Enjoy the trip. Let Nona do the math.",
    intro: "Nona records trip expenses and works out the settlement. Expenses stay on the device; only trips you create an invite link for are synced, encrypted.",
    stepsTitle: "How it works",
    steps: [
      ["Create a trip", "Set a name, dates and base currency, then add the names of the people travelling. No account needed."],
      ["Log expenses", "Pick the amount and currency, who paid and who shares. Split equally, by shares, by percentage or by exact amounts; each person's part is previewed as you type, and any leftover unit shows who took it."],
      ["Check balances", "The Balances screen shows what each person is owed or owes, with a drill-down to the expenses behind it. The total is always zero."],
      ["Settle up", "The Settlement screen proposes the plan with the fewest transfers. Tick each transfer as it's made; undo if you slip."],
      ["Record together", "Create an invite link from the trip's Share screen. Any phone that opens it records into the same trip. Revoke the link to stop further joins."],
    ],
    featuresTitle: "What's inside",
    features: [["💱", "Rate provenance", "Every converted amount shows the rate, source and time it used. A fixed per-trip rate applies retroactively."], ["📤", "Export", "A paste-ready text summary and a CSV with a column per member."], ["🔁", "Duplicate warning", "The same payer, currency and amount within 60 minutes shows a banner — nothing is deleted for you."], ["🧳", "Works with Packly", "Pass city, dates and companions to or from Packly. Amounts never leave the app."]],
    supportTitle: "Frequently asked",
    faq: [["The exchange rate isn't today's.", "Rates are fetched once a day; offline, the app uses a built-in snapshot and says so on screen. You can also pin a fixed rate in trip settings."], ["I lost the invite link.", "Open the trip's Share screen to see it again. The link contains the key, so don't post it publicly; if in doubt, revoke it and create a new one."], ["Where are trips I never shared?", "Only on this device. If you lose the phone they are gone, so create an invite link once or export a CSV for trips you want to keep."], ["I can't delete a member.", "Members tied to expenses can't be removed. Edit the expenses they paid or share first."], ["A calculation looks wrong.", "Email us which trip it was. The rules follow a published spec and both platforms replay the same test vectors."]],
    contactTitle: "Contact", contactBody: "If your question isn't here, send us a mail and we'll get back to you.", privacy: "Privacy Policy" },
} as const;

export default function NonaGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en"); const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white"><div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="mb-10 flex items-center justify-between"><Link href="/nona" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link><button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button></div>
      <header className="mb-16"><AppIcon slug="nona" size={80} className="mb-6 shadow-lg shadow-black/40" /><h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Nona</h1><p className="mt-3 text-lg text-[#3FB08A]">{t.tagline}</p><p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p></header>
      <section className="mb-16"><h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2><ol className="space-y-5">{t.steps.map(([title, body], i) => (<li key={title} className="flex gap-4"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3FB08A]/20 text-sm font-semibold text-[#3FB08A]">{i + 1}</span><div><h3 className="mb-1 font-medium">{title}</h3><p className="text-[15px] leading-relaxed text-white/60">{body}</p></div></li>))}</ol></section>
      <section className="mb-16"><h2 className="mb-6 text-lg font-semibold tracking-tight">{t.featuresTitle}</h2><div className="grid gap-4 sm:grid-cols-2">{t.features.map(([icon, title, desc]) => (<div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="mb-2 text-2xl">{icon}</div><h3 className="mb-1 font-semibold">{title}</h3><p className="text-sm leading-relaxed text-white/55">{desc}</p></div>))}</div></section>
      <section className="mb-16"><h2 className="mb-6 text-lg font-semibold tracking-tight">{t.supportTitle}</h2><div className="space-y-5">{t.faq.map(([q, a]) => (<div key={q} className="border-l-2 border-[#3FB08A]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>))}</div></section>
      <section className="mb-16"><h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2><p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p><a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#3FB08A] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">{CONTACT}</a></section>
      <footer className="border-t border-white/10 pt-8 text-sm text-white/40"><Link href="/nona/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link></footer>
    </div></main>
  );
}
