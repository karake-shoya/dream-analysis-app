import { getAllDictionaryItems, getDictionaryItemsByCategory, DictionaryItem } from '@/lib/mdx';

export type DreamDictionaryIndexItem = {
  slug: string;
  title: string;
  summary: string;
};

export type FlattenedDictionaryItem = DreamDictionaryIndexItem & {
  category: string;
  createdAt?: string;
};

// MDXファイルから動的に取得
export function getIndexByCategory(category: string): DreamDictionaryIndexItem[] {
  return getDictionaryItemsByCategory(category).map((item) => ({
    slug: item.slug,
    title: item.title,
    summary: item.summary,
  }));
}

export function getIndexItem(category: string, slug: string): DreamDictionaryIndexItem | undefined {
  const items = getIndexByCategory(category);
  return items.find((item) => item.slug === slug);
}

export function getAllIndexItems(): FlattenedDictionaryItem[] {
  return getAllDictionaryItems().map((item) => ({
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    category: item.category,
    createdAt: item.createdAt,
  }));
}
