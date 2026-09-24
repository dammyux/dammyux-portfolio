import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/work/*", "/case-studies/*"], // Case studies are noindex as requested
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
