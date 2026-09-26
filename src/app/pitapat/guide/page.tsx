"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 피타팟 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store · Play 의 지원 URL 로 씁니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 피타팟 소개",
    tagline: "열면 3분, 웃음은 하루 종일.",
    intro: "피타팟은 둘이서 하는 작은 게임방입니다. 폰 하나를 주고받아도 되고, 각자 폰으로 만나도 됩니다. 계정이 없고, 모든 게임은 한 폰에서 인터넷 없이 즐길 수 있습니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["방식 고르기", "홈에서 ‘한 폰으로’ 또는 ‘각자 폰으로’를 고릅니다. 한 폰이면 바로 시작하고, 각자 폰이면 두 폰을 먼저 연결합니다."],
      ["게임 고르기", "이심전심·질문 카드 같은 마음 맞추기, 가위바위보·반응속도 같은 대결, 사목·짝맞추기 같은 두뇌 게임 중 하나를 누릅니다."],
      ["폰 넘기기", "몰래 고르는 게임은 한 사람이 고르고 나면 화면이 가려집니다. 그때 폰을 넘기면 됩니다. 대결은 화면이 반으로 나뉘니 마주 앉아 하세요."],
      ["결과 보기", "‘틀렸다’가 아니라 ‘서로 달랐네!’. 승패보다 둘이 얼마나 통했는지를 보여줍니다."],
      ["카드로 남기기", "이심전심 결과는 한 장의 카드로 만들어집니다. 공유 시트로 바로 보내거나 저장하세요."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["💗", "이심전심과 오늘의 밸런스", "상의 없이 고르고, 같으면 성공. 하루 한 번 새 밸런스 질문이 두 폰에 똑같이 도착합니다."],
      ["📱", "한 폰으로 18가지 전부", "모든 게임을 폰 하나로 즐길 수 있습니다. 두 번째 기기도, 인터넷도 필요 없습니다."],
      ["📶", "같은 방에서 (iPhone)", "같은 방에 있으면 iPhone끼리 직접 연결됩니다. 서버도 인터넷도 거치지 않습니다."],
      ["🔢", "떨어져서", "한 사람이 방을 만들면 4자리 코드가 생깁니다. 상대가 코드를 넣으면 연결됩니다. 인터넷이 필요합니다."],
      ["🔊", "효과음", "효과음은 앱이 그때그때 만듭니다. 정보 화면에서 끌 수 있습니다."],
      ["🌐", "한국어 · English", "기기 언어를 따릅니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["계정이 필요한가요?", "없습니다. 이메일도 전화번호도 받지 않습니다. 각자 폰으로 할 때 쓰는 4자리 방 코드가 전부입니다."],
      ["같은 방인데 연결이 안 돼요.", "‘같은 방에서’는 iPhone끼리만 됩니다. 두 폰 모두 Wi-Fi나 Bluetooth가 켜져 있는지, 기기 설정에서 피타팟의 로컬 네트워크 권한이 허용되어 있는지 확인해 주세요. Android 는 ‘떨어져서’ 코드 방식으로 연결합니다."],
      ["‘떨어져서’ 코드가 안 들어가요.", "코드는 방을 만든 동안에만 유효합니다. 방을 닫았거나 시간이 지났다면 새로 만들어 주세요. 두 폰 모두 인터넷에 연결되어 있어야 합니다."],
      ["각자 폰으로 할 때 안 되는 게임이 있어요.", "폭탄 돌리기, 동시에 멈추기, 박자 맞추기 세 가지는 한 폰 전용입니다. 손에 쥐어 주거나 같은 순간을 재야 하는 게임이라, 두 폰 모드에서는 일부러 꺼 두었습니다."],
      ["기록이 어디에 저장되나요?", "점수와 설정은 이 기기 안에만 남습니다. 서버에 저장되는 것은 없으며, ‘떨어져서’ 모드에서 오간 것도 그 판이 끝나면 사라집니다."],
      ["테마 팩은 무엇인가요?", "질문 카드 등을 더 늘려 주는 선택 항목입니다. iOS 에서 Apple 인앱 구입으로 한 번 사면 계속 쓸 수 있습니다. 사지 않아도 18가지 게임은 모두 즐길 수 있습니다."],
      ["광고가 있나요?", "없습니다. 분석 도구도 없습니다."],
      ["모든 데이터를 지우려면?", "앱을 삭제하면 기기 안의 기록이 모두 사라집니다. 서버에 남는 것은 없습니다."],
    ],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Pitapat",
    tagline: "Three minutes to play. Laughing about it all day.",
    intro: "Pitapat is a tiny game room for two. Share one phone and pass it back and forth, or take a phone each. There is no account, and every game can be played on one phone without the internet.",
    stepsTitle: "How it works",
    steps: [
      ["Pick a mode", "On the home screen choose “One phone” or “A phone each”. One phone starts right away; a phone each links the two phones first."],
      ["Pick a game", "Tap one of the in-sync games like Same Mind or Question Cards, a face-off like Rock Paper Scissors or Fastest Tap, or brainwork like Four in a Row or Pairs."],
      ["Hand the phone over", "When a game has secret picks, the screen covers up as soon as one of you has chosen. Then pass the phone. Face-offs split the screen, so sit across from each other."],
      ["See the result", "Never “wrong” — just “we were different.” It shows how in sync the two of you were rather than who lost."],
      ["Keep it as a card", "A Same Mind result becomes a single card. Send it straight to the share sheet or save it."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["💗", "Same Mind and today's balance", "Pick without talking; match to score. A new balance prompt lands on both phones every day, identical."],
      ["📱", "All 18 on one phone", "Every game is playable on a single phone. No second device and no internet needed."],
      ["📶", "Together (iPhone)", "In the same room, iPhones link directly to each other. No server and no internet involved."],
      ["🔢", "Apart", "One of you creates a room and gets a 4-digit code; the other enters it. Internet required."],
      ["🔊", "Sound", "Sound effects are synthesised on the fly. Turn them off in About."],
      ["🌐", "Korean · English", "Follows your device language."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Do I need an account?", "No. No email, no phone number. The 4-digit room code used for two-phone play is all there is."],
      ["We're in the same room but can't connect.", "Together works between iPhones only. Make sure Wi-Fi or Bluetooth is on for both phones and that Pitapat is allowed Local Network access in your phone's settings. On Android, use the Apart code instead."],
      ["The Apart code isn't accepted.", "A code is valid only while the room is open. If the room was closed or has expired, create a new one. Both phones need an internet connection."],
      ["Some games are greyed out in two-phone mode.", "Hot Potato, Stop Together and Keep the Beat are one-phone only. They need a phone you can push into someone's hands, or an exact shared moment, so they are deliberately turned off with two phones."],
      ["Where is my data stored?", "Scores and settings stay on this device. Nothing is stored on a server, and what passes through in Apart mode is gone once the round ends."],
      ["What are theme packs?", "Optional extras that add more prompts such as question cards. On iOS they are one-time Apple in-app purchases. All 18 games are playable without buying anything."],
      ["Are there ads?", "No. No analytics either."],
      ["How do I delete everything?", "Deleting the app removes everything stored on the device. Nothing remains on a server."],
    ],
    contactTitle: "Contact", contactBody: "If your question isn't here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function PitapatGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/pitapat" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <header className="mb-16">
          <AppIcon slug="pitapat" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">피타팟 · Pitapat</h1>
          <p className="mt-3 text-lg text-[#FF7EA0]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF7EA0]/20 text-sm font-semibold text-[#FF7EA0]">{i + 1}</span>
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
              <div key={q} className="border-l-2 border-[#FF7EA0]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#FF7EA0] px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/pitapat/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
