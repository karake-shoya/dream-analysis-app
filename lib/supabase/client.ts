import { createBrowserClient } from '@supabase/ssr'

export const createClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    // Return a dummy client during build to prevent crashes
    return createBrowserClient(
      url || 'https://placeholder.supabase.co',
      anonKey || 'placeholder'
    )
  }

  return createBrowserClient(url, anonKey)
}
