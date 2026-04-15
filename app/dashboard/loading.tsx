import GradientBackground from '@/components/GradientBackground';

function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-white/8 ${className ?? ''}`} />;
}

export default function DashboardLoading() {
  return (
    <main className="min-h-screen text-white">
      <GradientBackground />
      <div className="relative z-10 container mx-auto px-4 py-10 max-w-5xl space-y-8">
        {/* ページタイトル */}
        <Skeleton className="h-8 w-48" />

        {/* 傾向分析カード */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6 space-y-4">
          <Skeleton className="h-5 w-32" />
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-24" />
            ))}
          </div>
        </div>

        {/* 検索・フィルター */}
        <div className="flex gap-3">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-24" />
        </div>

        {/* 夢カード一覧 */}
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-3">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <div className="flex gap-2">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-12 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
