"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 꾸준 사용 설명서 겸 지원 페이지 (한국어 / 영어). 아직 컨셉 단계 — 출시 전에 실제 앱과 맞춰 고칩니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 꾸준 소개",
    concept: "컨셉 미리보기 — 꾸준은 아직 개발 중인 앱입니다. 여기 적힌 동작은 출시 전에 바뀔 수 있습니다.",
    tagline: "몇 가지 습관, 하루 한 번의 탭.",
    intro: "꾸준은 습관 몇 개를 하루 한 번의 탭으로 이어 가는 앱입니다. 연속 기록, 습관별 알림, 위젯, 월간 격자가 전부이고, 계정은 없습니다. 기록은 이 기기 안에만 남습니다.",
    stepsTitle: "이렇게 사용할 거예요",
    steps: [
      ["습관 넣기", "이름, 이모지 하나, 그리고 요일을 정합니다. 매일이든 월·수·금이든 좋습니다. 원하면 알림 시각도 함께. 한 번에 다섯 개까지입니다."],
      ["오늘 탭하기", "홈에 오늘의 습관이 타일로 놓입니다. 했으면 한 번 탭 — 타일이 채워지고 🔥가 하나 오릅니다. 잘못 눌렀으면 다시 탭해서 되돌립니다."],
      ["연속 기록 지키기", "예정된 날마다 체크하면 습관별 연속 기록이 이어집니다. 쉬는 요일은 세지 않습니다. 하루 놓쳤다면 다음 날 홈에 ‘되살리기’ 버튼이 딱 한 번 나타납니다."],
      ["위젯 올리기", "홈 화면 위젯은 오늘의 습관과 체크 상태를, 잠금화면 위젯은 고른 습관의 연속 기록을 보여줍니다. 중간 크기 위젯에서는 앱을 열지 않고 바로 체크할 수 있게 할 계획입니다."],
      ["한 달 돌아보기", "습관을 열면 이번 달이 칸으로 펼쳐집니다. 채운 날, 빈 날, 되살린 날이 색으로 구분되고 아래에 달성률 하나. 이전 달로 넘겨 볼 수 있습니다."],
    ],
    featuresTitle: "이런 것들이 있을 거예요",
    features: [
      ["🔔", "알림은 기기 안에서", "습관마다 정한 시각에 로컬 알림이 하나 옵니다. 쉬는 요일에는 예약하지 않고, 이미 체크한 날은 조용히 넘어갑니다. 서버 푸시가 아닙니다."],
      ["♻️", "되살리기는 한 번", "놓친 다음 날에만, 습관당 한 번 쓸 수 있습니다. 쓰고 나면 7일을 채워야 다시 생깁니다. Kamusta·데일리 텐과 같은 규칙입니다."],
      ["📆", "요일 지정", "‘주 3회’ 대신 요일을 콕 집습니다. 그래야 쉬는 날이 분명하고, 연속 기록도 억울하게 끊기지 않습니다."],
      ["📱", "위젯 세 가지", "홈 화면 작은 위젯(습관 하나와 🔥), 중간 위젯(오늘 전부), 잠금화면 원형·직사각형 위젯(연속 기록). 위젯은 앱이 기기에 저장한 데이터를 읽기만 합니다."],
      ["📅", "월간 격자", "습관마다 한 달을 칸으로. 채움·비움·되살림 세 가지 색과 달성률 하나. 통계는 여기까지입니다."],
      ["🔒", "기기 안에만", "습관, 체크, 연속 기록, 설정 모두 이 기기에만 저장됩니다. iOS 기기 백업에 포함되어 새 폰으로 옮겨집니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["왜 다섯 개까지만인가요?", "습관 앱은 늘 목록이 길어지다 버려집니다. 다섯 개면 매일 다 탭할 수 있고, 여섯 번째를 넣으려면 하나를 보내야 하니 정말 이어 갈 것만 남습니다."],
      ["하루를 놓쳤어요.", "다음 날 홈에 ‘되살리기’가 나타납니다. 한 번 누르면 놓친 날이 채워지고 연속 기록이 이어집니다. 다음 되살리기는 7일을 채운 뒤에 다시 생깁니다."],
      ["위젯이 인터넷이나 계정을 쓰나요?", "아니요. 위젯은 앱이 이 기기에 저장한 데이터를 읽어 보여줄 뿐입니다. 네트워크 연결이 없습니다."],
      ["위젯에서 바로 체크할 수 있나요?", "중간 크기 홈 화면 위젯에서 탭으로 체크하는 것을 계획하고 있습니다. 잠금화면 위젯은 표시만 합니다."],
      ["알림이 서버에서 오나요?", "아니요. 알림은 기기 안에서 예약하는 로컬 알림입니다. 알림 권한을 거절해도 앱은 그대로 동작합니다."],
      ["계정이 필요한가요?", "없습니다. 습관과 기록은 기기 안에만 있습니다."],
      ["폰을 바꾸면 기록은요?", "iOS 기기 백업(iCloud 백업)에 포함되어 새 폰에서 복원됩니다. 개발자 서버를 거치는 동기화는 없습니다."],
      ["Kamusta와 무엇을 공유하나요?", "연속 기록을 세고 되살리는 규칙, 그리고 로컬 알림을 예약하는 코드를 같이 씁니다. 데이터는 공유하지 않으며, 두 앱은 서로의 기록을 보지 못합니다."],
      ["광고가 있나요?", "광고는 넣지 않을 계획이고, 분석 도구도 없습니다. 가격 정책은 출시 전에 이 페이지에 적겠습니다."],
      ["언제 나오나요?", "아직 정하지 않았습니다. 출시 소식은 이 페이지와 zuply.co.kr 앱 목록에 올립니다."],
    ],
    contactTitle: "문의", contactBody: "컨셉에 대한 의견이나 궁금한 점은 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Kkujun",
    concept: "Concept preview — Kkujun is not built yet. What you read here may change before release.",
    tagline: "A few habits, one tap a day.",
    intro: "Kkujun keeps a few habits going with one tap a day. Streaks, a reminder per habit, widgets and a monthly grid are the whole app; there is no account, and records stay on this device.",
    stepsTitle: "How it will work",
    steps: [
      ["Add a habit", "Give it a name, one emoji and its days — every day, or Monday, Wednesday and Friday. Add a reminder time if you want one. Up to five habits at a time."],
      ["Tap it today", "Home shows today's habits as tiles. Done? Tap once — the tile fills and the 🔥 goes up by one. Tapped by mistake? Tap again to undo."],
      ["Keep the streak", "Check a habit on each of its scheduled days and its streak grows. Off days are not counted. Miss a day and a “Repair” button appears on Home the next day, once."],
      ["Put up a widget", "The Home Screen widget shows today's habits and their checks; the Lock Screen widget shows the streak of a habit you choose. The plan is to let you check a habit right from the medium widget without opening the app."],
      ["Look back at the month", "Open a habit and the month unfolds as squares — filled, empty and repaired days in their own colors, with one completion rate below. Swipe to earlier months."],
    ],
    featuresTitle: "What will be inside",
    features: [
      ["🔔", "Reminders stay on the phone", "One local notification per habit at the time you set. Nothing is scheduled on an off day, and a habit already checked stays quiet. This is not a server push."],
      ["♻️", "One repair", "Available only on the day after a miss, once per habit. After you use it, seven clean days bring it back. Same rule as Kamusta and Daily Ten."],
      ["📆", "Days, not counts", "Instead of “three times a week” you pick the days. Off days are then unambiguous, and a streak never breaks unfairly."],
      ["📱", "Three widgets", "A small Home Screen widget (one habit and its 🔥), a medium one (all of today), and circular and rectangular Lock Screen widgets (the streak). Widgets only read the data the app stores on the device."],
      ["📅", "The monthly grid", "A month of squares per habit: filled, empty, repaired, and a single completion rate. That is as far as statistics go."],
      ["🔒", "On this device only", "Habits, checks, streaks and settings are stored only on this device, and travel to a new phone through your iOS device backup."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Why only five habits?", "Habit apps die of long lists. Five you can tap every day, and since a sixth means retiring one, only the habits you really mean to keep stay in."],
      ["I missed a day.", "The next day, “Repair” appears on Home. Tap it once and the missed day is filled, streak intact. The next repair comes back after seven clean days."],
      ["Do the widgets use the internet or an account?", "No. Widgets only read the data the app has stored on this device. There is no network connection."],
      ["Can I check a habit from the widget?", "That is the plan for the medium Home Screen widget. Lock Screen widgets only display."],
      ["Do reminders come from a server?", "No. Reminders are local notifications scheduled on the device. The app works if you decline notifications."],
      ["Do I need an account?", "No. Habits and records live only on the device."],
      ["What happens when I change phones?", "Everything is included in your iOS device backup (iCloud Backup) and restores on the new phone. There is no sync through a developer server."],
      ["What does it share with Kamusta?", "The code that counts and repairs streaks, and the code that schedules local reminders. No data is shared; neither app can see the other's records."],
      ["Are there ads?", "No ads are planned, and no analytics. Pricing will be posted on this page before release."],
      ["When is it coming?", "Not decided yet. Release news will appear on this page and in the app list at zuply.co.kr."],
    ],
    contactTitle: "Contact", contactBody: "Thoughts on the concept, or a question? Send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function KkujunGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/kkujun" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <p className="mb-10 rounded-xl border border-[#2F9E6B]/30 bg-[#2F9E6B]/10 px-4 py-3 text-sm leading-relaxed text-[#7ED3A8]">{t.concept}</p>
        <header className="mb-16">
          <AppIcon slug="kkujun" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">꾸준 · Kkujun</h1>
          <p className="mt-3 text-lg text-[#2F9E6B]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2F9E6B]/20 text-sm font-semibold text-[#2F9E6B]">{i + 1}</span>
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
              <div key={q} className="border-l-2 border-[#2F9E6B]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#2F9E6B] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/kkujun/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
