import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getIndexByCategory } from '@/lib/data/dictionaryIndex';
import { getCategoryBySlug, DICTIONARY_CATEGORIES } from '@/lib/data/dictionaryCategories';

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);
  const items = getIndexByCategory(category);
  
  if (!categoryData) {
    return {};
  }

  return {
    title: `${categoryData.name}の夢占い一覧`,
    description: `${categoryData.name}に関連する夢の意味を詳しく解説。${items.map(i => i.keyword).slice(0, 5).join('、')}など、よく見る夢のシンボルを網羅。`,
  };
}

export async function generateStaticParams() {
  return DICTIONARY_CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);
  const items = getIndexByCategory(category);

  if (!categoryData) {
    notFound();
  }

  return (
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
      
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
          <Link href="/dictionary" className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            辞典のトップに戻る
          </Link>
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 text-purple-300">
            <span className="text-2xl mr-2">{categoryData.emojis}</span>
            <span className="font-semibold">{categoryData.name}</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{categoryData.name}の夢占い一覧</h1>
          <p className="text-gray-400">
            {categoryData.name}に関連するキーワードの意味を詳しく解説します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <Link 
              href={`/dictionary/${categoryData.slug}/${item.slug}`} 
              key={item.slug}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {item.keyword}
              </h3>
              <p className="text-purple-300/80 text-sm font-medium mb-4">
                キーワード暗示：{item.summary}
              </p>
              <div className="mt-4 flex justify-end">
                <span className="text-xs text-purple-400 border-b border-purple-400/30 group-hover:text-purple-300 transition-colors">
                  続きを読む →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
