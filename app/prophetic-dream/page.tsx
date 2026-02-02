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

            <div className="prose prose-invert prose-purple max-w-none space-y-8">
              {/* 導入 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-gray-300 leading-relaxed text-lg m-0">
                  正夢とは何か。この問いは古代から現代に至るまで、人間の想像力と心理への関心を刺激し続けてきたテーマのひとつです。多くの人が「夢で見たことが現実になった」と感じる体験を持ち、それを単なる偶然以上のものとして受け取ります。しかし心理学や精神分析の観点から見ると、正夢は超自然的現象というより、<span className="text-purple-300 font-medium">人間の認知の仕組みと深く関係した現象</span>として理解することができます。
                </p>
              </div>

              {/* 広告（上部） */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <AdsenseAd slot={AD_SLOT_TOP} />
              </div>

              {/* セクション1: 脳の予測機能 */}
              <section>
                <h2 className="text-2xl font-bold text-white mt-10 mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-purple-400" />
                  脳の予測シミュレーション
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  まず重要なのは、夢そのものが脳の情報処理の一部であるという点です。睡眠中、脳は日中に得た膨大な情報を整理し、記憶として再構成しています。この過程で、過去の経験、感情、未来への予測が混ざり合い、物語のような形で夢として現れます。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  つまり夢は、脳が未来を「予測するシミュレーション装置」として働いている結果とも言えます。人間の脳は常に次に起こりうる出来事を推測しており、その推測が偶然現実と一致したとき、私たちはそれを正夢として認識するのです。
                </p>
              </section>

              {/* セクション2: 選択的記憶 */}
              <section>
                <h2 className="text-2xl font-bold text-white mt-10 mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-purple-400" />
                  選択的記憶という認知バイアス
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  心理学では「選択的記憶」と呼ばれる現象も関係しています。人は当たった記憶を強く覚え、外れた記憶を忘れやすい傾向があります。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  たとえば、夢の中で何百もの出来事を見ていても、現実と一致した部分だけが強調され、「夢が当たった」という印象が残ります。この認知バイアスは人間の自然な心の働きであり、正夢体験を特別なものとして感じさせる一因になっています。
                </p>
              </section>

              {/* セクション3: 無意識の洞察 */}
              <section>
                <h2 className="text-2xl font-bold text-white mt-10 mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-purple-400" />
                  無意識の洞察力
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  精神分析の視点から見ると、正夢は無意識の洞察とも解釈できます。フロイトやユングは、夢を無意識のメッセージとして捉えました。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  私たちは日常生活の中で、意識していない微細な変化や兆候を感じ取っています。人間関係の緊張、体調の変化、環境の違和感など、言葉にならない情報が無意識に蓄積され、それが夢として表現されることがあります。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  そして後になって現実が動いたとき、「予知していた」と感じるのです。これは未来を当てたというより、<span className="text-purple-300 font-medium">無意識が現在を鋭く読み取っていた結果</span>と言えるでしょう。
                </p>
              </section>

              {/* 広告（中部） */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <AdsenseAd slot={AD_SLOT_MIDDLE} />
              </div>

              {/* セクション4: 感情との結びつき */}
              <section>
                <h2 className="text-2xl font-bold text-white mt-10 mb-4 border-l-4 border-purple-500 pl-4">
                  感情と意味づけの力
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  また、正夢体験は感情とも強く結びついています。強い不安や期待を抱いているとき、人はそれに関連する夢を見やすくなります。そして現実がその方向に動くと、夢が予言的だったように感じます。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  ここには人間の意味づけの欲求が働いています。私たちは偶然の一致に物語を与え、自分の経験に一貫性を見出そうとする存在なのです。
                </p>
              </section>

              {/* 結論 */}
              <section className="p-6 rounded-2xl bg-linear-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">結論</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  結局のところ、正夢とは「未来を知る神秘」よりも、<span className="text-purple-300 font-medium">「人間の脳の予測力と意味づけの力」</span>を映し出した現象だと言えます。それは科学的に説明できる側面を持ちながらも、同時に人間の内面の豊かさを示す体験でもあります。
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-0">
                  夢は単なる幻想ではなく、私たちの記憶、感情、直感が交差する場所です。正夢という感覚は、人間がいかに未来を想像し、世界を理解しようとしているかを物語る、心理的に非常に興味深い現象なのです。
                </p>
              </section>
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
