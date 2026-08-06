import { Router } from "express";
import { login, currentUser } from "../controllers/auth-controller.js";
import { authenticate } from "../middleware/auth.js";
import { validateBody } from "../middleware/validate.js";
import { loginSchema } from "@traveller/shared";

const router = Router();

router.post("/login", validateBody(loginSchema), login);
router.get("/me", authenticate, currentUser);

export default router;
