import { Schema, model } from "mongoose";
import slugify from "slugify";
import type { FleetVehicle } from "@traveller/shared";

const fleetSchema = new Schema<FleetVehicle>(
  {
    slug: { type: String, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    capacity: { type: String, required: true },
    features: [{ type: String, required: true }],
    price: { type: String, required: true },
    image: {
      url: { type: String, required: true },
      alt: { type: String, required: true }
    }
  },
  { timestamps: true }
);

fleetSchema.pre("validate", function () {
  if (!this.slug && this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
});

export const FleetModel = model<FleetVehicle>("Fleet", fleetSchema);
