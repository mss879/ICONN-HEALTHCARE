"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck, Calendar, Clock, ChevronDown, Building2, Microscope, Dna, Activity, Users, Lightbulb, Award, ClipboardCheck, Settings, HeartHandshake, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Blog data (same as blog page) ─── */
const blogPosts = [
  {
    id: "blog-1",
    category: "Diagnostics",
    title: "The Evolution of Point of Care (POC) Testing in Sri Lanka",
    summary: "Exploring how rapid near-patient diagnostics are accelerating clinical decisions and improving hospital care pathways.",
    date: "May 28, 2026",
    readTime: "5 min read",
  },
  {
    id: "blog-2",
    category: "Hygiene & Safety",
    title: "Hospital Instrument Disinfection & Surface Sterilization Guidelines",
    summary: "A comprehensive analysis on selecting high-level chemical sterilizing agents to satisfy regulatory requirements.",
    date: "May 15, 2026",
    readTime: "7 min read",
  },
  {
    id: "blog-3",
    category: "Lab Technology",
    title: "Understanding In Vitro Diagnostics (IVD) for Modern Laboratories",
    summary: "How advancements in clinical chemistry, microbiology, and molecular biology reagents support precise clinical decisions.",
    date: "April 24, 2026",
    readTime: "6 min read",
  }
];

/* ─── FAQ data ─── */
const faqData = [
  {
    q: "What diagnostic segments does Iconn Healthcare cover?",
    a: "Iconn Healthcare participates in the in vitro diagnostic, point of care (POC), reagents, laboratory reagents / chemicals and disinfectants market segments in Sri Lanka. We offer diagnostic products for clinical chemistry, microbiology, immunology, and molecular biology through our distribution network."
  },
  {
    q: "Does Iconn participate in Sri Lanka's tender market?",
    a: "Yes. We are active participants in the tender market in Sri Lanka, supplying hospital disinfectants, POC products, and diagnostic reagents to public and private healthcare institutions through the national tender system."
  },
  {
    q: "What types of disinfectants do you supply?",
    a: "Iconn engages in the identification and import of a variety of surface and instrument sterilizing materials/agents for hospital consumption. These include broad-spectrum bactericidal, virucidal, and fungicidal surface agents, as well as non-corrosive instrument cleaning solutions."
  },
  {
    q: "Which institutions does Iconn serve?",
    a: "We maintain strong professional relations with valued customers including public and private hospitals & pharmacies, clinical laboratories, blood banks, and clinics to ensure that all diagnostic and sterilization requirements are met satisfactorily."
  },
  {
    q: "How does Iconn ensure regulatory compliance?",
    a: "We maintain strong professional relations with the Regulatory authorities in Sri Lanka. All medical and laboratory imports are verified to satisfy national standards before distribution to healthcare institutions."
  },
  {
    q: "Where is Iconn Healthcare located?",
    a: "Our office is located at #635, Maradana Road, Colombo 10, Sri Lanka. We have experienced marketing and sales teams supported by a robust logistics network to ensure optimal market penetration islandwide."
  }
];

/* ─── Process steps ─── */
const processSteps = [
  {
    step: "01",
    title: "Sourcing",
    desc: "Identifying and partnering with global diagnostic manufacturers to bring cutting-edge IVD, POC, and reagent solutions to Sri Lanka."
  },
  {
    step: "02",
    title: "Import & Compliance",
    desc: "Ensuring all products meet Sri Lankan regulatory standards through strong professional relations with Regulatory authorities."
  },
  {
    step: "03",
    title: "Distribution",
    desc: "A robust logistics network reaching public and private hospitals, pharmacies, clinical labs, and blood banks across the island."
  },
  {
    step: "04",
    title: "Ongoing Support",
    desc: "Experienced marketing and sales teams providing personalized service and technical support to medical professionals."
  }
];

/* ─── Services data ─── */
const services = [
  {
    title: "In Vitro Diagnostics",
    desc: "Mid to high throughput lab systems for clinical chemistry, microbiology, and molecular biology screening across Sri Lanka.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
  },
  {
    title: "Point of Care (POC)",
    desc: "Rapid testing kits and portable analyzers for near-patient testing, providing immediate results for critical diagnostic decisions.",
    iconPath: "M19.5 6c-1.2 0-2.2.7-2.7 1.7L12 12.6 7.2 7.7C6.7 6.7 5.7 6 4.5 6 2.6 6 1 7.6 1 9.5S2.6 13 4.5 13c1.2 0 2.2-.7 2.7-1.7L12 16.4l4.8-5.1c.5 1 1.5 1.7 2.7 1.7 1.9 0 3.5-1.6 3.5-3.5S21.4 6 19.5 6z"
  },
  {
    title: "Laboratory Reagents",
    desc: "High-grade clinical chemistry, immunology, and molecular biology reagents formulated for automated analyzer platforms.",
    iconPath: "M7 2v2h1v14c0 2.21 1.79 4 4 4s4-1.79 4-4V4h1V2H7zm6 16c0 1.1-.9 2-2 2s-2-.9-2-2V8h4v10zm0-12H9V4h4v2z"
  },
  {
    title: "Disinfectants & Sterilization",
    desc: "Surface and instrument sterilizing materials/agents identified and imported for hospital consumption across Sri Lanka.",
    iconPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
  }
];

/* ─── Core Values data ─── */
const coreValues = [
  {
    icon: Users,
    title: "Customer Centric",
    desc: "Everything we do begins with actively listening and collaborating with our customers to address their needs."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We empower all employees to explore and contribute ideas that elevate our product and service solutions."
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Our passion towards continuous improvement is embodied by every employee and the results we achieve."
  },
  {
    icon: ShieldCheck,
    title: "Respect",
    desc: "We are a trusted partner valuing integrity, honesty and transparency in all we do."
  },
  {
    icon: ClipboardCheck,
    title: "Accountability",
    desc: "We are accountable for delivering our promises to our customers, suppliers and other stake holders enabling the accomplishment of our shared objectives."
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    desc: "Built to serve customers' needs by maximizing cooperation, innovation and delivering top-tier logistical support."
  }
];

/* ─── Industries data ─── */
const industries = [
  { name: "Public Hospitals", icon: "🏥" },
  { name: "Private Hospitals & Clinics", icon: "🏨" },
  { name: "Clinical Laboratories", icon: "🔬" },
  { name: "Blood Banks", icon: "🩸" },
  { name: "Pharmacies", icon: "💊" }
];

/* ─── FAQ Item Component ─── */
function FaqItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (answerRef.current) {
      gsap.to(answerRef.current, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? "border-primary/40 bg-primary-light/30 shadow-md" : "border-card-border bg-white hover:border-primary/20"}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
      >
        <span className={`font-semibold text-base pr-4 transition-colors ${isOpen ? "text-primary" : "text-secondary"}`}>{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div ref={answerRef} className="overflow-hidden h-0 opacity-0">
        <p className="px-6 pb-5 text-sm text-secondary-light leading-relaxed font-normal">{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const foundationRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      // Reset opacities before animating to prevent flash of content
      gsap.set([
        ".hero-tag", 
        ".hero-title-line", 
        ".hero-desc", 
        ".hero-cta", 
        ".hero-graphic", 
        ".floating-element-1", 
        ".floating-element-2", 
        ".floating-element-3"
      ], { opacity: 0 });

      // Tagline entrance
      tl.fromTo(".hero-tag", 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
      // Smooth slide-up lines for the title
      .fromTo(".hero-title-line", 
        { opacity: 0, y: 45 }, 
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.2, ease: "power2.out" },
        "-=0.55"
      )
      // Description detail reveal
      .fromTo(".hero-desc", 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.75 }, 
        "-=0.5"
      )
      // CTA buttons entrance
      .fromTo(".hero-cta", 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.75 }, 
        "-=0.5"
      )
      // Graphics base ring/shadow frame reveal
      .fromTo(".hero-graphic", 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.8 }, 
        "-=0.6"
      )
      // STEP-BY-STEP SEQUENTIAL DISCOVERY (Tells the company's story)
      // 1. In Vitro Diagnostics card reveal
      .fromTo(".floating-element-1", 
        { opacity: 0, scale: 0.92, y: 30 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.2)" }, 
        "-=0.25"
      )
      // 2. Point of Care card reveal
      .fromTo(".floating-element-2", 
        { opacity: 0, scale: 0.92, y: -30 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.2)" }, 
        "-=0.5"
      )
      // 3. Central POC Devices highlight card reveal
      .fromTo(".floating-element-3", 
        { opacity: 0, scale: 0.75 }, 
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.45"
      );

      // Mild background drift animation for blobs
      gsap.to(".hero-bg-blob-1", {
        x: 40,
        y: 25,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".hero-bg-blob-2", {
        x: -30,
        y: -20,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Infinitely rotate background decorative rings in opposite directions
      gsap.to(".hero-ring-1", { rotation: 360, duration: 35, repeat: -1, ease: "none" });
      gsap.to(".hero-ring-2", { rotation: -360, duration: 45, repeat: -1, ease: "none" });

      // Very subtle, natural floating hover drift
      gsap.to(".floating-element-1", { y: 8, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".floating-element-2", { y: -8, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".floating-element-3", { scale: 1.025, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });

      // About section observer
      const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(".about-fade",
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
            );
            aboutObserver.disconnect();
          }
        });
      }, { threshold: 0.1 });
      if (aboutRef.current) aboutObserver.observe(aboutRef.current);

      // Process section observer
      const processObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(".process-step",
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.7, stagger: 0.18, ease: "power3.out" }
            );
            processObserver.disconnect();
          }
        });
      }, { threshold: 0.1 });
      if (processRef.current) processObserver.observe(processRef.current);

      // Services section observer
      const servicesObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(".service-card",
              { opacity: 0, y: 30, scale: 0.96 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" }
            );
            servicesObserver.disconnect();
          }
        });
      }, { threshold: 0.1 });
      if (servicesRef.current) servicesObserver.observe(servicesRef.current);

      // Industries section observer
      const industriesObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(".industry-card",
              { opacity: 0, scale: 0.9 },
              { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" }
            );
            industriesObserver.disconnect();
          }
        });
      }, { threshold: 0.1 });
      if (industriesRef.current) industriesObserver.observe(industriesRef.current);

      // Blog section observer
      const blogObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(".blog-preview",
              { opacity: 0, x: -30 },
              { opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power2.out" }
            );
            blogObserver.disconnect();
          }
        });
      }, { threshold: 0.1 });
      if (blogRef.current) blogObserver.observe(blogRef.current);

      // FAQ section observer
      const faqObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(".faq-item",
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
            );
            faqObserver.disconnect();
          }
        });
      }, { threshold: 0.1 });
      if (faqRef.current) faqObserver.observe(faqRef.current);

      // Foundation ScrollTrigger Pinning and Card Highlighting
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        // Pin the left panel while scrolling the foundation section
        ScrollTrigger.create({
          trigger: foundationRef.current,
          start: "top 120px",
          end: "bottom 80%",
          pin: ".foundation-sticky-left",
          pinSpacing: false,
          anticipatePin: 1,
        });

        // Softly fade in cards as they scroll past the viewport center
        const cards = gsap.utils.toArray(".foundation-card");
        cards.forEach((card: any) => {
          gsap.fromTo(card,
            { opacity: 0.4, scale: 0.97 },
            {
              opacity: 1,
              scale: 1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play reverse play reverse",
              }
            }
          );
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-white text-secondary">
      {/* Background radial soft light */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary-light/40 blur-3xl"></div>
      
      {/* ══════════════════════════════════════════
          SECTION 1: HERO HEADER (unchanged)
      ══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-white via-primary-light/20 to-white overflow-hidden">
        {/* Subtle background animated blobs & coordinates grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
          <div className="absolute hero-bg-blob-1 top-[10%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute hero-bg-blob-2 bottom-[10%] right-[5%] w-[450px] h-[450px] bg-teal-400/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">
            
            {/* Text details */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-7">
              <div className="hero-tag inline-flex items-center space-x-2 rounded-full bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 shadow-sm opacity-0">
                <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-hover">
                  ICONN HEALTHCARE PVT LTD
                </span>
              </div>
              
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-black text-secondary tracking-tight leading-[1.05] select-none">
                <div className="overflow-hidden py-1">
                  <span className="inline-block hero-title-line opacity-0">Reassuring</span>
                </div>
                <div className="overflow-hidden py-1">
                  <span className="inline-block hero-title-line text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600 font-extrabold opacity-0">
                    Quality
                  </span>{" "}
                  <span className="inline-block hero-title-line opacity-0">in Diagnostics.</span>
                </div>
              </h1>
              
              <p className="hero-desc max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-secondary-light font-normal leading-relaxed opacity-0">
                Delivering high-value diagnostic solutions to laboratories, hospitals, and clinics across Sri Lanka. Empowering medical professionals with rapid and accurate results to determine the optimal course of treatment.
              </p>

              {/* Core focus badges */}
              <div className="hero-desc flex flex-wrap justify-center lg:justify-start gap-2 pt-1 opacity-0">
                {["In Vitro Diagnostics", "Point of Care", "Lab Reagents", "Sterilizing Agents"].map((badge, i) => (
                  <span key={i} className="text-[11px] font-bold px-3 py-1 bg-slate-100/60 border border-slate-200/40 rounded-lg text-secondary-light">
                    {badge}
                  </span>
                ))}
              </div>
              
              <div className="hero-cta flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 opacity-0">
                <Link
                  href="/about"
                  className="group w-full sm:w-auto flex items-center justify-center space-x-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-teal-500/25 hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/products"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-2xl border border-slate-200 bg-white/80 px-8 py-4 text-base font-semibold text-secondary hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <span>Our Products</span>
                </Link>
              </div>
            </div>

            {/* Graphics side: High-End Diagnostic Monitor Panel */}
            <div className="hero-graphic lg:col-span-6 relative flex justify-center items-center opacity-0">
              {/* Spinning background rings */}
              <div className="absolute hero-ring-1 h-96 w-96 rounded-full border border-dashed border-primary/20 pointer-events-none"></div>
              <div className="absolute hero-ring-2 h-[450px] w-[450px] rounded-full border border-dotted border-teal-400/20 pointer-events-none"></div>
              
              {/* Main dashboard frame */}
              <div className="relative w-full max-w-lg rounded-[2.5rem] border border-slate-200/80 bg-white/70 backdrop-blur-xl shadow-2xl p-6 overflow-hidden flex flex-col space-y-6">
                
                {/* Dashboard top bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-mono ml-2">
                      SYS-MONITOR // ACTIVE
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-emerald-600 font-mono">
                      LIVE REAGENT INDEX
                    </span>
                  </div>
                </div>

                {/* Technical data visualization section */}
                <div className="h-28 w-full bg-slate-50/50 rounded-2xl border border-slate-100 p-4 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:10px_10px] opacity-70"></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Calibration Status</span>
                      <p className="text-lg font-bold text-secondary tracking-tight">OPTIMIZED // 99.98%</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sensitivity</span>
                      <p className="text-sm font-semibold text-primary font-mono mt-0.5">High-Level</p>
                    </div>
                  </div>

                  {/* Wavy SVG line representing diagnostic scan data */}
                  <div className="h-10 w-full relative z-10">
                    <svg className="w-full h-full" viewBox="0 0 400 50" fill="none" preserveAspectRatio="none">
                      <path
                        d="M0,25 C40,40 60,10 100,25 C140,40 160,10 200,25 C240,40 280,10 320,30 C360,40 380,20 400,25"
                        stroke="#0d9488"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                      <path
                        d="M0,25 C40,40 60,10 100,25 C140,40 160,10 200,25 C240,40 280,10 320,30 C360,40 380,20 400,25 L400,50 L0,50 Z"
                        fill="url(#teal-grad)"
                        opacity="0.1"
                      />
                      <defs>
                        <linearGradient id="teal-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0d9488" />
                          <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Overlapping modules / details */}
                <div className="space-y-4">
                  {/* Module 1: IVD */}
                  <div className="floating-element-1 flex items-center justify-between p-4 bg-white/90 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2.5 bg-teal-50 text-primary rounded-xl border border-teal-100/50">
                        <Microscope className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-sm font-bold text-secondary">In Vitro Diagnostics</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Clinical chemistry & microbiology systems</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-teal-600 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Module 01
                    </span>
                  </div>

                  {/* Module 2: Point of Care */}
                  <div className="floating-element-2 flex items-center justify-between p-4 bg-white/90 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2.5 bg-teal-50 text-primary rounded-xl border border-teal-100/50">
                        <Dna className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-sm font-bold text-secondary">Point of Care (POC)</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Molecular biology near-patient testing</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-teal-600 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Module 02
                    </span>
                  </div>

                  {/* Module 3: Disinfection */}
                  <div className="floating-element-3 flex items-center justify-between p-4 bg-white/90 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2.5 bg-teal-50 text-primary rounded-xl border border-teal-100/50">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-sm font-bold text-secondary">Sterilization & Hygiene</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Instrument & surface chemical sterilizers</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-teal-600 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Module 03
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2: ABOUT SECTION (NEW)
      ══════════════════════════════════════════ */}
      <section ref={aboutRef} className="py-20 md:py-28 bg-white border-t border-card-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Text details */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="about-fade inline-flex items-center space-x-2 rounded-full bg-primary-light px-4 py-1.5 border border-primary/20 opacity-0 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Who We Are
                </span>
              </div>
              
              <h2 className="about-fade text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight opacity-0">
                A Key Diagnostic & Laboratory Partner in Sri Lanka
              </h2>
              
              <div className="about-fade h-1 w-20 bg-primary mx-auto lg:mx-0 rounded-full opacity-0"></div>
              
              <p className="about-fade max-w-xl mx-auto lg:mx-0 text-base text-secondary-light font-normal leading-relaxed opacity-0">
                Iconn Healthcare participates in the in vitro diagnostic, point of care (POC), reagents, laboratory reagents / chemicals and disinfectants market segments in Sri Lanka. Iconn offers diagnostic products for clinical chemistry, microbiology, immunology, and molecular biology through its distribution network.
              </p>
              
              <p className="about-fade max-w-xl mx-auto lg:mx-0 text-base text-secondary-light font-normal leading-relaxed opacity-0">
                The company aims to better medical decisions by delivering high-value diagnostic solutions to laboratories and other allied institutions operating close to patients and affording the medical professionals the opportunity to more rapidly and accurately determine the course of treatment.
              </p>

              <p className="about-fade max-w-xl mx-auto lg:mx-0 text-base text-secondary-light font-normal leading-relaxed opacity-0">
                Iconn also engages among others in the identification and import of a variety of surface and instrument sterilizing materials/agents for hospital consumption.
              </p>
              
              <div className="about-fade flex justify-center lg:justify-start pt-2 opacity-0">
                <Link
                  href="/about"
                  className="group flex items-center justify-center space-x-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-teal-500/25 hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT: Graphics side */}
            <div className="lg:col-span-5 space-y-6">
              <div className="about-fade relative h-64 md:h-72 w-full overflow-hidden rounded-3xl border border-card-border shadow-md opacity-0">
                <Image
                  src="/colombo_laboratory.png"
                  alt="Iconn Healthcare Laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              
              <div className="about-fade glass p-8 rounded-3xl border border-card-border/80 space-y-6 bg-gradient-to-br from-white to-primary-light/30 shadow-sm opacity-0 text-left">
                <h3 className="text-lg font-bold text-secondary">Our Strategic Advantages</h3>
                <ul className="space-y-4 text-sm text-secondary-light">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>In-depth understanding of the medical diagnostics industry.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Personalized service tailormade for labs and healthcare providers.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Strong relationships with regulatory bodies and public/private hospitals.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Active participant in the national tender market in Sri Lanka.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3: SERVICES OVERVIEW (NEW)
      ══════════════════════════════════════════ */}
      <section ref={servicesRef} className="py-20 md:py-28 bg-gradient-to-b from-white via-primary-light/10 to-white border-y border-card-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
              Comprehensive Diagnostic Solutions
            </h2>
            <p className="text-secondary-light font-normal leading-relaxed">
              Iconn Healthcare operates across four core market segments, delivering products that empower medical professionals to make rapid and accurate diagnostic decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, idx) => (
              <div key={idx} className="service-card group relative bg-white p-8 md:p-10 rounded-3xl border border-card-border hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 opacity-0 overflow-hidden">
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-teal-400 to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start space-x-5">
                  <div className="shrink-0 h-14 w-14 flex items-center justify-center rounded-2xl bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d={svc.iconPath} />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{svc.title}</h3>
                    <p className="text-sm text-secondary-light leading-relaxed font-normal">{svc.desc}</p>
                    <Link
                      href="/products"
                      className="inline-flex items-center space-x-1.5 text-sm font-semibold text-primary hover:text-primary-hover group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4: OUR FOUNDATION — STICKY SCROLL (NEW)
      ══════════════════════════════════════════ */}
      <section ref={foundationRef} className="py-20 md:py-28 bg-white border-t border-card-border/30 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT: Sticky heading panel */}
            <div className="lg:col-span-5 relative">
              <div className="foundation-sticky-left space-y-6 w-full">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">Our Foundation</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
                  Driven by Strong Core Values
                </h2>
                <p className="text-secondary-light font-normal leading-relaxed">
                  We strive for professional excellence and are committed to reliability, integrity, and customer satisfaction in all our business divisions.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-teal-400 rounded-full"></div>
                <p className="text-sm text-secondary-light/70 font-normal leading-relaxed">
                  These principles guide every decision we make — from global sourcing to last-mile delivery at hospitals, labs, and clinics across Sri Lanka.
                </p>
              </div>
            </div>

            {/* RIGHT: Scrolling value cards */}
            <div className="lg:col-span-7 space-y-6">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="foundation-card group p-8 rounded-3xl bg-white border border-card-border hover:border-primary/45 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-start space-x-6"
                  >
                    <div className="shrink-0 h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-500/5 text-teal-600 border border-teal-500/20 shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-sm text-secondary-light leading-relaxed font-normal">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5: OUR PROCESS (NEW)
      ══════════════════════════════════════════ */}
      <section ref={processRef} className="py-20 md:py-28 bg-white border-t border-card-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
              From Global Sourcing to Your Doorstep
            </h2>
            <p className="text-secondary-light font-normal leading-relaxed">
              Our end-to-end process ensures diagnostic products reach Sri Lankan healthcare institutions with full regulatory compliance and reliable support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-step relative group opacity-0">
                {/* Connector line for desktop */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%_-_16px)] w-[calc(100%_-_48px)] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10 z-0"></div>
                )}
                <div className="relative bg-white p-8 rounded-3xl border border-card-border hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 space-y-5">
                  {/* Step number */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-primary/15 group-hover:text-primary/30 transition-colors">{step.step}</span>
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {idx === 0 && <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>}
                      {idx === 1 && <ShieldCheck className="h-5 w-5" />}
                      {idx === 2 && <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>}
                      {idx === 3 && <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-sm text-secondary-light leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6: INDUSTRIES WE SERVE (NEW)
      ══════════════════════════════════════════ */}
      <section ref={industriesRef} className="py-20 md:py-28 bg-white border-t border-card-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Who We Serve</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
              Trusted Across Sri Lanka's Healthcare Ecosystem
            </h2>
            <p className="text-secondary-light font-normal leading-relaxed">
              We maintain strong professional relations with valued customers across the full spectrum of healthcare institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Industry cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industries.map((ind, idx) => (
                <div key={idx} className="industry-card flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-card-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 space-y-3 opacity-0 text-center group cursor-default">
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{ind.icon}</span>
                  <span className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors">{ind.name}</span>
                </div>
              ))}
              {/* Extra card for market stat */}
              <div className="industry-card flex flex-col items-center justify-center p-6 rounded-2xl bg-primary text-white border border-primary shadow-lg space-y-2 opacity-0">
                <span className="text-2xl font-black">Island</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-100">Wide Coverage</span>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-3xl border border-card-border shadow-lg">
              <Image
                src="/sri_lanka_hospital.png"
                alt="Modern healthcare facility in Sri Lanka served by Iconn Healthcare"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-semibold drop-shadow-lg">
                  Serving public and private hospitals, pharmacies, laboratories, clinics, and blood banks across Sri Lanka.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7: BLOG PREVIEW (NEW)
      ══════════════════════════════════════════ */}
      <section ref={blogRef} className="py-20 md:py-28 bg-gradient-to-b from-white via-primary-light/10 to-white border-y border-card-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Latest Insights</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
                Medical & Diagnostic Blog
              </h2>
              <p className="text-secondary-light font-normal max-w-xl">
                Stay informed with our latest updates, industry guidelines, and technological trends in diagnostics, point of care, and hospital hygiene.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-primary font-bold hover:text-primary-hover group shrink-0"
            >
              <span>View All Posts</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href="/blog" className="blog-preview group bg-white rounded-3xl border border-card-border overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 opacity-0 flex flex-col">
                {/* Color accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-primary via-teal-400 to-primary-light"></div>
                
                <div className="p-7 space-y-4 flex-1 flex flex-col">
                  <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-lg text-xs font-bold uppercase tracking-wider w-fit">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors leading-tight flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-secondary-light leading-relaxed font-normal line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-card-border/50 text-xs text-secondary-light">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1.5">
                        <Calendar className="h-3.5 w-3.5 text-gray-400" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 8: FAQ (NEW)
      ══════════════════════════════════════════ */}
      <section ref={faqRef} className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: title + image */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">FAQ</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-secondary-light font-normal leading-relaxed">
                  Find answers to common questions about our diagnostic products, distribution network, and services in Sri Lanka.
                </p>
              </div>
              <div className="relative h-56 md:h-64 w-full overflow-hidden rounded-3xl border border-card-border shadow-md hidden lg:block">
                <Image
                  src="/sri_lanka_laboratory.png"
                  alt="Diagnostic laboratory in Sri Lanka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right: accordion */}
            <div className="lg:col-span-7 space-y-3">
              {faqData.map((item, idx) => (
                <div key={idx} className="faq-item opacity-0">
                  <FaqItem
                    q={item.q}
                    a={item.a}
                    isOpen={openFaq === idx}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 9: CALL TO ACTION (unchanged)
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--primary-hover),transparent_60%)]"></div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to enhance your diagnostic decisions?
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-teal-50 font-normal leading-relaxed">
            Get in touch with Iconn Healthcare Pvt Ltd. Explore our clinical reagents, POC devices, and medical disinfectants distributed across Sri Lanka.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              href="/contact"
              className="flex items-center space-x-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-primary shadow-lg hover:bg-teal-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Contact Our Expert Team</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
