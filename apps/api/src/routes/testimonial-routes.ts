import { Router } from "express";
import { testimonialController } from "../controllers/testimonial-controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.js";

const router = Router();

router.get("/", testimonialController.getAll);
router.get("/:id", testimonialController.getOne);
router.post("/", authenticate, authorizeRoles("admin", "editor"), testimonialController.create);
router.patch("/:id", authenticate, authorizeRoles("admin", "editor"), testimonialController.update);
router.delete("/:id", authenticate, authorizeRoles("admin"), testimonialController.remove);

export default router;
