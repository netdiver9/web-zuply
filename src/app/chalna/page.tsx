import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/**
 * 찰나 소개 페이지 — 아직 만들지 않은 컨셉 앱입니다.
 * 개발이 시작되면 history 에 "planned" 항목 위로 실제 버전을 쌓고, 컨셉 문구를 걷어내세요.
 */
const app: AppOverviewData = {
  slug: "chalna",
  name: "찰나 · Chalna",
  accent: "#D98E3F",
  tagline: { ko: "스물네 컷, 하룻밤의 기다림.", en: "Twenty-four frames. One night to develop." },
  intro: {
    ko: "찰나는 필름 롤처럼 찍는 카메라입니다. 한 롤은 24컷, 한 롤에 룩은 하나뿐이라 찍는 동안 필터를 고르지 않습니다. 찍은 사진은 바로 볼 수 없고, 다음 날 아침 롤이 ‘현상’되어 날짜가 찍힌 밀착 인화지 한 장으로 돌아옵니다. 피드도 계정도 없고, 사진은 iPhone 사진 보관함에 그대로 남습니다. Hueday와 같은 가족의 카메라입니다. 컨셉 · 출시 예정 — 아직 스토어에 없습니다.",
    en: "Chalna shoots like a roll of film. A roll is 24 frames with one fixed look, so there is no filter picking while you shoot. You cannot see a shot right away; the roll develops the next morning and comes back as a dated contact sheet. No feed, no account, and your photos stay in the Photos library. A sibling of Hueday. Concept · coming soon — not yet on the App Store.",
  },
  features: [
    { icon: "🎞️", title: { ko: "한 롤에 24컷", en: "A roll of 24" }, desc: { ko: "롤을 끼우면 24컷이 주어집니다. 다 찍으면 롤이 닫히고, 찍는 동안 보이는 것은 남은 컷 수뿐입니다.", en: "Load a roll and you get 24 frames. When they are gone the roll closes; while shooting, the count in the corner is all you see." } },
    { icon: "🎨", title: { ko: "롤마다 룩 하나", en: "One look per roll" }, desc: { ko: "Daylight · Mono · Faded · Night · Cool · Grain 여섯 가지. 롤을 끼울 때 고르고, 롤이 끝날 때까지 바꾸지 않습니다.", en: "Six stocks: Daylight, Mono, Faded, Night, Cool and Grain. You choose when you load the roll, never mid-roll." } },
    { icon: "🌅", title: { ko: "다음 날 아침에 현상", en: "Develops the next morning" }, desc: { ko: "찍은 사진은 미리 볼 수 없습니다. 다음 날 아침 8시, 현상이 끝났다는 알림 하나와 함께 롤이 열립니다.", en: "No peeking. At 8 the next morning a single notification says the roll is developed, and it opens." } },
    { icon: "🗂️", title: { ko: "날짜가 찍힌 밀착 인화지", en: "A dated contact sheet" }, desc: { ko: "한 롤은 날짜와 룩 이름이 찍힌 밀착 인화지 한 장이 됩니다. 이미지로 공유하거나 A4·4×6으로 인쇄합니다.", en: "Each roll becomes one contact sheet stamped with the date and the stock. Share it as an image or print it at A4 or 4×6." } },
    { icon: "🔇", title: { ko: "찍을 땐 조용히", en: "Quiet while shooting" }, desc: { ko: "화면에는 프레임과 남은 컷 수뿐. 히스토그램도 필터 목록도 없이 찍는 데만 집중합니다.", en: "Just the frame and the count. No histogram, no filter tray — nothing but the shot." } },
    { icon: "🔒", title: { ko: "사진은 사진 앱에", en: "Photos stay in Photos" }, desc: { ko: "현상된 원본은 iPhone 사진 보관함의 ‘찰나’ 앨범에 저장됩니다. 서버도 계정도 피드도 없습니다.", en: "Developed originals are saved to a “Chalna” album in your Photos library. No server, no account, no feed." } },
  ],
  history: [
    {
      version: "Concept", date: "2026-09-26", status: "planned",
      notes: {
        ko: ["컨셉 공개. 24컷 롤, 롤마다 하나의 룩, 다음 날 아침 현상, 날짜가 찍힌 밀착 인화지", "계정·피드·서버 없음, 사진은 기기의 사진 보관함에 저장", "출시 시기는 미정이며 내용은 개발 중 바뀔 수 있습니다"],
        en: ["Concept published: 24-frame rolls, one look per roll, next-morning developing, dated contact sheets", "No account, feed or server; photos saved to the device's Photos library", "No release date yet; details may change during development"],
      },
    },
  ],
};

export default function ChalnaPage() {
  return <AppOverview app={app} />;
}
