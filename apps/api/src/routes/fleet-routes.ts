import { Router } from "express";
import { fleetController } from "../controllers/fleet-controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.js";

const router = Router();

router.get("/", fleetController.getAll);
router.get("/:id", fleetController.getOne);
router.post("/", authenticate, authorizeRoles("admin", "editor"), fleetController.create);
router.patch("/:id", authenticate, authorizeRoles("admin", "editor"), fleetController.update);
router.delete("/:id", authenticate, authorizeRoles("admin"), fleetController.remove);

export default router;
