import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/**
 * 몰입 소개 페이지 — 아직 만들지 않은 컨셉 앱입니다.
 * 개발이 시작되면 history 에 "planned" 항목 위로 실제 버전을 쌓고, 컨셉 문구를 걷어내세요.
 */
const app: AppOverviewData = {
  slug: "molip",
  name: "몰입 · Molip",
  accent: "#4B4FCC",
  tagline: { ko: "25분, 소리 하나, 그리고 오늘의 공부 인증.", en: "Twenty-five minutes, one sound, and proof you did it." },
  intro: {
    ko: "몰입은 집중 타이머입니다. 세션을 시작하면 기본은 25분 집중과 5분 휴식(둘 다 바꿀 수 있음)이고, 비·카페·백색소음·선풍기·모닥불 중 소리 하나를 고릅니다. 소리는 모두 앱 안에 들어 있어 아무것도 스트리밍하지 않습니다. 세션이 끝나면 은은한 종소리(끌 수 있음)가 알리고, 세션은 기록에 남고, 오늘의 집중 합계가 올라갑니다. 그리고 시간·날짜·소리·세션 수가 적힌 공부 인증 카드를 이미지로 공유할 수 있습니다. 인터넷 없이 완전히 동작하고, 계정·광고·분석 도구가 없습니다. 컨셉 · 출시 예정 — 아직 스토어에 없습니다.",
    en: "Molip is a focus timer. Start a session — 25 minutes of work and a 5-minute break by default, both adjustable — and pick one of a handful of bundled ambient sounds: rain, a café, white noise, a fan, a fire. Every sound ships inside the app, so nothing streams. When the session ends a gentle chime (optional) lets you know, the session goes into your log, and today's focus total ticks up. Then Molip offers a study-proof card — time, date, sound, session count — to share as an image, in the spirit of Korea's 공부 인증 habit of posting proof of study. Fully offline, no account, no ads, no analytics. Concept · coming soon — not yet on the App Store.",
  },
  features: [
    { icon: "⏳", title: { ko: "25분과 5분, 혹은 내 마음대로", en: "25 and 5, or your own" }, desc: { ko: "기본은 25분 집중, 5분 휴식. 다이얼을 돌려 10분부터 90분까지 바꾸고, 자주 쓰는 조합은 프리셋으로 둡니다.", en: "25 minutes on, 5 off by default. Turn the dial for anything from 10 to 90, and keep the combinations you use as presets." } },
    { icon: "🌧️", title: { ko: "다섯 가지 소리, 모두 오프라인", en: "Five sounds, all offline" }, desc: { ko: "비, 카페, 백색소음, 선풍기, 모닥불. 앱에 들어 있는 소리라 지하철에서도, 비행기에서도 끊기지 않습니다.", en: "Rain, café, white noise, fan, fire. They live inside the app, so they never drop out on the subway or in the air." } },
    { icon: "📓", title: { ko: "세션 기록과 오늘의 합계", en: "Session log and daily total" }, desc: { ko: "끝난 세션은 시각과 길이, 소리와 함께 기록됩니다. 오늘 합계가 위에 크게, 이번 주는 막대 일곱 개로.", en: "Every finished session is logged with its time, length and sound. Today's total sits large at the top; the week is seven bars." } },
    { icon: "🪪", title: { ko: "공부 인증 카드", en: "A study-proof card" }, desc: { ko: "세션이 끝나면 날짜·집중 시간·세션 수·소리가 적힌 카드 한 장. 이미지로 저장하거나 바로 공유합니다.", en: "When a session ends you get one card with the date, focus time, session count and sound. Save it as an image or share it straight away." } },
    { icon: "🔔", title: { ko: "원하면 은은한 종소리", en: "A gentle chime, if you want it" }, desc: { ko: "세션이 끝날 때 짧은 종소리와 진동 한 번. 설정에서 끄면 소리가 서서히 잦아드는 것으로 끝을 알립니다.", en: "A short chime and a single tap of haptics at the end. Turn it off and the ambient sound simply fades out to mark the end." } },
    { icon: "✈️", title: { ko: "인터넷 없이", en: "Works with the internet off" }, desc: { ko: "타이머도 소리도 기록도 카드도 기기 안에서 끝납니다. 서버도 계정도 없습니다.", en: "Timer, sounds, log and card all happen on the device. No server, no account." } },
  ],
  history: [
    {
      version: "Concept", date: "2026-09-26", status: "planned",
      notes: {
        ko: ["컨셉 공개. 25/5 기본의 조절 가능한 세션, 내장 소리 다섯 가지, 세션 기록과 오늘의 합계, 공부 인증 카드, 선택형 종소리", "완전 오프라인, 계정·광고·분석 없음", "출시 시기는 미정이며 내용은 개발 중 바뀔 수 있습니다"],
        en: ["Concept published: adjustable sessions with a 25/5 default, five bundled ambient sounds, session log and daily total, study-proof share card, optional end chime", "Fully offline; no account, ads or analytics", "No release date yet; details may change during development"],
      },
    },
  ],
};

export default function MolipPage() {
  return <AppOverview app={app} />;
}
