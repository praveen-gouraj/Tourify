import { PackageModel } from "../models/package.js";
import { createCrudController } from "../utils/crud.js";

export const packageController = createCrudController(PackageModel);
