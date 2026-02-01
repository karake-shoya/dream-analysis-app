import relatedArticles from '@/lib/data/dreamDictionaryLinks.json';

export type RelatedArticleLink = {
  category: string;
  slug: string;
  keyword: string;
  summary: string;
};

export type RelatedArticleEntry = {
  from: {
    category: string;
    slug: string;
    keyword: string;
  };
  related: RelatedArticleLink[];
};

export type RelatedArticlesData = {
  links: RelatedArticleEntry[];
};

const data = relatedArticles as RelatedArticlesData;

export function getRelatedArticles(category: string, slug: string): RelatedArticleLink[] {
  const entry = data.links.find(
    (link) => link.from.category === category && link.from.slug === slug,
  );
  return entry?.related ?? [];
}
