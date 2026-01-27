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
            <div className="text-center space-y-8 pt-8">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
                <img 
                  src="/icon.png" 
                  alt="yume insight Logo" 
                  className="relative w-32 h-32 mx-auto drop-shadow-2xl animate-in zoom-in duration-1000"
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200">
                  About yume insight
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  あなたの夢をAIが優しく紐解き、潜在意識からのメッセージをお届けします。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
              {/* Main Content */}
              <div className="md:col-span-8 space-y-16">
                <section className="space-y-8">
                  <div className="flex items-center gap-3 text-purple-300 font-bold text-2xl">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h2>このWebサイトについて</h2>
                  </div>
                  <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-6">
                    <p>
                      「昨日の夢にはどんな意味があったんだろう？」<br/>
                      そんなふとした疑問に応えるために、yume insightは生まれました。
                    </p>
                    <p>
                      夢は私たちの心が映し出す鏡。AIの力を借りることで、自分でも気づかなかった心の声や、日々の生活へのヒントを「ゆるっと」読み解きます。
                    </p>
                    <p>
                      学術的な診断ではありませんが、あなたの日常に少しの彩りと、自分を見つめ直す穏やかな時間を提供できれば幸いです。
                    </p>
                  </div>
                </section>

                <section className="space-y-8">
                  <div className="flex items-center gap-3 text-purple-300 font-bold text-2xl">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <Heart className="w-6 h-6" />
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

              {/* Profile Sidebar */}
              <div className="md:col-span-4 space-y-8">
                <div className="flex items-center gap-3 text-purple-300 font-bold text-xl mb-2 px-2">
                  <User className="w-5 h-5" />
                  <h2>開発者について</h2>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                  <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center backdrop-blur-xl">
                    <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img src="/icon.png" alt="Developer" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-white">Shoya Ueno</h3>
                    <p className="text-sm text-purple-300 font-medium mb-6 uppercase tracking-wider">Software Developer / Educator</p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      エンジニアと教育者、2つの視点を持って活動しています。テクノロジーで「気づき」の瞬間を作るのが好きです。
                    </p>
                    <div className="flex gap-4">
                      <Link href="https://github.com/karake-shoya" target="_blank" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all shadow-sm" title="GitHub">
                        <FaGithub className="w-5 h-5" />
                      </Link>
                      <Link href="https://x.com/naiawa1026" target="_blank" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all shadow-sm" title="X (Twitter)">
                        <FaXTwitter className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
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
