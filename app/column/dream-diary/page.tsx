import { Metadata } from 'next';
import { PenLine, BookOpen, Brain, Star, HelpCircle } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

export const metadata: Metadata = {
  title: '同じ夢を何度も見る理由とは？夢日記でわかる深層心理の読み方',
  description:
    '同じ夢を繰り返し見るのは、深層心理が解決を求めているサインです。ユング心理学的な反復夢の意味と、夢日記を使って自分の無意識にアプローチする具体的な方法を解説します。',
  alternates: { canonical: '/column/dream-diary' },
  openGraph: {
    title: '同じ夢を何度も見る理由とは？夢日記でわかる深層心理の読み方 | Yume Insight',
    description:
      '同じ夢を繰り返し見るのは、深層心理が解決を求めているサインです。ユング心理学的な反復夢の意味と、夢日記を使って自分の無意識にアプローチする具体的な方法を解説します。',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '夢日記はどんなノートに書けばいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '形式は自由です。枕元に置けるサイズのノートとペン、またはスマートフォンのメモアプリで構いません。大切なのは「起きた直後にすぐ書ける環境」を整えることです。筆記は記憶定着に効果的とされていますが、続けることを最優先に、自分に合った方法を選んでください。',
      },
    },
    {
      '@type': 'Question',
      name: '夢を何も覚えていない日はどうすればいいですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '覚えていない日も「夢なし（想起不可）」と一言書くことをおすすめします。書けない日をつくらないことが習慣を保つコツです。また、「なんとなく怖い感じがした」「誰かといた気がする」という断片も記録する価値があります。',
      },
    },
    {
      '@type': 'Question',
      name: '夢日記の効果が出るまでどのくらいかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '個人差はありますが、毎日続けた場合、2〜3週間で夢の想起量が増えてくる人が多いです。1か月ほど経つと繰り返しのテーマやパターンに気づき始め、自己理解に活かせる段階に入ります。',
      },
    },
    {
      '@type': 'Question',
      name: '夢日記をつけると悪夢が増えることはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '夢日記が悪夢の頻度を増やすわけではありません。今まで忘れていた夢を覚えるようになるため、悪夢の記憶も残りやすくなります。悪夢が続いて困る場合は、記録だけにとどめ、内容の解釈は時間をおいて行うとよいでしょう。',
      },
    },
    {
      '@type': 'Question',
      name: '夢日記をつけると明晰夢が見やすくなりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、夢日記は明晰夢の準備として最も重要なステップです。夢を覚える習慣が夢への意識を高め、夢の中で「これは夢だ」と気づく確率が上がります。明晰夢研究者のスティーブン・ラバージをはじめ、多くの実践者が夢日記を明晰夢の必須準備として挙げています。',
      },
    },
  ],
};

export default function DreamDiaryPage() {
  return (
    <ContentPageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <PageHero
        title="夢日記の始め方と効果的な続け方"
        subtitle="夢を書き留めることで、自分の内面が少しずつ見えてくる"
      />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {/* 導入 */}
          <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 leading-relaxed text-lg text-gray-300">
            <p className="mb-4">
              目が覚めた直後は覚えていたのに、朝食を食べ終わる頃にはすっかり忘れてしまう——夢の記憶はひどく儚いものです。睡眠研究の知見では、夢の記憶の多くは目覚めからわずか数分以内に急速に薄れるとされています。
            </p>
            <p className="mb-4">
              夢日記は、その儚い記憶を記録に残す習慣です。一見シンプルな行為ですが、続けることで<span className="text-purple-300 font-bold">夢の想起力が劇的に高まり、自分でも気づいていなかった思考パターンや感情の傾向が浮かび上がってきます。</span>
            </p>
            <p>
              このコラムでは、夢日記を始めるための具体的な方法、続けるためのコツ、そしてユング心理学の観点から夢記録がなぜ意味を持つのかまでを解説します。
            </p>
          </div>

          {/* セクション1: 夢日記の効果 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Star className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              夢日記で得られる3つの効果
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">① 夢の想起力が上がる</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢を記録する習慣を続けると、脳が「夢の記憶を保持することに意味がある」と学習し、起きた直後に夢をより鮮明に思い出せるようになります。最初は断片しか覚えていない状態でも、2〜3週間続けるうちにストーリーの流れや感情まで思い出せるようになる人が多いです。これは明晰夢の練習にも直結する能力です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">② 自分の感情パターンが見えてくる</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の記録を1週間、1か月と振り返ると、繰り返し登場するテーマ・場所・人物・感情に気づくことがあります。「仕事が多忙なとき、必ず追いかけられる夢を見る」「人間関係で悩んでいるときほど、知らない人物が夢に出てくる」——こうした傾向は、日常では見えにくい自分の感情反応を映し出しています。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">③ 明晰夢への扉が開く</h3>
                <p className="text-gray-300 leading-relaxed">
                  明晰夢研究者のスティーブン・ラバージをはじめ、多くの実践者が夢日記を明晰夢の必須準備として挙げています。夢に意識を向ける習慣そのものが、夢の中での「これは夢だ」という気づきを生みやすくします。毎朝の記録が、眠りの質と意識の深さを変えていきます。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（上部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション2: 書き方 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <PenLine className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              夢日記の始め方——準備と書き方
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">準備するもの</h3>
                <p className="text-gray-300 leading-relaxed">
                  枕元に置けるノートとペン（またはすぐに起動できるスマートフォンのメモアプリ）を用意します。アナログのノートは書く行為が記憶の定着を助けるため、一般的に推奨されています。ただし「まずハードルを下げて続ける」ことを優先するなら、スマートフォンで構いません。大切なのは<span className="text-purple-300 font-bold">起きた直後、できれば目を開ける前に記録を始めること</span>です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">書くべき5つの要素</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  すべてを完璧に書こうとすると続きません。以下の5要素を軸に、思い出せる範囲で記録します。
                </p>
                <ul className="text-gray-300 space-y-1 pl-4 list-disc">
                  <li><span className="text-purple-300">日付</span> — いつ見た夢か</li>
                  <li><span className="text-purple-300">場所・状況</span> — どこにいて、何が起きていたか</li>
                  <li><span className="text-purple-300">登場人物</span> — 誰が出てきたか（知人か、知らない人か）</li>
                  <li><span className="text-purple-300">自分の行動</span> — 夢の中で何をしていたか</li>
                  <li><span className="text-purple-300">感情</span> — 怖かった、嬉しかった、焦っていたなど</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">断片しか覚えていないときは</h3>
                <p className="text-gray-300 leading-relaxed">
                  「〇〇がいた気がする」「なんとなく不安な感じがした」という程度でも書いてください。断片でも記録に残すこと自体が脳の夢記憶回路を鍛えます。「何も覚えていない」という日も「夢なし（または想起不可）」と記録することが大切です。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">解釈は後回しにする</h3>
                <p className="text-gray-300 leading-relaxed">
                  起きた直後は「意味を読み解こう」とせず、まず記録することに集中してください。解釈は1日の終わりや週末の振り返り時間に行う習慣にすると、記録と分析がそれぞれ丁寧にできます。朝に解釈を始めると、記憶が薄れる前の貴重な時間を逃してしまいます。
                </p>
              </div>
            </div>
          </section>

          {/* 広告（中部） */}
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 my-8">
            <AdsenseAd slot={siteConfig.adsenseSlot} />
          </div>

          {/* セクション3: ユング心理学との接続 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
              <Brain className="w-8 h-8 mr-3 text-purple-400 shrink-0" />
              ユング心理学的な夢日記の活用法
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              ユング自身、生涯にわたって自分の夢を記録し続けました。彼の個人的な夢日記は後に『赤の書』として出版され、深層心理学の重要な文献となっています。ユングにとって夢の記録は研究対象であると同時に、自己との対話の実践でした。
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">繰り返しのテーマに注目する</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢日記を1か月分振り返ったとき、同じ場所・同じ人物・同じ状況が繰り返し出てくるなら、それはユング的には「無意識が何かを伝えようとしている」サインです。繰り返しのテーマは無意識の強調と考え、「このテーマは今の自分の何を映しているか？」と問いかけてみてください。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">夢の登場人物を自分の側面として読む</h3>
                <p className="text-gray-300 leading-relaxed">
                  ユング的な夢分析では、夢に登場する人物は必ずしも実在の人を指すのではなく、自分自身の異なる側面（ペルソナ、シャドウ、アニマ/アニムスなど）を象徴していることが多いとされます。夢日記に「〇〇が出てきた」と記録した後、「自分の中に〇〇と似た部分はないか？」と問いかける習慣が、自己理解を深めます。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">感情の記録が特に重要な理由</h3>
                <p className="text-gray-300 leading-relaxed">
                  夢の内容よりも、目覚めたときの感情の方がシグナルとして重要なことがあります。内容が曖昧でも「とても嬉しかった」「ひどく怖かった」という感情が鮮明なら、その感情を手がかりに「最近の自分の状態」を問い直せます。感情の欄を必ず設けることを強くおすすめします。
                </p>
              </div>
            </div>
          </section>

          {/* セクション4: 続けるコツ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              続けるための実践的なコツ
            </h2>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">完璧主義を手放す</h3>
                <p className="text-gray-300 leading-relaxed">
                  「ちゃんと書けなかった」と思った日こそ、1行でも書くことが大切です。夢日記は日記ではなく「記録の断片の蓄積」です。3日続けて何も覚えていなくても、「想起不可」と書いて続ければ習慣が途切れません。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">アラームを味方にする</h3>
                <p className="text-gray-300 leading-relaxed">
                  スヌーズ機能を使って「5分後にもう一度」と設定し、最初のアラームで目が覚めた直後に夢を記録する時間を確保するのも一つの方法です。ガバッと起き上がるより、ゆっくり意識を戻しながら夢の記憶を引き出す方が成功率が高まります。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-purple-200 mb-2">週1回、振り返りの時間を設ける</h3>
                <p className="text-gray-300 leading-relaxed">
                  週末などに過去1週間の夢日記を読み返し、繰り返しのテーマや感情の傾向をメモします。この振り返りが「夢を記録する意味」を実感させてくれ、継続へのモチベーションになります。
                </p>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="p-8 rounded-3xl bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
              おわりに
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              夢日記は、特別な才能がなくても誰でも始められるセルフワークです。毎朝ほんの数分、目覚めた直後に夢を書き留めるだけで、やがて自分の感情パターン・ストレスのサイン・内面の変化が見えてきます。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              ユングが言ったように、夢は「無意識が意識に語りかける言語」です。その言語を記録し続けることで、あなた自身との対話の回路が少しずつ開いていきます。まずは明日の朝、枕元にノートを置くことから始めてみてください。
            </p>
          </section>

          {/* FAQセクション */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center">
              <HelpCircle className="w-8 h-8 mr-3 text-purple-400" />
              よくある質問
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: '夢日記はどんなノートに書けばいいですか？',
                  a: '形式は自由です。枕元に置けるサイズのノートとペン、またはスマートフォンのメモアプリで構いません。大切なのは「起きた直後にすぐ書ける環境」を整えることです。筆記は記憶定着に効果的とされていますが、続けることを最優先に、自分に合った方法を選んでください。',
                },
                {
                  q: '夢を何も覚えていない日はどうすればいいですか？',
                  a: '覚えていない日も「夢なし（想起不可）」と一言書くことをおすすめします。書けない日をつくらないことが習慣を保つコツです。また、「なんとなく怖い感じがした」「誰かといた気がする」という断片も記録する価値があります。',
                },
                {
                  q: '夢日記の効果が出るまでどのくらいかかりますか？',
                  a: '個人差はありますが、毎日続けた場合、2〜3週間で夢の想起量が増えてくる人が多いです。1か月ほど経つと繰り返しのテーマやパターンに気づき始め、自己理解に活かせる段階に入ります。',
                },
                {
                  q: '夢日記をつけると悪夢が増えることはありますか？',
                  a: '夢日記が悪夢の頻度を増やすわけではありません。今まで忘れていた夢を覚えるようになるため、悪夢の記憶も残りやすくなります。悪夢が続いて困る場合は、記録だけにとどめ、内容の解釈は時間をおいて行うとよいでしょう。',
                },
                {
                  q: '夢日記をつけると明晰夢が見やすくなりますか？',
                  a: 'はい、夢日記は明晰夢の準備として最も重要なステップです。夢を覚える習慣が夢への意識を高め、夢の中で「これは夢だ」と気づく確率が上がります。明晰夢研究者のスティーブン・ラバージをはじめ、多くの実践者が夢日記を明晰夢の必須準備として挙げています。',
                },
              ].map(({ q, a }, i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-bold text-lg hover:bg-white/5 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-purple-400 font-mono text-sm">Q</span>
                      {q}
                    </span>
                    <span className="text-purple-400 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                    <span className="text-purple-400 font-mono text-sm font-bold mr-2">A</span>
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* 免責事項 */}
          <div className="mt-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed">
            <p>
              ※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。心の不調が続く場合は、専門家にご相談ください。
            </p>
          </div>
        </div>
      </article>

      <DreamAnalysisCTA
        title="今日見た夢を分析してみよう"
        description="夢日記と合わせて、AI夢占いを使うと夢の意味がより深く読み解けます。夢の内容を入力するだけで、あなたの心の状態をAIが分析します。"
      />
    </ContentPageLayout>
  );
}
