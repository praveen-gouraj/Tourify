import { Schema, model } from "mongoose";
import slugify from "slugify";
import type { TravelPackage } from "@traveller/shared";

const packageSchema = new Schema<TravelPackage>(
  {
    slug: { type: String, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    destination: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    duration: { type: String, required: true, trim: true },
    difficulty: { type: String, enum: ["Easy", "Moderate", "Premium"], default: "Moderate" },
    heroImage: {
      url: { type: String, required: true },
      alt: { type: String, required: true }
    },
    gallery: [
      {
        url: { type: String, required: true },
        alt: { type: String, required: true }
      }
    ],
    overview: { type: String, required: true },
    itinerary: [
      {
        day: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true }
      }
    ],
    included: [{ type: String, required: true }],
    excluded: [{ type: String, required: true }],
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

packageSchema.pre("validate", function () {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
});

export const PackageModel = model<TravelPackage>("Package", packageSchema);
