import { Router } from "express";
import multer from "multer";
import { uploadMultiple, uploadSingle } from "../controllers/upload-controller.js";
import { authenticate, authorizeRoles } from "../middleware/auth.js";

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 8 * 1024 * 1024 } });

router.post("/single", authenticate, authorizeRoles("admin", "editor"), upload.single("file"), uploadSingle);
router.post("/multiple", authenticate, authorizeRoles("admin", "editor"), upload.array("files", 8), uploadMultiple);

export default router;
