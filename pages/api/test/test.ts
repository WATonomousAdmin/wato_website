import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextApiRequest, NextApiResponse } from "next";

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
    const result = await rateLimit.limit("test");
    if (!result.success) {
        res.status(400).json({ message: "The request has been rate limited" });
    }
    res.status(200).json(data);
};

export default test;
