import { User } from '@supabase/supabase-js';

/**
 * ユーザーの表示名を取得
 * 優先順位: display_name > full_name > name > メールアドレスの@前
 */
export function getDisplayName(user: User | null): string {
  if (!user) return 'ゲスト';

  const metadata = user.user_metadata;
  
  // カスタム設定された表示名
  if (metadata?.display_name) {
    return metadata.display_name;
  }
  
  // Googleログイン等のフルネーム
  if (metadata?.full_name) {
    return metadata.full_name;
  }
  
  // name フィールド
  if (metadata?.name) {
    return metadata.name;
  }
  
  // メールアドレスの@前の部分
  if (user.email) {
    return user.email.split('@')[0];
  }
  
  return 'ユーザー';
}

/**
 * ユーザーのアバター画像URLを取得
 */
export function getAvatarUrl(user: User | null): string | null {
  if (!user) return null;
  
  const metadata = user.user_metadata;
  
  // Googleログイン等のアバター
  if (metadata?.avatar_url) {
    return metadata.avatar_url;
  }
  
  if (metadata?.picture) {
    return metadata.picture;
  }
  
  return null;
}
