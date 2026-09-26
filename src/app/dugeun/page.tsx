import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** 두근 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "dugeun",
  name: "두근 · Dugeun",
  accent: "#FF8FA3",
  tagline: { ko: "휴대폰을 열 때마다 둘만의 순간이 먼저 보이도록.", en: "So the moments you share are the first thing you see." },
  intro: {
    ko: "두근은 가까운 한 사람에게만 사진을 보내는 앱입니다. 보낸 사진은 상대의 홈 화면 위젯에 바로 뜹니다. 좋아요도, 팔로워도, 끝없는 피드도 없습니다. Apple로 로그인 한 번이면 시작하고, 오가는 것은 두 사람 사이에만 남습니다.",
    en: "Dugeun sends photos to one person close to you, and they appear right on their Home Screen widget. No likes, no followers, no endless feed. Sign in once with Apple, and what passes between you stays between you.",
  },
  features: [
    { icon: "📷", title: { ko: "사진 위젯", en: "Photo widget" }, desc: { ko: "찍어서 보내면 상대 홈 화면에 바로 뜹니다.", en: "Take a photo and it lands on their Home Screen." } },
    { icon: "💗", title: { ko: "D-Day", en: "D-Day" }, desc: { ko: "함께한 날과 다가오는 기념일을 세어줍니다.", en: "Counts your days together and what's coming up." } },
    { icon: "🥰", title: { ko: "오늘의 감정과 질문", en: "Mood & question of the day" }, desc: { ko: "기분을 한 번의 탭으로, 질문은 매일 하나씩.", en: "Share how you feel with one tap; one question a day." } },
    { icon: "🔒", title: { ko: "둘만", en: "Just the two of you" }, desc: { ko: "공개 지표 없이 둘 사이에서만 오갑니다.", en: "No public counts. Nothing leaves the pair." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-09", status: "planned",
      notes: {
        ko: ["첫 출시 준비 중. 사진 위젯, D-Day, 오늘의 감정·상태, 오늘의 질문, 타임라인과 이모지 반응", "Apple 로그인과 6자리 초대 코드로 연결, 신고·연결 해제·계정 삭제"],
        en: ["First release in preparation: photo widget, D-Day, today's mood and status, question of the day, timeline with emoji reactions", "Sign in with Apple, 6-character invite code pairing, report / disconnect / delete account"],
      },
    },
  ],
};

export default function DugeunPage() {
  return <AppOverview app={app} />;
}
