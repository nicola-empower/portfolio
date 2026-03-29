export type Audience = "dev" | "recruiter" | "client" | "general";

export type Project = {
    slug: string;
    title: string;
    shortTagline: string;
    thumbnail: string; // image path
    gallery?: string[]; // multiple images for deep dive
    year: string;
    type: "webapp" | "script" | "automation" | "case-study" | "website" | "webdesign";
    techStack: string[]; // e.g. ["Next.js", "Apps Script"]
    status: "live" | "demo" | "internal" | "coming-soon";
    liveUrl?: string;
    repoUrl?: string;
    demoUrl?: string;
    audiences: Audience[];
    overview: string;
    theWhy?: string;
    problem?: string;
    solution?: string;
    results?: string;
    contributions: string[];
    highlights: string[];
    tags?: string[];
    featured?: boolean;
    tier?: number;
    relatedJournalSlug?: string;
    proposalUrl?: string; // Strategic Funding Roadmap
    infographicUrl?: string; // Component Architecture Infographic
    roadmap?: string[]; // Future upgrades / Possible additions
};

export type IntelligenceDossier = {
    slug: string;
    projectSlug: string;
    title: string;
    description: string;
    type: "Proposal" | "Infographic" | "Technical Intelligence" | "Technical Infographic";
    url: string;
    date: string;
    tags: string[];
    featured?: boolean;
    category: "Safety" | "Architecture" | "Automation" | "SEN" | "Privacy" | "Operations";
};
