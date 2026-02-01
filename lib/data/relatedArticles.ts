import { getDictionaryItemsByCategory, DictionaryItem } from '@/lib/mdx';

export type RelatedArticle = {
  category: string;
  slug: string;
  keyword: string;
};

/**
 * 同じカテゴリから関連記事を自動取得（現在の記事を除く）
 */
export function getRelatedArticles(
  category: string,
  currentSlug: string,
  limit: number = 3
): RelatedArticle[] {
  const categoryItems = getDictionaryItemsByCategory(category);
  
  // 現在の記事を除外してシャッフル
  const otherItems = categoryItems.filter((item) => item.slug !== currentSlug);
  const shuffled = shuffleArray(otherItems);
  
  return shuffled.slice(0, limit).map((item) => ({
    category: item.category,
    slug: item.slug,
    keyword: item.title,
  }));
}

// 配列をシャッフルするユーティリティ関数
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
