'use client';

import { useState, useRef } from 'react';
import { Sparkles, ArrowRight, Loader2, MessageCircleQuestion, SkipForward } from 'lucide-react';
import { useRouter } from 'next/navigation';
import GradientBackground from '@/components/GradientBackground';
import VoiceInput from '@/components/VoiceInput';
import { ERROR_MESSAGES } from '@/lib/constants';
import { useAuth } from '@/hooks/useAuth';
import { getDisplayName } from '@/lib/user';
import HomeSeoSections from '@/components/HomeSeoSections';

interface Question {
  question: string;
  options: string[];
}

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();
  const [dream, setDream] = useState('');
  const baseTextRef = useRef('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [needsMoreInfo, setNeedsMoreInfo] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [moreInfo, setMoreInfo] = useState('');
  const moreInfoBaseTextRef = useRef('');
  const [resultId, setResultId] = useState<string | null>(null);
  const [resultShareToken, setResultShareToken] = useState<string | null>(null);
  const questionsSectionRef = useRef<HTMLDivElement>(null);
  
  const displayName = getDisplayName(user);

  const buildResultPath = (id: string, shareToken?: string | null) => {
    if (!shareToken) {
      return `/result/${id}`;
    }

    return `/result/${id}?token=${encodeURIComponent(shareToken)}`;
  };

  const handleAnalyze = async (isFollowUp = false) => {
    const inputText = isFollowUp ? `${dream}\n\n【追加情報】\n${moreInfo}` : dream;
    if (!inputText.trim()) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream: inputText }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || ERROR_MESSAGES.ANALYSIS_FAILED);
      }

      if (data.needsMoreInfo && !isFollowUp) {
        setNeedsMoreInfo(true);
        setQuestions(data.missingInfoQuestions || []);
        if (data.id) {
          setResultId(data.id);
          setResultShareToken(data.shareToken || null);
        }
        setLoading(false);
        
        setTimeout(() => {
          if (questionsSectionRef.current) {
            const yOffset = -80;
            const element = questionsSectionRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 150);
        return;
      }

      if (data.id) {
        router.push(buildResultPath(data.id, data.shareToken));
      } else {
        setLoading(false);
        setError('解析は完了しましたが、結果の保存に失敗しました。もう一度お試しください。');
      }
    } catch (err: unknown) {
      setLoading(false);
      const errorMessage = err instanceof Error ? err.message : ERROR_MESSAGES.UNEXPECTED_ERROR;
      setError(errorMessage);
    }
  };

  const handleAddOption = (option: string) => {
    setMoreInfo(prev => {
      const trimmed = prev.trim();
      if (!trimmed) return option;
      if (/[、。]$/.test(trimmed)) return trimmed + option;
      return trimmed + '、' + option;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, isFollowUp: boolean) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      if (!isFollowUp && needsMoreInfo) return;
      e.preventDefault();
      handleAnalyze(isFollowUp);
    }
  };

  return (
    <main className="min-h-screen text-white selection:bg-purple-500/30">
      <GradientBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6 pt-8">
          {/* Logo */}
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
            <img 
              src="/icon.png" 
              alt="Yume Insight Logo" 
              className="relative w-28 h-28 mx-auto drop-shadow-2xl animate-in zoom-in duration-1000"
            />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200 font-display">
            Your Dreams, Decoded.
          </h2>
          <div className="space-y-4">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              夢の内容を入力するだけで、<span className="hidden md:inline"><br/></span>あなたの深層心理をAIが読み解きます
            </p>
            <p className="text-indigo-100 text-base md:text-lg font-bold tracking-widest font-inter">
              AI夢占いサービス「Yume Insight」
            </p>
          </div>
        </div>
        


        {/* Input Section */}
        <div className="space-y-6">
          <div className={`bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl transition-all duration-500 ${needsMoreInfo ? 'opacity-60 scale-95 pointer-events-none' : 'hover:border-white/20'}`}>
            <label htmlFor="dream-input" className="text-lg font-medium text-purple-200 mb-4 flex items-center justify-between">
              <span className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                {user ? (
                  <span><span className="text-white font-bold">{displayName}</span>さん、どんな夢を見ましたか？</span>
                ) : (
                  <span>どんな夢を見ましたか？</span>
                )}
              </span>
            </label>
            
            <div className="relative">
              <textarea
                id="dream-input"
                value={dream}
                onChange={(e) => setDream(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, false)}
                className="w-full h-48 bg-black/20 border border-white/10 rounded-xl p-4 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none pr-14"
                placeholder="例：広い草原で、白いウサギを追いかけている夢を見ました。空は不思議な紫色をしていて..."
              />
              <VoiceInput 
                onStart={() => { baseTextRef.current = dream; }}
                onTranscript={(transcript) => setDream(baseTextRef.current + (baseTextRef.current ? ' ' : '') + transcript)}
                className="absolute bottom-4 right-4"
              />
            </div>
            
            {!needsMoreInfo && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => handleAnalyze(false)}
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
                      <kbd className="hidden md:inline-flex ml-2 px-1.5 py-0.5 text-[10px] rounded border border-white/20 bg-white/5 text-gray-400 font-sans group-hover:border-white/40 transition-colors">
                        ⌘Enter
                      </kbd>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            )}
            
            {error && !needsMoreInfo && (
              <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Additional Questions Section */}
          {needsMoreInfo && (
            <div 
              ref={questionsSectionRef}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-indigo-500/30 shadow-2xl animate-in fade-in slide-in-from-top-8 duration-700"
            >
              <div className="flex items-center text-indigo-200 font-bold mb-4 text-xl">
                <MessageCircleQuestion className="w-6 h-6 mr-3 text-indigo-400" />
                詳細診断のためのヒント
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                AIがあなたの夢をさらに深く紐解くために、いくつか気になる点を見つけました。
                当てはまるものを選んだり、自由に書き足してみてください。
              </p>

              <div className="space-y-6 mb-8">
                {questions.map((q, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 text-xs font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-200 text-sm">{q.question}</p>
                    </div>
                    {q.options?.length > 0 && (
                      <div className="flex flex-wrap gap-2 pl-10">
                        {q.options.map((option, i) => (
                          <button
                            key={i}
                            onClick={() => handleAddOption(option)}
                            className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all active:scale-95"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="relative mb-6">
                <textarea
                  value={moreInfo}
                  onChange={(e) => setMoreInfo(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, true)}
                  className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-4 text-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none pr-14"
                  placeholder="追加の内容をこちらに入力（ボタンで選択した内容もここに反映されます）"
                />
                <VoiceInput 
                  onStart={() => { moreInfoBaseTextRef.current = moreInfo; }}
                  onTranscript={(transcript) => setMoreInfo(moreInfoBaseTextRef.current + (moreInfoBaseTextRef.current ? ' ' : '') + transcript)}
                  className="absolute bottom-4 right-4"
                />
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm">
                  {error}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <button
                  onClick={() => resultId && router.push(buildResultPath(resultId, resultShareToken))}
                  className="flex items-center justify-center px-6 py-3 font-medium text-gray-400 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5"
                >
                  <SkipForward className="w-4 h-4 mr-2" />
                  このままの結果を表示
                </button>

                <button
                  onClick={() => handleAnalyze(true)}
                  disabled={loading}
                  className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all bg-linear-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 shadow-lg shadow-indigo-600/20 overflow-hidden whitespace-nowrap text-sm md:text-base"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Sparkles className="w-5 h-5 mr-2" />
                  )}
                  {loading ? '再診断中...' : (
                    <>
                      精度を高めて再診断
                      <kbd className="hidden md:inline-flex ml-2 px-1.5 py-0.5 text-[10px] rounded border border-white/20 bg-white/5 text-indigo-300 font-sans group-hover:border-white/40 transition-colors">
                        ⌘Enter
                      </kbd>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
        
        <HomeSeoSections />

        {/* Site Description Section */}
        <div className="mt-24 bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 text-center space-y-6 mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Yume Insightについて
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-base md:text-lg">
              Yume Insight は、夢占い辞典とAI分析を通して、<span className="hidden md:inline"><br/></span>
              自分の心理状態や感情の傾向を整理するための情報サイトです。
            </p>
            <p className="text-sm md:text-base text-gray-400">
              占いや断定ではなく、日常を見直すヒントとして<span className="hidden md:inline"><br/></span>
              夢の意味をやさしく解説しています。
            </p>
          </div>
        </div>

        {/* カテゴリ導線セクション */}
        <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          <h3 className="text-lg md:text-xl font-bold text-white mb-6 text-center">
            夢占い辞典 ─ カテゴリから探す
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: '動物・生き物', emoji: '🦊', href: '/dictionary/animals' },
              { name: '自然・天候', emoji: '⛈️', href: '/dictionary/nature' },
              { name: '場所・建物', emoji: '🏰', href: '/dictionary/places' },
              { name: '行動・出来事', emoji: '🏃', href: '/dictionary/actions' },
              { name: '感情', emoji: '💓', href: '/dictionary/emotions' },
              { name: '人物・関係', emoji: '🧑‍🤝‍🧑', href: '/dictionary/person' },
              { name: '状況・イベント', emoji: '📝', href: '/dictionary/situation' },
            ].map((cat) => (
              <a
                key={cat.href}
                href={cat.href}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
                <span className="text-sm text-gray-300 group-hover:text-purple-300 transition-colors font-medium">{cat.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="/sitemap"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-200 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all font-medium group"
            >
              <span>📖 すべてのキーワードを一覧で見る</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
