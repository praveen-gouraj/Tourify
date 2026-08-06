import type { Request, Response } from "express";
import { asyncHandler } from "../utils/async-handler.js";
import { BookingModel } from "../models/booking.js";
import { PackageModel } from "../models/package.js";
import { FleetModel } from "../models/fleet.js";
import { TestimonialModel } from "../models/testimonial.js";
import { FaqModel } from "../models/faq.js";
import { EnquiryModel } from "../models/enquiry.js";

export const analytics = asyncHandler(async (_request: Request, response: Response) => {
  const [packagesCount, fleetCount, bookingsCount, testimonialsCount, faqsCount, enquiriesCount] = await Promise.all([
    PackageModel.countDocuments(),
    FleetModel.countDocuments(),
    BookingModel.countDocuments(),
    TestimonialModel.countDocuments(),
    FaqModel.countDocuments(),
    EnquiryModel.countDocuments()
  ]);

  const recentBookings = await BookingModel.find().sort({ createdAt: -1 }).limit(5);
  const recentEnquiries = await EnquiryModel.find().sort({ createdAt: -1 }).limit(5);

  response.status(200).json({
    status: "success",
    data: {
      counts: {
        packages: packagesCount,
        fleet: fleetCount,
        bookings: bookingsCount,
        testimonials: testimonialsCount,
        faqs: faqsCount,
        enquiries: enquiriesCount
      },
      recentBookings,
      recentEnquiries
    }
  });
});
