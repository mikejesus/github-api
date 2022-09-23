import dotenv from "dotenv";

dotenv.config();

export const APP_PORT = process.env.PORT;

export const GITHUB_AUTH_KEY = process.env.AUTH_KEY;

export const NODE_ENV = process.env.NODE_ENV || "development";

export const HOST = process.env.HOST;

export const REDIS_PORT = 6379 || process.env.REDIS_PORT;