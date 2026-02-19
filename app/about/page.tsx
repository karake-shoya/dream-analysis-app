import { Metadata } from "next";
import Link from "next/link";
import { User, Heart, Sparkles } from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import ContentPageLayout from "@/components/ContentPageLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About｜Yume Insightについて",
  description: "Yume InsightはAIがあなたの夢を分析し、潜在意識からのメッセージをお届けする夢占いアプリです。サイトの紹介と開発者情報。",
  openGraph: {
    title: "About｜Yume Insightについて",
    description: "Yume InsightはAIがあなたの夢を分析し、潜在意識からのメッセージをお届けする夢占いアプリです。サイトの紹介と開発者情報。",
    type: "website",
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};


export default function AboutPage() {
  return (
    <ContentPageLayout spacing="lg">
            <PageHero
              title="Yume Insightについて"
              subtitle="このページでは、Yume Insight の考え方や運営方針についてご紹介します。"
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
              {/* Main Content */}
              <div className="md:col-span-8 space-y-12">
                
                <section className="space-y-6">
                  <SectionHeader icon={Sparkles}>Yume Insightとは</SectionHeader>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                      Yume Insight は、夢占い辞典とAI分析を通して、<span className="hidden md:inline"><br /></span>
                      自分の心理状態や感情の傾向を整理するための情報サイトです。
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      夢を「当てる」「未来を予言する」ものとして扱うのではなく、<span className="hidden md:inline"><br /></span>
                      日常を振り返るヒントや、自分自身を理解するきっかけとして<span className="hidden md:inline"><br /></span>
                      夢の意味をやさしく解説しています。
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <SectionHeader icon={Heart}>サイトの目的とスタンス</SectionHeader>
                  <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-4">
                    <p>
                      本サイトの目的は、夢に表れるイメージや感情を通して、<span className="hidden md:inline"><br /></span>
                      今の自分の状態を見つめ直す手助けをすることです。
                    </p>
                    <p>
                      掲載している内容は、夢に関する一般的な考え方や心理的な視点をもとにした情報であり、<span className="hidden md:inline"><br /></span>
                      <span className="text-purple-300 font-bold">医療・診断・治療・予言などを行うものではありません。</span>
                    </p>
                    <p>
                      不安を煽る表現や、断定的な判断はできる限り避け、<span className="hidden md:inline"><br /></span>
                      読み終えた後に少し気持ちが整理されるような内容を心がけています。
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <SectionHeader icon={Sparkles}>AIの活用について</SectionHeader>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                      Yume Insight では、一部の機能にAIを活用しています。
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                      ただし、AIによる分析結果は参考情報として提供しており、<span className="hidden md:inline"><br /></span>
                      <span className="text-purple-300 font-bold">最終的な内容の確認や編集は、人の視点で行っています。</span>
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      AIを「答えを出す存在」ではなく、<span className="hidden md:inline"><br /></span>
                      考えるきっかけを広げるための補助的なツールとして位置づけています。
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <SectionHeader icon={User}>運営について</SectionHeader>
                  <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-4">
                    <p>
                      Yume Insight は、個人開発者によって運営されている情報サイトです。
                    </p>
                    <p>
                      個人での運営ではありますが、<br />
                      コンテンツの品質や表現には責任を持ち、<br />
                      安心して利用できるサイトであることを大切にしています。
                    </p>
                    <p>
                      ご意見・ご質問がある場合は、<Link href="/contact" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">お問い合わせページ</Link>よりご連絡ください。
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="p-6 md:p-8 rounded-2xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20 text-center">
                    <h3 className="text-xl font-bold text-white mb-4">最後に</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      夢はとても個人的で、正解が一つに決まるものではありません。<span className="hidden md:inline"><br /><br /></span>
                      Yume Insight が、<span className="hidden md:inline"><br /></span>
                      「少し立ち止まって自分を振り返る場所」<span className="hidden md:inline"><br /></span>
                      として、あなたの日常に役立てば幸いです。
                    </p>
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
                      <Link href="https://github.com/karake-shoya" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all shadow-sm" title="GitHub">
                        <FaGithub className="w-5 h-5" />
                      </Link>
                      <Link href="https://x.com/naiawa1026" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all shadow-sm" title="X (Twitter)">
                        <FaXTwitter className="w-5 h-5" />
                      </Link>
                      <Link href="https://qiita.com/shoya_u" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 transition-all shadow-sm" title="Qiita">
                        <img src="/images/qiita-icon.png" alt="Qiita" className="w-5 h-5 object-contain" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </ContentPageLayout>
  );
}
