import type { Model } from "mongoose";
import type { Request, Response } from "express";
import { asyncHandler } from "./async-handler.js";
import { AppError } from "./app-error.js";

export function createCrudController<T>(model: Model<T>) {
  return {
    create: asyncHandler(async (request: Request, response: Response) => {
      const document = await model.create(request.body);
      response.status(201).json({ status: "success", data: { document } });
    }),
    getAll: asyncHandler(async (_request: Request, response: Response) => {
      const documents = await model.find().sort({ createdAt: -1 });
      response.status(200).json({ status: "success", results: documents.length, data: { documents } });
    }),
    getOne: asyncHandler(async (request: Request, response: Response) => {
      const document = await model.findById(request.params.id);
      if (!document) {
        throw new AppError("Document not found", 404);
      }
      response.status(200).json({ status: "success", data: { document } });
    }),
    update: asyncHandler(async (request: Request, response: Response) => {
      const document = await model.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true });
      if (!document) {
        throw new AppError("Document not found", 404);
      }
      response.status(200).json({ status: "success", data: { document } });
    }),
    remove: asyncHandler(async (request: Request, response: Response) => {
      const document = await model.findByIdAndDelete(request.params.id);
      if (!document) {
        throw new AppError("Document not found", 404);
      }
      response.status(204).json({ status: "success", data: null });
    })
  };
}
