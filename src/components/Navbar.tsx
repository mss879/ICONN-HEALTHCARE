"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initial mount animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      
      tl.fromTo(navRef.current, 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }
      );
      
      tl.fromTo(logoRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1 },
        "-=0.5"
      );

      if (linksRef.current) {
        const links = linksRef.current.querySelectorAll(".nav-link");
        tl.fromTo(links,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1 },
          "-=0.4"
        );
      }

      if (btnRef.current) {
        tl.fromTo(btnRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1 },
          "-=0.3"
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" }
  ];

  return (
    <header 
      ref={navRef} 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-card-border" 
          : "bg-white/80 backdrop-blur-md shadow-sm border-b border-card-border/50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}>
          
          {/* Logo */}
          <Link href="/" aria-label="Iconn Healthcare — home">
            <div ref={logoRef} className="flex items-center cursor-pointer group">
              <Image
                src="/logo.png"
                alt="Iconn Healthcare"
                width={406}
                height={198}
                priority
                className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? "h-8 md:h-9" : "h-9 md:h-11"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div ref={linksRef} className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link relative py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:text-primary ${
                    isActive
                      ? "text-primary"
                      : "text-secondary-light"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* Call to Action Button */}
          <div ref={btnRef} className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="flex items-center space-x-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-secondary-light hover:bg-primary-light hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-md border-t border-card-border shadow-lg animate-fade-in">
          <div className="space-y-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                    isActive 
                      ? "bg-primary text-white" 
                      : "text-secondary-light hover:bg-primary-light hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-card-border">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-primary py-3 text-center text-base font-semibold text-white shadow-lg shadow-teal-500/20 hover:bg-primary-hover"
              >
                <Phone className="h-5 w-5" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
