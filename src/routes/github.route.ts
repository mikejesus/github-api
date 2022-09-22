import { Router } from "express";
import { getReposController } from "../controllers/github.controller";



const router = Router();

router.get('/:organization', getReposController)


export { router as githubRouter };
