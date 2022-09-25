import { Router } from "express";
import { githubRouter } from "./github.route";

const router = Router();

//register github router
router.use(githubRouter);


//Export general router
export default router;
