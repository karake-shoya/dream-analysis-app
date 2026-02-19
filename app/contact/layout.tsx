import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ｜Yume Insight",
  description: "Yume Insightへのお問い合わせはこちらから。ご質問、ご意見、不具合報告などお気軽にどうぞ。",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
