import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xssClean from "xss-clean";
import hpp from "hpp";
import compression from "compression";
import morgan from "morgan";
import { env } from "./config/env.js";
import router from "./routes/index.js";
import { errorHandler, notFound } from "./middleware/error-handler.js";

export function createApp() {
  const app = express();
  const origins = env.CORS_ORIGIN ? [env.CORS_ORIGIN] : ["http://localhost:3000"];

  app.use(helmet());
  app.use(cors({ origin: origins, credentials: true }));
  app.use(express.json({ limit: "2mb" }));
  app.use(express.urlencoded({ extended: true, limit: "2mb" }));
  app.use(mongoSanitize());
  app.use(xssClean());
  app.use(hpp());
  app.use(compression());

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 200,
      standardHeaders: true,
      legacyHeaders: false
    })
  );

  if (env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
  }

  app.get("/", (_request, response) => {
    response.json({ status: "success", message: "Traveller API" });
  });

  app.use("/api", router);
  app.use(notFound);
  app.use(errorHandler);

  return app;
}
