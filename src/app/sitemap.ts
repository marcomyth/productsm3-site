import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getBlogPosts } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await getBlogPosts({ pageSize: 1000 });

  return [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/blog`, changeFrequency: "daily", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
