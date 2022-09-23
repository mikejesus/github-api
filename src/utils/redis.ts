import { createClient } from "redis";
import { REDIS_URL } from "../config/config";
export const redisClient = createClient({
  // url: REDIS_URL
  socket: {
    port: 19921,
    host: 'redis-19921.c14.us-east-1-3.ec2.cloud.redislabs.com',
  },
  password: 'hHZHGe2gf1CulOBuA1gRuOPaIQbSghm2'

});


// redis://redis-19921.c14.us-east-1-3.ec2.cloud.redislabs.com:19921