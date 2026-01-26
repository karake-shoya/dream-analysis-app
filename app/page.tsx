'use client';

export const runtime = 'edge';

import { useState } from 'react';
import { Sparkles, Moon, ArrowRight, Loader2, Star, Palette, Share2 } from 'lucide-react';
import { Fredoka, Zen_Kaku_Gothic_New } from 'next/font/google';

// Re-defining fonts here as this is the file I am writing.
const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '600'] });
const zenGothic = Zen_Kaku_Gothic_New({ subsets: ['latin'], weight: ['400', '700'] });

interface AnalysisResult {
  keywords: string[];
  summary: string;
  advice: string;
  lucky_item: string;
  lucky_color: string;
}

export default function Home() {
  const [dream, setDream] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!dream.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || '解析に失敗しました');
      }

      setResult(data);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : '予期せぬエラーが発生しました';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`min-h-screen bg-[#0f172a] text-white selection:bg-purple-500/30 ${zenGothic.className}`}>
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-purple-900/20 blur-[100px]" />
        <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/20 blur-[100px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4 shadow-lg shadow-purple-500/10">
            <Moon className="w-8 h-8 text-purple-300 mr-3" />
            <h1 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 ${fredoka.className}`}>
              Dream Oracle
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            あなたの夢には、潜在意識からのメッセージが隠されています。<br className="hidden md:block"/>
            その不思議な物語を教えてください。AIが優しく紐解きます。
          </p>
        </header>

        {/* Input Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-purple-500/10 hover:border-white/20">
          <label htmlFor="dream-input" className="block text-lg font-medium text-purple-200 mb-4 flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            どんな夢を見ましたか？
          </label>
          <textarea
            id="dream-input"
            value={dream}
            onChange={(e) => setDream(e.target.value)}
            className="w-full h-40 bg-black/20 border border-white/10 rounded-xl p-4 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
            placeholder="例：広い草原で、白いウサギを追いかけている夢を見ました。空は不思議な紫色をしていて..."
          />
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleAnalyze}
              disabled={loading || !dream.trim()}
              className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 ease-in-out bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-600/30 overflow-hidden"
            >
              <span className="w-full h-full absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  解析中...
                </>
              ) : (
                <>
                  診断する
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
          
          {error && (
             <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
              {error}
             </div>
          )}
        </div>

        {/* Result Section */}
        {result && (
          <div className="mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Keywords */}
              <div className="md:col-span-3">
                <div className="flex flex-wrap gap-2 justify-center">
                  {result.keywords.map((keyword, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-200 text-sm font-medium">
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Summary & Advice */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-full">
                  <h3 className="text-xl font-bold text-indigo-200 mb-4 flex items-center">
                    <Moon className="w-5 h-5 mr-2" />
                    夢からのメッセージ
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {result.summary}
                  </p>
                  <div className="bg-indigo-500/10 rounded-xl p-4 border border-indigo-500/20">
                    <h4 className="font-semibold text-indigo-200 mb-2 text-sm">Advice</h4>
                    <p className="text-indigo-100 text-sm leading-relaxed">
                      {result.advice}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lucky Items */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-md rounded-2xl p-6 border border-amber-500/20">
                   <h3 className="text-lg font-bold text-amber-200 mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Lucky Item
                   </h3>
                   <p className="text-amber-100 font-medium text-lg">
                     {result.lucky_item}
                   </p>
                </div>

                <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-md rounded-2xl p-6 border border-pink-500/20">
                   <h3 className="text-lg font-bold text-pink-200 mb-3 flex items-center">
                    <Palette className="w-5 h-5 mr-2" />
                    Lucky Color
                   </h3>
                   <div className="flex items-center gap-3">
                     <div 
                       className="w-8 h-8 rounded-full border border-white/20 shadow-inner" 
                       style={{ backgroundColor: 'currentColor', color: result.lucky_color === 'オレンジ' ? 'orange' : result.lucky_color }} // This is a simple fallback, real color mapping would be better but this works for simple names or hex codes if Gemini returns them. Gemini often returns names "Orange".
                     />
                     <p className="text-pink-100 font-medium text-lg">
                       {result.lucky_color}
                     </p>
                   </div>
                </div>
              </div>

              {/* Share Button */}
              <div className="md:col-span-3 flex justify-center mt-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    `【夢診断】今日の夢は『${result.summary}』でした！ラッキーアイテムは${result.lucky_item} #夢診断アプリ`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl border border-white/10"
                >
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  X (Twitter) でシェア
                </a>
              </div>

            </div>
          </div>
        )}
        
        <footer className="text-center text-gray-600 text-sm mt-20 pb-8">
           <p>© 2024 Dream Oracle. Powered by Gemini.</p>
        </footer>
      </div>
    </main>
  );
}
