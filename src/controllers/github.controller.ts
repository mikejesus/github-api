import { Request, Response } from "express";
import { getRepoInfoService, getReposService } from "../services/github.service";

export const getReposController = async (req: Request, res: Response) => {
  try {
    const { organization } = req.params;

    const data = {
      organization,
      repoName: "",
    };

    const response = await getReposService(data, req.query);
    res.status(200).json({
      message: "Records retrieved successfully",
      data: response,
    });
  } catch (error) {
    res.status(404).json({
      message: "Not Found",
    });
  }
};

export const getRepoInfoController = async (req: Request, res: Response) => {
  try {
    const { organization, repoName } = req.params;
    const data = {
      organization,
      repoName,
    };

    const response = await getRepoInfoService(data);
    res.status(200).json({
      message: "Records retrieved successfully",
      data: response,
    });
  } catch (error: any) {
    res.status(404).json({
      message: "Could not fetch records",
      error: error.message,
    });
  }
};
