import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/dist/client/components/headers";
import { userAgent } from "next/server";

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const rateLimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(1, "5 s"),
});

const test = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.headers;
    res.status(200).json(data);
};

export default test;
