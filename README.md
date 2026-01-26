# 🌙 Dream Oracle - AI 夢診断アプリ

AI（Google Gemini）を活用した、神秘的で心温まる夢診断アプリケーションです。
見た夢の内容を記録し、深層心理の分析やアドバイス、ラッキーアイテムを授けます。

## ✨ 特徴

- **AI 夢診断**: Google Gemini 2.5 Flash（または最新モデル）による高精度な夢分析。
- **ユーザー認証**: Supabase Auth による Google / メールアドレスログイン。
- **夢日記（履歴保存）**: ログインユーザーは過去の診断結果をマイページからいつでも振り返れます。
- **SNS シェア**: 診断結果を X (Twitter) で手軽にシェア可能。
- **レスポンシブデザイン**: PC、スマホの両方で見やすい美しい UI。
- **Cloudflare Pages デプロイ**: 高速なエッジネットワークでの配信。

## 🛠️ 技術スタック

- **Framework**: Next.js 15 (App Router)
- **AI**: Google Generative AI (Gemini API)
- **Database/Auth**: Supabase
- **Styling**: Vanilla CSS / Tailwind CSS
- **Deployment**: Cloudflare Pages

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
```

### 4. データベースの準備

Supabase の SQL Editor で `supabase/schema.sql` を実行し、`dreams` テーブルを作成してください。

### 5. ローカル開発サーバーの起動

```bash
npm run dev
```

## 🌐 デプロイ (Cloudflare Pages)

### 1. Build Settings

- **Framework preset**: `Next.js`
- **Build command**: `npx @cloudflare/next-on-pages`
- **Build output directory**: `.vercel/output`

### 2. Compatibility flags

Cloudflare Pages の設定画面から、以下のフラグを追加してください。

- **nodejs_compat** (Production, Preview 両方)

## 📄 ライセンス

© 2024 Dream Oracle. Powered by Gemini.

