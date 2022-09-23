import { IResponse } from "src/interfaces/response.interface";
import { IQuery, IRequest } from "../interfaces/request.interface";
import { octokit } from "../utils/octokit";
import { redisClient } from "../utils/redis";

export const getReposService = async (requestData: IRequest, query: IQuery) => {

  if (typeof query.page === 'string' || typeof query.perPage === 'string') {
    throw new Error('query parameter must be a number')
  }

  if (!requestData.organization) {
    throw new Error('You must supply an owner or organization name')
  }

  //Make a network call and destructure the data response
  const { data } = await octokit.rest.repos.listForUser({
    username: requestData.organization,
    per_page: query.perPage,
    page: query.page,
  });



  //Extract expected fields
  const result = data.map((item: IResponse) => {
    return {
      repoName: item.full_name,
      repoDescription: item.description,
      numberOfStars: item.stargazers_count,
    };
  });

  //format response object
  const finalResponse = {
    page: Number(query.page) ? Number(query.page) : 1,
    perPage: result.length,
    result,
  };


  //Cache response
  await redisClient.setEx(
    `${requestData.organization}:${query.page || 1}:${query.perPage || result.length}`,
    1440,
    JSON.stringify(finalResponse)
  );

  //return response
  return finalResponse;
};

export const getRepoInfoService = async (data: IRequest) => {
  //Make a network call and destructure the data response
  const { data: { full_name, description, stargazers_count }, } = await octokit.rest.repos.get({
    owner: data.organization,
    repo: data.repoName,
  });

  //format response object
  const finalResponse = {
    repoName: full_name,
    repoDescription: description,
    numberOfStars: stargazers_count,
  };

  //Cache Response
  await redisClient.setEx(full_name, 3600, JSON.stringify(finalResponse));

  //Return response
  return finalResponse;
};
