import React from "react";
import { Metadata } from "next";
import { Heart, Users, Sparkles, Shield, TrendingUp, AlertCircle, Lightbulb, MessageCircleQuestion } from "lucide-react";
import GradientBackground from "@/components/GradientBackground";
import SectionHeader from "@/components/SectionHeader";
import AdsenseAd from "@/components/AdsenseAd";
import { siteConfig } from "@/lib/config";
import SleepingPositionsQuiz from "@/components/SleepingPositionsQuiz";
import DreamAnalysisCTA from "@/components/DreamAnalysisCTA";
import { toPositionId } from "@/lib/utils";
import { RESULTS, ResultTypeId } from "@/lib/data/sleepingPositions";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ res?: string }> }): Promise<Metadata> {
  const { res } = await searchParams;
  const baseUrl = siteConfig.baseUrl || "https://yume-insight.com";
  
  const baseTitle = "カップルの寝方・寝る体勢でわかる深層心理｜夫婦の寝相15パターンと相性診断 | Yume Insight";
  const baseDesc = "カップルや夫婦の寝る体勢から、ふたりの深層心理や現在の関係性を解説します。背中合わせ、密着寝など15の寝方パターンからわかる相性診断（10問）付き。昨夜の寝相が教えるふたりの本音とは？";
  
  if (res && RESULTS[res as ResultTypeId]) {
    const result = RESULTS[res as ResultTypeId];
    const shareTitle = `診断結果は「${result.title}」でした！ | カップル寝相診断`;
    const shareDesc = `私たちのおすすめ寝相は「${result.sleepingPosition}」！${result.description}`;
    const shareImage = `${baseUrl}${result.imageUrl}`;

    return {
      title: shareTitle,
      description: shareDesc,
      alternates: {
        canonical: "/sleeping-positions",
      },
      openGraph: {
        title: shareTitle,
        description: shareDesc,
        url: `${baseUrl}/sleeping-positions?res=${res}`,
        images: [{ url: shareImage, width: 1200, height: 1200 }],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: shareTitle,
        description: shareDesc,
        images: [shareImage],
      },
    };
  }

  return {
    title: baseTitle,
    description: baseDesc,
    alternates: {
      canonical: "/sleeping-positions",
    },
    keywords: [
      "カップル 寝方",
      "カップル 寝る体勢",
      "カップル 寝相",
      "夫婦 寝方 心理",
      "カップル寝方 心理",
      "寝相診断",
      "相性診断"
    ],
    openGraph: {
      title: baseTitle,
      description: baseDesc,
      images: [`${baseUrl}/images/sleeping-positions/affection.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDesc,
      images: [`${baseUrl}/images/sleeping-positions/affection.png`],
    },
  };
}

interface SleepingPosition {
  name: string;
  imageUrl: string;
  description: string;
  psychology: string;
  relationship: string;
  dreamTendency: string;
}

const SLEEPING_POSITIONS: SleepingPosition[] = [
  {
    name: "密着寝",
    imageUrl: "/images/sleeping-positions/affection.png",
    description: "どちらかが後ろから包み込む、あるいは密着して眠る姿勢。安心感を強く求めるふたりに最適。",
    psychology: "保護欲と被保護欲、そして強い親愛の証。お互いの温度を感じることでリラックスできます。",
    relationship: "非常に親密で、信頼関係が深い状態。スキンシップで絆を確認し合うカップルです。",
    dreamTendency: "安心感から深い眠りにつきやすく、温かい雰囲気の夢や達成感のある夢を見やすい傾向があります。",
  },
  {
    name: "向き合い寝",
    imageUrl: "/images/sleeping-positions/communication.png",
    description: "お互いの顔を見ながら眠る姿勢。コミュニケーションを大切にするカップルに多い寝方。",
    psychology: "相手への強い関心と愛情。言葉を超えた意思疎通を求めている心理の表れです。",
    relationship: "対等で、何でも話し合えるオープンな関係。お互いをもっと知りたいという欲求があります。",
    dreamTendency: "対人関係への関心が高く、会話を楽しむ夢や人と協力する夢を見やすい状態です。",
  },
  {
    name: "手つなぎ寝",
    imageUrl: "/images/sleeping-positions/gentleBond.png",
    description: "体は適度な距離を保ちつつ、手だけを繋いで眠る姿勢。自立と繋がりのバランス。",
    psychology: "個人の空間を大切にしながら、繋がりを失いたくないという控えめながら確かな愛着。",
    relationship: "お互いを尊重しつつ愛情を確認し合える、大人な理想的関係性です。",
    dreamTendency: "精神的な充足感が高いため、直感的なメッセージ性の強い夢や穏やかな夢を見ることがあります。",
  },
  {
    name: "絡み合い寝",
    imageUrl: "/images/sleeping-positions/passion.png",
    description: "腕や足を絡め合い、一体となって眠る姿勢。情熱的な時期によく見られます。",
    psychology: "強い愛着と、一時も離れたくないという情熱的な感情。お互いへの依存心も含まれます。",
    relationship: "感情が高まっており、強い一体感を感じている状態。非常にロマンチックな関係です。",
    dreamTendency: "エネルギーが強く、ドラマチックな展開や情熱的なロマンスの夢、あるいは束縛を象徴する夢を見ることも。",
  },
  {
    name: "背中接触寝",
    imageUrl: "/images/sleeping-positions/stable.png",
    description: "背中の一部を触れ合わせて眠る姿勢。安定感と心地よい距離感の両立。",
    psychology: "お互いの存在を感じることで安心しつつ、個々の眠りやすさも尊重する合理的な愛情。",
    relationship: "成熟した信頼関係。べったりしなくても繋がっている実感が持てる安定カップルです。",
    dreamTendency: "自立心のバランスが良く、現実に即した整理整頓の夢や、穏やかな日常の夢を見やすいでしょう。",
  },
  {
    name: "背中きょり寝",
    imageUrl: "/images/sleeping-positions/independent.png",
    description: "お互いに背を向け、ある程度の距離を取って眠る姿勢。自立した大人な選択。",
    psychology: "独立心が強く、良質な睡眠を重視する姿勢。相手への深い信頼があるからこそ可能な形。",
    relationship: "互いの個性を認め合う健全な関係。ただし、あえて取っている距離であればポジティブな証拠です。",
    dreamTendency: "自分の世界に没頭しやすく、趣味や仕事に集中する夢を見ることが多いようです。",
  },
  {
    name: "胸まくら寝",
    imageUrl: "/images/sleeping-positions/support.png",
    description: "一方が仰向けになり、もう一方が胸に頭を乗せて眠る姿勢。支え合う構図。",
    psychology: "守る側は包容力を示し、委ねる側は絶対的な安心感を得ている心理バランス。",
    relationship: "ケアし合う気持ちが強く、信頼関係が強固に構築されたカップルです。",
    dreamTendency: "安全が確保されているため、美しい風景の夢や解放感のある夢を見やすいと言われています。",
  },
  {
    name: "スペース大きめ寝",
    imageUrl: "/images/sleeping-positions/selfTime.png",
    description: "ベッドを広く使い、自由な体勢で眠る姿勢。自分らしさを尊重する関係。",
    psychology: "形式にとらわれず、自分たちが一番快適でいられる状態を好む自由な精神。",
    relationship: "友達のような気軽さがあり、干渉しすぎない風通しの良い関係性です。",
    dreamTendency: "自由奔放な発想が夢に出やすく、冒険の夢やクリエイティブな夢を見る傾向があります。",
  },
  {
    name: "片方だけ向いて寝る",
    imageUrl: "/images/sleeping-positions/partialEmbrace.png",
    description: "片方は相手の方を向いて横向きに、もう片方は仰向けで眠る非対称な寝方。",
    psychology: "向いている側が相手への関心や愛情を強く求め、仰向け側は自立心と精神的な安定感を持つ状態。",
    relationship: "バランスが非対称ながらも、お互いの違いを受け入れている成熟した関係。",
    dreamTendency: "向いている側は対人関係や感情に関わる夢を、仰向け側は仕事や目標に関連した夢を見る傾向があります。",
  },
  {
    name: "足だけ触れる寝方",
    imageUrl: "/images/sleeping-positions/footTouch.png",
    description: "体は離れているが、足先や足首だけがそっと触れ合っている寝方。",
    psychology: "つながっていたい気持ちと、それぞれの空間も大切にしたいというバランス感覚。",
    relationship: "無意識の感情が出やすい足で触れ合う、本音の愛情表現ができる長く付き合ったカップル。",
    dreamTendency: "心地よい安心感の中で眠れるため、穏やかで日常的な夢を見やすい状態です。",
  },
  {
    name: "仰向け並び寝",
    imageUrl: "/images/sleeping-positions/backToBackParallel.png",
    description: "二人が並んで仰向けになり、体は触れていない寝方。",
    psychology: "お互いの個を強く尊重している自立した心理。",
    relationship: "一緒にいるけれど干渉しないという信頼関係。急になった場合は距離ができたサインの可能性も。",
    dreamTendency: "自分の内面と向き合う夢や、仕事・趣味に関連した夢を見やすい傾向があります。",
  },
  {
    name: "うつ伏せ寝",
    imageUrl: "/images/sleeping-positions/faceDown.png",
    description: "どちらか一方、または両方がうつ伏せで眠る寝方。",
    psychology: "自分の世界を守りたいという防衛本能や、ストレス・不安を感じているサイン。",
    relationship: "プレッシャーを感じている可能性があり、さりげない思いやりや声かけが求められる状態。",
    dreamTendency: "体への圧迫感が夢に影響しやすく、追われる夢や閉塞感のある夢を見ることがあると言われています。",
  },
  {
    name: "枕元に寄り添う寝方",
    imageUrl: "/images/sleeping-positions/headCloseTogether.png",
    description: "体の距離は保ちながら、頭だけを相手の方へ近づけて眠る寝方。",
    psychology: "相手の存在を感じたいけれど、窮屈にはしたくないという思いやり。",
    relationship: "精神的なつながりも相手の睡眠も尊重できる、非常にバランス感覚の良いカップル。",
    dreamTendency: "安心感と適度な刺激のバランスが取れており、印象的で感情豊かな夢を見やすい傾向があります。",
  },
  {
    name: "腕枕寝",
    imageUrl: "/images/sleeping-positions/armPillow.png",
    description: "一方が腕を差し出し、もう一方がその腕を枕にして眠る寝方。",
    psychology: "差し出す側は強い保護欲と独占欲、委ねる側は絶対的な信頼と安心感。",
    relationship: "付き合いたての頃に多く見られる、非常にロマンチックな関係性。",
    dreamTendency: "差し出す側は守る夢や達成感のある夢を、委ねる側は安心感に包まれた温かい夢を見やすいとされています。",
  },
  {
    name: "対角線寝",
    imageUrl: "/images/sleeping-positions/diagonalCrossing.png",
    description: "ベッドを斜めに使い、二人の体が緩やかに交差するような寝方。",
    psychology: "自分の快適さを優先しながらも、どこかでつながりを求めている自由な精神。",
    relationship: "型にはまらず、お互いのスタイルを尊重できる風通しの良い関係。",
    dreamTendency: "自由な発想が夢に出やすく、冒険や旅をテーマにしたクリエイティブな夢を見る傾向があります。",
  },
];

const TIPS = [
  { title: "眠る前に短い会話を", description: "1日の気分を共有すると、寝るときの安心感が高まります。", icon: TrendingUp },
  { title: "寝具の快適さを優先", description: "相性よりも先に、室温や寝具の基本を整えることが大切です。", icon: Shield },
  { title: "体勢は固定しなくてOK", description: "寝相は日によって変わります。その夜の快適さを優先しましょう。", icon: Heart },
  { title: "違和感がある時は調整", description: "眠りづらい時は、距離や向きを自由に試してみましょう。", icon: Sparkles },
];

const FAQ_ITEMS = [
  { question: "寝相は毎日変わっても大丈夫？", answer: "大丈夫です。体調や気温でも変わります。ふたりが無理なく眠れているかが目安です。" },
  { question: "急に距離が空いたら問題？", answer: "必ずしも問題ではありません。疲れている時は距離を欲することがあります。日中の会話で安心感を補いましょう。" },
  { question: "診断結果がしっくりこない時は？", answer: "この診断はエンタメ要素を含む傾向診断です。ふたりの会話のきっかけとして楽しんでください。" },
];

export default function SleepingPositionsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBackground variant="mystical" intensity="strong" animated={true} />
      <div className="relative z-10 pt-20 pb-16">
        <main className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <section className="text-center space-y-6 pt-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent pb-2 leading-tight">
                カップル・夫婦の寝方・寝る体勢でわかる深層心理<br />
                <span className="text-2xl md:text-3xl text-gray-400 font-medium block mt-4">
                  15の寝相パターンと相性診断
                </span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                普段の寝方には、言葉にできないふたりの関係性や本音が隠されています。<span className="hidden md:inline"><br /></span>
                10の質問でいまの寝相タイプをチェックし、15のパターンから深層心理を探ってみましょう。
              </p>
            </section>

            <SleepingPositionsQuiz
              positions={SLEEPING_POSITIONS.map(({ name, dreamTendency, imageUrl }) => ({ name, dreamTendency, imageUrl }))}
            />

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={siteConfig.adsenseSlot} />
            </div>

            <section className="space-y-8">
              <SectionHeader icon={Users}> 15の寝相が教える相性と夢模様</SectionHeader>
              <div className="grid grid-cols-1 gap-6">
                {SLEEPING_POSITIONS.map((position, index) => (
                  <React.Fragment key={position.name}>
                    <article
                      id={toPositionId(position.name)}
                      className="group relative scroll-mt-28 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex items-center justify-center md:justify-start">
                          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-2xl border border-white/10 p-0.5 bg-linear-to-b from-white/10 to-transparent">
                            <img
                              src={position.imageUrl}
                              alt={position.name}
                              className="w-full h-full object-cover rounded-full opacity-90 transition-opacity group-hover:opacity-100"
                            />
                          </div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{position.name}</h2>
                            <p className="text-gray-400 leading-relaxed">{position.description}</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                            <div className="space-y-2">
                              <span className="inline-flex items-center text-xs font-bold px-2 py-1 rounded bg-pink-500/10 text-pink-300 border border-pink-500/20">
                                <Heart className="w-3 h-3 mr-1" /> 相性と心理
                              </span>
                              <p className="text-sm text-gray-300 leading-relaxed">{position.relationship} <br /><span className="text-gray-400 text-xs mt-1 block">({position.psychology})</span></p>
                            </div>
                            <div className="space-y-2">
                              <span className="inline-flex items-center text-xs font-bold px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                <Sparkles className="w-3 h-3 mr-1" /> 見やすい夢の傾向
                              </span>
                              <p className="text-sm text-gray-200 leading-relaxed">{position.dreamTendency}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* 5個目の後と10個目の後に中間CTAを挿入 */}
                    {(index === 4 || index === 9) && (
                      <div className="py-4">
                        <DreamAnalysisCTA 
                          title="寝相だけでなく、昨夜見た夢も診断しませんか？"
                          description="寝相が今の関係性を映すなら、夢はあなたの心の奥底にある「本当の願い」を教えてくれるかもしれません。"
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>



            <section className="space-y-8 bg-linear-to-br from-indigo-900/20 to-purple-900/20 p-8 rounded-3xl border border-white/5">
              <SectionHeader icon={Lightbulb}>睡眠姿勢と夢の不思議な関係</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
                <div className="space-y-3">
                  <h3 className="font-bold text-white text-lg flex items-center"><span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>右向き？左向き？</h3>
                  <p className="leading-relaxed text-sm">左側を下にした姿勢で悪夢、右側を下にした姿勢で穏やかな夢を見やすいという説があります。体調に合わせて調整してみてください。</p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-white text-lg flex items-center"><span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>うつ伏せ寝と夢</h3>
                  <p className="leading-relaxed text-sm">うつ伏せ寝は身体への刺激が夢に反映されやすく、追われる夢や情熱的な夢を見やすい傾向があると言われています。</p>
                </div>
              </div>
            </section>

            <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
              <SectionHeader icon={MessageCircleQuestion}>よくある質問（FAQ）</SectionHeader>
              <div className="space-y-4">
                {FAQ_ITEMS.map((item) => (
                  <details key={item.question} className="rounded-2xl border border-white/10 bg-black/20 p-4 group">
                    <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center capitalize">{item.question} <span className="transition-transform group-open:rotate-180">▼</span></summary>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <DreamAnalysisCTA 
              description={
                <>
                  カップルの寝相には、日々の感情や潜在的な想いが現れています。
                  <span className="hidden md:inline"><br /></span>
                  昨夜見た夢も、実はあなたへの大切なメッセージかもしれません。
                </>
              }
            />

            <div className="mt-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
              <p><span className="font-bold flex mb-2 text-gray-400 items-center"><AlertCircle className="w-4 h-4 mr-2" /> ご利用上の注意</span>本ページはエンターテインメントコンテンツです。寝相診断は科学的に断定されたものではなく、医学的なアドバイスでもありません。</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
