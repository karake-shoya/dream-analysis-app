'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';

type Category = {
  slug: string;
  name: string;
  emojis: string;
};

type SitemapFilterProps = {
  categories: Category[];
};

export default function SitemapFilter({ categories }: SitemapFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleFilter = (slug: string | null) => {
    setActiveCategory(slug);

    // DOM上のカテゴリセクションの表示/非表示を切り替え（aタグ自体はDOMに残す）
    const sections = document.querySelectorAll('[data-category-section]');
    sections.forEach((section) => {
      const sectionCategory = section.getAttribute('data-category-section');
      if (slug === null || sectionCategory === slug) {
        (section as HTMLElement).style.display = '';
      } else {
        (section as HTMLElement).style.display = 'none';
      }
    });
  };

  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
        <Filter className="w-4 h-4" />
        <span>カテゴリで絞り込み</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleFilter(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
            activeCategory === null
              ? 'bg-purple-600 text-white border-purple-500'
              : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-purple-500/30'
          }`}
        >
          すべて
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleFilter(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              activeCategory === cat.slug
                ? 'bg-purple-600 text-white border-purple-500'
                : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-purple-500/30'
            }`}
          >
            {cat.emojis} {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
