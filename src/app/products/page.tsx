import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import JsonLd from "@/components/JsonLd";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { pageOpenGraph } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

const title = "Products — IVD, POC Devices, Reagents & Disinfectants";
const description =
  "Explore Iconn Healthcare's catalog: in vitro diagnostic (IVD) systems, point of care (POC) testing devices, clinical chemistry & molecular reagents, and hospital-grade sterilizing disinfectants distributed across Sri Lanka.";

const productNames = [
  "Point of Care (POC) Testing Devices",
  "Clinical Chemistry Reagents",
  "Immunology & Molecular Reagents",
  "Surface Sterilizing Agents",
  "Instrument Disinfectants",
  "In Vitro Diagnostic Systems",
];

const collectionSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: absoluteUrl("/products"),
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: productNames.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },
};

export const metadata: Metadata = {
  title: "Products",
  description,
  keywords: [
    "IVD systems Sri Lanka",
    "POC testing devices",
    "clinical chemistry reagents",
    "molecular reagents",
    "hospital disinfectants",
    "instrument sterilizers",
  ],
  alternates: { canonical: "/products" },
  openGraph: pageOpenGraph({ title, description, path: "/products" }),
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          collectionSchema,
          breadcrumbSchema("Products", "/products"),
        ]}
      />
      <ProductsClient />
    </>
  );
}
