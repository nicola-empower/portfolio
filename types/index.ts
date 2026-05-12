export type Audience = "dev" | "recruiter" | "client" | "general" | "investor";

export type Project = {
    slug: string;
    title: string;
    shortTagline?: string;
    description?: string; // New: for showcase
    category?: string; // New: for classification
    thumbnail: string; // image path
    gallery?: string[]; // multiple images for deep dive
    year: string;
    type?: "webapp" | "script" | "automation" | "case-study" | "website" | "trades";
    techStack?: string[]; // e.g. ["Next.js", "Apps Script"]
    tags?: string[];
    status?: "live" | "demo" | "internal" | "coming-soon" | "case-study";
    liveUrl?: string;
    repoUrl?: string;
    demoUrl?: string;
    proposalUrl?: string;
    infographicUrl?: string;
    audiences?: Audience[];
    overview?: string;
    theWhy?: string;
    problem?: string;
    solution?: string;
    results?: string;
    contributions?: string[];
    highlights?: string[];
    featured?: boolean;
    tier?: number;
    relatedJournalSlug?: string;
    demoNote?: string;
    acquisitionAvailable?: boolean;
    roadmap?: string[];
    stats?: { label: string; value: string }[]; // New: for ROI metrics
    details?: {
        problem: string;
        solution: string;
        outcome: string;
        technicalStack: string[];
        relatedJournals?: string[];
    }; // New: for structured deep-dives
};

export type IntelligenceDossier = {
    slug: string;
    projectSlug: string;
    title: string;
    description: string;
    type: "Proposal" | "Infographic" | "Technical Intelligence" | "Technical Infographic" | "Architectural Briefing";
    url: string;
    date: string;
    tags: string[];
    featured?: boolean;
    category: "Safety" | "Architecture" | "Automation" | "SEN" | "Privacy" | "Operations";
};
