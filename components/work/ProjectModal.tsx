"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { journals } from "@/data/journals";
import Image from "next/image";
import Link from "next/link";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

// Helper to turn URLs in text into clickable links
function TextWithLinks({ text }: { text?: string }) {
    if (!text) return null;
    
    return (
        <>
            {text.split(' ').map((word, i) => {
                const isUrl = word.includes('http://') || word.includes('https://') || word.includes('www.');
                if (isUrl) {
                    // Clean the word of trailing punctuation like ) or . or ,
                    const cleanUrl = word.replace(/[).,]+$/, '');
                    const punctuation = word.slice(cleanUrl.length);
                    return (
                        <span key={i}>
                            <a
                                href={cleanUrl.startsWith('http') ? cleanUrl : `https://${cleanUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-primary underline hover:opacity-80 break-all"
                            >
                                {cleanUrl}
                            </a>
                            {punctuation}{' '}
                        </span>
                    );
                }
                return word + ' ';
            })}
        </>
    );
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImage, setCurrentImage] = useState(0);

    if (!project) return null;

    // Use the gallery if available, otherwise fallback to the single thumbnail
    const images = project.gallery && project.gallery.length > 0
        ? project.gallery
        : [project.thumbnail];

    const nextImage = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl max-h-[90vh] bg-background border border-foreground/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
                    >
                        {/* Close Button (Mobile) */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-heading/50 rounded-full md:hidden text-background"
                        >
                            <X size={20} />
                        </button>

                        {/* LEFT: Image Carousel */}
                        <div className="w-full md:w-3/5 bg-background relative group h-64 md:h-auto flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-foreground/5">
                            <div className="relative w-full h-full">
                                {images[currentImage] && !images[currentImage].includes("placeholder") ? (
                                    <Image
                                        src={images[currentImage]}
                                        alt={`${project.title} screenshot ${currentImage + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-foreground/20">
                                        No Image Available
                                    </div>
                                )}
                            </div>

                            {/* Navigation Arrows (Only if multiple images) */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-heading/50 hover:bg-accent-primary text-background rounded-full opacity-0 group-hover:opacity-100 transition-all"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-heading/50 hover:bg-accent-primary text-background rounded-full opacity-0 group-hover:opacity-100 transition-all"
                                    >
                                        <ChevronRight size={24} />
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {images.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? "bg-accent-primary w-4" : "bg-foreground/30"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* RIGHT: Content & Details */}
                        <div className="w-full md:w-2/5 p-8 overflow-y-auto bg-background">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-heading mb-2 font-serif">{project.title}</h2>
                                    <p className="text-accent-primary font-medium text-sm tracking-tight">{project.shortTagline || project.description}</p>
                                </div>
                                {/* Close Button (Desktop) */}
                                <button
                                    onClick={onClose}
                                    className="hidden md:block p-2 hover:bg-foreground/5 rounded-full text-foreground/60 hover:text-heading transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Project Links */}
                                <div className="flex gap-4">
                                    {project.liveUrl && project.liveUrl !== "#" && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-accent-primary text-accent-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
                                        >
                                            <ExternalLink size={14} /> {(project.type || project.category) === "website" ? "View Live Site" : "Live Demo"}
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 border border-foreground/20 text-heading hover:bg-foreground/5 rounded-lg font-medium transition-colors text-sm"
                                        >
                                            View Case Study
                                        </a>
                                    )}
                                </div>

                                <div className="w-full h-px bg-foreground/10" />

                                {/* The "Why" - Using your Problem/Solution data */}
                                <div>
                                    <h3 className="text-base font-bold text-heading mb-2">Overview</h3>
                                    <p className="text-foreground/80 leading-relaxed text-sm">
                                        <TextWithLinks text={project.overview || project.description} />
                                    </p>
                                </div>

                                {(project.problem || project.details?.problem) && (
                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">The Challenge</h3>
                                        <p className="text-foreground/80 leading-relaxed text-sm">
                                            <TextWithLinks text={project.problem || project.details?.problem} />
                                        </p>
                                    </div>
                                )}

                                {(project.solution || project.details?.solution) && (
                                    <div>
                                        <h3 className="text-base font-bold text-heading mb-2">The Solution</h3>
                                        <p className="text-foreground/80 leading-relaxed text-sm">
                                            <TextWithLinks text={project.solution || project.details?.solution} />
                                        </p>
                                    </div>
                                )}

                                {/* Related Journals (Multiple) */}
                                {project.details?.relatedJournals && project.details.relatedJournals.length > 0 && (
                                    <div className="pt-2">
                                        <h3 className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-3">Technical Intelligence</h3>
                                        <div className="space-y-3">
                                            {project.details.relatedJournals.map((slug) => {
                                                const journal = journals.find(j => j.slug === slug);
                                                if (!journal) return null;
                                                return (
                                                    <Link
                                                        key={slug}
                                                        href={`/journal/${slug}`}
                                                        className="block p-3 rounded-xl bg-card-bg border border-foreground/5 hover:border-accent-secondary/30 transition-all group"
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2 text-accent-secondary mb-1">
                                                                <span className="text-[10px] font-bold tracking-widest uppercase">Journal</span>
                                                            </div>
                                                            <span className="text-[10px] text-foreground/40 font-mono">{journal.date}</span>
                                                        </div>
                                                        <h4 className="text-sm font-bold text-heading leading-tight group-hover:text-accent-secondary transition-colors line-clamp-1">
                                                            {journal.title}
                                                        </h4>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div className="pt-2">
                                    <h3 className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-3">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {(project.techStack || project.details?.technicalStack)?.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-accent-secondary/10 text-foreground/80 text-[10px] uppercase font-bold tracking-wider rounded-md border border-foreground/5"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
