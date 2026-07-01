import { siteConfig, faqData, absoluteUrl } from "@/lib/site";

const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

/** Organization / MedicalBusiness — the primary entity for the whole site. */
export const organizationSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  "@id": orgId,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.ogImage),
  image: absoluteUrl(siteConfig.ogImage),
  description: siteConfig.description,
  slogan: siteConfig.tagline,
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: {
    "@type": "Country",
    name: "Sri Lanka",
  },
  knowsAbout: [
    "In Vitro Diagnostics",
    "Point of Care Testing",
    "Clinical Chemistry Reagents",
    "Microbiology",
    "Immunology",
    "Molecular Biology",
    "Hospital Disinfectants",
    "Sterilization",
  ],
};

/** WebSite entity, linked to the Organization as publisher. */
export const websiteSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: { "@id": orgId },
};

/** FAQPage schema built from the shared FAQ content (Google FAQ rich results). */
export const faqSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

/** BreadcrumbList for a subpage: Home › <name>. */
export function breadcrumbSchema(
  name: string,
  path: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: absoluteUrl(path),
      },
    ],
  };
}

/** A single WebPage entity, tied to the WebSite and Organization. */
export function webPageSchema(
  name: string,
  description: string,
  path: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    inLanguage: "en",
  };
}
