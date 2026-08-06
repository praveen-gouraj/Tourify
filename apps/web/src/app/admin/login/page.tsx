"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "@traveller/shared";
import { api } from "@/lib/api";
import { Button, Card, CardBody, FieldLabel, Input } from "@/components/ui";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const submit = async (values: LoginSchema) => {
    setError(null);
    try {
      const response = await api.post("/auth/login", values);
      window.localStorage.setItem("traveller_admin_token", response.data.token);
      router.push("/admin");
    } catch {
      setError("Invalid credentials. Please check the admin email and password.");
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardBody className="p-8">
          <div className="section-badge">Admin Login</div>
          <h1 className="mt-4 text-3xl font-semibold text-slate-950">Traveller Dashboard</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">Sign in to manage travel content, bookings, and enquiries.</p>
          <form onSubmit={handleSubmit(submit)} className="mt-8 space-y-5">
            <div>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" {...register("email")} />
              {errors.email ? <p className="mt-2 text-xs text-red-600">{errors.email.message}</p> : null}
            </div>
            <div>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" {...register("password")} />
              {errors.password ? <p className="mt-2 text-xs text-red-600">{errors.password.message}</p> : null}
            </div>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
