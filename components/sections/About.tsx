"use client";

import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-24 bg-cream dark:bg-plum-dark transition-colors duration-500 overflow-hidden">
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
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-taupe/10 relative group">
                            <Image
                                src="/portfolio.jpg"
                                alt="Nicola - Empower Digital Solutions"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Decorative Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-rose/20 to-sage/20 mix-blend-multiply dark:mix-blend-screen opacity-30 group-hover:opacity-10 transition-opacity duration-500" />

                            {/* Border Frame */}
                            <div className="absolute inset-4 border border-cream/50 dark:border-white/10 rounded-xl z-10" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-6 -right-6 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hidden md:block"
                        >
                            <div className="flex items-center gap-3 text-charcoal dark:text-cream">
                                <div className="p-2 bg-rose/10 rounded-full">
                                    <Globe size={20} className="text-rose" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-charcoal/60 dark:text-cream/60">Serving</p>
                                    <p className="font-serif font-bold">Globally</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal dark:text-cream mb-8 leading-tight">
                            More Than Code. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose to-taupe">
                                I Build Freedom.
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-charcoal/80 dark:text-cream/80 font-sans leading-relaxed">
                            <p>
                                Hi, I'm Nicola. I founded <span className="font-bold text-charcoal dark:text-cream">Empower Digital Solutions</span> because I believe technology should serve you, not the other way around.
                            </p>
                            <p>
                                I don't just build websites; I engineer digital ecosystems. Whether it's a bespoke web application, a custom automation script to save you hours of admin, or a high-performance portfolio, my goal is simple: to give you your time back.
                            </p>
                            <p>
                                As a developer, I blend technical precision with a supportive, human approach. No jargon, no confusion—just powerful results delivered with clarity and care.
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-charcoal/10 dark:border-cream/10 flex items-center gap-2 text-charcoal/60 dark:text-cream/60">
                            <MapPin size={18} />
                            <span className="text-sm font-medium tracking-wide uppercase">
                                Based in: Scotland, Serving Globally
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
