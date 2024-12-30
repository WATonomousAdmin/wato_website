import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const rateLimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(1, "20 s"),
});

/**
 * Decides whether or not a client should be rate limited
 * @param ip ip address of client
 * @returns true if they should be rate limited
 */
export const checkLimit = async (ip?: string) => {
    if (!ip) {
        return false;
    }
    console.log(`Received request from ${ip}`);
    const rateLimitResult = await rateLimit.limit(ip);
    return !rateLimitResult.success;
};
