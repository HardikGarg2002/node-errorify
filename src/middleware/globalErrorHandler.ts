import { Request, Response, NextFunction } from "express";
import ValidationErrors from "../errors/ValidationErrors";
import APIError from "../errors/ApiErrors";
import DatabaseError from "../errors/DatabaseError";
import RateLimitError from "../errors/RateLimitError";
import logger from "../utils/logger";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ValidationErrors) {
    logger.warn("Validation error occurred", { errors: err.fieldErrors });
    return res.status(err.status).json(err.toJSON());
  }

  if (err instanceof APIError) {
    logger.error("API error occurred", {
      message: err.message,
      errorCode: err.errorCode,
      status: err.status,
      metaData: err.metadata,
    });
    return res.status(err.status).json({
      message: err.message,
      errorCode: err.errorCode,
    });
  }

  if (err instanceof DatabaseError) {
    logger.error("Database error occurred", {
      message: err.message,
      errorCode: err.errorCode,
      details: err.details,
    });
    return res.status(err.status).json({
      message: err.message,
      errorCode: err.errorCode,
    });
  }

  if (err instanceof RateLimitError) {
    logger.warn("Rate limit exceeded", {
      message: err.message,
      errorCode: err.errorCode,
    });
    return res.status(err.status).json({
      message: err.message,
      errorCode: err.errorCode,
    });
  }

  logger.error("Unexpected error", { stack: err.stack, error: err });
  res.status(500).json({
    message: "Internal Server Error",
    errorCode: "ERR_UNKNOWN",
    status: 500,
  });
};

export default globalErrorHandler;
