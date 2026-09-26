import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** Hueday 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "hueday",
  name: "Hueday",
  accent: "#D9A273",
  hasTerms: true,
  tagline: { ko: "무드를 먼저 고르고 찍는 카메라.", en: "A camera where you pick the mood first." },
  intro: {
    ko: "필터는 보통 찍고 나서 고릅니다. Hueday는 그 순서를 뒤집었습니다. 오늘 어떤 기분인지 먼저 고르면 카메라 화면에 이미 그 색이 입혀져 있어, 결과를 상상하지 않고 보면서 찍습니다. 찍은 사진은 날짜별로 쌓여 무드 다이어리가 됩니다. 서버도 계정도 광고도 없습니다.",
    en: "Filters usually come after the shot. Hueday flips that around: choose how today feels first, and the camera preview already carries that light, so you shoot what you see. Photos stack up by day into a mood diary. No server, no account, no ads.",
  },
  features: [
    { icon: "🎨", title: { ko: "9가지 무드", en: "Nine moods" }, desc: { ko: "Cozy · Fresh · Retro 무료, 나머지 6종은 Hueday Plus.", en: "Cozy, Fresh and Retro are free; six more with Hueday Plus." } },
    { icon: "📷", title: { ko: "보면서 찍기", en: "Shoot what you see" }, desc: { ko: "무드가 이미 적용된 화면에서 강도와 초점을 조절합니다.", en: "The mood is on the preview; set intensity and tap to focus." } },
    { icon: "📔", title: { ko: "무드 다이어리", en: "Mood diary" }, desc: { ko: "날짜별로 쌓이고, 그날 가장 많이 고른 무드가 그날의 색이 됩니다.", en: "Kept by day; the mood you chose most becomes the day's color." } },
    { icon: "🔒", title: { ko: "기기 안에만", en: "On-device only" }, desc: { ko: "사진과 기록은 어디로도 전송되지 않습니다.", en: "Photos and entries never leave your device." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-09-26", status: "in-review",
      notes: {
        ko: ["첫 출시. 무드 9종, 무드 먼저 고르는 카메라, 갤러리 불러오기", "편집: 무드·강도, 밝기·대비·채도·색온도 보정, 날짜 스탬프, 한 줄 메모", "무드 다이어리", "Hueday Plus: 월간·연간 구독(2주 무료 체험), 평생 이용권"],
        en: ["First release: nine moods, mood-first camera, gallery import", "Editor: mood and intensity, brightness/contrast/saturation/warmth, date stamp, one-line caption", "Mood diary", "Hueday Plus: monthly and yearly subscriptions (2-week free trial) or lifetime purchase"],
      },
    },
  ],
};

export default function HuedayPage() {
  return <AppOverview app={app} />;
}
