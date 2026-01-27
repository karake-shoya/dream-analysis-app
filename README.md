# 🌙 yume insight - AI 夢診断アプリ

AI（Google Gemini）を活用した、神秘的で心温まる夢診断アプリケーションです。
見た夢の内容を記録し、深層心理の分析やアドバイスを受け取ることができます。

![yume insight Home Preview](./public/images/home-preview.png)

## ✨ 特徴

- **AI 夢診断**: Google Gemini による高精度な夢分析。
- **ユーザー認証**: Supabase Auth による Google / メールアドレスログイン。
- **夢日記（履歴保存）**: ログインユーザーは過去の診断結果をマイページからいつでも振り返れます。
- **お問い合わせ機能**: バリデーション付きのコンタクトフォーム。
- **モダンな UI**: Tailwind CSS と shadcn/ui スタイルの洗練されたレスポンシブデザイン。
- **共通レイアウト**: ヘッダー・フッターの共通化による高いメンテナンス性。

## 🛠️ 技術スタック

- **Framework**: Next.js 15 (App Router)
- **AI**: Google Generative AI (Gemini API)
- **Database/Auth**: Supabase
- **Forms**: React Hook Form, Zod
- **Email**: Resend
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React, React Icons

## 🚀 セットアップ

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd dream-analysis-app
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.local` を作成し、以下の項目を設定してください。

```env
# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend (Optional for contact form)
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=your_admin_email
```

### 4. データベースの準備

Supabase の SQL Editor で以下のテーブルを作成してください。

#### `dreams` テーブル
夢の診断結果を保存するために必要です。詳細は `supabase/schema.sql` を参照してください。
SNSシェア機能を有効にするために、匿名ユーザーのインサートとIDによる公開閲覧を許可する設定になっています。


#### `contacts` テーブル
お問い合わせ内容を保存するために必要です。
```sql
create table contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  subject text not null,
  message text not null
);
```

### 5. ローカル開発サーバーの起動

```bash
npm run dev
```

## 📄 ライセンス

© 2026 yume insight. All rights reserved. Powered by Gemini.
