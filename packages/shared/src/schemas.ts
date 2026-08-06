import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Phone number is required"),
  pickup: z.string().min(3, "Pickup location is required"),
  destination: z.string().min(3, "Destination is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  travelTime: z.string().min(1, "Travel time is required"),
  vehicleType: z.string().min(1, "Vehicle type is required"),
  passengers: z.coerce.number().int().min(1).max(99),
  message: z.string().max(500).optional()
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Phone number is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message is required")
});

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password is required")
});

export const enquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().min(8, "Phone number is required"),
  service: z.string().min(2, "Service is required"),
  message: z.string().min(10, "Message is required")
});

export type BookingSchema = z.infer<typeof bookingSchema>;
export type ContactSchema = z.infer<typeof contactSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type EnquirySchema = z.infer<typeof enquirySchema>;
