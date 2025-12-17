"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code, FileText, Zap, Layout, Globe } from "lucide-react";

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
                <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-charcoal/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-taupe/10">
                        {project.thumbnail && !project.thumbnail.includes("placeholder") ? (
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-charcoal/20 dark:text-cream/20">
                                <TypeIcon size={48} />
                            </div>
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />

                        {/* Type Badge */}
                        <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-charcoal/90 text-charcoal dark:text-cream rounded-full backdrop-blur-md shadow-sm flex items-center gap-1.5">
                                <TypeIcon size={10} />
                                {project.type.replace("-", " ")}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <h3 className="font-serif text-lg font-bold text-charcoal dark:text-cream mb-1 leading-tight group-hover:text-rose transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-sm text-charcoal/60 dark:text-cream/60 line-clamp-2 mb-4">
                            {project.shortTagline}
                        </p>

                        {/* Tech Stack & Action */}
                        <div className="flex items-center justify-between pt-4 border-t border-charcoal/5 dark:border-white/5">
                            <div className="flex -space-x-2 overflow-hidden">
                                {project.techStack.slice(0, 3).map((tech, i) => (
                                    <div
                                        key={i}
                                        className="w-6 h-6 rounded-full bg-cream dark:bg-charcoal border border-white dark:border-charcoal flex items-center justify-center text-[8px] font-bold text-charcoal/50 dark:text-cream/50"
                                        title={tech}
                                    >
                                        {tech[0]}
                                    </div>
                                ))}
                                {project.techStack.length > 3 && (
                                    <div className="w-6 h-6 rounded-full bg-cream dark:bg-charcoal border border-white dark:border-charcoal flex items-center justify-center text-[8px] font-bold text-charcoal/50 dark:text-cream/50">
                                        +{project.techStack.length - 3}
                                    </div>
                                )}
                            </div>

                            <div className="w-8 h-8 rounded-full bg-charcoal/5 dark:bg-white/10 flex items-center justify-center text-charcoal dark:text-cream opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
