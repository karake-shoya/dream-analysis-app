import type { Metadata } from "next";
import { Fredoka, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import AuthButton from "@/components/AuthButton";

const fredoka = Fredoka({ 
  subsets: ["latin"], 
  weight: ["400", "600"],
  variable: "--font-fredoka"
});

const zenGothic = Zen_Kaku_Gothic_New({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-zen-gothic"
});

export const metadata: Metadata = {
  title: "Dream Oracle - AI夢診断",
  description: "あなたの夢をAIが優しく紐解きます。潜在意識からのメッセージを受け取りましょう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${fredoka.variable} ${zenGothic.variable} antialiased font-sans bg-[#0f172a]`}
      >
        <AuthButton />
        {children}
      </body>
    </html>
  );
}
