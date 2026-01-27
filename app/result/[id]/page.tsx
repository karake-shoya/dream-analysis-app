import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { Moon, Sparkles, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';
import { headers } from "next/headers";

import { ShareButtons } from "@/components/ShareButtons";

interface AnalysisResult {
  keywords: string[];
  title?: string;
  summary: string;
  advice: string;
}

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
  return {
    title: `【夢診断】今日の夢は${title}でした ✨`,
    description: result.summary,
    openGraph: {
      title: 'AI夢診断 - あなたの夢を紐解きます',
      description: result.summary,
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
  const shareText = `【夢診断】今日の夢は${displayTitle || result.summary.slice(0, 50)}でした！ ✨ #夢診断アプリ`;


  return (
    <main className="min-h-screen text-white selection:bg-purple-500/30">
      {/* Optimized Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          background: `
            radial-gradient(circle at 10% 10%, rgba(88, 28, 135, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 90% 40%, rgba(49, 46, 129, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 30% 80%, rgba(30, 58, 138, 0.1) 0%, transparent 40%),
            #0f172a
          `
        }}
      />

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
            AIが紐解いたあなたの夢のメッセージ
          </p>
        </div>

        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Catchy Title */}
            {result.title && (
              <div className="md:col-span-3 text-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-purple-200 leading-relaxed px-4">
                  「{result.title}」
                </h2>
              </div>
            )}

            {/* Keywords */}
            <div className="md:col-span-3">
              <div className="flex flex-wrap gap-2 justify-center">
                {result.keywords.map((keyword: string, i: number) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-200 text-sm font-medium">
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-3 space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10 h-full">
                {/* Summary Section */}
                <div className="mb-10 text-center md:text-left">
                  <h3 className="text-lg font-bold text-indigo-200 mb-6 flex items-center justify-center md:justify-start uppercase tracking-widest border-b border-white/10 pb-2">
                    <Moon className="w-5 h-5 mr-2" />
                    メッセージ
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
                    {result.summary}
                  </p>
                </div>

                {/* Advice Section */}
                <div className="bg-indigo-500/10 rounded-2xl p-6 border border-indigo-500/20">
                  <h4 className="font-semibold text-indigo-200 mb-3 flex items-center text-sm uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 mr-2" />
                    アドバイス
                  </h4>
                  <p className="text-indigo-100 leading-relaxed">
                    {result.advice}
                  </p>
                </div>
              </div>
            </div>


            {/* Actions */}
            <div className="md:col-span-3 flex flex-col items-center gap-6 mt-8">
              <ShareButtons shareUrl={shareUrl} shareText={shareText} />
              
              <Link
                href="/"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                もう一度診断する
              </Link>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}
