"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 오늘도 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store · Play 의 지원 URL 로 씁니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 오늘도 소개",
    tagline: "기분 하나, 한 줄이면 충분해요.",
    intro: "오늘도는 기분 이모지 하나와 한 줄로 하루를 남기는 일기 앱입니다. 인터넷을 쓰지 않으며, 모든 기록은 이 기기 안에서만 저장되고 읽힙니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["오늘 기분 고르기", "‘오늘’ 탭에서 기분 5단계 중 하나를 누릅니다. 이모지 하나가 그날의 색이 됩니다."],
      ["한 줄 적기", "100자 안에서 한 줄을 적고 저장합니다. 길게 쓰지 않아도 괜찮습니다. 저장한 뒤에도 다시 열어 고칠 수 있습니다."],
      ["지난 날짜 채우기", "달력에서 비어 있는 날을 눌러 그날의 기분과 한 줄을 뒤늦게 남길 수 있습니다."],
      ["달력으로 돌아보기", "‘달력’ 탭에서 한 달이 기분 색으로 채워진 모습을 봅니다. 기록한 날 수와 연속 기록이 함께 보입니다."],
      ["월간 회고 카드 만들기", "달력에서 ‘이 달 돌아보기’를 누르면 기록한 날, 가장 많은 기분, 최고의 하루, 기분 분포, 최장 연속 기록이 카드로 만들어집니다. 이미지로 저장하거나 공유할 수 있습니다."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["🔥", "스트릭", "연속으로 기록한 날 수를 세어 줍니다. 하루 빠져도 질책하지 않습니다."],
      ["⏰", "리마인더", "원하는 시각에 하루 한 번 알림이 옵니다. 설정에서 켜고 끄고 시각을 바꿉니다."],
      ["🔒", "잠금", "Face ID 또는 기기 암호로 앱을 잠급니다. 켜면 앱을 열 때마다 확인합니다."],
      ["📤", "내보내기", "설정에서 전체 기록을 텍스트(.txt)나 CSV(.csv) 파일로 내보냅니다."],
      ["🎨", "테마와 시작 요일", "라이트·다크·시스템 테마, 달력의 시작 요일(월·일)을 고를 수 있습니다."],
      ["🌐", "한국어 · English", "기기 언어를 따르며, 설정에서 언어 설정으로 바로 갈 수 있습니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["기록이 어디에 저장되나요?", "이 기기 안에만 저장됩니다. 서버가 없으므로 다른 기기와 동기화되지 않고, 기기를 바꿀 때는 설정의 내보내기로 파일을 옮겨 두세요."],
      ["알림이 오지 않아요.", "설정에서 리마인더가 켜져 있는지, 기기 설정에서 오늘도의 알림 권한이 허용되어 있는지 확인해 주세요. 알림은 기기 안에서 예약되는 로컬 알림입니다."],
      ["잠금을 풀 수 없어요.", "Face ID가 실패하면 기기 암호로 풀 수 있습니다. 기기 암호를 아예 설정하지 않은 상태에서는 잠금을 켤 수 없습니다."],
      ["한 줄을 지우고 싶어요.", "‘기록’ 탭에서 항목을 밀어 삭제합니다. 삭제한 기록은 되돌릴 수 없습니다."],
      ["모든 데이터를 지우려면?", "앱을 삭제하면 모든 기록이 함께 사라집니다. 서버에 남는 것은 없습니다."],
      ["광고가 있나요?", "없습니다. 분석 도구도 없고, 앱은 인터넷에 접속하지 않습니다."],
    ],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Oneuldo",
    tagline: "A mood and one line. That's it.",
    intro: "Oneuldo keeps each day as one mood emoji and one line. It never uses the internet; every entry is stored and read only on this device.",
    stepsTitle: "How it works",
    steps: [
      ["Pick today's mood", "On the Today tab, tap one of five moods. That emoji becomes the day's color."],
      ["Write one line", "Write up to 100 characters and save. Nothing long is needed. You can reopen and edit it later."],
      ["Fill in past days", "Tap an empty day on the calendar to add its mood and line after the fact."],
      ["Look back on the calendar", "The Calendar tab shows the month filled with mood colors, along with days written and your current streak."],
      ["Make a monthly recap card", "Tap “Look back on this month” on the calendar. Days recorded, most frequent mood, best day, mood distribution and longest streak are rendered as a card you can save or share as an image."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["🔥", "Streak", "Counts consecutive days written. Missing one is never scolded."],
      ["⏰", "Reminder", "One reminder a day at the time you choose. Turn it on or off and change the time in Settings."],
      ["🔒", "Lock", "Lock the app with Face ID or your passcode. When on, it asks every time the app opens."],
      ["📤", "Export", "Export every entry as a text (.txt) or CSV (.csv) file from Settings."],
      ["🎨", "Theme and first weekday", "Light, dark or system theme, and a Monday or Sunday start for the calendar."],
      ["🌐", "Korean · English", "Follows your device language; Settings links straight to the language setting."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Where are my entries stored?", "Only on this device. There is no server, so nothing syncs to other devices; when you change phones, export a file from Settings first."],
      ["Reminders aren't arriving.", "Check that the reminder is on in Settings and that notifications for Oneuldo are allowed in your phone's settings. Reminders are local notifications scheduled on the device."],
      ["I can't unlock the app.", "If Face ID fails you can use your device passcode. The lock can't be turned on unless a device passcode is set."],
      ["How do I delete a line?", "Swipe an entry on the Timeline tab to delete it. Deleted entries cannot be restored."],
      ["How do I delete everything?", "Deleting the app removes every entry. Nothing remains on a server."],
      ["Are there ads?", "No. No analytics either, and the app never connects to the internet."],
    ],
    contactTitle: "Contact", contactBody: "If your question isn't here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function OneuldoGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/oneuldo" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <header className="mb-16">
          <AppIcon slug="oneuldo" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">오늘도 · Oneuldo</h1>
          <p className="mt-3 text-lg text-[#F4A261]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F4A261]/20 text-sm font-semibold text-[#F4A261]">{i + 1}</span>
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
              <div key={q} className="border-l-2 border-[#F4A261]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#F4A261] px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/oneuldo/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
