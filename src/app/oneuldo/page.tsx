import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** 오늘도 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "oneuldo",
  name: "오늘도 · Oneuldo",
  accent: "#F4A261",
  tagline: { ko: "기분 하나, 한 줄이면 충분해요.", en: "A mood and one line. That's it." },
  intro: {
    ko: "오늘도는 기분 이모지 하나와 한 줄(100자)로 하루를 남기는 일기 앱입니다. 길게 쓰지 않아도 되니 매일 이어집니다. 달력이 그날의 기분 색으로 채워지고, 매달 회고 카드가 만들어집니다. 계정도 서버도 없고, 모든 기록은 이 기기 안에만 저장됩니다.",
    en: "Oneuldo keeps each day as one mood emoji and one line of up to 100 characters. Nothing long to write, so it actually continues. The calendar fills with the color of each day's mood and a recap card is made for you every month. No account, no server; every entry stays on this device.",
  },
  features: [
    { icon: "✏️", title: { ko: "오늘 쓰기", en: "Today" }, desc: { ko: "기분 5단계 중 하나를 고르고 한 줄을 적습니다. 지난 날짜도 보완할 수 있습니다.", en: "Pick one of five moods and write a line. Past days can be filled in later." } },
    { icon: "🗓", title: { ko: "무드 캘린더", en: "Mood calendar" }, desc: { ko: "달력이 그날의 기분 색으로 채워져 한 달이 한눈에 보입니다.", en: "The calendar fills with each day's mood color — a whole month at a glance." } },
    { icon: "🖼", title: { ko: "월간 회고 카드", en: "Monthly recap card" }, desc: { ko: "기록한 날, 가장 많은 기분, 최고의 하루, 기분 분포, 최장 연속 기록을 카드로 만들어 이미지로 공유합니다.", en: "Days recorded, most frequent mood, best day, mood distribution and longest streak, rendered as a shareable image." } },
    { icon: "🔒", title: { ko: "리마인더와 잠금", en: "Reminder and lock" }, desc: { ko: "원하는 시각에 하루 한 번 알림. Face ID나 기기 암호로 일기를 잠급니다.", en: "One reminder a day at the time you choose. Lock the diary with Face ID or your passcode." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-09-26", status: "in-review",
      notes: {
        ko: ["첫 출시. 한 줄 일기와 기분 5단계, 무드 캘린더, 월간 회고 카드 공유, 스트릭", "하루 한 번 리마인더, Face ID·기기 암호 잠금, 텍스트·CSV 내보내기", "한국어·영어, 계정·서버·광고·분석 없음"],
        en: ["First release: one-line diary with five moods, mood calendar, shareable monthly recap card, streaks", "Daily reminder, Face ID / passcode lock, export as text or CSV", "Korean and English; no account, server, ads or analytics"],
      },
    },
  ],
};

export default function OneuldoPage() {
  return <AppOverview app={app} />;
}
