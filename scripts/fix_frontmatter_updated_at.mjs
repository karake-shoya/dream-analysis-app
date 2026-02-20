import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = process.cwd();
const TARGET_ROOT = path.join(ROOT, 'content', 'dictionary');
const CUTOFF = new Date('2026-02-20T00:00:00Z');
const DEFAULT_SEED = 20260220;

const seedEnv = process.env.SEED;
const seed = Number.isFinite(Number(seedEnv)) ? Number(seedEnv) : DEFAULT_SEED;

function createRng(initialSeed) {
  let state = (initialSeed >>> 0) || 1;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

const rand = createRng(seed);

function parseYmd(value) {
  if (typeof value !== 'string') return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const d = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

function formatYmd(date) {
  return date.toISOString().slice(0, 10);
}

function daysBetween(a, b) {
  return Math.floor((b.getTime() - a.getTime()) / 86400000);
}

function randomIntInclusive(min, max) {
  return Math.floor(rand() * (max - min + 1)) + min;
}

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile() && full.endsWith('.mdx')) {
      yield full;
    }
  }
}

const skipped = new Map();
const changed = [];

function addSkip(reason) {
  skipped.set(reason, (skipped.get(reason) || 0) + 1);
}

for (const filePath of walk(TARGET_ROOT)) {
  const rel = path.relative(ROOT, filePath).replaceAll(path.sep, '/');
  const raw = fs.readFileSync(filePath, 'utf8');

  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) {
    addSkip('frontmatterなし');
    continue;
  }

  let parsed;
  try {
    parsed = matter(raw);
  } catch {
    addSkip('frontmatter解析失敗');
    continue;
  }

  const data = parsed.data;

  if (!Object.prototype.hasOwnProperty.call(data, 'createdAt')) {
    addSkip('createdAtなし');
    continue;
  }

  const createdAtRaw = data.createdAt;
  const createdAt = parseYmd(createdAtRaw);
  if (!createdAt) {
    addSkip('createdAt形式不正');
    continue;
  }

  if (createdAt > CUTOFF) {
    addSkip('createdAtが締切より未来');
    continue;
  }

  if (createdAt.getTime() === CUTOFF.getTime()) {
    addSkip('createdAtが締切同日');
    continue;
  }

  if (!Object.prototype.hasOwnProperty.call(data, 'updatedAt')) {
    addSkip('updatedAtなし');
    continue;
  }

  const updatedAtRaw = data.updatedAt;
  const oldUpdatedAt = parseYmd(updatedAtRaw);
  if (!oldUpdatedAt) {
    addSkip('updatedAt形式不正');
    continue;
  }

  if (oldUpdatedAt >= createdAt) {
    addSkip('updatedAtがcreatedAt未満ではない');
    continue;
  }

  const start = new Date(createdAt.getTime() + 86400000);
  const maxOffset = daysBetween(start, CUTOFF);
  if (maxOffset < 0) {
    addSkip('updatedAt設定可能範囲なし');
    continue;
  }

  const newUpdatedAtDate = new Date(start.getTime() + randomIntInclusive(0, maxOffset) * 86400000);
  const newUpdatedAt = formatYmd(newUpdatedAtDate);

  const frontmatterOnly = fmMatch[1];
  const updatedLineRe = /^(\s*updatedAt\s*:\s*)(["'])(\d{4}-\d{2}-\d{2})(\2)(\s*)$/m;
  if (!updatedLineRe.test(frontmatterOnly)) {
    addSkip('updatedAt行書き戻し失敗');
    continue;
  }

  const replacedFm = frontmatterOnly.replace(updatedLineRe, (_, p1, q, _d, _q2, p5) => `${p1}${q}${newUpdatedAt}${q}${p5}`);
  const nextRaw = raw.slice(0, fmMatch.index + 4) + replacedFm + raw.slice(fmMatch.index + 4 + frontmatterOnly.length);

  if (nextRaw !== raw) {
    fs.writeFileSync(filePath, nextRaw, 'utf8');
    changed.push({
      file: rel,
      createdAt: formatYmd(createdAt),
      oldUpdatedAt: String(updatedAtRaw),
      newUpdatedAt,
    });
  }
}

const skippedTotal = [...skipped.values()].reduce((sum, n) => sum + n, 0);

console.log(`SEED=${seed}`);
console.log(`変更したファイル数: ${changed.length}`);
console.log(`スキップしたファイル数: ${skippedTotal}`);
console.log('スキップ理由別:');
for (const [reason, count] of [...skipped.entries()].sort((a, b) => a[0].localeCompare(b[0], 'ja'))) {
  console.log(`  - ${reason}: ${count}`);
}
console.log('変更一覧:');
for (const row of changed) {
  console.log(`  - ${row.file}: createdAt=${row.createdAt}, old updatedAt=${row.oldUpdatedAt}, new updatedAt=${row.newUpdatedAt}`);
}
