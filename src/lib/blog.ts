export type BlogPost = {
  id: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  /** ISO date for structured data / <time> semantics. */
  publishedISO: string;
  readTime: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    category: "Diagnostics",
    title: "The Evolution of Point of Care (POC) Testing in Sri Lanka",
    summary:
      "Exploring how rapid near-patient diagnostics are accelerating clinical decisions, reducing patient wait times, and improving hospital care pathways.",
    date: "May 28, 2026",
    publishedISO: "2026-05-28",
    readTime: "5 min read",
    content: `Point of Care (POC) testing is transforming the healthcare landscape in Sri Lanka. Traditionally, clinical tests required sending samples to central laboratories, a process that could take hours or even days. With the introduction of modern, portable POC devices distributed by partners like Iconn Healthcare, medical practitioners can now perform assays immediately near the patient's bedside.

    Key Benefits of POC Adoption:
    1. Rapid Decision Making: Results are available within minutes, allowing doctors to determine treatment courses immediately.
    2. Operational Efficiency: Eliminates sample transit logistics and laboratory queuing.
    3. Better Patient Outcomes: Immediate diagnostics are crucial in emergency care, intensive care units, and outpatient clinics.

    As technology advances, molecular diagnostics are entering the POC space, enabling highly specific pathogen detection at the clinic level.`,
  },
  {
    id: "blog-2",
    category: "Hygiene & Safety",
    title: "Hospital Instrument Disinfection & Surface Sterilization Guidelines",
    summary:
      "A comprehensive analysis on selecting high-level chemical sterilizing agents to satisfy regulatory requirements and prevent cross-contamination.",
    date: "May 15, 2026",
    publishedISO: "2026-05-15",
    readTime: "7 min read",
    content: `Ensuring strict sterilization protocols in hospital environments is crucial for patient safety. With public and private hospitals handling high patient volumes, the choice of surface disinfectants and instrument cleaning agents is highly regulated.

    Effective Sterilization Protocol Segments:
    1. Instrument Cleaning: Delicate surgical instruments, endoscopes, and diagnostic probes require specialized non-corrosive agents that achieve high-level disinfection.
    2. Surface Disinfection: Clinic counters, lab desks, and patient rooms demand broad-spectrum bactericidal, virucidal, and fungicidal agents.
    3. Regulatory Compliance: Formulations must align with Sri Lankan regulatory guidelines to ensure maximum safety.

    Iconn Healthcare actively identifies and imports premium surface and instrument sterilizing agents to support infection control in Sri Lankan hospitals.`,
  },
  {
    id: "blog-3",
    category: "Lab Technology",
    title: "Understanding In Vitro Diagnostics (IVD) for Modern Laboratories",
    summary:
      "Discovering how advancements in clinical chemistry, microbiology, and molecular biology reagents support precise clinical decisions.",
    date: "April 24, 2026",
    publishedISO: "2026-04-24",
    readTime: "6 min read",
    content: `In Vitro Diagnostics (IVD) serve as the backbone of clinical pathology. By analyzing blood, urine, or tissue samples, IVD solutions provide critical diagnostic data that shapes over 70% of clinical decisions.

    The Core Segments of IVD:
    - Clinical Chemistry: Automated analyzer systems measuring metabolites, lipids, and liver/renal profiles.
    - Microbiology & Immunology: Assays targeting specific pathogens and immune responses.
    - Molecular Biology: DNA and RNA screening that offers high specificity for genetic and infectious diseases.

    Iconn Healthcare focuses on distributing stable, reliable reagents that enable labs across Sri Lanka to deliver accurate, trustworthy diagnostic services.`,
  },
];
