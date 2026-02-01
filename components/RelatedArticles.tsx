import Link from 'next/link';

export type RelatedArticle = {
  category: string;
  slug: string;
  keyword: string;
  reason: string;
};

type RelatedArticlesProps = {
  articles: RelatedArticle[];
};

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-12 rounded-2xl border border-purple-500/20 bg-white/5 p-6">
      <h2 className="text-xl font-bold text-white mb-4">こんな夢も見ていませんか？</h2>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={`${article.category}-${article.slug}`} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <Link
              href={`/dictionary/${article.category}/${article.slug}`}
              className="text-lg font-semibold text-purple-200 hover:text-purple-100 transition-colors"
            >
              {article.keyword}
            </Link>
            <p className="mt-2 text-sm text-gray-400">{article.reason}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
