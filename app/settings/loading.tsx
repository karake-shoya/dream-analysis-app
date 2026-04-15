import GradientBackground from '@/components/GradientBackground';

function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-white/8 ${className ?? ''}`} />;
}

export default function SettingsLoading() {
  return (
    <main className="min-h-screen text-white">
      <GradientBackground />
      <div className="relative z-10 container mx-auto px-4 py-10 max-w-2xl space-y-6">
        {/* ページタイトル */}
        <Skeleton className="h-8 w-32" />

        {/* 設定カード × 3 */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-3xl bg-white/5 border border-white/10 p-6 space-y-4">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-28 rounded-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
