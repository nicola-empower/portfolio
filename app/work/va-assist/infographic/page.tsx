"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Zap, TrendingUp, Search, Cpu, Lock, Activity, Users, Mail, Database, Smartphone, FileText, BarChart3, PieChart, Clock, CheckCircle, RefreshCcw, Sparkles, Layers, Briefcase, Globe } from "lucide-react";

export default function VAAssistInfographicPage() {
    return (
        <main className="min-h-screen font-sans bg-background text-foreground transition-colors duration-500 leading-relaxed overflow-x-hidden">
            {/* Navigation Header */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link
                        href="/work/va-assist"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium border-r border-card-border pr-4"
                    >
                        <ArrowLeft size={18} />
                        Back to Project
                    </Link>
                    <Link
                        href="/intelligence"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium"
                    >
                        Operational Intelligence
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-8 text-center bg-linear-to-b from-accent-primary/5 to-transparent">
                <span className="inline-block bg-accent-primary/10 text-accent-primary px-6 py-2 rounded-full text-[10px] font-black tracking-[0.4em] uppercase mb-8 border border-accent-primary/20 relative z-10 font-sans">
                    Productivity Engine v4.0
                </span>
                <h1 className="text-6xl md:text-8xl font-black mb-6 text-heading font-serif italic tracking-tighter relative z-10">
                    VAAssist <span className="text-accent-primary">Intelligence</span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 font-bold max-w-3xl mx-auto italic font-serif leading-relaxed mb-12 relative z-10">
                    The cognitive infrastructure for Virtual Assistants scaling from solo-operators to high-velocity agencies.
                </p>
                <div className="w-48 h-1.5 bg-accent-primary/20 mx-auto rounded-full relative z-10 shadow-lg"></div>
            </div>

            <div className="max-w-6xl mx-auto px-8 py-20">
                {/* Core Metrics Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {[
                        { label: "Admin Reclaimed", val: "15h", sub: "per week", icon: Clock, color: "var(--accent-primary)" },
                        { label: "Profit Protection", val: "100%", sub: "Audit Transparency", icon: Shield, color: "var(--foreground)" },
                        { label: "Doc Generation", val: "<3s", sub: "SLA Compliant", icon: Zap, color: "var(--accent-primary)" },
                        { label: "Agency Capacity", val: "∞", sub: "Scale Unlimited", icon: Globe, color: "var(--foreground)" }
                    ].map((m, i) => (
                        <div key={i} className="bg-card-bg p-8 rounded-[2.5rem] border border-card-border shadow-md hover:shadow-xl transition-all border-b-8 group font-sans" style={{ borderBottomColor: m.color }}>
                            <m.icon className="mb-6 transition-transform group-hover:scale-110" size={32} style={{ color: m.color }} />
                            <div className="text-5xl font-black mb-2 font-serif italic tracking-tighter" style={{ color: m.color }}>{m.val}</div>
                            <div className="text-xs uppercase tracking-widest font-black text-foreground/40">{m.label}</div>
                            <div className="text-[10px] font-bold text-foreground/30 mt-1 uppercase italic">{m.sub}</div>
                        </div>
                    ))}
                </div>

                {/* The "Invisible Admin" Problem Visualization */}
                <section className="mb-32 overflow-hidden">
                    <h2 className="text-4xl text-heading font-black mb-16 font-serif italic text-center">
                        Synthesizing Administrative Gravity
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-12">
                            <div className="p-10 bg-card-bg border-l-12 border-accent-primary rounded-r-[3rem] shadow-sm transform -rotate-1 relative group cursor-default hover:rotate-0 transition-transform font-sans">
                                <h3 className="text-3xl font-serif italic font-bold text-accent-primary mb-6">The Solo Plateau</h3>
                                <p className="text-lg text-foreground/80 font-medium leading-relaxed italic">
                                    Virtual Assistants hitting the "solo ceiling" lose ~40% of their billable potential to manual reporting, fragmented inbox auditing, and repetitive document drafting.
                                </p>
                            </div>
                            <div className="p-10 bg-card-bg border-l-12 border-card-border rounded-r-[3rem] shadow-sm transform rotate-1 relative group cursor-default hover:rotate-0 transition-transform font-sans">
                                <h3 className="text-3xl font-serif italic font-bold text-heading mb-6">The Escape Velocity</h3>
                                <p className="text-lg text-foreground/80 font-medium leading-relaxed italic">
                                    VAAssist automates the mundane, allowing operators to step into the "Director's Pulse"—managing systems and associate margins rather than manually tracking time.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full bg-card-bg p-12 rounded-[4rem] border border-card-border shadow-inner relative">
                            <div className="flex justify-between items-end gap-4 h-[300px] font-sans">
                                {[
                                    { h: "85%", l: "Manual Admin", c: "var(--accent-primary)" },
                                    { h: "45%", l: "Context Switching", c: "var(--accent-secondary)" },
                                    { h: "15%", l: "VAAssist Admin", c: "var(--card-border)" }
                                ].map((bar, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-4">
                                        <div className="w-full rounded-t-2xl shadow-lg transition-all hover:scale-105" style={{ height: bar.h, backgroundColor: bar.c }}></div>
                                        <span className="text-[10px] font-black uppercase text-center tracking-tighter leading-none opacity-60 h-8 flex items-center">{bar.l}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute -top-6 -right-6 bg-accent-primary text-background p-8 rounded-full shadow-2xl font-black text-2xl italic font-serif leading-none rotate-12">
                                -70% <br /> <span className="text-xs uppercase tracking-widest not-italic">Friction</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Pillar: The Scaling Matrix */}
                <section className="mb-32 bg-accent-primary/5 rounded-[5rem] p-12 md:p-24 border border-accent-primary/10 relative overflow-hidden">
                    <h2 className="text-5xl text-heading font-black mb-16 font-serif italic tracking-tighter">
                        The Agency Scaling Matrix
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12 relative z-10 font-sans">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 grayscale opacity-50">
                                <Users size={24} className="text-accent-primary" />
                                <span className="text-xs font-black uppercase tracking-[0.3em]">Associate Tier 1</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Users size={32} className="text-accent-primary" />
                                <span className="text-sm font-black uppercase tracking-[0.3em]">Associate Tier 2</span>
                            </div>
                            <div className="flex items-center gap-4 grayscale opacity-50">
                                <Users size={24} className="text-accent-primary" />
                                <span className="text-xs font-black uppercase tracking-[0.3em]">Associate Tier 3</span>
                            </div>
                        </div>

                        <div className="col-span-2 space-y-10">
                            {[
                                { title: "Transparent Profit Matrix", desc: "Automated calculations of Client Rate vs. Associate Rate, protecting agency margins with zero manual math.", icon: BarChart3 },
                                { title: "Subcontractor Guardrails", desc: "Digital Welcome Packs and automated NDA generation ensure 100% legal compliance for every new associate.", icon: Lock },
                                { title: "White-Label Authority", desc: "Generate premium, branded PDF reports that reinforce your agency's professional standard.", icon: Briefcase }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="shrink-0 w-16 h-16 rounded-3xl bg-background border border-card-border flex items-center justify-center shadow-sm group-hover:bg-accent-primary group-hover:text-background transition-all">
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-bold italic mb-2 text-heading">{item.title}</h4>
                                        <p className="text-sm text-foreground/70 font-bold leading-relaxed italic">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action Box */}
                <div className="bg-accent-primary text-background rounded-[4rem] p-16 text-center shadow-2xl relative overflow-hidden group font-sans">
                    <Sparkles className="absolute top-10 right-10 text-background/10 group-hover:scale-150 transition-transform duration-1000" size={100} />
                    
                    <h2 className="text-4xl md:text-5xl font-black mb-8 font-serif italic tracking-tighter relative z-10">
                        Operational Resilience as a Service
                    </h2>
                    <p className="text-xl text-background/80 font-bold max-w-2xl mx-auto italic font-serif leading-relaxed mb-12 relative z-10">
                        VAAssist is the strategic foundation for virtual enterprises that demand professional precision and absolute scalability.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                        <Link 
                            href="/work/va-assist/proposal"
                            className="bg-background text-accent-primary px-10 py-4 rounded-full font-black uppercase text-xs tracking-[0.3em] hover:scale-105 transition-all shadow-xl active:scale-95 border border-card-border"
                        >
                            View Funding Roadmap
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="text-center py-20 border-t border-card-border text-foreground/20 text-[10px] font-mono tracking-[0.5em] uppercase">
                VAAssist Strategic Infographic | Proprietary Operational Intelligence | © 2026
            </footer>
        </main>
    );
}
