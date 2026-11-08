"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 꾸준 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store · Google Play 의 지원 URL 로 씁니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 꾸준 소개",
    tagline: "몇 가지 습관, 하루 한 번의 탭.",
    intro: "꾸준은 습관 몇 개를 하루 한 번의 탭으로 이어 가는 앱입니다. 연속 기록, 습관별 알림, 위젯, 월간 격자가 전부이고, 계정은 없습니다. 기록은 이 기기 안에만 남습니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["습관 넣기", "이름, 이모지 하나, 색, 그리고 요일을 정합니다. 매일·평일·주말 중에 고르거나 요일을 하나씩 콕 집습니다. 원하면 알림 시각도 함께. 한 번에 다섯 개까지입니다."],
      ["오늘 탭하기", "홈에 오늘의 습관이 타일로 놓입니다. 했으면 한 번 탭 — 타일이 채워지고 🔥가 하나 오릅니다. 잘못 눌렀으면 다시 탭해서 되돌립니다. 오늘 쉬는 습관은 아래에 흐리게 보입니다."],
      ["연속 기록 지키기", "예정된 날마다 체크하면 습관별 연속 기록이 이어집니다. 쉬는 요일은 세지 않습니다. 하루 놓쳤다면 다음 날 홈에 ‘되살리기’ 버튼이 딱 한 번 나타납니다."],
      ["위젯 올리기", "iPhone은 홈 화면 작은 위젯(고른 습관 하나와 🔥), 중간 위젯(오늘의 습관 전부), 잠금화면 위젯(고른 습관의 연속 기록)이 있습니다. 중간 위젯에서는 습관을 탭하면 앱을 열지 않고 바로 체크됩니다. Android는 홈 화면 위젯 하나를 원하는 크기로 두고, 행을 탭해 바로 체크합니다."],
      ["한 달 돌아보기", "습관을 열면 연속·최고·달성률과 함께 이번 달이 칸으로 펼쳐집니다. 채운 날, 빈 날, 되살린 날이 색으로 구분되고 아래에 이달 달성률 하나. 이전 달로 넘겨 볼 수 있고, 지난 날짜를 탭해 고칠 수 있습니다."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["🔔", "알림은 기기 안에서", "습관마다 정한 시각에 로컬 알림이 하나 옵니다. 쉬는 요일에는 예약하지 않고, 이미 체크한 날은 조용히 넘어갑니다. 서버 푸시가 아닙니다."],
      ["♻️", "되살리기는 한 번", "놓친 다음 날에만, 습관당 한 번 쓸 수 있습니다. 쓰고 나면 예정된 날에 7번을 더 체크해야 다시 생깁니다. Kamusta·데일리 텐과 같은 규칙입니다."],
      ["📆", "요일 지정", "‘주 3회’ 대신 요일을 콕 집습니다. 그래야 쉬는 날이 분명하고, 연속 기록도 억울하게 끊기지 않습니다."],
      ["📱", "위젯", "iPhone: 홈 화면 작게·중간, 잠금화면 원형·직사각형·한 줄. Android: 크기를 바꿀 수 있는 홈 화면 위젯 하나(잠금화면 위젯 없음). 위젯은 앱이 기기에 저장한 데이터만 씁니다."],
      ["📅", "월간 격자", "습관마다 한 달을 칸으로. 채움·비움·되살림 세 가지 색과 달성률 하나. 통계는 여기까지입니다."],
      ["📤", "CSV 내보내기", "설정에서 습관별 예정일과 상태(done·repaired·missed)를 CSV 파일로 내보냅니다. 파일을 어디에 둘지는 직접 고릅니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["왜 다섯 개까지만인가요?", "습관 앱은 늘 목록이 길어지다 버려집니다. 다섯 개면 매일 다 탭할 수 있고, 여섯 번째를 넣으려면 하나를 보내야 하니 정말 이어 갈 것만 남습니다. 습관을 보내면 그 습관의 체크와 연속 기록도 함께 지워집니다."],
      ["하루를 놓쳤어요.", "다음 날 홈에 ‘되살리기’가 나타납니다. 한 번 누르면 놓친 날이 채워지고 연속 기록이 이어집니다. 다음 되살리기는 예정된 날에 7번을 더 체크한 뒤에 다시 생깁니다."],
      ["위젯이 인터넷이나 계정을 쓰나요?", "아니요. 위젯은 앱이 이 기기에 저장한 데이터를 읽어 보여줄 뿐입니다. 네트워크 연결이 없습니다."],
      ["위젯에서 바로 체크할 수 있나요?", "네. iPhone은 중간 크기 홈 화면 위젯에서, Android는 홈 화면 위젯에서 습관을 탭하면 바로 체크됩니다. 작은 위젯과 잠금화면 위젯은 표시만 합니다."],
      ["Android에 잠금화면 위젯이 없어요.", "Android에는 앱이 쓸 수 있는 일반 잠금화면 위젯 자리가 없어서 홈 화면 위젯만 있습니다."],
      ["알림이 서버에서 오나요?", "아니요. 알림은 기기 안에서 예약하는 로컬 알림입니다. 알림 권한을 거절해도 앱은 그대로 동작합니다. 설정에서 알림 전체를 끄거나 새 습관의 기본 알림 시각을 바꿀 수 있습니다."],
      ["폰을 바꾸면 기록은요?", "기기 백업(iCloud 백업, Android 백업)에 포함되어 새 폰에서 복원됩니다. 개발자 서버를 거치는 동기화는 없습니다. 따로 보관하고 싶으면 CSV로 내보내세요."],
      ["Kamusta와 무슨 관계인가요?", "연속 기록을 세고 되살리는 규칙이 같습니다. 데이터는 공유하지 않으며, 두 앱은 서로의 기록을 보지 못합니다."],
      ["계정이나 광고가 있나요?", "없습니다. 무료이고 계정·광고·인앱 구입·분석 도구가 없습니다."],
    ],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Kkujun",
    tagline: "A few habits, one tap a day.",
    intro: "Kkujun keeps a few habits going with one tap a day. Streaks, a reminder per habit, widgets and a monthly grid are the whole app; there is no account, and records stay on this device.",
    stepsTitle: "How it works",
    steps: [
      ["Add a habit", "Give it a name, one emoji, a color and its days — every day, weekdays, weekends, or the exact days you pick. Add a reminder time if you want one. Up to five habits at a time."],
      ["Tap it today", "Home shows today's habits as tiles. Done? Tap once — the tile fills and the 🔥 goes up by one. Tapped by mistake? Tap again to undo. Habits resting today sit dimmed below."],
      ["Keep the streak", "Check a habit on each of its scheduled days and its streak grows. Off days are not counted. Miss a day and a “Repair” button appears on Home the next day, once."],
      ["Put up a widget", "On iPhone there is a small Home Screen widget (one habit you choose and its 🔥), a medium one (all of today's habits) and Lock Screen widgets (the streak of a habit you choose). Tap a habit on the medium widget to check it without opening the app. On Android, one Home Screen widget resizes as you like, and tapping a row checks it."],
      ["Look back at the month", "Open a habit for its streak, best and rate, and the month unfolds as squares — filled, empty and repaired days in their own colors, with this month's rate below. Step back to earlier months, and tap a past day to fix it."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["🔔", "Reminders stay on the phone", "One local notification per habit at the time you set. Nothing is scheduled on an off day, and a habit already checked stays quiet. This is not a server push."],
      ["♻️", "One repair", "Available only on the day after a miss, once per habit. After you use it, seven more check-ins on scheduled days bring it back. Same rule as Kamusta and Daily Ten."],
      ["📆", "Days, not counts", "Instead of “three times a week” you pick the days. Off days are then unambiguous, and a streak never breaks unfairly."],
      ["📱", "Widgets", "iPhone: small and medium on the Home Screen; circular, rectangular and inline on the Lock Screen. Android: one resizable Home Screen widget (no Lock Screen widgets). Widgets use only the data the app stores on the device."],
      ["📅", "The monthly grid", "A month of squares per habit: filled, empty, repaired, and a single completion rate. That is as far as statistics go."],
      ["📤", "CSV export", "Settings exports every scheduled day per habit with its status (done, repaired, missed) as a CSV file. You choose where it goes."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Why only five habits?", "Habit apps die of long lists. Five you can tap every day, and since a sixth means retiring one, only the habits you really mean to keep stay in. Retiring a habit deletes its checks and streak too."],
      ["I missed a day.", "The next day, “Repair” appears on Home. Tap it once and the missed day is filled, streak intact. The next repair comes back after seven more check-ins on scheduled days."],
      ["Do the widgets use the internet or an account?", "No. Widgets only read the data the app has stored on this device. There is no network connection."],
      ["Can I check a habit from the widget?", "Yes. Tap a habit on the medium Home Screen widget on iPhone, or on the Home Screen widget on Android, and it is checked. The small widget and Lock Screen widgets only display."],
      ["There are no Lock Screen widgets on Android.", "Android has no general Lock Screen widget area for apps, so Kkujun offers a Home Screen widget there."],
      ["Do reminders come from a server?", "No. Reminders are local notifications scheduled on the device. The app works if you decline notifications. Settings lets you turn all reminders off or change the default time for new habits."],
      ["What happens when I change phones?", "Everything is included in your device backup (iCloud Backup or Android backup) and restores on the new phone. There is no sync through a developer server. Export a CSV if you want your own copy."],
      ["How is it related to Kamusta?", "It follows the same rule for counting and repairing streaks. No data is shared; neither app can see the other's records."],
      ["Is there an account or ads?", "No. Kkujun is free, with no account, ads, in-app purchases or analytics."],
    ],
    contactTitle: "Contact", contactBody: "If your question isn't answered here, send us a mail and we'll get back to you.",
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
