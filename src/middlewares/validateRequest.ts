import { NextFunction, Request, Response } from "express";

const validate = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err: any) {
    return res.status(500).json({ message: err.message, error: err.name });
  }
};

export default validate;
