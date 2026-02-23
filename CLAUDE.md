# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Yume Insight — 日本語のAI夢占いアプリ。Next.js 15（App Router）で構築。Google Gemini APIで夢分析、Supabaseで認証・データベース、MDXで辞典コンテンツを管理。

## コマンド

- `npm run dev` — 開発サーバー起動
- `npm run build` — 本番ビルド
- `npm run lint` — ESLint実行
- `npm start` — 本番サーバー起動

テストフレームワークは未導入。

## アーキテクチャ

### AI夢占いのデータフロー

1. ユーザーがホーム画面（`app/page.tsx`）で夢のテキストまたは音声入力（Web Speech API）
2. フロントエンドが `/api/analyze`（`app/api/analyze/route.ts`）にPOST
3. Gemini APIが `lib/constants.ts` のプロンプトテンプレートで分析
4. `needsMoreInfo=true` の場合、追加質問をユーザーに表示
5. ユーザーの回答を `【追加情報】` マーカー付きで再送信
6. 最終結果をSupabaseの `dreams` テーブルに保存し、`/result/[id]` で表示

### 主要ディレクトリ

- **`app/`** — Next.js App Routerのページ・APIルート
- **`components/`** — 共通コンポーネント。`components/ui/` にshadcn/uiプリミティブ
- **`lib/`** — ユーティリティ、定数、Supabaseクライアント、型定義、レートリミッター
- **`lib/data/`** — 静的データ（辞典カテゴリ、記事メタデータ）
- **`content/dictionary/`** — カテゴリ別MDXファイル（animals, nature, places, actions, emotions, person, situation）
- **`supabase/schema.sql`** — データベーススキーマとRLSポリシー

### 重要ファイル

- `lib/constants.ts` — AIプロンプトテンプレート、エラーメッセージ、モデル設定
- `lib/types.ts` — 主要な型定義（`AnalysisResult`, `DreamRecord`）
- `lib/rate-limit.ts` — インメモリレートリミッター（ゲスト: 20回/10分、認証済み: 60回）
- `lib/mdx.ts` — `gray-matter`によるMDXパース、Reactの`cache()`でキャッシュ
- `lib/supabase/server.ts` / `client.ts` — SSR用・ブラウザ用Supabaseクライアント
- `middleware.ts` — 全ルートでのSupabaseセッション管理

### コンテンツ（MDX辞典）

MDXファイルは `content/dictionary/[category]/[item].mdx` に配置。フロントマター構造:
```yaml
keyword: string
slug: string
category: string
summary: string
description: string
createdAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD
situations: [{ title, meaning }]
faqs: [{ q, a }]
```

### コンポーネント規約

- デフォルトはServer Components。インタラクティブなコンポーネントのみ `'use client'` を付与
- フォームはReact Hook Form + Zodでバリデーション
- トースト通知はSonnerを使用
- ダークテーマ（紫アクセント）、グラスモーフィズムカードパターン（`GlassCard`）

### 認証

Supabase AuthによるGoogle OAuthとメールマジックリンク。認証状態は `hooks/useAuth.ts` で管理。RLSポリシーによるデータベースアクセス制御は `supabase/schema.sql` を参照。

## 環境変数

`.env.local` に設定が必要:
- `GEMINI_API_KEY` — Google Gemini API
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY` — Supabase
- `RESEND_API_KEY` — メール送信（お問い合わせフォーム）
- `NEXT_PUBLIC_BASE_URL` — サイトURL
- `NEXT_PUBLIC_ADSENSE_SLOT` — AdSense

## ブランチ運用

- `main` — 本番環境
- `stage` — 開発環境

## 補足事項

- UIテキストはすべて日本語
- `next.config.ts` で `ignoreBuildErrors: true`（TypeScriptビルドエラーを無視）
- パスエイリアス: `@/*` はプロジェクトルートにマッピング
- Tailwind CSS v4（`@tailwindcss/postcss`使用）
