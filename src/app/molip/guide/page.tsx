"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 몰입 사용 설명서 겸 지원 페이지 (한국어 / 영어). 아직 컨셉 단계 — 출시 전에 실제 앱과 맞춰 고칩니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 몰입 소개",
    concept: "컨셉 미리보기 — 몰입은 아직 개발 중인 앱입니다. 여기 적힌 동작은 출시 전에 바뀔 수 있습니다.",
    tagline: "25분, 소리 하나, 그리고 오늘의 공부 인증.",
    intro: "몰입은 집중 타이머입니다. 세션을 정하고, 소리 하나를 고르고, 집중합니다. 끝나면 기록이 남고 공부 인증 카드가 나옵니다. 인터넷 없이 되고, 계정은 없습니다.",
    stepsTitle: "이렇게 사용할 거예요",
    steps: [
      ["세션 정하기", "기본은 25분 집중, 5분 휴식. 다이얼을 돌려 집중 10~90분, 휴식 0~30분으로 바꿉니다. 자주 쓰는 조합은 ‘50/10’처럼 프리셋으로 둡니다."],
      ["소리 고르기", "비·카페·백색소음·선풍기·모닥불 중 하나, 또는 무음. 소리는 앱 안에 있어 내려받을 것이 없고, 볼륨은 따로 조절합니다."],
      ["집중하기", "시작하면 화면에는 남은 시간만 큼직하게 남습니다. 화면을 잠가도 소리와 타이머는 이어지고, 잠금화면과 Dynamic Island에 남은 시간이 보입니다."],
      ["쉬기", "집중이 끝나면 은은한 종소리(끌 수 있음)와 함께 휴식 타이머가 시작되고, 소리는 서서히 잦아듭니다. 휴식이 끝나면 다음 세션을 물어봅니다."],
      ["인증 남기기", "세션이 끝나면 날짜·집중 시간·세션 수·소리가 적힌 카드가 나옵니다. 이미지로 저장하거나 바로 공유합니다. 안 해도 됩니다."],
    ],
    featuresTitle: "이런 것들이 있을 거예요",
    features: [
      ["🎚️", "길이는 내 마음대로", "25/5가 기본이지만 규칙은 아닙니다. 집중과 휴식을 따로 정하고, 자주 쓰는 조합은 프리셋 세 개까지 둡니다."],
      ["🌧️", "내장 소리 다섯", "비, 카페, 백색소음, 선풍기, 모닥불. 앱 설치와 함께 들어 있고, 이어서 재생해도 끊기는 자리가 없게 만듭니다."],
      ["🔒", "잠금화면 타이머", "잠금화면과 Dynamic Island에 남은 시간이 보입니다. 기기 안에서 그리는 것이라 네트워크가 필요 없습니다."],
      ["📓", "날짜별 기록", "끝난 세션은 시각·길이·소리와 함께 그날에 쌓입니다. 오늘 합계가 위에 크게, 이번 주는 막대 일곱 개. 중간에 그만둔 세션은 남지 않습니다."],
      ["🪪", "인증 카드", "어두운 카드 한 장에 날짜, 오늘 집중 시간, 세션 수, 소리 이름. 원하면 한 줄 메모. 카드는 기기 안에서 만들고, 어디에 올릴지는 내가 정합니다."],
      ["🔔", "끝을 알리는 법", "짧은 종소리와 진동 한 번이 기본. 설정에서 끄면 소리가 잦아드는 것만으로 끝을 알립니다. 앱이 뒤에 있을 때는 로컬 알림 하나."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["소리가 스트리밍인가요?", "아니요. 다섯 가지 소리는 앱 안에 들어 있습니다. 비행기 모드에서도 똑같이 됩니다."],
      ["화면을 잠그면 멈추나요?", "아니요. 소리와 타이머는 이어지고, 잠금화면에서 남은 시간을 볼 수 있습니다. 백그라운드 오디오 재생은 이 용도로만 씁니다."],
      ["마이크를 쓰나요?", "쓰지 않습니다. 몰입은 소리를 재생만 하고, 녹음하거나 듣지 않습니다. 마이크 권한을 요청하지 않습니다."],
      ["내 소리를 넣을 수 있나요?", "첫 버전에는 없습니다. 다섯 가지를 잘 만드는 데 집중합니다."],
      ["인증 카드가 어디로 올라가나요?", "아무 데도요. 카드는 기기 안에서 이미지로 만들어지고, 공유 시트로 내가 고른 곳에만 갑니다. 몰입은 그 뒤를 모릅니다."],
      ["계정이 필요한가요?", "없습니다. 기록과 설정은 기기 안에만 있습니다."],
      ["폰을 바꾸면 기록은요?", "iOS 기기 백업(iCloud 백업)에 포함되어 새 폰에서 복원됩니다. 개발자 서버를 거치는 동기화는 없습니다."],
      ["다른 뽀모도로 앱과 뭐가 다른가요?", "할 일 목록도 프로젝트도 태그도 없습니다. 타이머, 소리, 기록, 카드. 그게 전부라서 시작하는 데 3초면 됩니다."],
      ["광고가 있나요?", "광고는 넣지 않을 계획이고, 분석 도구도 없습니다. 가격 정책은 출시 전에 이 페이지에 적겠습니다."],
      ["언제 나오나요?", "아직 정하지 않았습니다. 출시 소식은 이 페이지와 zuply.co.kr 앱 목록에 올립니다."],
    ],
    contactTitle: "문의", contactBody: "컨셉에 대한 의견이나 궁금한 점은 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Molip",
    concept: "Concept preview — Molip is not built yet. What you read here may change before release.",
    tagline: "Twenty-five minutes, one sound, and proof you did it.",
    intro: "Molip is a focus timer. Set a session, pick one sound, focus. When it ends the session is logged and a study-proof card is offered. It works offline, and there is no account.",
    stepsTitle: "How it will work",
    steps: [
      ["Set the session", "25 minutes of focus and a 5-minute break by default. Turn the dial for 10 to 90 minutes of focus and 0 to 30 of break. Keep the combinations you use, like 50/10, as presets."],
      ["Pick a sound", "Rain, café, white noise, fan, fire — or silence. The sounds ship inside the app, so there is nothing to download, and their volume is separate from the chime."],
      ["Focus", "Once you start, the screen shows nothing but the time left. Lock the phone and the sound and timer carry on; the remaining time shows on the Lock Screen and in the Dynamic Island."],
      ["Break", "When focus ends, a gentle chime (optional) starts the break timer and the sound fades. When the break ends, Molip asks whether you want another round."],
      ["Leave your proof", "At the end of a session you get a card with the date, focus time, session count and sound. Save it as an image or share it straight away. Or don't."],
    ],
    featuresTitle: "What will be inside",
    features: [
      ["🎚️", "Lengths that are yours", "25/5 is the default, not a rule. Set focus and break separately and keep up to three presets."],
      ["🌧️", "Five bundled sounds", "Rain, café, white noise, fan, fire. Installed with the app and looped without a seam."],
      ["🔒", "Timer on the Lock Screen", "The time left shows on the Lock Screen and in the Dynamic Island. It is drawn on the device and needs no network."],
      ["📓", "A log by day", "Finished sessions stack under their day with time, length and sound. Today's total sits large at the top; the week is seven bars. Sessions you abandon are not logged."],
      ["🪪", "The proof card", "One dark card: date, today's focus time, session count, sound name, and a one-line note if you want one. Made on the device; where it goes is up to you."],
      ["🔔", "How it ends", "A short chime and a single tap of haptics by default. Turn it off and the fade of the sound is the only signal. If the app is in the background, one local notification."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Are the sounds streamed?", "No. All five are inside the app. Airplane mode changes nothing."],
      ["Does locking the phone stop it?", "No. Sound and timer keep going, and the time left shows on the Lock Screen. Background audio is used for this and nothing else."],
      ["Does it use the microphone?", "No. Molip only plays sound; it never records or listens, and it does not ask for microphone access."],
      ["Can I add my own sounds?", "Not in the first version. The plan is to get five sounds right."],
      ["Where does the proof card go?", "Nowhere. The card is rendered on the device as an image and goes only where you send it from the share sheet. Molip does not know what happens after that."],
      ["Do I need an account?", "No. The log and settings live only on the device."],
      ["What happens when I change phones?", "Everything is included in your iOS device backup (iCloud Backup) and restores on the new phone. There is no sync through a developer server."],
      ["How is this different from other Pomodoro apps?", "No task list, no projects, no tags. A timer, a sound, a log, a card. That is all, so starting takes three seconds."],
      ["Are there ads?", "No ads are planned, and no analytics. Pricing will be posted on this page before release."],
      ["When is it coming?", "Not decided yet. Release news will appear on this page and in the app list at zuply.co.kr."],
    ],
    contactTitle: "Contact", contactBody: "Thoughts on the concept, or a question? Send us a mail and we'll get back to you.",
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
        <p className="mb-10 rounded-xl border border-[#4B4FCC]/40 bg-[#4B4FCC]/15 px-4 py-3 text-sm leading-relaxed text-[#A9ABF2]">{t.concept}</p>
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
