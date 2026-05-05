import Link from 'next/link'

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#1e293b] border border-white/10 rounded-2xl p-8 w-full max-w-md text-center shadow-2xl">
        <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-white mb-2">ログインに失敗しました</h1>
        <p className="text-gray-400 text-sm mb-6">
          認証コードが無効または期限切れです。<br />
          もう一度ログインをお試しください。
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-colors"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}
