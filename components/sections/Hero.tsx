"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background transition-colors duration-500">
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
                        <span className="px-4 py-2 bg-accent-primary/5 border border-accent-primary/20 text-accent-primary rounded-full text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                            Principal Digital Architect | Operations Engineer | Technical Founder
                        </span>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-widest"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15L8.5 18L9.5 13.5L6 10.5L10.5 10L12 5L13.5 10L18 10.5L14.5 13.5L15.5 18L12 15Z" fill="currentColor"/>
                            </svg>
                            Winner: SME News Best Digital Systems Architecture Analyst 2026
                        </motion.div>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-heading mb-6 tracking-tight">
                        Engineering <br />
                        <span className="italic text-accent-primary">
                            Total Freedom.
                        </span>
                        <br />
                        <span className="text-3xl md:text-4xl block mt-6 font-normal opacity-80 text-heading text-balance max-w-4xl mx-auto leading-tight">
                            I build software out of sheer necessity to solve profound human bottlenecks.
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
