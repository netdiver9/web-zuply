import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** 찰나 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "chalna",
  appStore: "https://apps.apple.com/kr/app/id6816465526",
  name: "찰나 · Chalna",
  accent: "#D98E3F",
  tagline: { ko: "스물네 컷, 하룻밤의 기다림.", en: "Twenty-four frames. One night to develop." },
  intro: {
    ko: "찰나는 필름 롤처럼 찍는 카메라입니다. 한 롤은 24컷, 한 롤에 룩은 하나뿐이라 찍는 동안 필터를 고르지 않습니다. 찍은 사진은 바로 볼 수 없고, 다음 날 아침 롤이 ‘현상’되어 날짜가 찍힌 밀착 인화지 한 장으로 돌아옵니다. 피드도 계정도 광고도 없고, 인터넷을 쓰지 않으며, 현상된 원본은 사진 보관함에 저장됩니다. Hueday와 같은 가족의 카메라입니다.",
    en: "Chalna shoots like a roll of film. A roll is 24 frames with one fixed look, so there is no filter picking while you shoot. You cannot see a shot right away; the roll develops the next morning and comes back as a dated contact sheet. No feed, no account, no ads, no internet, and the developed originals are saved to your photo library. A sibling of Hueday.",
  },
  features: [
    { icon: "🎞️", title: { ko: "한 롤에 24컷", en: "A roll of 24" }, desc: { ko: "롤을 끼우면 24컷이 주어집니다. 다 찍으면 롤이 닫히고, 찍는 동안 보이는 것은 남은 컷 수뿐입니다.", en: "Load a roll and you get 24 frames. When they are gone the roll closes; while shooting, the count in the corner is all you see." } },
    { icon: "🎨", title: { ko: "롤마다 룩 하나", en: "One look per roll" }, desc: { ko: "Daylight · Mono · Faded · Night · Cool · Grain 여섯 가지. 롤을 끼울 때 고르고, 롤이 끝날 때까지 바꾸지 않습니다.", en: "Six stocks: Daylight, Mono, Faded, Night, Cool and Grain. You choose when you load the roll, never mid-roll." } },
    { icon: "🌅", title: { ko: "다음 날 아침에 현상", en: "Develops the next morning" }, desc: { ko: "찍은 사진은 미리 볼 수 없습니다. 다음 날 아침 8시(6시~12시 사이 한 시간 단위로 변경), 현상이 끝났다는 알림 하나와 함께 롤이 열립니다.", en: "No peeking. At 8 the next morning (adjustable by the hour from 6 to noon) a single notification says the roll is developed, and it opens." } },
    { icon: "🗂️", title: { ko: "날짜가 찍힌 밀착 인화지", en: "A dated contact sheet" }, desc: { ko: "한 롤은 날짜와 룩 이름이 찍힌 밀착 인화지 한 장이 됩니다. 이미지로 공유하거나 A4·4×6으로 인쇄합니다.", en: "Each roll becomes one contact sheet stamped with the date and the stock. Share it as an image or print it at A4 or 4×6." } },
    { icon: "🔇", title: { ko: "찍을 땐 조용히", en: "Quiet while shooting" }, desc: { ko: "화면에는 프레임과 남은 컷 수뿐. 히스토그램도 필터 목록도 없이 찍는 데만 집중합니다.", en: "Just the frame and the count. No histogram, no filter tray — nothing but the shot." } },
    { icon: "🔒", title: { ko: "원본은 사진 앱에", en: "Originals go to Photos" }, desc: { ko: "현상되는 순간 원본은 사진 보관함의 ‘Chalna’ 앨범(Android는 Pictures/Chalna)에 저장되고, 앱에는 인화지용 1200px 사본만 남습니다. 위치 정보는 넣지 않습니다.", en: "At developing time the originals are saved to a “Chalna” album in Photos (Pictures/Chalna on Android), and the app keeps only a 1200 px copy for the contact sheet. No location is ever written." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-10-01", status: "released",
      notes: {
        ko: ["첫 출시. 24컷 롤, 여섯 가지 룩, 다음 날 아침 현상과 현상 알림, 날짜가 찍힌 밀착 인화지 공유와 A4·4×6 인쇄", "현상된 원본은 사진 보관함 ‘Chalna’ 앨범에 저장, 위치 정보 기록 없음", "계정·서버·광고·분석 없음, 인터넷을 쓰지 않음. 한국어·영어"],
        en: ["First release: 24-frame rolls, six looks, next-morning developing with one notification, dated contact sheets to share or print at A4 and 4×6", "Developed originals saved to a “Chalna” album in Photos; no location written", "No account, server, ads or analytics; no internet use. Korean and English"],
      },
    },
  ],
};

export default function ChalnaPage() {
  return <AppOverview app={app} />;
}
