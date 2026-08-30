import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

// 셀프 호스팅 웹폰트. 기기 기본 글꼴(iOS=SF Pro, Android=Roboto)에 맡기면
// 같은 페이지가 기기마다 다르게 보이므로 세 계열 모두 직접 싣는다.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const notoKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zuply — We zuply what you need",
  description: "AI 기반 앱 스튜디오. 사람들에게 필요한 것을 만듭니다.",
};

// 모바일 브라우저 상단/하단 크롬을 페이지 배경과 같은 색으로 맞춘다.
export const viewport: Viewport = {
  themeColor: "#07070d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`scroll-smooth ${geist.variable} ${geistMono.variable} ${notoKR.variable}`}
    >
      <body className="bg-[#07070d] text-white antialiased">{children}</body>
    </html>
  );
}
