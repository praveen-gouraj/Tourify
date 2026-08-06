import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function createMetadata(options: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const canonical = new URL(options.path ?? "/", siteUrl).toString();
  const image = options.image ?? "/og-image.png";

  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    alternates: {
      canonical
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: options.title,
      description: options.description,
      images: [image]
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
      images: [image]
    }
  };
}
