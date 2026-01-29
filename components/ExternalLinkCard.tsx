import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface ExternalLinkCardProps {
  href: string;
  icon: ReactNode;
  iconBgClass?: string;
  title: string;
  description: string;
}

/**
 * 外部リンクカード
 */
export default function ExternalLinkCard({
  href,
  icon,
  iconBgClass = "bg-black/40 text-white",
  title,
  description,
}: ExternalLinkCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all group shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className={`p-2.5 rounded-xl ${iconBgClass}`}>
          {icon}
        </div>
        <div>
          <p className="font-bold text-white">{title}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple-300 transition-colors" />
    </Link>
  );
}
