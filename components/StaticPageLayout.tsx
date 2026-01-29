import { ReactNode } from "react";

interface StaticPageLayoutProps {
  title: string;
  children: ReactNode;
}

/**
 * プライバシーポリシーや利用規約など静的ページの共通レイアウト
 */
export default function StaticPageLayout({ title, children }: StaticPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          {title}
        </h1>
        <div className="space-y-8 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

/**
 * 静的ページ内のセクション
 */
export function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-purple-200 mb-4">{title}</h2>
      {children}
    </section>
  );
}
