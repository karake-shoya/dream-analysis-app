'use client';

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonsProps {
  shareUrl: string;
  shareText: string;
}

export function ShareButtons({ shareUrl, shareText }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      // clipbord API を安全に取得
      const clipboard = typeof navigator !== 'undefined' ? navigator.clipboard : undefined;
      const isSecure = typeof window !== 'undefined' && window.isSecureContext;

      // セキュアコンテキストかつ Clipboard API が存在する場合のみ使用
      if (clipboard && typeof clipboard.writeText === 'function' && isSecure) {
        await clipboard.writeText(shareUrl);
      } else {
        // フォールバック: textarea を使用した従来の方法
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          const successful = document.execCommand('copy');
          if (!successful) throw new Error('copy command failed');
        } finally {
          document.body.removeChild(textArea);
        }
      }
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
      // フォールバックも失敗した場合はアラート
      alert('コピーに失敗しました。URLを手動でコピーしてください。');
    }
  };

  return (
    <div className="md:col-span-3 flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
      <button
        onClick={handleCopyLink}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold transition-all border border-white/10"
      >
        {copied ? (
          <>
            <Check className="w-5 h-5 text-green-400" />
            コピーしました！
          </>
        ) : (
          <>
            <Share2 className="w-5 h-5" />
            URLをコピー
          </>
        )}
      </button>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl border border-white/10 text-center"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
        X でシェアする
      </a>
    </div>
  );
}
