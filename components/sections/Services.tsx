"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Compass, Cpu, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "System Architecture & Audits",
        description:
            "I evaluate your existing operations to design resilient, scalable data pipelines and custom applications, curing legacy technical debt.",
        icon: Cpu,
    },
    {
        title: "Fractional Technical Partner",
        description:
            "I act as your strategic consultant to architect your technical roadmap, build your MVPs, and ensure your business scales without friction.",
        icon: Compass,
    },
    {
        title: "Operational AI Automation",
        description:
            "I identify severe administrative bottlenecks and replace them with zero-cost serverless AI automations, decisively reclaiming your time.",
        icon: Workflow,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-background transition-colors duration-500 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-heading mb-4">
                        Strategic Capabilities
                    </h2>
                    <p className="font-sans text-lg text-foreground/70 max-w-2xl mx-auto">
                        I step into broken operational environments and architect high-performance, resilient ecosystems that give you your life back.
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
                                <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center mb-6 text-accent-primary relative overflow-hidden">
                                    {service.title === "Operational AI Automation" ? (
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
                                                className="absolute inset-0 flex items-center justify-center bg-accent-secondary/20"
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
                                                    className="text-accent-primary"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    ) : (
                                        <service.icon size={32} strokeWidth={1.5} />
                                    )}
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-heading mb-4">
                                    {service.title}
                                </h3>
                                <p className="font-sans text-foreground/80 leading-relaxed">
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
