import type { MetadataRoute } from "next";
import { services } from "./components/services";

const siteUrl = "https://haidurqureshi.com"; // change if your main domain differs

const routes = [
  { path: "", priority: 1 },
  ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.9 })),
  { path: "/about-us", priority: 0.7 },
  { path: "/our-ethical-principles", priority: 0.5 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
