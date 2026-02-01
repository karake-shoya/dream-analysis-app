import Link from 'next/link';
import { RelatedArticle } from '@/lib/data/relatedArticles';

type RelatedArticlesProps = {
  articles: RelatedArticle[];
};

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-12 rounded-2xl border border-purple-500/20 bg-white/5 p-6">
      <h2 className="text-xl font-bold text-white mb-4">こんな夢も見ていませんか？</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {articles.map((article) => (
          <li key={`${article.category}-${article.slug}`}>
            <Link
              href={`/dictionary/${article.category}/${article.slug}`}
              className="block p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all"
            >
              <span className="text-lg font-semibold text-purple-200 hover:text-purple-100">
                {article.keyword}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
