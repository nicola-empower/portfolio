"use client";

import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="section-padding bg-background transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Image Placeholder Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="aspect-square md:aspect-4/5 rounded-2xl overflow-hidden bg-accent-secondary/10 relative group">
                            <Image
                                src="/nicola_professional.png"
                                alt="Nicola Berry - Principal Digital Architect"
                                fill
                                priority={true}
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Decorative Overlay */}
                            <div className="absolute inset-0 bg-linear-to-tr from-accent-primary/10 to-accent-secondary/10 mix-blend-multiply dark:mix-blend-screen opacity-30 group-hover:opacity-10 transition-opacity duration-500" />

                            {/* Border Frame */}
                            <div className="absolute inset-4 border border-background/30 rounded-xl z-10" />
                        </div>

                        {/* Floating Accreditation Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="absolute -top-4 left-4 md:-left-4 z-20 flex items-center gap-3 px-4 py-2 bg-[#4A0E0E] dark:bg-[#4A0E0E]/90 backdrop-blur-md border border-[#D4A84F]/50 dark:border-[#D4A84F]/40 rounded-xl shadow-xl"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4A84F]">
                                <path d="M10 19C10 19 8.5 17.5 7 14C5.5 10.5 6 7 6 7M6 7C6 7 8 8.5 9 11C10 13.5 10 16 10 16M6 7C6 7 4.5 8.5 4 11C3.5 13.5 4 16 4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className="flex flex-col">
                                <span className="text-[#D4A84F] text-[8px] font-bold uppercase tracking-[0.2em] leading-tight">Winner 2026</span>
                                <span className="text-white/95 text-[10px] font-serif font-bold leading-tight">SME News Award</span>
                            </div>
                        </motion.div>

                        {/* Floating Badge (Serving Globally) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-6 -right-6 bg-card-bg/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-foreground/10 hidden md:block z-20"
                        >
                            <div className="flex items-center gap-3 text-heading">
                                <div className="p-2 bg-accent-primary/10 rounded-full">
                                    <Globe size={20} className="text-accent-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-foreground/60">Serving</p>
                                    <p className="font-serif font-bold">Globally</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-heading mb-8 leading-tight">
                            Built from <br />
                            <span className="text-accent-primary">
                                Visceral Necessity.
                            </span>
                        </h2>

                        <div className="space-y-6 text-base md:text-lg text-foreground font-sans leading-relaxed">
                            <p>
                                Hi, I&apos;m Nicola. I am an <span className="text-accent-primary font-bold italic">award-winning</span> Principal Digital Architect and the founder of <span className="font-bold text-heading">Empower Digital Solutions.</span> I was recently named the <strong>SME News Best Digital Systems Architecture Analyst 2026</strong>, a recognition of my work in building high-fidelity operational environments.
                            </p>
                            <p>
                                I am a builder forced by circumstance to engineer my own solutions. Every piece of software I create is born from a genuine need. Whether I am building a &quot;shared brain&quot; to survive the overwhelming cognitive load of being the default family carer, architecting covert evidence-gathering networks for domestic abuse survivors, or automating away 16 hours of a client&apos;s weekly administrative nightmare: I build tools that fundamentally change how people experience their day-to-day lives.
                            </p>
                            <p>
                                I don&apos;t just write sterile corporate code. I leverage advanced technology: from AI translation engines to immutable metadata vaults: to aggressively reclaim time, autonomy, and peace for my clients and myself.
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-foreground/10 flex items-center gap-2 text-foreground/60">
                            <MapPin size={18} className="text-accent-primary" />
                            <span className="text-sm font-medium tracking-wide uppercase">
                                Based in: Scotland, Serving Globally
                            </span>
                        </div>

                        <div className="mt-6">
                            <a href="/cv" className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 font-medium transition-colors group">
                                <span>View Full CV</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
