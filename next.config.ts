import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Pages/Workers don't run Next.js image optimization.
    // Strapi Cloud already exposes resized variants (thumbnail/medium/large/...)
    // and we use the `url` field, which serves the original. unoptimized=true
    // makes next/image emit a plain <img> with the source URL.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
      // Strapi Cloud serves the API and media on different subdomains:
      //   - API:    <slug>.strapiapp.com
      //   - Media:  <slug>.media.strapiapp.com
      {
        protocol: "https",
        hostname: "**.strapiapp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
