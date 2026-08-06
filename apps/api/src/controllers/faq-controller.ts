import { FaqModel } from "../models/faq.js";
import { createCrudController } from "../utils/crud.js";

export const faqController = createCrudController(FaqModel);
