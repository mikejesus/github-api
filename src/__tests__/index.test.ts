import supertest from "supertest";
import app from "../app";
import { octokit } from "../utils/octokit";



//Mock data
const repoInfo = {
    full_name: "facebook/react",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    stargazers_count: 195062,
};

//mock octokit
jest.mock("../utils/octokit");

const mockOctokit = jest.mocked(octokit);

describe("Github Organization or Owner Repo",  () => {
    //Clear all mocks after each test case
    afterEach(() => {
        jest.clearAllMocks();
    });

    //Return 404 status code if organization or owner not found
    it("should return a 404 if owner or organization not found", async () => {
        mockOctokit.rest.repos.listForUser.mockRejectedValueOnce({
            message: "Not Found",
        });
        const organization = "unknown"
        await supertest(app).get(`/api/v1/github/repo/info/${organization}`).expect(404);
    });


    //Return 200 status code if an owner or organization is found
    it("should return a 200 status and the list of repos if owner is found", async () => {
        mockOctokit.rest.repos.listForUser.mockImplementationOnce((): Promise<any> => {
            return Promise.resolve({ data: [repoInfo] });
        });
        const organization = "facebook";
        const { body } = await supertest(app).get(`/api/v1/github/repo/info/${organization}`).expect(200);
        console.log('body test', body)
        expect(body.data.result).toBeInstanceOf(Array);
        expect(body.data.result[0].repoName);
        expect(body.data.result[0].repoDescription);
        expect(body.data.result[0].numberOfStars);
    });


    //Return 404 if a repo name is not found 
    it("should return a 404 if a repo name is not found", async () => {
        mockOctokit.rest.repos.get.mockRejectedValueOnce({
            message: "Not Found",
        });
        const organization = "facebook";
        const repoName = "none";
        await supertest(app).get(`/api/v1/github/repo/info/${organization}/${repoName}`).expect(404);
    });


    //Return 200 status code if the repo info is found retrieved and retrieved successfully
    it("should return a 200 status and the repo info", async () => {
        mockOctokit.rest.repos.get.mockImplementationOnce((): Promise<any> => {
            return Promise.resolve({ data: repoInfo });
        });
        const organization = "facebook";
        const repoName = "react";
        const { body } = await supertest(app).get(`/api/v1/github/repo/info/${organization}/${repoName}`).expect(200);
        expect(body.data);
        expect(body.data.repoName).toEqual(`${organization}/${repoName}`);
        expect(body.data.repoDescription).toEqual(repoInfo.description);
    });

});
