import { Router } from "express";
import { galleryController } from "../controllers/gallery-controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.js";

const router = Router();

router.get("/", galleryController.getAll);
router.get("/:id", galleryController.getOne);
router.post("/", authenticate, authorizeRoles("admin", "editor"), galleryController.create);
router.patch("/:id", authenticate, authorizeRoles("admin", "editor"), galleryController.update);
router.delete("/:id", authenticate, authorizeRoles("admin"), galleryController.remove);

export default router;
