import Link from "next/link";
import { Moon, ArrowLeft, ExternalLink, User, Code2, Heart, Sparkles } from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans selection:bg-purple-500/30">
      {/* Optimized Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          background: `
            radial-gradient(circle at 10% 10%, rgba(88, 28, 135, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 90% 40%, rgba(49, 46, 129, 0.15) 0%, transparent 40%),
            #0f172a
          `
        }}
      />

      <div className="relative z-10">
        {/* About Content */}
        <main className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-300 font-bold text-sm border border-purple-500/20 shadow-lg shadow-purple-500/5">
                <User className="w-4 h-4" />
                <span>About Developer</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200">
                開発者について
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                エンジニアと教育者、2つの視点を持って活動しています。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              {/* Profile Sidebar */}
              <div className="md:col-span-4 space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center backdrop-blur-xl">
                    <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-105 transition-transform duration-500">
                      <User className="w-12 h-12 text-purple-300" />
                    </div>
                    <h2 className="text-2xl font-bold mb-1 text-white">Shoya Ueno</h2>
                    <p className="text-sm text-purple-300 font-medium mb-6 uppercase tracking-wider">Software Developer / Educator</p>
                    <div className="flex gap-4">
                      <Link href="https://github.com/karake-shoya" target="_blank" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all shadow-sm" title="GitHub">
                        <FaGithub className="w-5 h-5" />
                      </Link>
                      <Link href="https://x.com/naiawa1026" target="_blank" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all shadow-sm" title="X (Twitter)">
                        <FaXTwitter className="w-5 h-5" />
                      </Link>
                      <Link href="https://qiita.com/shoya_u" target="_blank" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#55C500] border border-white/5 transition-all shadow-sm" title="Qiita">
                        <SiQiita className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-8 space-y-12">
                <section className="space-y-6">
                  <div className="flex items-center gap-3 text-purple-300 font-bold text-xl">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h2>yume insight について</h2>
                  </div>
                  <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-4">
                    <p>
                      yume insightは、「夢からのメッセージ」をゆるっと読み解くツールです。
                    </p>
                    <p>
                      AIが夢のメッセージを読み解き、新しい視点や気づきを届けてくれます。
                    </p>
                    <p>
                      まずは気軽に「こんな夢を見たよ」と話しかけてみてください。
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-3 text-purple-300 font-bold text-xl">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <Heart className="w-5 h-5" />
                    </div>
                    <h2>リンク集</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link 
                      href="https://github.com/karake-shoya" 
                      target="_blank"
                      className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all group shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 rounded-xl bg-black/40 text-white">
                          <FaGithub className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-white">GitHub</p>
                          <p className="text-xs text-gray-500">OSSプロジェクト & コード</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple-300 transition-colors" />
                    </Link>

                    <Link 
                      href="https://x.com/naiawa1026" 
                      target="_blank"
                      className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all group shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 rounded-xl bg-black/40 text-white">
                          <FaXTwitter className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-white">X (Twitter)</p>
                          <p className="text-xs text-gray-500">日々の制作状況</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple-300 transition-colors" />
                    </Link>

                    <Link 
                      href="https://qiita.com/shoya_u" 
                      target="_blank"
                      className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all group shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 rounded-xl bg-[#55C500]/20 text-[#55C500]">
                          <SiQiita className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-white">Qiita</p>
                          <p className="text-xs text-gray-500">技術記事の投稿</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple-300 transition-colors" />
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        <footer className="py-12 border-t border-white/10 bg-black/20 mt-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} yume insight. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm font-medium text-gray-400">
              <Link href="/about" className="hover:text-purple-300 transition-colors">About</Link>
              <Link href="/terms" className="hover:text-purple-300 transition-colors">利用規約</Link>
              <Link href="/contact" className="hover:text-purple-300 transition-colors">お問い合わせ</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
