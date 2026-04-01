import { projects } from "@/data/projects";
import { journals } from "@/data/journals";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, ArrowRight, Layout, Code, Zap, FileText, Globe, Lightbulb, Palette } from "lucide-react";
import { Metadata } from "next";
import Silk from "@/components/ui/Silk";
import FadeIn from "@/components/ui/FadeIn";
import { ProjectGallery } from "@/components/work/ProjectGallery";

// Force static generation for all projects
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}


import { sharedMetadata, siteConfig } from "@/app/shared-metadata";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    const ogImage = project.thumbnail?.startsWith("/")
        ? `${siteConfig.url}${project.thumbnail}`
        : project.thumbnail || siteConfig.ogImage;

    return {
        ...sharedMetadata,
        title: `${project.title} | Nicola Berry Portfolio`,
        description: project.shortTagline,
        openGraph: {
            ...sharedMetadata.openGraph,
            title: project.title,
            description: project.shortTagline,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
    };
}

const typeIcons = {
    webapp: Layout,
    script: Code,
    automation: Zap,
    "case-study": FileText,
    website: Globe,
    trades: Palette,
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const relatedJournal = project.relatedJournalSlug ? journals.find(j => j.slug === project.relatedJournalSlug) : null;

    // Find next project for navigation
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const nextProject = currentIndex !== -1 && currentIndex < projects.length - 1
        ? projects[currentIndex + 1]
        : projects[0]; // Loop back to start

    const TypeIcon = typeIcons[project.type] || Layout;

    return (
        <main id="main-content" className="min-h-screen bg-background transition-colors duration-500 pt-24 pb-20">
            {/* Navigation Bar */}
            <div className="container mx-auto px-6 mb-12">
                <Link
                    href="/#work" // Back to the Work section on the main page
                    className="inline-flex items-center gap-2 text-foreground/60 hover:text-heading transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Work</span>
                </Link>
            </div>

            <article className="container mx-auto px-6">
                {/* Header Section */}
                <header className="mb-20 max-w-5xl relative">
                    <FadeIn delay={0.1}>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] bg-background border border-foreground/10 text-foreground rounded-full flex items-center gap-2 shadow-sm">
                                <TypeIcon size={14} />
                                {project.type.replace("-", " ")}
                            </span>
                            <span className="text-foreground/20">•</span>
                            <span className="font-mono text-sm font-bold text-foreground/40 uppercase tracking-widest">{project.year}</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="font-serif text-6xl md:text-8xl font-bold text-heading mb-8 leading-[1.1] tracking-tight">
                            {project.title.split(" ").map((word, i) => (
                                <span key={i} className={i % 2 === 1 ? "italic text-accent-secondary block md:inline" : "block md:inline"}>
                                    {word}{" "}
                                </span>
                            ))}
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <p className="font-sans text-xl md:text-3xl text-foreground/80 max-w-3xl leading-relaxed font-light">
                            {project.shortTagline}
                        </p>
                    </FadeIn>
                </header>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Sidebar (Desktop) / Metadata */}
                    <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-24 h-fit">
                        {/* Project Links */}
                        <div className="flex flex-col gap-4">
                            {project.liveUrl && project.liveUrl !== "#" && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-4 bg-heading text-background rounded-xl font-bold hover:bg-accent-secondary transition-all shadow-lg hover:shadow-accent-secondary/20"
                                >
                                    <ExternalLink size={18} />
                                    {project.type === "website" ? "Visit Live Site" : "View Live Demo"}
                                </a>
                            )}

                            <div className="flex flex-col gap-4">
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-foreground/10 bg-card-bg text-foreground rounded-xl font-medium hover:bg-foreground/10 transition-colors"
                                    >
                                        <Github size={18} /> Repository
                                    </a>
                                )}                                  {project.proposalUrl && (
                                     <Link
                                         href={project.proposalUrl}
                                         className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-card-bg border-2 border-accent-secondary/20 text-accent-secondary font-bold hover:bg-accent-secondary/5 transition-all shadow-sm group"
                                     >
                                         <FileText size={18} className="group-hover:scale-110 transition-transform" />
                                         <span>View Funding Roadmap</span>
                                     </Link>
                                 )}
                                 {project.infographicUrl && (
                                     <Link
                                         href={project.infographicUrl}
                                         className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-card-bg border-2 border-accent-secondary/20 text-accent-secondary font-bold hover:bg-accent-secondary/5 transition-all shadow-sm group"
                                     >
                                         <Layout size={18} className="group-hover:scale-110 transition-transform" />
                                         <span>View Technical Infographic</span>
                                     </Link>
                                 )}

                                 {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-foreground/10 bg-card-bg text-foreground rounded-xl font-medium hover:bg-foreground/10 transition-colors"
                                    >
                                        <FileText size={18} /> Case Study
                                    </a>
                                )}
                            </div>
                        </div>

                         {/* Tech Stack */}
                        <div>
                            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-foreground/60 mb-6 border-b border-foreground/5 pb-2">
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 bg-accent-primary/20 text-foreground text-sm rounded-md font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contributions */}
                        <FadeIn delay={0.4}>
                            <div>
                                <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-foreground/60 mb-6 border-b border-foreground/5 pb-2">
                                    My Role
                                </h3>
                                <ul className="space-y-3">
                                    {project.contributions.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-foreground/80 text-sm leading-relaxed">
                                            <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-accent-secondary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Hero Image & Gallery managed by client component */}
                        <ProjectGallery 
                            thumbnail={project.thumbnail} 
                            gallery={project.gallery} 
                            title={project.title} 
                        />

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <FadeIn delay={0.1} y={20}>
                                <h3 className="font-serif font-bold text-heading mb-8 opacity-40 uppercase tracking-[0.2em] text-sm">Overview</h3>
                                <p className="text-foreground leading-relaxed text-xl font-light mb-16">
                                    {project.overview}
                                </p>
                            </FadeIn>

                            {/* The Origin Story */}
                            {project.theWhy && (
                                <FadeIn delay={0.1}>
                                    <div className="mb-20 pl-8 md:pl-12 border-l-4 border-accent-secondary/30 relative">
                                        <div className="absolute -left-5 -top-4 text-accent-secondary opacity-20 font-serif text-8xl leading-none select-none">"</div>
                                        <h3 className="font-serif text-3xl font-bold text-heading mb-6">The Origin Story</h3>
                                        <p className="text-foreground/70 leading-relaxed text-xl italic font-serif">
                                            {project.theWhy}
                                        </p>
                                    </div>
                                </FadeIn>
                            )}
                             {/* The Results / Core Impact */}
                            {project.results && (
                                <FadeIn delay={0.1}>
                                    <div className="mb-20 p-10 rounded-3xl bg-heading text-background shadow-xl border border-foreground/5 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-secondary/20 blur-[80px] rounded-full point-events-none" />
                                        <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-4 relative z-10">
                                            <span className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-accent-secondary text-base font-bold italic shadow-inner">ROI</span>
                                            Real-World Impact
                                        </h3>
                                        <p className="text-background/90 leading-relaxed text-lg font-medium relative z-10">
                                            {project.results}
                                        </p>
                                    </div>
                                </FadeIn>
                            )}

                             <div className="grid md:grid-cols-2 gap-12 mt-20">
                                {project.problem && (
                                    <div className="p-8 rounded-3xl bg-accent-primary/10 border border-heading/10">
                                        <h3 className="font-serif text-2xl font-bold text-heading mb-6 flex items-center gap-4">
                                            <span className="w-10 h-10 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary text-base font-bold italic">Challenge</span>
                                        </h3>
                                        <p className="text-foreground/70 leading-relaxed text-lg">
                                            {project.problem}
                                        </p>
                                    </div>
                                )}

                                {project.solution && (
                                    <div className="p-8 rounded-3xl bg-accent-secondary/5 border border-accent-secondary/10">
                                        <h3 className="font-serif text-2xl font-bold text-heading mb-6 flex items-center gap-4">
                                            <span className="w-10 h-10 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary text-base font-bold italic">Solution</span>
                                        </h3>
                                        <p className="text-foreground/70 leading-relaxed text-lg">
                                            {project.solution}
                                        </p>
                                    </div>
                                )}
                            </div>


                            {relatedJournal && (
                                <FadeIn delay={0.1}>
                                    <div className="mt-12 mb-8 p-8 rounded-3xl bg-card-bg border border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                                        <div>
                                            <div className="flex items-center gap-2 text-accent-secondary mb-3">
                                                <FileText size={16} />
                                                <span className="text-xs font-bold tracking-widest uppercase">Technical Journal</span>
                                            </div>
                                            <h3 className="font-serif text-2xl font-bold text-heading leading-tight">{relatedJournal.title}</h3>
                                        </div>
                                        <Link href={`/journal/${relatedJournal.slug}`} className="shrink-0 px-6 py-3 bg-heading text-background rounded-xl font-bold hover:bg-accent-secondary transition-colors flex items-center gap-2">
                                            Read Journal <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </FadeIn>
                            )}
                             {/* Strategic Value Section */}
                            <FadeIn delay={0.2} y={30}>
                                <div className="mt-20 p-10 rounded-4xl bg-accent-primary text-accent-primary-foreground relative overflow-hidden group border border-accent-primary-foreground/10 shadow-xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-background/20 blur-[80px] rounded-full group-hover:bg-background/30 transition-colors" />
                                    <div className="relative z-10 text-background">
                                        <div className="flex items-center gap-3 mb-6 opacity-80">
                                            <Lightbulb size={24} />
                                            <span className="uppercase tracking-[0.3em] font-bold text-xs">Strategic Intelligence</span>
                                        </div>
                                        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-background! italic leading-tight">Business Impact & Scalability</h3>
                                        <p className="text-inherit opacity-90 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 font-medium">
                                            This project isn&apos;t just code; it&apos;s a strategic asset designed to eliminate operational friction and drive measurable conversion. By focusing on {project.techStack[0]} {project.techStack[1] ? `and ${project.techStack[1]}` : ""}, we ensured a foundation that scales with enterprise demand.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            {project.highlights.map((highlight, i) => (
                                                <div key={i} className="px-5 py-2.5 bg-background/10 rounded-full text-sm font-bold border border-background/20 hover:bg-background hover:text-accent-primary transition-all shadow-sm">
                                                    {highlight}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                             {/* Roadmap Section */}
                            {project.roadmap && project.roadmap.length > 0 && (
                                <FadeIn delay={0.3} y={30}>
                                    <div className="mt-12 p-10 rounded-4xl bg-card-bg border border-card-border relative overflow-hidden">
                                        <div className="flex items-center gap-3 mb-8 text-accent-secondary">
                                            <Zap size={24} />
                                            <span className="uppercase tracking-[0.3em] font-bold text-xs">Future Roadmap</span>
                                        </div>
                                        <h3 className="font-serif text-3xl font-bold text-heading mb-8 font-serif italic">Upcoming & Possible Upgrades</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {project.roadmap.map((item, i) => (
                                                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-foreground/5 shadow-sm">
                                                    <div className="w-8 h-8 rounded-full bg-accent-secondary/10 flex items-center justify-center text-accent-secondary shrink-0 font-bold text-sm">
                                                        {i + 1}
                                                    </div>
                                                    <p className="text-foreground/80 text-lg leading-snug pt-1">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            )}

                        </div>

                    </div>
                </div>
                 {/* Footer Navigation */}
                <footer className="mt-32 border-t border-foreground/10 pt-16">
                    <Link
                        href={`/work/${nextProject.slug}`}
                        className="group block"
                    >
                        <p className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-3 group-hover:text-accent-secondary transition-colors">
                            Next Project
                        </p>
                        <div className="flex items-center justify-between">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-heading group-hover:text-accent-secondary transition-colors">
                                {nextProject.title}
                            </h2>
                            <span className="w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center text-foreground group-hover:bg-accent-secondary group-hover:text-background group-hover:border-accent-secondary transition-all">
                                <ArrowRight size={24} />
                            </span>
                        </div>
                    </Link>
                </footer>

            </article>
        </main>
    );
}
