"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Code, AppWindow, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Custom Code",
        description:
            "Tailored frontend solutions built from scratch to match your unique brand identity and requirements.",
        icon: Code,
    },
    {
        title: "Web Applications",
        description:
            "Robust, scalable web apps powered by Next.js and React for seamless user experiences.",
        icon: AppWindow,
    },
    {
        title: "Automation & Scripting",
        description:
            "Streamline your workflows with custom scripts and automation tools to save time and reduce errors.",
        icon: Workflow,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-cream dark:bg-plum-dark transition-colors duration-500 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-4">
                        Our Expertise
                    </h2>
                    <p className="font-sans text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto">
                        We blend creativity with technical precision to deliver digital solutions that empower your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <GlassCard className="h-full flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                                <div className="w-16 h-16 rounded-full bg-rose/20 flex items-center justify-center mb-6 text-charcoal dark:text-cream relative overflow-hidden">
                                    {service.title === "Automation & Scripting" ? (
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <motion.div
                                                initial={{ x: -10, opacity: 0 }}
                                                whileHover={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute"
                                            >
                                                <service.icon size={32} strokeWidth={1.5} />
                                            </motion.div>
                                            <motion.div
                                                initial={{ scale: 1 }}
                                                whileHover={{ scale: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <service.icon size={32} strokeWidth={1.5} />
                                            </motion.div>
                                            {/* Success Checkmark Animation */}
                                            <motion.div
                                                className="absolute inset-0 flex items-center justify-center bg-sage/20"
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                whileHover={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="32"
                                                    height="32"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-charcoal dark:text-cream"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    ) : (
                                        <service.icon size={32} strokeWidth={1.5} />
                                    )}
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-charcoal dark:text-cream mb-4">
                                    {service.title}
                                </h3>
                                <p className="font-sans text-charcoal/80 dark:text-cream/80 leading-relaxed">
                                    {service.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
