import { Schema, model, type HydratedDocument } from "mongoose";
import { hashPassword } from "../utils/password.js";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "admin" | "staff" | "editor";
  avatar?: string;
  phone?: string;
  isActive: boolean;
  lastLoginAt?: Date;
}

const userSchema = new Schema<User>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 8, select: false },
    role: { type: String, enum: ["admin", "staff", "editor"], default: "staff" },
    avatar: { type: String },
    phone: { type: String },
    isActive: { type: Boolean, default: true },
    lastLoginAt: { type: Date }
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await hashPassword(this.password);
});

export const UserModel = model<User>("User", userSchema);
export type UserDocument = HydratedDocument<User>;
