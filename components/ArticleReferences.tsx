import { ReactNode } from 'react';

interface ArticleReferencesProps {
  /** 1件が1行。書名の斜体などは <em> をそのまま渡せる */
  items: ReactNode[];
}

/** 記事末尾の参考文献リスト */
export default function ArticleReferences({ items }: ArticleReferencesProps) {
  if (items.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-bold text-gray-400">参考文献</h2>
      <ul className="space-y-2 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={index}>▸ {item}</li>
        ))}
      </ul>
    </section>
  );
}
