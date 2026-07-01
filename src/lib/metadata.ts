import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/lib/site";

/**
 * Builds a complete Open Graph object for a page.
 *
 * Next.js shallow-merges metadata: a page-level `openGraph` fully REPLACES the
 * one in the root layout (it is not deep-merged). So every page must supply the
 * shared fields — image, type, siteName, locale — via this helper, otherwise the
 * social sharing image is lost.
 */
export function pageOpenGraph(opts: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
}): NonNullable<Metadata["openGraph"]> {
  return {
    type: opts.type ?? "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: opts.path ? absoluteUrl(opts.path) : siteConfig.url,
    title: opts.title,
    description: opts.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: opts.title,
      },
    ],
  };
}
