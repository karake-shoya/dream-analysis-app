import { Metadata } from "next";
import StaticPageLayout, { Section } from "@/components/StaticPageLayout";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜Yume Insight",
  description: "Yume Insightのプライバシーポリシー。個人情報の取り扱い、Cookie、広告配信、アクセス解析について説明しています。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <StaticPageLayout title="プライバシーポリシー">

      <Section title="はじめに">
        <p className="mb-4">
          Yume Insight（以下「当サイト」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーは、当サイトがどのような情報を収集し、どのように使用・管理するかを説明しています。
        </p>
        <p>
          当サイトをご利用いただくことで、本ポリシーに同意いただいたものとみなします。
        </p>
      </Section>

      <Section title="1. 収集する情報の種類">
        <p className="mb-4">当サイトでは、以下の種類の情報を収集することがあります。</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li><span className="font-semibold text-white">ユーザー提供情報：</span>お問い合わせ時の名前・メールアドレス、会員登録時のメールアドレス</li>
          <li><span className="font-semibold text-white">夢の入力内容：</span>夢占い機能に入力されたテキスト（個人を特定する情報は含まれません）</li>
          <li><span className="font-semibold text-white">自動収集情報：</span>IPアドレス、ブラウザの種類・バージョン、参照元URL、アクセス日時、閲覧ページ</li>
          <li><span className="font-semibold text-white">Cookie・類似技術：</span>後述のCookieポリシーをご確認ください</li>
        </ul>
      </Section>

      <Section title="2. 個人情報の利用目的">
        <p className="mb-4">収集した個人情報は、以下の目的にのみ使用します。</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>お問い合わせへの回答・サポート対応</li>
          <li>サービスの提供・改善</li>
          <li>不正利用の防止・セキュリティ対策</li>
          <li>法令に基づく対応</li>
        </ul>
        <p className="mt-4">
          収集した個人情報は、上記目的の範囲を超えて利用することはありません。また、ユーザーの同意なく第三者への提供は行いません（法令に基づく場合を除く）。
        </p>
      </Section>

      <Section title="3. Cookieの使用について">
        <p className="mb-4">
          当サイトでは、Cookie（クッキー）および類似技術を使用しています。Cookieとは、Webサイトがブラウザに保存する小さなテキストファイルで、ユーザーの識別や設定の保存などに使用されます。
        </p>
        <h4 className="font-semibold text-white mb-3 mt-5">使用するCookieの種類</h4>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-semibold text-purple-200 mb-1">必須Cookie</p>
            <p className="text-sm text-gray-400">サイトの基本機能（認証・セッション管理など）に必要なCookieです。無効にするとサービスが正常に動作しない場合があります。</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-semibold text-purple-200 mb-1">分析Cookie（Google Analytics）</p>
            <p className="text-sm text-gray-400">サイトの利用状況を把握し、改善に役立てるために使用します。収集データは匿名化されており、個人を特定しません。</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="font-semibold text-purple-200 mb-1">広告Cookie（Google AdSense）</p>
            <p className="text-sm text-gray-400">ユーザーの興味・関心に基づいた広告を表示するために使用します。氏名・住所・メールアドレス・電話番号は含まれません。</p>
          </div>
        </div>
        <p className="mt-4">
          ブラウザの設定からCookieを無効化することができますが、一部のサービスが利用できなくなる場合があります。
        </p>
      </Section>

      <Section title="4. 広告配信について（Google AdSense）">
        <p className="mb-4">
          当サイトでは、Googleが提供する第三者配信の広告サービス「Google AdSense」を利用しています。
        </p>
        <p className="mb-4">
          Google AdSenseは、ユーザーが当サイトや他のサイトを訪問した際の情報（Cookieを含む）を使用して、ユーザーの興味・関心に基づいたパーソナライズ広告を表示することがあります。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>Googleが広告配信のためにCookieを使用する場合があります</li>
          <li>広告のCookieには氏名・住所・メールアドレス・電話番号は含まれません</li>
          <li>パーソナライズ広告は<a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">広告設定</a>から無効化できます</li>
        </ul>
        <p>
          詳細は<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Googleの広告ポリシー</a>をご確認ください。
        </p>
      </Section>

      <Section title="5. アクセス解析ツールについて（Google Analytics 4）">
        <p className="mb-4">
          当サイトでは、Googleが提供するアクセス解析ツール「Google Analytics 4（GA4）」を利用しています。GA4はCookieを使用してトラフィックデータを収集しますが、このデータは匿名で収集されており、個人を特定するものではありません。
        </p>
        <p className="mb-4">
          収集される主なデータ：ページビュー数、セッション数、流入元、使用デバイス・ブラウザ、滞在時間、イベント（ボタンクリックなど）
        </p>
        <p className="mb-4">
          ブラウザの設定でCookieを無効にするか、<a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Google Analytics オプトアウトアドオン</a>を使用することで、データ収集を拒否できます。
        </p>
        <p>
          詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Googleアナリティクス利用規約</a>および<a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Googleプライバシーポリシー</a>をご確認ください。
        </p>
      </Section>

      <Section title="6. データの保管と保持期間">
        <p className="mb-4">
          収集した個人情報は、適切なセキュリティ措置を講じた上で管理します。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><span className="font-semibold text-white">お問い合わせ情報：</span>対応完了後、必要な期間が過ぎた時点で削除</li>
          <li><span className="font-semibold text-white">夢分析データ：</span>アカウント削除のリクエストがあった場合、速やかに削除</li>
          <li><span className="font-semibold text-white">アクセスログ：</span>Googleのデータ保持ポリシーに準拠（デフォルト14ヶ月）</li>
        </ul>
      </Section>

      <Section title="7. ユーザーの権利">
        <p className="mb-4">
          当サイトのユーザーは、ご自身の個人情報に関して以下の権利を有します。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>個人情報へのアクセス・確認を求める権利</li>
          <li>不正確な個人情報の訂正を求める権利</li>
          <li>個人情報の削除（消去）を求める権利</li>
          <li>個人情報の利用制限を求める権利</li>
          <li>Cookieの設定を変更・無効化する権利</li>
        </ul>
        <p>
          これらの権利の行使については、下記のお問い合わせ先までご連絡ください。
        </p>
      </Section>

      <Section title="8. 第三者へのリンクについて">
        <p>
          当サイトには外部サイトへのリンクが含まれる場合があります。リンク先のサイトは当サイトのプライバシーポリシーとは無関係であり、移動先サイトでの情報の取り扱いについて当サイトは責任を負いません。各サイトのプライバシーポリシーをご確認ください。
        </p>
      </Section>

      <Section title="9. 免責事項">
        <p className="mb-4">
          当サイトの夢占い結果はAIによって生成されたものであり、その正確性や信頼性を保証するものではありません。分析結果はあくまで心理学的な一般知識をもとにした参考情報としてご活用ください。医学的な診断・治療を目的としたものではありません。
        </p>
        <p className="mb-4">
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、内容の正確性・完全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
      </Section>

      <Section title="10. プライバシーポリシーの変更">
        <p>
          当サイトは、法令の変更やサービスの改善に伴い、本ポリシーを予告なく変更する場合があります。変更後のポリシーは、当ページに掲載した時点から効力を生じます。定期的にご確認いただくことをお勧めします。
        </p>
      </Section>

      <Section title="11. お問い合わせ">
        <p className="mb-4">
          個人情報の取り扱いに関するご質問・ご要望・苦情については、以下の方法でお問い合わせください。
        </p>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-gray-300"><span className="font-semibold text-white">サービス名：</span>Yume Insight</p>
          <p className="text-gray-300 mt-2"><span className="font-semibold text-white">お問い合わせ：</span><a href="/contact" className="text-purple-400 hover:text-purple-300 underline">お問い合わせフォーム</a>よりご連絡ください</p>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          最終更新日：2026年5月4日
        </p>
      </Section>

    </StaticPageLayout>
  );
}
