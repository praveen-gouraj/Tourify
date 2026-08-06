import { Router } from "express";
import { analytics } from "../controllers/dashboard-controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.js";

const router = Router();

router.get("/analytics", authenticate, authorizeRoles("admin", "staff", "editor"), analytics);

export default router;
