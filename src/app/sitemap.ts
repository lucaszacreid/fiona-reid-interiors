import type { MetadataRoute } from "next";
import { categories } from "@/lib/services";
import { journalPosts } from "@/lib/journal";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/work",
    "/services",
    "/interior-designer-glasgow",
    "/interior-designer-london",
    "/journal",
    "/enquire",
  ].map((path) => ({
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

  const journalRoutes = journalPosts.map((post) => ({
    url: `${siteUrl}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...journalRoutes];
}
