import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Moon, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const runtime = "edge";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  const { data: dreams } = await supabase
    .from("dreams")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen text-white p-4 pt-24 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    <Moon className="w-8 h-8 text-purple-300" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 font-display">
                        Dream Journal
                    </span>
                </h1>
                <Link href="/" className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    トップへ戻る
                </Link>
            </div>

            {!dreams || dreams.length === 0 ? (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-gray-400 mb-6">まだ診断された夢の記録がありません。</p>
                    <Link href="/" className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors inline-block font-medium">
                        夢診断を始める
                    </Link>
                </div>
            ) : (
                <div className="grid gap-6">
                    {dreams.map((dream) => {
                         const result = dream.diagnosis_result;
                         
                         return (
                            <div key={dream.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group shadow-lg shadow-black/20">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div className="flex items-center text-sm text-purple-300">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {formatDate(dream.created_at)}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {result.keywords?.slice(0, 3).map((k: string, i: number) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-200 border border-purple-500/30">
                                                #{k}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-indigo-200 mb-3">{result.summary}</h3>
                                
                                <div className="bg-black/30 rounded-xl p-4 mb-4">
                                     <p className="text-gray-400 text-sm italic line-clamp-3">&quot;{dream.content}&quot;</p>
                                </div>
                                
                                <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-xl p-4 text-sm text-gray-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="font-bold text-indigo-300">Advice</p>
                                        <div className="flex gap-4 text-xs">
                                            <span className="text-amber-200">★ {result.lucky_item}</span>
                                            <span className="text-pink-200">Lucky Color {result.lucky_color}</span>
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">{result.advice}</p>
                                </div>
                            </div>
                         )
                    })}
                </div>
            )}
        </div>
    </div>
  );
}
