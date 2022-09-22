import { Router } from "express";
import { githubRouter } from "./github.route";

const router = Router();

router.use(githubRouter);

export default router;
