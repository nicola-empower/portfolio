"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Github, Mail, Shield, Zap, TrendingUp, Users, Search, Camera, Video } from "lucide-react";

export default function TailorTrackProposalPage() {
    return (
        <main className="min-h-screen font-sans bg-background text-foreground transition-colors duration-500 leading-relaxed overflow-x-hidden">
            {/* Navigation Header (Hidden in Print) */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center transition-all">
                <div className="flex items-center gap-6">
                    <Link
                        href="/work/tailortrack-cv"
                        className="flex items-center gap-2 text-foreground/40 hover:text-accent-primary transition-colors font-bold text-sm uppercase tracking-widest border-r border-card-border pr-6"
                    >
                        <ArrowLeft size={16} />
                        Portfolio
                    </Link>
                    <span className="text-[10px] font-bold text-accent-primary uppercase tracking-[0.3em]">Strategic Proposal v2.0</span>
                </div>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-accent-primary text-accent-primary-foreground px-6 py-2.5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(99,6,37,0.3)] transition-all active:scale-95 text-sm"
                >
                    <Printer size={18} />
                    Export Document
                </button>
            </nav>

            {/* Custom Styles Tag for Print Precision */}
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    .no-print {
                        display: none !important;
                    }
                    body {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                        background: #E8D8C4 !important;
                        color: #561C24 !important;
                    }
                    .page-break-before {
                        page-break-before: always !important;
                        break-before: page !important;
                    }
                    .avoid-break-inside {
                        page-break-inside: avoid !important;
                        break-inside: avoid !important;
                    }
                    .content-wrapper {
                        padding: 1.5cm !important;
                    }
                }
            `}</style>

            {/* Cover Page */}
            <div className="min-h-[90vh] flex flex-col justify-center items-center text-center p-12 bg-card-bg border-b-8 border-accent-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-accent-primary/[0.02] -skew-y-6 transform origin-top-left transition-transform duration-1000"></div>
                <div className="relative z-10">
                    <img
                        src="https://empowerdigitalsolutions.co.uk/images/logo.png"
                        alt="Empower Logo"
                        className="w-24 h-24 rounded-full border-2 border-accent-primary mb-12 shadow-2xl transition-transform hover:scale-110 duration-500"
                    />
                    <div className="mb-8">
                        <span className="bg-accent-primary/10 text-accent-primary px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase border border-accent-primary/20">
                            Confidential Strategic Proposal
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-8xl mb-6 text-heading font-serif font-bold italic tracking-tighter">
                        TailorTrack <span className="text-accent-primary">AI</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold mb-16 text-foreground/40 uppercase tracking-[0.5em] italic">
                        the empowerment engine
                    </h2>
                    <div className="w-32 h-1.5 bg-accent-primary mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(99,6,37,0.5)]"></div>
                    <div className="space-y-6">
                        <p className="text-2xl font-serif italic text-foreground/80">
                            Privacy-First Architecture & <span className="text-accent-primary font-bold not-italic">Operational Valuation</span>
                        </p>
                        <p className="text-sm font-bold text-foreground/40 max-w-lg mx-auto uppercase tracking-widest leading-loose border-t border-card-border pt-8">
                            Prepared for Institutional Partners<br />
                            SEN Educators / Independent Career Mentors
                        </p>
                        <p className="pt-12 text-[10px] font-bold tracking-[0.5em] text-accent-primary uppercase">
                            Empower Digital Solutions | February 2026
                        </p>
                    </div>
                </div>
            </div>

            <div className="content-wrapper max-w-4xl mx-auto px-8 py-20 md:px-12">
                {/* Executive Summary */}
                <section className="mb-24 page-break-before">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="text-[10px] font-bold text-accent-primary uppercase tracking-[0.4em] mb-4">Strategic Mission</span>
                        <h2 className="text-4xl md:text-5xl text-heading font-serif font-bold italic tracking-tight">
                            Data Sovereignty & <span className="text-accent-primary">Empowerment</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-10 bg-card-bg border border-card-border border-l-4 border-l-accent-primary rounded-2xl avoid-break-inside shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2 bg-accent-primary/10 rounded-lg text-accent-primary">
                                    <Search size={24} />
                                </div>
                                <h4 className="font-serif font-bold italic text-xl text-heading">Automated Skill Mapping</h4>
                            </div>
                            <p className="text-sm text-foreground/50 leading-relaxed font-medium">
                                Our translation engine maps placement logs (e.g. "Cleaned equipment") against national qualification benchmarks to extract high-value employability data.
                            </p>
                        </div>
                        <div className="p-10 bg-card-bg border border-card-border border-l-4 border-l-accent-primary rounded-2xl avoid-break-inside shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2 bg-accent-primary/10 rounded-lg text-accent-primary">
                                    <Zap size={24} />
                                </div>
                                <h4 className="font-serif font-bold italic text-xl text-heading">Frictionless Compliance</h4>
                            </div>
                            <p className="text-sm text-foreground/50 leading-relaxed font-medium">
                                Automated reporting aligns directly with GIRFEC/SHANARRI requirements, reducing school/college administrative burden by 65%.
                            </p>
                        </div>
                    </div>

                    <div className="relative mb-16">
                        <div className="absolute -left-4 top-0 bottom-0 w-1.5 bg-accent-primary/20 rounded-full"></div>
                        <p className="text-2xl mb-8 font-serif italic text-heading leading-relaxed pl-8">
                            TailorTrack AI is a dual-mission career architecture designed to return agency to the individual while providing institutions with empirical proof of growth.
                        </p>
                    </div>

                    <p className="mb-12 leading-relaxed text-lg text-foreground/50 font-medium italic">
                        The "Employment Gap" for students with additional needs is often a translation failure. Daily successes in work placements aren't recorded in a language employers understand. Simultaneously, high-level professionals lack secure, private tools for targeted career moves. TailorTrack AI bridges this gap with a <span className="text-accent-primary font-bold not-italic">Privacy-First</span>, local-first engine that translates effort into outcomes.
                    </p>
                </section>

                {/* Value Proposition */}
                <section className="mb-24 avoid-break-inside">
                    <div className="flex items-center justify-between mb-12 border-b border-card-border pb-6">
                        <h2 className="text-3xl text-heading font-serif font-bold italic tracking-tight">
                            The Value <span className="text-accent-primary">Proposition</span>
                        </h2>
                        <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">ROI Framework</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-card-bg border border-card-border border-t-4 border-t-accent-primary p-8 rounded-xl avoid-break-inside shadow-sm transition-all hover:shadow-md">
                            <h3 className="text-xl text-heading font-serif font-bold italic mb-4">Privacy-First</h3>
                            <p className="text-sm text-foreground/50 font-medium leading-relaxed italic">100% Local Storage. GDPR compliance for special category data by default.</p>
                        </div>
                        <div className="bg-card-bg border border-card-border border-t-4 border-t-accent-primary p-8 rounded-xl avoid-break-inside shadow-sm transition-all hover:shadow-md">
                            <h3 className="text-xl text-heading font-serif font-bold italic mb-4">AI Skill Mapping</h3>
                            <p className="text-sm text-foreground/50 font-medium leading-relaxed italic">Translates placement routines into "Workplace Ready" skills for the CV.</p>
                        </div>
                        <div className="bg-card-bg border border-card-border border-t-4 border-t-accent-primary p-8 rounded-xl avoid-break-inside shadow-sm transition-all hover:shadow-md">
                            <h3 className="text-xl text-heading font-serif font-bold italic mb-4">Institutional ROI</h3>
                            <p className="text-sm text-foreground/50 font-medium leading-relaxed italic">Reduces manual staff drafting time by 80% while proving student independence.</p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-card-border shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-card-bg border-b border-card-border">
                                    <th className="p-6 font-bold text-accent-primary text-[10px] uppercase tracking-[0.2em]">Stakeholder</th>
                                    <th className="p-6 font-bold text-accent-primary text-[10px] uppercase tracking-[0.2em]">Solution</th>
                                    <th className="p-6 font-bold text-accent-primary text-[10px] uppercase tracking-[0.2em]">Primary Benefit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-card-border font-medium">
                                <tr className="hover:bg-accent-primary/2 transition-colors">
                                    <td className="p-6 text-heading font-serif font-bold italic">The Student</td>
                                    <td className="p-6 text-foreground/50 text-sm italic">Simplified, haptic-reinforced UI.</td>
                                    <td className="p-6 text-accent-primary font-bold text-sm tracking-tight uppercase">Confidence & Agency</td>
                                </tr>
                                <tr className="hover:bg-accent-primary/2 transition-colors">
                                    <td className="p-6 text-heading font-serif font-bold italic">The Institution</td>
                                    <td className="p-6 text-foreground/50 text-sm italic">Multi-tenant Cloud Sync (Stage 2).</td>
                                    <td className="p-6 text-accent-primary font-bold text-sm tracking-tight uppercase">Audit-Ready Outcomes</td>
                                </tr>
                                <tr className="hover:bg-accent-primary/2 transition-colors">
                                    <td className="p-6 text-heading font-serif font-bold italic">The Professional</td>
                                    <td className="p-6 text-foreground/50 text-sm italic">Zero-tracking PWA architecture.</td>
                                    <td className="p-6 text-accent-primary font-bold text-sm tracking-tight uppercase">Data Sovereignty</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Development Roadmap */}
                <section className="mb-24 page-break-before">
                    <div className="flex flex-col items-center text-center mb-16 px-12 py-8 bg-accent-primary/2 rounded-[2rem] border border-accent-primary/10">
                        <h2 className="text-4xl text-heading font-serif font-bold italic tracking-tight mb-2">
                            Development & <span className="text-accent-primary">Integration</span> Roadmap
                        </h2>
                        <div className="w-24 h-1 bg-accent-primary/30 rounded-full"></div>
                    </div>

                    <div className="space-y-8">
                        {/* Phase 1 */}
                        <div className="flex border border-card-border rounded-3xl overflow-hidden avoid-break-inside bg-card-bg shadow-sm">
                            <div className="w-1/3 p-10 bg-accent-primary/2 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-[0.3em] mb-4">Phase 1 (3 Months)</span>
                                <span className="text-xl font-serif font-bold italic text-heading">Security & Infra</span>
                                <div className="mt-4 inline-block px-4 py-1 bg-accent-primary text-accent-primary-foreground rounded-full text-sm font-bold shadow-lg shadow-accent-primary/20">£45k - £55k</div>
                            </div>
                            <div className="w-2/3 p-10">
                                <ul className="space-y-4 text-foreground/50 text-sm font-medium italic">
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">01</span> Institutional cloud backend (Supabase/PostgreSQL).</li>
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">02</span> Role-based access for mentors & staff auditors.</li>
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">03</span> Advanced AI skill-mapping for SEN frameworks.</li>
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">04</span> Deployment of "Stealth Mode" for professionals.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 - Highlighted */}
                        <div className="flex border-2 border-accent-primary rounded-3xl overflow-hidden shadow-2xl scale-[1.03] transform transition-all avoid-break-inside relative group z-10 bg-card-bg">
                            <div className="absolute top-0 right-0 p-4">
                                <Zap className="text-accent-primary animate-pulse" size={24} />
                            </div>
                            <div className="w-1/3 p-10 bg-accent-primary flex flex-col justify-center text-center text-background shadow-inner">
                                <span className="text-[10px] font-bold uppercase opacity-80 tracking-[0.3em] mb-4 font-sans">Phase 2 (4 Months)</span>
                                <span className="text-xl font-serif font-bold italic mb-6">Native & Access</span>
                                <div className="mt-4 inline-block px-4 py-1 bg-background text-accent-primary rounded-full text-xs font-bold shadow-xl">£35k - £45k</div>
                            </div>
                            <div className="w-2/3 p-10">
                                <ul className="space-y-4 text-foreground/70 text-sm font-medium italic">
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">01</span> Native iOS/Android app for on-placement tracking.</li>
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">02</span> Haptic & Visual feedback loops for accessibility.</li>
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">03</span> Multi-language support for diverse cohorts.</li>
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">04</span> Offline-first sync for remote placements.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex border border-card-border rounded-3xl overflow-hidden avoid-break-inside bg-card-bg shadow-sm">
                            <div className="w-1/3 p-10 bg-accent-primary/2 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-[0.3em] mb-4">Phase 3 (6 Months)</span>
                                <span className="text-xl font-serif font-bold italic text-heading">Scaling</span>
                                <div className="mt-4 inline-block px-4 py-1 bg-accent-primary text-accent-primary-foreground rounded-full text-sm font-bold shadow-lg shadow-accent-primary/20">£25k - £35k</div>
                            </div>
                            <div className="w-2/3 p-10">
                                <ul className="space-y-4 text-foreground/50 text-sm font-medium italic">
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">01</span> White-label options for Specialist Colleges.</li>
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">02</span> Direct API integration with Local Authority portals.</li>
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">03</span> Longitudinal outcome reporting & analytics.</li>
                                    <li className="flex gap-4"><span className="text-accent-primary font-bold not-italic">04</span> National rollout & staff training certification.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-right pt-8">
                            <p className="text-foreground/40 text-sm font-bold uppercase tracking-widest mb-2">Total Funding Recommendation</p>
                            <p className="text-4xl font-serif font-bold italic text-heading">
                                £105,000 - <span className="text-accent-primary">£135,000</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Impact Metrics */}
                <section className="mb-24 page-break-before">
                    <div className="flex items-center gap-4 mb-12">
                        <TrendingUp className="text-accent-primary" size={32} />
                        <h2 className="text-3xl text-heading font-serif font-bold italic tracking-tight">Institutional <span className="text-accent-primary">ROI</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mt-6 font-serif italic">
                        <div className="text-center p-12 bg-card-bg rounded-[2rem] shadow-xl border-b-8 border-accent-primary avoid-break-inside border border-card-border">
                            <div className="text-6xl font-bold text-accent-primary mb-4 italic">80%</div>
                            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 not-italic mb-8">Admin Reduction</div>
                            <p className="text-lg text-foreground/60 leading-relaxed">
                                Eliminates the cycle of staff manual formatting student CVs.
                            </p>
                        </div>
                        <div className="text-center p-12 bg-card-bg rounded-[2rem] shadow-xl border-b-8 border-accent-primary avoid-break-inside border border-card-border">
                            <div className="text-4xl font-bold text-accent-primary mb-6 italic tracking-tighter">Empirical</div>
                            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/40 not-italic mb-8">Outcomes</div>
                            <p className="text-lg text-foreground/60 leading-relaxed">
                                Concrete data on independence and skill acquisition.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Governance */}
                <section className="mb-24 page-break-before">
                    <div className="flex items-center gap-4 mb-12">
                        <Shield className="text-accent-primary" size={32} />
                        <h2 className="text-3xl text-heading font-serif font-bold italic tracking-tight">Governance & <span className="text-accent-primary">Ethics</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 bg-card-bg border-t-4 border-accent-primary rounded-xl avoid-break-inside border border-card-border shadow-sm">
                            <h4 className="font-serif font-bold italic text-xl mb-6 text-heading">Digital Sovereignty</h4>
                            <p className="text-sm text-foreground/50 font-medium italic leading-relaxed">
                                The Professional (Student or Expert) owns their data. Local storage is the default; cloud sync is an optional, institutional opt-in.
                            </p>
                        </div>
                        <div className="p-10 bg-card-bg border-t-4 border-accent-primary rounded-xl avoid-break-inside border border-card-border shadow-sm">
                            <h4 className="font-serif font-bold italic text-xl mb-6 text-heading">Stateless AI Ethics</h4>
                            <p className="text-sm text-foreground/50 font-medium italic leading-relaxed">
                                TailorTrack uses stateless API endpoints. Your professional history is never used to train models or sold to third parties.
                            </p>
                        </div>
                    </div>

                    <div className="mt-24 text-center avoid-break-inside">
                        <p className="text-foreground/40 mb-6 text-[10px] font-bold uppercase tracking-[0.4em]">Deployment Resource Centre</p>
                        <div className="flex items-center justify-center gap-4 text-2xl font-serif font-bold italic text-accent-primary hover:opacity-70 transition-opacity cursor-pointer">
                            <Github size={28} />
                            <span className="border-b-2 border-accent-primary/30">github.com/nicola-empower/cv-tailor</span>
                        </div>
                    </div>
                </section>

                {/* Commitment */}
                <section className="mt-32 mb-12 py-24 text-center border-t border-card-border page-break-before relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent-primary/2 rounded-full blur-3xl -z-10"></div>
                    <h2 className="text-[10px] text-accent-primary font-bold uppercase tracking-[0.5em] mb-12">
                        The Empower Commitment
                    </h2>
                    <div className="max-w-4xl mx-auto bg-card-bg p-16 rounded-[3rem] italic text-heading leading-relaxed border border-card-border shadow-2xl text-4xl mb-16 font-serif relative">
                        <div className="absolute top-8 left-8 text-8xl text-accent-primary/5 font-serif not-italic">"</div>
                        Independence is a metric, and everyone deserves a professional narrative. We are architecting the tools that prove it.
                        <div className="absolute bottom-8 right-8 text-8xl text-accent-primary/5 font-serif not-italic">"</div>
                    </div>
                    <div className="space-y-4">
                        <p className="font-serif font-bold italic text-3xl text-heading">Empower Digital Solutions</p>
                        <div className="flex items-center justify-center gap-3 text-foreground/40 font-bold uppercase tracking-widest text-xs">
                            <Mail size={16} />
                            <a href="mailto:connect@nicolaberry.uk" className="hover:text-accent-primary transition-colors border-b border-transparent hover:border-accent-primary pb-0.5">connect@nicolaberry.uk</a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
