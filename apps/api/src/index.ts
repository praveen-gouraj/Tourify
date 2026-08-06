import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { connectDatabase } from "./config/database.js";
import { configureCloudinary } from "./config/cloudinary.js";
import { UserModel } from "./models/user.js";

async function bootstrap() {
  await connectDatabase();
  configureCloudinary();
  await ensureAdminUser();

  const app = createApp();
  app.listen(env.PORT, () => {
    console.log(`Traveller API listening on port ${env.PORT}`);
  });
}

async function ensureAdminUser() {
  if (!env.ADMIN_EMAIL || !env.ADMIN_PASSWORD) {
    return;
  }

  const existingAdmin = await UserModel.findOne({ email: env.ADMIN_EMAIL });
  if (existingAdmin) {
    return;
  }

  await UserModel.create({
    firstName: "System",
    lastName: "Admin",
    email: env.ADMIN_EMAIL,
    password: env.ADMIN_PASSWORD,
    role: "admin",
    isActive: true
  });
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
