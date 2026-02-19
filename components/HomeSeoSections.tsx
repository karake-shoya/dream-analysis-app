import Link from "next/link";

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
