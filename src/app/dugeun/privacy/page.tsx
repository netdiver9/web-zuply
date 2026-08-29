"use client";

import { useState } from "react";

/**
 * 두근(Dugeun) 개인정보 처리방침.
 * App Store 심사와 App Store Connect 메타데이터에 쓰이는 페이지입니다.
 * 앱이 실제로 다루는 데이터만 적혀 있어야 하므로, 앱을 고칠 때 이 문서도 같이 봐야 합니다.
 */

const EFFECTIVE = "2026-08-29";
const CONTACT = "greenbi@gmail.com";

const T = {
  ko: {
    lang: "EN",
    app: "두근",
    title: "개인정보 처리방침",
    updated: `시행일 ${EFFECTIVE}`,
    intro:
      "두근은 가까운 한 사람과 사진을 주고받는 앱입니다. 서비스를 굴리는 데 꼭 필요한 것만 받고, 그 밖의 것은 받지 않습니다. 광고를 붙이지 않고, 어떤 데이터도 팔거나 다른 회사에 넘기지 않습니다.",
    sections: [
      {
        h: "1. 받는 정보",
        body: [
          "**Apple 계정 식별자** — Apple로 로그인할 때 Apple이 발급하는 고유 식별자입니다. 이 값으로만 이용자를 구분합니다.",
          "**이름** — Apple 로그인 첫 회에 이용자가 제공에 동의한 경우에만 받습니다. 상대에게 표시하는 용도로만 씁니다.",
          "**주고받은 사진과 메시지** — 상대에게 전달하기 위해 보관합니다.",
          "**이모지 반응**",
          "**기기 알림 토큰** — 상대가 사진을 보냈을 때 알림을 보내기 위한 값입니다.",
          "**초대 코드** — 두 사람을 연결하는 동안에만 존재하며, 연결이 끝나면 삭제됩니다.",
          "**신고 기록** — 이용자가 사진을 신고한 경우에 한해 남습니다.",
        ],
      },
      {
        h: "2. 받지 않는 정보",
        body: [
          "이메일 주소, 전화번호, 주소록, 위치 정보를 받지 않습니다.",
          "이용 행태를 추적하는 분석 도구나 광고 식별자를 넣지 않았습니다.",
          "기기에만 저장되고 서버로 보내지 않는 것들: **오늘의 감정, 상태(집·퇴근 등), 오늘의 질문 답변, 사귄 날짜**. 이 정보는 이용자의 기기와 홈 화면 위젯에만 남습니다.",
        ],
      },
      {
        h: "3. 쓰는 목적",
        body: [
          "받은 정보는 오직 서비스를 제공하기 위해서만 씁니다 — 로그인 유지, 두 사람 연결, 사진 전달, 알림 발송, 신고 검토.",
          "이 밖의 목적으로는 쓰지 않습니다.",
        ],
      },
      {
        h: "4. 보관과 위치",
        body: [
          "데이터는 대한민국 서울 리전(AWS ap-northeast-2)의 서버에 보관됩니다.",
          "앱과 서버 사이의 모든 통신은 HTTPS로 암호화됩니다.",
          "사진은 연결된 두 사람만 내려받을 수 있고, 요청할 때마다 권한을 확인합니다.",
          "이용자가 사진을 삭제하면 서버에서도 즉시 지워집니다.",
        ],
      },
      {
        h: "5. 다른 회사와의 관계",
        body: [
          "**Apple** — 로그인 인증(Sign in with Apple)과 알림 전송(APNs)에 Apple의 서비스를 이용합니다.",
          "그 밖의 어떤 제3자에게도 데이터를 넘기지 않습니다. 분석·광고·마케팅 목적의 공유는 없습니다.",
        ],
      },
      {
        h: "6. 삭제와 이용자의 권리",
        body: [
          "앱의 **「우리」 탭 → 계정 삭제** 를 누르면 계정, 상대와의 연결, 주고받은 사진이 서버에서 **영구히 삭제**됩니다. 되돌릴 수 없습니다.",
          "**「이 기기의 기록 지우기」** 는 기기에 저장된 사진과 기록만 지우고 계정은 남깁니다.",
          "상대와의 연결만 끊고 싶다면 **「연결 해제」** 를 쓰시면 됩니다.",
          `열람·정정·삭제를 요청하시려면 ${CONTACT} 으로 연락 주세요.`,
        ],
      },
      {
        h: "7. 아동",
        body: [
          "두근은 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 정보를 의도적으로 수집하지 않습니다.",
          `아동의 정보가 수집된 것을 알게 되면 즉시 삭제합니다. 관련해 알려주실 내용이 있으면 ${CONTACT} 으로 연락 주세요.`,
        ],
      },
      {
        h: "8. 변경",
        body: [
          "이 방침이 바뀌면 이 페이지에 시행일과 함께 올립니다. 중요한 변경은 앱 안에서도 알립니다.",
        ],
      },
      {
        h: "9. 문의",
        body: [`${CONTACT}`],
      },
    ],
  },
  en: {
    lang: "한국어",
    app: "Dugeun",
    title: "Privacy Policy",
    updated: `Effective ${EFFECTIVE}`,
    intro:
      "Dugeun is an app for sharing photos with one person close to you. We collect only what the service needs to work, and nothing else. There are no ads, and we never sell or hand your data to anyone.",
    sections: [
      {
        h: "1. What we collect",
        body: [
          "**Apple account identifier** — the unique identifier Apple issues when you sign in. It is the only thing we use to tell users apart.",
          "**Your name** — only if you chose to share it on your first Apple sign-in. It is used solely to show your name to the person you are connected with.",
          "**Photos and captions you exchange** — stored so we can deliver them to the other person.",
          "**Emoji reactions**",
          "**Device notification token** — used to tell you when a photo arrives.",
          "**Invite codes** — they exist only while two people are connecting, and are deleted once the connection is made.",
          "**Reports** — kept only when you report a photo.",
        ],
      },
      {
        h: "2. What we do not collect",
        body: [
          "No email address, no phone number, no contacts, no location.",
          "No analytics SDKs, no advertising identifiers, no behavioural tracking.",
          "These never leave your device: **your daily mood, your status (home, commuting, and so on), your answers to the daily question, and your start date.** They live only on your phone and in your Home Screen widget.",
        ],
      },
      {
        h: "3. How we use it",
        body: [
          "Only to run the service — keeping you signed in, connecting the two of you, delivering photos, sending notifications, and reviewing reports.",
          "Nothing else.",
        ],
      },
      {
        h: "4. Where it is kept",
        body: [
          "On servers in the Seoul region of South Korea (AWS ap-northeast-2).",
          "All traffic between the app and the server is encrypted with HTTPS.",
          "Photos can be downloaded only by the two connected people, and permission is checked on every request.",
          "When you delete a photo, it is removed from the server immediately.",
        ],
      },
      {
        h: "5. Third parties",
        body: [
          "**Apple** — for Sign in with Apple and for delivering push notifications (APNs).",
          "No one else receives your data. There is no sharing for analytics, advertising, or marketing.",
        ],
      },
      {
        h: "6. Deletion and your rights",
        body: [
          "In the app, **Us tab → Delete account** permanently removes your account, your connection, and every shared photo from our servers. This cannot be undone.",
          "**Erase data on this device** clears photos and records stored on your phone while keeping your account.",
          "If you only want to end the connection, use **Disconnect**.",
          `To request access, correction, or deletion, write to ${CONTACT}.`,
        ],
      },
      {
        h: "7. Children",
        body: [
          "Dugeun is not directed at children under 14, and we do not knowingly collect their information.",
          `If we learn that we have, we delete it right away. Please write to ${CONTACT} if you have something to report.`,
        ],
      },
      {
        h: "8. Changes",
        body: [
          "Any change is posted on this page with a new effective date. Significant changes are also announced inside the app.",
        ],
      },
      {
        h: "9. Contact",
        body: [`${CONTACT}`],
      },
    ],
  },
} as const;

/** **굵게** 표기만 간단히 해석합니다. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function DugeunPrivacyPage() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const t = T[lang];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-14">
          <div className="mb-8 flex items-center justify-between">
            <a
              href="/"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              ← Zuply
            </a>
            <button
              onClick={() => setLang(lang === "ko" ? "en" : "ko")}
              className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              {t.lang}
            </button>
          </div>

          <div className="mb-3 flex items-center gap-3">
            <span className="text-3xl">💗</span>
            <span className="text-lg font-semibold tracking-tight text-[#FF5C7A]">
              {t.app}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-3 text-sm text-white/40">{t.updated}</p>

          <p className="mt-8 text-[15px] leading-relaxed text-white/70">
            {t.intro}
          </p>
        </header>

        <div className="space-y-12">
          {t.sections.map((section) => (
            <section key={section.h}>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">
                {section.h}
              </h2>
              <ul className="space-y-3">
                {section.body.map((line, i) => (
                  <li
                    key={i}
                    className="text-[15px] leading-relaxed text-white/65"
                  >
                    <RichText text={line} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-white/40">
          <p>
            {t.app} · Zuply ·{" "}
            <a
              href={`mailto:${CONTACT}`}
              className="underline underline-offset-4 transition-colors hover:text-white"
            >
              {CONTACT}
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
