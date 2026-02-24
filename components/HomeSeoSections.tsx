import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categoryLinks = [
  { href: "/dictionary/animals/snake", label: "蛇の夢" },
  { href: "/dictionary/actions/flying", label: "空を飛ぶ夢" },
  { href: "/dictionary/person/deceased", label: "亡くなった人の夢" },
  { href: "/dictionary/places/school", label: "学校の夢" },
  { href: "/dictionary/places/toilet", label: "トイレの夢" },
];

export default function HomeSeoSections() {
  return (
    <section className="mt-16 space-y-8">
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-4">AI夢占いの仕組み</h3>
        <p className="text-gray-300 leading-relaxed">
          Yume InsightのAI夢占いは、入力された夢の内容をそのまま断定的に判断するのではなく、夢に出てきた人物・場所・行動・感情の要素を丁寧に分解し、文脈を読み取りながら心理傾向を整理する設計になっています。プロンプト設計では「怖い夢＝悪い未来」のような短絡的な結論を避けるため、夢研究の一般的な見解やセルフケアの観点を組み合わせています。分析には最新世代のAIモデルを活用しつつ、日常生活に活かせるヒントとして受け取れる表現を重視しています。
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-4">夢占いを日常に活かす方法</h3>
        <p className="text-gray-300 leading-relaxed">
          夢占いは、当たり外れを競うためではなく、自分の心身の状態に気づくための記録ツールとして使うと効果的です。たとえば、同じ種類の夢を繰り返し見る時期は、仕事や人間関係のストレスが高まっているサインかもしれません。見た夢と起きた直後の感情を短くメモし、1週間単位で振り返るだけでも、思考のクセや疲れの傾向が見えてきます。気づいた内容を睡眠習慣の見直しや休息の取り方に反映することで、セルフケアとして無理なく活用できます。
        </p>
      </div>

      {/* コラムセクション */}
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-2">コラム</h3>
        <p className="text-gray-400 text-sm mb-6">夢と心理に関するコラムをお届けします</p>
        <div className="space-y-3">
          <Link
            href="/column/repeating-dreams"
            className="group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs text-purple-400 font-medium mb-1">夢の心理学</p>
              <h4 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors leading-snug">
                同じ夢を何度も見る意味とは？
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                繰り返す夢は「未解決の葛藤」の表れ。追いかけられる夢・試験の夢・歯が抜ける夢……心がまだ話し終えていないサインかもしれません。
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
          </Link>
          <Link
            href="/column/prophetic-dream"
            className="group flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs text-purple-400 font-medium mb-1">夢の心理学</p>
              <h4 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors leading-snug">
                正夢とは？
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                夢で見た出来事が現実になる「正夢」。脳の予測機能・選択的記憶・無意識の洞察——心理学の視点からそのメカニズムを解説します。
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
          </Link>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-5">よくある夢のカテゴリ</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {categoryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-purple-200 hover:text-white hover:border-purple-400/40 hover:bg-purple-500/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
