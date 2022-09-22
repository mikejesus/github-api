import { NextFunction, Request, Response } from "express";
import { NODE_ENV } from "../config/config";
import ErrorException from "../utils/errors/http-exceptions";

export const errorHandler = (err: ErrorException, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Somethine went wrong";

  res.status(status).json({
    message: message,
    stack: NODE_ENV === "production" ? null : err.stack,
  });
};
