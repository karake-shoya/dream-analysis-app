import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Moon, Calendar, List, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { DreamRecord } from "@/lib/types";
import DreamCalendar from "@/components/DreamCalendar";

export const runtime = "edge";

const ITEMS_PER_PAGE = 10;

type Props = {
  searchParams: Promise<{ month?: string; page?: string }>;
};

export default async function Dashboard({ searchParams }: Props) {
  const params = await searchParams;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  // 全ての夢を取得（カレンダー用）
  const { data: allDreams } = await supabase
    .from("dreams")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const dreams = allDreams as DreamRecord[] || [];

  // 月フィルタリング
  const selectedMonth = params.month;
  let filteredDreams = dreams;
  
  if (selectedMonth) {
    const [filterYear, filterMonth] = selectedMonth.split('-').map(Number);
    filteredDreams = dreams.filter((dream) => {
      const date = new Date(dream.created_at);
      return date.getFullYear() === filterYear && date.getMonth() + 1 === filterMonth;
    });
  }

  // ページネーション
  const currentPage = parseInt(params.page || '1', 10);
  const totalItems = filteredDreams.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedDreams = filteredDreams.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // カレンダー用のデータ変換
  const calendarDreams = dreams.map((dream) => ({
    id: dream.id,
    date: dream.created_at,
    title: dream.diagnosis_result?.title || dream.diagnosis_result?.interpretations?.[0]?.summary || '夢占い結果',
  }));

  // ページネーションリンク生成
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (selectedMonth) params.set('month', selectedMonth);
    if (page > 1) params.set('page', page.toString());
    const query = params.toString();
    return `/dashboard${query ? `?${query}` : ''}`;
  };

  // 月名
  const getMonthName = (monthStr: string) => {
    const [year, month] = monthStr.split('-').map(Number);
    return `${year}年${month}月`;
  };

  return (
    <div className="min-h-screen text-white p-4 pt-24 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    <Moon className="w-8 h-8 text-purple-300" />
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200 font-display">
                        Dream Journal
                    </span>
                </h1>
            </div>

            {dreams.length === 0 ? (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-gray-400 mb-6">まだ診断された夢の記録がありません。</p>
                    <Link href="/" className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors inline-block font-medium">
                        夢占いを始める
                    </Link>
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* カレンダー */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-purple-400" />
                                カレンダー
                            </h2>
                            <DreamCalendar dreams={calendarDreams} selectedMonth={selectedMonth} />
                            <p className="text-xs text-gray-500 mt-3 text-center">
                                月をクリックでその月の記録を表示
                            </p>
                        </div>
                    </div>

                    {/* 夢のリスト */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                <List className="w-5 h-5 text-purple-400" />
                                {selectedMonth ? (
                                    <span>{getMonthName(selectedMonth)}の記録</span>
                                ) : (
                                    <span>夢の記録一覧</span>
                                )}
                            </h2>
                            {selectedMonth && (
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                    フィルター解除
                                </Link>
                            )}
                        </div>

                        {filteredDreams.length === 0 ? (
                            <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-gray-400">
                                    {selectedMonth ? `${getMonthName(selectedMonth)}の記録はありません。` : '記録がありません。'}
                                </p>
                                {selectedMonth && (
                                    <Link href="/dashboard" className="text-purple-400 hover:text-purple-300 text-sm mt-2 inline-block">
                                        全ての記録を見る
                                    </Link>
                                )}
                            </div>
                        ) : (
                            <>
                                {/* 件数表示 */}
                                <p className="text-sm text-gray-400 mb-4">
                                    {totalItems}件中 {startIndex + 1}〜{Math.min(startIndex + ITEMS_PER_PAGE, totalItems)}件を表示
                                </p>

                                <div className="grid gap-4">
                                    {paginatedDreams.map((dream) => {
                                        const result = dream.diagnosis_result;
                                        
                                        return (
                                            <Link 
                                                key={dream.id} 
                                                href={`/result/${dream.id}`}
                                                className="block bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition-all group shadow-lg shadow-black/20"
                                            >
                                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
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
                                                
                                                <h3 className="text-lg font-bold text-indigo-200 mb-2 group-hover:text-purple-300 transition-colors">
                                                    {result.title || result.interpretations?.[0]?.summary || result.summary || "夢占い結果"}
                                                </h3>
                                                
                                                <p className="text-gray-400 text-sm italic line-clamp-2">&quot;{dream.content}&quot;</p>
                                                
                                                <div className="mt-3 text-xs text-purple-400 group-hover:text-purple-300 transition-colors">
                                                    詳細を見る →
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>

                                {/* ページネーション */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-center gap-2 mt-8">
                                        {currentPage > 1 ? (
                                            <Link
                                                href={createPageUrl(currentPage - 1)}
                                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </Link>
                                        ) : (
                                            <div className="p-2 rounded-lg bg-white/5 opacity-50 cursor-not-allowed">
                                                <ChevronLeft className="w-5 h-5" />
                                            </div>
                                        )}

                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                                // 表示するページ番号を制限
                                                if (
                                                    page === 1 ||
                                                    page === totalPages ||
                                                    (page >= currentPage - 1 && page <= currentPage + 1)
                                                ) {
                                                    return (
                                                        <Link
                                                            key={page}
                                                            href={createPageUrl(page)}
                                                            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                                                                page === currentPage
                                                                    ? 'bg-purple-600 text-white'
                                                                    : 'bg-white/5 hover:bg-white/10'
                                                            }`}
                                                        >
                                                            {page}
                                                        </Link>
                                                    );
                                                } else if (
                                                    page === currentPage - 2 ||
                                                    page === currentPage + 2
                                                ) {
                                                    return (
                                                        <span key={page} className="px-2 text-gray-500">
                                                            ...
                                                        </span>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>

                                        {currentPage < totalPages ? (
                                            <Link
                                                href={createPageUrl(currentPage + 1)}
                                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </Link>
                                        ) : (
                                            <div className="p-2 rounded-lg bg-white/5 opacity-50 cursor-not-allowed">
                                                <ChevronRight className="w-5 h-5" />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}
