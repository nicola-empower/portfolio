"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Mail, Shield, Zap, TrendingUp, Heart, Layout, Globe, Search, Battery, ListChecks, MessageSquare, Sparkles } from "lucide-react";

export default function NavigatorProposalPage() {
    return (
        <main className="min-h-screen bg-background text-foreground font-medium transition-colors duration-500 leading-relaxed overflow-x-hidden selection:bg-accent-primary/30">
            {/* Navigation Header (Hidden in Print) */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-card-border px-6 py-4 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center gap-4">
                    <Link
                        href="/work/independence-navigator"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-all duration-300 font-bold border-r border-card-border pr-4 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Project</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-2 text-foreground/40 text-[10px] font-black uppercase tracking-widest">
                        <Shield size={14} className="text-accent-primary" />
                        <span>Strategic Accessibility Document</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 bg-accent-primary text-background px-6 py-2.5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(86,28,36,0.3)] active:scale-95 text-xs"
                    >
                        <Printer size={18} />
                        <span>Export PDF</span>
                    </button>
                </div>
            </nav>

            {/* Custom Styles for Print */}
            <style jsx global>{`
                @media print {
                    @page { size: A4; margin: 0; }
                    .no-print { display: none !important; }
                    body { 
                        -webkit-print-color-adjust: exact !important; 
                        print-color-adjust: exact !important;
                        background: #F8F9FA !important;
                        color: #1A1A1A !important;
                    }
                    .content-wrapper { padding: 2cm !important; }
                    .avoid-break { break-inside: avoid !important; page-break-inside: avoid !important; }
                    .page-break { break-before: page !important; page-break-before: always !important; }
                }
            `}</style>

            {/* Cover Page */}
            <div className="min-h-[100vh] flex flex-col justify-center relative overflow-hidden bg-card-bg border-b-[12px] border-accent-primary px-8 md:px-24">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

                <div className="relative z-10 max-w-4xl">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-black uppercase tracking-[0.2em] mb-12 animate-fade-in">
                        <Heart size={16} />
                        <span>Neurodivergent Autonomy Suite</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-serif font-bold italic text-heading mb-4 tracking-tighter leading-none">
                        Navigator<span className="text-accent-primary not-italic">.</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-light text-foreground/60 font-serif italic mb-12 tracking-tight">
                        the autonomy architecture
                    </h2>

                    <div className="w-32 h-2 bg-accent-primary mb-12 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary">Specialist Framework</p>
                                <p className="text-2xl font-serif italic text-heading">AI-Driven Executive Support</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary">Valuation Model</p>
                                <p className="text-2xl font-serif italic text-heading">£6,850 Strategic Implementation</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end md:items-end md:text-right space-y-4">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Prepared For</p>
                                <p className="text-lg font-bold text-heading">Accessibility Stakeholders</p>
                                <p className="text-sm text-foreground/60 italic font-serif">Independent Living Foundations</p>
                            </div>
                            <p className="text-xs font-black uppercase tracking-widest text-accent-primary pt-4 border-t border-card-border inline-block">
                                Empower Digital Solutions | 2026
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-wrapper max-w-4xl mx-auto py-24 px-8 md:px-0">
                {/* Executive Summary */}
                <section className="mb-32 space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-heading leading-tight underline decoration-accent-primary/30 decoration-8 underline-offset-8">
                            Mission: Dismantling Administrative Gravity
                        </h2>
                    </div>

                    <div className="bg-card-bg border border-card-border p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <p className="text-2xl md:text-3xl italic text-heading leading-relaxed font-serif mb-8 relative z-10 border-l-4 border-accent-primary pl-8">
                            "Independence Navigator was architected to solve the cognitive load of adulting for those who find standard productivity tools sensory-aggressive and overwhelming."
                        </p>
                        <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                            Independence Navigator is a specialist PWA designed to bridge the executive function gap. By combining <strong className="text-heading">Stateless AI</strong> for communication decoding with <strong className="text-heading">Spoon Theory</strong> logic for energy management, it transforms a chaotic world of instructions into a calm, predictable sequence of micro-actions. It is not just a tool; it is a technical safety net for autonomy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: <MessageSquare className="w-5 h-5" />, title: "Decoder", sub: "Stateless AI", desc: "Translates complex, high-jargon emails into clear, sensory-neutral action items." },
                            { icon: <ListChecks className="w-5 h-5" />, title: "Magic Tasks", sub: "Atomic Breakdown", desc: "Decomposes monumental projects into manageable, 5-minute achievable steps." },
                            { icon: <Battery className="w-5 h-5" />, title: "Energy", sub: "Spoon Theory Logic", desc: "Visualises cognitive capacity to prevent burnout through predictive planning." }
                        ].map((item, i) => (
                            <div key={i} className="bg-card-bg border border-card-border p-8 rounded-2xl hover:border-accent-primary/30 transition-all group avoid-break">
                                <div className="text-accent-primary mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-xl font-serif font-bold italic text-heading mb-2">{item.title}</h3>
                                <p className="text-[10px] font-black uppercase text-accent-primary tracking-widest mb-4">{item.sub}</p>
                                <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Strategy */}
                <section className="mb-32 space-y-12 page-break">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-heading underline decoration-accent-primary/30 decoration-8 underline-offset-8">
                        The "Calm Architecture" Layer
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 bg-card-bg border border-card-border rounded-[2rem] shadow-xl relative overflow-hidden group hover:border-accent-primary/30 transition-all avoid-break">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary">
                                    <Shield size={24} />
                                </div>
                                <h4 className="text-2xl font-serif font-bold italic text-heading">Data Sovereignty</h4>
                            </div>
                            <p className="text-lg text-foreground/60 leading-relaxed font-serif italic mb-6">
                                "100% Stateless AI processing with local-first encrypted storage."
                            </p>
                            <p className="text-sm text-foreground/40 leading-relaxed">
                                Unlike generic AI assistants, Navigator never uses personal data for model training. All context is processed in transient memory and persisted only in the user's secure browser environment.
                            </p>
                        </div>

                        <div className="p-10 bg-card-bg border border-card-border rounded-[2rem] shadow-xl relative overflow-hidden group hover:border-accent-primary/30 transition-all avoid-break">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary">
                                    <Layout size={24} />
                                </div>
                                <h4 className="text-2xl font-serif font-bold italic text-heading">Sensory UI Design</h4>
                            </div>
                            <p className="text-lg text-foreground/60 leading-relaxed font-serif italic mb-6">
                                "Atkinson Hyperlegible typography and Nordic-neutral palettes."
                            </p>
                            <p className="text-sm text-foreground/40 leading-relaxed">
                                Every pixel is calibrated to reduce visual stress, using low-contrast shadows and high-legibility fonts to ensure the interface never contributes to sensory overload.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Investment Breakdown */}
                <section className="mb-32 space-y-16 page-break">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold italic text-heading tracking-tight">
                            Strategic <span className="text-accent-primary not-italic">Investment</span>
                        </h2>
                        <p className="text-foreground/40 font-black uppercase tracking-[0.3em] text-[10px]">Technical Implementation Value • v1.0</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { phase: "Phase 1", title: "Autonomy Core", price: "£1,450", features: ["React 18 / Vite PWA Architecture", "Local-First Persistence Layer", "Nordic-Neutral Design System"] },
                            { phase: "Phase 2", title: "AI Decoder Engine", price: "£2,100", highlight: true, features: ["Gemini 2.5 Flash Integration", "Stateless Context Processing", "Tone & Intent Extraction Logic"] },
                            { phase: "Phase 3", title: "Task Decomposition", price: "£1,750", features: ["Magic Task Logic & Energy Mapping", "Atomic Goal Decomposition", "Sensory-Aware Step Guides"] },
                            { phase: "Phase 4", title: "Energy Guardian", price: "£1,550", highlight: true, features: ["Visual Battery Tracker", "Spoon Theory Logic Model", "Predictive Burnout Triage"] }
                        ].map((item, i) => (
                            <div key={i} className={`flex flex-col md:flex-row border rounded-[1.5rem] overflow-hidden transition-all duration-300 avoid-break ${item.highlight ? 'border-accent-primary bg-accent-primary/5 shadow-lg' : 'border-card-border bg-card-bg'}`}>
                                <div className={`w-full md:w-1/3 p-8 flex flex-col justify-center text-center ${item.highlight ? 'bg-accent-primary text-background' : 'bg-accent-secondary/10 text-heading border-r border-card-border'}`}>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">{item.phase}</span>
                                    <span className="text-xl font-serif font-bold italic mb-2 tracking-tight">{item.title}</span>
                                    <span className="text-3xl font-black">{item.price}</span>
                                </div>
                                <div className="w-full md:w-2/3 p-8 flex items-center">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                        {item.features.map((f, fi) => (
                                            <li key={fi} className="flex items-center gap-3 text-sm text-foreground/70 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-heading text-background rounded-[2.5rem] p-12 md:p-16 text-center md:text-right relative overflow-hidden group shadow-2xl avoid-break">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-primary/20 to-transparent"></div>
                        <div className="relative z-10">
                            <p className="text-background font-black uppercase tracking-[0.4em] text-xs mb-4">Total v1.0 Value</p>
                            <p className="text-6xl md:text-8xl font-serif font-bold italic tracking-tighter text-background mb-6">
                                £6,850
                            </p>
                            <div className="flex flex-col md:flex-row justify-end items-center gap-4 text-background/40 text-sm">
                                <span className="flex items-center gap-2"><Zap size={14} className="text-background" /> Delivered in 18 Dev Days</span>
                                <span className="hidden md:block text-background">•</span>
                                <span>100% Ownership & Zero SaaS Fees</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROI Analysis */}
                <section className="mb-32 space-y-12 page-break">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-heading underline decoration-accent-primary/30 decoration-8 underline-offset-8">
                        ROI (Return on Independence)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-12 bg-card-bg border border-accent-primary/30 rounded-[2rem] shadow-xl text-center flex flex-col justify-center gap-6 relative group border-t-8 avoid-break">
                            <div className="text-6xl font-serif font-bold italic text-accent-primary tracking-tighter group-hover:scale-105 transition-transform">60%</div>
                            <div className="space-y-2">
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-heading leading-tight">Cognitive Friction Reduction</p>
                                <p className="text-sm text-foreground/40 font-serif italic">Eliminating the 'wall of text' fatigue through automated decoding and tone analysis.</p>
                            </div>
                        </div>
                        <div className="p-12 bg-card-bg border border-accent-primary/30 rounded-[2rem] shadow-xl text-center flex flex-col justify-center gap-6 relative group border-t-8 avoid-break">
                            <div className="text-6xl font-serif font-bold italic text-accent-primary tracking-tighter group-hover:scale-105 transition-transform">2hr</div>
                            <div className="space-y-2">
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-heading leading-tight">Daily Triage Recovery</p>
                                <p className="text-sm text-foreground/40 font-serif italic">Automated goal decomposition allows users to start tasks instantly without decision paralysis.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Commitment */}
                <section className="pt-32 text-center space-y-12 page-break">
                    <div className="inline-flex items-center gap-4 text-accent-primary mb-4">
                        <div className="w-12 h-[2px] bg-accent-primary/20"></div>
                        <Sparkles className="w-8 h-8" />
                        <div className="w-12 h-[2px] bg-accent-primary/20"></div>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl font-serif font-bold italic text-heading">The Empower Commitment</h2>
                        <div className="bg-card-bg border border-card-border p-12 rounded-[2.5rem] shadow-sm relative italic text-2xl md:text-3xl text-heading font-serif leading-relaxed">
                            <span className="text-6xl font-serif text-accent-primary/20 absolute top-4 left-4">"</span>
                            Independence Navigator: Reclaiming the right to a calm digital life. Autonomy is architected, not just enabled.
                            <span className="text-6xl font-serif text-accent-primary/20 absolute bottom-4 right-4">"</span>
                        </div>
                    </div>

                    <div className="pt-12 space-y-6">
                        <div className="space-y-1">
                            <p className="text-3xl font-serif font-bold italic text-heading">Nicola Berry</p>
                            <p className="text-xs font-black uppercase tracking-[0.3em] text-accent-primary">Founder • Empower Digital Solutions</p>
                        </div>
                        <div className="flex flex-col items-center gap-3 text-foreground/60 transition-all font-bold group">
                            <div className="flex items-center gap-3 hover:text-accent-primary cursor-pointer px-6 py-3 rounded-2xl bg-card-bg border border-card-border shadow-sm">
                                <Mail size={18} className="text-accent-primary" />
                                <span className="text-sm">connect@nicolaberry.uk</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                                <span>Architecting the Future of Accessibility</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
