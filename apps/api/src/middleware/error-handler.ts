import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../utils/app-error.js";

export function notFound(request: Request, _response: Response, next: NextFunction) {
  next(new AppError(`Route not found: ${request.originalUrl}`, 404));
}

export function errorHandler(error: unknown, _request: Request, response: Response, _next: NextFunction) {
  if (error instanceof ZodError) {
    return response.status(400).json({
      status: "fail",
      message: "Validation failed",
      errors: error.flatten()
    });
  }

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: error.status,
      message: error.message
    });
  }

  const fallbackMessage = error instanceof Error ? error.message : "Internal server error";
  return response.status(500).json({
    status: "error",
    message: fallbackMessage
  });
}
