"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 데일리 텐 사용 설명서 겸 지원 페이지 (한국어 / 영어). 아직 컨셉 단계 — 출시 전에 실제 앱과 맞춰 고칩니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 데일리 텐 소개",
    concept: "컨셉 미리보기 — 데일리 텐은 아직 개발 중인 앱입니다. 여기 적힌 동작은 출시 전에 바뀔 수 있습니다.",
    tagline: "하루 열 문장, 5분. 내 목소리로 말하는 영어.",
    intro: "데일리 텐은 한국어 화자를 위한 영어 말하기 앱입니다. 매일 열 문장을 듣고, 따라 말하고, 내 목소리를 원음과 비교합니다. 레슨 팩을 한 번 내려받으면 인터넷 없이 되고, 계정은 없습니다.",
    stepsTitle: "이렇게 사용할 거예요",
    steps: [
      ["레슨 팩 고르기", "첫 실행 때 ‘일상’·‘직장’·‘여행’ 중 팩 하나를 내려받습니다. 한 팩은 30일치 300문장이고, 한 번 받으면 인터넷 없이 됩니다."],
      ["오늘의 열 문장 열기", "홈에 오늘 날짜와 열 장의 카드가 보입니다. 새 문장 일곱쯤, 복습 두셋쯤입니다."],
      ["듣고 따라 말하기", "카드를 열면 원어민 음성이 재생되고, 끝나는 순간 녹음이 시작됩니다. 따라 말하고 멈추면 됩니다. 마음에 안 들면 다시."],
      ["나란히 듣기", "원음과 내 목소리 파형이 위아래로 놓입니다. 번갈아 재생하며 리듬과 강세를 맞추고, 아래의 뉘앙스 노트를 읽습니다."],
      ["표시하고 끝내기", "‘됐다’ 또는 ‘아직’으로 표시합니다. ‘아직’은 간격 복습에 들어갑니다. 열 장이 끝나면 오늘 세션 종료, 🔥 하나."],
    ],
    featuresTitle: "이런 것들이 있을 거예요",
    features: [
      ["🎙️", "녹음은 기기 안에", "내 목소리 녹음은 이 기기에만 저장되며 어디로도 보내지 않습니다. 비교는 앱 안에서 파형 길이와 강세 위치로 합니다. 30일 지난 녹음은 자동 삭제(설정에서 변경)."],
      ["🐢", "느리게 듣기", "스피커를 길게 누르면 원음을 0.7배속으로 읽어 줍니다. 리듬은 유지되고 음높이는 그대로입니다."],
      ["🔁", "복습 큐", "‘아직’ 표시 문장이 1·3·7·21일 뒤에 돌아옵니다. 복습 탭에서 오늘 밀린 문장을 따로 볼 수 있습니다."],
      ["📦", "레슨 팩", "일상·직장·여행 세 팩으로 시작. 팩당 30일. 다 끝난 팩은 처음부터 다시 돌리거나 다른 팩으로 넘어갑니다. 가격은 출시 전에 정합니다."],
      ["🔔", "하루 한 번 알림", "원하는 시각에 ‘오늘의 열 문장’ 알림 하나. 기기 안에서 예약하는 로컬 알림입니다."],
      ["🇰🇷", "한국어 화면", "화면과 설명은 한국어, 문장은 영어입니다. 이 소개 페이지만 영어로도 읽을 수 있습니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["발음 점수가 나오나요?", "점수는 없습니다. 숫자 하나로 줄이면 리듬과 강세를 놓치기 쉬워서, 대신 두 파형을 나란히 두고 귀로 비교하게 했습니다."],
      ["열 문장보다 더 하고 싶어요.", "내일 하세요. 하루 열 문장을 넘기지 않는 것이 데일리 텐의 규칙입니다. 대신 복습 탭은 언제든 열려 있습니다."],
      ["녹음이 서버로 가나요?", "아니요. 녹음은 이 기기에만 있고, 비교도 인터넷 없이 기기 안에서 합니다."],
      ["인터넷 없이 되나요?", "팩을 한 번 내려받은 뒤에는 필요 없습니다. 새 팩을 받을 때만 연결합니다."],
      ["계정이 필요한가요?", "없습니다. 연속 학습일과 복습 기록은 기기 안에만 남습니다."],
      ["폰을 바꾸면 기록은요?", "iOS 기기 백업(iCloud 백업)에 포함되어 새 폰에서 복원되는 것을 기본으로 계획하고 있습니다. 개발자 서버를 거치는 동기화는 없습니다."],
      ["Kamusta와 뭐가 다른가요?", "Kamusta는 필리핀어(그리고 필리핀인을 위한 한국어) 학습이고, 데일리 텐은 한국어 화자의 영어 말하기입니다. 연속 학습일과 오프라인 원칙은 같습니다."],
      ["광고가 있나요?", "광고는 넣지 않을 계획이고, 분석 도구도 없습니다. 가격 정책은 출시 전에 이 페이지에 적겠습니다."],
      ["언제 나오나요?", "아직 정하지 않았습니다. 출시 소식은 이 페이지와 zuply.co.kr 앱 목록에 올립니다."],
    ],
    contactTitle: "문의", contactBody: "컨셉에 대한 의견이나 궁금한 점은 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Daily Ten",
    concept: "Concept preview — Daily Ten is not built yet. What you read here may change before release.",
    tagline: "Ten sentences a day, five minutes, in your own voice.",
    intro: "Daily Ten is a spoken-English app for Korean speakers. Every day you listen to ten sentences, shadow them, and compare your voice with the original. Download a lesson pack once and it works offline; there is no account.",
    stepsTitle: "How it will work",
    steps: [
      ["Pick a lesson pack", "On first launch download one pack — Everyday, Work or Travel. A pack is 30 days, 300 sentences, and works offline once it is on the phone."],
      ["Open today's ten", "Home shows today's date and ten cards: about seven new sentences and two or three reviews."],
      ["Listen and shadow", "Open a card: the native audio plays, and recording starts the moment it ends. Say it, stop. Not happy? Do it again."],
      ["Compare", "The two waveforms sit one above the other. Play them in turn, match the rhythm and stress, then read the nuance note below."],
      ["Mark and finish", "Mark it “Got it” or “Not yet”. “Not yet” goes into spaced review. Ten cards done, session over, one 🔥."],
    ],
    featuresTitle: "What will be inside",
    features: [
      ["🎙️", "Recordings stay on the phone", "Your recordings are stored on this device only and never uploaded. Comparison is done in the app, from waveform length and stress placement. Recordings older than 30 days are deleted automatically (adjustable)."],
      ["🐢", "Slow playback", "Hold the speaker to hear the original at 0.7× — same rhythm, same pitch, more time."],
      ["🔁", "Review queue", "“Not yet” sentences return after 1, 3, 7 and 21 days. The Review tab shows anything overdue today."],
      ["📦", "Lesson packs", "Three packs to start: Everyday, Work and Travel, 30 days each. Finish one and run it again or move to the next. Pricing is decided before release."],
      ["🔔", "One reminder a day", "A single “today's ten” notification at the time you choose, scheduled on the device."],
      ["🇰🇷", "Korean interface", "The interface and notes are in Korean; the sentences are English. Only this page is also in English."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Do I get a pronunciation score?", "No score. A single number tends to hide rhythm and stress, so instead you get the two waveforms side by side and your own ears."],
      ["I want more than ten.", "Do them tomorrow. Never more than ten a day is the rule of Daily Ten. The Review tab, though, is always open."],
      ["Are my recordings uploaded?", "No. Recordings exist only on this device, and the comparison runs on the device without the internet."],
      ["Does it work offline?", "Once a pack is downloaded, yes. You only need a connection to get a new pack."],
      ["Do I need an account?", "No. Streaks and review history stay on the device."],
      ["What happens when I change phones?", "The plan is to include everything in your iOS device backup (iCloud Backup), so it restores on the new phone. There is no sync through a developer server."],
      ["How is this different from Kamusta?", "Kamusta teaches Filipino (and Korean for Filipinos); Daily Ten is spoken English for Korean speakers. The streaks and the offline rule are the same."],
      ["Are there ads?", "No ads are planned, and no analytics. Pricing will be posted on this page before release."],
      ["When is it coming?", "Not decided yet. Release news will appear on this page and in the app list at zuply.co.kr."],
    ],
    contactTitle: "Contact", contactBody: "Thoughts on the concept, or a question? Send us a mail and we'll get back to you.",
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
        <p className="mb-10 rounded-xl border border-[#3F7BD9]/30 bg-[#3F7BD9]/10 px-4 py-3 text-sm leading-relaxed text-[#8FB4F0]">{t.concept}</p>
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
