import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** 데일리 텐 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "dailyten",
  appStore: "https://apps.apple.com/kr/app/id6816465364",
  name: "데일리 텐 · Daily Ten",
  accent: "#3F7BD9",
  tagline: { ko: "하루 열 문장, 5분. 내 목소리로 말하는 영어.", en: "Ten sentences a day, five minutes, in your own voice." },
  intro: {
    ko: "데일리 텐은 한국어 화자를 위한 영어 말하기 앱입니다. 매일 새 문장 열 개가 열리고, 기기의 영어 음성으로 듣고 바로 따라 말하면 내 목소리가 녹음되어 원음과 나란히 비교됩니다. 각 문장에는 ‘왜 이렇게 말하는지’를 한국어로 짚어 주는 뉘앙스 노트가 붙고, 흔들린 문장은 간격을 두고 다시 나옵니다. 한 세션은 5분, 연속 학습일은 Kamusta처럼 🔥로 쌓입니다. 세 팩 900문장이 모두 앱 안에 들어 있어 인터넷을 전혀 쓰지 않고, 계정·광고·결제가 없는 무료 앱입니다.",
    en: "Daily Ten is a spoken-English app for Korean speakers. Ten new sentences open each day; you listen to the device's English voice, shadow it right away, and your own voice is recorded and lined up against the original. Every sentence carries a short Korean note on why it is said that way, and sentences you stumbled on come back on a spaced schedule. A session is five minutes, and streaks stack up like in Kamusta, its sibling app for Filipino. All three packs — 900 sentences — are built into the app, so it never uses the internet. Free, with no account, ads or purchases.",
  },
  features: [
    { icon: "🔟", title: { ko: "하루 열 문장", en: "Ten a day" }, desc: { ko: "출근길·카페·회의·공항처럼 실제로 쓰는 상황의 새 문장 열 개. 오늘치는 오늘만 열리고, 더 달라고 해도 주지 않습니다.", en: "Ten new sentences people actually say — on the commute, at a café, in a meeting, at the airport. Today's ten open today; asking for more gets you nothing." } },
    { icon: "🎙️", title: { ko: "섀도잉과 내 목소리", en: "Shadow and compare" }, desc: { ko: "원음이 끝나는 순간 녹음이 시작됩니다. 두 파형을 나란히 놓고 번갈아 들으며 길이·리듬·강세가 어디서 어긋났는지 봅니다. 원음은 기기 안의 영어 음성(시스템 TTS)입니다.", en: "Recording starts the moment the original ends. Two waveforms sit side by side; play them in turn and hear where length, rhythm and stress drift apart. The original is the device's built-in English voice (system text-to-speech)." } },
    { icon: "🇰🇷", title: { ko: "한국어 뉘앙스 노트", en: "Nuance, in Korean" }, desc: { ko: "‘Could you’와 ‘Can you’의 온도 차 같은 것을 문장마다 한국어 한 줄로. 핵심 표현 두세 개도 함께.", en: "Why “Could you” lands softer than “Can you” — one Korean line per sentence, plus two or three key expressions." } },
    { icon: "🔁", title: { ko: "간격 복습", en: "Spaced review" }, desc: { ko: "‘아직’으로 표시한 문장은 1일·3일·7일·21일 뒤에 다시 나옵니다. 오늘 세션 앞머리에 복습이 최대 세 개 붙고, 나머지는 복습 탭에서.", en: "Sentences marked “Not yet” return after 1, 3, 7 and 21 days. Up to three reviews lead today's session; the rest wait in the Review tab." } },
    { icon: "📦", title: { ko: "세 팩, 900문장", en: "Three packs, 900 sentences" }, desc: { ko: "일상·직장·여행, 팩당 30일 300문장. 모두 앱에 들어 있어 내려받을 것이 없고, 인터넷 없이 됩니다.", en: "Everyday, Work and Travel, 30 days and 300 sentences each. All built in: nothing to download, no internet needed." } },
    { icon: "🔥", title: { ko: "연속 학습일", en: "Streaks" }, desc: { ko: "Kamusta처럼 이어서 학습한 날이 🔥로 쌓입니다. 하루 건너뛰면 다음 날 ‘되살리기’로 한 번 봐줍니다(30일에 한 번).", en: "Days in a row stack up as 🔥, just like Kamusta. Miss one and the next day offers a single repair (once every 30 days)." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-10-11", status: "released",
      notes: {
        ko: ["첫 출시. 하루 새 문장 열 개와 복습 최대 세 개, 섀도잉 녹음과 파형 비교, 한국어 뉘앙스 노트, 1·3·7·21일 간격 복습, 연속 학습일과 되살리기", "일상·직장·여행 세 팩 900문장을 앱에 내장, 원음은 기기의 영어 음성", "무료. 인터넷을 쓰지 않음, 계정·광고·결제·분석 없음. 한국어·영어 화면"],
        en: ["First release: ten new sentences a day plus up to three reviews, shadowing with waveform comparison, Korean nuance notes, 1-3-7-21 day spaced review, streaks with a repair", "Everyday, Work and Travel packs — 900 sentences — built in; the original is the device's English voice", "Free. No internet use; no account, ads, purchases or analytics. Korean and English interface"],
      },
    },
  ],
};

export default function DailyTenPage() {
  return <AppOverview app={app} />;
}
