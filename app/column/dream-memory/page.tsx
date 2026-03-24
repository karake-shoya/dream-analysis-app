import { Metadata } from 'next';
import { Brain, Moon, Clock, Lightbulb, BookOpen, MessageSquare } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

export const metadata: Metadata = {
  title: '夢を覚えていない人と覚えている人の違いは何？',
  description:
    '夢を毎朝鮮明に覚えている人もいれば、まったく覚えていない人もいます。その差は記憶力ではなく、睡眠のタイミングや目覚め方、日常の習慣にあります。夢の記憶のメカニズムをわかりやすく解説します。',
  alternates: { canonical: '/column/dream-memory' },
  openGraph: {
    title: '夢を覚えていない人と覚えている人の違いは何？ | Yume Insight',
    description:
      '夢を毎朝鮮明に覚えている人もいれば、まったく覚えていない人もいます。その差は記憶力ではなく、睡眠のタイミングや目覚め方、日常の習慣にあります。夢の記憶のメカニズムをわかりやすく解説します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function DreamMemoryPage() {
  return (
    <ContentPageLayout>
      <PageHero
        title="夢を覚えていない人と覚えている人の違いは何？"
        subtitle="記憶力の差ではなく、睡眠と習慣の話"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              「昨日どんな夢を見た？」と聞かれて、すらすら答えられる人もいれば、「夢なんて見てないと思う」と返す人もいます。同じように眠っているはずなのに、なぜこんなに差があるのでしょう。
            </p>
            <p className="mb-4">
              実は、夢を覚えているかどうかは記憶力の良し悪しとはほとんど関係がありません。夢の記憶には、睡眠のタイミングや目覚め方、日常の習慣など、もっと別の要素が大きく絡んでいます。
            </p>
            <p>
              そしてもうひとつ。ユング心理学の視点から見ると、夢を覚えていること自体に、<span className="text-purple-300 font-bold">心の深層と意識が対話する大切な意味</span>が宿っています。「覚えていない」ことをただの睡眠の問題として片付けるのではなく、夢の記憶を持つことの価値から考えてみましょう。
            </p>
          </div>

          {/* セクション1: そもそも夢は誰でも見ている */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Moon className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              そもそも、夢は誰でも見ている
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              まず前提として、「夢を見ない」という人でも、睡眠中に夢を見ていないわけではないと考えられています。人間はレム睡眠という浅い眠りの段階で夢を見やすく、一晩に何度もこのサイクルが繰り返されています。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              つまり「夢を見ない人」ではなく、正確には<span className="text-purple-300 font-bold">「夢を覚えていない人」</span>なのです。これはけっして悪いことではなく、睡眠の質や生活スタイルによって起こる自然な差です。
            </p>
          </section>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション2: ユング的視点（新設） */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <MessageSquare className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              なぜ夢を記憶することに価値があるのか
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              スイスの心理学者カール・グスタフ・ユングは、夢を「無意識からの手紙」と呼びました。この表現は詩的に聞こえますが、実は非常に実践的な意味を持っています。
            </p>

            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-5">
              <h3 className="text-xl font-bold text-purple-200 mb-3">意識と無意識の「対話の記録」</h3>
              <p className="text-gray-300 leading-relaxed">
                ユングの考えでは、人間の心は意識と無意識の2つの層でできており、夢は無意識が意識に向けて送るメッセージの場です。日中の意識では抑えられている感情、気づいていない欲求、解決されていない葛藤——これらが夢という形をとって浮かび上がってきます。夢を記憶するということは、この「無意識からの手紙」を受け取ることに他なりません。
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg mb-5">
              夢を覚えていないとき、その「手紙」は届いても読まれないまま消えていきます。繰り返し似たような夢を見るのに覚えていない場合、無意識が何度も同じメッセージを送り続けているのかもしれません。夢を記憶する習慣を持つことは、自分の内面との対話の窓を開けておくことでもあるのです。
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">感情の整理と自己理解が深まる</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢を記録して振り返ることで、「最近こういう感情を抱えていたんだ」と気づくことがあります。言語化しにくかった不安や違和感が、夢というイメージを通じて理解しやすい形になることがあるのです。ユング派の心理療法でも、夢の記録と分析が治療の重要な柱として位置づけられています。
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">心の「盲点」に気づくきっかけになる</h3>
                <p className="text-gray-300 leading-relaxed">
                  私たちは日常の中で「見たくないもの」を無意識に避けています。しかし夢の中では、そうした防衛が緩み、普段は意識に上らないテーマが姿を現します。夢を記憶することは、自分の「心の盲点」に気づくための数少ない機会のひとつです。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション3: 夢を覚えやすい人の特徴 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              夢を覚えやすい人の特徴
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              夢をよく覚えている人には、いくつか共通する傾向があります。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">目覚め方が夢の記憶を左右する</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の記憶は、目が覚めた直後の数分で急速に薄れていきます。レム睡眠のタイミングで自然に目が覚めた人は、夢の内容をまだ脳が処理している状態で起きるため、記憶が残りやすいのです。一方でアラームで強制的に起こされると、夢の途中で記憶が途切れてしまうことが多くなります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">感情が動く夢は残りやすい</h3>
                <p className="text-gray-300 leading-relaxed">
                  怖い夢や、強く感情が揺れた夢は覚えていやすいと感じたことはないでしょうか。これは、感情と記憶の定着が脳の中で深く結びついているからです。ユング的に言えば、感情を強く動かす夢ほど「無意識のメッセージ」の重要度が高く、覚えていてほしいという無意識の意図が働いている可能性もあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">夢に関心がある人ほど覚えやすい</h3>
                <p className="text-gray-300 leading-relaxed">
                  「夢を覚えたい」と意識するだけでも、記憶の定着率が上がることがあります。夢日記をつけている人が夢をよく覚えているのは、習慣によって「夢を記録しようとする意識」が強まっているからです。注意を向けるものに対して、脳は情報を拾いやすくなります。これはユングが夢に積極的に関心を向けることを推奨した理由とも重なります。
                </p>
              </div>
            </div>
          </section>

          {/* セクション4: 夢を覚えにくい人の特徴 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Clock className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              夢を覚えにくい人の特徴
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              反対に、夢をほとんど覚えていないという人にも、よくある共通点があります。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">深い眠りから起きている</h3>
                <p className="text-gray-300 leading-relaxed">
                  ノンレム睡眠（深い眠り）の状態から目が覚めると、夢の記憶はほぼ残りません。「ぐっすり眠れた」と感じる朝ほど夢を覚えていないことが多いのは、このためです。よく眠れているサインでもあるので、覚えていないこと自体は心配しなくて大丈夫です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">睡眠が短い、または不規則</h3>
                <p className="text-gray-300 leading-relaxed">
                  睡眠時間が極端に短かったり、毎日の起床時間がバラバラだったりすると、レム睡眠のサイクルが乱れやすくなります。夢を見る時間帯が安定しないため、記憶に残りにくくなることがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">ストレスや疲労が蓄積している</h3>
                <p className="text-gray-300 leading-relaxed">
                  慢性的な疲れやストレスは、睡眠の質そのものに影響します。体が疲弊しているときは、深い眠りの割合が増えてレム睡眠が短くなることがあり、結果として夢の記憶が残りにくくなるとも言われています。
                </p>
              </div>
            </div>
          </section>

          {/* セクション5: 夢を覚えたいなら */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Lightbulb className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              夢を覚えたいなら、朝の習慣を変えてみる
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              もし夢をもっと覚えたいと思うなら、目が覚めた直後の行動を少し変えてみることが有効です。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              起きてすぐスマートフォンを見たり、すぐ動き始めたりすると、夢の記憶はあっという間に上書きされてしまいます。目が覚めたら少しの間そのまま横になって、夢の内容を頭の中でなぞってみる——たったそれだけで、記憶に残る量がかなり変わります。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              枕元にメモ帳を置いておいて、断片だけでもすぐ書き留める習慣をつけると、数週間後には自分の夢のパターンが見えてきます。「また似たような場所に行く夢だった」「知らない人が出てくることが多い」——そういった気づきが、自分の心の状態を振り返るきっかけになることがあります。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              ユングが夢日記を重視したのも、まさにこの「パターンを見つける」ためでした。無意識は同じテーマを何度も繰り返す傾向があります。記録を続けることで、その「くり返し送られてくる手紙の内容」が少しずつ見えてくるのです。
            </p>
          </section>

          {/* セクション6: 優劣はない */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
              「覚えている・いない」に優劣はない
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              夢をよく覚えている人が感受性豊かで、覚えていない人が鈍感というわけでは全くありません。睡眠の深さ、目覚めのタイミング、生活リズム——さまざまな要素が絡み合った結果に過ぎないので、どちらが良い悪いということはないのです。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              ただ、自分が夢を見やすいタイプかどうかを知っておくことは、睡眠やコンディションを振り返るひとつのヒントになります。「最近夢をよく覚えている」と感じるなら、感情が動く出来事が続いているサインかもしれません。「全然覚えていない」なら、ぐっすり眠れているか、あるいは疲れが溜まっているか——どちらかを考えてみる機会にしてみてください。
            </p>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              夢は、見るだけでも、覚えていなくても、あなたの心と体が毎晩それなりに仕事をしている証拠です。ユングの言う「無意識からの手紙」を受け取るためには、夢を覚えようとする小さな意志が第一歩になります。覚えていたときはぜひAI夢占いで深層心理を覗いてみてください。
            </p>
          </section>

          {/* 免責事項 */}
          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>
              ※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。睡眠や心の不調が続く場合は、専門家にご相談ください。
            </p>
          </div>
        </div>
      </article>

      <DreamAnalysisCTA
        title="夢の内容が気になるときは"
        description="AI夢占いで深層心理を分析してみてください。夢の内容を入力するだけで、あなたの心の状態をAIが読み解きます。"
      />
    </ContentPageLayout>
  );
}
