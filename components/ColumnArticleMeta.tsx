import { User, Calendar, RefreshCw } from 'lucide-react';
import Link from 'next/link';

interface ColumnArticleMetaProps {
  publishedAt: string;
  updatedAt?: string;
}

export default function ColumnArticleMeta({ publishedAt, updatedAt }: ColumnArticleMetaProps) {
  const formatDate = (dateStr: string) => dateStr.replace(/-/g, '年').replace(/年(\d+)年/, '年$1月') + '日';

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-1 text-sm text-gray-400 border-b border-white/10 pb-4">
      <Link
        href="/about"
        className="flex items-center gap-2 hover:text-purple-300 transition-colors"
      >
        <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 shrink-0">
          <img src="/profile-image.png" alt="上野 翔也" className="w-full h-full object-contain" />
        </div>
        <span>
          著者：<span className="text-gray-300 font-medium">Shoya Ueno</span>
          <span className="ml-1 text-xs text-gray-500">（教育心理学・中学校理科教員）</span>
        </span>
      </Link>
      <div className="flex items-center gap-1.5">
        <Calendar className="w-3.5 h-3.5 shrink-0" />
        <time dateTime={publishedAt}>公開：{formatDate(publishedAt)}</time>
      </div>
      {updatedAt && updatedAt !== publishedAt && (
        <div className="flex items-center gap-1.5">
          <RefreshCw className="w-3.5 h-3.5 shrink-0" />
          <time dateTime={updatedAt}>更新：{formatDate(updatedAt)}</time>
        </div>
      )}
    </div>
  );
}
