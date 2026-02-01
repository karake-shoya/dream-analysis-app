import Link from 'next/link';

export type RelatedArticle = {
  category: string;
  slug: string;
  keyword: string;
  summary: string;
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
          <li key={`${article.category}-${article.slug}`}>
            <Link
              href={`/dictionary/${article.category}/${article.slug}`}
              className="block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-purple-400/40 hover:bg-white/10"
            >
              <p className="text-lg font-semibold text-purple-200">
                {article.keyword}
              </p>
              <p className="mt-2 text-sm text-gray-400">{article.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
