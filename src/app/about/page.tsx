import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import JsonLd from "@/components/JsonLd";
import { pageOpenGraph } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

const title = "About Us — Diagnostic & Laboratory Partner in Sri Lanka";
const description =
  "Learn about Iconn Healthcare, a key distributor of in vitro diagnostics, point of care devices, laboratory reagents, and sterilizing agents to hospitals and labs across Sri Lanka. Our vision, mission, and core values.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about" },
  openGraph: pageOpenGraph({ title, description, path: "/about" }),
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema(title, description, "/about"),
          breadcrumbSchema("About Us", "/about"),
        ]}
      />
      <AboutClient />
    </>
  );
}
