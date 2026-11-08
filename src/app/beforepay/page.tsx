import type { Metadata } from "next";
import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

export const metadata: Metadata = { title: "결제전 · Beforepay — Zuply", description: "구독료와 무료체험 종료일을 한곳에. 결제 전에 알려주는 구독 관리 앱, 카드 연결 없이 기기 안에만." };

/** 결제전 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "beforepay",
  appStore: "https://apps.apple.com/kr/app/id6816553051",
  name: "결제전 · Beforepay",
  accent: "#FFBE79",
  tagline: { ko: "구독료가 나가기 전에, 한 번 더 확인.", en: "A moment to decide before the next charge." },
  intro: {
    ko: "결제전은 구독료와 무료체험 종료일을 모아 보는 앱입니다. 영상·음악·클라우드·멤버십의 결제일을 기억하는 대신, 예정 금액과 알림을 한곳에서 관리합니다. 이번 달 실제로 나갈 금액과 월 환산 비용을 구분하고, 무료체험은 끝나기 전에 확인할 수 있게 합니다. 직접 등록 → 결제 전 알림 → 유지 또는 해지 기록으로 이어집니다. 결제전은 대신 해지하거나 결제하지 않고, 카드번호·계좌·은행 로그인을 묻지 않습니다. 계정·광고·분석 도구가 없는 무료 앱이고, 인터넷을 쓰지 않습니다.",
    en: "Beforepay keeps subscription costs and free-trial deadlines in one place. Instead of remembering billing dates for streaming, music, cloud storage and memberships, you see scheduled charges and get reminders. It separates the charges actually due this month from the monthly equivalent cost, and helps you review trials before they end. Add a plan, get a reminder, then record whether you kept or canceled it. Beforepay never cancels or pays for anything, and never asks for card numbers, bank accounts or bank logins. Free, with no account, ads or analytics, and it never uses the internet.",
  },
  features: [
    { icon: "📅", title: { ko: "다가오는 결제 한눈에", en: "See upcoming payments" }, desc: { ko: "서비스명, 금액, 결제 주기(매주·매월·매년·N개월마다)와 다음 결제일을 등록하면 가까운 결제부터 보여줍니다. 결제일이 지나면 다음 결제일로 넘어갑니다.", en: "Enter a service, amount, billing cycle (weekly, monthly, yearly or every N months) and next billing date to see the nearest charges first. Once a date passes, the next one is shown." } },
    { icon: "🔔", title: { ko: "결제 전에 미리 알림", en: "Get a heads-up" }, desc: { ko: "기본은 결제일 3일 전과 당일. 알림 시각은 앱 전체에 하나이고, 켜기·끄기와 며칠 전·당일 알림은 구독마다 바꿉니다.", en: "Three days before and on billing day by default. One reminder time for the whole app; on/off, lead days and the on-day reminder are set per subscription." } },
    { icon: "🎟️", title: { ko: "무료체험 종료일 관리", en: "Track trial deadlines" }, desc: { ko: "체험 종료일은 첫 유료 결제일로 계산하고, 내가 취소하기로 한 날짜는 따로 기록해 그 전에도 알려줍니다. 알림을 누르면 그 구독의 메모가 열립니다.", en: "The trial end date is treated as the first paid charge, and your own cancel-by date is recorded separately with its own reminders. Tapping a reminder opens that subscription's notes." } },
    { icon: "💸", title: { ko: "이번 달 나갈 금액", en: "Know this month’s total" }, desc: { ko: "이번 달 예정 결제와 월 환산 비용을 구분합니다. 연간 결제는 결제 월에 전액, 월 환산에는 12로 나눠 반영합니다. 여러 통화는 환율 없이 통화별 합계로 따로 보여줍니다.", en: "This month's scheduled charges and the monthly equivalent are kept apart. Yearly plans count in full in their billing month and as one-twelfth in the monthly equivalent. Several currencies are totaled per currency, with no exchange rates." } },
    { icon: "✅", title: { ko: "해지 여부까지 기록", en: "Keep track of cancellations" }, desc: { ko: "해지 페이지 링크와 메모를 저장하고, 서비스에서 직접 해지한 뒤 해지 완료로 표시합니다. 해지 기록에서 되돌릴 수 있습니다.", en: "Save a cancellation link and notes, cancel with the service yourself, then mark the plan canceled. You can undo it from the Canceled tab." } },
    { icon: "🔒", title: { ko: "계좌 연결 없이", en: "No bank connection" }, desc: { ko: "직접 입력하고 기기에만 보관합니다. 카드번호·계좌·은행 로그인을 받지 않고, 문자나 이메일을 읽지 않습니다. JSON 백업 내보내기·복원을 지원합니다.", en: "Manual entry, stored on the device only. No card numbers, bank accounts or bank logins, and no reading of texts or email. JSON backup export and restore." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-10-11", status: "released",
      notes: {
        ko: ["첫 출시. 구독 등록, 매주·매월·매년·N개월 주기, 결제 며칠 전과 당일 알림, 무료체험 취소할 날짜", "이번 달 예정 결제와 월 환산 비용, 여러 통화의 통화별 합계, 해지 기록과 되돌리기, JSON 백업 내보내기·복원", "무료. 계정·광고·분석 없음, 인터넷을 쓰지 않음. 해지·결제 대행 없음, 카드·계좌 정보를 받지 않음. 한국어·영어"],
        en: ["First release: subscriptions with weekly, monthly, yearly and every-N-months cycles, reminders before and on billing day, free-trial cancel-by dates", "This month's charges vs monthly equivalent, per-currency totals, cancellation records with undo, JSON backup export and restore", "Free. No account, ads or analytics; no internet use. Never cancels or pays; asks for no card or bank details. Korean and English"],
      },
    },
  ],
};

export default function BeforepayPage() { return <AppOverview app={app} />; }
