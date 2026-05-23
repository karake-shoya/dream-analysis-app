import { Metadata } from "next";
import Link from "next/link";
import { User, Heart, Sparkles, BookOpen, Lightbulb } from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import ContentPageLayout from "@/components/ContentPageLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About｜Yume Insightについて",
  description: "Yume Insightは、ユング心理学をベースに夢の意味を解説する情報サイトです。深層心理の観点から夢を読み解き、自己理解のきっかけを提供します。サイトの考え方と開発者情報。",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About｜Yume Insightについて",
    description: "Yume Insightは、ユング心理学をベースに夢の意味を解説する情報サイトです。深層心理の観点から夢を読み解き、自己理解のきっかけを提供します。サイトの考え方と開発者情報。",
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
                  <SectionHeader icon={Lightbulb}>このサイトを作ったきっかけ</SectionHeader>
                  <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-4">
                    <p>
                      きっかけは、知人が夢占いに熱中しているのを見たことでした。
                    </p>
                    <p>
                      「夢の意味が気になる」という気持ちは多くの人が持っているのに、既存の夢占いサイトの多くは「吉夢・凶夢」の二択や、根拠の薄い断定が多い印象がありました。
                    </p>
                    <p>
                      大学で教育心理学を学んだ経験と、中学校で理科を教えてきた「わかりやすく正確に伝える」という視点を活かして、<span className="text-purple-300 font-bold">心理学的な根拠を持ちながら、断定せず・不安を煽らない</span>夢解説サイトを作れないかと思い、Yume Insight を開発しました。
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
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Yume Insight では、夢占い辞典・コラムの作成と、AI夢分析機能にAI技術を活用しています。
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      コンテンツ作成においては、AIが生成した初稿を運営者が以下の観点で確認・修正しています。
                    </p>
                    <ul className="space-y-3">
                      {[
                        "心理学的に根拠のない断定・「必ずこうなる」という表現の除去",
                        "不安を煽る・過度にネガティブな表現の言い換え",
                        "参考文献・心理学理論との整合性の確認",
                        "医療・診断・予言に踏み込む表現が含まれていないかのチェック",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-gray-300">
                          <span className="text-purple-400 mt-1 shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      AIを「答えを出す存在」ではなく、考えるきっかけを広げるための補助ツールと位置づけており、最終的な判断は人の目で行っています。
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <SectionHeader icon={BookOpen}>コンテンツの参照軸について</SectionHeader>
                  <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-4">
                    <p>
                      本サイトのコンテンツは、<span className="text-purple-300 font-bold">ユング心理学・深層心理学・教育心理学</span>を主な参照軸として構成しています。
                    </p>
                    <p>
                      カール・グスタフ・ユングが提唱した「無意識」「シャドウ（影）」「元型（アーキタイプ）」などの概念をもとに、夢に現れるイメージの心理的意味を解説しています。また、教育心理学の観点から「どう伝えれば読者が誤解なく理解できるか」という表現設計を重視しています。
                    </p>
                    <p>
                      コンテンツ作成にあたって参照している主な文献は以下の通りです。
                    </p>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 shrink-0">▸</span>
                        <span>C.G. Jung 著『夢分析』（<em>Dreams</em>, Princeton University Press）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 shrink-0">▸</span>
                        <span>C.G. Jung 著『無意識の心理』（<em>Psychology of the Unconscious</em>）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 shrink-0">▸</span>
                        <span>Sigmund Freud 著『夢判断』（<em>The Interpretation of Dreams</em>）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1 shrink-0">▸</span>
                        <span>David Fontana 著『The Secret Language of Dreams』（Chronicle Books）</span>
                      </li>
                    </ul>
                    <p>
                      これらの理論はあくまで解釈の枠組みであり、特定の夢の意味を断定・予言するものではありません。
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <SectionHeader icon={User}>運営について</SectionHeader>
                  <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-4">
                    <p>
                      Yume Insight は、Shoya Ueno（個人）が開発・運営している情報サイトです。
                    </p>
                    <div className="grid grid-cols-3 gap-4 not-prose my-2">
                      {[
                        { label: "辞典記事", value: "101記事" },
                        { label: "コラム", value: "25記事" },
                        { label: "辞典カテゴリ", value: "7分野" },
                      ].map(({ label, value }) => (
                        <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-purple-300">{value}</p>
                          <p className="text-xs text-gray-400 mt-1">{label}</p>
                        </div>
                      ))}
                    </div>
                    <p>
                      個人での運営ではありますが、コンテンツの品質・表現・事実確認には責任を持ち、安心してご利用いただけるサイトであることを大切にしています。
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
                    <p className="text-sm text-purple-300 font-medium mb-6 uppercase tracking-wider">Software Developer / Science Teacher</p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      大学で教育心理学を修め、現在は中学校理科教員として勤務するかたわら、ソフトウェア開発も行っています。知人の夢占いへの関心をきっかけに Yume Insight を開発。「心理学的に正しく、わかりやすく伝える」という教育者の視点でコンテンツ監修を行っています。
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
