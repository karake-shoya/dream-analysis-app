'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

// Supabase が redirectTo を無視して Site URL に ?code= を送る場合に備え、
// クライアントサイドで code を検出してセッションを確立する
export function AuthCodeHandler() {
  const router = useRouter()

  useEffect(() => {
    const url = new URL(window.location.href)
    const code = url.searchParams.get('code')
    if (!code) return

    const supabase = createClient()
    supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
      url.searchParams.delete('code')
      if (!error) {
        router.replace(url.pathname + (url.search || ''))
        router.refresh()
      } else {
        router.replace('/auth/auth-code-error')
      }
    })
  }, [router])

  return null
}
