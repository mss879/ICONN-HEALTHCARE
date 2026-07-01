import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import JsonLd from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { pageOpenGraph } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

const title = "Contact Iconn Healthcare — Colombo, Sri Lanka";
const description =
  "Get in touch with Iconn Healthcare for diagnostic products, laboratory reagents, POC devices, and distribution partnerships in Sri Lanka. Call +94 11 592 7514 or visit us at Maradana Road, Colombo 10.";

const contactSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: title,
  description,
  url: absoluteUrl("/contact"),
  about: { "@id": `${siteConfig.url}/#organization` },
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
  },
};

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph({ title, description, path: "/contact" }),
};

export default function Page() {
  return (
    <>
      <JsonLd data={[contactSchema, breadcrumbSchema("Contact Us", "/contact")]} />
      <ContactClient />
    </>
  );
}
