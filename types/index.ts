export type Audience = "dev" | "recruiter" | "client" | "general";

export type Project = {
    slug: string;
    title: string;
    shortTagline: string;
    thumbnail: string; // image path
    gallery?: string[]; // multiple images for deep dive
    year: string;
    type: "webapp" | "script" | "automation" | "case-study";
    techStack: string[]; // e.g. ["Next.js", "Apps Script"]
    status: "live" | "demo" | "internal" | "coming-soon";
    liveUrl?: string;
    repoUrl?: string;
    demoUrl?: string;
    audiences: Audience[];
    overview: string;
    problem: string;
    solution: string;
    contributions: string[];
    highlights: string[];
};
