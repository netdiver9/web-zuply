"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 몰입 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store · Google Play 의 지원 URL 로 씁니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 몰입 소개",
    tagline: "25분, 소리 하나, 그리고 오늘의 공부 인증.",
    intro: "몰입은 집중 타이머입니다. 세션을 정하고, 소리 하나를 고르고, 집중합니다. 끝나면 기록이 남고 공부 인증 카드가 나옵니다. 인터넷 없이 되고, 계정은 없습니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["세션 정하기", "기본은 25분 집중, 5분 휴식. 설정의 스테퍼로 집중 10~90분, 휴식 0~30분으로 바꿉니다. 지금 조합을 ‘50/10’처럼 프리셋으로 저장해 두면 타이머 화면에서 한 번에 고릅니다. 무엇에 집중할지 이름을 붙여도 됩니다(선택)."],
      ["소리 고르기", "비·카페·백색소음·선풍기·모닥불 중 하나, 또는 무음. 소리는 앱 안에 있어 내려받을 것이 없고, 볼륨은 따로 조절합니다."],
      ["집중하기", "시작하면 화면에는 남은 시간이 큼직하게 남습니다. 일시정지와 그만두기(기록은 남지 않음)가 있습니다. 화면을 잠가도 소리와 타이머는 이어지고, Android에서는 상시 알림에 남은 시간이 보입니다."],
      ["쉬기", "집중이 끝나면 은은한 종소리(끌 수 있음)와 함께 세션 완료 화면이 뜨고, 소리는 서서히 잦아듭니다. ‘휴식 시작’으로 쉬고, 휴식이 끝나면 다음 세션을 물어봅니다. 설정에서 다음 단계를 자동으로 시작하게 할 수도 있습니다."],
      ["인증 남기기", "세션 완료 화면에 날짜·오늘 집중 시간·세션 수·소리가 적힌 카드가 나옵니다. 한 줄 메모를 붙여 공유 시트로 저장하거나 보냅니다. 안 해도 됩니다."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["🎚️", "길이는 내 마음대로", "25/5가 기본이지만 규칙은 아닙니다. 집중과 휴식을 따로 정하고, 긴 휴식의 길이(5~45분)와 주기(집중 2~8회마다)도 바꿉니다. 프리셋은 세 개까지."],
      ["🌧️", "내장 소리 다섯", "비, 카페, 백색소음, 선풍기, 모닥불. 앱 설치와 함께 들어 있고, 이어서 재생해도 끊기는 자리가 없습니다."],
      ["🔒", "화면을 잠가도", "화면이 꺼져도 소리와 타이머가 이어지고, 세션이 끝나면 알림 하나가 옵니다. Android는 상시 알림에 남은 시간을 보여 줍니다."],
      ["📓", "날짜별 기록", "끝난 세션은 시각·길이·소리와 함께 그날에 쌓입니다. 오늘 합계가 위에 크게, 최근 7일은 막대 일곱 개, 세션이 있는 날의 연속 일수까지. 중간에 그만둔 세션은 남지 않습니다."],
      ["🪪", "인증 카드", "어두운 카드 한 장에 날짜, 오늘 집중 시간, 세션 수, 소리 이름. 원하면 한 줄 메모. 카드는 기기 안에서 만들고, 어디에 올릴지는 내가 정합니다."],
      ["🔔", "끝을 알리는 법", "짧은 종소리와 진동 한 번이 기본. 설정에서 끄면 소리가 잦아드는 것만으로 끝을 알립니다. 앱이 뒤에 있을 때는 로컬 알림 하나."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["소리가 스트리밍인가요?", "아니요. 다섯 가지 소리는 앱 안에 들어 있습니다. 비행기 모드에서도 똑같이 됩니다."],
      ["화면을 잠그면 멈추나요?", "아니요. 소리와 타이머는 이어지고, 끝나면 알림이 옵니다. iPhone은 백그라운드 오디오 재생을, Android는 상시 알림이 있는 포그라운드 서비스를 이 용도로만 씁니다."],
      ["잠금화면이나 Dynamic Island에 남은 시간이 보이나요?", "iPhone에서는 보이지 않습니다. 앱을 열면 남은 시간을 볼 수 있고, 끝나면 알림이 옵니다. Android에서는 상시 알림에 남은 시간이 보입니다."],
      ["기록을 지우려면?", "기록 탭에서 iPhone은 세션을 왼쪽으로 밀어 삭제하고, Android는 세션 옆의 휴지통 버튼을 누릅니다."],
      ["마이크를 쓰나요?", "쓰지 않습니다. 몰입은 소리를 재생만 하고, 녹음하거나 듣지 않습니다. 마이크 권한을 요청하지 않습니다."],
      ["내 소리를 넣을 수 있나요?", "지금은 없습니다. 다섯 가지를 잘 만드는 데 집중했습니다."],
      ["인증 카드가 어디로 올라가나요?", "아무 데도요. 카드는 기기 안에서 이미지로 만들어지고, 공유 시트로 내가 고른 곳에만 갑니다. 몰입은 그 뒤를 모릅니다."],
      ["폰을 바꾸면 기록은요?", "기기 백업(iCloud 백업, Android 백업)에 포함되어 새 폰에서 복원됩니다. 개발자 서버를 거치는 동기화는 없습니다."],
      ["다른 뽀모도로 앱과 뭐가 다른가요?", "할 일 목록도 프로젝트도 태그도 없습니다. 타이머, 소리, 기록, 카드. 그게 전부라서 시작하는 데 3초면 됩니다."],
      ["계정이나 광고가 있나요?", "없습니다. 무료이고 계정·광고·인앱 구입·분석 도구가 없습니다."],
    ],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Molip",
    tagline: "Twenty-five minutes, one sound, and proof you did it.",
    intro: "Molip is a focus timer. Set a session, pick one sound, focus. When it ends the session is logged and a study-proof card is offered. It works offline, and there is no account.",
    stepsTitle: "How it works",
    steps: [
      ["Set the session", "25 minutes of focus and a 5-minute break by default. Use the steppers in Settings for 10 to 90 minutes of focus and 0 to 30 of break. Save the current combination, like 50/10, as a preset and pick it with one tap on the timer screen. You can name what you are focusing on, too (optional)."],
      ["Pick a sound", "Rain, café, white noise, fan, fire — or silence. The sounds ship inside the app, so there is nothing to download, and they have their own volume."],
      ["Focus", "Once you start, the screen shows the time left in large type, with pause and stop (a stopped session is not logged). Lock the phone and the sound and timer carry on; on Android the time left shows in an ongoing notification."],
      ["Break", "When focus ends, a gentle chime (optional) brings up the session-done screen and the sound fades. Tap “Start break”; when the break ends, Molip asks whether you want another round. Settings can start the next phase automatically instead."],
      ["Leave your proof", "The session-done screen shows a card with the date, today's focus time, session count and sound. Add a one-line note and save or send it from the share sheet. Or don't."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["🎚️", "Lengths that are yours", "25/5 is the default, not a rule. Set focus and break separately, and adjust the long break (5–45 minutes) and how often it comes (every 2–8 focus sessions). Up to three presets."],
      ["🌧️", "Five bundled sounds", "Rain, café, white noise, fan, fire. Installed with the app and looped without a seam."],
      ["🔒", "Keeps going when locked", "Sound and timer carry on with the screen off, and one notification tells you when the session ends. On Android an ongoing notification shows the time left."],
      ["📓", "A log by day", "Finished sessions stack under their day with time, length and sound. Today's total sits large at the top, the last seven days are seven bars, and your streak of days with a session is counted. Sessions you abandon are not logged."],
      ["🪪", "The proof card", "One dark card: date, today's focus time, session count, sound name, and a one-line note if you want one. Made on the device; where it goes is up to you."],
      ["🔔", "How it ends", "A short chime and a single tap of haptics by default. Turn it off and the fade of the sound is the only signal. If the app is in the background, one local notification."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Are the sounds streamed?", "No. All five are inside the app. Airplane mode changes nothing."],
      ["Does locking the phone stop it?", "No. Sound and timer keep going, and a notification arrives at the end. On iPhone background audio, and on Android a foreground service with an ongoing notification, are used for this and nothing else."],
      ["Does the time left show on the Lock Screen or in the Dynamic Island?", "Not on iPhone. Open the app to see the time left; a notification arrives at the end. On Android the ongoing notification shows the time left."],
      ["How do I delete a log entry?", "In the Log tab, swipe a session to the left on iPhone, or tap the trash button next to it on Android."],
      ["Does it use the microphone?", "No. Molip only plays sound; it never records or listens, and it does not ask for microphone access."],
      ["Can I add my own sounds?", "Not at the moment. The focus is on getting five sounds right."],
      ["Where does the proof card go?", "Nowhere. The card is rendered on the device as an image and goes only where you send it from the share sheet. Molip does not know what happens after that."],
      ["What happens when I change phones?", "Everything is included in your device backup (iCloud Backup or Android backup) and restores on the new phone. There is no sync through a developer server."],
      ["How is this different from other Pomodoro apps?", "No task list, no projects, no tags. A timer, a sound, a log, a card. That is all, so starting takes three seconds."],
      ["Is there an account or ads?", "No. Molip is free, with no account, ads, in-app purchases or analytics."],
    ],
    contactTitle: "Contact", contactBody: "If your question isn't answered here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function MolipGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/molip" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <header className="mb-16">
          <AppIcon slug="molip" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">몰입 · Molip</h1>
          <p className="mt-3 text-lg text-[#8B8EE8]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4B4FCC]/25 text-sm font-semibold text-[#A9ABF2]">{i + 1}</span>
                <div><h3 className="mb-1 font-medium">{title}</h3><p className="text-[15px] leading-relaxed text-white/60">{body}</p></div>
              </li>
            ))}
          </ol>
        </section>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.featuresTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.features.map(([icon, title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-2 text-2xl">{icon}</div><h3 className="mb-1 font-semibold">{title}</h3><p className="text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.supportTitle}</h2>
          <div className="space-y-5">
            {t.faq.map(([q, a]) => (
              <div key={q} className="border-l-2 border-[#4B4FCC]/50 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#4B4FCC] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/molip/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
