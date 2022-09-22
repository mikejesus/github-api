import { IQuery, IRequest } from "../interfaces/request.interface";
import { octokit } from "../utils/octokit";

export const getReposService = async (requestData: IRequest, query: IQuery) => {
  const { data } = await octokit.rest.repos.listForUser({
    username: requestData.organization,
    per_page: query.perPage,
    page: query.page,
  });

  const result = data.map((item) => {
    return {
      repoName: item.full_name,
      repoDescription: item.description,
      numberOfStars: item.stargazers_count,
    };
  });

  const finalResponse = {
    page: Number(query.page) ? Number(query.page) : 1,
    perPage: result.length,
    result,
  };


  return finalResponse;
};

export const getRepoInfoService = async (data: IRequest) => {
  const {
    data: { full_name, description, stargazers_count },
  } = await octokit.rest.repos.get({
    owner: data.organization,
    repo: data.repoName,
  });

  const finalResponse = {
    repoName: full_name,
    repoDescription: description,
    numberOfStars: stargazers_count,
  };

  return finalResponse;
};
