import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** 틈새 노트 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "teumsaenote",
  name: "틈새 노트 · Teumsae Note",
  accent: "#4FC3B0",
  tagline: { ko: "찍고, 말하고, 적어서 바로 저장.", en: "Snap it, say it, jot it down." },
  intro: {
    ko: "틈새 노트는 틈틈이 떠오르는 생각을 세 가지 방식으로 바로 붙잡아 두는 메모 앱입니다. 사진 속 글자를 뽑아내고, 말하면 받아 적고, 직접 적어도 됩니다. 메모는 이 기기와 나의 iCloud(개인 데이터베이스)에만 저장되어 내 iPhone·iPad끼리 동기화됩니다. 개발자 서버는 없고, 계정도 로그인도 광고도 없습니다.",
    en: "Teumsae Note catches passing thoughts three ways: lift text out of a photo, dictate as you speak, or type. Notes live on this device and in your own iCloud private database, syncing between your iPhone and iPad. There is no developer server, no account, no sign-in and no ads.",
  },
  features: [
    { icon: "📷", title: { ko: "촬영 스캔", en: "Scan" }, desc: { ko: "사진을 찍거나 앨범에서 골라 글자를 뽑아 메모로 저장합니다. 영수증, 책의 한 구절, 안내문이 그대로 글자가 됩니다.", en: "Take a photo or pick one from your library and lift the text into a note — receipts, a line from a book, a notice." } },
    { icon: "🎙", title: { ko: "음성 메모", en: "Voice" }, desc: { ko: "말하는 내용을 실시간으로 받아 적고, 원본 녹음도 함께 보관합니다.", en: "Dictate and watch the words appear; the original recording is kept alongside." } },
    { icon: "🏷", title: { ko: "자동 분류", en: "Auto tags" }, desc: { ko: "본문 키워드로 영수증/결제, 할 일, 독서/문구, 업무/아이디어, 학습 태그를 자동으로 붙입니다.", en: "Notes are tagged from their content: receipts, to-dos, reading quotes, work ideas, study." } },
    { icon: "🔒", title: { ko: "잠금과 위젯", en: "Lock and widget" }, desc: { ko: "Face ID로 메모를 보호하고, 홈 화면 위젯에서 최근 메모 3건을 바로 봅니다.", en: "Protect notes with Face ID and see your latest three on a Home Screen widget." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-09-26", status: "in-review",
      notes: {
        ko: ["첫 출시. 촬영 스캔(기기 내 글자 인식), 음성 메모(실시간 받아쓰기·원본 녹음 보관), 직접 작성", "자동 분류 태그, 읽어주기, Face ID 잠금, 홈 화면 위젯, 복사·PDF 내보내기", "iCloud 개인 데이터베이스 동기화, 계정·서버·광고·분석 없음"],
        en: ["First release: scan (on-device text recognition), voice notes (live dictation with the original recording kept), typed notes", "Auto tags, read-aloud, Face ID lock, Home Screen widget, copy and PDF export", "Sync through your iCloud private database; no account, server, ads or analytics"],
      },
    },
  ],
};

export default function TeumsaeNotePage() {
  return <AppOverview app={app} />;
}
