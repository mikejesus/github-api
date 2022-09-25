import { Router } from "express";
import validate from "./../middlewares/validateRequest";
import { organizationRepoSchema, organizationSchema } from "./../utils/schema";
import { getReposController, getRepoInfoController } from "../controllers/github.controller";
import cacheRequest from "../middlewares/cacheRequest";
const router = Router();

/**
 * @openapi
 * /api/v1/github/repo/info/{organization}:
 *   get:
 *     tags:
 *       - Owner
 *     description: Get all repos that belongs to an owner or organization
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
 *     - name: perPage
 *       in: query
 *       description: Number of records per page
 *       schema:
 *         type: integer
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/:organization", validate(organizationSchema), cacheRequest, getReposController);

/**
 * @openapi
 * /api/v1/github/repo/info/{organization}/{repoName}:
 *   get:
 *     tags:
 *       - RepoInfo
 *     description: Get a repos info by supplying repo name in the form 'owner/repo'
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
router.get("/:organization/:repoName", validate(organizationRepoSchema), cacheRequest, getRepoInfoController);

export { router as githubRouter };
