"use client";

import { intelligenceDossiers } from "@/data/intelligence";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Layout, Eye } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Safety: <Shield size={16} />,
  Architecture: <Layout size={16} />,
  Automation: <Zap size={16} />,
  SEN: <Eye size={16} />,
  Privacy: <Shield size={16} />,
};

export function IntelligenceSection() {
    const featuredDossiers = intelligenceDossiers.slice(0, 3);

    return (
        <section id="intelligence" className="py-32 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden">
            {/* Architectural Background Detail */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-heading dark:text-foreground mb-6">
                            System <br />
                            <span className="italic text-accent-primary">Intelligence.</span>
                        </h2>
                        <p className="font-sans text-xl text-heading/70 dark:text-foreground/70 leading-relaxed">
                            Detailed briefings on the architecture, psychology, and operational intelligence behind my core digital builds.
                        </p>
                    </div>

                    <Link href="/intelligence" className="hidden md:block">
                        <Button variant="outline" className="group border-accent-primary/50 text-accent-primary hover:bg-accent-primary hover:text-white">
                            Access All Dossiers
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredDossiers.map((dossier) => (
                        <Link href={dossier.url} key={dossier.slug} className="group flex flex-col h-full bg-cream/30 dark:bg-white/5 border border-foreground/10 rounded-2xl overflow-hidden hover:border-accent-primary/40 transition-all duration-300">
                            <div className="p-8 grow flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2 text-accent-primary text-xs font-mono uppercase tracking-[0.2em]">
                                        {iconMap[dossier.category]}
                                        <span>{dossier.category}</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-foreground/40 uppercase">{dossier.type}</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-heading dark:text-foreground mb-4 group-hover:text-accent-primary transition-colors">
                                    {dossier.title}
                                </h3>
                                <p className="font-sans text-foreground/70 mb-8 leading-relaxed grow line-clamp-3 text-sm">
                                    {dossier.description}
                                </p>
                                <div className="mt-auto flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-primary group-hover:gap-4 transition-all">
                                    View Dossier <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link href="/intelligence">
                        <Button variant="outline" size="lg" className="w-full border-accent-primary text-accent-primary">
                            Access All Dossiers
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
