import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** Kamusta 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "kamusta",
  name: "Kamusta",
  accent: "#FF9A6B",
  tagline: {
    ko: "한글 발음으로 배우는 필리핀어. 인터넷 없이, 언제 어디서나.",
    en: "Learn real Korean with romanized pronunciation and audio. Fully offline.",
  },
  intro: {
    ko: "Kamusta는 한국인은 필리핀어(타갈로그어)를, 필리핀인은 한국어를 배우는 양방향 학습 앱입니다. 상황별 회화 144문장, 단어 카드 188개, 발음·문법 기초 강의, 통합 사전이 앱 안에 모두 들어 있어 인터넷 없이 동작하고, 계정도 로그인도 없습니다.",
    en: "Kamusta is a two-way language app: Filipinos learn Korean, Koreans learn Filipino (Tagalog). 144 real-life phrases, 188 flashcards, pronunciation and grammar basics and a built-in dictionary all ship inside the app, so it works offline with no account and no sign-in.",
  },
  features: [
    { icon: "💬", title: { ko: "상황별 회화 144문장", en: "144 real-life phrases" }, desc: { ko: "한글 발음 표기와 음성으로 바로 따라 할 수 있습니다.", en: "Every phrase with romanized pronunciation and audio." } },
    { icon: "🃏", title: { ko: "단어 카드와 퀴즈", en: "Flashcards & quizzes" }, desc: { ko: "모르는 단어부터 다시 나오는 카드와 4지선다 퀴즈.", en: "Unknown words come back first; 4-choice quizzes keep your best score." } },
    { icon: "🔤", title: { ko: "발음·문법 기초", en: "Pronunciation & grammar basics" }, desc: { ko: "타갈로그 발음 규칙과 한글 자모를 단계별로.", en: "Hangul letters or Tagalog sounds, step by step." } },
    { icon: "📴", title: { ko: "100% 오프라인", en: "100% offline" }, desc: { ko: "학습 기록은 기기 안에만 남고 어디로도 전송되지 않습니다.", en: "Your progress stays on the device and is never uploaded." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-09-26", status: "in-review",
      notes: {
        ko: ["첫 출시. 회화 8개 상황 144문장, 단어 10개 주제 188개, 기초 단원, 통합 사전", "오늘의 문장과 연속 학습일, 매일 학습 알림", "한국어 ↔ 필리핀어 양방향 학습 방향", "광고·계정·서버 없음, 완전 오프라인"],
        en: ["First release: 144 phrases in 8 situations, 188 words in 10 topics, basics lessons, built-in dictionary", "Phrase of the day, study streak and daily reminder", "Two-way direction: Korean ↔ Filipino", "No ads, no account, no server — fully offline"],
      },
    },
  ],
};

export default function KamustaPage() {
  return <AppOverview app={app} />;
}
