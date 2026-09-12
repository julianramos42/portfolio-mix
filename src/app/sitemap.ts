import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://julianramos.com.ar";
  const now = new Date();

  return [
    { url: `${base}/es`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/en`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/es/video`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/en/video`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}