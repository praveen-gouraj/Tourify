import { EnquiryModel } from "../models/enquiry.js";
import { createCrudController } from "../utils/crud.js";

export const enquiryController = createCrudController(EnquiryModel);
