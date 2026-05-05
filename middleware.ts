import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

const SOCIAL_CRAWLERS = /facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|TelegramBot|WhatsApp|Discordbot|Pinterest/i

export async function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') ?? ''
  if (SOCIAL_CRAWLERS.test(ua)) {
    return NextResponse.next()
  }

  // Supabase が redirectTo を無視して Site URL に code を送るケースに対応。
  // /auth/callback 以外のページに ?code= が来たら /auth/callback に転送する
  const { pathname, searchParams } = request.nextUrl
  const code = searchParams.get('code')
  if (code && !pathname.startsWith('/auth/')) {
    const callbackUrl = request.nextUrl.clone()
    callbackUrl.pathname = '/auth/callback'
    return NextResponse.redirect(callbackUrl)
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
