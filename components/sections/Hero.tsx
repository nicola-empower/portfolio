"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col pt-32 lg:pt-40 items-center justify-center overflow-hidden bg-background transition-colors duration-500">
            {/* Clean Premium Background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(208,2,27,0.05),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_80%,rgba(208,2,27,0.03),transparent_50%)] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex flex-col items-center gap-4 mb-6">
                        <span className="px-5 py-2 bg-foreground/5 dark:bg-white/5 border border-foreground/20 dark:border-white/10 text-foreground/80 dark:text-white/60 rounded-full text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase backdrop-blur-sm">
                            Principal Digital Architect | Operations Engineer | Technical Founder
                        </span>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="group relative flex items-center gap-4 px-6 py-2.5 bg-[#4A0E0E]/80 dark:bg-[#4A0E0E]/40 backdrop-blur-md border border-[#D4A84F]/50 dark:border-[#D4A84F]/30 rounded-full shadow-[0_5_15px_rgba(74,14,14,0.1)] hover:shadow-[0_8_25px_rgba(74,14,14,0.15)] transition-all duration-500 cursor-default"
                        >
                            {/* Left Laurel */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4A84F] opacity-90 group-hover:opacity-100 transition-opacity">
                                <path d="M10 19C10 19 8.5 17.5 7 14C5.5 10.5 6 7 6 7M6 7C6 7 8 8.5 9 11C10 13.5 10 16 10 16M6 7C6 7 4.5 8.5 4 11C3.5 13.5 4 16 4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span className="text-[#D4A84F] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] whitespace-nowrap drop-shadow-sm">
                                Winner: SME News Best Digital Systems Architecture Analyst 2026
                            </span>

                            {/* Right Laurel (Flipped) */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4A84F] opacity-90 group-hover:opacity-100 transition-opacity transform -scale-x-100">
                                <path d="M14 19C14 19 15.5 17.5 17 14C18.5 10.5 18 7 18 7M18 7C18 7 16 8.5 15 11C14 13.5 14 16 14 16M18 7C18 7 19.5 8.5 20 11C20.5 13.5 20 16 20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            {/* Subtle Glow Overlay */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#D4A84F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                        </motion.div>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-heading mb-6 tracking-tight">
                        Engineering <br />
                        <span className="italic text-accent-primary">
                            Total Freedom.
                        </span>
                        <br />
                        <span className="text-3xl md:text-4xl block mt-6 font-normal opacity-80 text-heading text-balance max-w-4xl mx-auto leading-tight">
                            I build software out of sheer necessity to solve profound business bottlenecks.
                        </span>
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                        From automating away 16-hour administrative nightmares to architecting secure lifelines for those who need them most, I don't just write code - I engineer time, autonomy, and peace.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#contact">
                            <Button size="lg">Start Your Project</Button>
                        </Link>
                        <Link href="#work">
                            <Button variant="outline" size="lg">
                                View My Work
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
