import { Router } from "express";
import { enquiryController } from "../controllers/enquiry-controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.js";

const router = Router();

router.post("/", enquiryController.create);
router.get("/", authenticate, authorizeRoles("admin", "staff"), enquiryController.getAll);
router.get("/:id", authenticate, authorizeRoles("admin", "staff"), enquiryController.getOne);
router.patch("/:id", authenticate, authorizeRoles("admin", "staff"), enquiryController.update);
router.delete("/:id", authenticate, authorizeRoles("admin"), enquiryController.remove);

export default router;
