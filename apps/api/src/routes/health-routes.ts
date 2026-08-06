import { Router } from "express";

const router = Router();

router.get("/", (_request, response) => {
  response.json({ status: "success", message: "Traveller API is running" });
});

export default router;
