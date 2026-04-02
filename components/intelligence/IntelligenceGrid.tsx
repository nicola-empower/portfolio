"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Zap, Layout, Eye, Briefcase } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
    Safety: <Shield className="text-accent-primary" size={20} />,
    Architecture: <Layout className="text-accent-primary" size={20} />,
    Automation: <Zap className="text-accent-primary" size={20} />,
    SEN: <Eye className="text-accent-primary" size={20} />,
    Privacy: <Shield className="text-accent-primary" size={20} />,
    Operations: <Briefcase className="text-accent-primary" size={20} />,
};

interface IntelligenceGridProps {
    dossiers: any[];
}

export function IntelligenceGrid({ dossiers }: IntelligenceGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dossiers.map((dossier, index) => (
                <motion.div
                    key={dossier.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-card-bg/50 backdrop-blur-md border border-card-border p-8 rounded-2xl hover:border-accent-primary/40 transition-all duration-300 flex flex-col justify-between h-[400px]"
                >
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                {iconMap[dossier.category]}
                                <span className="text-xs font-mono uppercase tracking-widest text-accent-primary">
                                    {dossier.category}
                                </span>
                            </div>
                            <span className="text-xs font-mono text-foreground/40 italic">
                                {dossier.type}
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-serif text-heading mb-4 group-hover:text-accent-primary transition-colors">
                            {dossier.title}
                        </h2>
                        <p className="text-foreground/70 leading-relaxed line-clamp-4 font-sans">
                            {dossier.description}
                        </p>
                    </div>

                    <div className="mt-8">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {dossier.tags.map((tag: string) => (
                                <span key={tag} className="text-[10px] uppercase tracking-tighter bg-foreground/5 px-2 py-0.5 rounded text-foreground/60 border border-foreground/5">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link
                            href={dossier.url}
                            className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-accent-primary group/link"
                        >
                            View Intelligence Dossier
                            <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
