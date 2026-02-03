import { Metadata } from "next";
import GradientBackground from "@/components/GradientBackground";
import AdsenseAd from "@/components/AdsenseAd";

export const metadata: Metadata = {
  title: "夢占いの考え方｜Yume Insight",
  description: "当サイトの夢占いの考え方を解説。夢研究の見解を参考に、心身状態を振り返るヒントとして夢を読み解きます。",
};

const AD_SLOT_TOP = "6378422969";
const AD_SLOT_MIDDLE = "6378422969";

export default function ApproachPage() {
  return (
    <div className="relative">
      <GradientBackground />

      <div className="relative z-10">
        <main className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <section className="text-center space-y-8 pt-8 relative">
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
                  夢占いの考え方
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  当サイトは「夢＝未来の予言」として断定するものではありません。<br/>
                  夢研究の見解を参考に、心身状態を振り返るヒントとして夢を読み解きます。
                </p>
              </div>
            </section>

            {/* 広告（上部） */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={AD_SLOT_TOP} />
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-200">
                このサイトが参照している主要な考え方
              </h2>

              <div className="grid gap-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    A. 連続性仮説：夢は“最近の生活”の延長になりやすい
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    夢の素材は、日中の出来事・気がかり・人間関係・感情などとつながりやすい、という考え方です。
                    たとえば「職場の締切が続いた週に、追われる夢を見た」など、現実の負荷や関心が形を変えて夢に出ることがあります。
                  </p>
                  <div className="rounded-2xl bg-purple-500/10 border border-purple-500/20 p-4 text-purple-100">
                    夢は「現実の録画」ではなく「現実の素材を使った自動編集ダイジェスト」。素材は現実由来でも、編集（変形・混合）は脳内で起きます。
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    B. 脅威シミュレーション：不安や危険を“予行演習”する夢が出ることがある
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    追跡される、落ちる、事故に遭うなどの夢は、危険や不安に関するシミュレーションとして説明されることがあります。
                    当サイトでは、こうした夢を「悪い予兆」と断定せず、ストレス・睡眠不足・緊張の継続などを点検する入り口として扱います。
                  </p>
                  <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-4 text-indigo-100">
                    夢は「避難訓練シミュレーター」。怖い映像＝不吉、ではなく、心身のアラートの可能性もある、という見方です。
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    C. 夢と感情：夢は“感情の色”が強く出やすい
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    夢の内容はストーリー以上に「夢の中で何を感じたか（恐怖・恥・安心など）」が重要な手がかりになります。
                    そのため当サイトは、シンボル（物・場所）より先に、感情と直近の生活状況を質問します。
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    D. “意味がある/ない”は諸説：当サイトは断定を避けます
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    夢に強い意味を見出す立場も、偶然の産物に近いとみなす立場もあります。
                    当サイトはどちらかに寄せて断定せず、自己理解とセルフケアに役立つ範囲で結果を提示します。
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-200">使い方（ユーザー向け）</h2>
              <p className="text-gray-300 leading-relaxed">
                診断結果は「当てにいく占い」ではなく、「最近の自分を棚卸しする質問集」として使ってください。
              </p>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-4">
                <h3 className="text-lg font-semibold text-white">特に見るべきは</h3>
                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  <li>夢の感情（怖い/安心/焦り/怒り など）</li>
                  <li>直近1〜2週間の出来事（締切・対人・体調・生活リズム）</li>
                  <li>夢が繰り返されるか（頻度）</li>
                </ul>
              </div>
            </section>

            {/* 広告（中部） */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={AD_SLOT_MIDDLE} />
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-red-200">免責・受診目安</h2>
              <div className="rounded-3xl border border-red-500/40 bg-red-500/10 p-6 md:p-8 text-red-100 leading-relaxed">
                悪夢が頻繁で日中の生活に支障がある／強い不安やフラッシュバックが続く／睡眠障害がある場合は、
                医療・専門機関に相談してください（当サイトは診断・治療を行いません）。
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
