import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app-error.js";
import { verifyToken } from "../utils/jwt.js";

export interface AuthRequest extends Request {
  user?: {
    userId: string;
    role: string;
  };
}

export function authenticate(request: AuthRequest, _response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : undefined;

  if (!token) {
    return next(new AppError("Authentication required", 401));
  }

  try {
    request.user = verifyToken(token);
    return next();
  } catch {
    return next(new AppError("Invalid or expired token", 401));
  }
}

export function authorizeRoles(...roles: string[]) {
  return (request: AuthRequest, _response: Response, next: NextFunction) => {
    if (!request.user) {
      return next(new AppError("Authentication required", 401));
    }

    if (!roles.includes(request.user.role)) {
      return next(new AppError("You are not authorized to access this resource", 403));
    }

    return next();
  };
}
