"use client";

import { motion } from "framer-motion";
import { Database, Zap, Share2, ShieldCheck, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function ACESection() {
    return (
        <section id="ace" className="section-padding bg-background relative overflow-hidden">
            {/* SEO Hidden Keywords */}
            <div className="sr-only">
                <h3>Headless CMS Google Sheets</h3>
                <p>Astro Google Sheets integration, Next.js Google Sheets database, Autonomous Content Engine, Zero-cost CMS architecture, Decoupled web systems, custom website editable by client, developer lock-in solution.</p>
            </div>

            {/* Background Grid Detail */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-mono uppercase tracking-widest mb-6 border border-accent-primary/20"
                    >
                        <ShieldCheck size={14} />
                        Strategic Infrastructure
                    </motion.div>
                    
                    <h2 className="font-serif text-4xl md:text-6xl font-bold text-heading mb-8">
                        Digital <span className="italic text-accent-primary">Sovereignty.</span> <br />
                        ACE: The Autonomous Content Engine.
                    </h2>
                    
                    <div className="bg-accent-primary/10 border-l-4 border-accent-primary p-6 mb-12 rounded-r-2xl max-w-2xl mx-auto text-left">
                        <p className="font-serif text-lg md:text-xl text-heading italic leading-relaxed">
                            "A custom-coded website should not mean a client is locked out of their own content."
                        </p>
                    </div>
                    
                    <p className="font-sans text-xl text-foreground/70 leading-relaxed">
                        Custom-coded websites shouldn't trap you in developer lock-in. 
                        ACE provides a high-performance "Headless Spreadsheet" architecture that gives you 
                        <strong className="text-heading"> total control </strong> of your content without the technical debt.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <Feature 
                        icon={<ShieldCheck className="text-emerald-500" />}
                        title="Exit-Proof Architecture"
                        description="Stop developer lock-in. ACE decouples your content from the code, ensuring you own your digital assets forever."
                    />
                    <Feature 
                        icon={<Database className="text-blue-500" />}
                        title="Client-Friendly CMS"
                        description="If you can edit a spreadsheet, you can run your empire. No complex dashboards or steep learning curves."
                    />
                    <Feature 
                        icon={<Zap className="text-amber-500" />}
                        title="Vibe-Safe Engineering"
                        description="The perfect bridge for modern 'vibe-coded' sites. Professional-grade infrastructure that stays clean and maintainable."
                    />
                    <Feature 
                        icon={<Share2 className="text-purple-500" />}
                        title="Zero-Cost Scale"
                        description="Eliminate expensive monthly CMS subscriptions. ACE leverages secure, free-tier cloud infrastructure for maximum ROI."
                    />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-accent-primary/5 rounded-3xl p-8 md:p-12 border border-accent-primary/10">
                    <div className="max-w-lg text-center md:text-left">
                        <h3 className="font-serif text-2xl font-bold text-heading mb-4">Ready to architect your autonomy?</h3>
                        <p className="font-sans text-foreground/70 mb-0">
                            Whether you're an experienced engineer or just starting your journey, ACE provides the professional bridge between data and design.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <Link href="#contact">
                            <Button size="lg" className="w-full sm:w-auto group">
                                Implement ACE
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Feature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <GlassCard className="h-full group hover:border-accent-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <h4 className="font-serif text-xl font-bold text-heading mb-3">{title}</h4>
                <p className="font-sans text-sm text-foreground/60 leading-relaxed">{description}</p>
            </GlassCard>
        </motion.div>
    );
}
