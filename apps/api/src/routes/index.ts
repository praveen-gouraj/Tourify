import { Router } from "express";
import healthRoutes from "./health-routes.js";
import authRoutes from "./auth-routes.js";
import packageRoutes from "./package-routes.js";
import fleetRoutes from "./fleet-routes.js";
import bookingRoutes from "./booking-routes.js";
import testimonialRoutes from "./testimonial-routes.js";
import faqRoutes from "./faq-routes.js";
import enquiryRoutes from "./enquiry-routes.js";
import galleryRoutes from "./gallery-routes.js";
import dashboardRoutes from "./dashboard-routes.js";
import uploadRoutes from "./upload-routes.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/auth", authRoutes);
router.use("/packages", packageRoutes);
router.use("/fleet", fleetRoutes);
router.use("/bookings", bookingRoutes);
router.use("/testimonials", testimonialRoutes);
router.use("/faqs", faqRoutes);
router.use("/enquiries", enquiryRoutes);
router.use("/gallery", galleryRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/uploads", uploadRoutes);

export default router;
