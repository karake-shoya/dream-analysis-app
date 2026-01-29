'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import { DREAM_DICTIONARY } from '@/lib/data/dreamDictionary';

type SearchResult = {
  keyword: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  summary: string;
};

export default function DictionarySearch() {
  const [query, setQuery] = useState('');

  // 全記事をフラット化
  const allItems: SearchResult[] = useMemo(() => {
    const items: SearchResult[] = [];
    Object.values(DREAM_DICTIONARY).forEach((category) => {
      category.items.forEach((item) => {
        items.push({
          keyword: item.keyword,
          slug: item.slug,
          categorySlug: category.slug,
          categoryName: category.name,
          summary: item.summary,
        });
      });
    });
    return items;
  }, []);

  // 検索結果をフィルタリング
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const normalizedQuery = query.toLowerCase().trim();
    return allItems.filter(
      (item) =>
        item.keyword.toLowerCase().includes(normalizedQuery) ||
        item.summary.toLowerCase().includes(normalizedQuery)
    );
  }, [query, allItems]);

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className="max-w-xl mx-auto mb-16">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="キーワードで検索 (例: 猫, 飛ぶ, 泣く...)"
          className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-12 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* 検索結果 */}
      {query.trim() && (
        <div className="mt-4 bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          {searchResults.length > 0 ? (
            <div className="divide-y divide-white/10">
              {searchResults.map((item) => (
                <Link
                  key={`${item.categorySlug}-${item.slug}`}
                  href={`/dictionary/${item.categorySlug}/${item.slug}`}
                  className="block p-4 hover:bg-purple-500/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white">{item.keyword}</p>
                      <p className="text-sm text-gray-400 mt-1">{item.summary}</p>
                    </div>
                    <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">
                      {item.categoryName}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-400">
              <p>「{query}」に一致する夢占いが見つかりませんでした</p>
              <p className="text-sm mt-2">
                見つからない場合は
                <Link href="/" className="text-purple-400 hover:text-purple-300 ml-1">
                  AI夢診断
                </Link>
                をお試しください
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
