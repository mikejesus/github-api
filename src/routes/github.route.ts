import { Router } from "express";
import { getReposController, getRepoInfoController } from "../controllers/github.controller";
import cacheRequest from "../middlewares/cacheRequest";
const router = Router();

/** 
 * @openapi 
 * /api/v1/github/repo/info/{organization}:
 *   get:
 *     tags:
 *       - Owner
 *     summary: Get all repos that belongs to an owner or organization
 *     parameters: 
 *     - name: organization
 *       in: path
 *       description: The organization or owner of the repository
 *       required: true
 *     - name: page
 *       in: query
 *       description: Page Number
 *       schema:
 *         type: integer
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */
router.get("/:organization", cacheRequest, getReposController
);



/** 
 * @openapi 
 * /api/v1/github/repo/info/{organization}/{repoName}:
 *   get:
 *     tags:
 *       - RepoInfo 
 *     summary: Get a repos info by supplying repo name in the form 'owner/repo'
 *     parameters: 
 *     - name: organization
 *       in: path
 *       description: The organization or owner of the repository 
 *       required: true
 *     - name: repoName
 *       in: path
 *       description: The repo name of an owner or organization
 *       required: true
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */
router.get("/:organization/:repoName", cacheRequest, getRepoInfoController);

export { router as githubRouter };
