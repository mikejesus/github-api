import { Octokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";
import { GITHUB_AUTH_KEY } from "../config/config";

const MyOctokit = Octokit.plugin(throttling);
export const octokit = new MyOctokit({
  // auth: process.env.AUTH_KEY,
  auth: GITHUB_AUTH_KEY,
  throttle: {
    onRateLimit: (retryAfter: any, options: { method: any; url: any; request: { retryCount: number } }) => {
      octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`);

      // Retry twice after hitting a rate limit error, then give up
      if (options.request.retryCount <= 2) {
        console.log(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onAbuseLimit: (retryAfter: any, options: { method: any; url: any }) => {
      // does not retry, only logs a warning
      octokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`);
    },
  },
});
