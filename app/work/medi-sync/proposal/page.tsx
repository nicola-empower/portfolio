"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Shield, Zap, TrendingUp, Search, Cpu, Lock, Activity, Users, Mail, Database, Smartphone, Heart, Brain, Info, History, ShieldCheck, ListChecks, CheckCircle } from "lucide-react";

export default function MedisyncProposalPage() {
    return (
        <main className="min-h-screen font-sans bg-background text-foreground transition-colors duration-500 leading-relaxed overflow-x-hidden">
            {/* Navigation Header (Hidden in Print) */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link
                        href="/work/medi-sync"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium border-r border-card-border pr-4"
                    >
                        <ArrowLeft size={18} />
                        Back to Project
                    </Link>
                    <Link
                        href="/intelligence"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium"
                    >
                        Medical Intelligence
                    </Link>
                </div>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-accent-primary text-accent-primary-foreground px-6 py-2 rounded-full font-bold hover:opacity-90 transition-all shadow-lg active:scale-95 text-xs uppercase tracking-widest"
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
                        background: #E8D8C4 !important;
                        color: #561C24 !important;
                    }
                    .content-wrapper { padding: 1.5cm !important; }
                    .avoid-break { page-break-inside: avoid; break-inside: avoid; }
                }
            `}</style>

            {/* Cover Page */}
            <div className="min-h-screen flex flex-col justify-center items-center text-center p-12 bg-background border-b-8 border-accent-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/5 rounded-full -mr-48 -mt-48"></div>
                <div className="bg-accent-primary p-6 rounded-3xl mb-8 shadow-2xl ring-8 ring-accent-primary/10 transition-transform hover:scale-105 duration-700">
                    <Heart className="text-accent-primary-foreground w-16 h-16" />
                </div>
                <span className="bg-accent-primary/10 text-accent-primary px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-8 border border-accent-primary/20">
                    CONFIDENTIAL FUNDING PROPOSAL
                </span>
                <h1 className="text-7xl md:text-9xl mb-4 text-heading font-serif font-bold italic tracking-tight">
                    Medi-<span className="text-accent-primary">Sync</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-serif font-bold italic mb-12 text-foreground/40">
                    the source of truth for the sandwich generation
                </h2>
                <div className="w-48 h-1.5 bg-accent-primary mb-12 rounded-full"></div>
                <div className="space-y-8">
                    <p className="text-2xl font-serif font-bold italic text-heading leading-relaxed border-l-8 border-accent-primary/30 pl-10 inline-block max-w-2xl text-left">
                        "Removing the 'Recall Audit' from high-pressure care environments through trauma-informed Calm Technology."
                    </p>
                    <p className="text-xl text-foreground/60 font-bold max-w-lg mx-auto pt-8 border-t border-card-border">
                        Healthcare Infrastructure Re-imagined: <br />
                        <span className="font-serif font-bold italic text-accent-primary uppercase tracking-widest text-sm mt-2 block">Strategic Scalability Matrix</span>
                    </p>
                    <p className="pt-16 text-[10px] font-bold tracking-[0.5em] text-foreground/20 uppercase">
                        Empower Healthcare Solutions | v2.0 Stable | 2026
                    </p>
                </div>
            </div>

            <div className="content-wrapper max-w-5xl mx-auto px-8 py-24 md:px-12">
                {/* The Crisis Section */}
                <section className="mb-24 avoid-break">
                    <h2 className="text-4xl text-accent-primary font-serif font-bold italic mb-12 border-b-4 border-accent-primary/10 pb-6 tracking-tight">
                        01. The Cognitive Crisis
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="p-12 bg-card-bg border border-card-border border-l-12 border-l-accent-primary rounded-r-[3rem] shadow-sm transition-all hover:bg-accent-primary/2">
                            <div className="flex items-center gap-5 mb-8">
                                <Activity className="text-accent-primary" size={32} />
                                <h4 className="font-serif font-bold italic text-2xl text-heading">Informational Overload</h4>
                            </div>
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed italic">
                                Caregivers in the "Sandwich Generation" manage up to 15 disparate medical and domestic data points per person, per day. Manual retention leads to a 40% error rate in medication reporting.
                            </p>
                        </div>
                        <div className="p-12 bg-card-bg border border-card-border border-l-12 border-l-foreground/10 rounded-r-[3rem] shadow-sm transition-all hover:bg-foreground/2">
                            <div className="flex items-center gap-5 mb-8">
                                <Users className="text-foreground/40" size={32} />
                                <h4 className="font-serif font-bold italic text-2xl text-heading">Communication Friction</h4>
                            </div>
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed italic">
                                Explaining medical trauma repeats the emotional damage. Verbal handovers between family members are the primary point of care failure and carer burnout.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Solution */}
                <section className="mb-24 bg-accent-primary/5 rounded-[4rem] p-12 md:p-20 border border-accent-primary/10 avoid-break">
                    <h2 className="text-4xl text-heading font-serif font-bold italic mb-12 tracking-tight">
                        02. The Digital Sanctuary
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { icon: ShieldCheck, title: "Calm UI", desc: "Low-cortisol design system optimized for high-stress event logging." },
                            { icon: ListChecks, title: "Deterministic", desc: "Immutable logging that serves as a single Source of Truth for doctors." },
                            { icon: Smartphone, title: "Network Sync", desc: "Real-time PWA architecture ensuring every family member is aligned." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-card-bg p-10 rounded-[2.5rem] border border-card-border shadow-md text-center group hover:scale-[1.02] transition-all hover:border-accent-primary/30">
                                <item.icon className="mx-auto mb-6 text-accent-primary transition-transform group-hover:scale-110" size={40} />
                                <h3 className="text-xl font-serif font-bold italic mb-4 text-heading">{item.title}</h3>
                                <p className="text-sm text-foreground/60 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Investment Roadmap */}
                <section className="mb-24 avoid-break">
                    <h2 className="text-5xl text-center text-accent-primary font-serif font-bold italic mb-20 border-b-8 border-accent-primary/10 pb-10 tracking-tight">
                        Investment Roadmap & Valuation
                    </h2>

                    <div className="space-y-16">
                        {/* Phase 1 */}
                        <div className="flex flex-col md:flex-row border border-card-border rounded-[3rem] overflow-hidden shadow-sm group hover:border-accent-primary/30 transition-all">
                            <div className="md:w-1/3 p-12 bg-accent-primary/5 flex flex-col justify-center text-center border-b md:border-b-0 md:border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-accent-primary tracking-[0.4em] mb-4">Phase 1 (Foundations)</span>
                                <span className="text-3xl font-serif font-bold italic text-heading">Core Care OS</span>
                                <span className="text-4xl text-accent-primary font-serif font-bold italic mt-6 tracking-tight">£9,500</span>
                            </div>
                            <div className="md:w-2/3 p-12 bg-card-bg/50">
                                <ul className="space-y-6 text-foreground/70 font-medium text-lg italic">
                                    <li className="flex gap-4 items-start"><CheckCircle className="text-accent-primary mt-1 shrink-0" size={20} /> Trauma-informed UI/UX Design System.</li>
                                    <li className="flex gap-4 items-start"><CheckCircle className="text-accent-primary mt-1 shrink-0" size={20} /> Real-time Firebase / Auth Integration.</li>
                                    <li className="flex gap-4 items-start"><CheckCircle className="text-accent-primary mt-1 shrink-0" size={20} /> Immutable Seizure & Medication Engine.</li>
                                    <li className="flex gap-4 items-start"><CheckCircle className="text-accent-primary mt-1 shrink-0" size={20} /> Cross-Platform PWA Deployment.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex flex-col md:flex-row border-4 border-accent-primary rounded-[3rem] overflow-hidden shadow-2xl scale-[1.03] transform transition-all z-10 bg-card-bg">
                            <div className="md:w-1/3 p-12 bg-accent-primary flex flex-col justify-center text-center text-accent-primary-foreground">
                                <span className="text-[10px] font-bold uppercase opacity-80 tracking-[0.4em] mb-4">Phase 2 (Growth)</span>
                                <span className="text-3xl font-serif font-bold italic">Healthcare Bridge</span>
                                <span className="text-4xl font-serif font-bold italic mt-6 tracking-tight text-accent-primary-foreground/90">£4,500</span>
                            </div>
                            <div className="md:w-2/3 p-12 bg-card-bg">
                                <ul className="space-y-6 text-foreground/80 font-bold text-lg italic">
                                    <li className="flex gap-4 items-start"><TrendingUp className="text-accent-primary mt-1 shrink-0" size={20} /> Professional Carer / Social Work Tier.</li>
                                    <li className="flex gap-4 items-start"><TrendingUp className="text-accent-primary mt-1 shrink-0" size={20} /> Direct GP/Hospital Export API.</li>
                                    <li className="flex gap-4 items-start"><TrendingUp className="text-accent-primary mt-1 shrink-0" size={20} /> Advanced Notification Engine.</li>
                                    <li className="flex gap-4 items-start"><TrendingUp className="text-accent-primary mt-1 shrink-0" size={20} /> Shared Responsibility "Load Balancing".</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex flex-col md:flex-row border border-card-border rounded-[3rem] overflow-hidden shadow-sm group hover:border-accent-primary/30 transition-all">
                            <div className="md:w-1/3 p-12 bg-accent-primary/5 flex flex-col justify-center text-center border-b md:border-b-0 md:border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-accent-primary tracking-[0.4em] mb-4">Phase 3 (Enterprise)</span>
                                <span className="text-3xl font-serif font-bold italic text-heading">Predictive Care AI</span>
                                <span className="text-4xl text-accent-primary font-serif font-bold italic mt-6 tracking-tight">£5,000</span>
                            </div>
                            <div className="md:w-2/3 p-12 bg-card-bg/50">
                                <ul className="space-y-6 text-foreground/70 font-medium text-lg italic">
                                    <li className="flex gap-4 items-start"><Brain className="text-accent-primary mt-1 shrink-0" size={20} /> Gemini-Powered Health Pattern Recognition.</li>
                                    <li className="flex gap-4 items-start"><Brain className="text-accent-primary mt-1 shrink-0" size={20} /> Automated Deterioration Flags for SEN.</li>
                                    <li className="flex gap-4 items-start"><Brain className="text-accent-primary mt-1 shrink-0" size={20} /> Smart Itinerary Planning for Appointments.</li>
                                    <li className="flex gap-4 items-start"><Brain className="text-accent-primary mt-1 shrink-0" size={20} /> Global Care Team Multi-Language Support.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-right pt-16">
                            <p className="text-foreground/40 font-bold text-xs uppercase tracking-[0.4em] mb-4">Total Healthcare Asset Valuation</p>
                            <p className="text-6xl md:text-8xl text-heading font-serif font-bold italic tracking-tight">
                                £19,000 <span className="text-2xl font-sans not-italic text-accent-primary ml-6 border-b-4 border-accent-primary/30 pb-1 uppercase tracking-widest">Active Development</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Impact Metrics */}
                <section className="mb-24 py-20 bg-background border-y-2 border-card-border avoid-break">
                    <h2 className="text-4xl text-accent-primary font-serif font-bold italic mb-16 border-b-4 border-accent-primary/10 pb-6 text-right tracking-tight">
                        Healthcare ROI
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="text-center p-16 bg-accent-primary/5 text-foreground rounded-[4rem] shadow-sm border-b-8 border-accent-primary/10 border border-card-border">
                            <div className="text-7xl font-serif font-bold italic text-accent-primary mb-6 tracking-tight">6.5h</div>
                            <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-8">Weekly Admin Reclaimed</div>
                            <p className="text-lg text-foreground/60 font-medium leading-relaxed italic">
                                Medi-Sync eliminates the "Explain-Repeat" cycle, giving primary carers back nearly an entire working day of cognitive capacity every week.
                            </p>
                        </div>
                        <div className="text-center p-16 bg-foreground/3 text-foreground rounded-[4rem] shadow-sm border-b-8 border-foreground/5 border border-card-border">
                            <div className="text-7xl font-serif font-bold italic text-heading mb-6 tracking-tight">100%</div>
                            <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-8">Data Continuity</div>
                            <p className="text-lg text-foreground/60 font-medium leading-relaxed italic">
                                Zero informational decay during shift transitions, ensuring complex medical regimens are followed with absolute precision.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final Vision */}
                <section className="mt-32 mb-12 py-24 text-center avoid-break">
                    <div className="max-w-4xl mx-auto bg-card-bg p-20 rounded-[5rem] text-heading leading-relaxed border-2 border-card-border shadow-inner text-4xl mb-20 font-serif font-bold italic relative">
                        <div className="absolute top-8 left-10 text-9xl text-accent-primary/10 font-serif font-bold italic">"</div>
                        Technology hasn't failed the care crisis; it has simply focused on the wrong users. Medi-Sync fixes the bottleneck of mental exhaustion.
                        <div className="absolute bottom-4 right-10 text-9xl text-accent-primary/10 font-serif font-bold italic">"</div>
                    </div>
                    <div className="space-y-6">
                        <p className="font-serif font-bold italic text-4xl text-heading tracking-tight">Nicola Berry</p>
                        <div className="flex flex-col items-center gap-4 text-foreground/40 font-bold tracking-[0.3em] text-[10px] uppercase">
                            <span>Principal Digital Architect | Caregiver | Founder</span>
                            <a href="mailto:connect@nicolaberry.uk" className="text-accent-primary hover:opacity-70 transition-all underline decoration-accent-primary/30 underline-offset-8">connect@nicolaberry.uk</a>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="text-center py-24 border-t border-card-border bg-card-bg text-foreground/20 text-[10px] font-bold tracking-[0.5em] uppercase">
                Medi-Sync Strategic Funding Proposal | Confidential Healthcare Intelligence | © 2026
            </footer>
        </main>
    );
}
