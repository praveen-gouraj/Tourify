import { Router } from "express";
import { packageController } from "../controllers/package-controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.js";

const router = Router();

router.get("/", packageController.getAll);
router.get("/:id", packageController.getOne);
router.post("/", authenticate, authorizeRoles("admin", "editor"), packageController.create);
router.patch("/:id", authenticate, authorizeRoles("admin", "editor"), packageController.update);
router.delete("/:id", authenticate, authorizeRoles("admin"), packageController.remove);

export default router;
