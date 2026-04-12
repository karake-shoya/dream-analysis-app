'use client';

import { useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, X, Tag } from 'lucide-react';

type Props = {
  tagCounts: { tag: string; count: number }[];
  currentQ?: string;
  currentTag?: string;
};

const MAX_TAGS = 10;

export default function DashboardFilters({ tagCounts, currentQ, currentTag }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(currentQ ?? '');
  const [isPending, startTransition] = useTransition();

  // 既存の month パラメータを維持しながら指定パラメータを上書きする
  const buildUrl = (overrides: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    // フィルター変更時はページをリセット
    params.delete('page');

    for (const [key, value] of Object.entries(overrides)) {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }

    const query = params.toString();
    return `/dashboard${query ? `?${query}` : ''}`;
  };

  const handleSearch = () => {
    const trimmed = inputValue.trim();
    startTransition(() => {
      router.push(buildUrl({ q: trimmed || undefined, tag: undefined }));
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleTagClick = (tag: string) => {
    startTransition(() => {
      if (currentTag === tag) {
        // 同じタグをクリックしたら解除
        router.push(buildUrl({ tag: undefined }));
      } else {
        router.push(buildUrl({ tag, q: undefined }));
        setInputValue('');
      }
    });
  };

  const handleClearQ = () => {
    setInputValue('');
    startTransition(() => {
      router.push(buildUrl({ q: undefined }));
    });
  };

  const handleClearTag = () => {
    startTransition(() => {
      router.push(buildUrl({ tag: undefined }));
    });
  };

  const hasActiveFilter = !!currentQ || !!currentTag;

  return (
    <div className={`space-y-4 transition-opacity ${isPending ? 'opacity-60' : 'opacity-100'}`}>
      {/* テキスト検索 */}
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="夢の内容・タイトルで検索..."
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
        />
        <button
          onClick={handleSearch}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-400 transition-colors"
          aria-label="検索"
        >
          <Search className="w-4 h-4" />
        </button>
        {inputValue && (
          <button
            onClick={handleClearQ}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            aria-label="クリア"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* タグ候補 */}
      {tagCounts.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <Tag className="w-3.5 h-3.5 text-gray-500 shrink-0" />
          {tagCounts.slice(0, MAX_TAGS).map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                currentTag === tag
                  ? 'bg-purple-600 text-white border border-purple-500'
                  : 'bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40'
              }`}
            >
              #{tag}
              <span className={`text-[10px] ${currentTag === tag ? 'text-purple-200' : 'text-gray-500'}`}>
                {count}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* アクティブフィルター表示 */}
      {hasActiveFilter && (
        <div className="flex flex-wrap gap-2 items-center text-sm">
          <span className="text-gray-500 text-xs">絞り込み中:</span>
          {currentQ && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 text-xs">
              「{currentQ}」
              <button onClick={handleClearQ} className="hover:text-white transition-colors ml-0.5">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {currentTag && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-600/20 text-purple-200 border border-purple-500/30 text-xs">
              #{currentTag}
              <button onClick={handleClearTag} className="hover:text-white transition-colors ml-0.5">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
