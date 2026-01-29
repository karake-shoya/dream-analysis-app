import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_PATH = path.join(process.cwd(), 'content/dictionary');

export type ArticleFrontmatter = {
  keyword: string;
  slug: string;
  category: string;
  summary: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
  faqs?: { q: string; a: string }[];
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
