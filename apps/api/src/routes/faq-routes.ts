import { Router } from "express";
import { faqController } from "../controllers/faq-controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.js";

const router = Router();

router.get("/", faqController.getAll);
router.get("/:id", faqController.getOne);
router.post("/", authenticate, authorizeRoles("admin", "editor"), faqController.create);
router.patch("/:id", authenticate, authorizeRoles("admin", "editor"), faqController.update);
router.delete("/:id", authenticate, authorizeRoles("admin"), faqController.remove);

export default router;
