import Link from "next/link";
import { User, Heart, Sparkles } from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";
import GradientBackground from "@/components/GradientBackground";
import SectionHeader from "@/components/SectionHeader";
import ExternalLinkCard from "@/components/ExternalLinkCard";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/karake-shoya",
    icon: <FaGithub className="w-5 h-5" />,
    iconBgClass: "bg-black/40 text-white",
    title: "GitHub",
    description: "OSSプロジェクト & コード",
  },
  {
    href: "https://x.com/naiawa1026",
    icon: <FaXTwitter className="w-5 h-5" />,
    iconBgClass: "bg-black/40 text-white",
    title: "X (Twitter)",
    description: "日々の制作状況",
  },
  {
    href: "https://qiita.com/shoya_u",
    icon: <SiQiita className="w-5 h-5" />,
    iconBgClass: "bg-[#55C500]/20 text-[#55C500]",
    title: "Qiita",
    description: "技術記事の投稿",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      <GradientBackground />

      <div className="relative z-10">
        <main className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            
            {/* Hero Section */}
            <div className="text-center space-y-8 pt-8">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
                <img 
                  src="/icon.png" 
                  alt="Yume Insight Logo" 
                  className="relative w-32 h-32 mx-auto drop-shadow-2xl animate-in zoom-in duration-1000"
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200">
                  About Yume Insight
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
                  <SectionHeader icon={Sparkles}>このWebサイトについて</SectionHeader>
                  <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-6">
                    <p>
                      「昨日の夢にはどんな意味があったんだろう？」<br/>
                      そんなふとした疑問に応えるために、Yume Insightは生まれました。
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
                  <SectionHeader icon={Heart}>リンク集</SectionHeader>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SOCIAL_LINKS.map((link) => (
                      <ExternalLinkCard key={link.href} {...link} />
                    ))}
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
                      <img src="/profile-image.png" alt="Developer" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
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
      </div>
    </div>
  );
}
