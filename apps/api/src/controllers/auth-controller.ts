import type { Request, Response } from "express";
import { AppError } from "../utils/app-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import { comparePassword } from "../utils/password.js";
import { signToken } from "../utils/jwt.js";
import { UserModel } from "../models/user.js";
import type { AuthRequest } from "../middleware/auth.js";

export const login = asyncHandler(async (request: Request, response: Response) => {
  const { email, password } = request.body as { email: string; password: string };

  const user = await UserModel.findOne({ email, isActive: true }).select("+password");
  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const passwordMatches = await comparePassword(password, user.password);
  if (!passwordMatches) {
    throw new AppError("Invalid email or password", 401);
  }

  user.lastLoginAt = new Date();
  await user.save({ validateBeforeSave: false });

  const token = signToken({ userId: user._id.toString(), role: user.role });

  response.status(200).json({
    status: "success",
    token,
    data: {
      user: {
        id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: user.role,
        avatar: user.avatar
      }
    }
  });
});

export const currentUser = asyncHandler(async (request: AuthRequest, response: Response) => {
  response.status(200).json({
    status: "success",
    data: {
      user: request.user
    }
  });
});
