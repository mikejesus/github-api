import { createClient } from "redis";
export const redisClient = createClient({
    socket: {
        port: 6379,
        host: "127.0.0.1",
    },
});
