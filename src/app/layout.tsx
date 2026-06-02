import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iconn Healthcare | Reassuring Quality Diagnostics in Sri Lanka",
  description: "Iconn Healthcare is Sri Lanka's leading distributor of high-value in vitro diagnostics (IVD), point of care (POC) devices, laboratory reagents, chemicals, and sterilizing disinfectants.",
  keywords: "Diagnostics, Point of Care, POC, Reagents, Clinical Chemistry, Microbiology, Immunology, Molecular Biology, Sterilizing, Disinfectants, Sri Lanka, Iconn Healthcare",
  metadataBase: new URL("https://iconnhealthcare.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Iconn Healthcare | Reassuring Quality Diagnostics in Sri Lanka",
    description: "Leading distributor of high-value in vitro diagnostics (IVD), POC devices, reagents, and sterilizing disinfectants in Sri Lanka.",
    url: "https://iconnhealthcare.org",
    siteName: "Iconn Healthcare",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iconn Healthcare Diagnostics - Reassuring Quality in Diagnostics",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iconn Healthcare | Reassuring Quality Diagnostics in Sri Lanka",
    description: "Leading distributor of high-value in vitro diagnostics (IVD), POC devices, reagents, and sterilizing disinfectants in Sri Lanka.",
    images: ["/og-image.png"],
    creator: "@IconnHealthcare",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
