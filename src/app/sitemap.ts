import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const routes = ["", "/about", "/services", "/work", "/case-studies", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}
