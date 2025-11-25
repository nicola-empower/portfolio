"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { Mail, Globe, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-cream dark:bg-plum-dark transition-colors duration-500 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sage/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-6">
                            Start Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose to-taupe">
                                Transformation.
                            </span>
                        </h2>
                        <p className="font-sans text-lg text-charcoal/80 dark:text-cream/80 mb-12 leading-relaxed">
                            Ready to elevate your digital presence? Let's build something extraordinary together.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/50 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="text-charcoal dark:text-cream w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-charcoal/50 dark:text-cream/50 mb-1">Email</p>
                                    <a href="mailto:nicola@empowerdigitalsolutions.co.uk" className="font-serif text-xl text-charcoal dark:text-cream hover:text-rose transition-colors">
                                        nicola@empowerdigitalsolutions.co.uk
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/50 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="text-charcoal dark:text-cream w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-charcoal/50 dark:text-cream/50 mb-1">Website</p>
                                    <a href="#" className="font-serif text-xl text-charcoal dark:text-cream hover:text-rose transition-colors">
                                        www.empowerdigitalsolutions.co.uk
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-8">
                                <a href="#" className="w-12 h-12 rounded-full border border-charcoal/20 dark:border-cream/20 flex items-center justify-center hover:bg-charcoal hover:text-cream dark:hover:bg-cream dark:hover:text-charcoal transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full border border-charcoal/20 dark:border-cream/20 flex items-center justify-center hover:bg-charcoal hover:text-cream dark:hover:bg-cream dark:hover:text-charcoal transition-all duration-300">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-2/3"
                    >
                        <GlassCard className="p-8 md:p-12">
                            <form action="https://formspree.io/f/mblkwkpp" method="POST" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-charcoal/70 dark:text-cream/70 uppercase tracking-wide">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-white/50 dark:bg-charcoal/50 border border-charcoal/10 dark:border-cream/10 rounded-lg px-4 py-3 text-charcoal dark:text-cream focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all placeholder:text-charcoal/30 dark:placeholder:text-cream/30"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-charcoal/70 dark:text-cream/70 uppercase tracking-wide">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full bg-white/50 dark:bg-charcoal/50 border border-charcoal/10 dark:border-cream/10 rounded-lg px-4 py-3 text-charcoal dark:text-cream focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all placeholder:text-charcoal/30 dark:placeholder:text-cream/30"
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="projectType" className="text-sm font-medium text-charcoal/70 dark:text-cream/70 uppercase tracking-wide">
                                        Project Type
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            className="w-full bg-white/50 dark:bg-charcoal/50 border border-charcoal/10 dark:border-cream/10 rounded-lg px-4 py-3 text-charcoal dark:text-cream focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="Custom Web App">Custom Web App</option>
                                            <option value="Website">Website</option>
                                            <option value="Automation">Automation</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/50 dark:text-cream/50">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-charcoal/70 dark:text-cream/70 uppercase tracking-wide">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full bg-white/50 dark:bg-charcoal/50 border border-charcoal/10 dark:border-cream/10 rounded-lg px-4 py-3 text-charcoal dark:text-cream focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all placeholder:text-charcoal/30 dark:placeholder:text-cream/30 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" size="lg" className="w-full md:w-auto rounded-full px-8">
                                        Send Enquiry
                                    </Button>
                                </div>
                            </form>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
