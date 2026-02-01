import { Metadata } from "next";
import { Heart, Users, Sparkles, Shield, TrendingUp, AlertCircle, Lightbulb } from "lucide-react";
import GradientBackground from "@/components/GradientBackground";
import SectionHeader from "@/components/SectionHeader";
import AdsenseAd from "@/components/AdsenseAd";

const AD_SLOT_TOP = "6378422969";
const AD_SLOT_MIDDLE = "6378422969";

export const metadata: Metadata = {
  title: "カップルの寝方で分かる関係性と心理状態 | Yume Insight",
  description: "カップルの寝方や寝姿勢から二人の関係性や心理状態を読み解きます。スプーンポジション、背中合わせ、絡み合いなど、様々な寝方の意味を解説。",
  keywords: ["カップル", "寝方", "寝姿勢", "関係性", "心理", "恋愛", "睡眠"],
};

interface SleepingPosition {
  name: string;
  emoji: string;
  description: string;
  psychology: string;
  relationship: string;
}

const SLEEPING_POSITIONS: SleepingPosition[] = [
  {
    name: "スプーン（抱きしめる側）",
    emoji: "🥄",
    description: "後ろから相手を包み込むように抱きしめる姿勢。伝統的で最もポピュラーな寝方のひとつ。",
    psychology: "保護欲が強く、パートナーを守りたいという気持ちの表れ。リーダーシップを取りたい傾向がある。",
    relationship: "安定した関係性で、信頼と愛情が深い状態。相手への独占欲も含まれることがある。",
  },
  {
    name: "スプーン（抱きしめられる側）",
    emoji: "🫂",
    description: "相手の腕の中で安心して眠る姿勢。受け入れる側の寝方。",
    psychology: "安心感を求めており、相手に信頼を寄せている。甘えたい気持ちや、守られたい願望。",
    relationship: "相手を信頼し、関係に安心感を感じている。心を開いている証拠。",
  },
  {
    name: "向かい合って寝る",
    emoji: "👫",
    description: "お互いの顔を見ながら眠る姿勢。手を繋いだり、足を絡めることも。",
    psychology: "相手への強い関心と愛情。コミュニケーションを大切にし、親密さを求めている。",
    relationship: "付き合い始めや情熱的な時期に多い。お互いをもっと知りたいという欲求の表れ。",
  },
  {
    name: "背中合わせ（触れ合って）",
    emoji: "🔙",
    description: "お互いの背中をくっつけて眠る姿勢。程よい距離感。",
    psychology: "お互いの存在を感じながらも、自立心を持っている。信頼があるからこそできる寝方。",
    relationship: "成熟した関係性の証。べったりしなくても繋がりを感じられる、安定したカップル。",
  },
  {
    name: "背中合わせ（離れて）",
    emoji: "↔️",
    description: "お互いに背を向け、距離を取って眠る姿勢。",
    psychology: "独立心が強く、自分の空間を大切にする。または、関係にストレスを感じている可能性も。",
    relationship: "自立したカップルの場合は健全。ただし、急にこの姿勢になった場合は要注意。",
  },
  {
    name: "絡み合い（タングル）",
    emoji: "🪢",
    description: "腕や足を絡め合い、体全体で密着して眠る姿勢。",
    psychology: "強い愛着と依存心。離れたくないという気持ちが強い。情熱的な感情。",
    relationship: "新しい関係や復縁後によく見られる。長期間続く場合は、過度な依存に注意。",
  },
  {
    name: "仰向け＆頭を胸に",
    emoji: "💑",
    description: "一方が仰向けになり、もう一方が胸に頭を乗せて眠る姿勢。",
    psychology: "胸を貸す側は保護者的な役割、寄りかかる側は安心と信頼を求めている。",
    relationship: "信頼関係がしっかり構築されている。ケアし合う気持ちが強いカップル。",
  },
  {
    name: "手だけ繋いで",
    emoji: "🤝",
    description: "体は離れているが、手だけを繋いで眠る姿勢。",
    psychology: "繋がりを感じたいが、個人の空間も大切にしたい。バランスの取れた考え方。",
    relationship: "お互いを尊重しながらも愛情を確認し合える、理想的な関係性。",
  },
];

const TIPS = [
  {
    icon: Shield,
    title: "寝方は変化する",
    description: "同じカップルでも、気分や状況によって寝方は変わります。一時的な変化を深刻に捉えすぎないことが大切。",
  },
  {
    icon: TrendingUp,
    title: "長期的な傾向を見る",
    description: "関係性を判断するなら、一晩ではなく数週間〜数ヶ月の傾向を観察しましょう。",
  },
  {
    icon: AlertCircle,
    title: "物理的な要因も考慮",
    description: "ベッドの大きさ、室温、体調なども寝方に影響します。心理的な理由だけとは限りません。",
  },
  {
    icon: Lightbulb,
    title: "コミュニケーションが一番",
    description: "寝方だけで関係を判断せず、直接話し合うことが最も確実です。",
  },
];

export default function SleepingPositionsPage() {
  return (
    <div className="relative">
      <GradientBackground />

      <div className="relative z-10">
        <main className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            
            {/* Hero Section */}
            <div className="text-center space-y-8 pt-8 relative">
              {/* 背景アイコン */}
              <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
                <div className="relative">
                  <div className="absolute -inset-4 bg-purple-500/10 rounded-full blur-3xl" />
                  <img 
                    src="/icon.png" 
                    alt="" 
                    className="w-40 h-40 opacity-10"
                  />
                </div>
              </div>
              <div className="relative space-y-4">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200 leading-[1.12]">
                  寝相でわかる相性診断
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  睡眠中は無意識の状態。だからこそ、本当の気持ちが表れるとも言われています。<br />
                  あなたとパートナーの寝方から、二人の関係性を読み解いてみましょう。
                </p>
              </div>
            </div>

            {/* Introduction */}
            <section className="space-y-8">
              <SectionHeader icon={Heart}>寝方が語る無意識のメッセージ</SectionHeader>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed">
                  私たちは起きている間、意識的に行動をコントロールしています。<br/>
                  しかし、眠っている間は<span className="text-pink-300 font-medium">無意識が支配する時間</span>。<br/>
                  そのため、寝方には普段隠している本当の気持ちや、相手への感情が自然と表れると考えられています。
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  ただし、これはあくまで心理学的な一つの見方。<br/>
                  寝方だけで全てを判断するのではなく、<span className="text-pink-300 font-medium">参考程度に楽しんで</span>くださいね。
                </p>
              </div>
            </section>

            {/* 広告（上部） */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={AD_SLOT_TOP} />
            </div>

            {/* Sleeping Positions Grid */}
            <section className="space-y-8">
              <SectionHeader icon={Users}>代表的な寝方とその意味</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SLEEPING_POSITIONS.map((position, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl shrink-0">{position.emoji}</div>
                      <div className="space-y-3 flex-1">
                        <h3 className="text-lg font-bold text-white">{position.name}</h3>
                        <p className="text-sm text-gray-400">{position.description}</p>
                        <div className="space-y-2 pt-2 border-t border-white/5">
                          <div>
                            <span className="text-xs font-medium text-purple-300">💭 心理状態</span>
                            <p className="text-sm text-gray-300 mt-1">{position.psychology}</p>
                          </div>
                          <div>
                            <span className="text-xs font-medium text-pink-300">💕 関係性</span>
                            <p className="text-sm text-gray-300 mt-1">{position.relationship}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tips Section */}
            <section className="space-y-8">
              <SectionHeader icon={Sparkles}>寝方を見る際のポイント</SectionHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TIPS.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm"
                  >
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

            {/* 広告（中部） */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={AD_SLOT_MIDDLE} />
            </div>

            {/* Closing Note */}
            <section className="text-center space-y-6 pb-8">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-pink-500/10 rounded-full">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-pink-300">大切なのは二人の気持ち</span>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                寝方はあくまで一つの指標。一番大切なのは、<span className="text-pink-300">お互いがどう感じているか</span>です。
                気になることがあれば、相手に直接聞いてみることが、最も確実で健全なコミュニケーションですよ。
              </p>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
