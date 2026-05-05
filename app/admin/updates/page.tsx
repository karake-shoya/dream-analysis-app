import { redirect } from 'next/navigation';
import { Trash2, Plus, Sparkles } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { isAdmin } from '@/lib/admin';
import GradientBackground from '@/components/GradientBackground';
import { addUpdate, deleteUpdate } from './actions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '更新情報の管理 | Yume Insight',
  robots: 'noindex',
};

export default async function AdminUpdatesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');
  if (!isAdmin(user)) {
    return (
      <main className="min-h-screen text-white flex items-center justify-center">
        <GradientBackground />
        <p className="relative z-10 text-gray-400">アクセス権限がありません。</p>
      </main>
    );
  }

  const { data: updates } = await supabase
    .from('site_updates')
    .select('id, date, label')
    .order('date', { ascending: false })
    .order('created_at', { ascending: false });

  return (
    <main className="min-h-screen text-white">
      <GradientBackground />

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-2xl">
        <div className="mb-10 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold tracking-widest">
            <Sparkles className="w-3 h-3" />
            ADMIN
          </div>
          <h1 className="text-3xl font-black text-white">更新情報の管理</h1>
        </div>

        {/* 追加フォーム */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 mb-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-purple-400" />
            新規追加
          </h2>
          <form action={addUpdate} className="space-y-4">
            <div className="flex gap-3">
              <input
                type="date"
                name="date"
                required
                defaultValue={new Date().toISOString().slice(0, 10)}
                className="w-44 shrink-0 rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-400/60 focus:ring-1 focus:ring-purple-400/30"
              />
              <input
                type="text"
                name="label"
                required
                maxLength={200}
                placeholder="更新内容を入力..."
                className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-400/60 focus:ring-1 focus:ring-purple-400/30"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-purple-600 hover:bg-purple-500 transition-colors text-white font-bold py-2.5 text-sm"
            >
              追加する
            </button>
          </form>
        </div>

        {/* 一覧 */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
          <h2 className="text-lg font-bold text-white mb-4">現在の更新情報（{updates?.length ?? 0} 件）</h2>
          <ol className="space-y-2">
            {updates?.map((item) => (
              <li key={item.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <time className="shrink-0 text-[11px] text-gray-500 font-mono pt-1">{item.date}</time>
                <p className="flex-1 text-sm text-gray-200 leading-relaxed">{item.label}</p>
                <form action={deleteUpdate.bind(null, item.id)}>
                  <button
                    type="submit"
                    className="shrink-0 p-1.5 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-400/10 transition-colors opacity-0 group-hover:opacity-100"
                    title="削除"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </form>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
