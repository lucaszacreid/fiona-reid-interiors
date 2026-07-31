import type { MetadataRoute } from "next";
import { categories } from "@/lib/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fiona-reid-interiors.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/work", "/enquire"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryRoutes = categories
    .filter((c) => c !== "all")
    .map((category) => ({
      url: `${siteUrl}/work/${category}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...categoryRoutes];
}
