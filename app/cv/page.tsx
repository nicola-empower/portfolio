"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapPin, Code, Database, Layout, Terminal, Star, ArrowLeft, Globe, Briefcase } from "lucide-react";

export default function CVPage() {
    return (
        <main className="pt-24 pb-12 bg-background min-h-screen transition-colors duration-500">
            <div className="container mx-auto px-6 mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-heading/60 dark:text-heading/60 hover:text-accent-primary transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform text-accent-primary" />
                    <span className="font-medium">Back to Home</span>
                </Link>
            </div>

            {/* 1. Hero / Header Info */}
            <section className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-heading mb-4">
                        Nicola Berry
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-heading/60 dark:text-heading/60 mb-6">
                        <MapPin size={18} className="text-accent-primary" />
                        <span className="text-lg">Falkirk, Scotland</span>
                    </div>
                    <h2 className="font-sans text-2xl md:text-3xl font-medium text-accent-primary mb-4 text-balance">
                        Nicola Berry - Principal Digital Architect | Operations Engineer | Technical Founder
                    </h2>
                    <p className="font-serif italic text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
                        &quot;Strategic Systems Architect with 10+ years of experience engineering high-performance digital ecosystems. Specialist in bridging the &apos;Visibility Gap&apos; in automated operations through the design of custom Command & Control planes.&quot;
                    </p>
                    <p className="font-sans text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                        Proven track record of architecting, valuing, and managing a 30+ project digital estate with a combined valuation of £3m+. Expert in leveraging AI (Gemini/OpenAI) and low-latency frameworks (Next.js/Astro) to drive operational efficiency at scale.
                    </p>
                </motion.div>
            </section>

            {/* 2. The "About Me" Bio */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-foreground/5">
                    <h3 className="font-serif text-3xl font-bold text-heading mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-accent-primary rounded-full"></span>
                        About Me
                    </h3>
                    <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-sans">
                        <p>
                            &quot;My path to software engineering wasn&apos;t traditional and that is my greatest asset. With over a decade spent in high-pressure care environments and direct sales, I learned to anticipate needs, manage crises, and communicate clearly long before I wrote my first line of code.
                        </p>
                        <p>
                            After founding <strong className="text-heading">Empower Virtual Assistant Services</strong> to help businesses streamline their operations, I realised that the true bottleneck wasn&apos;t just administration; it was the lack of bespoke, intelligent software; none currently meet the full needs of every business. I pivoted to engineering to build the solutions my clients couldn&apos;t find.
                        </p>
                        <p>
                            Today, I combine that deep operational logic with a modern tech stack (React, TypeScript, Next.js). I don&apos;t just build websites; I build platforms like <strong className="text-heading">VowSuite</strong>: resilient, intuitive, and designed with a level of empathy and efficiency that you only get from living a life fully lived. As a mum of three, I know that time is our most valuable currency, so I build software that saves it.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. The "Toolkit" (Tech Stack) */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-serif text-3xl font-bold text-heading mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-accent-primary rounded-full"></span>
                        The Toolkit
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-foreground/5 border-accent-primary/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4 text-accent-primary">
                                <Code size={24} />
                                <h4 className="font-bold text-lg text-heading">Logic & Systems</h4>
                            </div>
                            <p className="text-foreground/70 leading-relaxed">
                                Next.js, React 19, TypeScript, Astro, Ruby on Rails, Python.
                            </p>
                        </div>
                        <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-foreground/5 border-accent-primary/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4 text-accent-primary">
                                <Database size={24} />
                                <h4 className="font-bold text-lg text-heading">Cloud & Data</h4>
                            </div>
                            <p className="text-foreground/70 leading-relaxed">
                                Supabase (PostgreSQL), Firebase, Google Apps Script, Vercel, Netlify.
                            </p>
                        </div>
                        <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-foreground/5 border-accent-primary/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4 text-accent-primary">
                                <Terminal size={24} />
                                <h4 className="font-bold text-lg text-heading">Intelligence</h4>
                            </div>
                            <p className="text-foreground/70 leading-relaxed">
                                LLM Integration, Prompt Engineering, Gemini AI, OpenAI API.
                            </p>
                        </div>
                        <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-foreground/5 border-accent-primary/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4 text-accent-primary">
                                <Layout size={24} />
                                <h4 className="font-bold text-lg text-heading">Systems Monitoring</h4>
                            </div>
                            <p className="text-foreground/70 leading-relaxed">
                                Real-time heartbeats, custom telemetry dashboards, automated incident responses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Professional Experience */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-serif text-3xl font-bold text-heading mb-12 flex items-center gap-3">
                        <span className="w-8 h-1 bg-accent-primary rounded-full"></span>
                        Professional Experience
                    </h3>
                    <div className="space-y-12 relative border-l-2 border-accent-primary/20 ml-3 pl-8 md:pl-12">
                        {/* Founder & Principal Architect | Empower Digital Solutions */}
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-accent-primary border-4 border-background" />
                            <div className="mb-4">
                                <span className="text-sm font-bold text-accent-primary uppercase tracking-wider">Feb 2015 – Present</span>
                                <h4 className="text-2xl font-bold text-heading mt-1">Founder & Principal Architect</h4>
                                <p className="text-xl text-heading/60 dark:text-heading/60 font-medium">Empower Digital Solutions</p>
                            </div>

                            <div className="mb-6">
                                <h5 className="text-lg font-bold text-heading mb-3 flex items-center gap-2">
                                    <Star size={18} className="text-accent-primary" />
                                    Key Achievement: Architected a £3m+ Integrated Digital Ecosystem
                                </h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white/30 dark:bg-black/10 p-4 rounded-lg border border-foreground/5">
                                        <p className="text-sm font-bold text-accent-primary mb-2 uppercase tracking-wide">Infrastructure & DevOps</p>
                                        <p className="text-sm text-foreground/70">
                                            Designed the <strong>Empower Control Plane</strong>, a unified Business OS monitoring telemetry and heartbeats for 100+ automation scripts, ensuring 99.9% uptime via automated incident engineering.
                                        </p>
                                    </div>
                                    <div className="bg-white/30 dark:bg-black/10 p-4 rounded-lg border border-foreground/5">
                                        <p className="text-sm font-bold text-accent-primary mb-2 uppercase tracking-wide">SaaS Product Engineering</p>
                                        <p className="text-sm text-foreground/70">
                                            Developed and launched a suite of <strong>Vertical SaaS</strong> solutions for Medical, Dental, and Wellness sectors, implementing modular &quot;Core Engines&quot; for rapid multi-sector deployment.
                                        </p>
                                    </div>
                                    <div className="bg-white/30 dark:bg-black/10 p-4 rounded-lg border border-foreground/5">
                                        <p className="text-sm font-bold text-accent-primary mb-2 uppercase tracking-wide">AI Implementation</p>
                                        <p className="text-sm text-foreground/70">
                                            Engineered custom LLM-based tools (Gemini 1.5/2.0) for automated content generation and travel intelligence, focusing on prompt security and guardrail logic.
                                        </p>
                                    </div>
                                    <div className="bg-white/30 dark:bg-black/10 p-4 rounded-lg border border-foreground/5">
                                        <p className="text-sm font-bold text-accent-primary mb-2 uppercase tracking-wide">Estate Valuation & Exit Strategy</p>
                                        <p className="text-sm text-foreground/70">
                                            Orchestrated the technical audit and valuation of a 32-project portfolio, establishing market-ready &quot;boxing up&quot; procedures for full-exit transfers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2014 - 2020 | Professional Care & Advocacy */}
                        <div className="relative opacity-70">
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-accent-primary/50 border-4 border-background dark:border-[#0d0d0d]" />
                            <div className="mb-2">
                                <span className="text-sm font-bold text-accent-primary/60 uppercase tracking-wider">2014 – 2020</span>
                                <h4 className="text-xl font-bold text-heading mt-1">Professional Care & Advocacy</h4>
                                <p className="text-heading/60 dark:text-heading/60 font-medium">Private & Public Sector</p>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-1 text-foreground/70 text-sm">
                                <li>Crisis management, high-pressure decision making and unwavering resilience.</li>
                            </ul>
                        </div>

                        {/* 2010 - 2014 | International Experience */}
                        <div className="relative opacity-70">
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-accent-primary/50 border-4 border-background dark:border-[#0d0d0d]" />
                            <div className="mb-2">
                                <span className="text-sm font-bold text-accent-primary/60 uppercase tracking-wider">2010 – 2014</span>
                                <h4 className="text-xl font-bold text-heading mt-1">International Experience (North Cyprus)</h4>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-1 text-foreground/70 text-sm">
                                <li>Developed cultural adaptability and strong communication skills across Teaching, Sales, and Hospitality.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Education & Languages */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div>
                        <h3 className="font-serif text-3xl font-bold text-heading mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-accent-primary rounded-full"></span>
                            Education
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-foreground/5">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-bold text-lg text-heading">HND Business Administration</h4>
                                    <span className="text-xs font-bold bg-accent-primary/10 text-accent-primary px-2 py-1 rounded-full">SCQF Level 8</span>
                                </div>
                                <p className="text-sm text-heading/60 dark:text-heading/60 mb-3">Scotland</p>
                                <p className="text-foreground/70 text-sm mb-2">Focus: Business Law, Economics, Financial Management.</p>
                                <p className="text-foreground/70 text-sm italic">Relevance: Provides the business logic foundation for my software architecture.</p>
                            </div>

                            <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-foreground/5">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-bold text-lg text-heading">Scottish Highers</h4>
                                    <span className="text-xs font-bold bg-accent-primary/10 text-accent-primary px-2 py-1 rounded-full">SCQF Level 6</span>
                                </div>
                                <ul className="space-y-1 text-sm text-foreground/70">
                                    <li><strong>STEM:</strong> Mathematics, Chemistry.</li>
                                    <li><strong>Languages:</strong> English, Spanish, French.</li>
                                    <li><strong>Vocational:</strong> Hospitality.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <h3 className="font-serif text-3xl font-bold text-heading mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-accent-primary rounded-full"></span>
                            Languages
                        </h3>
                        <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border border-foreground/5 h-full">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium text-heading">English</span>
                                        <span className="text-accent-primary text-sm">Native</span>
                                    </div>
                                    <div className="w-full bg-heading/10 dark:bg-foreground/10 rounded-full h-2">
                                        <div className="bg-accent-primary h-2 rounded-full w-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium text-heading">Spanish</span>
                                        <span className="text-accent-primary text-sm">Higher Proficiency (Academic)</span>
                                    </div>
                                    <div className="w-full bg-heading/10 dark:bg-foreground/10 rounded-full h-2">
                                        <div className="bg-accent-primary h-2 rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium text-heading">French</span>
                                        <span className="text-accent-primary text-sm">Higher Proficiency (Academic)</span>
                                    </div>
                                    <div className="w-full bg-heading/10 dark:bg-foreground/10 rounded-full h-2">
                                        <div className="bg-accent-primary h-2 rounded-full w-[70%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium text-heading">Turkish</span>
                                        <span className="text-accent-primary text-sm">Conversational</span>
                                    </div>
                                    <div className="w-full bg-heading/10 dark:bg-foreground/10 rounded-full h-2">
                                        <div className="bg-accent-primary h-2 rounded-full w-[40%]"></div>
                                    </div>
                                    <p className="text-xs text-foreground/50 mt-1">(Acquired via residence in TRNC)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. The "Superpowers" (Soft Skills) */}
            <section className="container mx-auto px-6 mb-24">
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-serif text-3xl font-bold text-heading mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-accent-primary rounded-full"></span>
                        The Superpowers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-4 p-6 bg-accent-primary/5 rounded-xl border border-accent-primary/10">
                            <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center text-accent-primary mb-2">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-heading mb-2">Distributed Logic Specialist</h4>
                                <p className="text-foreground/70 text-sm leading-relaxed">Expert at managing complex logic that lives across multiple accounts and platforms (Google, Vercel, Stripe).</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-6 bg-accent-primary/5 rounded-xl border border-accent-primary/10">
                            <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center text-accent-primary mb-2">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-heading mb-2">Product-to-Profit Engineer</h4>
                                <p className="text-foreground/70 text-sm leading-relaxed">Understanding the market value of code, not just the syntax. Focused on driving tangible ROI through technical excellence.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-6 bg-accent-primary/5 rounded-xl border border-accent-primary/10">
                            <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center text-accent-primary mb-2">
                                <Terminal size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-heading mb-2">Low-Code/High-Tech Bridge</h4>
                                <p className="text-foreground/70 text-sm leading-relaxed">Expert at using tools like Google Sheets as robust databases for high-performance frontends to lower infrastructure costs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Contact Form */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-serif text-3xl font-bold text-heading mb-8 text-center">
                        Let&apos;s Build Something Great
                    </h3>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
