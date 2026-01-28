'use client';

export const runtime = 'edge';

import { useState } from 'react';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import GradientBackground from '@/components/GradientBackground';
import { ERROR_MESSAGES } from '@/lib/constants';

import VoiceInput from '@/components/VoiceInput';

export default function Home() {
  const router = useRouter();
  const [dream, setDream] = useState('');
  const [baseText, setBaseText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!dream.trim()) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || ERROR_MESSAGES.ANALYSIS_FAILED);
      }

      if (data.id) {
        router.push(`/result/${data.id}`);
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : ERROR_MESSAGES.UNEXPECTED_ERROR;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen text-white selection:bg-purple-500/30">
      <GradientBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6 pt-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200 font-display">
            Your Dreams, Decoded.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            あなたの夢には、潜在意識からのメッセージが隠されています。<br className="hidden md:block"/>
            その不思議な物語を教えてください。AIが優しく紐解きます。
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl transition-all duration-300 hover:border-white/20">
          <label htmlFor="dream-input" className="text-lg font-medium text-purple-200 mb-4 flex items-center justify-between">
            <span className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              どんな夢を見ましたか？
            </span>
          </label>
          
          <div className="relative">
            <textarea
              id="dream-input"
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              className="w-full h-48 bg-black/20 border border-white/10 rounded-xl p-4 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none pr-14"
              placeholder="例：広い草原で、白いウサギを追いかけている夢を見ました。空は不思議な紫色をしていて..."
            />
            <VoiceInput 
              onStart={() => setBaseText(dream)}
              onTranscript={(transcript) => setDream(baseText + (baseText ? ' ' : '') + transcript)}
              className="absolute bottom-4 right-4"
            />
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleAnalyze}
              disabled={loading || !dream.trim()}
              className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 ease-in-out bg-linear-to-r from-purple-600 to-indigo-600 rounded-full hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-600/30 overflow-hidden"
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
      </div>
    </main>
  );
}
