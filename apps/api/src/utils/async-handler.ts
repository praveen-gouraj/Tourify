import type { NextFunction, Request, Response } from "express";

export function asyncHandler(handler: (request: Request, response: Response, next: NextFunction) => Promise<void> | void) {
  return (request: Request, response: Response, next: NextFunction) => Promise.resolve(handler(request, response, next)).catch(next);
}
