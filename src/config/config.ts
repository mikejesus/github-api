import dotenv from "dotenv";

dotenv.config();

export const APP_PORT = process.env.PORT;

export const GITHUB_AUTH_KEY = process.env.AUTH_KEY || "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";

export const NODE_ENV = process.env.NODE_ENV || "development";

export const REDIS_HOST = process.env.REDIS_HOST;

export const REDIS_PORT = process.env.REDIS_PORT;

export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;

export const REDIS_URL = process.env.REDIS_URL;