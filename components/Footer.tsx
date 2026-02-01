import Link from 'next/link'
import { Logo } from '@/components/Logo'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0B0B10]/80 backdrop-blur-md pt-12 pb-12 mt-auto">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-12">
          <div className="col-span-2 md:col-span-2">
            <Logo className="h-8 w-auto text-white mb-4" />
            <p className="text-gray-500 max-w-xs">
              AIがあなたの夢を分析し、潜在意識からのメッセージをお届けする夢診断アプリです。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-purple-300 transition-colors">ホーム</Link></li>
              <li><Link href="/about" className="hover:text-purple-300 transition-colors">About</Link></li>
              <li><Link href="/dictionary" className="hover:text-purple-300 transition-colors">夢占い辞典</Link></li>
              <li><Link href="/approach" className="hover:text-purple-300 transition-colors">夢診断の考え方</Link></li>
              <li><Link href="/prophetic-dream" className="hover:text-purple-300 transition-colors">正夢とは？</Link></li>
              <li><Link href="/sleeping-positions" className="hover:text-purple-300 transition-colors">寝相でわかる相性診断</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">法務・サポート</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/terms" className="hover:text-purple-300 transition-colors">利用規約</Link></li>
              <li><Link href="/privacy" className="hover:text-purple-300 transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/contact" className="hover:text-purple-300 transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Yume Insight. All rights reserved. Powered by Gemini.</p>
        </div>
      </div>
    </footer>
  )
}
