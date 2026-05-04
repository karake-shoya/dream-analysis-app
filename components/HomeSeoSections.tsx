import Link from "next/link";
import { ArrowRight } from "lucide-react";

const columnArticles = [
  { href: '/column/falling-teeth-dream', label: '歯が抜ける夢の意味とは？' },
  { href: '/column/chased-dream', label: '追いかけられる夢の意味とは？' },
  { href: '/column/flying-dream', label: '空を飛ぶ夢の意味とは？' },
  { href: '/column/ex-dream', label: '元カレ・元カノが出てくる夢の意味とは？' },
  { href: '/column/death-dream', label: '死ぬ夢の意味とは？' },
  { href: '/column/snake-dream', label: '蛇の夢の意味とは？' },
  { href: '/column/falling-dream', label: '落ちる夢の意味とは？' },
  { href: '/column/water-dream', label: '水の夢・溺れる夢の意味とは？' },
  { href: '/column/fire-dream', label: '火の夢の意味とは？' },
  { href: '/column/school-dream', label: '学校の夢の意味とは？' },
  { href: '/column/work-dream', label: '仕事・職場の夢の意味とは？' },
  { href: '/column/unknown-house-dream', label: '知らない家・部屋の夢の意味とは？' },
  { href: '/column/baby-dream', label: '赤ちゃん・子供の夢の意味とは？' },
  { href: '/column/pregnancy-dream', label: '妊娠する夢の意味とは？' },
  { href: '/column/naked-dream', label: '裸になる夢の意味とは？' },
  { href: '/column/lost-dream', label: '道に迷う夢の意味とは？' },
  { href: '/column/late-dream', label: '遅刻する夢の意味とは？' },
  { href: '/column/nightmare', label: '怖い夢・悪夢を見やすい人の特徴と対処法' },
  { href: '/column/lucid-dream', label: '明晰夢（ルシッドドリーム）の見方と練習法' },
  { href: '/column/dream-diary', label: '夢日記の始め方と効果的な続け方' },
];

const categoryLinks = [
  { href: "/column/snake-dream", label: "蛇の夢" },
  { href: "/column/flying-dream", label: "空を飛ぶ夢" },
  { href: "/column/death-dream", label: "死ぬ夢" },
  { href: "/column/chased-dream", label: "追いかけられる夢" },
  { href: "/column/water-dream", label: "水・溺れる夢" },
  { href: "/column/school-dream", label: "学校の夢" },
  { href: "/column/work-dream", label: "仕事の夢" },
  { href: "/column/fire-dream", label: "火の夢" },
  { href: "/column/baby-dream", label: "赤ちゃんの夢" },
  { href: "/column/naked-dream", label: "裸になる夢" },
  { href: "/column/lost-dream", label: "道に迷う夢" },
  { href: "/column/late-dream", label: "遅刻する夢" },
];

export default function HomeSeoSections() {
  return (
    <section className="mt-16 space-y-8">

      {/* Yume Insightとは */}
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">Yume Insightとは</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Yume Insightは、日本語で夢の内容を入力するだけで、AIが心理学的な視点から夢の意味を読み解いてくれる夢分析サービスです。「歯が抜ける夢を見た」「追いかけられる夢が続く」「元カレが夢に出てきた」——そんなとき、Yume Insightに夢の詳細を伝えると、あなたの深層心理をわかりやすく解説します。
        </p>
        <p className="text-gray-300 leading-relaxed">
          夢占いは単なる娯楽ではなく、自分の心の状態・感情・無意識のメッセージに気づくためのツールです。Yume InsightはユングやフロイトをはじめとするAI夢分析の視点を組み合わせ、「当たった・外れた」ではなく「今の自分の内面を知る」ことを重視した設計になっています。
        </p>
      </div>

      {/* 夢占いの基礎知識 */}
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">夢占いの基礎知識</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            夢は睡眠中にREM（急速眼球運動）睡眠の段階で生成される、脳の活動の産物です。心理学的に見ると、夢は日中に処理しきれなかった感情・記憶・欲求が無意識の中で象徴的な形をとったものとされています。
          </p>
          <p>
            ユング心理学では、夢は「無意識からのメッセージ」として位置づけられます。追いかけられる夢は「向き合えていない感情や状況」、水の夢は「感情の状態」、家の夢は「自分の精神の構造」を反映するとされます。こうした象徴を読み解くことで、今の自分に何が起きているかを内省するヒントが得られます。
          </p>
          <p>
            フロイトは夢を「抑圧された欲求の充足」として解釈しましたが、現代の夢研究ではより広く「感情処理・記憶の整理・問題解決の補助」などの機能が注目されています。夢占いの結果を「断定された未来」ではなく「今の心の地図」として活用することが、最も効果的な使い方です。
          </p>
        </div>
      </div>

      {/* よくある夢のカテゴリ */}
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-5">よくある夢のテーマ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {categoryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-purple-200 hover:text-white hover:border-purple-400/40 hover:bg-purple-500/10 transition-colors text-sm text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* コラムセクション */}
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-2">夢分析コラム</h2>
        <p className="text-gray-400 text-sm mb-6">ユング心理学をベースに、夢と深層心理の関係を解説するコラムをお届けします</p>
        <ul className="space-y-1">
          {columnArticles.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-center justify-between px-4 py-3 rounded-xl border border-transparent hover:border-purple-500/30 hover:bg-purple-500/5 transition-all"
              >
                <span className="text-base text-gray-200 group-hover:text-purple-200 transition-colors">{label}</span>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link
            href="/column"
            className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            すべてのコラムを見る
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* AI夢占いの仕組み */}
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">AI夢占いの仕組み</h2>
        <p className="text-gray-300 leading-relaxed mb-5">
          Yume InsightのAI夢占いは、入力された夢の内容をそのまま断定的に判断するのではなく、夢に出てきた人物・場所・行動・感情の要素を丁寧に分解し、文脈を読み取りながら心理傾向を整理する設計になっています。プロンプト設計では「怖い夢＝悪い未来」のような短絡的な結論を避けるため、夢研究の一般的な見解やセルフケアの観点を組み合わせています。分析には最新世代のAIモデルを活用しつつ、日常生活に活かせるヒントとして受け取れる表現を重視しています。
        </p>
        <Link
          href="/approach"
          className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          詳しい考え方を見る
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 夢占いを日常に活かす方法 */}
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">夢占いを日常に活かす方法</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            夢占いは、当たり外れを競うためではなく、自分の心身の状態に気づくための記録ツールとして使うと効果的です。たとえば、同じ種類の夢を繰り返し見る時期は、仕事や人間関係のストレスが高まっているサインかもしれません。
          </p>
          <p>
            見た夢と起きた直後の感情を短くメモし、1週間単位で振り返るだけでも、思考のクセや疲れの傾向が見えてきます。気づいた内容を睡眠習慣の見直しや休息の取り方に反映することで、セルフケアとして無理なく活用できます。
          </p>
          <p>
            特定のテーマの夢が続く場合は、Yume InsightのAI分析に詳細を入力してみてください。夢の中の感情・色・登場人物まで伝えると、より具体的な心理的洞察が得られます。
          </p>
        </div>
      </div>

    </section>
  );
}
