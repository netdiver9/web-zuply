"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 찰나 사용 설명서 겸 지원 페이지 (한국어 / 영어). 아직 컨셉 단계 — 출시 전에 실제 앱과 맞춰 고칩니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 찰나 소개",
    concept: "컨셉 미리보기 — 찰나는 아직 개발 중인 앱입니다. 여기 적힌 동작은 출시 전에 바뀔 수 있습니다.",
    tagline: "스물네 컷, 하룻밤의 기다림.",
    intro: "찰나는 필름 롤처럼 찍는 카메라입니다. 롤을 끼우고, 24컷을 찍고, 다음 날 아침에 봅니다. 계정이 없고, 사진은 iPhone 사진 보관함에 저장됩니다.",
    stepsTitle: "이렇게 사용할 거예요",
    steps: [
      ["롤 끼우기", "앱을 열면 빈 카메라입니다. 여섯 가지 룩 중 하나를 골라 롤을 끼우면 24컷이 주어집니다. 이 선택은 롤이 끝날 때까지 바꿀 수 없습니다."],
      ["찍기", "화면에는 프리뷰와 남은 컷 수뿐입니다. 셔터를 누르면 찍은 사진은 보여 주지 않고 숫자만 하나 줄어듭니다. 확대, 초점 탭, 플래시 정도만 됩니다."],
      ["롤 닫기", "24컷을 다 찍으면 롤이 자동으로 닫힙니다. 다 못 찍은 롤은 ‘지금 현상하기’로 그날 닫을 수도 있고, 며칠에 걸쳐 찍어도 됩니다."],
      ["다음 날 아침 기다리기", "닫힌 롤은 다음 날 아침 8시(설정에서 변경)에 현상됩니다. 알림 하나가 오고, 그때 처음으로 사진을 봅니다."],
      ["인화지 보고, 나누고, 인쇄하기", "현상된 롤은 날짜와 룩 이름이 찍힌 밀착 인화지 한 장으로 나타납니다. 컷을 눌러 크게 보고, 인화지 전체를 이미지로 공유하거나 인쇄합니다. 원본은 사진 앱의 ‘찰나’ 앨범에 있습니다."],
    ],
    featuresTitle: "이런 것들이 있을 거예요",
    features: [
      ["🎞️", "여섯 가지 룩", "Daylight · Mono · Faded · Night · Cool · Grain. 각 룩은 색·입자·비네팅이 한 세트로 고정되어 있습니다."],
      ["🔢", "24컷 카운터", "남은 컷은 화면 구석의 숫자로만 보입니다. 마지막 세 컷은 숫자가 주황색으로 바뀝니다."],
      ["🌅", "현상 시각", "기본은 다음 날 아침 8시. 설정에서 6시부터 정오 사이로 옮길 수 있지만, 다음 날보다 앞당길 수는 없습니다."],
      ["📇", "롤 보관함", "현상된 인화지가 날짜순으로 쌓입니다. 한 달에 몇 롤을 썼는지도 보입니다."],
      ["🖨️", "인쇄", "인화지를 A4 또는 4×6 크기로 AirPrint 인쇄합니다. 컷 사이 여백과 날짜 스탬프가 그대로 나옵니다."],
      ["🌐", "한국어 · English", "기기 언어를 따릅니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["찍은 사진을 바로 볼 수는 없나요?", "없습니다. 찰나의 핵심은 기다림이라, 현상 전에는 어떤 컷도 보여 주지 않습니다. 지금 확인해야 하는 사진은 기본 카메라로 찍어 주세요."],
      ["사진은 어디에 저장되나요?", "현상 전 컷은 앱 안에만 있고, 현상되는 순간 iPhone 사진 보관함의 ‘찰나’ 앨범에 원본 크기로 저장됩니다. 나중에 찰나를 삭제해도 그 사진은 남습니다."],
      ["룩을 중간에 바꿀 수 있나요?", "없습니다. 필름을 끼우면 그 롤은 그 필름입니다. 다른 룩을 쓰려면 지금 롤을 닫고 새 롤을 끼우세요."],
      ["롤을 여러 개 동시에 쓸 수 있나요?", "한 번에 한 롤입니다. 현상을 기다리는 롤은 여러 개일 수 있습니다."],
      ["Hueday와 뭐가 다른가요?", "Hueday는 기분 색을 먼저 고르고 결과를 보면서 찍는 카메라, 찰나는 결과를 보지 않고 찍고 다음 날 보는 카메라입니다. 같은 가족이지만 반대 방향입니다."],
      ["계정이 필요한가요?", "없습니다. 서버도 피드도 없습니다."],
      ["광고가 있나요?", "광고는 넣지 않을 계획이고, 분석 도구도 없습니다. 가격 정책은 출시 전에 이 페이지에 적겠습니다."],
      ["언제 나오나요?", "아직 정하지 않았습니다. 출시 소식은 이 페이지와 zuply.co.kr 앱 목록에 올립니다."],
    ],
    contactTitle: "문의", contactBody: "컨셉에 대한 의견이나 궁금한 점은 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Chalna",
    concept: "Concept preview — Chalna is not built yet. What you read here may change before release.",
    tagline: "Twenty-four frames. One night to develop.",
    intro: "Chalna shoots like a roll of film. Load a roll, take 24 frames, see them the next morning. There is no account, and photos are saved to your iPhone's Photos library.",
    stepsTitle: "How it will work",
    steps: [
      ["Load a roll", "The app opens on an empty camera. Choose one of six looks and load a roll; you get 24 frames. The choice is locked until the roll is finished."],
      ["Shoot", "The screen shows the preview and the frames left. Press the shutter and the count drops by one — you don't see the shot. Zoom, tap to focus and flash are all you get."],
      ["Close the roll", "After 24 frames the roll closes on its own. A half-finished roll can be closed early with “Develop now”, or you can carry it across several days."],
      ["Wait for morning", "A closed roll develops at 8 the next morning (changeable in Settings). One notification arrives, and that is the first time you see the pictures."],
      ["Look, share, print", "A developed roll appears as a contact sheet stamped with the date and the look. Tap a frame to see it big; share the whole sheet as an image or print it. Originals are in the “Chalna” album in Photos."],
    ],
    featuresTitle: "What will be inside",
    features: [
      ["🎞️", "Six looks", "Daylight, Mono, Faded, Night, Cool and Grain. Each is a fixed set of color, grain and vignette."],
      ["🔢", "The 24-frame counter", "Frames left show as a single number in the corner. The last three turn amber."],
      ["🌅", "Developing time", "8 a.m. the next day by default. Settings lets you move it between 6 and noon — never earlier than the next morning."],
      ["📇", "Roll archive", "Developed sheets stack by date, with a count of rolls per month."],
      ["🖨️", "Print", "Print a sheet at A4 or 4×6 over AirPrint, margins and date stamp included."],
      ["🌐", "Korean · English", "Follows your device language."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Can I see a shot right away?", "No. Waiting is the point of Chalna; nothing is shown before the roll develops. For a picture you need now, use the built-in Camera."],
      ["Where are my photos stored?", "Until a roll develops, its frames live inside the app. At developing time they are saved full size to a “Chalna” album in your Photos library. Deleting Chalna later does not remove them."],
      ["Can I change the look mid-roll?", "No. Once loaded, that roll is that stock. Close the roll and load a new one for a different look."],
      ["Can I have several rolls at once?", "One roll in the camera at a time. Any number can be waiting to develop."],
      ["How is this different from Hueday?", "Hueday lets you pick a mood color and shoot with the result on screen. Chalna hides the result until the next morning. Same family, opposite direction."],
      ["Do I need an account?", "No. No server and no feed either."],
      ["Are there ads?", "No ads are planned, and no analytics. Pricing will be posted on this page before release."],
      ["When is it coming?", "Not decided yet. Release news will appear on this page and in the app list at zuply.co.kr."],
    ],
    contactTitle: "Contact", contactBody: "Thoughts on the concept, or a question? Send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function ChalnaGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/chalna" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <p className="mb-10 rounded-xl border border-[#D98E3F]/30 bg-[#D98E3F]/10 px-4 py-3 text-sm leading-relaxed text-[#D98E3F]">{t.concept}</p>
        <header className="mb-16">
          <AppIcon slug="chalna" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">찰나 · Chalna</h1>
          <p className="mt-3 text-lg text-[#D98E3F]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D98E3F]/20 text-sm font-semibold text-[#D98E3F]">{i + 1}</span>
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
              <div key={q} className="border-l-2 border-[#D98E3F]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#D98E3F] px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/chalna/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
