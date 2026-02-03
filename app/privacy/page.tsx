import { Metadata } from "next";
import StaticPageLayout, { Section } from "@/components/StaticPageLayout";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜Yume Insight",
  description: "Yume Insightのプライバシーポリシー。個人情報の取り扱い、Cookie、広告配信について説明しています。",
};

export default function PrivacyPolicy() {
  return (
    <StaticPageLayout title="プライバシーポリシー">
      <Section title="1. 個人情報の収集について">
        <p className="mb-4">
          当サイト（Yume Insight）では、お問い合わせや夢占いの際、名前やメールアドレス等の個人情報をご登録いただく場合がございます。
        </p>
        <p>
          これらの個人情報は、質問に対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
        </p>
      </Section>

      <Section title="2. 広告について">
        <p className="mb-4">
          当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用しています。
          このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。
        </p>
        <p className="mb-4">
          またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
          <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
            Googleのポリシーと規約
          </a>
          をご覧ください。
        </p>
        <p>
          当サイトでは、Googleを含む第三者配信事業者がCookieを使用し、ユーザーの興味に基づいた広告を表示することがあります。
          ユーザーは広告設定により、パーソナライズ広告を無効にすることができます。
        </p>
      </Section>

      <Section title="3. アクセス解析ツールについて">
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
      </Section>

      <Section title="4. 免責事項">
        <p className="mb-4">
          当サイトの夢占い結果はAIによって生成されたものであり、その正確性や信頼性を保証するものではありません。
          診断結果はあくまでエンターテインメントや参考情報としてお楽しみください。
        </p>
        <p className="mb-4">
          当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        </p>
        <p>
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
      </Section>
    </StaticPageLayout>
  );
}
