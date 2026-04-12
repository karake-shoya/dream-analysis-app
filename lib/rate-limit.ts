import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type ConsumeParams = {
  key: string;
  limit: number;
  windowMs: number;
};

type ConsumeResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

// ミリ秒を Upstash の Duration 文字列に変換
function msToUpstashDuration(ms: number): `${number} ${"ms" | "s" | "m" | "h" | "d"}` {
  const s = ms / 1000;
  if (s % 3600 === 0) return `${s / 3600} h`;
  if (s % 60 === 0) return `${s / 60} m`;
  return `${s} s`;
}

// limit/windowMs の組み合わせごとに Ratelimit インスタンスをキャッシュ
const instanceCache = new Map<string, Ratelimit>();

function getRatelimiter(limit: number, windowMs: number): Ratelimit {
  const cacheKey = `${limit}:${windowMs}`;
  if (instanceCache.has(cacheKey)) return instanceCache.get(cacheKey)!;

  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(limit, msToUpstashDuration(windowMs)),
    prefix: "yume:rl",
  });
  instanceCache.set(cacheKey, ratelimit);
  return ratelimit;
}

// --- 開発用フォールバック（Upstash 環境変数がない場合）---
const FALLBACK_KEY = "__dreamRateLimitStore__";
type RateLimitStore = Map<string, number[]>;

function getFallbackStore(): RateLimitStore {
  const g = globalThis as typeof globalThis & { [FALLBACK_KEY]?: RateLimitStore };
  if (!g[FALLBACK_KEY]) g[FALLBACK_KEY] = new Map();
  return g[FALLBACK_KEY]!;
}

function fallbackConsumeRateLimit({ key, limit, windowMs }: ConsumeParams): ConsumeResult {
  const now = Date.now();
  const store = getFallbackStore();
  const current = (store.get(key) ?? []).filter((t) => t > now - windowMs);

  if (current.length >= limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((current[0] + windowMs - now) / 1000)),
    };
  }
  current.push(now);
  store.set(key, current);
  return { allowed: true, remaining: limit - current.length, retryAfterSeconds: 0 };
}

// -----------------------------------------------------------

export async function consumeRateLimit(params: ConsumeParams): Promise<ConsumeResult> {
  // 環境変数がない場合（ローカル開発）はインメモリにフォールバック
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return fallbackConsumeRateLimit(params);
  }

  const { key, limit, windowMs } = params;
  const ratelimiter = getRatelimiter(limit, windowMs);
  const { success, remaining, reset } = await ratelimiter.limit(key);

  return {
    allowed: success,
    remaining,
    retryAfterSeconds: success ? 0 : Math.max(1, Math.ceil((reset - Date.now()) / 1000)),
  };
}
