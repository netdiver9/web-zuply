import type { Metadata } from "next";
import { AppOverview, type AppOverviewData } from "@/components/AppOverview";

export const metadata: Metadata = { title: "먼저먹기 · Meonjeo — Zuply", description: "냉장고 재고와 포장에 적힌 날짜, 장보기 목록을 한곳에서. 계정 없이 기기 안에만 저장하는 먼저먹기." };

/** 먼저먹기 소개 페이지. 새 버전을 낼 때 history 맨 위에 한 항목 추가하세요. */
const app: AppOverviewData = {
  slug: "meonjeo",
  appStore: "https://apps.apple.com/kr/app/id6816552872",
  name: "먼저먹기 · Meonjeo",
  accent: "#76C893",
  tagline: { ko: "냉장고 속 재료, 잊기 전에 먼저.", en: "Use what you have, before you forget." },
  intro: {
    ko: "먼저먹기는 냉장고 재고와 포장에 적힌 날짜, 장보기 목록을 한곳에서 관리하는 앱입니다. 자취하는 사람도 가족의 장보기를 맡은 사람도, 집에 무엇이 남았는지 확인하고 날짜가 가까운 재료부터 챙길 수 있습니다. 복잡한 가계부나 레시피 검색 없이 재료 등록 → 날짜 확인 → 사용 완료로 이어집니다. 계정·광고·분석 도구가 없는 무료 앱이고, 인터넷을 쓰지 않으며 모든 기록은 기기 안에만 있습니다. 표시된 날짜는 사용자가 입력한 기록으로, 식품의 안전 여부를 판정하지 않습니다.",
    en: "Meonjeo keeps your food stock, the dates printed on packaging and your shopping list in one place. Whether you live alone or do the family shopping, you can see what is at home and which items need attention first. Add an item, check its date, mark it used — no budgeting, no recipe search. Free, with no account, ads or analytics; it never uses the internet, and everything stays on your device. Dates shown are records you entered. They are not a determination of food safety.",
  },
  features: [
    { icon: "🥬", title: { ko: "이름과 날짜로 간단히", en: "Start with a name and date" }, desc: { ko: "식재료 이름과 포장에 적힌 날짜를 입력하고 냉장·냉동·실온으로 나눕니다. 날짜를 모르면 ‘날짜 미정’으로 두고 나중에 고칩니다. 수량과 메모는 선택입니다.", en: "Enter the food name and the date on its packaging, then choose fridge, freezer or pantry. Don't know the date? Leave it unset and edit it later. Quantity and memo are optional." } },
    { icon: "⏳", title: { ko: "먼저 확인할 재료", en: "Know what needs attention" }, desc: { ko: "날짜가 가까운 재료를 먼저 보여줍니다. 날짜가 지난 재료와 날짜 미정 재료는 따로 모으고, 자동으로 사용 완료 처리하지 않습니다.", en: "Items with the nearest dates come first. Past-date items and items without a date are grouped separately, and nothing is ever marked used automatically." } },
    { icon: "🔔", title: { ko: "잊기 전에 날짜 알림", en: "A reminder before the date" }, desc: { ko: "입력한 날짜 며칠 전(기본 3일, 1~7일)과 당일, 원하는 시각에 기기 알림을 보냅니다. 전체 또는 재료별로 끌 수 있습니다.", en: "Local notifications a few days before (3 by default, 1 to 7) and on the date you entered, at the time you choose. Turn them off globally or per item." } },
    { icon: "🛒", title: { ko: "장보기 전 재고 확인", en: "Check before you shop" }, desc: { ko: "가게에서 보관 장소별 재고를 확인하고, 필요한 것만 장보기 목록에 적습니다. 산 재료는 ‘재고에 등록’으로 날짜와 함께 등록합니다.", en: "Check stock by storage location at the store and list only what you need. Use Add to stock to register what you bought with its date." } },
    { icon: "✅", title: { ko: "먹었으면 한 번에", en: "Mark it used" }, desc: { ko: "다 먹은 재료는 사용 완료로 옮기고, 실수했다면 바로 되돌립니다. 자주 사는 재료는 사용 완료 기록에서 새 날짜로 다시 등록합니다.", en: "Move finished items to used and undo a mistake right away. Add a frequently bought item again from your used history with a new date." } },
    { icon: "🔒", title: { ko: "가입 없이 내 기기에", en: "On your device, without sign-up" }, desc: { ko: "계정도 서버도 없고 인터넷을 쓰지 않습니다. 백업 파일(JSON) 내보내기·복원과 모든 데이터 삭제를 지원합니다.", en: "No account, no server, no internet. Export and restore a backup file (JSON), or delete all data at any time." } },
  ],
  history: [
    {
      version: "1.0", date: "2026-10-01", status: "released",
      notes: {
        ko: ["첫 출시. 재료와 포장 날짜 등록, 날짜가 가까운 순서 정렬, 며칠 전(기본 3일, 1~7일)·당일 알림, 보관 장소별 재고", "장보기 목록과 재고에 등록, 사용 완료와 되돌리기, 사용 완료 기록에서 다시 등록", "백업 파일 내보내기·복원, 모든 데이터 삭제. 무료, 계정·광고·분석 없음, 인터넷을 쓰지 않음. 한국어·영어"],
        en: ["First release: food with package dates, nearest-date ordering, reminders a few days before (3 by default, 1–7) and on the day, stock by location", "Shopping list with Add to stock, mark used with undo, add again from the used history", "Backup file export and restore, delete all data. Free; no account, ads or analytics; no internet use. Korean and English"],
      },
    },
  ],
};

export default function MeonjeoPage() { return <AppOverview app={app} />; }
