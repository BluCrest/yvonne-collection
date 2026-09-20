import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence workspace root warning (multiple lockfiles)
  turbopack: {
    root: __dirname,
  },
  images: {
    // next/image optimization for product photos
    formats: ["image/avif", "image/webp"],
  },
  // Security & SEO headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
