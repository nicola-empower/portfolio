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
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-heading mb-6 tracking-tight">
                        Build Your <br />
                        <span className="italic text-accent-primary">
                            Digital Authority.
                        </span>
                        <br />
                        <span className="text-3xl md:text-5xl block mt-4 font-normal opacity-80 text-heading text-balance max-w-4xl mx-auto">
                            Principal Digital Architect | Operations Engineer | Technical Founder
                        </span>
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        High-impact platforms engineered for flawless performance. Friendly support, powerful code.
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
