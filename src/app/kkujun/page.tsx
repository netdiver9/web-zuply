import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/**
 * 꾸준 소개 페이지 — 아직 만들지 않은 컨셉 앱입니다.
 * 개발이 시작되면 history 에 "planned" 항목 위로 실제 버전을 쌓고, 컨셉 문구를 걷어내세요.
 */
const app: AppOverviewData = {
  slug: "kkujun",
  name: "꾸준 · Kkujun",
  accent: "#2F9E6B",
  tagline: { ko: "몇 가지 습관, 하루 한 번의 탭.", en: "A few habits, one tap a day." },
  intro: {
    ko: "꾸준은 하루 한 번의 탭만 바라는 습관 앱입니다. 습관은 스무 개가 아니라 몇 개만 고르고, 한 일은 탭 한 번으로 표시합니다. 이어진 날은 연속 기록으로 쌓이고, 하루를 놓치면 다음 날 딱 한 번 ‘되살리기’로 이어 줍니다 — Kamusta·데일리 텐과 같은 방식입니다. 습관마다 원하는 시각에 알림을 두고, 홈 화면·잠금화면 위젯에 오늘의 체크와 연속 기록이 보이며, 월간 격자에서 한 달이 한눈에 들어옵니다. 계정·광고·분석 도구가 없고 모든 기록은 기기 안에 있습니다. 연속 기록과 알림 엔진은 형제 앱 Kamusta와 함께 씁니다. 컨셉 · 출시 예정 — 아직 스토어에 없습니다.",
    en: "Kkujun is a habit tracker that asks for one tap a day. Pick a few habits — not twenty — and check each one off when it is done. Days in a row stack up as a streak, and if you miss one, the next day offers a single repair, the same mechanic as Kamusta and Daily Ten. Each habit can have its own reminder at the time you choose, a Home Screen or Lock Screen widget shows today's checks and the streak, and a monthly grid shows the month at a glance. No account, no ads, no analytics; everything stays on the device. It shares its streak and reminder engine with Kamusta, its sibling app. Concept · coming soon — not yet on the App Store.",
  },
  features: [
    { icon: "✅", title: { ko: "하루 한 번의 탭", en: "One tap a day" }, desc: { ko: "홈에는 오늘의 습관이 큼직한 타일로 놓입니다. 했으면 한 번 탭, 잘못 눌렀으면 다시 한 번. 메모도 점수도 묻지 않습니다.", en: "Home shows today's habits as big tiles. Done? Tap once. Tapped by mistake? Tap again. No notes, no ratings, nothing else to fill in." } },
    { icon: "🌱", title: { ko: "목록이 아니라 몇 개", en: "A few, not a list" }, desc: { ko: "한 번에 다섯 개까지만 둡니다. 새 습관을 넣으려면 하나를 보내야 합니다. 적어야 매일 이어집니다.", en: "Up to five habits at a time. To add a sixth you retire one. Keeping it small is what keeps it daily." } },
    { icon: "🔥", title: { ko: "연속 기록과 한 번의 되살리기", en: "Streaks with one repair" }, desc: { ko: "습관마다 이어진 날이 🔥로 쌓입니다. 하루 놓치면 다음 날 ‘되살리기’를 한 번 쓸 수 있습니다. Kamusta와 같은 규칙입니다.", en: "Each habit keeps its own 🔥 count. Miss a day and the next day offers a single repair — the same rule as Kamusta." } },
    { icon: "🔔", title: { ko: "습관마다 알림", en: "A reminder per habit" }, desc: { ko: "‘물 마시기 오전 9시, 스트레칭 밤 10시’처럼 습관마다 다른 시각. 쉬는 요일에는 울리지 않고, 이미 체크했으면 조용합니다.", en: "Water at 9 am, stretching at 10 pm — each habit gets its own time. Nothing rings on an off day, or once the habit is already checked." } },
    { icon: "📱", title: { ko: "홈 화면·잠금화면 위젯", en: "Home and Lock Screen widgets" }, desc: { ko: "홈 화면 위젯에는 오늘의 체크가, 잠금화면 위젯에는 연속 기록이 보입니다. 앱을 열지 않아도 오늘이 어디쯤인지 압니다.", en: "The Home Screen widget shows today's checks; the Lock Screen widget shows the streak. You know where today stands without opening the app." } },
    { icon: "📅", title: { ko: "월간 격자", en: "A monthly grid" }, desc: { ko: "습관마다 한 달이 칸으로 펼쳐집니다. 채워진 칸과 빈 칸, 되살린 날이 색으로 구분되고, 달성률 하나만 아래에 붙습니다.", en: "Each habit unfolds into a month of squares — filled, empty and repaired days in their own colors, with one completion rate underneath." } },
  ],
  history: [
    {
      version: "Concept", date: "2026-09-26", status: "planned",
      notes: {
        ko: ["컨셉 공개. 습관 최대 다섯 개, 하루 한 번의 탭, 연속 기록과 한 번의 되살리기, 습관별 알림, 홈 화면·잠금화면 위젯, 월간 격자", "계정·광고·분석 없음, 기록은 기기 안에만. 연속 기록·알림 엔진은 Kamusta와 공유", "출시 시기는 미정이며 내용은 개발 중 바뀔 수 있습니다"],
        en: ["Concept published: up to five habits, one tap a day, streaks with a single repair, per-habit reminders, Home Screen and Lock Screen widgets, a monthly grid", "No account, ads or analytics; records stay on the device. Streak and reminder engine shared with Kamusta", "No release date yet; details may change during development"],
      },
    },
  ],
};

export default function KkujunPage() {
  return <AppOverview app={app} />;
}
