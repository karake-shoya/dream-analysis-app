---
name: seo-run
description: Yume Insight（dream-analysis-app）のSEO週次分析を実行する。Search Console + GA4のデータを取得し、ClaudeがSEO改善を思考・ファイル修正・PR作成まで行う。「SEO分析を実行」「週次SEO」「seo-run」などと言われたとき使用。
---

# Yume Insight SEO週次分析

## 前提条件チェック

実行前に以下を確認：

1. `~/project/dream-analysis-app/seo-automation` が存在するか
2. `seo-automation/token.json` が存在するか（Google OAuth用）
3. `.env.local` に `SEARCH_CONSOLE_SITE_URL` と `GA4_PROPERTY_ID` が設定されているか

いずれか欠けている場合はユーザーに報告して止まる。

## 実行手順

### ステップ1：データ取得

```bash
cd ~/project/dream-analysis-app/seo-automation && ./venv/bin/python3 fetch_data.py
```

エラー時は内容を日本語で報告し、以降のステップに進まない。

### ステップ1.5：過去のSEO改善PRを確認

直近5件のSEO改善PRで変更済みのファイルを把握する：

```bash
gh pr list --search "SEO 週次" --base stage --state all --limit 5 --json number,title,mergedAt,files
```

取得したファイルパス一覧を記録しておき、ステップ2の分析時に除外する。

### ステップ2：データを読み込んでSEO分析

`seo-automation/reports/latest_data.json` を読み込み、以下の観点でClaudeが直接分析・判断する：

**分析前に、ステップ1.5で確認した変更済みファイルに対応するURLを候補から除外する。**  
除外したURLは「直近修正済み（スキップ）」として一覧に明示し、残った候補のみを優先度付きで提示する。

- **クイックウィン**：検索順位1〜10位なのにCTRが低いページ → title/description改善で即効性あり
- **タイトル改善候補**：高インプレッション・低CTR → クリックを誘う文言に変更
- **コンテンツ強化候補**：11〜20位 → あと一押しで1ページ目に上がれる
- **エンゲージメント改善**：GA4で滞在時間が短い・直帰率が高いページ
- **優良コンテンツ**：GA4でエンゲージメント高いページ → さらに伸ばす施策

分析結果と改善案（優先度付き）をユーザーに日本語で提示する。

### ステップ3：修正の承認を得る

改善案を提示した後、「これらの修正を実行しますか？」とユーザーに確認。
承認されなかった場合はここで終了。

### ステップ4：ファイルを直接修正

対象URLからファイルパスを特定してClaudeが直接修正する：

- `/dictionary/[category]/[slug]` → `content/dictionary/[category]/[slug].mdx` のフロントマター
- `/column/[slug]` → `app/column/[slug]/page.tsx` の metadata
- `/[slug]` → `app/[slug]/page.tsx` の metadata

修正対象：
- `title` / `description`（title_meta系）
- コンテンツ本文（content系・structure系も対象）

### ステップ5：PR作成

```bash
git checkout main && git pull origin main
git checkout -b seo/weekly-YYYYMMDD
git add [変更ファイルを個別に指定]
git commit -m "SEO: 週次改善 YYYY-MM-DD"
gh pr create --title "SEO: 週次改善 YYYY-MM-DD" --body "..." --base main
```

- PRは通常PR（`--draft` なし）
- ベースブランチは `main`

### ステップ6：完了報告

- 作成されたPRのURL
- 修正したファイル一覧と変更内容の要約

を日本語でまとめて報告。

## 注意事項

- `git add -A` や `git add .` は使わず、変更ファイルを個別に指定する
- センシティブな情報（APIキー等）がコードに含まれていないか確認してからコミット
- Gemini APIは使用しない（Claude が直接分析・判断する）
