"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 결제전 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store · Google Play 의 지원 URL 로 씁니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 결제전 소개",
    tagline: "구독료가 나가기 전에, 한 번 더 확인.",
    intro: "결제전은 구독료와 무료체험 종료일을 모아 보는 앱입니다. 직접 등록 → 결제 전 알림 → 유지 또는 해지 기록으로 이어집니다. 계정도 서버도 없고, 모든 기록은 이 기기 안에만 저장됩니다. 결제전은 대신 해지하거나 결제하지 않으며, 카드번호·계좌·은행 로그인을 묻지 않습니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["구독 추가", "‘결제 예정’ 탭의 +를 눌러 서비스명, 금액과 통화, 주기(매주·매월·매년·N개월마다), 다음 결제일, 분류를 입력합니다. 무료체험이라면 체험 종료일(첫 유료 결제일)과 내가 취소하기로 한 날짜를 적습니다. 해지 페이지 링크와 메모는 선택입니다."],
      ["알림 선택", "구독마다 알림 켜기·끄기, 며칠 전(0~14일, 기본 3일), 당일 알림을 정합니다. 알림 시각은 설정에서 앱 전체에 하나로 정합니다. 무료체험은 취소할 날짜 며칠 전과 당일에도 알려줍니다."],
      ["이번 달 확인", "‘이번 달’ 탭에서 그 달의 예정 결제(지난 결제·남은 결제)와 월 환산 비용을 따로 확인합니다. 체험 중인 구독을 유지하면 늘어날 비용도 따로 보여줍니다. 입력한 예상 금액이며 실제 카드 청구 내역과 자동 대조하지 않습니다."],
      ["유지 또는 해지 기록", "계속 쓰려면 구독 상세에서 ‘계속 쓸게요’를 누릅니다. 해지는 ‘해지 페이지 열기’로 저장한 링크를 열어 서비스에서 직접 진행한 뒤 ‘해지 완료로 표시’합니다. 해지한 구독은 예정 결제와 알림에서 빠지고 ‘해지 기록’으로 옮겨집니다."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["📅", "다가오는 결제 한눈에", "가까운 결제부터 보여주고, 결제일이 지나면 다음 결제일로 넘어갑니다. 31일처럼 없는 날은 그 달 마지막 날로 계산하고, 다음 달에는 원래 날짜로 돌아갑니다."],
      ["🔔", "결제 전에 미리 알림", "구독마다 며칠 전과 당일 알림을 켜고 끄고, 알림 시각은 설정에서 하나로 정합니다. 알림을 누르면 그 구독의 메모가 바로 열립니다."],
      ["🎟️", "무료체험 종료일 관리", "체험 종료일은 첫 유료 결제일로 보고 계산합니다. 서비스의 실제 취소 기한을 확인해 ‘취소할 날짜’를 따로 정해 두세요."],
      ["💸", "이번 달 나갈 금액", "연간 결제는 결제 월에 전액, 월 환산에는 12로 나눠 반영합니다. 매주는 그 달의 횟수만큼, N개월은 N으로 나눠 월 환산합니다."],
      ["💱", "여러 통화", "원화·달러·유로·엔 등 여러 통화로 입력할 수 있습니다. 환율을 추정하지 않고 통화별 합계를 따로 보여주며, 기본 통화가 맨 앞에 옵니다."],
      ["🔒", "계좌 연결 없이", "직접 입력하고 기기에만 보관합니다. 설정에서 JSON 백업 내보내기·복원과 모든 데이터 삭제를 할 수 있습니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["카드 내역을 자동으로 가져오나요?", "아니요. 직접 입력 방식입니다. 계좌·카드 연결을 하지 않고, 문자나 이메일을 읽지 않습니다."],
      ["앱에서 해지할 수 있나요?", "해지 대행은 하지 않습니다. ‘해지 페이지 열기’는 저장한 링크를 브라우저로 여는 것뿐입니다. 서비스에서 직접 해지한 뒤 ‘해지 완료로 표시’하세요."],
      ["31일 결제나 윤년은 어떻게 계산하나요?", "해당 일이 없는 달에는 그 달 마지막 날을 결제일로 표시하고, 이후에는 원래 날짜로 돌아갑니다. 2월 29일 연간 결제는 평년에 2월 28일로 봅니다. 실제 서비스의 결제 규칙이 다르면 다음 결제일을 직접 고칠 수 있습니다."],
      ["금액이 바뀌거나 무료체험이 끝나면요?", "바뀐 금액과 결제일은 직접 고쳐 주세요. 무료체험은 체험 종료일에 입력한 금액으로 첫 결제가 된다고 보고 계산하며, 실제 청구가 있었는지는 판단하지 않습니다."],
      ["달러로 내는 구독은 원화로 합쳐 주나요?", "아니요. 틀린 환율로 합계를 만들지 않도록 ‘189,480원 + US$9.99’처럼 통화별로 따로 보여줍니다. 기본 통화는 설정에서 바꿉니다."],
      ["알림 권한이 꼭 필요한가요?", "아니요. 거절해도 구독 목록과 합계는 그대로 쓸 수 있습니다. Android에서 ‘알람 및 리마인더’를 허용하지 않으면 알림이 몇 분 늦을 수 있습니다."],
      ["데이터는 어떻게 보관하나요?", "이 기기 안에만 저장합니다. 설정에서 JSON 파일로 내보내 다른 기기(iPhone·Android 모두)에서 복원할 수 있고, 모든 데이터를 한 번에 지울 수 있습니다. 기기 간 실시간 동기화는 없습니다."],
      ["광고나 결제가 있나요?", "없습니다. 무료이고 광고·인앱 구입·분석 도구가 없습니다."],
    ],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Beforepay",
    tagline: "A moment to decide before the next charge.",
    intro: "Beforepay keeps subscription costs and free-trial deadlines in one place: add a plan, get a reminder, then record whether you kept or canceled it. There is no account and no server; everything is stored only on this device. Beforepay never cancels or pays for anything, and never asks for card numbers, bank accounts or bank logins.",
    stepsTitle: "How it works",
    steps: [
      ["Add a plan", "Tap + on the Upcoming tab and enter the service name, amount and currency, cycle (weekly, monthly, yearly or every N months), next billing date and category. For a trial, enter the trial end date (the first paid charge) and your own cancel-by date. A cancellation link and notes are optional."],
      ["Set reminders", "For each subscription, turn reminders on or off, choose how many days before (0–14, 3 by default) and whether to be reminded on the day. The reminder time is one setting for the whole app, in Settings. Trials also get reminders before and on the cancel-by date."],
      ["Review this month", "The This Month tab separates the month's scheduled charges (paid and still to come) from the monthly equivalent cost, and shows what trials would add if you keep them. These are the estimates you entered, not reconciled card statements."],
      ["Record your decision", "Keeping a plan? Tap “I'll keep it” on its detail screen. To cancel, use “Open cancellation page” to open your saved link, cancel with the service yourself, then tap “Mark as canceled”. A canceled plan leaves upcoming charges and reminders and moves to the Canceled tab."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["📅", "See upcoming payments", "The nearest charges come first, and once a date passes the next one is shown. If a day such as the 31st does not exist in a month, the last day is used and the original day returns the month after."],
      ["🔔", "Get a heads-up", "Turn the before and on-day reminders on or off per subscription; the reminder time is set once in Settings. Tapping a reminder opens that subscription's notes."],
      ["🎟️", "Track trial deadlines", "The trial end date is treated as the first paid charge. Check the provider's real cancellation deadline and set your own cancel-by date."],
      ["💸", "Know this month’s total", "Yearly plans count in full in their billing month and as one-twelfth in the monthly equivalent. Weekly plans count each charge in the month; every-N-months plans are divided by N."],
      ["💱", "Several currencies", "Enter amounts in KRW, USD, EUR, JPY and more. No exchange rates are guessed: totals are shown per currency, with your default currency first."],
      ["🔒", "No bank connection", "Manual entry, stored on the device only. Settings has JSON backup export and restore, and delete all data."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Does it import card statements?", "No. Everything is entered by hand. There is no bank or card connection, and the app does not read texts or email."],
      ["Can it cancel a subscription?", "No. “Open cancellation page” only opens the link you saved in the browser. Cancel with the service yourself, then tap “Mark as canceled”."],
      ["What about the 31st or leap years?", "If a date does not exist in a month, the last day of that month is used, returning to the original day afterwards. A yearly February 29 charge falls on February 28 in other years. Edit the next date if your provider uses different rules."],
      ["What about price changes and trial conversions?", "Update changed prices and dates yourself. A trial is assumed to convert on its end date at the amount you entered; the app does not determine whether a charge actually occurred."],
      ["Does it convert dollars into won?", "No. To avoid totals built on a wrong rate, amounts are shown per currency, such as “₩189,480 + US$9.99”. Change the default currency in Settings."],
      ["Are notifications required?", "No. Your list and totals work without them. On Android, if “Alarms & reminders” is not allowed, reminders may arrive a few minutes late."],
      ["How is my data stored?", "Only on this device. Export a JSON file in Settings and restore it on another phone (iPhone or Android), or delete all data at once. There is no live sync between devices."],
      ["Are there ads or purchases?", "No. Beforepay is free, with no ads, in-app purchases or analytics."],
    ],
    contactTitle: "Contact", contactBody: "If your question isn't answered here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function BeforepayGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/beforepay" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <header className="mb-16">
          <AppIcon slug="beforepay" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">결제전 · Beforepay</h1>
          <p className="mt-3 text-lg text-[#FFBE79]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFBE79]/20 text-sm font-semibold text-[#FFBE79]">{i + 1}</span>
                <div><h3 className="mb-1 font-medium">{title}</h3><p className="text-[15px] leading-relaxed text-white/60">{body}</p></div>
              </li>
            ))}
          </ol>
        </section>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.featuresTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.features.map(([icon, title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 text-2xl">{icon}</div><h3 className="mb-1 font-semibold">{title}</h3><p className="text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.supportTitle}</h2>
          <div className="space-y-5">
            {t.faq.map(([q, a]) => (
              <div key={q} className="border-l-2 border-[#FFBE79]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#FFBE79] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/beforepay/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
