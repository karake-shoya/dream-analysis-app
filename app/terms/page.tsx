import StaticPageLayout, { Section } from "@/components/StaticPageLayout";

export default function Terms() {
  return (
    <StaticPageLayout title="利用規約">
      <Section title="1. 規約への同意">
        <p className="mb-4">
          当サイト（Yume Insight）を利用される方は、本規約に同意したものとみなします。
        </p>
      </Section>

      <Section title="2. サービスの利用について">
        <p className="mb-4">
          当サイトが提供する夢占いサービスは、AI技術を用いて提供されています。
          診断結果は利用者の自己責任において利用するものとし、その結果によって生じたいかなる損害についても、当サイトは責任を負いません。
        </p>
      </Section>

      <Section title="3. 禁止事項">
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
      </Section>

      <Section title="4. サービスの変更・停止">
        <p className="mb-4">
          当サイトは、利用者に通知することなく、本サービスの内容を変更し、または本サービスの提供を中止することができるものとします。
        </p>
      </Section>

      <Section title="5. 準拠法・裁判管轄">
        <p className="mb-4">
          本規約の解釈にあたっては、日本法を準拠法とします。
        </p>
      </Section>
    </StaticPageLayout>
  );
}
