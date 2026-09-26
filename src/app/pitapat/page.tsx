import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** 피타팟 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "pitapat",
  name: "피타팟 · Pitapat",
  accent: "#FF7EA0",
  tagline: { ko: "열면 3분, 웃음은 하루 종일.", en: "Three minutes to play. Laughing about it all day." },
  intro: {
    ko: "피타팟은 둘이서 하는 작은 게임방입니다. 이심전심·가위바위보·사목·질문 카드까지 18가지 미니게임을 폰 하나를 주고받으며 즐기거나, 각자 폰으로 만나서 즐깁니다. 계정도 광고도 없고, 4자리 방 코드가 로그인의 전부입니다. 두근(Dugeun)과 같은 가족의 앱입니다.",
    en: "Pitapat is a tiny game room for two. Eighteen mini games — Same Mind, Rock Paper Scissors, Four in a Row, Question Cards and more — played by passing one phone back and forth, or with a phone each. No account, no ads; a 4-digit room code is the whole login. A sibling of Dugeun.",
  },
  features: [
    { icon: "🎮", title: { ko: "18가지 미니게임", en: "18 mini games" }, desc: { ko: "이심전심 같은 마음 맞추기, 반응속도 같은 대결, 사목 같은 두뇌 게임 세 묶음.", en: "Three groups: in-sync games like Same Mind, face-offs like Fastest Tap, and brainwork like Four in a Row." } },
    { icon: "📱", title: { ko: "한 폰으로", en: "One phone" }, desc: { ko: "몰래 고르는 게임은 폰을 넘기기 전에 화면이 가려지고, 대결은 화면을 반으로 나눠 마주 앉아 합니다.", en: "Secret picks are covered before you hand the phone over; face-offs split the screen so you sit across from each other." } },
    { icon: "📶", title: { ko: "각자 폰으로", en: "A phone each" }, desc: { ko: "같은 방이면 인터넷 없이 iPhone끼리 바로 연결. 떨어져 있으면 4자리 코드 하나로 만납니다.", en: "In the same room, iPhones link directly with no internet. Apart, one 4-digit code brings you together." } },
    { icon: "💗", title: { ko: "오늘의 밸런스와 점수 카드", en: "Today's balance and score card" }, desc: { ko: "하루 한 번 두 폰에 똑같이 도착하는 밸런스 질문. 이심전심 결과는 한 장의 카드로 공유합니다.", en: "One balance prompt a day, identical on both phones. A Same Mind result becomes a single shareable card." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-09-26", status: "in-review",
      notes: {
        ko: ["첫 출시. 18가지 미니게임, 한 폰·각자 폰 두 가지 방식, 오늘의 밸런스와 공유 카드", "같은 방에서는 iPhone끼리 직접 연결, 떨어져 있으면 4자리 코드로 연결", "한국어·영어, 계정·광고·분석 없음"],
        en: ["First release: 18 mini games, one-phone and two-phone play, today's balance and a shareable score card", "iPhones link directly in the same room; a 4-digit code connects you when apart", "Korean and English; no account, ads or analytics"],
      },
    },
  ],
};

export default function PitapatPage() {
  return <AppOverview app={app} />;
}
