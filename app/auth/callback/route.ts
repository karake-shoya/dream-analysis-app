import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const runtime = 'edge'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const { searchParams } = requestUrl
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  // Netlify のリバースプロキシ環境では request.url の origin が内部 URL になることがあるため
  // x-forwarded-host ヘッダーを優先し、なければ環境変数のサイト URL を使う
  const forwardedHost = request.headers.get('x-forwarded-host')
  const baseUrl = forwardedHost
    ? `https://${forwardedHost}`
    : (process.env.NEXT_PUBLIC_BASE_URL || requestUrl.origin)

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${baseUrl}${next}`)
    }
  }

  return NextResponse.redirect(`${baseUrl}/auth/auth-code-error`)
}
