"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 데일리 텐 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store · Google Play 의 지원 URL 로 씁니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 데일리 텐 소개",
    tagline: "하루 열 문장, 5분. 내 목소리로 말하는 영어.",
    intro: "데일리 텐은 한국어 화자를 위한 영어 말하기 앱입니다. 매일 열 문장을 듣고, 따라 말하고, 내 목소리를 원음과 비교합니다. 세 팩 900문장이 모두 앱 안에 들어 있어 인터넷이 필요 없고, 계정은 없습니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["레슨 팩 고르기", "첫 실행 때 ‘일상’·‘직장’·‘여행’ 중 팩 하나를 고릅니다. 한 팩은 30일치 300문장이고, 세 팩 모두 앱에 들어 있어 내려받을 것이 없습니다. 팩은 나중에 설정에서 바꿀 수 있습니다."],
      ["오늘의 열 문장 열기", "‘오늘’ 탭에 오늘 날짜와 세션 카드가 보입니다. 새 문장 열 개에, 그날 돌아온 복습 문장이 최대 세 개 앞에 붙습니다."],
      ["듣고 따라 말하기", "‘듣고 따라 말하기’를 누르면 원음이 재생되고, 끝나는 순간 녹음이 시작됩니다. 따라 말하고 탭해서 멈추면 됩니다(최대 12초). 마음에 안 들면 ‘다시 녹음’."],
      ["나란히 듣기", "원음과 내 목소리 파형이 위아래로 놓입니다. 번갈아 재생하며 리듬과 강세를 맞추고, 아래의 뉘앙스 노트와 핵심 표현을 읽습니다."],
      ["표시하고 끝내기", "‘됐다’ 또는 ‘아직’으로 표시합니다. ‘아직’은 간격 복습에 들어갑니다. 카드가 다 끝나면 오늘 세션 종료, 🔥 하나."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["🎙️", "녹음은 기기 안에", "내 목소리 녹음은 이 기기에만 저장되며 어디로도 보내지 않습니다. 점수 대신 두 파형을 나란히 놓고 귀로 비교합니다. 30일 지난 녹음은 자동 삭제(설정에서 끌 수 있음)."],
      ["🐢", "속도 조절", "설정에서 읽기 속도를 느리게·보통·빠르게로 고르고, 듣기 버튼을 길게 누르면 0.7배속으로 천천히 읽어 줍니다."],
      ["🔁", "복습 탭", "‘아직’ 표시 문장이 1·3·7·21일 뒤에 돌아옵니다. 복습 탭에서 오늘 복습할 문장과 다가오는 복습을 따로 볼 수 있습니다."],
      ["📦", "레슨 팩", "일상·직장·여행 세 팩, 팩당 30일. 다 끝난 팩은 처음부터 다시 돌리거나 다른 팩으로 넘어갑니다. 모든 팩이 무료입니다."],
      ["📈", "진행", "연속 학습일과 최장 기록, 복습 대기, 익힌 문장 수, 팩별 30일 격자를 한 화면에서 봅니다."],
      ["🔔", "하루 한 번 알림", "원하는 시각에 ‘오늘의 열 문장’ 알림 하나. 기기 안에서 예약하는 로컬 알림입니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["발음 점수가 나오나요?", "점수는 없습니다. 숫자 하나로 줄이면 리듬과 강세를 놓치기 쉬워서, 대신 두 파형을 나란히 두고 귀로 비교하게 했습니다."],
      ["원음은 누구 목소리인가요?", "기기에 들어 있는 영어(미국) 음성, 즉 시스템 TTS가 읽습니다. 기기 안에서 만들어지므로 인터넷이 필요 없습니다. 기기에 영어 음성이 없으면 원음 파형이 비어 보일 수 있으니, 시스템 설정에서 영어 음성을 내려받아 주세요."],
      ["열 문장보다 더 하고 싶어요.", "내일 하세요. 새 문장은 하루 열 개를 넘기지 않는 것이 데일리 텐의 규칙입니다. 대신 복습 탭은 언제든 열려 있습니다."],
      ["녹음이 서버로 가나요?", "아니요. 녹음은 이 기기에만 있고, 비교도 기기 안에서 합니다. 음성 인식은 쓰지 않습니다. 설정에서 녹음을 모두 지울 수 있습니다."],
      ["인터넷 없이 되나요?", "네. 900문장이 모두 앱에 들어 있고, 앱은 인터넷을 전혀 쓰지 않습니다."],
      ["되살리기는 어떻게 되나요?", "하루를 건너뛰면 다음 날 한 번 연속 학습일을 되살릴 수 있습니다. 쓰든 ‘괜찮아요’를 누르든, 다음 기회는 30일 뒤입니다."],
      ["폰을 바꾸면 기록은요?", "학습 기록은 기기 백업(iCloud 백업, Android 백업)에 포함되어 새 폰에서 복원됩니다. 녹음 파일은 백업에서 제외됩니다. 개발자 서버를 거치는 동기화는 없습니다."],
      ["Kamusta와 뭐가 다른가요?", "Kamusta는 필리핀어(그리고 필리핀인을 위한 한국어) 학습이고, 데일리 텐은 한국어 화자의 영어 말하기입니다. 연속 학습일과 오프라인 원칙은 같습니다."],
      ["광고나 결제가 있나요?", "없습니다. 모든 팩이 무료이고, 광고·인앱 구입·분석 도구가 없습니다."],
    ],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Daily Ten",
    tagline: "Ten sentences a day, five minutes, in your own voice.",
    intro: "Daily Ten is a spoken-English app for Korean speakers. Every day you listen to ten sentences, shadow them, and compare your voice with the original. All three packs — 900 sentences — are built into the app, so no internet is needed, and there is no account.",
    stepsTitle: "How it works",
    steps: [
      ["Pick a lesson pack", "On first launch choose one pack — Everyday, Work or Travel. A pack is 30 days, 300 sentences; all three are built in, so there is nothing to download. You can switch packs later in Settings."],
      ["Open today's ten", "The Today tab shows the date and a session card: ten new sentences, led by up to three reviews that are due today."],
      ["Listen and shadow", "Tap “Listen and shadow”: the original plays, and recording starts the moment it ends. Say it and tap to stop (up to 12 seconds). Not happy? “Record again”."],
      ["Compare", "The two waveforms sit one above the other. Play them in turn, match the rhythm and stress, then read the nuance note and key words below."],
      ["Mark and finish", "Mark it “Got it” or “Not yet”. “Not yet” goes into spaced review. All cards done, session over, one 🔥."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["🎙️", "Recordings stay on the phone", "Your recordings are stored on this device only and never uploaded. Instead of a score, you compare two waveforms by ear. Recordings older than 30 days are deleted automatically (you can turn this off)."],
      ["🐢", "Your pace", "Choose a speech rate — slow, normal or fast — in Settings, or hold Listen to hear the sentence at 0.7×."],
      ["🔁", "Review tab", "“Not yet” sentences return after 1, 3, 7 and 21 days. The Review tab shows what is due today and what is coming up."],
      ["📦", "Lesson packs", "Everyday, Work and Travel, 30 days each. Finish one and run it again or move to the next. Every pack is free."],
      ["📈", "Progress", "Current and longest streak, reviews due, sentences learned and a 30-day grid per pack, on one screen."],
      ["🔔", "One reminder a day", "A single “today's ten” notification at the time you choose, scheduled on the device."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Do I get a pronunciation score?", "No score. A single number tends to hide rhythm and stress, so instead you get the two waveforms side by side and your own ears."],
      ["Whose voice is the original?", "The device's built-in US English voice — system text-to-speech. It is generated on the device, so no internet is needed. If the device has no English voice installed, the original waveform may look empty; download an English voice in the system settings."],
      ["I want more than ten.", "Do them tomorrow. Never more than ten new sentences a day is the rule of Daily Ten. The Review tab, though, is always open."],
      ["Are my recordings uploaded?", "No. Recordings exist only on this device, and the comparison runs on the device. No speech recognition is used. You can delete every recording in Settings."],
      ["Does it work offline?", "Yes. All 900 sentences are in the app, and the app never uses the internet."],
      ["How does the streak repair work?", "Miss a day and the next day lets you repair the streak once. Whether you use it or tap “No thanks”, the next chance comes 30 days later."],
      ["What happens when I change phones?", "Study records are included in your device backup (iCloud Backup or Android backup) and restore on the new phone. Recordings are excluded from backup. There is no sync through a developer server."],
      ["How is this different from Kamusta?", "Kamusta teaches Filipino (and Korean for Filipinos); Daily Ten is spoken English for Korean speakers. The streaks and the offline rule are the same."],
      ["Are there ads or purchases?", "No. Every pack is free, with no ads, in-app purchases or analytics."],
    ],
    contactTitle: "Contact", contactBody: "If your question isn't answered here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function DailyTenGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/dailyten" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <header className="mb-16">
          <AppIcon slug="dailyten" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">데일리 텐 · Daily Ten</h1>
          <p className="mt-3 text-lg text-[#3F7BD9]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3F7BD9]/20 text-sm font-semibold text-[#3F7BD9]">{i + 1}</span>
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
              <div key={q} className="border-l-2 border-[#3F7BD9]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#3F7BD9] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/dailyten/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
