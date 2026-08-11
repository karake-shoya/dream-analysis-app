import { ReactNode } from 'react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';
import ColumnArticleMeta from '@/components/ColumnArticleMeta';
import ColumnBreadcrumb from '@/components/ColumnBreadcrumb';
import FaqSchema from '@/components/FaqSchema';
import ArticleReferences from '@/components/ArticleReferences';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import ColumnFaq, { ColumnFaqItem } from '@/components/column/ColumnFaq';
import NextColumnCard, { NextColumn } from '@/components/column/NextColumnCard';

interface ColumnArticleShellProps {
  /** COLUMN_ARTICLES のスラッグ。パンくず・記事メタ・Article 構造化データがこれを参照する */
  slug: string;
  heroTitle: string;
  heroSubtitle?: ReactNode;
  /** 表示（アコーディオン）と FAQPage 構造化データの両方をこの1配列から生成する */
  faqs?: ColumnFaqItem[];
  faqVariant?: 'card' | 'qa';
  references?: ReactNode[];
  /** 免責文の上書き。未指定なら既定文を出す（全記事が免責を持つため省略はできない） */
  disclaimer?: ReactNode;
  disclaimerClassName?: string;
  nextColumn?: NextColumn;
  cta?: {
    title?: ReactNode;
    description?: ReactNode;
  };
  /** 記事本文。リード文・各セクション・「おわりに」まで */
  children: ReactNode;
}

/**
 * コラム記事の共通骨格。
 *
 * 26本すべてが同じ並び（パンくず → ヒーロー → 記事メタ → 本文 → FAQ → 参考文献 → 免責 →
 * 関連コラム → CTA）なので、ここに1本化する。各ページは本文と差分データだけを持つ。
 */
export default function ColumnArticleShell({
  slug,
  heroTitle,
  heroSubtitle,
  faqs,
  faqVariant = 'card',
  references,
  disclaimer,
  disclaimerClassName,
  nextColumn,
  cta,
  children,
}: ColumnArticleShellProps) {
  const faqItems = faqs ?? [];

  return (
    <ContentPageLayout>
      {faqItems.length > 0 && (
        <FaqSchema faqs={faqItems.map(({ q, a }) => ({ question: q, answer: a }))} />
      )}
      <ColumnBreadcrumb slug={slug} />
      <PageHero title={heroTitle} subtitle={heroSubtitle} />
      <ColumnArticleMeta slug={slug} />

      <article>
        <div className="prose prose-invert prose-purple max-w-none space-y-12">
          {children}

          {faqItems.length > 0 && <ColumnFaq faqs={faqItems} variant={faqVariant} />}
          {references && references.length > 0 && <ArticleReferences items={references} />}
          <MedicalDisclaimer className={disclaimerClassName}>{disclaimer}</MedicalDisclaimer>
        </div>
      </article>

      {nextColumn && <NextColumnCard {...nextColumn} />}

      <DreamAnalysisCTA title={cta?.title} description={cta?.description} />
    </ContentPageLayout>
  );
}
