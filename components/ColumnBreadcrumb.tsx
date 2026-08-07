import Breadcrumb from '@/components/Breadcrumb';
import { getColumnArticle } from '@/lib/data/columnArticles';

type Props = {
  slug: string;
};

/** コラム記事用のパンくずリスト（表示 + BreadcrumbList構造化データ） */
export default function ColumnBreadcrumb({ slug }: Props) {
  const article = getColumnArticle(slug);
  if (!article) return null;

  return (
    <Breadcrumb
      items={[
        { label: 'ホーム', href: '/' },
        { label: '夢分析コラム', href: '/column' },
        { label: article.breadcrumbLabel },
      ]}
    />
  );
}
