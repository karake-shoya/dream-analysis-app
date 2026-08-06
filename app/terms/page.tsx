import { Metadata } from "next";
import StaticPageLayout, { Section } from "@/components/StaticPageLayout";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Yume Insightの利用規約。サービス利用時の注意事項、禁止事項、免責事項、著作権、広告について説明しています。",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <StaticPageLayout title="利用規約">
      <Section title="はじめに">
        <p className="mb-4">
          この利用規約（以下「本規約」）は、Yume Insight（以下「当サイト」）が提供するサービスの利用条件を定めるものです。利用者の皆さまには、本規約に従って当サイトをご利用いただきます。
        </p>
        <p>
          当サイトをご利用いただくことで、本規約に同意したものとみなします。同意いただけない場合は、当サイトの利用をお控えください。
        </p>
      </Section>

      <Section title="1. サービスの内容">
        <p className="mb-4">
          当サイトは、以下のサービスを提供します。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>夢占い辞典（キーワード別の夢の心理的意味の解説）</li>
          <li>AI夢分析（ユーザーが入力した夢の内容をAIが心理学的視点で分析）</li>
          <li>夢に関するコラム・情報コンテンツ</li>
          <li>ユーザーアカウント機能（夢分析履歴の保存）</li>
        </ul>
        <p>
          これらのサービスは、心理的な参考情報の提供を目的としており、医療・診断・占い・予言を行うものではありません。
        </p>
      </Section>

      <Section title="2. AIコンテンツについて">
        <p className="mb-4">
          当サイトでは、一部のコンテンツおよびサービス（AI夢分析機能）にAI技術を活用しています。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>AI夢分析の結果は、入力された内容をもとにAIが生成した参考情報です</li>
          <li>分析結果の正確性・完全性・適切性を保証するものではありません</li>
          <li>AIによる分析結果は、心理学的な一般知識に基づく参考情報としてご活用ください</li>
          <li>分析結果を根拠に重要な判断を行うことはお控えください</li>
        </ul>
        <p>
          コラム・辞典コンテンツはAI活用の上で人の視点による確認・編集を行っていますが、内容の絶対的な正確性を保証するものではありません。
        </p>
      </Section>

      <Section title="3. アカウント登録">
        <p className="mb-4">
          一部のサービス（夢分析履歴の保存等）はアカウント登録が必要です。登録にあたり、以下をご了承ください。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>登録情報は正確かつ最新の情報を入力してください</li>
          <li>アカウントの管理はご自身の責任で行ってください</li>
          <li>アカウント情報の不正利用によって生じた損害について、当サイトは責任を負いません</li>
          <li>登録されたメールアドレスへのサービス関連の通知に同意するものとします</li>
        </ul>
      </Section>

      <Section title="4. 禁止事項">
        <p className="mb-4">
          利用者は、当サイトの利用にあたり、以下の行為を行ってはなりません。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為またはそれに関連・助長する行為</li>
          <li>当サイトのサーバー・ネットワークへの不正アクセス、過度な負荷をかける行為</li>
          <li>当サイトのサービス運営を妨害するおそれのある行為</li>
          <li>他のユーザーの個人情報を収集・蓄積・利用する行為</li>
          <li>当サイトのコンテンツを無断で転載・複製・改変・販売する行為</li>
          <li>当サイトのAI分析機能を大量・自動的に利用する行為</li>
          <li>虚偽の情報を入力してサービスを利用する行為</li>
          <li>その他、当サイトが不適切と判断する行為</li>
        </ul>
      </Section>

      <Section title="5. 著作権・知的財産権">
        <p className="mb-4">
          当サイトに掲載されているコンテンツ（文章・画像・デザイン・構成等）の著作権は、当サイト運営者または正当な権利者に帰属します。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>個人的な閲覧・利用を超えた複製・転載・配布は禁止します</li>
          <li>引用する場合は出典（Yume Insight・該当ページURL）を明示してください</li>
          <li>商業目的での利用は事前にお問い合わせください</li>
        </ul>
        <p>
          利用者が当サイトに入力した夢の内容は、サービス提供・改善の目的に限り利用することがあります。個人を特定できる形で公開することはありません。
        </p>
      </Section>

      <Section title="6. 広告について">
        <p className="mb-4">
          当サイトでは、Google AdSenseによる広告を掲載しています。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>広告はGoogleの広告配信システムによって自動的に表示されます</li>
          <li>広告内容は当サイトが管理・保証するものではありません</li>
          <li>広告のパーソナライズはGoogleの広告設定で変更できます</li>
          <li>広告収益はサイトの運営・コンテンツ改善に充てられます</li>
        </ul>
      </Section>

      <Section title="7. サービスの変更・停止">
        <p className="mb-4">
          当サイトは、以下の場合にサービスの全部または一部を変更・中断・終了することができます。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>システムメンテナンス・障害対応</li>
          <li>サービス内容の改善・機能追加</li>
          <li>外部サービス（API等）の仕様変更・提供終了</li>
          <li>その他、運営上やむを得ない事由</li>
        </ul>
        <p>
          サービスの変更・終了によって利用者に生じた損害について、当サイトは責任を負いません。
        </p>
      </Section>

      <Section title="8. 免責事項">
        <p className="mb-4">
          当サイトは、以下について一切の責任を負いません。
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>夢占い・AI分析結果の正確性・適切性・完全性</li>
          <li>コンテンツの利用によって生じた判断・行動とその結果</li>
          <li>サービスの中断・遅延・不具合によって生じた損害</li>
          <li>リンク先の外部サイトのコンテンツ・プライバシー対応</li>
          <li>不可抗力（天災・通信障害・サイバー攻撃等）による損害</li>
        </ul>
        <p>
          本サービスは、医療・精神科的な診断・治療・予言を行うものではありません。精神的な不調がある場合は、専門の医療機関にご相談ください。
        </p>
      </Section>

      <Section title="9. プライバシー">
        <p>
          個人情報の取り扱いについては、別途定める<a href="/privacy" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">プライバシーポリシー</a>をご参照ください。本規約と合わせてご確認いただくことをお勧めします。
        </p>
      </Section>

      <Section title="10. 規約の変更">
        <p className="mb-4">
          当サイトは、必要に応じて本規約を変更することがあります。変更後の規約は、当ページへの掲載をもって効力を生じます。重要な変更の際は、サイト上でお知らせします。
        </p>
        <p>
          変更後も当サイトをご利用いただいた場合、変更後の規約に同意したものとみなします。定期的に本ページをご確認ください。
        </p>
      </Section>

      <Section title="11. 準拠法・裁判管轄">
        <p className="mb-4">
          本規約の解釈・適用については、日本法を準拠法とします。当サイトの利用に関して生じた紛争については、運営者の所在地を管轄する裁判所を専属合意管轄とします。
        </p>
      </Section>

      <Section title="12. お問い合わせ">
        <p className="mb-4">
          本規約に関するご質問・ご意見は、<a href="/contact" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">お問い合わせフォーム</a>よりご連絡ください。
        </p>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-gray-300"><span className="font-semibold text-white">サービス名：</span>Yume Insight</p>
          <p className="text-gray-300 mt-1"><span className="font-semibold text-white">運営者：</span>上野 翔也（個人運営）</p>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          最終更新日：2026年5月23日
        </p>
      </Section>
    </StaticPageLayout>
  );
}
