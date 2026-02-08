import { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Eye, Heart } from 'lucide-react';
import GradientBackground from '@/components/GradientBackground';
import AdsenseAd from '@/components/AdsenseAd';

const AD_SLOT_TOP = "6378422969";
const AD_SLOT_MIDDLE = "6378422969";

export const metadata: Metadata = {
  title: '正夢とは？｜夢が現実になる心理学的メカニズム',
  description: '正夢とは何か。心理学・精神分析の観点から、夢が現実と一致する現象のメカニズムを解説。脳の予測機能や選択的記憶など、科学的な視点で正夢を理解します。',
};

export default function PropheticDreamPage() {
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
                  正夢とは？
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  夢が現実になる現象の心理学的メカニズム
                </p>
              </div>
            </section>

          <article>
            <div className="prose prose-invert prose-purple max-w-none space-y-12">
              {/* 導入 */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
                <p className="mb-6">
                  「今のシーン、夢で見たことがある気がする…」
                </p>
                <p>
                  そんな不思議な体験をしたことはありませんか？<br />
                  夢で見た出来事がその後現実に起こる現象は「正夢（まさゆめ）」と呼ばれ、古くから多くの人を惹きつけてきました。
                </p>
                <p className="mt-4">
                  予知能力のように感じられるかもしれませんが、心理学や脳科学の視点から見ると、これは私たちの<span className="text-purple-300 font-bold">脳の働きや心のメカニズム</span>として説明ができる、とても興味深い現象なんです。
                </p>
                <p className="mt-4">
                  ここでは、なぜ正夢を見るのか、その不思議な仕組みを優しく紐解いていきましょう。
                </p>
              </div>

              {/* 広告（上部） */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
                <AdsenseAd slot={AD_SLOT_TOP} />
              </div>

              {/* セクション1: 脳の予測機能 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <Brain className="w-8 h-8 mr-3 text-purple-400" />
                  脳が生み出す「未来のシミュレーション」
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  私たちは眠っている間、ただ休んでいるわけではありません。脳は起きている間に取り込んだ膨大な情報を整理整頓し、記憶として定着させる作業を行っています。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  この時、脳は過去のデータをもとにして「これから何が起こるか？」という予測も行っています。まるで高度なシミュレーションを行っているような状態です。<br />
                  この<span className="text-purple-300 font-bold">脳内シミュレーションの結果が、偶然現実の出来事とピタリと一致したとき</span>、私たちはそれを「正夢」として認識するのです。つまり、あなたの脳が優秀な予測器として働いた証拠とも言えるかもしれませんね。
                </p>
              </section>

              {/* セクション2: 無意識の洞察 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-purple-400" />
                  無意識がキャッチした「小さなサイン」
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  日々の生活の中で、私たちは意識していないけれど、無意識のうちに多くの情報を感じ取っています。<br />
                  例えば、友人のわずかな表情の変化、季節の変わり目の空気感、体調の小さな違和感などです。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  こうした<span className="text-purple-300 font-bold">言葉にならない微細なサイン</span>が夢の中で統合され、具体的な形となって現れることがあります。その後、現実に変化が起きた時、「夢で見た通りになった！」と驚くことになりますが、実はあなたの無意識が現状を鋭く分析していた結果なのです。
                </p>
              </section>

              {/* 広告（中部） */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
                <AdsenseAd slot={AD_SLOT_MIDDLE} />
              </div>

              {/* セクション3: 選択的記憶 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                  <Eye className="w-8 h-8 mr-3 text-purple-400" />
                  「当たったこと」だけを覚えている？
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  心理学には「選択的記憶」という言葉があります。人間は、<span className="text-purple-300 font-bold">印象に残ったことや都合の良いことだけを強く記憶し、それ以外を忘れてしまう</span>傾向があります。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  私たちは毎晩たくさんの夢を見ていますが、そのほとんどは忘れてしまいます。しかし、たまたま現実と一致した夢だけは、「驚き」という感情とともに強烈に記憶に残ります。<br />
                  「外れた夢」は忘れ去られ、「当たった夢」だけスポットライトが当たることで、まるで不思議な力で予知したかのように感じられるのです。
                </p>
              </section>

              {/* セクション4: 感情と願望 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
                  あなたの願いや不安が映し出される
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  また、正夢はあなたの強い「願い」や「不安」を反映していることもよくあります。<br />
                  「試験に合格したい」「あの人に会いたい」といった強い思いや、「失敗したらどうしよう」という不安は、夢のシナリオを作り出す強力な材料になります。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  その願いが叶ったり、心配事が現実になったりした時、それは予知というよりも、あなたの<span className="text-purple-300 font-bold">心の深層にある思いが現実に引き寄せられた</span>、あるいはその心の準備ができていた、と捉えることもできるでしょう。
                </p>
              </section>

              {/* 結論・まとめ */}
              <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">おわりに</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  正夢は、決して怖い現象や単なるオカルトではありません。<br />
                  それは、あなたの脳が情報を処理する過程や、無意識が感じ取っている世界、そしてあなたの心の奥底にある願いが織りなす、とても人間らしい現象です。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  もし正夢のような体験をしたら、それは自分の直感や観察力が冴えているサインかもしれませんし、自分の本当の気持ちに気づくチャンスかもしれません。<br />
                  不思議な夢からのメッセージを、日常を見直すヒントとして大切に受け取ってみてくださいね。
                </p>
              </section>

              {/* 免責事項 */}
              <div className="mt-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
                <p>
                  ※本ページで扱う「正夢」は、心理的な体験や記憶の解釈として語られる概念であり、未来を予測・保証するものではありません。
                </p>
              </div>
            </div>
          </article>

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-linear-to-r from-purple-900/50 to-indigo-900/50 border border-purple-500/30 text-center">
              <p className="text-lg text-gray-300 mb-6">
                あなたの夢にはどんな意味があるでしょうか？<br />
                <span className="text-white font-bold">AI夢占いで詳しく分析してみましょう。</span>
              </p>
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold shadow-lg shadow-purple-900/20 hover:scale-105 transition-transform"
              >
                AIで夢を診断する
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
