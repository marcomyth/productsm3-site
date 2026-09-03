import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: false,
  images: {
    // Cloudflare Pages/Workers don't run Next.js image optimization.
    // unoptimized=true makes next/image emit a plain <img> with the source URL.
    unoptimized: true,
    remotePatterns: [
      // Placeholder photography from the Stitch export (aida-public bucket).
      // Replace with real brand photography before shipping to production.
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
