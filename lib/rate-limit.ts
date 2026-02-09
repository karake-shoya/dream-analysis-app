const RATE_LIMIT_STORE_KEY = "__dreamRateLimitStore__";

type RateLimitEntry = number[];

type RateLimitStore = Map<string, RateLimitEntry>;

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

function getStore(): RateLimitStore {
  const globalScope = globalThis as typeof globalThis & {
    [RATE_LIMIT_STORE_KEY]?: RateLimitStore;
  };

  if (!globalScope[RATE_LIMIT_STORE_KEY]) {
    globalScope[RATE_LIMIT_STORE_KEY] = new Map<string, RateLimitEntry>();
  }

  return globalScope[RATE_LIMIT_STORE_KEY]!;
}

export function consumeRateLimit({ key, limit, windowMs }: ConsumeParams): ConsumeResult {
  const now = Date.now();
  const windowStart = now - windowMs;
  const store = getStore();

  const current = (store.get(key) ?? []).filter((timestamp) => timestamp > windowStart);

  if (current.length >= limit) {
    const retryAfterMs = current[0] + windowMs - now;
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)),
    };
  }

  current.push(now);
  store.set(key, current);

  return {
    allowed: true,
    remaining: Math.max(0, limit - current.length),
    retryAfterSeconds: 0,
  };
}
