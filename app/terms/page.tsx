

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">利用規約</h1>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-purple-200 mb-4">1. 規約への同意</h2>
            <p className="mb-4">
              当サイト（yume insight）を利用される方は、本規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-200 mb-4">2. サービスの利用について</h2>
            <p className="mb-4">
              当サイトが提供する夢診断サービスは、AI技術を用いて提供されています。
              診断結果は利用者の自己責任において利用するものとし、その結果によって生じたいかなる損害についても、当サイトは責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-200 mb-4">3. 禁止事項</h2>
            <p className="mb-4">
              利用者は、以下の行為を行ってはなりません。
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当サイトのサービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>不正な目的を持って当サービスを利用する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-200 mb-4">4. サービスの変更・停止</h2>
            <p className="mb-4">
              当サイトは、利用者に通知することなく、本サービスの内容を変更し、または本サービスの提供を中止することができるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-200 mb-4">5. 準拠法・裁判管轄</h2>
            <p className="mb-4">
              本規約の解釈にあたっては、日本法を準拠法とします。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
