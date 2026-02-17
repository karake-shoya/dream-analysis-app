import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

/**
 * 夢占い・AI夢診断への誘導セクション
 */
export default function DreamAnalysisCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-purple-900/40 via-indigo-900/30 to-blue-900/40 border border-white/10 p-6 md:p-12 shadow-2xl">
      {/* 背景の装飾 */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="space-y-3 md:space-y-4 text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
            夢の深層心理、<span className="hidden md:inline"><br /></span>AIで詳しく読み解きませんか？
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
            カップルの寝相には、日々の感情や潜在的な想いが現れています。
            <span className="hidden md:inline"><br /></span>
            昨夜見た夢も、実はあなたへの大切なメッセージかもしれません。
          </p>
        </div>
        
        <Link
          href="/"
          className="group relative inline-flex items-center justify-center px-8 py-3 md:py-4 font-bold text-white transition-all duration-300 bg-linear-to-r from-purple-600 to-indigo-600 rounded-full hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 whitespace-nowrap text-sm md:text-base"
        >
          AI夢診断を試す
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
