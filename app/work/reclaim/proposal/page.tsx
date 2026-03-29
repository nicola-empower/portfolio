"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Shield, Zap, TrendingUp, Search, Cpu, Lock, Activity, Users, Mail, Database, Smartphone } from "lucide-react";

export default function ReclaimProposalPage() {
    return (
        <main className="min-h-screen font-sans bg-background text-foreground transition-colors duration-500 leading-relaxed overflow-x-hidden">
            {/* Navigation Header (Hidden in Print) */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link
                        href="/work/reclaim"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium border-r border-card-border pr-4"
                    >
                        <ArrowLeft size={18} />
                        Back to Project
                    </Link>
                    <Link
                        href="/intelligence"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium"
                    >
                        System Intelligence
                    </Link>
                </div>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-[#630625] text-white px-6 py-2 rounded-full font-bold hover:bg-[#630625]/90 transition-all shadow-lg active:scale-95 text-xs uppercase tracking-widest"
                >
                    <Printer size={16} />
                    Print / Save PDF
                </button>
            </nav>

            {/* Print Styles */}
            <style jsx global>{`
                @media print {
                    @page { size: A4; margin: 0; }
                    .no-print { display: none !important; }
                    body { 
                        -webkit-print-color-adjust: exact !important; 
                        print-color-adjust: exact !important;
                        background: white !important;
                        color: black !important;
                    }
                    .content-wrapper { padding: 1.5cm !important; }
                }
            `}</style>

            {/* Cover Page */}
            <div className="min-h-screen flex flex-col justify-center items-center text-center p-12 bg-background border-b-8 border-[#630625]">
                <div className="bg-[#630625]/10 p-6 rounded-full border-4 border-[#630625] mb-8 shadow-2xl rotate-3">
                    <Shield className="text-[#630625] w-16 h-16" />
                </div>
                <span className="bg-[#630625]/10 text-[#630625] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase mb-6 outline outline-1 outline-[#630625]/20">
                    CONFIDENTIAL STRATEGIC DOSSIER
                </span>
                <h1 className="text-6xl md:text-8xl mb-4 text-heading font-extrabold italic font-serif tracking-tighter">
                    Reclaim <span className="text-[#630625]">Operations</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#630625] font-serif lowercase tracking-tight">
                    the executive control plane
                </h2>
                <div className="w-32 h-1 bg-[#630625] mb-12"></div>
                <div className="space-y-6">
                    <p className="text-2xl font-serif italic text-foreground font-bold leading-relaxed border-l-4 border-[#630625]/50 pl-8 inline-block max-w-xl">
                        "Authority is built in the silence between decisions."
                    </p>
                    <p className="text-xl text-foreground font-medium max-w-lg mx-auto pt-8">
                        Proprietary AI-Native Architecture & <br />
                        <span className="font-bold border-b-2 border-[#630625] text-foreground">Operational Valuation Matrix</span>
                    </p>
                    <p className="pt-12 text-[10px] font-mono tracking-[0.4em] text-foreground font-bold uppercase">
                        Empower Digital Solutions | v3.1 Stable | 2026
                    </p>
                </div>
            </div>

            <div className="content-wrapper max-w-5xl mx-auto px-8 py-24 md:px-12">
                {/* Executive Summary */}
                <section className="mb-24">
                    <h2 className="text-4xl text-[#630625] font-bold mb-10 border-b-2 border-[#630625]/20 pb-4 font-serif italic">
                        Reclaim: Mission Intelligence
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10 mb-12">
                        <div className="p-10 bg-card-bg border border-card-border border-l-8 border-l-[#630625] rounded-r-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Zap className="text-[#630625]" size={24} />
                                <h4 className="font-serif italic font-bold text-xl text-[#630625]">Director's Pulse</h4>
                            </div>
                            <p className="text-sm text-foreground font-bold leading-relaxed">
                                Reclaim audits 40+ high-decibel data streams daily, synthesizing disparate newsletters and drive activity into three strategic operational pillars.
                            </p>
                        </div>
                        <div className="p-10 bg-card-bg border border-card-border border-l-8 border-l-[#630625] rounded-r-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Activity className="text-[#630625]" size={24} />
                                <h4 className="font-serif italic font-bold text-xl text-[#630625]">Deterministic Recovery</h4>
                            </div>
                            <p className="text-sm text-foreground font-bold leading-relaxed">
                                100% operational uptime through redundant fail-over logic and "String Cannon" defensive resolution for AI hallucinations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Value Proposition */}
                <section className="mb-24">
                    <h2 className="text-4xl text-[#630625] font-bold mb-12 border-b-2 border-[#630625]/20 pb-4 font-serif italic">
                        Strategic Value Proposition
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-card-border border-t-8 border-t-[#630625] bg-card-bg p-8 rounded-b-3xl text-center">
                            <Shield className="mx-auto mb-6 text-[#630625]" size={32} />
                            <h3 className="text-xl text-[#630625] font-bold mb-4 font-serif italic">Privacy-Native</h3>
                            <p className="text-sm text-foreground font-bold leading-relaxed">Zero-tracking PWA architecture. Proprietary data audits never leave the internal system.</p>
                        </div>
                        <div className="border border-card-border border-t-8 border-t-[#630625] bg-card-bg p-8 rounded-b-3xl text-center">
                            <Cpu className="mx-auto mb-6 text-[#630625]" size={32} />
                            <h3 className="text-xl text-[#630625] font-bold mb-4 font-serif italic">AI Synthesis</h3>
                            <p className="text-sm text-foreground font-bold leading-relaxed">Converts content fatigue into strategic advantage via Gemini 3 Pro integration.</p>
                        </div>
                        <div className="border border-card-border border-t-8 border-t-[#630625] bg-card-bg p-8 rounded-b-3xl text-center">
                            <Lock className="mx-auto mb-6 text-[#630625]" size={32} />
                            <h3 className="text-xl text-[#630625] font-bold mb-4 font-serif italic">Operational ROI</h3>
                            <p className="text-sm text-foreground font-bold leading-relaxed">Eliminates 2.5h of context-switching daily. Valuation supported by high IP resilience.</p>
                        </div>
                    </div>
                </section>

                {/* Valuation Roadmap */}
                <section className="mb-24">
                    <h2 className="text-4xl text-center text-[#630625] font-bold mb-16 border-b-4 border-[#630625] pb-6 font-serif italic">
                        Platform Valuation & Roadmap
                    </h2>

                    <div className="space-y-12">
                        {/* Phase 1 */}
                        <div className="flex flex-col md:flex-row border border-card-border rounded-3xl overflow-hidden shadow-sm">
                            <div className="md:w-1/3 p-10 bg-[#630625]/5 flex flex-col justify-center text-center border-b md:border-b-0 md:border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-[#630625] tracking-[0.3em] mb-4">Phase 1 (Director)</span>
                                <span className="text-2xl font-bold text-heading font-serif">Strategic Foundation</span>
                                <span className="text-3xl text-[#630625] font-bold mt-4 tracking-tighter font-serif italic">£10,050</span>
                            </div>
                            <div className="md:w-2/3 p-10 bg-card-bg">
                                <ul className="space-y-4 text-foreground font-bold text-sm">
                                    <li className="flex gap-3"><span>•</span> UI/UX "Soft Luxury" Glassmorphism system (25h).</li>
                                    <li className="flex gap-3"><span>•</span> Gemini AI Integration & Context Auditing (35h).</li>
                                    <li className="flex gap-3"><span>•</span> Strategic Sector Audit Visualization (30h).</li>
                                    <li className="flex gap-3"><span>•</span> Central Intelligence Hub / Daily Pulse Engine.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex flex-col md:flex-row border-4 border-[#630625] rounded-3xl overflow-hidden shadow-2xl scale-[1.02] transform transition-transform">
                            <div className="md:w-1/3 p-10 bg-[#630625] flex flex-col justify-center text-center text-white">
                                <span className="text-[10px] font-bold uppercase opacity-80 tracking-[0.3em] mb-4">Phase 2 (Operation)</span>
                                <span className="text-2xl font-bold font-serif">Momentum Engine</span>
                                <span className="text-3xl font-bold mt-4 tracking-tighter font-serif italic">£3,150</span>
                            </div>
                            <div className="md:w-2/3 p-10 bg-card-bg">
                                <ul className="space-y-4 text-foreground font-black text-sm">
                                    <li className="flex gap-3 font-bold text-foreground"><span>•</span> GitHub "Warp Drive" Portfolio Momentum HUD (20h).</li>
                                    <li className="flex gap-3 font-bold text-foreground"><span>•</span> Sanctuary Protocol: Bio-metric restore logic (15h).</li>
                                    <li className="flex gap-3"><span>•</span> Real-time PWA sync for on-the-go operational checks.</li>
                                    <li className="flex gap-3"><span>•</span> Hard-Boundary Bell (5:30 PM) state enforcement.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex flex-col md:flex-row border border-card-border rounded-3xl overflow-hidden shadow-sm">
                            <div className="md:w-1/3 p-10 bg-[#630625]/5 flex flex-col justify-center text-center border-b md:border-b-0 md:border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-[#630625] tracking-[0.3em] mb-4">Phase 3 (Enterprise)</span>
                                <span className="text-2xl font-bold text-heading font-serif">Resilience Wrap</span>
                                <span className="text-3xl text-[#630625] font-bold mt-4 tracking-tighter font-serif italic">£3,900</span>
                            </div>
                            <div className="md:w-2/3 p-10 bg-card-bg">
                                <ul className="space-y-4 text-foreground font-bold text-sm">
                                    <li className="flex gap-3"><span>•</span> Creative Lab v2: Content Publishing Hub (20h).</li>
                                    <li className="flex gap-3"><span>•</span> Defensive Resilience HUD / Fault Isolation (15h).</li>
                                    <li className="flex gap-3"><span>•</span> Deterministic Fail-Sync (Google Apps Script Legacy).</li>
                                    <li className="flex gap-3"><span>•</span> Hardened "String Cannon" Defensive Resolvers.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-right pt-10">
                            <p className="text-foreground font-black text-sm uppercase tracking-widest mb-2">Total Proprietary Asset Valuation</p>
                            <p className="text-4xl text-heading font-extrabold font-serif italic tracking-tighter">
                                £17,100 <span className="text-lg font-sans not-italic text-[#630625] ml-4 border-b-2 border-[#630625] pb-1">Fully Realised</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Impact Metrics */}
                <section className="mb-24">
                    <h2 className="text-4xl text-[#630625] font-bold mb-10 border-b-2 border-[#630625]/20 pb-4 font-serif italic text-right">
                        Operational ROI
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10 mt-10">
                        <div className="text-center p-12 bg-[#630625]/5 text-foreground rounded-[2.5rem] shadow-xl border-b-8 border-[#630625] border border-[#630625]/10">
                            <div className="text-6xl font-bold text-[#630625] mb-4 font-serif italic tracking-tighter">88%</div>
                            <div className="text-[10px] uppercase tracking-[0.3em] text-[#630625] font-black mb-8">Noise Reduction Metric</div>
                            <p className="text-sm text-foreground font-bold leading-relaxed italic">
                                Reclaim effectively garbage-collects non-essential digital debris, leaving only high-impact strategic targets.
                            </p>
                        </div>
                        <div className="text-center p-12 bg-[#630625]/5 text-foreground rounded-[2.5rem] shadow-xl border-b-8 border-[#630625] border border-[#630625]/10">
                            <div className="text-6xl font-bold text-[#630625] mb-4 font-serif italic tracking-tighter">100%</div>
                            <div className="text-[10px] uppercase tracking-[0.3em] text-[#630625] font-black mb-8">Boundary Enforcement</div>
                            <p className="text-sm text-foreground font-bold leading-relaxed italic">
                                Mathematical isolation between CEO state and Mum state rituals, protecting internal clarity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Commitment */}
                <section className="mt-32 mb-12 py-20 text-center border-t border-card-border">
                    <h2 className="text-4xl text-[#630625] font-bold mb-12 inline-block font-serif italic">
                        The Empower Standard
                    </h2>
                    <div className="max-w-4xl mx-auto bg-card-bg p-16 rounded-[3rem] italic text-foreground leading-relaxed border border-card-border shadow-sm text-3xl mb-16 font-serif relative">
                        <div className="absolute top-6 left-8 text-8xl text-[#630625]/10 font-serif">"</div>
                        Authority isn't just about making decisions; it's about architecting the space where those decisions are made.
                        <div className="absolute bottom-6 right-8 text-8xl text-[#630625]/10 font-serif">"</div>
                    </div>
                    <div className="space-y-4">
                        <p className="font-extrabold text-2xl text-heading tracking-tighter italic font-serif">Nicola Berry</p>
                        <div className="flex flex-col items-center gap-2 text-foreground font-black tracking-widest text-[10px] uppercase">
                            <span>Principal Digital Architect</span>
                            <a href="mailto:connect@nicolaberry.uk" className="text-[#630625] hover:opacity-80 transition-opacity font-bold">connect@nicolaberry.uk</a>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="text-center py-20 border-t border-card-border text-foreground/20 text-[10px] font-mono tracking-[0.4em] uppercase">
                Reclaim Strategic Proposal | Proprietary Technical Intelligence | © 2026
            </footer>
        </main>
    );
}
