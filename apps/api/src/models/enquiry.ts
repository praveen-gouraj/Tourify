import { Schema, model } from "mongoose";
import type { EnquiryRequest } from "@traveller/shared";

export interface EnquiryDocument extends EnquiryRequest {
  status: "new" | "in-progress" | "closed";
  source: string;
}

const enquirySchema = new Schema<EnquiryDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String },
    phone: { type: String, required: true },
    service: { type: String, required: true, trim: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["new", "in-progress", "closed"], default: "new" },
    source: { type: String, default: "website" }
  },
  { timestamps: true }
);

export const EnquiryModel = model<EnquiryDocument>("Enquiry", enquirySchema);
