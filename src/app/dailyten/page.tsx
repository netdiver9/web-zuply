import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/**
 * 데일리 텐 소개 페이지 — 아직 만들지 않은 컨셉 앱입니다.
 * 개발이 시작되면 history 에 "planned" 항목 위로 실제 버전을 쌓고, 컨셉 문구를 걷어내세요.
 */
const app: AppOverviewData = {
  slug: "dailyten",
  name: "데일리 텐 · Daily Ten",
  accent: "#3F7BD9",
  tagline: { ko: "하루 열 문장, 5분. 내 목소리로 말하는 영어.", en: "Ten sentences a day, five minutes, in your own voice." },
  intro: {
    ko: "데일리 텐은 한국어 화자를 위한 영어 말하기 앱입니다. 매일 열 문장이 나오고, 원어민 음성을 듣고 바로 따라 말하면 내 목소리가 녹음되어 원음과 나란히 비교됩니다. 각 문장에는 ‘왜 이렇게 말하는지’를 한국어로 짚어 주는 뉘앙스 노트가 붙고, 흔들린 문장은 간격을 두고 다시 나옵니다. 한 세션은 5분, 연속 학습일은 Kamusta처럼 🔥로 쌓입니다. 레슨 팩은 내려받아 오프라인으로 쓰고, 계정은 없습니다. 컨셉 · 출시 예정 — 아직 스토어에 없습니다.",
    en: "Daily Ten is a spoken-English app for Korean speakers. Ten sentences arrive each day; you listen to a native recording, shadow it right away, and your own voice is recorded and lined up against the original. Every sentence carries a short Korean note on why it is said that way, and sentences you stumbled on come back on a spaced schedule. A session is five minutes, and streaks stack up like in Kamusta, its sibling app for Filipino. Lesson packs download for offline use; there is no account. Concept · coming soon — not yet on the App Store.",
  },
  features: [
    { icon: "🔟", title: { ko: "하루 열 문장", en: "Ten a day" }, desc: { ko: "출근길·카페·회의·전화처럼 실제로 쓰는 상황의 문장 열 개. 오늘치는 오늘만 열리고, 더 달라고 해도 주지 않습니다.", en: "Ten sentences people actually say — on the commute, at a café, in a meeting, on the phone. Today's ten open today; asking for more gets you nothing." } },
    { icon: "🎙️", title: { ko: "섀도잉과 내 목소리", en: "Shadow and compare" }, desc: { ko: "원음을 듣고 바로 따라 말하면 녹음됩니다. 두 파형을 나란히 놓고 번갈아 들으며 길이·리듬·강세가 어디서 어긋났는지 봅니다.", en: "Listen, repeat, and you are recorded. Two waveforms sit side by side; play them in turn and hear where length, rhythm and stress drift apart." } },
    { icon: "🇰🇷", title: { ko: "한국어 뉘앙스 노트", en: "Nuance, in Korean" }, desc: { ko: "‘Could you’와 ‘Can you’의 온도 차, ‘actually’가 살짝 방어적으로 들리는 이유 같은 것을 문장마다 한 단락으로.", en: "Why “Could you” lands softer than “Can you”, why “actually” can sound defensive — one Korean paragraph per sentence." } },
    { icon: "🔁", title: { ko: "간격 복습", en: "Spaced review" }, desc: { ko: "흔들린 문장은 1일·3일·7일·21일 뒤에 다시 나옵니다. 매일 열 문장 중 두셋이 복습 문장입니다.", en: "Shaky sentences return after 1, 3, 7 and 21 days. Two or three of each day's ten are reviews." } },
    { icon: "⏱️", title: { ko: "5분 세션", en: "A five-minute session" }, desc: { ko: "문장당 30초쯤. 타이머는 없지만 열 문장이 끝나면 세션도 끝납니다.", en: "About thirty seconds a sentence. No timer, but when the ten are done the session is done." } },
    { icon: "🔥", title: { ko: "연속 학습일", en: "Streaks" }, desc: { ko: "Kamusta처럼 이어서 학습한 날이 🔥로 쌓입니다. 하루 건너뛰면 다음 날 ‘되살리기’로 한 번 봐줍니다.", en: "Days in a row stack up as 🔥, just like Kamusta. Miss one and the next day offers a single repair." } },
  ],
  history: [
    {
      version: "Concept", date: "2026-09-26", status: "planned",
      notes: {
        ko: ["컨셉 공개. 하루 열 문장, 섀도잉 녹음·비교, 한국어 뉘앙스 노트, 간격 복습, 5분 세션, 연속 학습일", "레슨 팩 오프라인 내려받기, 계정·광고·분석 없음", "출시 시기는 미정이며 내용은 개발 중 바뀔 수 있습니다"],
        en: ["Concept published: ten sentences a day, shadowing with recording and comparison, Korean nuance notes, spaced review, five-minute sessions, streaks", "Offline lesson packs; no account, ads or analytics", "No release date yet; details may change during development"],
      },
    },
  ],
};

export default function DailyTenPage() {
  return <AppOverview app={app} />;
}
