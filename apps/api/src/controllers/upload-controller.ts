import type { Request, Response } from "express";
import { asyncHandler } from "../utils/async-handler.js";
import { AppError } from "../utils/app-error.js";
import { uploadBufferToCloudinary } from "../utils/cloudinary-upload.js";

export const uploadSingle = asyncHandler(async (request: Request, response: Response) => {
  const file = request.file;
  if (!file) {
    throw new AppError("No file uploaded", 400);
  }

  const uploaded = await uploadBufferToCloudinary(file.buffer, "traveller/uploads");
  response.status(201).json({ status: "success", data: { uploaded } });
});

export const uploadMultiple = asyncHandler(async (request: Request, response: Response) => {
  const files = request.files as Express.Multer.File[] | undefined;
  if (!files?.length) {
    throw new AppError("No files uploaded", 400);
  }

  const uploaded = await Promise.all(files.map((file) => uploadBufferToCloudinary(file.buffer, "traveller/uploads")));
  response.status(201).json({ status: "success", data: { uploaded } });
});
