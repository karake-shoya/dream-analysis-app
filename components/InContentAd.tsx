import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';

interface InContentAdProps {
  /** 未指定なら本文中広告用のスロットを使う */
  slot?: string;
  /** 上下マージンの上書き（既定は my-8） */
  className?: string;
}

/**
 * 記事本文中に挟む広告枠。
 * 本文中広告だけを別枠で計測できるよう adsenseSlots.inContent を既定にする
 * （NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT 未設定なら汎用スロットにフォールバックする）。
 */
export default function InContentAd({
  slot = siteConfig.adsenseSlots.inContent,
  className = 'my-8',
}: InContentAdProps) {
  return (
    <div className={`bg-white/5 rounded-2xl p-4 border border-white/10 ${className}`}>
      <AdsenseAd slot={slot} />
    </div>
  );
}
