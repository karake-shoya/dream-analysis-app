/**
 * 共通のグラデーション背景コンポーネント
 * 複数ページで使用される星空風のグラデーション背景
 */

interface GradientBackgroundProps {
  variant?: "mystical" | "stellar" | "aurora";
  intensity?: "soft" | "medium" | "strong";
  animated?: boolean;
}

export default function GradientBackground({ 
  variant = "mystical", 
  intensity = "medium", 
  animated = false 
}: GradientBackgroundProps) {
  // 強度に応じた不透明度の設定
  const opacity = intensity === "soft" ? 0.05 : intensity === "strong" ? 0.25 : 0.15;

  return (
    <div 
      className={`fixed inset-0 z-0 pointer-events-none ${animated ? 'animate-pulse-slow' : ''}`} 
      style={{
        background: `
          radial-gradient(circle at 10% 10%, rgba(88, 28, 135, ${opacity}) 0%, transparent 40%),
          radial-gradient(circle at 90% 40%, rgba(49, 46, 129, ${opacity}) 0%, transparent 40%),
          radial-gradient(circle at 30% 80%, rgba(30, 58, 138, ${opacity * 0.7}) 0%, transparent 40%),
          #0f172a
        `
      }}
    />
  );
}

