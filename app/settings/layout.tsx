import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'セキュリティ設定',
  description: 'Yume Insightのアカウント設定ページ。表示名の変更、パスワードの変更、アカウントの削除ができます。',
  robots: { index: false, follow: false },
};

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
