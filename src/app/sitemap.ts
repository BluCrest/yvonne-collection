import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yvonnecollection.org";

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/collections`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/ease`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/ease/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/ease/programs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/ease/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms-of-use`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/accessibility-statement`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/shipping-returns`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${base}/refund-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${base}/imprint`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const productPages = products.map((product) => ({
    url: `${base}/collections/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
