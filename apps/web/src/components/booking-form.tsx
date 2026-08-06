"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { bookingSchema, type BookingSchema } from "@traveller/shared";
import { api } from "@/lib/api";
import { Button, Card, CardBody, FieldLabel, Input, Select, Textarea } from "./ui";

const vehicleOptions = ["Sedan", "SUV", "Innova", "Tempo Traveller", "Mini Bus", "Luxury Coach"];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      pickup: "",
      destination: "",
      travelDate: "",
      travelTime: "",
      vehicleType: "Sedan",
      passengers: 1,
      message: ""
    }
  });

  const onSubmit = async (values: BookingSchema) => {
    setError(null);
    try {
      await api.post("/bookings", values);
      setSubmitted(true);
      reset();
    } catch (submissionError) {
      setSubmitted(false);
      setError("We could not submit your booking request. Please try again.");
      return submissionError;
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardBody className="p-0">
        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="bg-navy-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-200">Quick Booking</p>
            <h2 className="mt-4 text-3xl font-semibold">Plan your next ride in minutes</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Share your journey details and our team will confirm the best vehicle, route, and pricing.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-200">
              <p>Airport pickup and drop</p>
              <p>Outstation cab and holiday transfers</p>
              <p>Corporate and event mobility solutions</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 p-6 sm:p-8 lg:grid-cols-2">
            <div>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" placeholder="Your full name" {...register("name")} />
              {errors.name ? <p className="mt-2 text-xs text-red-600">{errors.name.message}</p> : null}
            </div>
            <div>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input id="phone" placeholder="Mobile number" {...register("phone")} />
              {errors.phone ? <p className="mt-2 text-xs text-red-600">{errors.phone.message}</p> : null}
            </div>
            <div>
              <FieldLabel htmlFor="pickup">Pickup</FieldLabel>
              <Input id="pickup" placeholder="Pickup location" {...register("pickup")} />
              {errors.pickup ? <p className="mt-2 text-xs text-red-600">{errors.pickup.message}</p> : null}
            </div>
            <div>
              <FieldLabel htmlFor="destination">Destination</FieldLabel>
              <Input id="destination" placeholder="Drop location" {...register("destination")} />
              {errors.destination ? <p className="mt-2 text-xs text-red-600">{errors.destination.message}</p> : null}
            </div>
            <div>
              <FieldLabel htmlFor="travelDate">Travel Date</FieldLabel>
              <Input id="travelDate" type="date" {...register("travelDate")} />
              {errors.travelDate ? <p className="mt-2 text-xs text-red-600">{errors.travelDate.message}</p> : null}
            </div>
            <div>
              <FieldLabel htmlFor="travelTime">Travel Time</FieldLabel>
              <Input id="travelTime" type="time" {...register("travelTime")} />
              {errors.travelTime ? <p className="mt-2 text-xs text-red-600">{errors.travelTime.message}</p> : null}
            </div>
            <div>
              <FieldLabel htmlFor="vehicleType">Vehicle Type</FieldLabel>
              <Select id="vehicleType" {...register("vehicleType")}>
                {vehicleOptions.map((vehicle) => (
                  <option key={vehicle} value={vehicle}>
                    {vehicle}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <FieldLabel htmlFor="passengers">Passengers</FieldLabel>
              <Input id="passengers" type="number" min={1} max={99} {...register("passengers", { valueAsNumber: true })} />
              {errors.passengers ? <p className="mt-2 text-xs text-red-600">{errors.passengers.message}</p> : null}
            </div>
            <div className="lg:col-span-2">
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea id="message" placeholder="Share trip notes, luggage details, or special requirements" {...register("message")} />
              {errors.message ? <p className="mt-2 text-xs text-red-600">{errors.message.message}</p> : null}
            </div>
            <div className="lg:col-span-2 flex flex-col gap-3">
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Submitting..." : "Book Now"}
              </Button>
              {submitted ? <p className="text-sm text-emerald-600">Your booking request has been submitted successfully.</p> : null}
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
            </div>
          </form>
        </div>
      </CardBody>
    </Card>
  );
}
