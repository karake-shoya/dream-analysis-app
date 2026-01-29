import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { 
  Moon, 
  Sparkles, 
  ArrowLeft, 
  Info, 
  Heart, 
  MapPin, 
  Gauge, 
  ClipboardCheck, 
  Lightbulb,
  CheckCircle2,
  Clock
} from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';
import { headers } from "next/headers";
import GradientBackground from "@/components/GradientBackground";
import { ShareButtons } from "@/components/ShareButtons";
import type { AnalysisResult } from "@/lib/types";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const supabase = await createClient();
  const { data: dream } = await supabase
    .from('dreams')
    .select('diagnosis_result')
    .eq('id', id)
    .single();

  if (!dream) return { title: '夢診断結果' };

  const result = dream.diagnosis_result as AnalysisResult;
  const title = result.title ? `「${result.title}」` : `「${result.keywords[0]}」`;
  const summary = result.interpretations?.[0]?.summary || result.advice;

  return {
    title: `【夢診断】今日の夢は${title}でした ✨`,
    description: summary,
    openGraph: {
      title: 'AI夢診断 - あなたの夢を紐解きます',
      description: summary,
    },
  };
}

export default async function ResultPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: dream, error } = await supabase
    .from('dreams')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !dream) {
    notFound();
  }

  const result = dream.diagnosis_result as AnalysisResult;
  
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const shareUrl = `${protocol}://${host}/result/${id}`;
  const displayTitle = result.title ? `「${result.title}」` : '';
  const shareText = `【夢診断】今日の夢は${displayTitle || result.keywords[0]}でした！ ✨ #夢診断アプリ`;

  return (
    <main className="min-h-screen text-white selection:bg-purple-500/30">
      <GradientBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            トップに戻る
          </Link>
        </div>

        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200 font-display py-2">
            Diagnosis Result
          </h1>
          <p className="text-gray-400">
            AIが精緻に紐解いた、あなたの深層心理の地図
          </p>
        </div>

        {/* Guest Storage Period Notice */}
        {!dream.user_id && (
          <div className="mb-10 max-w-2xl mx-auto p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-center justify-center gap-3 animate-in fade-in slide-in-from-top-4 duration-1000">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <p className="text-xs md:text-sm text-amber-200/70 font-medium">
              ゲスト利用のため、この診断結果は3日後に自動的に削除されます。
            </p>
          </div>
        )}

        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          
          {/* Main Title & Keywords */}
          <div className="text-center space-y-6">
            {result.title && (
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-relaxed px-4">
                「{result.title}」
              </h2>
            )}
            <div className="flex flex-wrap gap-2 justify-center">
              {result.keywords.map((keyword, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-200 text-sm font-medium backdrop-blur-sm">
                  #{keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Facts Section */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
              <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center uppercase tracking-widest">
                <ClipboardCheck className="w-4 h-4 mr-2 text-indigo-400" />
                夢の事実
              </h3>
              <ul className="space-y-3">
                {result.facts.map((fact, i) => (
                  <li key={i} className="text-gray-200 text-sm flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-3 shrink-0" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Emotions Section */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
              <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center uppercase tracking-widest">
                <Heart className="w-4 h-4 mr-2 text-rose-400" />
                感じた感情
              </h3>
              <div className="flex flex-wrap gap-2">
                {result.emotions.map((emotion, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-200 text-sm">
                    {emotion}
                  </span>
                ))}
              </div>
            </div>
          </div>

            {/* Analysis Note (if exists) */}
            {result.analysisNote && (
              <div className="md:col-span-3 bg-indigo-500/5 backdrop-blur-sm rounded-2xl p-4 border border-indigo-500/10 flex items-start gap-3">
                <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  {result.analysisNote}
                </p>
              </div>
            )}

            {/* Symbols Section */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 md:col-span-3">
            <h3 className="text-sm font-bold text-gray-400 mb-6 flex items-center uppercase tracking-widest">
              <MapPin className="w-4 h-4 mr-2 text-amber-400" />
              夢の中の象徴
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {result.symbols.map((symbol, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="font-bold text-amber-200 mb-1">{symbol.symbol}</div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {symbol.meaningCandidates.join(' / ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interpretations Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-400 px-2 flex items-center uppercase tracking-widest">
              <Gauge className="w-4 h-4 mr-2 text-blue-400" />
              深層心理の解釈
            </h3>
            {result.interpretations.map((interp, i) => (
              <div key={i} className={`relative overflow-hidden rounded-3xl p-6 md:p-8 border ${i === 0 ? 'bg-blue-600/10 border-blue-500/30' : 'bg-white/5 border-white/10'}`}>
                {i === 0 && <div className="absolute top-0 right-0 px-4 py-1 bg-blue-500 text-[10px] font-black uppercase tracking-tighter text-white rounded-bl-xl">Most Likely</div>}
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1 pr-12">
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {interp.summary}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Confidence</span>
                    <span className="text-xl font-display font-black text-blue-400">{(interp.confidence * 100).toFixed(0)}%</span>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-6">
                  <div 
                    className={`h-full rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-blue-400/50'}`}
                    style={{ width: `${interp.confidence * 100}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {interp.evidence.map((ev, j) => (
                    <span key={j} className="text-[10px] px-2 py-1 rounded bg-black/30 text-gray-400 border border-white/5">
                      {ev}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Advice & Actions */}
          <div className="bg-linear-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-purple-200 flex items-center">
                  <Sparkles className="w-5 h-5 mr-3" />
                  解析者からのメッセージ
                </h3>
                <p className="text-gray-200 leading-relaxed italic border-l-2 border-purple-500/30 pl-6 py-2">
                  {result.advice}
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-indigo-200 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-3" />
                  次の一歩
                </h3>
                <div className="space-y-3">
                  {result.nextActions.map((action, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                      <span className="text-sm text-gray-100">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Share & Actions */}
          <div className="flex flex-col items-center gap-8 py-8 border-t border-white/5">
            <ShareButtons shareUrl={shareUrl} shareText={shareText} />
            
            <Link
              href="/"
              className="group flex items-center px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
              もう一度、夢を読み解く
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}

