import { Metadata } from 'next';
import { Wind, Brain, Search, Sparkles, BookOpen } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '空を飛ぶ夢は良い夢ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '一般的に「吉夢」として解釈されることが多い夢です。自由・解放・自信・上昇志向の高まりを象徴することが多く、目覚めたときに爽快感がある場合は特にポジティブなサインと受け取れます。ただし飛ぶのが怖い・うまく飛べないなどのシーンでは、不安や自信のなさを反映していることもあります。',
      },
    },
    {
      '@type': 'Question',
      name: '飛べなくて落ちそうになる夢はどんな意味ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '飛んでいる途中で高度が下がる・落ちそうになる夢は、自信や意欲が持続しにくい状態、または目標に向かう途中で不安が出てきていることを反映している可能性があります。「このままうまくやれるだろうか」という不安が夢に現れていることがあります。',
      },
    },
    {
      '@type': 'Question',
      name: '繰り返し空を飛ぶ夢を見るのはなぜですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ユング心理学では、繰り返す夢は深層心理が特定のテーマに注目しているサインです。空を飛ぶ夢が繰り返される場合、「自由への強い欲求」「現実の制約から解放されたい気持ち」が続いている状態を反映していることが多いです。現実でどんな制約や重圧を感じているか、振り返ってみると手がかりが見つかります。',
      },
    },
    {
      '@type': 'Question',
      name: '誰かと一緒に飛ぶ夢と一人で飛ぶ夢では意味が違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '一人で飛ぶ夢は、自分自身の力・自律性・独立心の高まりを、誰かと一緒に飛ぶ夢はその人との関係における安心感・信頼・共同の目標意識を反映することがあります。誰と飛んだかも、夢の意味を読み解く手がかりになります。',
      },
    },
    {
      '@type': 'Question',
      name: '空を飛ぶ夢と明晰夢は関係がありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '空を飛ぶ夢は、明晰夢（夢の中で「夢だと気づいている状態」）で最も多く報告される体験のひとつです。飛行中に「あ、これは夢だ」と気づくことで明晰夢に移行するケースも多く、夢のコントロールを学ぶ入口として活用されることがあります。',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: '空を飛ぶ夢の意味とは？自由・解放・上昇志向が示す深層心理をユング心理学で解説',
  description:
    '空を飛ぶ夢を見た意味を心理学的に解説。自由・解放感・自信の高まりを象徴する理由、飛び方や高さによるシーン別の意味、ユング心理学の観点からの読み解き方まで詳しく紹介します。',
  alternates: { canonical: '/column/flying-dream' },
  openGraph: {
    title: '空を飛ぶ夢の意味とは？自由・解放・上昇志向が示す深層心理をユング心理学で解説 | Yume Insight',
    description:
      '空を飛ぶ夢を見た意味を心理学的に解説。自由・解放感・自信の高まりを象徴する理由、飛び方や高さによるシーン別の意味、ユング心理学の観点からの読み解き方まで詳しく紹介します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function FlyingDreamPage() {
  return (
    <ContentPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <PageHero
        title="空を飛ぶ夢の意味とは"
        subtitle="自由・解放・上昇——深層心理が求めているもの"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              風を切って空を自由に飛んでいる——目が覚めたとき、あの爽快感がまだ体に残っていることがある。空を飛ぶ夢は、夢占いの中でも「見てよかった」と感じる体験として広く知られています。
            </p>
            <p className="mb-4">
              世界中で多くの人が経験するこの夢には、心理学的に見ても興味深い意味があります。単なる「楽しい夢」として流すより、<span className="text-purple-300 font-bold">今の自分の深層心理が何を求めているか</span>を読み解くヒントとして活用できます。
            </p>
            <p>
              本記事では、ユング心理学の視点を軸に、空を飛ぶ夢の心理的な意味と、飛び方・状況別の読み解き方を丁寧に解説します。
            </p>
          </div>

          {/* セクション1: 基本的な意味 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Wind className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              空を飛ぶ夢が示す3つの心理テーマ
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              空を飛ぶ夢は、概してポジティブな心理状態を反映することが多い夢です。ただしシーンによっては複雑なメッセージが含まれていることもあります。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 自由と解放——制約から離れたい気持ち</h3>
                <p className="text-gray-300 leading-relaxed">
                  空を飛ぶ夢が最もよく示すのは、<span className="text-purple-300 font-bold">現実の制約や重圧からの解放欲求</span>です。仕事のプレッシャー、人間関係の縛り、自分に課したルールやペルソナ（外向けの仮面）——これらから自由になりたいという深層心理の声が、「空を自由に飛ぶ」というイメージとして現れます。爽快感が強い夢ほど、現実でその解放を強く求めているサインかもしれません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 自信と上昇志向——意欲が高まっているとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  高く・軽やかに飛ぶ夢は、自己効力感（「自分はできる」という感覚）や目標への意欲が高まっているときに見やすいです。新しい挑戦を前にして前向きな気持ちが高まっているとき、あるいは最近うまくいったことがあって自信が回復しているときに出やすいパターンです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 視野の拡張——高い視点から状況を見たい</h3>
                <p className="text-gray-300 leading-relaxed">
                  地上を見下ろしながら飛ぶ夢は、今の自分の状況を「俯瞰したい」という欲求を反映することがあります。問題の渦中にいるとき、「もう少し引いた視点で全体を見たい」「今起きていることを客観視したい」という心理が、高い場所から全体を見渡すイメージとして現れるのです。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション2: ユング心理学 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              ユング心理学から読み解く「飛翔」の象徴
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              カール・グスタフ・ユングは、夢の中の「上昇」というイメージを、意識の高まりや自己実現への動きとして捉えました。空を飛ぶ夢は、個性化（Individuation）のプロセスにおける重要なシンボルとなることがあります。
            </p>

            <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 mb-6">
              <h3 className="text-xl font-bold text-purple-200 mb-3">「上昇」は意識の拡張を象徴する</h3>
              <p className="text-gray-300 leading-relaxed">
                ユング心理学では、垂直方向の動き（上下）は心理的な状態の変化を象徴することが多いとされています。高く飛ぶことは<span className="text-purple-300 font-bold">意識の拡張・精神的な成長・より高い視点の獲得</span>を意味し、自己実現に向かうエネルギーの表れとして解釈されます。夢の中で空を飛ぶとき、あなたの内なる自己（Self）が成長の方向へ動いているサインかもしれません。
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">ペルソナからの解放</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユングが提唱した「ペルソナ」とは、社会的役割に合わせてかぶる「仮面」のことです。職場での仮面、親としての仮面、良い人であろうとする仮面——これらが重くなっているとき、空を自由に飛ぶ夢がペルソナを脱ぎ捨てた「本来の自分」の解放感を表すことがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">集合的無意識と「飛翔」の元型</h3>
                <p className="text-gray-300 leading-relaxed">
                  人類の神話・宗教・物語には、空を飛ぶ存在（天使・神・英雄）が繰り返し登場します。ユングはこれを「集合的無意識」に刻まれた元型（アーキタイプ）的イメージと考えました。飛翔は文化を超えて「超越・自由・神聖さ」を象徴する普遍的なイメージであり、夢においても同様の意味合いを持つことがあります。
                </p>
              </div>
            </div>
          </section>

          {/* セクション3: シーン別 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Search className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              シーン別の読み解き——どんな飛び方だったか
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              同じ「空を飛ぶ」でも、飛び方・高さ・感情・状況によってメッセージは変わります。
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">高く・自由に・爽快に飛ぶ夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  最もポジティブなパターンです。自己効力感・解放感・前向きなエネルギーが満ちている状態を示します。何か新しいことを始める直前や、大きな決断を乗り越えた後に見やすい夢です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">低空飛行・うまく飛べない夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  地面スレスレを飛んでいる、思うように高く上がれない、疲れて飛び続けるのがつらい——こうした夢は、目標や理想に向かいたい気持ちはあるが、現実の制約やエネルギー不足でうまく進めていないもどかしさを反映することがあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">飛んでいて怖い・落ちそうになる夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  高いところへ向かうのが怖い、または飛んでいる途中で不安になるシーンは、「高い目標や理想」と「失敗への恐れ」が葛藤している状態を映すことがあります。完璧主義や高い期待に応えようとして自分を追い込んでいるとき出やすいパターンです。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">誰かと一緒に飛ぶ夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  一緒に飛んでいる人との関係に着目してみましょう。その人との間に信頼・安心・共同の目標がある場合、その感情が夢に反映されています。知らない誰かと飛ぶ場合は、まだ出会っていない自分の可能性や、内なるアニマ・アニムスを象徴することもあります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">鳥のように羽ばたく・翼がある夢</h3>
                <p className="text-gray-300 leading-relaxed">
                  翼を持って飛ぶイメージは、自分の内なる力や才能が開花しているサインとして解釈されることがあります。特に鷹・鷲のような高く飛ぶ鳥の姿で飛ぶ夢は、リーダーシップや視野の広さ、精神的な力強さの高まりを象徴することがあります。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション4: 見やすい時期 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              空を飛ぶ夢を見やすい時期・心理状態
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">制約やプレッシャーが積み重なっているとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  日常の重圧・義務・期待に縛られていると感じているとき、夢の中で「それらを全部置いて空へ飛び上がる」体験をすることがあります。深層心理が「息をつく空間」を夢の中に作り出している状態です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">新しいことへの意欲が高まっているとき</h3>
                <p className="text-gray-300 leading-relaxed">
                  新しい挑戦・プロジェクト・目標に向けて前向きなエネルギーが高まっているとき、空を自由に飛ぶ夢が出やすくなります。「これからうまくいきそう」という感覚が、上昇・飛翔というイメージとして現れます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">人生の転換期・決断の前後</h3>
                <p className="text-gray-300 leading-relaxed">
                  大きな決断をした後や、転換期を乗り越えた直後に空を飛ぶ夢を見ることがあります。古い自分から新しい段階へ移行しているプロセスが、「地上から空へ飛び立つ」イメージとして表れているのかもしれません。
                </p>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに——飛ぶ夢が伝えること
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              空を飛ぶ夢は、深層心理からの「解放」「自由」「成長」のメッセージを携えていることが多い夢です。爽快に飛べた夢なら、今の自分にエネルギーと前向きさがあることを示しているかもしれません。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              うまく飛べなかったり、怖かったりした場合でも、「自分が制約や不安と向き合っている」ことを夢が映し出しているだけです。ユングの言葉を借りれば、夢は現実の状態を映す鏡——<span className="text-purple-300 font-bold">飛ぶ夢を見たとき、今の自分が何を求め、何から解放されたいと感じているかを問いかけてみてください。</span>
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              夢の中の空は、あなたの内側にある可能性と自由の象徴です。
            </p>
          </section>

          {/* FAQセクション */}
          <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <BookOpen className="w-7 h-7 mr-3 text-purple-400 shrink-0" />
              よくある質問
            </h2>
            <div className="space-y-4">
              {faqStructuredData.mainEntity.map((item) => (
                <details key={item.name} className="rounded-2xl border border-white/10 bg-black/20 p-4 group">
                  <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                    {item.name}
                    <span className="transition-transform group-open:rotate-180 text-purple-400 shrink-0 ml-3">▼</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">{item.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </section>

          {/* 参考文献 */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-gray-400">参考文献</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>▸ C.G. Jung, <em>Dreams</em>, Princeton University Press</li>
              <li>▸ C.G. Jung, <em>The Archetypes and the Collective Unconscious</em>, Princeton University Press</li>
              <li>▸ David Fontana, <em>The Secret Language of Dreams</em>, Chronicle Books</li>
            </ul>
          </section>

          {/* 免責事項 */}
          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>
              ※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。睡眠や心の不調が続く場合は、専門家にご相談ください。
            </p>
          </div>
        </div>
      </article>

      <div className="px-0">
        <a
          href="/column/lucid-dream"
          className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">🌙</span>
            <div>
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-0.5">関連コラム</p>
              <p className="font-bold text-white text-sm md:text-base">夢の中で「夢だ」と気づく体験に興味がありますか？</p>
              <p className="text-xs text-gray-400 mt-0.5">明晰夢（ルシッドドリーム）とは？見る方法・練習法をユング心理学で解説</p>
            </div>
          </div>
          <svg className="w-5 h-5 text-purple-300 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>

      <DreamAnalysisCTA
        title="空を飛ぶ夢の内容をより詳しく分析したい方へ"
        description="夢の詳細をAIに伝えると、あなたの深層心理をより具体的に読み解きます。飛んでいたときの感情や景色も含めて入力してみてください。"
      />
    </ContentPageLayout>
  );
}
