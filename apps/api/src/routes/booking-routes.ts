import { Router } from "express";
import { bookingController } from "../controllers/booking-controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.js";

const router = Router();

router.post("/", bookingController.create);
router.get("/", authenticate, authorizeRoles("admin", "staff"), bookingController.getAll);
router.get("/:id", authenticate, authorizeRoles("admin", "staff"), bookingController.getOne);
router.patch("/:id", authenticate, authorizeRoles("admin", "staff"), bookingController.update);
router.delete("/:id", authenticate, authorizeRoles("admin"), bookingController.remove);

export default router;
