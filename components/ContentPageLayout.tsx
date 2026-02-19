import { ReactNode } from "react";
import GradientBackground from "@/components/GradientBackground";

interface ContentPageLayoutProps {
  children: ReactNode;
  spacing?: "md" | "lg";
}

export default function ContentPageLayout({ children, spacing = "md" }: ContentPageLayoutProps) {
  return (
    <div className="relative">
      <GradientBackground />
      <div className="relative z-10">
        <main className="container mx-auto px-6 py-16 max-w-5xl">
          <div className={`${spacing === "lg" ? "space-y-20" : "space-y-12"} animate-in fade-in slide-in-from-bottom-4 duration-1000`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
