import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** 노나 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "nona",
  name: "노나 · Nona",
  accent: "#3FB08A",
  tagline: { ko: "여행은 즐겁게, 계산은 깔끔하게.", en: "Enjoy the trip. Let Nona do the math." },
  intro: {
    ko: "노나는 여행 경비를 결제자와 분담자 기준으로 기록하고, 여러 통화를 하나로 환산해 송금 횟수가 가장 적은 정산안을 계산해 주는 앱입니다. 초대 링크 하나로 여러 기기가 같은 여행에 기록하고, 기록은 기기에서 암호화되어 서버도 개발자도 내용을 볼 수 없습니다. 계정도 로그인도 없습니다.",
    en: "Nona records trip expenses by who paid and who shares them, converts multiple currencies into one, and works out the settlement with the fewest transfers. One invite link lets several phones log the same trip; records are encrypted on the device so neither the server nor the developer can read them. No account, no sign-in.",
  },
  features: [
    { icon: "🧾", title: { ko: "지출 기록과 분담", en: "Expenses & splits" }, desc: { ko: "균등·몫·비율·금액 지정. 합계가 안 맞으면 저장되지 않습니다.", en: "Equal, shares, percentages or exact amounts — parts must add up." } },
    { icon: "💱", title: { ko: "22개 통화", en: "22 currencies" }, desc: { ko: "지출 시점 환율을 함께 저장하고 여행별 고정 환율도 가능.", en: "Rate stored with each expense; pin a fixed rate per trip." } },
    { icon: "⚖️", title: { ko: "최소 송금 정산", en: "Fewest-transfer settlement" }, desc: { ko: "사람별 잔액과 근거 지출, 건별 완료 체크.", en: "Per-person balances with drill-down; tick transfers off." } },
    { icon: "🔐", title: { ko: "종단간 암호화 공유", en: "End-to-end encrypted sharing" }, desc: { ko: "초대 링크로 함께 기록. 내용은 기기 밖에서 읽을 수 없습니다.", en: "Record together by invite link; nothing readable leaves the device." } },
  ],
  history: [
    { version: "1.0", date: "2026-09", status: "planned",
      notes: { ko: ["첫 출시 준비 중. 지출 기록·분담 4방식, 22개 통화와 환율 스냅샷, 잔액과 최소 송금 정산", "초대 링크로 여러 기기 공동 기록(종단간 암호화), 텍스트 요약·CSV 내보내기", "한국어·영어·일본어, Packly 딥링크 연동"],
               en: ["First release in preparation: expense logging with 4 split methods, 22 currencies with rate snapshots, balances and minimum-transfer settlement", "Shared trips by invite link (end-to-end encrypted), text summary and CSV export", "Korean, English and Japanese; Packly deep-link integration"] } },
  ],
};

export default function NonaPage() { return <AppOverview app={app} />; }
