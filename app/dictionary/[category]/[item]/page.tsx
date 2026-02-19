import { Sparkles, List, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import AdsenseAd from '@/components/AdsenseAd';
import FaqSchema from '@/components/FaqSchema';
import RelatedArticles from '@/components/RelatedArticles';
import Breadcrumb from '@/components/Breadcrumb';
import { getArticle, getArticleFrontmatter } from '@/lib/mdx';
import { getAllIndexItems, getIndexItem } from '@/lib/data/dreamDictionaryIndex';
import { getCategoryBySlug } from '@/lib/data/dictionaryCategories';
import { getRelatedArticles } from '@/lib/data/relatedArticles';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';

type Props = {
  params: Promise<{ category: string; item: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, item } = await params;
  const frontmatter = getArticleFrontmatter(category, item);
  if (!frontmatter) return {};

  return {
    title: `【夢占い】${frontmatter.keyword}の夢の意味｜心理・暗示・今後の行動`,
    description: frontmatter.description,
    alternates: {
      canonical: `/dictionary/${category}/${item}`,
    },
    openGraph: {
      title: `【夢占い】${frontmatter.keyword}の夢の意味｜心理・暗示・今後の行動`,
      description: frontmatter.description,
      type: 'article',
      images: [`${siteConfig.baseUrl}/ogp.png`],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export async function generateStaticParams() {
  return getAllIndexItems().map((item) => ({
    category: item.category,
    item: item.slug,
  }));
}

export default async function ItemPage({ params }: Props) {
  const { category, item } = await params;
  
  const categoryData = getCategoryBySlug(category);
  if (!categoryData) notFound();

  const indexItem = getIndexItem(category, item);
  if (!indexItem) notFound();

  const article = getArticle(category, item);
  if (!article) notFound();

  const { frontmatter, content } = article;
  const relatedArticles = getRelatedArticles(category, item);

  // FAQをFaqSchema用に変換
  const faqs = frontmatter.faqs?.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <>
      {faqs && faqs.length > 0 && <FaqSchema faqs={faqs} />}
      <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans">
        <div className="fixed inset-0 z-0 pointer-events-none" 
          style={{
            background: `
              radial-gradient(circle at 10% 10%, rgba(139, 92, 246, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 90% 90%, rgba(79, 70, 229, 0.1) 0%, transparent 40%),
              #0f172a
            `
          }}
        />
      
        <div className="relative z-10 container mx-auto px-4 py-12 max-w-3xl">
          <Breadcrumb
            items={[
              { label: 'ホーム', href: '/' },
              { label: '夢占い辞典', href: '/dictionary' },
              { label: categoryData.name, href: `/dictionary/${categoryData.slug}` },
              { label: `${frontmatter.keyword}の夢` },
            ]}
          />

          <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold border border-purple-500/20 mb-6">
                <span>{categoryData.emojis}</span>
                <span>{categoryData.name}の夢</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                <span className="block mb-2 md:mb-3">
                  【夢占い】<span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">{frontmatter.keyword}の夢の意味</span>
                </span>
                <span className="block text-xl md:text-2xl text-purple-400 font-bold opacity-90 tracking-normal">
                  心理・暗示・今後の行動を詳しく解説
                </span>
              </h1>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                {frontmatter.updatedAt && (
                  <time dateTime={frontmatter.updatedAt}>
                    更新日：{frontmatter.updatedAt.replace(/-/g, '.')}
                  </time>
                )}
              </div>
              <div className="p-6 rounded-2xl bg-linear-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20 backdrop-blur-md shadow-xl">
                <h2 className="text-lg font-bold text-purple-200 mb-2 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  暗示のまとめ
                </h2>
                <p className="text-xl text-white font-medium whitespace-pre-wrap leading-relaxed">
                  {frontmatter.summary}
                </p>
              </div>
            </header>

            {/* 記事上広告 */}
            <div className="mb-10 bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={siteConfig.adsenseSlot} />
            </div>

            {/* 状況別 早見表 */}
            {frontmatter.situations && frontmatter.situations.length > 0 && (
              <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                  <List className="w-5 h-5 mr-2 text-purple-400" />
                  【状況別】夢の意味・暗示一覧
                </h2>
                <div className="grid gap-3">
                  {frontmatter.situations.map((sit, index) => (
                    <a 
                      key={index} 
                      href={`#${sit.title}`}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all group shadow-sm active:scale-[0.98]"
                    >
                      <h3 className="text-purple-300 font-bold mb-1 flex items-baseline group-hover:text-purple-200 transition-colors">
                        <span className="text-xs mr-2 opacity-50">#</span>
                        {sit.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {sit.meaning}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* MDXコンテンツ */}
            <div className="prose prose-invert prose-purple max-w-none">
              <ReactMarkdown
                components={{
                  h1: () => null,
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-purple-500 pl-4 scroll-mt-24">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 
                      id={children?.toString()}
                      className="text-xl font-bold text-purple-300 mt-10 mb-4 flex items-center scroll-mt-24"
                    >
                      <span className="w-1.5 h-6 bg-purple-500/30 rounded-full mr-3" />
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-300">{children}</li>
                  ),
                  a: ({ href, children }) => (
                    <Link
                      href={href || '#'}
                      className="text-indigo-400 hover:text-sky-300 underline decoration-sky-500/30 underline-offset-4 hover:decoration-sky-400 transition-all font-medium"
                    >
                      {children}
                    </Link>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>

            {/* 記事中広告 */}
            <div className="my-10 bg-white/5 rounded-2xl p-4 border border-white/10">
              <AdsenseAd slot={siteConfig.adsenseSlot} />
            </div>

            <RelatedArticles articles={relatedArticles} />

            {/* 全記事一覧への導線 */}
            <div className="mt-10 text-center">
              <Link
                href="/sitemap"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors text-sm border border-purple-500/20 rounded-full px-5 py-2.5 hover:bg-purple-500/10"
              >
                <BookOpen className="w-4 h-4" />
                全記事一覧を見る
              </Link>
            </div>

            {/* AI夢占いCTA - 最重要導線 */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <DreamAnalysisCTA />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
