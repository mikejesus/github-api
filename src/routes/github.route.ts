import { Router } from "express";
import { getReposController, getRepoInfoController } from '../controllers/github.controller';


const router = Router();

router.get('/:organization', getReposController)
router.get('/:organization/:repoName', getRepoInfoController)


export { router as githubRouter };
