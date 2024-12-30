import { NextApiRequest, NextApiResponse } from "next";
import { checkLimit } from "../../lib/ratelimiter";

const me = async (req: NextApiRequest, res: NextApiResponse) => {
    const ip =
        ((req.headers["x-forwarded-for"] as string) || "").split(" ")[0] ??
        req.headers["x-real-ip"];

    if (await checkLimit(ip)) {
        res.status(429).json({ res: "You are being rate limited." });
    }
    res.status(200).json(req.headers);
};

export default me;
