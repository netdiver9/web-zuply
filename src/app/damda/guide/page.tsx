"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 담다 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store 의 지원 URL 로 씁니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 담다 소개",
    tagline: "소중한 날을 가장 가까이에.",
    intro: "담다는 디데이와 기념일을 잠금화면·홈 화면 위젯에 담아두는 앱입니다. 계정도 서버도 없고, 모든 날짜·메모·사진은 이 기기 안에만 저장됩니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["날짜 넣기", "첫 화면에서 제목과 날짜를 넣으면 카드가 바로 만들어집니다. D-day(남은 날)와 D+day(지난 날), 첫날을 1일로 셀지, 매년 반복할지도 여기서 고릅니다."],
      ["위젯 추가하기", "‘위젯’ 탭에 화면별 설치 방법이 있습니다. 잠금화면은 잠금화면을 길게 눌러 ‘사용자화’, 홈 화면은 빈 곳을 길게 눌러 ‘+’를 누르고 ‘담다’를 찾으세요."],
      ["위젯마다 날짜 고르기", "추가한 위젯을 길게 눌러 ‘위젯 편집’을 열면 어떤 날짜를 보여줄지, 어떤 테마로 보여줄지 고를 수 있습니다. 위젯마다 다르게 둘 수 있습니다."],
      ["꾸미기", "이벤트의 ‘꾸미기’에서 테마와 사진을 고릅니다. 미리보기가 실제 위젯과 똑같이 보입니다."],
      ["알림 켜기", "이벤트마다 30일 전·7일 전·1일 전·당일 알림을 원하는 시각에 켤 수 있습니다. 알림 권한은 처음 켜는 순간에만 묻습니다."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["📆", "위젯 6종", "잠금화면 한 줄·원형·직사각형, 홈 화면 작게·중간·크게. 날짜 하나를 크게, 또는 가까운 날짜 여러 개를 목록으로."],
      ["🔢", "정확한 날짜 계산", "시간대가 바뀌어도, 자정을 넘겨도 계산이 흔들리지 않습니다. 2월 29일 기념일도 규칙에 따라 처리합니다."],
      ["🎉", "다가오는 기념일", "100일, 1주년처럼 다가오는 기념일을 미리 보여줍니다."],
      ["🙈", "잠금화면에서 가리기", "잠금화면 위젯에서는 메모와 사진을 가릴 수 있습니다."],
      ["💾", "백업", "설정에서 이벤트와 알림 설정을 JSON 파일로 내보내고, 새 기기에서 가져옵니다."],
      ["✨", "Damda Pro", "무료로 이벤트 10개, 기본 테마, 모든 위젯 크기, 알림을 쓸 수 있습니다. Pro는 무제한 이벤트와 프리미엄 테마를 엽니다. 1회 구입이며 구독이 아닙니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["위젯이 갱신되지 않아요.", "디데이는 자정에 바뀌며, 앱에서 저장할 때마다 위젯에 바로 반영됩니다. 그래도 오래된 값이 보이면 위젯을 지우고 다시 추가해 주세요. 잠금화면 위젯은 iOS 17 이상에서 됩니다."],
      ["잠금화면 위젯에 사진이 안 보여요.", "잠금화면은 시스템 규칙상 단색으로 그려지며, 메모와 사진은 이벤트 설정에서 가릴 수 있습니다. 사진 테마는 홈 화면 위젯에서 보입니다."],
      ["첫날을 1일로 세는 건 무엇인가요?", "만난 날을 1일로 세는 방식입니다. 켜면 같은 날짜가 하루 더 크게 셉니다(100일 계산에 흔히 쓰는 방식)."],
      ["2월 29일 기념일은 어떻게 되나요?", "평년에는 2월 28일로 맞춥니다."],
      ["무료로 몇 개까지 되나요?", "이벤트 10개까지 무료입니다. 더 필요하면 Damda Pro를 한 번 구입하면 됩니다. 구독이 아니며, 설정의 ‘구입 복원’으로 다른 기기에서도 되찾을 수 있습니다."],
      ["기기를 바꾸려면?", "설정에서 JSON 백업을 내보내 새 기기로 옮긴 뒤 가져오세요. 백업에는 이벤트·메모·알림 설정이 들어가며 사진은 아직 포함되지 않으니 다시 골라 주세요."],
      ["두근 링크는 무엇인가요?", "설정에 함께 만든 커플 앱 두근(Dugeun)으로 가는 링크가 있습니다. 담다의 데이터는 두근으로 넘어가지 않습니다."],
      ["광고가 있나요?", "없습니다. 분석 도구도 없고, 앱은 구입 확인 외에는 인터넷을 쓰지 않습니다."],
      ["모든 데이터를 지우려면?", "앱을 삭제하면 이벤트·메모·사진·설정이 모두 사라집니다. 서버에 남는 것은 없습니다."],
    ],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Damda",
    tagline: "Keep your special days close.",
    intro: "Damda puts countdowns and anniversaries on your Lock Screen and Home Screen widgets. There is no account and no server; every date, note and photo is stored only on this device.",
    stepsTitle: "How it works",
    steps: [
      ["Add a date", "Type a title and pick a date on the first screen, and the card is ready. Choose D-day (days left) or D+day (days since), whether to count the first day as day 1, and whether it repeats every year."],
      ["Add the widget", "The Widgets tab shows the steps for each screen. For the Lock Screen, press and hold it and tap Customize; for the Home Screen, press and hold an empty spot, tap +, and look for Damda."],
      ["Pick a date per widget", "Press and hold a widget and open Edit Widget to choose which date it shows and which theme it uses. Each widget can be different."],
      ["Decorate", "Open Decorate on an event to choose a theme and a photo. The preview looks exactly like the real widget."],
      ["Turn on reminders", "Each event can remind you 30 days, 7 days and 1 day before, and on the day, at the time you choose. Notification permission is asked only when you first turn one on."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["📆", "Six widgets", "Inline, circular and rectangular on the Lock Screen; small, medium and large on the Home Screen. One date big, or a list of the nearest dates."],
      ["🔢", "Accurate day math", "Results stay correct across time zone changes and past midnight. February 29 anniversaries follow a clear rule."],
      ["🎉", "Upcoming milestones", "Milestones such as 100 days and 1 year are shown ahead of time."],
      ["🙈", "Hide on the Lock Screen", "Notes and photos can be hidden on Lock Screen widgets."],
      ["💾", "Backup", "Export events and reminder settings as a JSON file from Settings, and import it on a new phone."],
      ["✨", "Damda Pro", "The free version includes 10 events, the core themes, every widget size and reminders. Pro unlocks unlimited events and premium themes. One-time purchase, not a subscription."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["The widget isn't updating.", "D-day changes at midnight, and every save in the app pushes to the widget right away. If an old value still shows, remove the widget and add it again. Lock Screen widgets need iOS 17 or later."],
      ["My photo doesn't show on the Lock Screen widget.", "The Lock Screen is drawn in a single tint by the system, and notes and photos can be hidden there in the event settings. The photo theme appears on Home Screen widgets."],
      ["What does “count the first day as day 1” mean?", "The day you met counts as day 1. With it on, the same date counts one day higher — the usual way 100-day anniversaries are counted."],
      ["What happens to a February 29 anniversary?", "In non-leap years it falls on February 28."],
      ["How many events are free?", "Up to 10. If you need more, buy Damda Pro once. It is not a subscription, and Restore Purchases in Settings brings it back on another phone."],
      ["How do I move to a new phone?", "Export a JSON backup from Settings, move it to the new phone and import it. The backup holds events, notes and reminder settings; photos are not included yet, so pick them again."],
      ["What is the Dugeun link?", "Settings has a link to Dugeun, our companion couple app. No Damda data is passed to it."],
      ["Are there ads?", "No. No analytics either, and the app uses the internet only to verify the purchase."],
      ["How do I delete everything?", "Deleting the app removes every event, note, photo and setting. Nothing remains on a server."],
    ],
    contactTitle: "Contact", contactBody: "If your question isn't here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function DamdaGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/damda" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <header className="mb-16">
          <AppIcon slug="damda" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">담다 · Damda</h1>
          <p className="mt-3 text-lg text-[#E8607A]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8607A]/20 text-sm font-semibold text-[#E8607A]">{i + 1}</span>
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
              <div key={q} className="border-l-2 border-[#E8607A]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#E8607A] px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/damda/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
