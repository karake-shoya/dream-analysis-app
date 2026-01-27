/**
 * 共通のグラデーション背景コンポーネント
 * 複数ページで使用される星空風のグラデーション背景
 */
export default function GradientBackground() {
  return (
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
  );
}
