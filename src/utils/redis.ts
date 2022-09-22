import { createClient } from "redis";
import { HOST, REDIS_PORT } from "../config/config";
export const redisClient = createClient({
  socket: {
    port: REDIS_PORT,
    host: HOST,
  },
});
