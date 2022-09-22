import { Router } from "express";
import { getReposController, getRepoInfoController } from "../controllers/github.controller";
import cacheRequest from "../middlewares/cacheRequest";

const router = Router();

router.get("/:organization", cacheRequest, getReposController);
router.get("/:organization/:repoName", cacheRequest, getRepoInfoController);

export { router as githubRouter };
