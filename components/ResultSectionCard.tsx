import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ResultSectionCardProps {
  icon: LucideIcon;
  iconColorClass: string;
  title: string;
  children: ReactNode;
}

/**
 * 結果ページの共通カードコンポーネント
 */
export default function ResultSectionCard({
  icon: Icon,
  iconColorClass,
  title,
  children,
}: ResultSectionCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
      <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center uppercase tracking-widest">
        <Icon className={`w-4 h-4 mr-2 ${iconColorClass}`} />
        {title}
      </h3>
      {children}
    </div>
  );
}
