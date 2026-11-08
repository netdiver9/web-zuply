"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 먼저먹기 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store · Google Play 의 지원 URL 로 씁니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 먼저먹기 소개",
    tagline: "냉장고 속 재료, 잊기 전에 먼저.",
    intro: "먼저먹기는 냉장고 재고와 포장에 적힌 날짜, 장보기 목록을 한곳에서 관리하는 앱입니다. 계정도 서버도 없고, 모든 기록은 이 기기 안에만 저장됩니다. 표시된 날짜는 사용자가 입력한 기록으로, 식품의 안전 여부를 판정하지 않습니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["재료 등록", "‘먼저’ 탭의 +를 눌러 이름, 보관 장소(냉장·냉동·실온)와 포장의 날짜를 입력합니다. 날짜를 모르면 ‘날짜 미정’으로 두고 나중에 고칩니다. 수량과 메모는 선택이고, 자주 등록한 재료는 이름 아래 칩으로 한 번에 넣습니다."],
      ["오늘 확인", "‘먼저’ 탭에서 날짜가 지난 재료, 곧 다가오는 재료, 그다음, 날짜 미정 순으로 확인합니다. 날짜가 지난 재료도 자동으로 사용 완료 처리하지 않습니다."],
      ["장보기", "‘재고’ 탭에서 보관 장소별로 집에 남은 재료를 검색하고, 살 것만 장보기 목록에 추가합니다. 체크만으로는 재고가 바뀌지 않으며, ‘재고에 등록’을 누르면 등록 화면이 열려 산 재료의 날짜를 넣고 저장합니다."],
      ["사용 완료", "다 먹은 재료를 사용 완료로 옮깁니다(iPhone은 오른쪽으로 밀기, Android는 행의 체크 버튼). 잘못 눌렀다면 바로 나오는 ‘되돌리기’를 누르고, 다시 산 재료는 사용 완료 기록에서 새 날짜로 등록합니다."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["🥬", "이름과 날짜로 간단히", "식재료 이름과 포장에 적힌 날짜를 입력하고 냉장·냉동·실온으로 나눕니다. 날짜를 모르면 미정으로 남겨둡니다."],
      ["⏳", "먼저 확인할 재료", "날짜가 가까운 재료를 먼저 보여줍니다. 날짜가 지난 재료와 날짜 미정 재료는 따로 구분하고, 보관 중·곧·지남 개수를 위에 보여줍니다."],
      ["🔔", "잊기 전에 날짜 알림", "입력한 날짜 며칠 전(기본 3일, 설정에서 1~7일)과 당일, 원하는 시각에 기기 알림을 보냅니다. 전체 또는 재료별로 끌 수 있습니다."],
      ["🛒", "장보기 전 재고 확인", "가게에서 보관 장소별 재고를 확인하고, 부족한 재료만 장보기 목록에 적습니다. 재고 화면에서 바로 장보기에 추가할 수 있습니다."],
      ["✅", "먹었으면 한 번에", "다 먹은 재료는 사용 완료로 옮기고, 실수했다면 되돌립니다. 사용 완료 기록에서 재고로 되돌리거나 새 날짜로 다시 등록합니다."],
      ["🔒", "가입 없이 내 기기에", "계정도 서버도 없고 인터넷을 쓰지 않습니다. 설정에서 백업 파일(JSON) 내보내기·복원과 모든 데이터 삭제를 할 수 있습니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["날짜가 지나면 먹으면 안 된다는 뜻인가요?", "아닙니다. 표시된 날짜는 사용자가 입력한 기록으로, 식품의 안전 여부를 판정하지 않습니다. 먼저먹기는 입력한 날짜를 순서대로 보여주고 알려줄 뿐입니다."],
      ["영수증을 찍으면 자동으로 등록되나요?", "아니요. 먼저먹기는 직접 입력 방식입니다. 영수증 인식이나 날짜 추정 기능은 없습니다."],
      ["가족과 함께 쓸 수 있나요?", "한 기기에서 쓰는 앱입니다. 계정과 서버가 없어 가족 간 동기화는 없습니다. 백업 파일로 다른 기기에 옮길 수는 있습니다."],
      ["알림 권한이 꼭 필요한가요?", "아니요. 알림 권한은 온보딩의 ‘알림 켜고 시작하기’나 설정에서 알림을 켤 때만 묻습니다. 거절해도 재고와 장보기 목록은 그대로 쓸 수 있습니다."],
      ["알림은 언제 오나요?", "입력한 날짜의 며칠 전(기본 3일, 1~7일)과 당일, 설정한 시각에 옵니다. 날짜 미정 재료와 사용 완료한 재료는 알리지 않습니다."],
      ["데이터를 옮기거나 삭제할 수 있나요?", "설정에서 백업 파일(JSON)을 내보내고 다른 기기에서 복원할 수 있습니다. ‘모든 데이터 삭제’로 재고, 사용 완료 기록, 장보기 목록을 한 번에 지웁니다. 내보낸 백업 파일은 직접 관리해 주세요."],
      ["광고나 결제가 있나요?", "없습니다. 무료이고 광고·인앱 구입·분석 도구가 없습니다."],
    ],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Meonjeo",
    tagline: "Use what you have, before you forget.",
    intro: "Meonjeo keeps your food stock, the dates printed on packaging and your shopping list in one place. There is no account and no server; everything is stored only on this device. Dates shown are records you entered. They are not a determination of food safety.",
    stepsTitle: "How it works",
    steps: [
      ["Add food", "Tap + on the First tab and enter the name, where it is kept (fridge, freezer or pantry) and the date on its packaging. Leave an unknown date unset and edit it later. Quantity and memo are optional, and frequently added items appear as chips under the name."],
      ["Check today", "The First tab lists past-date items, items coming up soon, the rest, and items without a date. Past-date items are never marked used automatically."],
      ["Shop", "Search your stock by location on the Stock tab and add what you need to the shopping list. Checking an item off does not change your stock; tap Add to stock to open the form, enter the date of what you bought and save."],
      ["Mark used", "Move finished food to used (swipe right on iPhone, the check button on Android). Tap Undo right away if it was a mistake, and add a repeat purchase again from the used history with a new date."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["🥬", "Start with a name and date", "Enter the food name and the date on its packaging, then choose fridge, freezer or pantry. Unknown dates stay unset."],
      ["⏳", "Know what needs attention", "Items with the nearest dates come first. Past-date items and items without dates are shown separately, with counts of stored, soon and past items on top."],
      ["🔔", "A reminder before the date", "Local notifications a few days before (3 by default, 1 to 7 in Settings) and on the date you entered, at the time you choose. Turn them off globally or per item."],
      ["🛒", "Check before you shop", "Check stock by storage location at the store and add only what you need to your shopping list, straight from the stock screen if you like."],
      ["✅", "Mark it used", "Move finished items to used and undo a mistake. From the used history, put an item back in stock or add it again with a new date."],
      ["🔒", "On your device, without sign-up", "No account, no server, no internet. Settings lets you export and restore a backup file (JSON) or delete all data."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Does a past date mean I shouldn't eat it?", "No. Dates shown are records you entered. They are not a determination of food safety. Meonjeo only orders and reminds you of the dates you typed."],
      ["Does receipt scanning add food automatically?", "No. Meonjeo uses manual entry. There is no receipt recognition or date estimation."],
      ["Can my family share inventory?", "Meonjeo works on a single device. With no account or server there is no family sync, though a backup file can move your data to another device."],
      ["Are notifications required?", "No. Permission is asked only when you tap “Turn on reminders” in onboarding or turn reminders on in Settings. Stock and shopping lists work without it."],
      ["When do reminders arrive?", "A few days before (3 by default, 1 to 7) and on the date you entered, at the time you set. Items without a date and items marked used are not reminded."],
      ["Can I move or delete my data?", "Export a backup file (JSON) in Settings and restore it on another device. Delete all data removes your stock, used history and shopping list at once. Exported backup files are yours to manage."],
      ["Are there ads or purchases?", "No. Meonjeo is free, with no ads, in-app purchases or analytics."],
    ],
    contactTitle: "Contact", contactBody: "If your question isn't answered here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function MeonjeoGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/meonjeo" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <header className="mb-16">
          <AppIcon slug="meonjeo" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">먼저먹기 · Meonjeo</h1>
          <p className="mt-3 text-lg text-[#76C893]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#76C893]/20 text-sm font-semibold text-[#76C893]">{i + 1}</span>
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
              <div key={q} className="border-l-2 border-[#76C893]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#76C893] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/meonjeo/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
