"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream dark:bg-plum-dark transition-colors duration-500">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose/30 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen dark:bg-rose/10"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-sage/30 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen dark:bg-sage/10"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-taupe/30 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen dark:bg-taupe/10"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 100, 0],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal dark:text-cream mb-6 tracking-tight">
                        Build Your <br />
                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-taupe dark:from-cream dark:to-taupe">
                            Digital Authority.
                        </span>
                        <br />
                        <span className="text-3xl md:text-5xl block mt-4 font-normal">
                            Custom Web Solutions & Automation.
                        </span>
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-charcoal/80 dark:text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed">
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
