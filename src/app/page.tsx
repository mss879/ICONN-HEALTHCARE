import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { pageOpenGraph } from "@/lib/metadata";
import { faqSchema, webPageSchema } from "@/lib/structured-data";

const title = `${siteConfig.name} | ${siteConfig.tagline} in Sri Lanka`;

export const metadata: Metadata = {
  title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: pageOpenGraph({ title, description: siteConfig.description }),
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(
            `${siteConfig.name} | ${siteConfig.tagline}`,
            siteConfig.description,
            "/",
          ),
          faqSchema,
        ]}
      />
      <HomeClient />
    </>
  );
}
