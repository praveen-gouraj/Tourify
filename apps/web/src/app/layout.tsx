import type { Metadata } from "next";
import "../styles/globals.css";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Traveller | Premium Travel Agency & Taxi Services",
  description:
    "Traveller designs luxury travel experiences, airport transfers, outstation taxis, tour packages, and premium fleet bookings.",
  keywords: ["travel agency", "taxi service", "tour packages", "airport transfer", "luxury travel"]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
