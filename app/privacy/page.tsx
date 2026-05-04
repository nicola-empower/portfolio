"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export default function PrivacyPage() {
    const lastUpdated = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl md:text-6xl font-bold text-heading mb-4">
                        Privacy & <span className="text-accent-primary italic">Terms.</span>
                    </h1>
                    <p className="text-foreground/60 mb-12 font-sans tracking-widest uppercase text-xs">
                        Last Updated: {lastUpdated}
                    </p>

                    <GlassCard className="p-8 md:p-12 space-y-12 bg-card-bg border-foreground/5 backdrop-blur-md">
                        {/* Section 1: Privacy */}
                        <section className="space-y-6">
                            <h2 className="font-serif text-3xl font-bold text-heading">1. Digital Privacy & Forensic Safeguarding</h2>
                            <p className="text-foreground/80 leading-relaxed">
                                As a Principal Digital Architect, I operate a <strong>Forensic Shield</strong> protocol across this estate. This is a proactive security measure designed to protect my infrastructure, my clients, and my professional integrity from malicious actors and persistent harassment.
                            </p>
                            
                            <div className="space-y-4">
                                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-accent-primary">The Forensic Shield Protocol</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    When you interact with the contact form, I capture a <strong>Digital Fingerprint</strong>. This technical dossier includes your browser type, platform, resolution, and connection metrics. This data is logged as a forensic audit trail to provide evidence-based protection against unauthorised access or malicious intent. 
                                </p>
                                <p className="text-foreground/70 text-xs italic leading-relaxed">
                                    Note: This protocol has zero impact on genuine clients and enquiries; it exists solely as a protective layer to ensure a secure, accountable environment for professional engagement.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-accent-primary">ICO Compliance & Data Sovereignty</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    I am a registered Data Controller with the <strong>Information Commissioner&apos;s Office (ICO)</strong>, registration number: <strong>ZC102381</strong>. Your data is processed in strict accordance with the UK GDPR and the Data Protection Act 2018. I maintain absolute data sovereignty, ensuring your information is never shared with third-party marketing entities.
                                </p>
                            </div>
                        </section>

                        <hr className="border-foreground/5" />

                        {/* Section 2: Security Principles */}
                        <section className="space-y-6">
                            <h2 className="font-serif text-3xl font-bold text-heading">2. Data Security & ISO-Aligned Principles</h2>
                            <p className="text-foreground/80 leading-relaxed">
                                While I operate as a boutique consultancy, my digital infrastructure is architected to align with <strong>ISO 27001</strong> information security principles.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-accent-primary">Security by Design</h3>
                                    <p className="text-foreground/70 text-xs leading-relaxed">
                                        This estate avoids the use of third-party tracking pixels (e.g., Meta, Google Analytics). Instead, I utilize a custom-engineered, private <strong>Google Cloud Sentry</strong> to ensure your interaction remains confidential and sovereign.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-accent-primary">Data Integrity</h3>
                                    <p className="text-foreground/70 text-xs leading-relaxed">
                                        All transmissions are protected via high-grade <strong>SSL/TLS encryption</strong>. Once logged, your data is stored within an immutable audit trail, ensuring absolute integrity and availability for compliance purposes.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-foreground/5" />

                        {/* Section 3: Terms */}
                        <section className="space-y-6">
                            <h2 className="font-serif text-3xl font-bold text-heading">3. Terms of Engagement</h2>
                            <p className="text-foreground/80 leading-relaxed">
                                Accessing this portfolio constitutes acceptance of the following professional terms.
                            </p>

                            <div className="space-y-4">
                                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-accent-primary">Intellectual Property</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    All content, including technical journals, case studies, project architecture descriptions, and visual assets, are the exclusive intellectual property of Nicola Berry. Unauthorized reproduction or use of these professional insights is strictly prohibited.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-accent-primary">Professional Indemnity</h3>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    My professional services and digital consultations are backed by <strong>Professional Indemnity Insurance provided by PolicyBee</strong>, ensuring a secure and accountable partnership for all clients.
                                </p>
                            </div>
                        </section>

                        <section className="pt-8 text-center border-t border-foreground/5">
                            <p className="text-foreground/40 text-sm italic">
                                For any enquiries regarding these terms, please contact: 
                                <a href="mailto:connect@nicolaberry.uk" className="text-accent-primary hover:underline ml-1">
                                    connect@nicolaberry.uk
                                </a>
                            </p>
                        </section>
                    </GlassCard>
                </motion.div>
            </div>
        </main>
    );
}
