import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** Packly 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "packly",
  name: "Packly",
  accent: "#5B8DEF",
  tagline: { ko: "여행은 설레게, 짐은 간단하게.", en: "Pack smart. Travel light." },
  intro: {
    ko: "Packly는 목적지·날짜·동행·활동만 고르면 날씨를 반영한 준비물 목록을 바로 만들어 주는 여행 준비 앱입니다. 항목마다 왜 추천했는지 이유가 붙고, 함께 가는 사람을 추가해 담당을 나눌 수 있습니다. 계정도 로그인도 없고, 목록은 이 기기 안에만 저장됩니다.",
    en: "Packly turns a destination, dates, companions and activities into a weather-aware packing list in minutes. Every item says why it was suggested, and you can add travel companions to split who packs what. No account, no sign-in; your lists stay on your device.",
  },
  features: [
    { icon: "🌦", title: { ko: "날씨를 반영한 추천", en: "Weather-aware suggestions" }, desc: { ko: "출발일 예보의 기온·강수·자외선에 맞춰 항목을 고르고 이유를 보여줍니다.", en: "Picks items from the forecast for your dates and shows the reason." } },
    { icon: "✅", title: { ko: "체크와 진행률", en: "Check-off & progress" }, desc: { ko: "전체 진행률과 남은 필수 항목이 바로 보입니다.", en: "Overall progress and what's still essential, at a glance." } },
    { icon: "👥", title: { ko: "함께 가는 사람", en: "Travel companions" }, desc: { ko: "동행자를 추가하고 항목마다 담당자를 정합니다.", en: "Add companions and assign who packs each item." } },
    { icon: "🌐", title: { ko: "한국어 · English · 日本語", en: "KO · EN · JA" }, desc: { ko: "앱 안에서 바로 언어와 단위를 바꿀 수 있습니다.", en: "Switch language and units inside the app." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-09", status: "planned",
      notes: {
        ko: ["첫 출시 준비 중. 여행 생성 4단계, 규칙 기반 준비물 생성과 추천 이유, 날씨 반영(Open-Meteo)", "목록 편집·체크·진행률, 함께 가는 사람과 담당자 지정, 출발 D-7·D-2·당일 알림", "한국어·영어·일본어, 도시 99곳 오프라인 검색, 계정·서버 없음"],
        en: ["First release in preparation: 4-step trip setup, rule-based packing list with reasons, weather from Open-Meteo", "Editing, check-off and progress, travel companions with assignments, reminders at D-7, D-2 and departure day", "Korean, English and Japanese, 99 cities searchable offline, no account or server"],
      },
    },
  ],
};

export default function PacklyPage() {
  return <AppOverview app={app} />;
}
