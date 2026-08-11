import { ReactNode } from "react";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: ReactNode;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="text-center space-y-8 pt-8 relative">
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
        <div className="relative">
          <div className="absolute -inset-4 bg-purple-500/10 rounded-full blur-3xl" />
          {/* 装飾のみ。alt を空にして支援技術から除外する */}
          <Image
            src="/icon.png"
            alt=""
            width={160}
            height={160}
            className="w-40 h-40 opacity-10"
          />
        </div>
      </div>
      <div className="relative space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200 leading-[1.12]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
