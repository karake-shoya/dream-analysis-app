import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            トップページに戻る
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">プライバシーポリシー</h1>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-purple-200 mb-4">1. 個人情報の収集について</h2>
            <p className="mb-4">
              当サイト（Dream Oracle）では、お問い合わせや夢診断の際、名前やメールアドレス等の個人情報をご登録いただく場合がございます。
            </p>
            <p>
              これらの個人情報は、質問に対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-200 mb-4">2. 広告について</h2>
            <p className="mb-4">
              当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用しています。
              このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。
            </p>
            <p>
              またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
              <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                Googleのポリシーと規約
              </a>
              をご覧ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-200 mb-4">3. アクセス解析ツールについて</h2>
            <p className="mb-4">
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p>
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
              この規約に関して、詳しくは
              <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                Googleアナリティクス利用規約
              </a>
              をご覧ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-200 mb-4">4. 免責事項</h2>
            <p className="mb-4">
              当サイトの夢診断結果はAIによって生成されたものであり、その正確性や信頼性を保証するものではありません。
              診断結果はあくまでエンターテインメントや参考情報としてお楽しみください。
            </p>
            <p className="mb-4">
              当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            </p>
            <p>
              当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
              当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
