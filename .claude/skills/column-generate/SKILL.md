---
name: column-generate
description: Yume Insight（dream-analysis-app）の新規コラム記事を生成する。既存記事との重複を避けてSEO有用なテーマを選定し、page.tsxを生成してPRを作成まで行う。「コラム生成」「新規コラム」「column-generate」などと言われたとき使用。
---

# Yume Insight 新規コラム記事生成

プロジェクトルート: `~/project/dream-analysis-app`

## ステップ1：既存コラム記事の把握

`app/column/` 配下のすべてのサブディレクトリを列挙し、各 `page.tsx` の metadata から以下を抽出する：

- スラッグ（ディレクトリ名）
- title
- description（冒頭100文字）

これにより「カバー済みテーマ」一覧を作る。

## ステップ2：SEO有用な新テーマ候補の選定

夢占い・夢分析ドメインで検索需要が高く、既存コラムと重複しないテーマを **5〜8個** 洗い出す。

### 選定基準

- 「夢占い ○○」「○○ 夢 意味」などのロングテール検索が見込めるテーマ
- ユング心理学・深層心理学との接続が可能
- Yume Insightのトーン（心理学的根拠あり、丁寧な日本語）と合う
- 競合が多い汎用テーマより、具体的・特定なテーマを優先

### 参考テーマ例（既存と重複していれば除外）

- 歯が抜ける夢／追いかけられる夢／空を飛ぶ夢
- 元恋人・元カレ・元カノが出てくる夢
- 仕事の夢／学校の夢
- 蛇が出てくる夢／火の夢／水に溺れる夢
- 死ぬ夢・死んだ人が出てくる夢
- 子供に戻る夢・赤ちゃんの夢
- 家・部屋が出てくる夢（知らない場所）
- 試験に遅刻する夢

### ユーザーへの提示と確認

候補を日本語で提示し、どれを生成するかユーザーに選んでもらう。

ユーザーが「おまかせ」と答えた場合は SEO 観点（検索ボリューム・競合難易度・Yume Insight との親和性）で最優秀な1テーマを自動選定して進む。

## ステップ3：記事構成の設計と承認

選定テーマに対して以下を設計し、ユーザーに提示する：

- **スラッグ**（英数字ハイフン区切り。例: `falling-teeth-dream`）
- **SEO title**（60文字以内、検索キーワードを含む）
- **description**（120〜150文字）
- **H2セクション構成**（3〜5個）
- **FAQ**（3〜5問）
- **参考文献**（ユング関連書籍など）

ユーザーが承認したら次ステップへ。フィードバックがあれば修正して再提案。

## ステップ4：page.tsx の生成

承認された構成で `app/column/[slug]/page.tsx` を新規作成する。

### インポート（必須）

```tsx
import { Metadata } from 'next';
import { /* テーマに合った lucide-react アイコン */ } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHero from '@/components/PageHero';
import AdsenseAd from '@/components/AdsenseAd';
import { siteConfig } from '@/lib/config';
import DreamAnalysisCTA from '@/components/DreamAnalysisCTA';
```

### metadata（必須構造）

```tsx
export const metadata: Metadata = {
  title: '...',
  description: '...',
  alternates: { canonical: '/column/[slug]' },
  openGraph: {
    title: '... | Yume Insight',
    description: '...',
    type: 'article',
    images: [`${siteConfig.baseUrl}/ogp.png`],
  },
  twitter: { card: 'summary_large_image' },
};
```

### faqStructuredData（必須）

FAQPage 型の JSON-LD 構造化データをコンポーネント外に定義し、`<script type="application/ld+json">` で埋め込む。

### ページコンテンツの構成順序

1. `<PageHero title=... subtitle=... />`
2. 導入文ブロック（`rounded-3xl bg-white/5 border border-white/10` カード）
3. 主要セクション × 3〜5（各 H2 に lucide-react アイコン付き）
4. `<AdsenseAd>` を 2 箇所（セクション間）
5. まとめセクション（`bg-linear-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20` グラデーションカード）
6. FAQ セクション（`<details>` accordion）
7. 参考文献
8. 免責事項
9. 関連コンテンツリンク（隣接するコラムまたは `/sleeping-positions`）
10. `<DreamAnalysisCTA />`

### スタイル規約

- カード: `p-5 rounded-2xl bg-white/5 border border-white/10`
- ハイライトテキスト: `text-purple-300 font-bold`
- セクションH3見出し: `text-lg font-bold text-purple-200 mb-2`
- 本文: `text-gray-300 leading-relaxed`

### 内容品質基準

- 各セクションは300〜600文字程度（カード単位）
- ユング心理学の概念（シャドウ、個性化、アニマ/アニムス等）を少なくとも1つ取り上げる
- 免責事項を末尾に必ず記載:
  ```
  ※本ページの内容は、心理学的な一般知識をもとにした情報提供を目的としており、医学的な診断・治療を行うものではありません。
  ```

## ステップ5：PR作成

複数記事を生成する場合は **1つのPRにまとめる**。記事ごとに別ブランチ・別PRを作らないこと。

```bash
# 1ブランチに複数記事をまとめてコミットする
git checkout -b column/batch-[YYYYMMDD]
git add app/column/[slug1]/page.tsx
git commit -m "コラム: [テーマ名1]記事を追加"
git add app/column/[slug2]/page.tsx
git commit -m "コラム: [テーマ名2]記事を追加"
gh pr create \
  --title "コラム: [テーマ名1]・[テーマ名2]（N記事追加）" \
  --body "..." \
  --base main
```

- PRは通常PR（`--draft` なし）
- ベースブランチは `main`（stageブランチは運用していない）
- 1記事だけの場合: ブランチ名は `column/[slug]`

## ステップ6：完了報告

以下を日本語でまとめて報告：

- 作成したPRのURL
- 記事スラッグとtitle
- SEOターゲットキーワード（3〜5個）
- 記事の主要セクション一覧

## 注意事項

- 既存コラムのスラッグと重複するディレクトリを作らない
- `git add -A` / `git add .` は使わず、ファイルを個別に指定する
- センシティブな情報（APIキー等）がコードに含まれていないか確認してからコミット
- TypeScript の明らかな型エラーは修正する（ビルドエラー設定は `ignoreBuildErrors: true` だが品質を保つ）
