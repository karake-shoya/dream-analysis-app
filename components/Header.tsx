'use client'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { LogOut, X, Moon, Menu } from 'lucide-react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function Header() {
  const [user, setUser] = useState<User | null>(null)
  const [isOpen, setIsOpen] = useState(false) // Auth Modal
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  
  const supabase = createClient()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null)
        if (event === 'SIGNED_IN') {
          router.refresh()
        }
        if (event === 'SIGNED_OUT') {
          router.push('/')
          router.refresh()
        }
      }
    )
    return () => subscription.unsubscribe()
  }, [supabase, router])

  const handleGoogleLogin = async () => {
    setLoading(true)
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }
  
  const handleEmailAuth = async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      setMessage('')
      
      try {
          if (isLoginMode) {
              const { error } = await supabase.auth.signInWithPassword({ email, password })
              if (error) throw error
              setIsOpen(false)
          } else {
              const { error } = await supabase.auth.signUp({ email, password })
              if (error) throw error
              setMessage('確認メールを送信しました。メールボックスを確認してください。')
          }
      } catch (err: unknown) {
          const errorMessage = err instanceof Error ? err.message : 'エラーが発生しました';
          setMessage(errorMessage)
      } finally {
          setLoading(false)
      }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const navLinks = [
    { name: 'ホーム', href: '/' },
    { name: 'About', href: '/about' },
    { name: '夢占い辞典', href: '/dictionary' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
              <Moon className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white font-display">yume insight</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-purple-300 ${pathname === link.href ? 'text-purple-300' : 'text-gray-400'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth/Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <Link 
                  href="/dashboard" 
                  className="hidden sm:block px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium transition-all border border-white/10 shadow-sm"
                >
                  マイページ
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-200 backdrop-blur-md rounded-full text-white transition-all border border-white/10 shadow-sm" 
                  title="ログアウト"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsOpen(true)}
                className="px-6 py-2 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-900/20 transition-all hover:scale-105"
              >
                ログイン
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0f172a] border-b border-white/10 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="block text-lg font-medium text-gray-300 hover:text-purple-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {user && (
                <Link 
                  href="/dashboard"
                  className="block text-lg font-medium text-purple-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  マイページ
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal (Same as AuthButton) */}
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 text-gray-300">
           <div className="bg-[#1e293b] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
              </button>
              
              <h2 className="text-2xl font-bold text-white mb-6 text-center">{isLoginMode ? 'ログイン' : '新規登録'}</h2>
              
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors mb-6 shadow-sm"
                disabled={loading}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Googleで{isLoginMode ? 'ログイン' : '登録'}
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                <div className="relative flex justify-center text-sm"><span className="px-2 bg-[#1e293b] text-gray-400">または</span></div>
              </div>

              <form onSubmit={handleEmailAuth} className="space-y-4">
                  <div>
                      <input 
                        type="email" 
                        placeholder="メールアドレス" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                        required
                      />
                  </div>
                  <div>
                      <input 
                        type="password" 
                        placeholder="パスワード" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                        required
                        minLength={6}
                      />
                  </div>
                  
                  {message && <p className="text-sm text-center text-amber-200 bg-amber-900/20 p-2 rounded-lg">{message}</p>}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-3 rounded-xl font-bold bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
                  >
                    {loading ? '処理中...' : (isLoginMode ? 'ログイン' : 'アカウント作成')}
                  </button>
              </form>
              
              <div className="mt-6 text-center">
                  <button 
                    onClick={() => { setIsLoginMode(!isLoginMode); setMessage('') }}
                    className="text-sm text-purple-300 hover:text-purple-200 hover:underline transition-colors"
                  >
                      {isLoginMode ? 'アカウントをお持ちでない方はこちら' : 'すでにアカウントをお持ちの方はこちら'}
                  </button>
              </div>
           </div>
        </div>
      )}
    </>
  )
}
