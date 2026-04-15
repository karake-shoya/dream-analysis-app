import GradientBackground from '@/components/GradientBackground';

// スケルトンブロック共通
function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-white/8 ${className ?? ''}`} />;
}

export default function ResultLoading() {
  return (
    <main className="min-h-screen text-white">
      <GradientBackground />
      <div className="relative z-10 container mx-auto px-4 py-10 max-w-3xl space-y-6">
        {/* ヘッダー部分 */}
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-10 w-2/3" />
        <Skeleton className="h-4 w-40" />

        {/* セクションカード × 5 */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="rounded-3xl bg-white/5 border border-white/10 p-6 space-y-3">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        ))}
      </div>
    </main>
  );
}
