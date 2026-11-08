import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

/** 몰입 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "molip",
  appStore: "https://apps.apple.com/kr/app/id6816463485",
  name: "몰입 · Molip",
  accent: "#4B4FCC",
  tagline: { ko: "25분, 소리 하나, 그리고 오늘의 공부 인증.", en: "Twenty-five minutes, one sound, and proof you did it." },
  intro: {
    ko: "몰입은 집중 타이머입니다. 세션을 시작하면 기본은 25분 집중과 5분 휴식(둘 다 바꿀 수 있음)이고, 비·카페·백색소음·선풍기·모닥불 중 소리 하나를 고릅니다. 소리는 모두 앱 안에 들어 있어 아무것도 스트리밍하지 않습니다. 세션이 끝나면 은은한 종소리(끌 수 있음)가 알리고, 세션은 기록에 남고, 오늘의 집중 합계가 올라갑니다. 그리고 날짜·집중 시간·세션 수·소리가 적힌 공부 인증 카드를 이미지로 공유할 수 있습니다. 인터넷 없이 완전히 동작하고, 계정·광고·분석 도구가 없는 무료 앱입니다.",
    en: "Molip is a focus timer. Start a session — 25 minutes of work and a 5-minute break by default, both adjustable — and pick one of a handful of bundled ambient sounds: rain, a café, white noise, a fan, a fire. Every sound ships inside the app, so nothing streams. When the session ends a gentle chime (optional) lets you know, the session goes into your log, and today's focus total ticks up. Then Molip offers a study-proof card — date, focus time, session count, sound — to share as an image, in the spirit of Korea's 공부 인증 habit of posting proof of study. Fully offline and free, with no account, no ads and no analytics.",
  },
  features: [
    { icon: "⏳", title: { ko: "25분과 5분, 혹은 내 마음대로", en: "25 and 5, or your own" }, desc: { ko: "기본은 25분 집중, 5분 휴식. 설정의 스테퍼로 집중 10~90분, 휴식 0~30분을 정하고, 정한 횟수마다 긴 휴식이 옵니다. 자주 쓰는 조합은 프리셋 세 개까지.", en: "25 minutes on, 5 off by default. Steppers in Settings set focus from 10 to 90 minutes and break from 0 to 30, with a long break every few rounds. Keep up to three combinations as presets." } },
    { icon: "🌧️", title: { ko: "다섯 가지 소리, 모두 오프라인", en: "Five sounds, all offline" }, desc: { ko: "비, 카페, 백색소음, 선풍기, 모닥불. 앱에 들어 있는 소리라 지하철에서도, 비행기에서도 끊기지 않습니다. 화면을 잠가도 이어집니다.", en: "Rain, café, white noise, fan, fire. They live inside the app, so they never drop out on the subway or in the air — and they keep going with the screen locked." } },
    { icon: "📓", title: { ko: "세션 기록과 오늘의 합계", en: "Session log and daily total" }, desc: { ko: "끝까지 마친 세션은 시각과 길이, 소리와 함께 기록됩니다. 오늘 합계가 위에 크게, 최근 7일은 막대 일곱 개, 세션이 있는 날의 연속 일수까지.", en: "Every finished session is logged with its time, length and sound. Today's total sits large at the top, the last seven days are seven bars, and your streak of days with a session is counted." } },
    { icon: "🪪", title: { ko: "공부 인증 카드", en: "A study-proof card" }, desc: { ko: "세션이 끝나면 날짜·오늘 집중 시간·세션 수·소리가 적힌 카드 한 장. 한 줄 메모를 붙여 공유 시트로 저장하거나 보냅니다.", en: "When a session ends you get one card with the date, today's focus time, session count and sound. Add a one-line note, then save or send it from the share sheet." } },
    { icon: "🔔", title: { ko: "원하면 은은한 종소리", en: "A gentle chime, if you want it" }, desc: { ko: "세션이 끝날 때 짧은 종소리와 진동 한 번. 설정에서 끄면 소리가 서서히 잦아드는 것으로 끝을 알립니다. 앱이 뒤에 있으면 로컬 알림 하나.", en: "A short chime and a single tap of haptics at the end. Turn it off and the ambient sound simply fades out to mark the end. If the app is in the background, one local notification." } },
    { icon: "✈️", title: { ko: "인터넷 없이", en: "Works with the internet off" }, desc: { ko: "타이머도 소리도 기록도 카드도 기기 안에서 끝납니다. 서버도 계정도 없습니다.", en: "Timer, sounds, log and card all happen on the device. No server, no account." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-10-01", status: "released",
      notes: {
        ko: ["첫 출시. 25/5 기본의 조절 가능한 세션(집중 10~90분)과 긴 휴식, 프리셋 세 개, 내장 소리 다섯 가지", "날짜별 세션 기록과 오늘의 합계·최근 7일·연속 일수, 공부 인증 카드, 선택형 종소리", "무료. 완전 오프라인, 계정·광고·분석 없음. 한국어·영어"],
        en: ["First release: adjustable sessions with a 25/5 default (focus 10–90 min) and long breaks, three presets, five bundled ambient sounds", "A log by day with today's total, the last seven days and a streak; a study-proof share card; an optional end chime", "Free. Fully offline; no account, ads or analytics. Korean and English"],
      },
    },
  ],
};

export default function MolipPage() {
  return <AppOverview app={app} />;
}
