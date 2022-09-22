import { Request, Response } from "express";

export const getReposController = (req: Request, res: Response)=>{
    res.json({
        message: "Testing endpoint"
    })
}