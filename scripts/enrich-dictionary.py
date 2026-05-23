#!/usr/bin/env python3
"""辞典MDXページに title・冒頭テーブル・次に読むセクションを一括追加するスクリプト"""
import os
import re
import sys

DICTIONARY_DIR = os.path.join(os.path.dirname(__file__), '..', 'content', 'dictionary')

# スラッグ→コラムパスのマッピング
SLUG_COLUMN_MAP = {
    'chased':          ('/column/chased-dream',        '追いかけられる夢の意味と対処法'),
    'falling':         ('/column/falling-dream',        '落ちる夢の意味と心理'),
    'falling-teeth':   ('/column/falling-teeth-dream',  '歯が抜ける夢の意味と対処法'),
    'flying':          ('/column/flying-dream',          '空を飛ぶ夢の意味'),
    'naked':           ('/column/naked-dream',           '裸の夢の意味と対処法'),
    'lost':            ('/column/lost-dream',            '道に迷う夢の意味'),
    'die':             ('/column/death-dream',           '死ぬ夢の深層心理'),
    'almost-killed':   ('/column/death-dream',           '死ぬ夢の深層心理'),
    'killing':         ('/column/death-dream',           '死ぬ夢の深層心理'),
    'crying':          ('/column/dream-self-care',       '夢から学ぶセルフケア'),
    'running':         ('/column/chased-dream',          '追いかけられる夢の意味と対処法'),
    'swimming':        ('/column/water-dream',           '水の夢の意味'),
    'snake':           ('/column/snake-dream',           'ヘビの夢の意味と暗示'),
    'baby':            ('/column/baby-dream',            '赤ちゃんの夢の意味'),
    'ex-boyfriend':    ('/column/ex-dream',              '元彼・元彼女の夢の意味'),
    'fire':            ('/column/fire-dream',            '火事・炎の夢の意味'),
    'water':           ('/column/water-dream',           '水の夢の意味'),
    'pregnancy':       ('/column/pregnancy-dream',       '妊娠する夢の意味'),
    'late':            ('/column/late-dream',            '遅刻する夢の意味'),
    'school':          ('/column/school-dream',          '学校の夢の意味'),
    'house':           ('/column/unknown-house-dream',   '知らない家の夢の意味'),
    'parents-home':    ('/column/unknown-house-dream',   '知らない家の夢の意味'),
}

CATEGORY_HINT = {
    'actions':   'シチュエーション別の深層心理を解説',
    'animals':   '縁起・象徴・状況別の意味を解説',
    'emotions':  '感情別・状況別の心理を解説',
    'nature':    'シチュエーション別の意味を解説',
    'person':    '関係性別・状況別の意味を解説',
    'places':    '場所別・状況別の意味を解説',
    'situation': '状況別の深層心理を解説',
}


def split_frontmatter(content: str):
    """フロントマターとボディを分離する。戻り値: (fm_raw, body)"""
    m = re.match(r'^---\n(.*?)\n---\n(.*)', content, re.DOTALL)
    if not m:
        return None, content
    return m.group(1), m.group(2)


def get_fm_value(fm_raw: str, key: str) -> str:
    """フロントマターから単一値フィールドを取得"""
    m = re.search(rf'^{key}:\s*["\']?(.*?)["\']?\s*$', fm_raw, re.MULTILINE)
    return m.group(1).strip('"\'') if m else ''


def parse_situations(fm_raw: str) -> list[dict]:
    """situationsブロックをパースしてリストで返す"""
    situations = []
    # situations: の後のブロックを取得
    m = re.search(r'^situations:\n((?:  .*\n?)*)', fm_raw, re.MULTILINE)
    if not m:
        return situations
    block = m.group(1)
    # 各エントリは "  - title: ..." で始まる
    entries = re.split(r'  - ', block)
    for entry in entries:
        if not entry.strip():
            continue
        title_m = re.search(r'title:\s*"?(.*?)"?\s*$', entry, re.MULTILINE)
        meaning_m = re.search(r'meaning:\s*"?(.*?)"?\s*$', entry, re.MULTILINE)
        if title_m and meaning_m:
            situations.append({
                'title': title_m.group(1).strip('"'),
                'meaning': meaning_m.group(1).strip('"'),
            })
    return situations


def make_title(keyword: str, category: str) -> str:
    hint = CATEGORY_HINT.get(category, '状況別の意味を解説')
    return f'【夢占い】{keyword}の夢の意味は？{hint} | Yume Insight'


def make_intro_table(situations: list[dict]) -> str:
    """situationsの先頭4〜5件から冒頭クイックリファレンステーブルを生成"""
    selected = situations[:5]
    lines = ['| 夢の場面 | 基本的な意味 |', '|---|---|']
    for s in selected:
        title = s['title']
        # meaning の最初の文（句点まで）を抜粋
        meaning = s['meaning']
        short = meaning.split('。')[0] + '。' if '。' in meaning else meaning[:45]
        lines.append(f'| {title} | {short} |')
    return '\n'.join(lines)


def make_next_section(slug: str, keyword: str) -> str:
    lines = ['## 次に読む', '']
    if slug in SLUG_COLUMN_MAP:
        path, label = SLUG_COLUMN_MAP[slug]
        lines.append(f'- {keyword}に関連するコラム → [{label}]({path})')
    lines.append('- 同じ夢を何度も繰り返し見る場合 → [繰り返し夢の意味とは？](/column/repeating-dreams)')
    lines.append('- 怖い夢・悪夢が続く場合 → [怖い夢・悪夢を見やすい人の特徴と対処法](/column/nightmare)')
    lines.append(f'- この夢をAIでさらに深く分析する → [AI夢診断（無料）](/)')
    return '\n'.join(lines)


def insert_title_into_fm(fm_raw: str, title: str) -> str:
    """フロントマターのcreatedAt:行の直前にtitleを挿入"""
    return re.sub(
        r'^(createdAt:)',
        f'title: "{title}"\n\\1',
        fm_raw,
        count=1,
        flags=re.MULTILINE,
    )


def insert_table_into_body(body: str, table: str) -> str:
    """導入セクションの見出し直後（最初の改行後）にテーブルを挿入"""
    # "## 導入" で始まる行の後に空行→テーブル→空行 を挿入
    m = re.search(r'(## 導入[^\n]*\n)', body)
    if not m:
        return body
    pos = m.end()
    return body[:pos] + '\n' + table + '\n\n' + body[pos:]


def process_file(filepath: str) -> bool:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    fm_raw, body = split_frontmatter(content)
    if fm_raw is None:
        print(f'  SKIP (フロントマターなし): {filepath}')
        return False

    keyword  = get_fm_value(fm_raw, 'keyword')
    category = get_fm_value(fm_raw, 'category')
    slug     = get_fm_value(fm_raw, 'slug')
    situations = parse_situations(fm_raw)

    changed = False

    # --- 1. title フィールド追加 ---
    if not re.search(r'^title:', fm_raw, re.MULTILINE):
        fm_raw = insert_title_into_fm(fm_raw, make_title(keyword, category))
        changed = True

    # --- 2. 冒頭テーブル追加（導入セクション直後） ---
    # bodyの先頭500文字にテーブル行がない場合のみ追加
    if situations and '|---|' not in body[:600]:
        body = insert_table_into_body(body, make_intro_table(situations))
        changed = True

    # --- 3. 「次に読む」セクション追加 ---
    if '## 次に読む' not in body:
        body = body.rstrip('\n') + '\n\n' + make_next_section(slug, keyword) + '\n'
        changed = True

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(f'---\n{fm_raw}\n---\n{body}')
        print(f'  更新: {os.path.relpath(filepath)}')
    return changed


def main():
    updated = 0
    skipped = 0
    for root, _, files in os.walk(DICTIONARY_DIR):
        for fname in sorted(files):
            if not fname.endswith('.mdx'):
                continue
            path = os.path.join(root, fname)
            # deceased はインデックス済みのため除外
            if 'deceased' in path:
                continue
            if process_file(path):
                updated += 1
            else:
                skipped += 1
    print(f'\n完了: {updated}件更新 / {skipped}件変更なし')


if __name__ == '__main__':
    main()
