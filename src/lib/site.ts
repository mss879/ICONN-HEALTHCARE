/**
 * Central site configuration and shared SEO content.
 * Single source of truth for URLs, contact details, and structured data.
 */

export const siteConfig = {
  name: "Iconn Healthcare",
  legalName: "Iconn Healthcare Pvt Ltd",
  url: "https://iconnhealthcare.org",
  description:
    "Iconn Healthcare is Sri Lanka's leading distributor of high-value in vitro diagnostics (IVD), point of care (POC) devices, laboratory reagents, chemicals, and sterilizing disinfectants.",
  tagline: "Reassuring Quality in Diagnostics",
  locale: "en_LK",
  telephone: "+94 11 592 7514",
  telephoneHref: "tel:+94115927514",
  email: "info@iconnhealthcare.org",
  ogImage: "/og-image.png",
  twitter: "@IconnHealthcare",
  address: {
    street: "# 635, Maradana Road",
    locality: "Colombo 10",
    region: "Western Province",
    postalCode: "01000",
    country: "LK",
    countryName: "Sri Lanka",
  },
  geo: {
    latitude: 6.9271,
    longitude: 79.8612,
  },
  /** Web development & AI partner — backlink target. */
  arcAi: {
    name: "Arc AI",
    url: "https://www.arcai.agency",
    label: "AI-Powered Web Design & Development by Arc AI",
  },
  keywords: [
    "Diagnostics Sri Lanka",
    "In Vitro Diagnostics",
    "IVD Sri Lanka",
    "Point of Care",
    "POC devices",
    "Laboratory Reagents",
    "Clinical Chemistry",
    "Microbiology",
    "Immunology",
    "Molecular Biology",
    "Hospital Disinfectants",
    "Sterilizing Agents",
    "Iconn Healthcare",
    "Colombo",
  ],
} as const;

/** The routes exposed to search engines, used by the sitemap. */
export const siteRoutes: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
];

/** Frequently asked questions — shared by the homepage UI and FAQPage JSON-LD. */
export const faqData = [
  {
    q: "What diagnostic segments does Iconn Healthcare cover?",
    a: "Iconn Healthcare participates in the in vitro diagnostic, point of care (POC), reagents, laboratory reagents / chemicals and disinfectants market segments in Sri Lanka. We offer diagnostic products for clinical chemistry, microbiology, immunology, and molecular biology through our distribution network.",
  },
  {
    q: "Does Iconn participate in Sri Lanka's tender market?",
    a: "Yes. We are active participants in the tender market in Sri Lanka, supplying hospital disinfectants, POC products, and diagnostic reagents to public and private healthcare institutions through the national tender system.",
  },
  {
    q: "What types of disinfectants do you supply?",
    a: "Iconn engages in the identification and import of a variety of surface and instrument sterilizing materials/agents for hospital consumption. These include broad-spectrum bactericidal, virucidal, and fungicidal surface agents, as well as non-corrosive instrument cleaning solutions.",
  },
  {
    q: "Which institutions does Iconn serve?",
    a: "We maintain strong professional relations with valued customers including public and private hospitals & pharmacies, clinical laboratories, blood banks, and clinics to ensure that all diagnostic and sterilization requirements are met satisfactorily.",
  },
  {
    q: "How does Iconn ensure regulatory compliance?",
    a: "We maintain strong professional relations with the Regulatory authorities in Sri Lanka. All medical and laboratory imports are verified to satisfy national standards before distribution to healthcare institutions.",
  },
  {
    q: "Where is Iconn Healthcare located?",
    a: "Our office is located at #635, Maradana Road, Colombo 10, Sri Lanka. We have experienced marketing and sales teams supported by a robust logistics network to ensure optimal market penetration islandwide.",
  },
] as const;

/** Absolute URL helper. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
