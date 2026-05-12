import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
