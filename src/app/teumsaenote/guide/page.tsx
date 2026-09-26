"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/AppNav";

/** 틈새 노트 사용 설명서 겸 지원 페이지 (한국어 / 영어). App Store · Play 의 지원 URL 로 씁니다. */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN", back: "← 틈새 노트 소개",
    tagline: "찍고, 말하고, 적어서 바로 저장.",
    intro: "틈새 노트는 사진 속 글자, 말하는 내용, 직접 적은 글을 바로 메모로 붙잡아 두는 앱입니다. 메모는 이 기기와 나의 iCloud에만 저장되고, 개발자 서버는 없습니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["촬영해서 스캔하기", "하단 메뉴에서 ‘스캔’을 고르고 사진을 찍거나 앨범에서 고릅니다. 사진 속 글자(한국어·영어)를 기기 안에서 인식해 메모 본문으로 넣고, 원본 사진도 메모에 함께 보관합니다."],
      ["말해서 받아 적기", "‘음성’을 고르고 마이크를 누르면 말하는 내용이 실시간으로 글자가 됩니다. 길게 말해도 모든 문장이 남고, 원본 녹음(.m4a)도 함께 저장됩니다."],
      ["직접 적기", "‘직접 작성’을 고르고 제목, 본문, 태그를 입력합니다. 링크와 마크다운도 그대로 적을 수 있습니다."],
      ["태그로 찾기", "저장할 때 본문 키워드로 영수증/결제, 할 일, 독서/문구, 업무/아이디어, 학습 태그가 자동으로 붙습니다. 태그는 직접 바꿀 수 있고, 목록에서 태그로 걸러 봅니다."],
      ["꺼내 쓰기", "메모를 열어 복사하거나 PDF로 내보내고, 읽어주기로 한국어 음성 낭독을 듣습니다. 메모의 원본 녹음이나 스캔 사진만 따로 지울 수도 있습니다."],
    ],
    featuresTitle: "이런 것들이 있어요",
    features: [
      ["☁️", "내 iCloud로만 동기화", "같은 Apple 계정의 iPhone·iPad끼리 메모가 동기화됩니다. 개발자는 내용을 볼 수 없습니다."],
      ["🔒", "Face ID 잠금", "앱을 열 때 Face ID 또는 기기 암호로 확인합니다."],
      ["📱", "홈 화면 위젯", "최근 메모 3건을 홈 화면에서 바로 봅니다."],
      ["🔕", "계정·광고 없음", "로그인이 없고, 광고와 분석 도구가 없습니다."],
    ],
    supportTitle: "자주 묻는 질문",
    faq: [
      ["글자가 잘 인식되지 않아요.", "글자가 또렷하고 기울지 않게 찍을수록 잘 인식됩니다. 인식은 기기 안에서 이루어지며 한국어와 영어를 지원합니다. 인식된 본문은 언제든 편집할 수 있습니다."],
      ["음성 인식이 되지 않아요.", "기기 설정에서 틈새 노트의 마이크와 음성 인식 권한을 허용해 주세요. 기기가 온디바이스 인식을 지원하지 않으면 Apple 음성 인식 서비스를 쓰므로 인터넷 연결이 필요할 수 있습니다."],
      ["다른 기기에 메모가 보이지 않아요.", "두 기기가 같은 Apple 계정으로 로그인되어 있고, iOS 설정 → Apple 계정 → iCloud에서 틈새 노트가 켜져 있는지 확인해 주세요. 동기화는 iCloud를 통해서만 이루어집니다."],
      ["위젯이 갱신되지 않아요.", "메모를 저장하면 위젯이 갱신됩니다. 오래 멈춰 있으면 위젯을 지웠다가 다시 추가해 보세요."],
      ["메모를 지우려면?", "목록에서 메모를 밀어 삭제합니다. iCloud 동기화가 켜져 있으면 다른 기기에서도 함께 지워집니다. 앱을 삭제하면 이 기기의 메모가 지워지고, iCloud에 남은 데이터는 iCloud 설정의 저장 공간 관리에서 지울 수 있습니다."],
      ["iPhone과 Android 사이에도 동기화되나요?", "아니요. iCloud 동기화는 같은 Apple 계정의 Apple 기기 사이에서만 동작합니다. 다른 플랫폼으로 옮길 때는 메모를 복사하거나 PDF로 내보내 주세요."],
    ],
    contactTitle: "문의", contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
  },
  en: {
    lang: "한국어", back: "← Teumsae Note",
    tagline: "Snap it, say it, jot it down.",
    intro: "Teumsae Note turns text in a photo, words you speak or lines you type into a note right away. Notes live on this device and in your own iCloud; there is no developer server.",
    stepsTitle: "How it works",
    steps: [
      ["Scan a photo", "Choose “Scan” from the bottom menu, then take a photo or pick one from your library. Text in the photo (Korean and English) is recognized on the device and placed in the note, and the original photo is kept with it."],
      ["Dictate", "Choose “Voice” and tap the microphone; your words appear as you speak. Long recordings keep every sentence, and the original audio (.m4a) is saved alongside."],
      ["Type", "Choose “Write” and enter a title, body and tags. Links and Markdown can be typed as they are."],
      ["Find by tag", "On save, a tag is applied from the content: receipts, to-dos, reading quotes, work ideas or study. You can change it, and filter the list by tag."],
      ["Use it", "Open a note to copy it, export it as PDF or hear it read aloud in Korean. The original recording or scanned photo can be removed separately."],
    ],
    featuresTitle: "What's inside",
    features: [
      ["☁️", "Your iCloud only", "Notes sync between your iPhone and iPad on the same Apple Account. The developer cannot see them."],
      ["🔒", "Face ID lock", "Confirms with Face ID or your passcode when the app opens."],
      ["📱", "Home Screen widget", "Your latest three notes, right on the Home Screen."],
      ["🔕", "No account, no ads", "No sign-in, no ads, no analytics."],
    ],
    supportTitle: "Frequently asked",
    faq: [
      ["Text isn't recognized well.", "Sharp, level photos recognize best. Recognition runs on the device and supports Korean and English. You can edit the recognized text at any time."],
      ["Dictation isn't working.", "Allow Microphone and Speech Recognition for Teumsae Note in your phone's settings. If the device doesn't support on-device recognition, Apple's speech service is used and an internet connection may be needed."],
      ["Notes don't show on my other device.", "Make sure both devices use the same Apple Account and that Teumsae Note is turned on under Settings → Apple Account → iCloud. Sync happens only through iCloud."],
      ["The widget isn't updating.", "The widget refreshes whenever a note is saved. If it stays stale, remove the widget and add it again."],
      ["How do I delete notes?", "Swipe a note in the list to delete it; with iCloud sync on, it is removed on your other devices too. Deleting the app removes notes on this device, and anything left in iCloud can be cleared under iCloud storage management."],
      ["Does it sync between iPhone and Android?", "No. iCloud sync works only between Apple devices on the same Apple Account. To move notes to another platform, copy them or export a PDF."],
    ],
    contactTitle: "Contact", contactBody: "If your question isn't here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
  },
} as const;

export default function TeumsaeNoteGuidePage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/teumsaenote" className="text-sm text-white/50 transition-colors hover:text-white">{t.back}</Link>
          <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white">{t.lang}</button>
        </div>
        <header className="mb-16">
          <AppIcon slug="teumsaenote" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">틈새 노트 · Teumsae Note</h1>
          <p className="mt-3 text-lg text-[#4FC3B0]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4FC3B0]/20 text-sm font-semibold text-[#4FC3B0]">{i + 1}</span>
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
              <div key={q} className="border-l-2 border-[#4FC3B0]/40 pl-5"><h3 className="mb-1.5 font-medium">{q}</h3><p className="text-[15px] leading-relaxed text-white/60">{a}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a href={`mailto:${CONTACT}`} className="inline-block rounded-full bg-[#4FC3B0] px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90">{CONTACT}</a>
        </section>
        <footer className="border-t border-white/10 pt-8 text-sm text-white/40">
          <Link href="/teumsaenote/privacy" className="underline underline-offset-4 transition-colors hover:text-white">{t.privacy}</Link>
        </footer>
      </div>
    </main>
  );
}
