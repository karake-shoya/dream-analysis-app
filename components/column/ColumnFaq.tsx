import { BookOpen, HelpCircle } from 'lucide-react';

export type ColumnFaqItem = {
  q: string;
  a: string;
};

interface ColumnFaqProps {
  faqs: ColumnFaqItem[];
  /**
   * card: カード枠 + ▼ トグル（既定・18記事）
   * qa:   Q/A ラベル + ＋ トグル
   */
  variant?: 'card' | 'qa';
}

/**
 * コラム記事のFAQ表示。
 * FAQPage 構造化データは同じ配列から ColumnArticleShell が出力するため、ここでは表示のみ扱う。
 */
export default function ColumnFaq({ faqs, variant = 'card' }: ColumnFaqProps) {
  if (faqs.length === 0) return null;

  if (variant === 'qa') {
    return (
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center">
          <HelpCircle className="w-8 h-8 mr-3 text-purple-400" />
          よくある質問
        </h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <details
              key={i}
              className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-bold text-lg hover:bg-white/5 transition-colors">
                <span className="flex items-center gap-3">
                  <span className="text-purple-400 font-mono text-sm">Q</span>
                  {q}
                </span>
                <span className="text-purple-400 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                <span className="text-purple-400 font-mono text-sm font-bold mr-2">A</span>
                {a}
              </div>
            </details>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
        <BookOpen className="w-7 h-7 mr-3 text-purple-400 shrink-0" />
        よくある質問
      </h2>
      <div className="space-y-4">
        {faqs.map(({ q, a }) => (
          <details key={q} className="rounded-2xl border border-white/10 bg-black/20 p-4 group">
            <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
              {q}
              <span className="transition-transform group-open:rotate-180 text-purple-400 shrink-0 ml-3">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
