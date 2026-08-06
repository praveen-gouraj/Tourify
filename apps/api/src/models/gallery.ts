import { Schema, model } from "mongoose";
import type { ImageAsset } from "@traveller/shared";

export interface GalleryDocument {
  title: string;
  category: string;
  image: ImageAsset;
  featured: boolean;
}

const gallerySchema = new Schema<GalleryDocument>(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    image: {
      url: { type: String, required: true },
      alt: { type: String, required: true }
    },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const GalleryModel = model<GalleryDocument>("Gallery", gallerySchema);
