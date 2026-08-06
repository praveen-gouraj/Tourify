import { TestimonialModel } from "../models/testimonial.js";
import { createCrudController } from "../utils/crud.js";

export const testimonialController = createCrudController(TestimonialModel);
