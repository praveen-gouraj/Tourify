import type { MetadataRoute } from "next";

const routes = [
  "/",
  "/about",
  "/services",
  "/airport-taxi",
  "/local-taxi",
  "/outstation-taxi",
  "/tempo-traveller",
  "/tour-packages",
  "/fleet",
  "/gallery",
  "/testimonials",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7
  }));
}
