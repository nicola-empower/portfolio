import { IntelligenceDossier } from "@/types";

export const intelligenceDossiers: IntelligenceDossier[] = [
  {
    slug: "dana-safety-architecture",
    projectSlug: "project-dana",
    title: "DANA: Forensic Safety Architecture",
    description: "A deep-dive into the 'Hidden in Plain Sight' architecture and legally-aligned forensic logging designed for domestic abuse survivors.",
    type: "Technical Infographic",
    url: "/work/project-dana/infographic",
    date: "2025-03-20",
    category: "Safety",
    tags: ["Plausible Deniability", "Forensic Logging", "Scottish Law Alignment"],
    featured: true
  },
  {
    slug: "tailortrack-privacy-model",
    projectSlug: "tailortrack-cv",
    title: "TailorTrack: Local-First Privacy Model",
    description: "Analysis of the stateless, local-storage architecture designed to protect sensitive employment data for high-stakes professionals.",
    type: "Technical Infographic",
    url: "/work/tailortrack-cv/infographic",
    date: "2025-03-15",
    category: "Privacy",
    tags: ["Local-First", "GDPR Compliance", "Stateless AI"],
    featured: true
  },
  {
    slug: "pax-visual-engine",
    projectSlug: "pax-visual-engine",
    title: "PAX: The Visual Wardrobe Engine",
    description: "Breakdown of the 'Prompt Hygiene' layer and 'Cher Horowitz' wardrobe metaphor that transforms raw AI generation into a consistent cinematic studio.",
    type: "Technical Infographic",
    url: "/work/pax-visual-engine/infographic",
    date: "2025-03-05",
    category: "Architecture",
    tags: ["Prompt Hygiene", "SFW Guard", "Motion Design", "Identity Anchoring"],
  }
];
