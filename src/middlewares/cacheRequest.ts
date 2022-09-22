import { Request, Response, NextFunction } from "express";
import { redisClient } from "./../utils/redis";

const cacheRequest = async (req: Request, res: Response, next: NextFunction) => {
    const { organization, repoName } = req.params;
    const { page, perPage } = req.query;

    //Assign cache key based the params and query passed by user
    const cacheKey = repoName ? `${organization}/${repoName}` : `${organization}:${page || 1}:${perPage || 30}`;

    //Get data using cache key
    const data = await redisClient.get(cacheKey);

    if (data) {
        res.status(200).json({
            message: "Records retrieved successfully",
            data: JSON.parse(data),
        });
    } else {
        return next();
    }
};

export default cacheRequest;
