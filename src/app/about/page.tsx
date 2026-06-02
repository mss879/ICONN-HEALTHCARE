"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Users, Award, Landmark, Eye, Goal, CheckCircle2, Lightbulb, ClipboardCheck, Settings, HeartHandshake } from "lucide-react";
import gsap from "gsap";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      
      tl.fromTo(".about-header", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(".about-intro", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.6")
        .fromTo(".about-card", { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, stagger: 0.15 }, "-=0.5");
      
      // Scroll trigger intersection
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(".scroll-item", 
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power2.out" }
            );
            observer.disconnect();
          }
        });
      }, { threshold: 0.1 });

      const target = document.querySelector(".scroll-trigger-section");
      if (target) observer.observe(target);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-16 md:py-24 space-y-20 md:space-y-28 bg-white text-secondary">
      
      {/* SECTION 1: ORGANIZATIONAL PROFILE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="about-header text-center max-w-3xl mx-auto space-y-4 opacity-0">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Who We Are</span>
          <h1 className="text-4xl sm:text-5xl font-black text-secondary tracking-tight leading-none">
            About Iconn Healthcare
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Intro Grid */}
        <div className="about-intro mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start opacity-0">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
              A Key Diagnostic & Laboratory Partner in Sri Lanka
            </h2>
            <p className="text-secondary-light leading-relaxed font-normal">
              Iconn Healthcare participates in the in vitro diagnostic, point of care (POC), reagents, laboratory reagents / chemicals and disinfectants market segments in Sri Lanka. Iconn offers diagnostic products for clinical chemistry, microbiology, immunology, and molecular biology through its distribution network.
            </p>
            <p className="text-secondary-light leading-relaxed font-normal">
              The company aims to better medical decisions by delivering high-value diagnostic solutions to laboratories and other allied institutions operating close to patients and affording the medical professionals the opportunity to more rapidly and accurately determine the course of treatment.
            </p>
            <p className="text-secondary-light leading-relaxed font-normal">
              Iconn also engages among others in the identification and import of a variety of surface and instrument sterilizing materials/agents for hospital consumption.
            </p>
          </div>
          
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-64 md:h-72 w-full overflow-hidden rounded-3xl border border-card-border shadow-md">
              <Image
                src="/colombo_laboratory.png"
                alt="Iconn Healthcare Laboratory in Colombo, Sri Lanka"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="glass p-8 rounded-3xl border border-card-border/80 space-y-6 bg-gradient-to-br from-white to-primary-light/30 shadow-sm">
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
      </section>

      {/* SECTION 2: VISION & MISSION ANALYSIS */}
      <section className="bg-gradient-to-b from-white via-primary-light/20 to-white py-16 border-y border-card-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="about-card glass p-10 rounded-3xl border border-card-border bg-white flex flex-col items-center text-center space-y-6 opacity-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-primary-light text-primary">
              <Eye className="h-9 w-9" />
            </div>
            <h2 className="text-2xl font-black text-secondary">OUR VISION</h2>
            <p className="text-secondary-light leading-relaxed font-normal max-w-sm">
              To empower users with advanced, smart and reliable diagnostics which promote superior diagnostic solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="about-card glass p-10 rounded-3xl border border-card-border bg-white flex flex-col items-center text-center space-y-6 opacity-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-primary-light text-primary">
              <Goal className="h-9 w-9" />
            </div>
            <h2 className="text-2xl font-black text-secondary">OUR MISSION</h2>
            <p className="text-secondary-light leading-relaxed font-normal max-w-sm">
              To serve customers’ needs by maximizing cooperation, innovation, and delivering operational excellence.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: CORE VALUES MATRIX */}
      <section className="scroll-trigger-section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Our Core Values</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
            The Principles That Guide Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Customer Centric",
              desc: "Everything we do begins with actively listening and collaborating with our customers to address their needs.",
              color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              desc: "We empower all employees to explore and contribute ideas that elevate our product and service solutions.",
              color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
            },
            {
              icon: Award,
              title: "Excellence",
              desc: "Our passion towards continuous improvement is embodied by every employee and the results we achieve.",
              color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
            },
            {
              icon: ShieldCheck,
              title: "Respect",
              desc: "We are a trusted partner valuing integrity, honesty and transparency in all we do.",
              color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
            },
            {
              icon: ClipboardCheck,
              title: "Accountability",
              desc: "We are accountable for delivering our promises to our customers, suppliers and other stake holders enabling the accomplishment of our shared objectives.",
              color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
            },
            {
              icon: Settings,
              title: "Operational Excellence",
              desc: "Maximizing cooperation and innovation to deliver superior solutions, supported by a robust logistical network.",
              color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
            }
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx} 
                className="scroll-item group glass p-8 rounded-3xl border border-card-border bg-white flex flex-col justify-between opacity-0 hover:shadow-lg transition-all duration-300 hover:border-primary/45"
              >
                <div className="space-y-6">
                  <div className={`h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${val.color} border shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6.5 w-6.5" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{val.title}</h3>
                    <p className="text-sm text-secondary-light leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: LOGISTICS, REGULATORY & TENDER OPERATIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-card-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Sri Lanka Market Presence</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
              Regulatory Compliance & Public Tender Expertise
            </h2>
            <p className="text-secondary-light leading-relaxed font-normal">
              At Iconn, in-depth understanding of the industry and personalized service is our primary advantage. We maintain strong professional relations with the Regulatory authorities and with valued customers including public and private hospitals & pharmacies, laboratories, clinics and blood banks to ensure that all requirements are met satisfactorily. We are also active participants in the tender market in Sri Lanka.
            </p>
            <p className="text-secondary-light leading-relaxed font-normal">
              We strive for professional excellence and are committed to reliability and flexibility in all aspects of our business. We have experienced marketing and sales teams which are supported by a robust logistics network to ensure optimal penetration of the market and easy accessibility to our products for our customers.
            </p>
            <p className="text-secondary-light leading-relaxed font-normal">
              We aspire to be the trusted choice for diagnostics, laboratory and special chemical needs and be an active participant in the development of the field through our innovative and advanced value offerings.
            </p>
          </div>
          
          <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-card-border shadow-md">
            <Image
              src="/colombo_logistics.png"
              alt="Iconn Healthcare Logistics Center Colombo"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
