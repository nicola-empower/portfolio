import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, ArrowRight, Layout, Code, Zap, FileText, Globe } from "lucide-react";
import { Metadata } from "next";

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
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Find next project for navigation
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const nextProject = currentIndex !== -1 && currentIndex < projects.length - 1
        ? projects[currentIndex + 1]
        : projects[0]; // Loop back to start

    const TypeIcon = typeIcons[project.type] || Layout;

    return (
        <main id="main-content" className="min-h-screen bg-cream dark:bg-plum-dark transition-colors duration-500 pt-24 pb-20">
            {/* Navigation Bar */}
            <div className="container mx-auto px-6 mb-12">
                <Link
                    href="/#work" // Back to the Work section on the main page
                    className="inline-flex items-center gap-2 text-charcoal/60 dark:text-cream/60 hover:text-rose dark:hover:text-rose transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Work</span>
                </Link>
            </div>

            <article className="container mx-auto px-6">
                {/* Header Section */}
                <header className="mb-16 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white dark:bg-white/10 text-charcoal dark:text-cream rounded-full border border-charcoal/5 dark:border-white/5 flex items-center gap-2">
                            <TypeIcon size={14} />
                            {project.type.replace("-", " ")}
                        </span>
                        <span className="text-charcoal/40 dark:text-cream/40">•</span>
                        <span className="font-mono text-sm text-charcoal/60 dark:text-cream/60">{project.year}</span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal dark:text-cream mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="font-sans text-xl md:text-2xl text-charcoal/60 dark:text-cream/60 max-w-2xl leading-relaxed">
                        {project.shortTagline}
                    </p>
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
                                    className="flex items-center justify-center gap-2 px-6 py-4 bg-charcoal text-cream rounded-xl font-bold hover:bg-rose transition-colors shadow-lg shadow-charcoal/5 hover:shadow-rose/20"
                                >
                                    <ExternalLink size={18} />
                                    {project.type === "website" ? "Visit Live Site" : "View Live Demo"}
                                </a>
                            )}

                            <div className="flex gap-4">
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-charcoal/10 dark:border-white/10 bg-white/50 dark:bg-white/5 text-charcoal dark:text-cream rounded-xl font-medium hover:bg-white dark:hover:bg-white/10 transition-colors"
                                    >
                                        <Github size={18} /> Repository
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-charcoal/10 dark:border-white/10 bg-white/50 dark:bg-white/5 text-charcoal dark:text-cream rounded-xl font-medium hover:bg-white dark:hover:bg-white/10 transition-colors"
                                    >
                                        <FileText size={18} /> Case Study
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-charcoal/40 dark:text-cream/40 mb-6 border-b border-charcoal/5 dark:border-white/5 pb-2">
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 bg-taupe/10 dark:bg-white/5 text-charcoal/80 dark:text-cream/80 text-sm rounded-md font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contributions */}
                        <div>
                            <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-charcoal/40 dark:text-cream/40 mb-6 border-b border-charcoal/5 dark:border-white/5 pb-2">
                                My Role
                            </h3>
                            <ul className="space-y-3">
                                {project.contributions.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-charcoal/80 dark:text-cream/80 text-sm leading-relaxed">
                                        <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-rose shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Hero Image */}
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/5 border border-charcoal/5 dark:border-white/5 bg-taupe/10">
                            {project.thumbnail && !project.thumbnail.includes("placeholder") ? (
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-charcoal/20">
                                    <TypeIcon size={64} />
                                </div>
                            )}
                        </div>

                        {/* Text Content */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-cream mb-6">Overview</h3>
                            <p className="text-charcoal/80 dark:text-cream/80 leading-relaxed text-lg">
                                {project.overview}
                            </p>

                            <div className="grid md:grid-cols-2 gap-12 mt-16">
                                {project.problem && (
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-charcoal dark:text-cream mb-4 flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-full bg-rose/10 flex items-center justify-center text-rose text-sm">1</span>
                                            The Challenge
                                        </h3>
                                        <p className="text-charcoal/80 dark:text-cream/80 leading-relaxed text-base">
                                            {project.problem}
                                        </p>
                                    </div>
                                )}

                                {project.solution && (
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-charcoal dark:text-cream mb-4 flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-sage text-sm">2</span>
                                            The Solution
                                        </h3>
                                        <p className="text-charcoal/80 dark:text-cream/80 leading-relaxed text-base">
                                            {project.solution}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div className="space-y-8 pt-12 border-t border-charcoal/5 dark:border-white/5">
                                <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-cream">Gallery</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.gallery.map((img, idx) => (
                                        <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-charcoal/5 dark:border-white/5 bg-taupe/10 hover:shadow-lg transition-shadow">
                                            <Image
                                                src={img}
                                                alt={`${project.title} gallery image ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Navigation */}
                <footer className="mt-32 border-t border-charcoal/10 dark:border-white/10 pt-16">
                    <Link
                        href={`/work/${nextProject.slug}`}
                        className="group block"
                    >
                        <p className="text-sm font-bold uppercase tracking-widest text-charcoal/40 dark:text-cream/40 mb-3 group-hover:text-rose transition-colors">
                            Next Project
                        </p>
                        <div className="flex items-center justify-between">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-cream group-hover:text-rose transition-colors">
                                {nextProject.title}
                            </h2>
                            <span className="w-16 h-16 rounded-full border border-charcoal/10 dark:border-white/10 flex items-center justify-center text-charcoal dark:text-cream group-hover:bg-rose group-hover:text-white group-hover:border-rose transition-all">
                                <ArrowRight size={24} />
                            </span>
                        </div>
                    </Link>
                </footer>
            </article>
        </main>
    );
}
