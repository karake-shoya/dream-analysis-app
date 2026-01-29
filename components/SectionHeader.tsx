import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SectionHeaderProps {
  icon: LucideIcon;
  children: ReactNode;
  size?: "lg" | "md";
}

/**
 * アイコン付きセクションヘッダー
 */
export default function SectionHeader({ icon: Icon, children, size = "lg" }: SectionHeaderProps) {
  const isLarge = size === "lg";

  return (
    <div className={`flex items-center gap-3 text-purple-300 font-bold ${isLarge ? "text-2xl" : "text-xl"}`}>
      <div className={`${isLarge ? "p-2.5" : "p-2"} rounded-xl bg-purple-500/10 border border-purple-500/20`}>
        <Icon className={isLarge ? "w-6 h-6" : "w-5 h-5"} />
      </div>
      <h2>{children}</h2>
    </div>
  );
}
