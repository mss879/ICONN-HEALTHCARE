"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Phone, Mail, ChevronUp } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-gray-300 dark:bg-black border-t border-card-border/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Info & Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Heart className="h-5 w-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                ICONN <span className="text-primary font-medium">Healthcare</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 font-normal leading-relaxed">
              Sri Lanka&apos;s trusted partner in distributing high-value diagnostic systems, point of care, laboratory reagents, and disinfectants. Delivering reassuring quality.
            </p>
            <div className="text-xs uppercase tracking-widest text-primary font-bold">
              Reassuring quality
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products Catalog", href: "/products" },
                { label: "Medical Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Segments */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Key Segments</h3>
            <ul className="space-y-3.5 text-sm">
              {[
                "In Vitro Diagnostics",
                "Point of Care (POC)",
                "Clinical Chemistry Reagents",
                "Microbiology & Molecular Biology",
                "Hospital Surface Sterilization"
              ].map((segment) => (
                <li key={segment} className="text-gray-400">
                  {segment}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  # 635, Maradana Road,<br />
                  Colombo 10, Sri Lanka.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+94115927514" className="hover:text-primary transition-colors">
                  +94 11 592 7514
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@iconnhealthcare.org" className="hover:text-primary transition-colors">
                  info@iconnhealthcare.org
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and Scroll-to-Top */}
        <div className="mt-16 pt-8 border-t border-card-border/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Iconn Healthcare Pvt Ltd. All rights reserved. Sri Lanka.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span>Designed &amp; developed by</span>
              <a
                href={siteConfig.arcAi.url}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center transition-opacity duration-200 hover:opacity-80"
                title={siteConfig.arcAi.label}
                aria-label={siteConfig.arcAi.label}
              >
                <Image
                  src="/arclogo.webp"
                  alt="Arc AI — AI-powered web design and development agency in Sri Lanka"
                  width={28}
                  height={28}
                  className="h-6 w-auto object-contain transition-transform duration-200 group-hover:scale-110"
                />
              </a>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center h-10 w-10 rounded-xl bg-card-bg/10 border border-card-border/20 text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-md"
            title="Back to top"
          >
            <ChevronUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
