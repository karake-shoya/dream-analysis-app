import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const CONTENT_PATH = path.join(process.cwd(), 'content/dictionary');

export type ArticleFrontmatter = {
  keyword: string;
  slug: string;
  category: string;
  summary: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
  situations?: { title: string; meaning: string }[];
  faqs?: { q: string; a: string }[];
};

export type DictionaryItem = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  createdAt?: string;
};

export type Article = {
  frontmatter: ArticleFrontmatter;
  content: string;
};

export function getArticle(category: string, slug: string): Article | null {
  const filePath = path.join(CONTENT_PATH, category, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return {
    frontmatter: data as ArticleFrontmatter,
    content,
  };
}

export function getArticleFrontmatter(category: string, slug: string): ArticleFrontmatter | null {
  const filePath = path.join(CONTENT_PATH, category, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(source);
  
  return data as ArticleFrontmatter;
}

export function articleExists(category: string, slug: string): boolean {
  const filePath = path.join(CONTENT_PATH, category, `${slug}.mdx`);
  return fs.existsSync(filePath);
}

// キャッシュ付きで全記事を動的に取得（同一リクエスト内で再利用）
export const getAllDictionaryItems = cache((): DictionaryItem[] => {
  const items: DictionaryItem[] = [];

  if (!fs.existsSync(CONTENT_PATH)) {
    return items;
  }

  const categories = fs.readdirSync(CONTENT_PATH);

  for (const category of categories) {
    const categoryPath = path.join(CONTENT_PATH, category);

    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith('.mdx'));

    for (const file of files) {
      const slug = file.replace('.mdx', '');
      const frontmatter = getArticleFrontmatter(category, slug);

      if (frontmatter) {
        items.push({
          slug,
          title: frontmatter.keyword,
          summary: frontmatter.summary,
          category,
          createdAt: frontmatter.createdAt,
        });
      }
    }
  }

  return items;
});

// カテゴリ別に記事を取得
export const getDictionaryItemsByCategory = cache((category: string): DictionaryItem[] => {
  return getAllDictionaryItems().filter((item) => item.category === category);
});

// 全カテゴリを取得（MDXファイルから動的に）
export const getAllCategories = cache((): string[] => {
  if (!fs.existsSync(CONTENT_PATH)) {
    return [];
  }

  return fs.readdirSync(CONTENT_PATH).filter((name) => {
    const categoryPath = path.join(CONTENT_PATH, name);
    return fs.statSync(categoryPath).isDirectory();
  });
});
