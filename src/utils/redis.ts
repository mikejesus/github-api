import { createClient } from "redis";
import { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD } from '../config/config';

export const redisClient = createClient({
  socket: {
    port: Number(REDIS_PORT),
    host: REDIS_HOST,
  },
  password: REDIS_PASSWORD

});
