import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export default function GlassCard({ children, className, padding = "md" }: GlassCardProps) {
  const paddingClass = {
    sm: "p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-12",
  }[padding];

  return (
    <div className={cn(
      "bg-white/5 backdrop-blur-md rounded-3xl border border-white/10",
      paddingClass,
      className,
    )}>
      {children}
    </div>
  );
}
