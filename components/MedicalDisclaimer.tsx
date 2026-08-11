import { ReactNode } from 'react';

/** 記事の大多数が使う既定の免責文 */
const DEFAULT_TEXT =
  '※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。';

interface MedicalDisclaimerProps {
  /** 記事ごとに文言を変える場合に渡す。未指定なら既定の免責文 */
  children?: ReactNode;
  /** 上マージンの上書き（既定は mt-4） */
  className?: string;
}

/** 記事末尾の免責事項 */
export default function MedicalDisclaimer({
  children,
  className = 'mt-4',
}: MedicalDisclaimerProps) {
  return (
    <div
      className={`${className} p-6 bg-gray-900/50 rounded-xl border border-gray-800 text-sm text-gray-500 leading-relaxed`}
    >
      <p>{children ?? DEFAULT_TEXT}</p>
    </div>
  );
}
