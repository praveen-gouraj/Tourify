"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactSchema } from "@traveller/shared";
import { api } from "@/lib/api";
import { Button, FieldLabel, Input, Textarea } from "./ui";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (values: ContactSchema) => {
    await api.post("/enquiries", values);
    setSent(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <Input id="contact-name" {...register("name")} />
          {errors.name ? <p className="mt-2 text-xs text-red-600">{errors.name.message}</p> : null}
        </div>
        <div>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <Input id="contact-email" type="email" {...register("email")} />
          {errors.email ? <p className="mt-2 text-xs text-red-600">{errors.email.message}</p> : null}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <FieldLabel htmlFor="contact-phone">Phone</FieldLabel>
          <Input id="contact-phone" {...register("phone")} />
          {errors.phone ? <p className="mt-2 text-xs text-red-600">{errors.phone.message}</p> : null}
        </div>
        <div>
          <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
          <Input id="contact-subject" {...register("subject")} />
          {errors.subject ? <p className="mt-2 text-xs text-red-600">{errors.subject.message}</p> : null}
        </div>
      </div>
      <div>
        <FieldLabel htmlFor="contact-message">Message</FieldLabel>
        <Textarea id="contact-message" {...register("message")} />
        {errors.message ? <p className="mt-2 text-xs text-red-600">{errors.message.message}</p> : null}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        {sent ? <p className="text-sm text-emerald-600">Thanks. We’ll respond shortly.</p> : null}
      </div>
    </form>
  );
}
