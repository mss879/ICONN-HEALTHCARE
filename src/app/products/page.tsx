"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, ShieldCheck, Activity, Dna, Microscope, AlertCircle, CheckCircle2 } from "lucide-react";
import gsap from "gsap";

const productCategories = [
  { id: "all", label: "All Products" },
  { id: "ivd-poc", label: "IVD & Point of Care" },
  { id: "reagents", label: "Reagents & Chemicals" },
  { id: "disinfectants", label: "Disinfectants & Sterilizers" }
];

const products = [
  {
    id: "poc-1",
    category: "ivd-poc",
    title: "Point of Care (POC) Testing Devices",
    description: "Rapid testing kits and portable analyzers designed for near-patient testing, providing immediate results for critical diagnostic decisions.",
    features: ["Clinical chemistry profile", "Immunology tests", "Rapid response times", "User-friendly interface"],
    icon: Activity,
    color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
  },
  {
    id: "reagent-1",
    category: "reagents",
    title: "Clinical Chemistry Reagents",
    description: "High-value assay reagents formulated for automated analyzer platforms to determine enzymes, lipids, electrolytes, and substrates.",
    features: ["High stability", "Precise calibration standards", "Compatible with global systems", "Certified quality control"],
    icon: Microscope,
    color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
  },
  {
    id: "reagent-2",
    category: "reagents",
    title: "Immunology & Molecular Reagents",
    description: "Advanced molecular assay reagents, PCR chemistries, and antibody conjugates targeting specific infectious diseases and immune profiles.",
    features: ["High sensitivity", "Molecular biology grades", "Microbiology screening sets", "Excellent specificity"],
    icon: Dna,
    color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
  },
  {
    id: "disinfect-1",
    category: "disinfectants",
    title: "Surface Sterilizing Agents",
    description: "Hospital-grade liquid and spray surface sanitizers designed to destroy pathogens, bacteria, and viruses on clinic and laboratory counters.",
    features: ["Broad spectrum action", "Rapid contact time", "Non-corrosive formulas", "Complies with regulatory standards"],
    icon: ShieldCheck,
    color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
  },
  {
    id: "disinfect-2",
    category: "disinfectants",
    title: "Instrument Disinfectants",
    description: "Cold sterilizing chemicals and agents formulated specifically for cleaning, scrubbing, and sterilizing delicate surgical and laboratory instruments.",
    features: ["Protects sensitive optics", "High-level disinfection", "Biodegradable composition", "Tender market approved"],
    icon: ShieldCheck,
    color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
  },
  {
    id: "ivd-1",
    category: "ivd-poc",
    title: "In Vitro Diagnostic Systems",
    description: "Mid to high throughput lab systems for clinical chemistry, microbiology, and molecular biology screening.",
    features: ["Fully automated throughput", "Built-in quality assurance", "Sri Lanka distribution backup", "Flexible reagents systems"],
    icon: Microscope,
    color: "from-teal-500/10 to-teal-500/5 text-teal-600 border-teal-500/20"
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Filter logic
    const tempFiltered = products.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    setFilteredProducts(tempFiltered);

    // Grid entrance animation on change
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".product-card");
      if (cards.length > 0) {
        gsap.fromTo(cards, 
          { opacity: 0, y: 20, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
        );
      }
    }
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-16 md:py-24 bg-white text-secondary space-y-20 md:space-y-28">
      
      {/* SECTION 1: PRODUCTS HEADER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Catalog</span>
          <h1 className="text-4xl sm:text-5xl font-black text-secondary tracking-tight leading-none">
            Diagnostic Solutions
          </h1>
          <p className="text-secondary-light font-normal leading-relaxed">
            Explore our range of in vitro diagnostics, clinical reagents, point of care devices, and sterilization agents distributed in public and private hospitals throughout Sri Lanka.
          </p>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE CATALOG */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Controls: Search & Category Filter */}
        <div className="glass p-6 rounded-3xl border border-card-border bg-white flex flex-col md:flex-row gap-6 items-center justify-between shadow-sm">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products or descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-card-border rounded-2xl text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white shadow-md shadow-teal-500/20"
                    : "bg-white border border-card-border text-secondary-light hover:bg-primary-light hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div 
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((prod) => {
              const Icon = prod.icon;
              return (
                <div
                  key={prod.id}
                  className="product-card group bg-white p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/45 transition-all duration-300"
                >
                  <div>
                    <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-500/5 text-teal-600 border border-teal-500/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6.5 w-6.5" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                      {prod.title}
                    </h3>
                    <p className="mt-3 text-sm text-secondary-light leading-relaxed font-normal">
                      {prod.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-card-border/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {prod.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-secondary-light">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="glass p-12 rounded-3xl border border-card-border text-center flex flex-col items-center justify-center space-y-4 bg-white">
            <AlertCircle className="h-12 w-12 text-amber-500" />
            <h3 className="text-lg font-bold text-secondary">No products found</h3>
            <p className="text-sm text-secondary-light max-w-sm">
              We couldn't find any products matching "{searchQuery}". Try selecting another category or refining your query.
            </p>
          </div>
        )}
      </section>

      {/* SECTION 3: STERILIZATION & DISINFECTANT STANDARDS */}
      <section className="bg-gradient-to-b from-white via-primary-light/20 to-white py-16 border-y border-card-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Infection Control</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
                Importing Surfaces & Instrument Sterilizing Agents
              </h2>
              <p className="text-secondary-light leading-relaxed font-normal">
                Iconn Healthcare also engages among others in the identification and import of a variety of surface and instrument sterilizing materials and chemical agents for hospital consumption in Sri Lanka.
              </p>
              <p className="text-secondary-light leading-relaxed font-normal">
                Working closely with health authorities, we ensure all sterilization agents meet requirements of public and private hospitals, labs, and clinics to maintain strict sanitary controls.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative h-72 md:h-80 w-full overflow-hidden rounded-3xl border border-card-border shadow-md">
              <Image
                src="/colombo_diagnostics.png"
                alt="Colombo Diagnostics and Reagents"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: HOSPITAL DISTRIBUTION NETWORK */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Distribution Map</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
            Connecting Labs, Blood Banks & Hospitals
          </h2>
          <p className="text-secondary-light font-normal">
            Delivering high-value diagnostic solutions directly to medical teams close to patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl border border-card-border bg-white shadow-sm space-y-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-secondary">Clinical Reagents</h4>
            <p className="text-sm text-secondary-light leading-relaxed font-normal">
              Chemistry, microbiology, immunology, and molecular reagents supplied to medical centers islandwide.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border border-card-border bg-white shadow-sm space-y-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-secondary">Allied Institutions</h4>
            <p className="text-sm text-secondary-light leading-relaxed font-normal">
              Partnerships with private and public hospitals, pharmacies, clinical labs, and national blood banks.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border border-card-border bg-white shadow-sm space-y-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary-light text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-secondary">Rapid Diagnostics</h4>
            <p className="text-sm text-secondary-light leading-relaxed font-normal">
              Facilitating medical decisions through advanced Point of Care (POC) testing and genomic diagnostic tools.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
