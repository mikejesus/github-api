import supertest from "supertest";
import app from "../app";


describe("Github Organization Repo", () => {

    it("should return a 404", async () => {
        const organization = "facebook"
        supertest(app).get(`/api/v1/github/info/${organization}`).expect(404);
    });

});
