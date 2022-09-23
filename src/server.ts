import { APP_PORT } from "./config/config";
import app from "./app";
import { redisClient } from "./utils/redis";


const server = app.listen(APP_PORT, async () => {
  await redisClient.connect();
  console.log("Listening on port", APP_PORT);
});
process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  redisClient.disconnect();

  server.close(() => {
    console.log("Server closed");
  });
});

process.on("uncaughtException", (err) => {
  console.error(err.stack);
  redisClient.disconnect();
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error(err);
  redisClient.disconnect();
  process.exit(1);
});
