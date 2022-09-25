import { Request, Response } from "express";
import { getRepoInfoService, getReposService } from "../services/github.service"


export const getReposController = async (req: Request, res: Response) => {

  try {
    //Get request params from request object
    const { organization } = req.params;
    
    //Prepare data for request
    const data = {
      organization,
      repoName: "",
    };

    //Do an api call 
    const response = await getReposService(data, req.query);

    //Response
    res.status(200).json({
      message: "Records retrieved successfully",
      data: response,
    });
  } catch (error: any) {

    //Error response
    res.status(404).json({
      message: "No record(s) found",
      error: error.message
    });
  }
};

export const getRepoInfoController = async (req: Request, res: Response) => {
  try {
    //Get request params
    const { organization, repoName } = req.params;
    
    //Prepare data for request
    const data = {
      organization,
      repoName,
    };

    if(!organization || !repoName){
     throw new Error("You must enter supply organization name and repo in the form organization/repo e.g facebook/react")
    }
    //Do a request
    const response = await getRepoInfoService(data);
    
    //Response
    res.status(200).json({
      message: "Records retrieved successfully",
      data: response,
    });
  } catch (error:any) {

    //Error Response
    res.status(404).json({
      message: "No record(s) found",
      error: error.message
    });
  }
};
