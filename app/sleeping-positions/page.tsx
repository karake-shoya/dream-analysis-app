import { Metadata } from "next";
import { Heart, Users, Sparkles, Shield, TrendingUp, AlertCircle, Lightbulb, MessageCircleQuestion } from "lucide-react";
import GradientBackground from "@/components/GradientBackground";
import SectionHeader from "@/components/SectionHeader";
import AdsenseAd from "@/components/AdsenseAd";
import { siteConfig } from "@/lib/config";
import SleepingPositionsQuiz from "@/components/SleepingPositionsQuiz";
import { toPositionId } from "@/lib/utils";


export const metadata: Metadata = {
  title: "カップル寝相診断｜寝方でわかる相性と夢の傾向 | Yume Insight",
  description:
    "カップル寝相診断（5問）で、ふたりの寝方タイプをチェック。おすすめ寝相・相性の傾向・注意点・夢の傾向をやさしく解説します。",
  keywords: ["カップル 寝相診断", "寝方診断", "相性診断", "カップル", "寝相", "夢の傾向"],
};

interface SleepingPosition {
  name: string;
  imageUrl: string;
  description: string;
  psychology: string;
  relationship: string;
  dreamTendency: string;
}

interface Tip {
  title: string;
  description: string;
  icon: typeof Heart;
}

interface FaqItem {
  question: string;
  answer: string;
}

const SLEEPING_POSITIONS: SleepingPosition[] = [
  {
    name: "スプーン（抱きしめる側）",
    imageUrl: "/images/sleeping-positions/spoon.png",
    description: "後ろから相手を包み込むように抱きしめる姿勢。伝統的で最もポピュラーな寝方のひとつ。",
    psychology: "保護欲が強く、パートナーを守りたいという気持ちの表れ。リーダーシップを取りたい傾向がある。",
    relationship: "安定した関係性で、信頼と愛情が深い状態。相手への独占欲も含まれることがある。",
    dreamTendency:
      "責任感が夢にも表れやすく、誰かを助けたり、仕事を成し遂げたりする「達成型」の夢を見やすい傾向があります。",
  },
  {
    name: "スプーン（抱きしめられる側）",
    imageUrl: "/images/sleeping-positions/spoon.png",
    description: "相手の腕の中で安心して眠る姿勢。受け入れる側の寝方。",
    psychology: "安心感を求めており、相手に信頼を寄せている。甘えたい気持ちや、守られたい願望。",
    relationship: "相手を信頼し、関係に安心感を感じている。心を開いている証拠。",
    dreamTendency:
      "安心感から深い眠りにつきやすく、温かい雰囲気の夢や、子供の頃のような懐かしい夢を見ることが多いようです。",
  },
  {
    name: "向かい合って寝る",
    imageUrl: "/images/sleeping-positions/facing.png",
    description: "お互いの顔を見ながら眠る姿勢。手を繋いだり、足を絡めることも。",
    psychology: "相手への強い関心と愛情。コミュニケーションを大切にし、親密さを求めている。",
    relationship: "付き合い始めや情熱的な時期に多い。お互いをもっと知りたいという欲求の表れ。",
    dreamTendency:
      "対人関係への関心が高まっているため、会話を楽しむ夢や、人と協力して何かをする夢を見やすい状態です。",
  },
  {
    name: "背中合わせ（触れ合って）",
    imageUrl: "/images/sleeping-positions/back-touching.png",
    description: "お互いの背中をくっつけて眠る姿勢。程よい距離感。",
    psychology: "お互いの存在を感じながらも、自立心を持っている。信頼があるからこそできる寝方。",
    relationship: "成熟した関係性の証。べったりしなくても繋がりを感じられる、安定したカップル。",
    dreamTendency:
      "リラックスと自立のバランスが良く、現実に即した整理整頓の夢や、穏やかな日常の夢を見やすいでしょう。",
  },
  {
    name: "背中合わせ（離れて）",
    imageUrl: "/images/sleeping-positions/back-far.png",
    description: "お互いに背を向け、距離を取って眠る姿勢。",
    psychology: "独立心が強く、自分の空間を大切にする。または、関係にストレスを感じている可能性も。",
    relationship: "自立したカップルの場合は健全。ただし、急にこの姿勢になった場合は要注意。",
    dreamTendency:
      "自分の世界に没頭しやすく、趣味や仕事に集中する夢、あるいは孤独感を感じる夢を見るなど、両極端になりやすいかもしれません。",
  },
  {
    name: "絡み合い（タングル）",
    imageUrl: "/images/sleeping-positions/tangle.png",
    description: "腕や足を絡め合い、体全体で密着して眠る姿勢。",
    psychology: "強い愛着と依存心。離れたくないという気持ちが強い。情熱的な感情。",
    relationship: "新しい関係や復縁後によく見られる。長期間続く場合は、過度な依存に注意。",
    dreamTendency:
      "感情のエネルギーが強く、ドラマチックな展開の夢や、情熱的なロマンスの夢、あるいは束縛される夢を見ることも。",
  },
  {
    name: "仰向け＆頭を胸に",
    imageUrl: "/images/sleeping-positions/chest.png",
    description: "一方が仰向けになり、もう一方が胸に頭を乗せて眠る姿勢。",
    psychology: "胸を貸す側は保護者的な役割、寄りかかる側は安心と信頼を求めている。",
    relationship: "信頼関係がしっかり構築されている。ケアし合う気持ちが強いカップル。",
    dreamTendency:
      "心身の安全が確保されているため、美しい風景の夢や、空を飛ぶような解放感のある夢を見やすいと言われています。",
  },
  {
    name: "手だけ繋いで",
    imageUrl: "/images/sleeping-positions/hand-holding.png",
    description: "体は離れているが、手だけを繋いで眠る姿勢。",
    psychology: "繋がりを感じたいが、個人の空間も大切にしたい。バランスの取れた考え方。",
    relationship: "お互いを尊重しながらも愛情を確認し合える、理想的な関係性。",
    dreamTendency:
      "精神的な充足感が高高いため、直感的なメッセージ性の強い夢や、スピリチュアルな雰囲気の夢を見ることがあるかもしれません。",
  },
];


const TIPS: Tip[] = [
  {
    title: "眠る前に短い会話を",
    description: "1日の気分を30秒でも共有すると、寝るときの安心感が高まりやすくなります。",
    icon: TrendingUp,
  },
  {
    title: "寝具の快適さを優先",
    description: "相性診断よりも先に、暑さ・寒さ・枕の高さなどの基本を整えることが大切です。",
    icon: Shield,
  },
  {
    title: "体勢は固定しなくてOK",
    description: "寝相は日によって変化します。ふたりが楽に眠れることを最優先にしましょう。",
    icon: Heart,
  },
  {
    title: "違和感が続く時は調整",
    description: "どちらかが眠りづらい時は、距離や向きを小さく変えてベストな位置を探してみましょう。",
    icon: Sparkles,
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "寝相は毎日変わっても大丈夫？",
    answer:
      "大丈夫です。寝相は体調・気温・生活リズムなどでも変わります。毎日同じである必要はなく、ふたりが無理なく眠れているかを目安にしてください。",
  },
  {
    question: "急に背中合わせになったら問題？",
    answer:
      "必ずしも問題ではありません。疲れている時期や暑い季節は距離を取りやすくなることがあります。気になる場合は、日中の会話や安心サインを増やしてみるのがおすすめです。",
  },
  {
    question: "診断結果がしっくりこない時は？",
    answer:
      "この診断は傾向を見るための読み物です。しっくりこない場合は、別の選択肢で再診断して、ふたりにとって快適な寝方のヒントとして活用してください。",
  },
];



// Approach B: ページはServer Componentのままにし、診断UIのみClient Componentへ分離。
export default function SleepingPositionsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBackground variant="mystical" intensity="strong" animated={true} />

      <div className="relative z-10 pt-20 pb-16">
        <main className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <section className="text-center space-y-6 pt-8">
              <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent pb-2">
                カップル寝相診断<br />
                <span className="text-xl md:text-2xl text-gray-400 font-medium block mt-2">
                  寝方でわかる相性と夢の傾向
                </span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                まずは寝相診断で、今のふたりに合う距離感をチェックしてみましょう。<br />
                診断結果のあとに、8つの寝相カードとコラムを読んでみましょう。<br />
                過ごし方のヒントが見つるかもしれません。
              </p>
            </section>

            <SleepingPositionsQuiz
              positions={SLEEPING_POSITIONS.map(({ name, dreamTendency, imageUrl }) => ({ name, dreamTendency, imageUrl }))}
            />


            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={siteConfig.adsenseSlot} />
            </div>

            <section className="space-y-8">
              <SectionHeader icon={Users}>8つの寝相が教える相性と夢模様</SectionHeader>
              <div className="grid grid-cols-1 gap-6">
                {SLEEPING_POSITIONS.map((position) => (
                  <article
                    key={position.name}
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
                              <Heart className="w-3 h-3 mr-1" />
                              相性と心理
                            </span>
                            <p className="text-sm text-gray-300 leading-relaxed shadow-sm">
                              {position.relationship}
                              <br />
                              <span className="text-gray-400 text-xs mt-1 block">({position.psychology})</span>
                            </p>
                          </div>

                          <div className="space-y-2">
                            <span className="inline-flex items-center text-xs font-bold px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                              <Sparkles className="w-3 h-3 mr-1" />
                              見やすい夢の傾向
                            </span>
                            <p className="text-sm text-gray-300 leading-relaxed shadow-sm">{position.dreamTendency}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="space-y-8 bg-linear-to-br from-indigo-900/20 to-purple-900/20 p-8 rounded-3xl border border-white/5">
              <SectionHeader icon={Lightbulb}>睡眠姿勢と夢の不思議な関係</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
                <div className="space-y-3">
                  <h3 className="font-bold text-white text-lg flex items-center">
                    <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
                    右向き？左向き？
                  </h3>
                  <p className="leading-relaxed text-sm">
                    一説によると、左側を下にした姿勢で悪夢を見やすいという報告もあります。逆に右側を下にした姿勢では、穏やかな夢が増えるという見方もあります。体調や個人差があるため、あくまで参考として取り入れてください。
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-white text-lg flex items-center">
                    <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
                    うつ伏せ寝と夢の内容
                  </h3>
                  <p className="leading-relaxed text-sm">
                    うつ伏せ寝では、身体への刺激が夢に反映されやすいとされる説があります。追われる夢や感情の強い夢を見たときは、睡眠環境を見直すきっかけにしてみるのもよいでしょう。
                  </p>
                </div>
              </div>
              <p className="text-xs text-center text-gray-500 mt-4">※一般的な傾向や俗説を含み、個人差があります。</p>
            </section>

            <section className="space-y-8">
              <SectionHeader icon={Shield}>良好な関係と良い夢のために</SectionHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TIPS.map((tip) => (
                  <div key={tip.title} className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <tip.icon className="w-5 h-5 text-purple-300" />
                      </div>
                      <h3 className="font-bold text-white">{tip.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{tip.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
              <SectionHeader icon={MessageCircleQuestion}>よくある質問（FAQ）</SectionHeader>
              <div className="space-y-4">
                {FAQ_ITEMS.map((item) => (
                  <details key={item.question} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <summary className="cursor-pointer font-semibold text-white">{item.question}</summary>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={siteConfig.adsenseSlot} />
            </div>

            <section className="space-y-6 pb-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-pink-500/10 rounded-full">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-medium text-pink-300">大切なのは二人の気持ち</span>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  寝方はあくまで一つの指標です。一番大切なのは、お互いが安心して眠れているかどうか。
                  <br />
                  良い夢を見るためにも、リラックスできる環境作りを二人で話し合ってみてくださいね。
                </p>
              </div>

              <div className="mt-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
                <p>
                  <span className="font-bold flex mb-2 text-gray-400 items-center">
                    <AlertCircle className="w-4 h-4 mr-2" /> ご利用上の注意
                  </span>
                  本ページの情報は、一般的な心理学的解釈や睡眠に関する雑学に基づいたエンターテインメントコンテンツです。寝相による性格診断や関係性の分析は科学的に完全に断定されたものではありません。また、医学的なアドバイスを提供するものでもありません。睡眠障害や身体的な不調を感じる場合は、医療機関へご相談ください。
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
