import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** 담다 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "damda",
  name: "담다 · Damda",
  accent: "#E8607A",
  tagline: { ko: "소중한 날을 가장 가까이에.", en: "Keep your special days close." },
  intro: {
    ko: "담다는 디데이와 기념일을 잠금화면·홈 화면 위젯에 담아두는 앱입니다. 제목과 날짜만 넣으면 카드가 바로 만들어지고, 앱을 열지 않아도 가장 자주 보는 화면에서 남은 날과 지난 날을 확인합니다. 계정도 서버도 없이, 모든 날짜는 내 기기 안에만 있습니다.",
    en: "Damda puts countdowns and anniversaries on your Lock Screen and Home Screen widgets. Type a title and pick a date, and the card is ready; you see how many days are left — or have passed — on the screen you look at most, without opening the app. No account, no server; every date stays on your device.",
  },
  features: [
    { icon: "📆", title: { ko: "잠금화면 + 홈 화면 위젯", en: "Lock Screen + Home Screen widgets" }, desc: { ko: "잠금화면 3종(한 줄·원형·직사각형)과 홈 화면 3종. 날짜 하나를 크게, 또는 가까운 날짜 여러 개를 목록으로.", en: "Three Lock Screen widgets (inline, circular, rectangular) and three Home Screen sizes. One date big, or a list of the nearest dates." } },
    { icon: "🔢", title: { ko: "정확한 날짜 계산", en: "Accurate day math" }, desc: { ko: "D-day / D+day, 첫날을 1일로 세기, 매년 반복, 2월 29일 처리까지. 시간대가 바뀌어도 흔들리지 않습니다.", en: "D-day and D+day, count the first day as day 1, repeat every year, a clear rule for February 29. Stays correct across time zones." } },
    { icon: "🔔", title: { ko: "알림", en: "Reminders" }, desc: { ko: "30일 전, 7일 전, 1일 전, 당일. 원하는 시각에 알려드립니다.", en: "30 days, 7 days, 1 day before, and on the day, at the time you choose." } },
    { icon: "🎨", title: { ko: "나만의 꾸미기", en: "Make it yours" }, desc: { ko: "Milk, Rose, Navy, Forest, Mono, Photo 6가지 테마와 직접 고른 사진. 미리보기가 실제 위젯과 똑같습니다.", en: "Six themes — Milk, Rose, Navy, Forest, Mono, Photo — plus your own photo. The preview looks exactly like the real widget." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-09-26", status: "in-review",
      notes: {
        ko: ["첫 출시. 잠금화면·홈 화면 디데이 위젯, 매년 반복 기념일, 다가오는 기념일 미리보기, 알림", "6가지 테마와 사진 꾸미기, JSON 백업 내보내기·가져오기, Damda Pro(1회 구입)", "계정·서버·광고·분석 없음"],
        en: ["First release: Lock Screen and Home Screen D-day widgets, yearly anniversaries, upcoming milestones, reminders", "Six themes and photo decoration, JSON backup export and import, Damda Pro (one-time purchase)", "No account, server, ads or analytics"],
      },
    },
  ],
};

export default function DamdaPage() {
  return <AppOverview app={app} />;
}
