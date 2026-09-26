"use client";

import Link from "next/link";
import { useState } from "react";
import { AppIcon, AppNav } from "@/components/AppNav";

/**
 * Hueday 앱 사용 설명서 겸 지원 페이지 (한국어 / 영어).
 * App Store 의 지원 URL 로 씁니다. 무드·가격 등 앱 기능이 바뀌면 여기도 같이 고칩니다.
 */

const CONTACT = "divekimdev@gmail.com";

const T = {
  ko: {
    lang: "EN",
    tagline: "무드를 먼저 고르고 찍는 카메라.",
    intro:
      "필터는 보통 찍고 나서 고릅니다. Hueday는 그 순서를 뒤집었습니다. 오늘 어떤 기분인지 먼저 고르면 카메라 화면에 이미 그 색이 입혀져 있어, 결과를 상상하지 않고 보면서 찍습니다. 찍은 사진은 날짜별로 쌓여 무드 다이어리가 됩니다.",
    stepsTitle: "이렇게 사용해요",
    steps: [
      ["무드 고르기", "첫 화면의 9가지 무드 카드 중 하나를 누릅니다. Cozy · Fresh · Retro는 무료이고, 자물쇠가 붙은 6종은 Hueday Plus로 열립니다. 지금 빛에 어울리는 무드를 앱이 먼저 제안하기도 합니다."],
      ["보면서 찍기", "카메라 화면에 무드가 이미 적용되어 있습니다. 화면을 누르면 그 지점에 초점이 맞고, 아래 슬라이더로 강도를 조절합니다. 앨범에 있는 사진을 불러와도 됩니다(첫 화면의 ‘갤러리에서 불러오기’)."],
      ["다듬기", "편집 화면의 ‘무드’ 탭에서 무드를 바꾸거나 강도를 조절하고, ‘보정’ 탭에서 밝기·대비·채도·색온도를 만지고, ‘스탬프’ 탭에서 필름 카메라식 날짜 스탬프를 넣습니다. 사진 아래에 그 순간의 한 줄을 적을 수 있습니다."],
      ["저장하고 돌아보기", "저장하면 사진 앱과 앱 안의 무드 다이어리에 함께 남습니다. 오른쪽 위 다이어리 버튼에서 날짜별로 돌아볼 수 있고, 그날 가장 많이 고른 무드가 그날의 색이 됩니다."],
    ],
    moodsTitle: "9가지 무드",
    moods: [
      ["Cozy", "늦은 오후 창가의 황금빛", "무료"],
      ["Fresh", "한낮의 맑은 공기", "무료"],
      ["Retro", "오래된 인화지의 누런 톤", "무료"],
      ["Dreamy", "역광에 번지는 분홍빛", "Plus"],
      ["Midnight", "푸르게 가라앉은 밤", "Plus"],
      ["Melancholy", "색이 빠져나간 흐린 날", "Plus"],
      ["Mono", "색을 걷어낸 흑백 필름", "Plus"],
      ["Neon", "도시의 밤, 번지는 불빛", "Plus"],
      ["Autumn", "붉게 물든 오후", "Plus"],
    ],
    plusTitle: "Hueday Plus",
    plusBody:
      "무드 9종 전체를 열고, 저장한 사진에서 워터마크를 지웁니다. 앞으로 추가되는 무드도 함께 쓸 수 있습니다. 월간 구독·연간 구독(둘 다 2주 무료 체험)·평생 이용권(한 번만 결제) 중 고를 수 있고, 가격은 앱 안 결제 화면에 표시됩니다. 구독은 기간이 끝나기 24시간 전에 자동 갱신되며, iPhone 설정 → Apple 계정 → 구독에서 언제든 해지할 수 있습니다.",
    supportTitle: "자주 묻는 질문",
    faq: [
      ["카메라 화면이 검게 나와요.", "iPhone 설정 → Hueday → 카메라 권한이 켜져 있는지 확인해 주세요. 시뮬레이터나 카메라가 없는 기기에서는 안내 문구가 대신 표시됩니다."],
      ["저장한 사진에 HUEDAY 글씨가 있어요.", "무료 버전은 사진 아래에 작은 워터마크가 들어갑니다. Hueday Plus를 구매하면 이후 저장하는 사진부터 워터마크 없이 저장됩니다."],
      ["기기를 바꿨는데 Plus가 풀려 있어요.", "설정 → ‘구매 복원’을 누르세요. 같은 Apple 계정으로 구매한 내역이 다시 적용됩니다."],
      ["구독을 해지하고 싶어요.", "iPhone 설정 → 맨 위 Apple 계정 → 구독 → Hueday Plus에서 해지합니다. 해지해도 결제한 기간이 끝날 때까지 쓸 수 있고, 그 뒤 무료 기능으로 돌아갑니다. 평생 이용권은 갱신이 없습니다."],
      ["사진이 어디로 전송되나요?", "어디로도 보내지 않습니다. 서버·계정·광고·분석 도구가 없고, 사진과 기록은 이 기기 안에만 있습니다. 개발자도 볼 수 없습니다."],
      ["앱을 지우면 다이어리는요?", "다이어리는 기기 안에만 있어 앱을 삭제하면 함께 사라집니다. 사진 자체는 저장할 때 사진 앱에도 함께 들어가므로 남아 있습니다."],
      ["Android 버전이 있나요?", "준비 중입니다. 출시되면 이 페이지에서 안내하겠습니다."],
    ],
    contactTitle: "문의",
    contactBody: "여기에 없는 문제라면 메일로 알려주세요. 확인하는 대로 답장드립니다.",
    privacy: "개인정보 처리방침",
    terms: "이용약관",
  },
  en: {
    lang: "한국어",
    tagline: "A camera where you pick the mood first.",
    intro:
      "Filters usually come after the shot. Hueday flips that around: choose how today feels first, and the camera preview already carries that light, so you shoot what you see instead of imagining the result. Your photos stack up by day into a mood diary.",
    stepsTitle: "How it works",
    steps: [
      ["Pick a mood", "Tap one of the nine mood cards on the first screen. Cozy, Fresh and Retro are free; the six with a lock open with Hueday Plus. Hueday may also suggest a mood that suits the light you're in."],
      ["Shoot what you see", "The mood is already applied to the camera preview. Tap to focus, and use the slider to set the intensity. You can also bring in a photo from your library (“Import from gallery” on the first screen)."],
      ["Fine-tune", "In the editor, the Mood tab lets you switch mood or intensity, the Adjust tab handles brightness, contrast, saturation and warmth, and the Stamp tab adds a film-camera date stamp. Write a line about the moment underneath."],
      ["Save and look back", "Saving keeps the photo in your Photos library and in the in-app mood diary. Open the diary from the top-right button to browse by day; the mood you chose most that day becomes the day's color."],
    ],
    moodsTitle: "Nine moods",
    moods: [
      ["Cozy", "Golden late-afternoon window light", "Free"],
      ["Fresh", "Clear midday air", "Free"],
      ["Retro", "The yellowed tone of old prints", "Free"],
      ["Dreamy", "Pink bloom against backlight", "Plus"],
      ["Midnight", "A night sunk into blue", "Plus"],
      ["Melancholy", "An overcast day drained of color", "Plus"],
      ["Mono", "Black-and-white film", "Plus"],
      ["Neon", "City night, spreading lights", "Plus"],
      ["Autumn", "A red-tinted afternoon", "Plus"],
    ],
    plusTitle: "Hueday Plus",
    plusBody:
      "Unlocks all nine moods, removes the watermark from saved photos, and includes every mood added later. Choose a monthly or yearly subscription (both with a 2-week free trial) or a one-time lifetime purchase; prices are shown on the purchase screen in the app. Subscriptions renew 24 hours before the period ends and can be cancelled any time in iPhone Settings → your Apple account → Subscriptions.",
    supportTitle: "Frequently asked",
    faq: [
      ["The camera screen is black.", "Check that camera access is on in iPhone Settings → Hueday. On a simulator or a device without a camera, a notice is shown instead."],
      ["There's a HUEDAY mark on my saved photos.", "The free version adds a small watermark under the photo. After buying Hueday Plus, photos you save from then on have no watermark."],
      ["I got a new phone and Plus is gone.", "Tap “Restore Purchases” in Settings. Purchases made with the same Apple account are applied again."],
      ["How do I cancel the subscription?", "iPhone Settings → your Apple account at the top → Subscriptions → Hueday Plus. You keep access until the paid period ends, then return to the free features. The lifetime purchase never renews."],
      ["Where do my photos go?", "Nowhere. There is no server, account, advertising or analytics. Photos and diary entries live only on this device; even the developer can't see them."],
      ["What happens to the diary if I delete the app?", "The diary lives only on the device, so it goes with the app. The photos themselves remain in your Photos library, where they were also saved."],
      ["Is there an Android version?", "It's in the works. We'll announce it on this page when it's out."],
    ],
    contactTitle: "Contact",
    contactBody: "If your question isn't here, send us a mail and we'll get back to you.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
} as const;

export default function HuedayPage() {
  const [lang, setLang] = useState<"ko" | "en">("en");
  const t = T[lang];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex items-center justify-between">
          <Link href="/#apps" className="text-sm text-white/50 transition-colors hover:text-white">{lang === "ko" ? "← 앱 목록" : "← Apps"}</Link>
          <button
            onClick={() => setLang(lang === "ko" ? "en" : "ko")}
            className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            {t.lang}
          </button>
        </div>

        <header className="mb-16">
          <AppIcon slug="hueday" size={80} className="mb-6 shadow-lg shadow-black/40" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hueday</h1>
          <p className="mt-3 text-lg text-[#D9A273]">{t.tagline}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/65">{t.intro}</p>
        </header>

        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.stepsTitle}</h2>
          <ol className="space-y-5">
            {t.steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D9A273]/20 text-sm font-semibold text-[#D9A273]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1 font-medium">{title}</h3>
                  <p className="text-[15px] leading-relaxed text-white/60">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.moodsTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.moods.map(([name, desc, tier]) => (
              <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="font-semibold">{name}</h3>
                  <span className={`text-xs ${tier === "Plus" ? "text-[#C5AEE4]" : "text-white/40"}`}>{tier}</span>
                </div>
                <p className="text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-[#C5AEE4]/30 bg-[#C5AEE4]/[0.06] p-6">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.plusTitle}</h2>
          <p className="text-[15px] leading-relaxed text-white/65">{t.plusBody}</p>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight">{t.supportTitle}</h2>
          <div className="space-y-5">
            {t.faq.map(([q, a]) => (
              <div key={q} className="border-l-2 border-[#D9A273]/40 pl-5">
                <h3 className="mb-1.5 font-medium">{q}</h3>
                <p className="text-[15px] leading-relaxed text-white/60">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-3 text-lg font-semibold tracking-tight">{t.contactTitle}</h2>
          <p className="mb-3 text-[15px] leading-relaxed text-white/60">{t.contactBody}</p>
          <a
            href={`mailto:${CONTACT}`}
            className="inline-block rounded-full bg-[#D9A273] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-90"
          >
            {CONTACT}
          </a>
        </section>

        <footer className="flex gap-6 border-t border-white/10 pt-8 text-sm text-white/40 flex flex-wrap items-center justify-between gap-4">
          <Link href="/hueday/privacy" className="underline underline-offset-4 transition-colors hover:text-white">
            {t.privacy}
          </Link>
          <Link href="/hueday/terms" className="underline underline-offset-4 transition-colors hover:text-white">
            {t.terms}
          </Link>
          <AppNav current="hueday" label={lang === "ko" ? "다른 앱" : "Other apps"} />
        </footer>
      </div>
    </main>
  );
}
