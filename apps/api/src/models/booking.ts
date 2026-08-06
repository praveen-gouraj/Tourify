import { Schema, model } from "mongoose";
import type { BookingRequest } from "@traveller/shared";

export interface BookingDocument extends BookingRequest {
  service?: string;
  bookingStatus: "new" | "confirmed" | "completed" | "cancelled";
  source: string;
  notes?: string;
}

const bookingSchema = new Schema<BookingDocument>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    pickup: { type: String, required: true, trim: true },
    destination: { type: String, required: true, trim: true },
    travelDate: { type: String, required: true },
    travelTime: { type: String, required: true },
    vehicleType: { type: String, required: true, trim: true },
    passengers: { type: Number, required: true, min: 1 },
    message: { type: String },
    service: { type: String, default: "Booking" },
    bookingStatus: { type: String, enum: ["new", "confirmed", "completed", "cancelled"], default: "new" },
    source: { type: String, default: "website" },
    notes: { type: String }
  },
  { timestamps: true }
);

export const BookingModel = model<BookingDocument>("Booking", bookingSchema);
