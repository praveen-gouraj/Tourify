import { Schema, model } from "mongoose";
import type { Testimonial } from "@traveller/shared";

export interface TestimonialDocument extends Testimonial {
  published: boolean;
}

const testimonialSchema = new Schema<TestimonialDocument>(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    message: { type: String, required: true },
    avatar: {
      url: { type: String },
      alt: { type: String }
    },
    published: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const TestimonialModel = model<TestimonialDocument>("Testimonial", testimonialSchema);
