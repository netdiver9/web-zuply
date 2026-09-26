"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** Packly 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store · Play 의 지원 URL 로 씁니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← Packly 소개",
    tagline: "여행은 설레게, 짐은 간단하게.",
    intro: "Packly는 목적지·날짜·동행·활동을 고르면 날씨를 반영한 준비물 목록을 만들어 주는 앱입니다. 인터넷은 날씨 예보를 가져올 때만 쓰고, 목록과 체크는 기기 안에서 바로 동작합니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["여행 만들기", "홈에서 ‘새 여행’을 누르고 도시 → 날짜 → 동행 → 활동 순서로 고릅니다. 각 단계에 기본값이 있어 그냥 넘어가도 됩니다. 도시는 한국어·영어·일본어 어느 쪽으로 검색해도 찾습니다."],
      ["목록 확인하기", "예보를 확인하고 조건에 맞는 항목을 골라 목록을 만듭니다. 항목마다 ‘강수 확률 70%가 예상되어 추천했어요’처럼 이유가 붙습니다. ‘이런 것도’를 누르면 추가 제안이 펼쳐집니다."],
      ["다듬기", "항목을 추가·삭제하고 이름·수량·카테고리·우선순위를 바꿉니다. 직접 쓴 항목은 언어를 바꿔도 그대로 남습니다. ‘목록 다시 생성’을 해도 체크·메모·담당·직접 추가한 항목은 보존됩니다."],
      ["함께 가는 사람과 나누기", "목록 화면 오른쪽 위 사람 아이콘에서 동행자를 추가하고, 항목을 열어 담당자를 정합니다. 담당자별로 남은 개수를 볼 수 있습니다."],
      ["체크하고 출발하기", "출발 7일 전, 2일 전, 당일 오전에 알림이 옵니다. 필수 항목을 먼저 확인하고 진행률이 100%가 되면 준비 끝입니다."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["🌦", "예보 기준 표시", "언제 기준 예보인지 보여주고, 출발일이 예보 범위(약 2주) 밖이면 그렇게 알려줍니다."],
      ["🌡", "단위 선택", "섭씨/화씨를 바꾸면 추천 이유의 온도도 함께 바뀝니다."],
      ["🗂", "지난 여행", "다녀온 여행은 지난 여행으로 내려가고, 언제든 다시 볼 수 있습니다."],
      ["🔕", "위치 권한 없음", "위치를 묻지 않습니다. 예보는 고른 도시의 좌표로 조회합니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["날씨가 안 나와요.", "인터넷 연결을 확인하고 ‘다시 시도’를 눌러 주세요. 출발일이 약 2주보다 멀면 예보가 아직 없어 일반 목록으로 만들어지고, 날짜가 가까워지면 다시 생성할 때 예보가 반영됩니다."],
      ["초대 링크로 다른 사람과 같이 체크할 수 있나요?", "이번 버전에서는 한 기기 안에서 동행자를 추가하고 담당을 나누는 방식입니다. 기기 간 실시간 공유는 다음 버전에서 준비하고 있습니다."],
      ["알림이 오지 않아요.", "설정에서 알림이 켜져 있는지, 기기 설정에서 Packly 알림 권한이 허용되어 있는지 확인해 주세요. 알림은 출발일 기준으로 자동 예약됩니다."],
      ["데이터를 지우고 싶어요.", "설정 → 모든 데이터 삭제를 누르면 여행·목록·설정이 모두 지워집니다. 앱을 삭제해도 함께 사라집니다."],
      ["추천이 이상해요.", "어떤 여행이었는지와 함께 메일로 알려주시면 추천 규칙을 고치겠습니다."],
    ],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Packly",
    tagline: "Pack smart. Travel light.",
    intro: "Packly builds a weather-aware packing list from your destination, dates, companions and activities. The internet is used only to fetch the forecast; lists and check-offs work on the device.",
    stepsTitle: "How it works",
    steps: [
      ["Create a trip", "Tap “New trip” on Home and choose city → dates → companions → activities. Every step has a default, so you can just move on. Cities can be searched in Korean, English or Japanese."],
      ["Review the list", "Packly checks the forecast, matches the conditions and builds your list. Each item carries a reason such as “70% chance of rain.” Tap “Also consider” for extra suggestions."],
      ["Fine-tune", "Add or remove items and change name, quantity, category or priority. Items you typed keep their wording when you switch language. Regenerating keeps your check-offs, notes, assignments and custom items."],
      ["Share the load", "Tap the people icon on the list to add companions, then open an item to assign it. You can see what each person still has left."],
      ["Check off and go", "Reminders arrive 7 days, 2 days and the morning before departure. Clear the essentials first; at 100% you're ready."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["🌦", "Forecast transparency", "Shows when the forecast was fetched, and says so when your dates are beyond the ~2-week horizon."],
      ["🌡", "Units", "Switch °C/°F and the temperatures in the reasons switch too."],
      ["🗂", "Past trips", "Finished trips move to Past and stay available."],
      ["🔕", "No location permission", "Packly never asks for your location; the forecast uses the chosen city's coordinates."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["The weather isn't showing.", "Check your connection and tap “Retry.” If departure is more than about two weeks away there is no forecast yet, so the list is built without it; regenerate closer to the date."],
      ["Can I share a list with someone else's phone?", "In this version you add companions and split items on one device. Live sharing across devices is planned for the next version."],
      ["Reminders aren't arriving.", "Check that reminders are on in Settings and that notifications for Packly are allowed in your phone's settings. They are scheduled from the departure date."],
      ["How do I delete my data?", "Settings → Delete all data removes every trip, list and setting. Deleting the app does the same."],
      ["A suggestion looks wrong.", "Email us which trip it was and we'll fix the rule."],
    ],
    contactTitle: "Contact", contactBody: "If your question isn't here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function PacklyGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/packly" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <header className="mb-16">
          <AppIcon slug="packly" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Packly</h1>
          <p className="mt-3 text-lg text-[#5B8DEF]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5B8DEF]/20 text-sm font-semibold text-[#5B8DEF]">{i + 1}</span>
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
              <div key={q} className="border-l-2 border-[#5B8DEF]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#5B8DEF] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/packly/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
