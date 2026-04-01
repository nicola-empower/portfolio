"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Shield, Zap, TrendingUp, Search, Cpu, Lock, Activity, Users, Mail, Database, Smartphone, FileText, CheckCircle, BarChart3, Globe, Sparkles, Briefcase, ListChecks } from "lucide-react";

export default function VAAssistProposalPage() {
    return (
        <main className="min-h-screen font-sans bg-background text-foreground transition-colors duration-500 leading-relaxed overflow-x-hidden">
            {/* Navigation Header (Hidden in Print) */}
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
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-accent-primary text-accent-primary-foreground px-6 py-2 rounded-full font-bold hover:bg-accent-secondary transition-all shadow-lg active:scale-95 text-xs uppercase tracking-widest"
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
                }
            `}</style>

            {/* Cover Page */}
            <div className="min-h-screen flex flex-col justify-center items-center text-center p-12 bg-background border-b-8 border-accent-primary font-sans">
                <div className="bg-accent-primary/10 p-6 rounded-full border-4 border-accent-primary/20 mb-8 shadow-2xl skew-x-2">
                    <Briefcase className="text-accent-primary w-16 h-16" />
                </div>
                <span className="bg-accent-primary/10 text-accent-primary px-6 py-2 rounded-full text-[10px] font-black tracking-[0.4em] uppercase mb-8 border border-accent-primary/20">
                    CONFIDENTIAL STRATEGIC DOSSIER
                </span>
                <h1 className="text-7xl md:text-9xl mb-4 text-heading font-black italic font-serif tracking-tighter">
                    VAAssist <span className="text-accent-primary">Engine</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-foreground/40 font-serif lowercase tracking-tighter">
                    the productivity portal for virtual enterprises
                </h2>
                <div className="w-48 h-1.5 bg-accent-primary/20 mb-12 shadow-sm"></div>
                <div className="space-y-8">
                    <p className="text-2xl font-serif italic text-foreground font-bold leading-relaxed border-l-8 border-accent-primary/50 pl-10 inline-block max-w-2xl text-left">
                        "Reclaiming the executive baseline by automating the administrative gravity of the modern agency."
                    </p>
                    <p className="text-xl text-foreground font-bold max-w-lg mx-auto pt-8 border-t border-card-border">
                        Operational Scalability Re-imagined: <br />
                        <span className="font-black text-accent-primary uppercase tracking-widest text-sm">Funding & Growth Roadmap</span>
                    </p>
                    <p className="pt-16 text-[10px] font-mono tracking-[0.5em] text-accent-primary font-black uppercase">
                        Empower Digital Solutions | v4.0 Stable | 2026
                    </p>
                </div>
            </div>

            <div className="content-wrapper max-w-5xl mx-auto px-8 py-24 md:px-12 font-sans">
                {/* Strategic Context */}
                <section className="mb-24">
                    <h2 className="text-4xl text-accent-primary font-black mb-12 border-b-4 border-accent-primary/10 pb-6 font-serif italic">
                        01. The Efficiency Gap
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="p-12 bg-card-bg border border-card-border border-l-12 border-l-foreground/20 rounded-r-[3rem] shadow-sm">
                            <div className="flex items-center gap-5 mb-8">
                                <Zap className="text-accent-primary" size={32} />
                                <h4 className="font-serif italic font-bold text-2xl text-heading">Administrative Drift</h4>
                            </div>
                            <p className="text-lg text-foreground/80 font-medium leading-relaxed italic">
                                Solo virtual assistants spend an average of 40% of their working day on non-billable tasks: reporting, invoicing, and document coordination. This is the "solo ceiling" that kills scalability.
                            </p>
                        </div>
                        <div className="p-12 bg-card-bg border border-card-border border-l-12 border-l-accent-primary rounded-r-[3rem] shadow-sm">
                            <div className="flex items-center gap-5 mb-8">
                                <Users className="text-accent-primary" size={32} />
                                <h4 className="font-serif italic font-bold text-2xl text-heading">The Agency Pivot</h4>
                            </div>
                            <p className="text-lg text-foreground/80 font-medium leading-relaxed italic">
                                Transitioning to an agency model requires deterministic profit tracking and legal compliance for multi-tier associates. Without automation, the complexity grows exponentially with every new hire.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Solution Architecture */}
                <section className="mb-24 bg-accent-primary/5 rounded-[4rem] p-12 md:p-20 border border-accent-primary/20">
                    <h2 className="text-4xl text-heading font-black mb-12 font-serif italic text-center">
                        02. The Productivity Portal
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { icon: FileText, title: "Smart Invoicing", desc: "Automated billing linked to real-time time tracking. Turn time into profit instantly.", color: "var(--accent-primary)" },
                            { icon: ListChecks, title: "Doc Engine", desc: "Premium generation of Service Agreements, NDAs, and quotes in under 3 seconds.", color: "var(--foreground)" },
                            { icon: TrendingUp, title: "Agency Mode", desc: "Transparent associate management and profit margin protection for growing teams.", color: "var(--accent-primary)" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-background p-10 rounded-[2.5rem] border border-card-border shadow-md text-center group hover:scale-105 transition-transform">
                                <item.icon className="mx-auto mb-6 transition-colors" size={40} style={{ color: item.color }} />
                                <h3 className="text-xl font-serif font-bold italic mb-4 text-heading">{item.title}</h3>
                                <p className="text-sm text-foreground/80 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Investment Roadmap */}
                <section className="mb-24">
                    <h2 className="text-5xl text-center text-accent-primary font-black mb-20 border-b-8 border-accent-primary pb-10 font-serif italic tracking-tighter">
                        Investment Roadmap & Valuation
                    </h2>

                    <div className="space-y-16">
                        {/* Phase 1 */}
                        <div className="flex flex-col md:flex-row border border-card-border rounded-[3rem] overflow-hidden shadow-lg group hover:border-accent-primary/50 transition-all font-sans">
                            <div className="md:w-1/3 p-12 bg-accent-primary/5 flex flex-col justify-center text-center border-b md:border-b-0 md:border-r border-card-border">
                                <span className="text-xs font-black uppercase text-accent-primary tracking-[0.4em] mb-4">Phase 1 (Director)</span>
                                <span className="text-3xl font-black text-heading font-serif">Solo Productivity Engine</span>
                                <span className="text-4xl text-accent-primary font-black mt-6 tracking-tighter font-serif italic">£8,500</span>
                            </div>
                            <div className="md:w-2/3 p-12 bg-card-bg">
                                <ul className="space-y-6 text-foreground/80 font-bold text-lg italic">
                                    <li className="flex gap-4 items-start"><CheckCircle className="text-accent-primary mt-1 shrink-0" size={20} /> Next.js 15+ Core SaaS Architecture.</li>
                                    <li className="flex gap-4 items-start"><CheckCircle className="text-accent-primary mt-1 shrink-0" size={20} /> Smart Invoicing & Time Tracking Integration.</li>
                                    <li className="flex gap-4 items-start"><CheckCircle className="text-accent-primary mt-1 shrink-0" size={20} /> Kanban Client Success Board Logic.</li>
                                    <li className="flex gap-4 items-start"><CheckCircle className="text-accent-primary mt-1 shrink-0" size={20} /> Premium Document Generator Engine.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex flex-col md:flex-row border-4 border-accent-primary rounded-[3rem] overflow-hidden shadow-2xl scale-[1.03] transform transition-all z-10 bg-background">
                            <div className="md:w-1/3 p-12 bg-accent-primary flex flex-col justify-center text-center text-background shadow-inner">
                                <span className="text-[10px] font-black uppercase opacity-80 tracking-[0.4em] mb-4">Phase 2 (Operation)</span>
                                <span className="text-3xl font-bold font-serif italic mb-6">Agency Scaling Portal</span>
                                <span className="text-4xl font-black tracking-tighter font-serif italic">£4,500</span>
                            </div>
                            <div className="md:w-2/3 p-12 bg-card-bg">
                                <ul className="space-y-6 text-foreground font-black text-lg italic">
                                    <li className="flex gap-4 items-start"><TrendingUp className="text-accent-primary mt-1 shrink-0" size={20} /> Associate Profit Margin Matrix.</li>
                                    <li className="flex gap-4 items-start"><TrendingUp className="text-accent-primary mt-1 shrink-0" size={20} /> Multi-Tenancy Subcontractor Tiers.</li>
                                    <li className="flex gap-4 items-start"><TrendingUp className="text-accent-primary mt-1 shrink-0" size={20} /> Digital Welcome Packs & NDA Compliance.</li>
                                    <li className="flex gap-4 items-start"><TrendingUp className="text-accent-primary mt-1 shrink-0" size={20} /> Client Profile Drawers & Federated Search.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex flex-col md:flex-row border border-card-border rounded-[3rem] overflow-hidden shadow-lg group hover:border-accent-primary/50 transition-all font-sans">
                            <div className="md:w-1/3 p-12 bg-accent-primary/5 flex flex-col justify-center text-center border-b md:border-b-0 md:border-r border-card-border">
                                <span className="text-xs font-black uppercase text-accent-primary tracking-[0.4em] mb-4">Phase 3 (Enterprise)</span>
                                <span className="text-3xl font-black text-heading font-serif">Predictive Intelligence</span>
                                <span className="text-4xl text-accent-primary font-black mt-6 tracking-tighter font-serif italic">£5,000</span>
                            </div>
                            <div className="md:w-2/3 p-12 bg-card-bg">
                                <ul className="space-y-6 text-foreground/80 font-bold text-lg italic">
                                    <li className="flex gap-4 items-start"><Sparkles className="text-accent-primary mt-1 shrink-0" size={20} /> AI Daily Reporting & Performance Synthesis.</li>
                                    <li className="flex gap-4 items-start"><Sparkles className="text-accent-primary mt-1 shrink-0" size={20} /> Automated Content Strategy & Social Sync.</li>
                                    <li className="flex gap-4 items-start"><Sparkles className="text-accent-primary mt-1 shrink-0" size={20} /> Client Sentiment & Revenue Prediction.</li>
                                    <li className="flex gap-4 items-start"><Sparkles className="text-accent-primary mt-1 shrink-0" size={20} /> Advanced Biometric Auth & Security Hardening.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-right pt-16">
                            <p className="text-foreground/40 font-black text-sm uppercase tracking-[0.4em] mb-4">Total Proprietary Asset Valuation</p>
                            <p className="text-5xl md:text-7xl text-heading font-black font-serif italic tracking-tighter">
                                £18,000 <span className="text-2xl font-sans not-italic text-accent-primary ml-6 border-b-4 border-accent-primary pb-1 uppercase tracking-widest">Active Development</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* ROI Analysis */}
                <section className="mb-24 py-20 bg-background border-y-2 border-card-border">
                    <h2 className="text-4xl text-accent-primary font-black mb-16 border-b-4 border-accent-primary/10 pb-6 font-serif italic text-right">
                        Commercial ROI
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="text-center p-16 bg-accent-primary/5 text-foreground rounded-[4rem] shadow-2xl border-b-12 border-card-border border border-accent-primary/10">
                            <div className="text-7xl font-black text-accent-primary mb-6 font-serif italic tracking-tighter">70%</div>
                            <div className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-black mb-8">Admin Overhead Reduction</div>
                            <p className="text-lg text-foreground/80 font-bold leading-relaxed italic">
                                VAAssist effectively absorbs the manual admin load, allowing owners to reclaim 2.5 hours per day that can be redirected into business development or client strategy.
                            </p>
                        </div>
                        <div className="text-center p-16 bg-accent-primary/5 text-foreground rounded-[4rem] shadow-2xl border-b-12 border-accent-primary border border-accent-primary/10">
                            <div className="text-7xl font-black text-accent-primary mb-6 font-serif italic tracking-tighter">3x</div>
                            <div className="text-xs uppercase tracking-[0.4em] text-foreground/40 font-black mb-8">Agency Scaling Potential</div>
                            <p className="text-lg text-foreground/80 font-bold leading-relaxed italic">
                                By standardising the associate profit matrix and document workflows, the system enables an agency to triple its headcount without increasing administrative staff.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final Mission */}
                <section className="mt-32 mb-12 py-24 text-center">
                    <div className="max-w-4xl mx-auto bg-card-bg p-20 rounded-[5rem] italic text-foreground/80 leading-relaxed border-2 border-card-border shadow-inner text-4xl mb-20 font-serif relative">
                        <div className="absolute top-8 left-10 text-9xl text-accent-primary/10 font-serif font-black">"</div>
                        Software isn't just about code; it is about the aggressive pursuit of operational freedom. VAAssist is the engine of that freedom.
                        <div className="absolute bottom-4 right-10 text-9xl text-accent-primary/10 font-serif font-black">"</div>
                    </div>
                    <div className="space-y-6">
                        <p className="font-black text-4xl text-heading tracking-tighter italic font-serif">Nicola Berry</p>
                        <div className="flex flex-col items-center gap-3 text-foreground/40 font-black tracking-[0.3em] text-xs uppercase">
                            <span>Principal Digital Architect | Founder</span>
                            <a href="mailto:connect@nicolaberry.uk" className="text-accent-primary hover:underline transition-all">connect@nicolaberry.uk</a>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="text-center py-24 border-t border-card-border bg-accent-primary text-background/40 text-[10px] font-mono tracking-[0.5em] uppercase">
                VAAssist Strategic Proposal | Proprietary Operational Intelligence | © 2026
            </footer>
        </main>
    );
}

