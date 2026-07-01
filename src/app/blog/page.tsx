import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import JsonLd from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { pageOpenGraph } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { blogPosts } from "@/lib/blog";

const title = "Medical & Diagnostic Blog — Insights from Sri Lanka";
const description =
  "Insights, guidelines, and trends in point of care (POC) testing, in vitro diagnostics (IVD), laboratory reagents, and hospital sterilization from Iconn Healthcare, Sri Lanka.";

const blogSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: title,
  description,
  url: absoluteUrl("/blog"),
  publisher: { "@id": `${siteConfig.url}/#organization` },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedISO,
    articleSection: post.category,
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: absoluteUrl("/blog"),
  })),
};

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
  openGraph: pageOpenGraph({ title, description, path: "/blog" }),
};

export default function Page() {
  return (
    <>
      <JsonLd data={[blogSchema, breadcrumbSchema("Blog", "/blog")]} />
      <BlogClient />
    </>
  );
}
