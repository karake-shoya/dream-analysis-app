'use client'
import { useEffect, useState, useRef } from 'react'
import { LogOut, Menu, User as UserIcon, Settings, ChevronDown, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Logo } from '@/components/Logo'
import AuthModal from '@/components/AuthModal'
import { useAuth } from '@/hooks/useAuth'
import { getDisplayName, getAvatarUrl } from '@/lib/user'

const NAV_LINKS = [
  { name: 'ホーム', href: '/' },
  { name: 'About', href: '/about' },
  { name: '夢占い辞典', href: '/dictionary' },
  { name: '夢占いの考え方', href: '/approach' },
  { name: '正夢とは？', href: '/prophetic-dream' },
  { name: 'カップル寝相診断', href: '/sleeping-positions' },
] as const

export default function Header() {
  const { user, supabase } = useAuth()
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  const userMenuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event) => {
        if (event === 'SIGNED_IN') router.refresh()
        if (event === 'SIGNED_OUT') {
          router.push('/')
          router.refresh()
        }
      }
    )
    return () => subscription.unsubscribe()
  }, [supabase, router])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }
    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isUserMenuOpen])

  const handleLogout = async () => {
    setIsUserMenuOpen(false)
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const displayName = getDisplayName(user)
  const avatarUrl = getAvatarUrl(user)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
          <Link href="/" className="flex items-center group">
            <Logo className="h-8 w-auto text-white group-hover:scale-105 transition-transform" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-purple-300 ${pathname === link.href ? 'text-purple-300' : 'text-gray-400'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium transition-all border border-white/10 shadow-sm"
                >
                  {avatarUrl ? (
                    <img src={avatarUrl} alt={displayName} className="w-6 h-6 rounded-full object-cover" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center">
                      <UserIcon className="w-4 h-4 text-purple-300" />
                    </div>
                  )}
                  <span className="hidden sm:inline max-w-[100px] truncate">{displayName}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-[#1e293b] border border-white/10 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="text-sm font-medium text-white truncate">{displayName}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        マイページ
                        <span className="ml-auto text-xs text-gray-500">記録の確認</span>
                      </Link>
                      <Link
                        href="/settings"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        <Settings className="w-4 h-4 text-purple-400" />
                        セキュリティ設定
                      </Link>
                    </div>
                    <div className="border-t border-white/10 py-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-300 hover:bg-red-500/10 hover:text-red-200 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        ログアウト
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="px-6 py-2 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-full text-sm font-bold shadow-lg shadow-purple-900/20 transition-all hover:scale-105"
              >
                ログイン
              </button>
            )}

            <button
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0f172a] border-b border-white/10 animate-in slide-in-from-top duration-300">
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-lg font-medium hover:text-purple-300 ${pathname === link.href ? 'text-purple-300' : 'text-gray-300'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {user && (
                <>
                  <Link
                    href="/dashboard"
                    className={`block text-lg font-medium hover:text-purple-300 ${pathname === '/dashboard' ? 'text-purple-300' : 'text-gray-300'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    マイページ
                  </Link>
                  <Link
                    href="/settings"
                    className={`block text-lg font-medium hover:text-purple-300 ${pathname === '/settings' ? 'text-purple-300' : 'text-gray-300'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    セキュリティ設定
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {isAuthOpen && (
        <AuthModal supabase={supabase} onClose={() => setIsAuthOpen(false)} />
      )}
    </>
  )
}
