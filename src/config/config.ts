import dotenv from "dotenv";

dotenv.config();

export const APP_PORT = process.env.PORT || 5200;

export const GITHUB_AUTH_KEY = process.env.AUTH_KEY;

export const NODE_ENV = process.env.NODE_ENV || "development";

export const HOST = process.env.HOST;
