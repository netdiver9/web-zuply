import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zuply — We zuply what you need",
  description: "AI 기반 앱 스튜디오. 사람들에게 필요한 것을 만듭니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
