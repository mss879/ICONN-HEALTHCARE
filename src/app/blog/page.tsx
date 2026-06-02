"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar, Clock, X, ArrowUpRight, Microscope, ShieldCheck, HeartHandshake } from "lucide-react";
import gsap from "gsap";

const blogPosts = [
  {
    id: "blog-1",
    category: "Diagnostics",
    title: "The Evolution of Point of Care (POC) Testing in Sri Lanka",
    summary: "Exploring how rapid near-patient diagnostics are accelerating clinical decisions, reducing patient wait times, and improving hospital care pathways.",
    date: "May 28, 2026",
    readTime: "5 min read",
    content: `Point of Care (POC) testing is transforming the healthcare landscape in Sri Lanka. Traditionally, clinical tests required sending samples to central laboratories, a process that could take hours or even days. With the introduction of modern, portable POC devices distributed by partners like Iconn Healthcare, medical practitioners can now perform assays immediately near the patient's bedside.

    Key Benefits of POC Adoption:
    1. Rapid Decision Making: Results are available within minutes, allowing doctors to determine treatment courses immediately.
    2. Operational Efficiency: Eliminates sample transit logistics and laboratory queuing.
    3. Better Patient Outcomes: Immediate diagnostics are crucial in emergency care, intensive care units, and outpatient clinics.

    As technology advances, molecular diagnostics are entering the POC space, enabling highly specific pathogen detection at the clinic level.`
  },
  {
    id: "blog-2",
    category: "Hygiene & Safety",
    title: "Hospital Instrument Disinfection & Surface Sterilization Guidelines",
    summary: "A comprehensive analysis on selecting high-level chemical sterilizing agents to satisfy regulatory requirements and prevent cross-contamination.",
    date: "May 15, 2026",
    readTime: "7 min read",
    content: `Ensuring strict sterilization protocols in hospital environments is crucial for patient safety. With public and private hospitals handling high patient volumes, the choice of surface disinfectants and instrument cleaning agents is highly regulated.

    Effective Sterilization Protocol Segments:
    1. Instrument Cleaning: Delicate surgical instruments, endoscopes, and diagnostic probes require specialized non-corrosive agents that achieve high-level disinfection.
    2. Surface Disinfection: Clinic counters, lab desks, and patient rooms demand broad-spectrum bactericidal, virucidal, and fungicidal agents.
    3. Regulatory Compliance: Formulations must align with Sri Lankan regulatory guidelines to ensure maximum safety.

    Iconn Healthcare actively identifies and imports premium surface and instrument sterilizing agents to support infection control in Sri Lankan hospitals.`
  },
  {
    id: "blog-3",
    category: "Lab Technology",
    title: "Understanding In Vitro Diagnostics (IVD) for Modern Laboratories",
    summary: "Discovering how advancements in clinical chemistry, microbiology, and molecular biology reagents support precise clinical decisions.",
    date: "April 24, 2026",
    readTime: "6 min read",
    content: `In Vitro Diagnostics (IVD) serve as the backbone of clinical pathology. By analyzing blood, urine, or tissue samples, IVD solutions provide critical diagnostic data that shapes over 70% of clinical decisions.

    The Core Segments of IVD:
    - Clinical Chemistry: Automated analyzer systems measuring metabolites, lipids, and liver/renal profiles.
    - Microbiology & Immunology: Assays targeting specific pathogens and immune responses.
    - Molecular Biology: DNA and RNA screening that offers high specificity for genetic and infectious diseases.

    Iconn Healthcare focuses on distributing stable, reliable reagents that enable labs across Sri Lanka to deliver accurate, trustworthy diagnostic services.`
  }
];

export default function Blog() {
  const [activePost, setActivePost] = useState<typeof blogPosts[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animations
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".blog-card");
      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="py-16 md:py-24 bg-white text-secondary space-y-20 md:space-y-28">
      
      {/* SECTION 1: BLOG HERO HEADER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Insights</span>
          <h1 className="text-4xl sm:text-5xl font-black text-secondary tracking-tight leading-none">
            Medical & Diagnostic Blog
          </h1>
          <p className="text-secondary-light font-normal leading-relaxed">
            Stay informed with our latest updates, industry guidelines, and technological trends in diagnostics, point of care, and hospital hygiene.
          </p>
        </div>
      </section>

      {/* SECTION 2: BLOG ARTICLE GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-card group bg-white rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-primary/45 transition-all duration-300 opacity-0"
            >
              {/* Header info */}
              <div className="p-8 space-y-4">
                <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-lg text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-secondary-light leading-relaxed font-normal">
                  {post.summary}
                </p>
              </div>

              {/* Meta & Button footer */}
              <div className="px-8 py-5 border-t border-card-border/50 flex items-center justify-between text-xs text-secondary-light">
                <div className="flex items-center space-x-3.5">
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                <button
                  onClick={() => setActivePost(post)}
                  className="group/btn flex items-center space-x-1 font-bold text-primary hover:text-primary-hover cursor-pointer"
                >
                  <span>Read Post</span>
                  <ArrowUpRight className="h-4 w-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE READER MODAL */}
      {activePost && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white p-8 md:p-10 rounded-3xl border border-card-border shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute right-6 top-6 rounded-xl p-2 bg-white border border-card-border hover:bg-primary-light hover:text-primary transition-all duration-200 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-lg text-xs font-bold uppercase tracking-wider">
                {activePost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-secondary leading-tight">
                {activePost.title}
              </h2>
              <div className="flex items-center space-x-4 text-xs text-secondary-light">
                <span className="flex items-center space-x-1.5">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>{activePost.date}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>{activePost.readTime}</span>
                </span>
              </div>
            </div>

            <div className="h-px bg-card-border"></div>

            {/* Modal Content */}
            <div className="text-secondary-light text-base leading-relaxed font-normal whitespace-pre-line space-y-4">
              {activePost.content}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setActivePost(null)}
                className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-xl shadow-md transition-all duration-200 cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

      {/* SECTION 4: SRI LANKA DIAGNOSTICS SCIENTIFIC TRENDS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-card-border/40">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Trends</span>
          <h2 className="text-3xl font-extrabold text-secondary tracking-tight">
            Advancing Sri Lanka's Laboratory Standards
          </h2>
          <p className="text-secondary-light font-normal">
            Key topics shaping diagnostics decisions close to patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl border border-card-border bg-white shadow-sm space-y-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
              <Microscope className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-secondary">Point of Care Integration</h4>
            <p className="text-sm text-secondary-light leading-relaxed font-normal">
              Introducing rapid clinical chemistry profiles to Colombo allied clinics for speedier patient treatments.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border border-card-border bg-white shadow-sm space-y-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-secondary">Pathogen Control</h4>
            <p className="text-sm text-secondary-light leading-relaxed font-normal">
              Expanding surface and instrument sterilization guidelines across private/public hospital settings.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border border-card-border bg-white shadow-sm space-y-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-secondary">Reagent Quality</h4>
            <p className="text-sm text-secondary-light leading-relaxed font-normal">
              Distributing stable and sensitive diagnostic reagents for microbiology, immunology, and molecular labs.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
