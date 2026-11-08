import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** 꾸준 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "kkujun",
  appStore: "https://apps.apple.com/kr/app/id6816464730",
  name: "꾸준 · Kkujun",
  accent: "#2F9E6B",
  tagline: { ko: "몇 가지 습관, 하루 한 번의 탭.", en: "A few habits, one tap a day." },
  intro: {
    ko: "꾸준은 하루 한 번의 탭만 바라는 습관 앱입니다. 습관은 스무 개가 아니라 몇 개만 고르고, 한 일은 탭 한 번으로 표시합니다. 이어진 날은 연속 기록으로 쌓이고, 하루를 놓치면 다음 날 딱 한 번 ‘되살리기’로 이어 줍니다 — Kamusta·데일리 텐과 같은 규칙입니다. 습관마다 원하는 시각에 알림을 두고, 홈 화면 위젯에서 앱을 열지 않고 바로 체크하며, 월간 격자에서 한 달이 한눈에 들어옵니다. 계정·광고·분석 도구가 없는 무료 앱이고, 인터넷을 쓰지 않으며 모든 기록은 기기 안에 있습니다.",
    en: "Kkujun is a habit tracker that asks for one tap a day. Pick a few habits — not twenty — and check each one off when it is done. Days in a row stack up as a streak, and if you miss one, the next day offers a single repair, the same rule as Kamusta and Daily Ten. Each habit can have its own reminder at the time you choose, the Home Screen widget lets you check a habit without opening the app, and a monthly grid shows the month at a glance. Free, with no account, no ads and no analytics; it never uses the internet, and everything stays on the device.",
  },
  features: [
    { icon: "✅", title: { ko: "하루 한 번의 탭", en: "One tap a day" }, desc: { ko: "홈에는 오늘의 습관이 큼직한 타일로 놓입니다. 했으면 한 번 탭, 잘못 눌렀으면 다시 한 번. 메모도 점수도 묻지 않습니다.", en: "Home shows today's habits as big tiles. Done? Tap once. Tapped by mistake? Tap again. No notes, no ratings, nothing else to fill in." } },
    { icon: "🌱", title: { ko: "목록이 아니라 몇 개", en: "A few, not a list" }, desc: { ko: "한 번에 다섯 개까지만 둡니다. 새 습관을 넣으려면 하나를 보내야 합니다. 적어야 매일 이어집니다.", en: "Up to five habits at a time. To add a sixth you retire one. Keeping it small is what keeps it daily." } },
    { icon: "🔥", title: { ko: "연속 기록과 한 번의 되살리기", en: "Streaks with one repair" }, desc: { ko: "습관마다 예정된 요일에 이어진 날이 🔥로 쌓입니다. 하루 놓치면 다음 날 ‘되살리기’를 한 번 쓸 수 있고, 쓰고 나면 예정된 날 7번을 더 채워야 다시 생깁니다.", en: "Each habit keeps its own 🔥 count over its scheduled days. Miss one and the next day offers a single repair; after using it, seven more check-ins on scheduled days bring it back." } },
    { icon: "🔔", title: { ko: "습관마다 알림", en: "A reminder per habit" }, desc: { ko: "‘물 마시기 오전 9시, 스트레칭 밤 10시’처럼 습관마다 다른 시각. 쉬는 요일에는 울리지 않고, 이미 체크했으면 조용합니다.", en: "Water at 9 am, stretching at 10 pm — each habit gets its own time. Nothing rings on an off day, or once the habit is already checked." } },
    { icon: "📱", title: { ko: "위젯에서 바로 체크", en: "Check from the widget" }, desc: { ko: "iPhone은 홈 화면 작은 위젯(습관 하나와 🔥)과 중간 위젯(오늘 전부, 탭하면 바로 체크), 잠금화면 위젯 세 가지. Android는 크기를 바꿀 수 있는 홈 화면 위젯 하나에서 바로 체크합니다.", en: "On iPhone: a small Home Screen widget (one habit and its 🔥), a medium one (all of today, tap to check) and three Lock Screen widgets. On Android: one resizable Home Screen widget that checks with a tap." } },
    { icon: "📅", title: { ko: "월간 격자", en: "A monthly grid" }, desc: { ko: "습관마다 한 달이 칸으로 펼쳐집니다. 채워진 칸과 빈 칸, 되살린 날이 색으로 구분되고, 달성률 하나만 아래에 붙습니다. 지난 날은 격자에서 바로 고칩니다.", en: "Each habit unfolds into a month of squares — filled, empty and repaired days in their own colors, with one completion rate underneath. Past days can be fixed right in the grid." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-10-01", status: "released",
      notes: {
        ko: ["첫 출시. 습관 최대 다섯 개, 하루 한 번의 탭, 연속 기록과 한 번의 되살리기, 습관별 알림, 월간 격자와 달성률", "iPhone 홈 화면 위젯(작게·중간, 중간에서 바로 체크)과 잠금화면 위젯, Android 홈 화면 위젯. 설정에서 CSV 내보내기", "무료. 계정·광고·분석 없음, 인터넷을 쓰지 않고 기록은 기기 안에만. 한국어·영어"],
        en: ["First release: up to five habits, one tap a day, streaks with a single repair, per-habit reminders, a monthly grid with completion rate", "iPhone Home Screen widgets (small and medium, check from the medium one) and Lock Screen widgets; an Android Home Screen widget. CSV export in Settings", "Free. No account, ads or analytics; no internet use, records stay on the device. Korean and English"],
      },
    },
  ],
};

export default function KkujunPage() {
  return <AppOverview app={app} />;
}
