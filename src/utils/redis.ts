import { createClient } from "redis";
import { REDIS_URL } from "../config/config";
export const redisClient = createClient({
  url: REDIS_URL
});
