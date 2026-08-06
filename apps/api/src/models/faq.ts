import { Schema, model } from "mongoose";
import type { FaqItem } from "@traveller/shared";

export interface FaqDocument extends FaqItem {
  published: boolean;
}

const faqSchema = new Schema<FaqDocument>(
  {
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true },
    category: { type: String, required: true, trim: true },
    published: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const FaqModel = model<FaqDocument>("Faq", faqSchema);
