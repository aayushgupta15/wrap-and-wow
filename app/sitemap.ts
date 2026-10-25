import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.wrapnwow.com";
  return ["", "/products", "/contact"].map((p) => ({
    url: base + p,
    lastModified: new Date(),
  }));
}
