"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code, FileText, Zap, Layout, Globe, Palette } from "lucide-react";

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const typeIcons = {
    webapp: Layout,
    script: Code,
    automation: Zap,
    "case-study": FileText,
    website: Globe,
    trades: Palette,
};

export function ProjectCard({ project }: { project: Project }) {
    const TypeIcon = typeIcons[project.type] || Layout;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            className="break-inside-avoid mb-6"
        >
            <Link href={`/work/${project.slug}`} className="group block cursor-pointer">
                <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-heading/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative aspect-4/3 overflow-hidden bg-accent-secondary/10">
                        {project.thumbnail && !project.thumbnail.includes("placeholder") ? (
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => {
                                    // If image fails to load (e.g. not yet uploaded), show the placeholder
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                        const placeholder = parent.querySelector('.placeholder-fallback');
                                        if (placeholder) {
                                            placeholder.classList.remove('hidden');
                                            placeholder.classList.add('flex');
                                        }
                                    }
                                }}
                            />
                        ) : null}

                        <div className="placeholder-fallback absolute inset-0 items-center justify-center text-accent-primary/20 hidden">
                            <TypeIcon size={48} />
                        </div>

                        {!project.thumbnail || project.thumbnail.includes("placeholder") ? (
                            <div className="absolute inset-0 flex items-center justify-center text-accent-primary/20">
                                <TypeIcon size={48} />
                            </div>
                        ) : null}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-heading/0 group-hover:bg-heading/10 transition-colors duration-300" />

                        {/* Type Badge */}
                        <div className="absolute top-3 left-3 flex gap-2">
                            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/70 text-accent-primary rounded-full backdrop-blur-md shadow-sm flex items-center gap-1.5">
                                <TypeIcon size={10} />
                                {project.type.replace("-", " ")}
                            </span>
                            {project.status === 'coming-soon' && (
                                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-accent-primary text-accent-primary-foreground rounded-full backdrop-blur-md shadow-sm">
                                    Coming Soon
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <h3 className="font-serif text-lg font-bold text-heading mb-1 leading-tight group-hover:text-accent-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-foreground line-clamp-2 mb-4">
                            {project.shortTagline}
                        </p>

                        {/* Tech Stack & Action */}
                        <div className="flex items-center justify-between pt-4 border-t border-heading/5">
                            <div className="flex -space-x-2 overflow-hidden">
                                {project.techStack.slice(0, 3).map((tech, i) => (
                                    <div
                                        key={i}
                                        className="w-6 h-6 rounded-full bg-accent-secondary/30 dark:bg-foreground/10 border border-white dark:border-white/10 flex items-center justify-center text-[8px] font-bold text-heading/60"
                                        title={tech}
                                    >
                                        {tech[0]}
                                    </div>
                                ))}
                                {project.techStack.length > 3 && (
                                    <div className="w-6 h-6 rounded-full bg-accent-secondary/30 dark:bg-foreground/10 border border-white dark:border-white/10 flex items-center justify-center text-[8px] font-bold text-heading/60">
                                        +{project.techStack.length - 3}
                                    </div>
                                )}
                            </div>

                            <div className="w-8 h-8 rounded-full bg-heading/5 dark:bg-foreground/10 flex items-center justify-center text-heading opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
