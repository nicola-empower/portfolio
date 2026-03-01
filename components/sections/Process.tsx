"use client";

import { motion } from "framer-motion";
import { MessageCircle, Code, HeartHandshake } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const steps = [
    {
        id: 1,
        title: "Discovery",
        subtitle: "Listening to your needs",
        description:
            "We start with a friendly chat to understand your goals. No jargon, just a clear conversation about what you want to achieve.",
        icon: MessageCircle,
    },
    {
        id: 2,
        title: "Build",
        subtitle: "Code & Automation",
        description:
            "I craft your solution using powerful, clean code. Everything is built to run smoothly and efficiently, so you don't have to worry.",
        icon: Code,
    },
    {
        id: 3,
        title: "Empower",
        subtitle: "Handover & Training",
        description:
            "You get the keys and the knowledge. I ensure you feel confident managing your new digital tools before we wrap up.",
        icon: HeartHandshake,
    },
];

export function Process() {
    return (
        <section id="process" className="py-24 bg-background transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-heading mb-4">
                        How I Work
                    </h2>
                    <p className="font-sans text-lg text-foreground max-w-2xl mx-auto">
                        Simple, transparent, and focused on you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-accent-primary/20 via-accent-secondary/40 to-accent-primary/20 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            {/* Icon Circle */}
                            <div className="w-24 h-24 rounded-full bg-background border border-accent-primary/30 flex items-center justify-center shadow-sm mb-6 z-10 transition-transform duration-300 hover:scale-110">
                                <step.icon strokeWidth={1.5} className="w-10 h-10 text-accent-primary" />
                            </div>

                            {/* Content */}
                            <GlassCard className="p-8 w-full h-full flex flex-col items-center border-0 bg-white/40 dark:bg-black/20">
                                <h3 className="font-serif text-2xl font-bold text-heading mb-1">
                                    {step.title}
                                </h3>
                                <span className="font-sans text-sm font-medium text-accent-primary uppercase tracking-wider mb-4 block">
                                    {step.subtitle}
                                </span>
                                <p className="font-sans text-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
