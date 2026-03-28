"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Github, Mail, Shield, Zap, TrendingUp, Users, Search, Camera, Video } from "lucide-react";

export default function TailorTrackProposalPage() {
    return (
        <main className="min-h-screen font-sans bg-background text-foreground transition-colors duration-500 leading-relaxed overflow-x-hidden">
            {/* Navigation Header (Hidden in Print) */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <Link
                    href="/work/tailortrack-cv"
                    className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium"
                >
                    <ArrowLeft size={18} />
                    Back to Project
                </Link>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-accent-primary text-background px-4 py-2 rounded-full font-bold hover:opacity-90 transition-all shadow-lg active:scale-95"
                >
                    <Printer size={18} />
                    Print / Save PDF
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
                        background: white !important;
                        color: black !important;
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
            <div className="min-h-screen flex flex-col justify-center items-center text-center p-12 bg-background border-b-8 border-accent-primary">
                <img
                    src="https://empowerdigitalsolutions.co.uk/images/logo.png"
                    alt="Empower Logo"
                    className="w-32 h-32 rounded-full border-4 border-accent-primary mb-8 shadow-xl"
                />
                <span className="bg-accent-secondary/30 text-accent-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                    CONFIDENTIAL STRATEGIC PROPOSAL
                </span>
                <h1 className="text-5xl md:text-7xl mb-4 text-accent-primary font-bold italic font-serif">
                    TailorTrack AI
                </h1>
                <h2 className="text-2xl md:text-3xl font-light mb-12 text-foreground/80 font-serif lowercase tracking-tight">
                    the empowerment engine
                </h2>
                <div className="w-24 h-1 bg-accent-primary mb-12"></div>
                <div className="space-y-4">
                    <p className="text-xl">
                        Privacy-First Architecture & <span className="font-bold border-b-2 border-accent-primary">Operational Valuation</span>
                    </p>
                    <p className="text-lg text-foreground/80 max-w-lg mx-auto">
                        Prepared for Institutional Partners / SEN Educators / Independent Career Mentors
                    </p>
                    <p className="pt-8 text-sm font-mono tracking-widest text-foreground/70 uppercase">
                        Empower Digital Solutions | February 2026
                    </p>
                </div>
            </div>

            <div className="content-wrapper max-w-4xl mx-auto px-8 py-20 md:px-12">
                {/* Executive Summary */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-6 border-b-2 border-accent-primary pb-2 font-serif">
                        Mission: Data Sovereignty & Empowerment
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="p-8 bg-card-bg border border-card-border border-l-4 border-l-accent-primary rounded-r-xl avoid-break-inside">
                            <div className="flex items-center gap-3 mb-4">
                                <Search className="text-accent-primary" size={20} />
                                <h4 className="font-bold text-accent-primary font-serif">Automated Skill Mapping</h4>
                            </div>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                Our translation engine maps placement logs (e.g. "Cleaned equipment") against national qualification benchmarks to extract high-value employability data.
                            </p>
                        </div>
                        <div className="p-8 bg-card-bg border border-card-border border-l-4 border-l-accent-primary rounded-r-xl avoid-break-inside">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="text-accent-primary" size={20} />
                                <h4 className="font-bold text-accent-primary font-serif">Frictionless Compliance</h4>
                            </div>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                Automated reporting aligns directly with GIRFEC/SHANARRI requirements, reducing school/college administrative burden by 65%.
                            </p>
                        </div>
                    </div>
                    <p className="text-xl mb-8 italic text-foreground/90 leading-relaxed font-serif">
                        TailorTrack AI is a dual-mission career architecture designed to return agency to the individual while providing institutions with empirical proof of growth.
                    </p>
                    <p className="mb-8 leading-relaxed text-lg text-foreground/70">
                        The "Employment Gap" for students with additional needs is often a translation failure. Daily successes in work placements aren't recorded in a language employers understand. Simultaneously, high-level professionals lack secure, private tools for targeted career moves. TailorTrack AI bridges this gap with a <strong>Privacy-First</strong>, local-first engine that translates effort into outcomes.
                    </p>

                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-accent-primary pb-2 mt-16 font-serif">
                        The Value Proposition
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">Privacy-First</h3>
                            <p className="text-sm text-foreground/60">100% Local Storage. GDPR compliance for special category medical/SEN data by default.</p>
                        </div>
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">AI Skill Translation</h3>
                            <p className="text-sm text-foreground/60">Translates placement routines into "Workplace Ready" skills for the CV.</p>
                        </div>
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">Institutional ROI</h3>
                            <p className="text-sm text-foreground/70">Reduces manual staff drafting time by 80% while proving student independence.</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse border border-card-border">
                            <thead>
                                <tr className="bg-heading text-background">
                                    <th className="p-4 font-bold border border-card-border">Stakeholder</th>
                                    <th className="p-4 font-bold border border-card-border">Solution</th>
                                    <th className="p-4 font-bold border border-card-border">Primary Benefit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-card-border">
                                    <td className="p-4 font-bold text-foreground border border-card-border">The Student</td>
                                    <td className="p-4 text-foreground/70 border border-card-border">Simplified, haptic-reinforced UI.</td>
                                    <td className="p-4 font-bold text-accent-primary border border-card-border">Confidence & Agency.</td>
                                </tr>
                                <tr className="border-b border-card-border">
                                    <td className="p-4 font-bold text-foreground border border-card-border">The Institution</td>
                                    <td className="p-4 text-foreground/70 border border-card-border">Multi-tenant Cloud Sync (Stage 2).</td>
                                    <td className="p-4 font-bold text-accent-primary border border-card-border">Audit-Ready Outcomes.</td>
                                </tr>
                                <tr className="border-b border-card-border">
                                    <td className="p-4 font-bold text-foreground border border-card-border">The Professional</td>
                                    <td className="p-4 text-foreground/70 border border-card-border">Zero-tracking PWA architecture.</td>
                                    <td className="p-4 font-bold text-accent-primary border border-card-border">Data Sovereignty.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Development Roadmap */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-center text-accent-primary font-bold mb-12 border-b-4 border-accent-primary pb-4 font-serif">
                        Development & Integration Roadmap
                    </h2>

                    <div className="space-y-10">
                        {/* Phase 1 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-secondary/30 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/70 tracking-widest mb-2">Phase 1 (3 Months)</span>
                                <span className="text-xl font-bold text-foreground">Security & Infra</span>
                                <span className="text-2xl text-accent-primary font-bold mt-2">£45k - £55k</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li className="flex gap-2"><span>•</span> Institutional cloud backend (Supabase/PostgreSQL).</li>
                                    <li className="flex gap-2"><span>•</span> Role-based access for mentors & staff auditors.</li>
                                    <li className="flex gap-2"><span>•</span> Advanced AI skill-mapping for SEN frameworks.</li>
                                    <li className="flex gap-2"><span>•</span> Deployment of "Stealth Mode" for professionals.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex border-4 border-accent-primary rounded-xl overflow-hidden shadow-2xl scale-[1.02] transform transition-transform avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-primary flex flex-col justify-center text-center text-background">
                                <span className="text-[10px] font-bold uppercase opacity-80 tracking-widest mb-2">Phase 2 (4 Months)</span>
                                <span className="text-xl font-bold">Native & Access</span>
                                <span className="text-2xl font-bold mt-2">£35k - £45k</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li className="flex gap-2"><span>•</span> Native iOS/Android app for on-placement tracking.</li>
                                    <li className="flex gap-2"><span>•</span> Haptic & Visual feedback loops for accessibility.</li>
                                    <li className="flex gap-2"><span>•</span> Multi-language support for diverse cohorts.</li>
                                    <li className="flex gap-2"><span>•</span> Offline-first sync for remote placements.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-secondary/30 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-widest mb-2">Phase 3 (6 Months)</span>
                                <span className="text-xl font-bold text-foreground">Institutional Scaling</span>
                                <span className="text-2xl text-accent-primary font-bold mt-2">£25k - £35k</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li className="flex gap-2"><span>•</span> White-label options for Specialist Colleges.</li>
                                    <li className="flex gap-2"><span>•</span> Direct API integration with NHS/Local Authority portals.</li>
                                    <li className="flex gap-2"><span>•</span> Longitudinal outcome reporting & analytics.</li>
                                    <li className="flex gap-2"><span>•</span> National rollout & staff training certification.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-right pt-6">
                            <p className="text-foreground/80 text-xl font-bold leading-relaxed">
                                Total Funding Recommendation: <span className="text-foreground border-b-2 border-accent-primary">£105,000 - £135,000</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Impact Metrics */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-accent-primary pb-2 font-serif">
                        Institutional ROI (Return on Impact)
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div className="text-center p-8 bg-heading text-background rounded-2xl shadow-xl border-b-8 border-accent-primary avoid-break-inside">
                            <div className="text-4xl font-bold text-accent-secondary mb-2 font-serif">80%</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Reduction in Manual Admin</div>
                            <p className="text-sm mt-6 opacity-80 text-background leading-relaxed">
                                Eliminates the cycle of staff members manually formatting and drafting student CVs from scratch.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-heading text-background rounded-2xl shadow-xl border-b-8 border-accent-primary avoid-break-inside">
                            <div className="text-4xl font-bold text-accent-secondary mb-2 font-serif">Empirical</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Placement Outcomes</div>
                            <p className="text-sm mt-6 opacity-80 text-background leading-relaxed">
                                Provides concrete data on student independence and skill acquisition for institutional reporting.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Governance */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-accent-primary pb-2 font-serif">
                        Data Governance & Ethics
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-card-bg border-t-4 border-accent-primary rounded-b-xl avoid-break-inside border border-card-border">
                            <h4 className="font-bold mb-4 text-accent-primary font-serif">Digital Sovereignty</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                The user (student/professional) owns their data. Local storage is the default; cloud sync is an optional, institutional opt-in.
                            </p>
                        </div>
                        <div className="p-8 bg-card-bg border-t-4 border-accent-primary rounded-b-xl avoid-break-inside border border-card-border">
                            <h4 className="font-bold mb-4 text-accent-primary font-serif">Stateless AI Ethics</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                TailorTrack uses stateless API endpoints. Your professional history is never used to train models or sold to third parties.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 text-center avoid-break-inside">
                        <p className="text-foreground/70 mb-4 italic text-sm">Deployment Resource Centre</p>
                        <div className="flex items-center justify-center gap-3 text-2xl font-bold text-accent-primary hover:opacity-80 transition-colors">
                            <Github />
                            <span>github.com/nicola-empower/cv-tailor</span>
                        </div>
                    </div>
                </section>

                {/* Commitment */}
                <section className="mt-32 mb-12 py-16 text-center border-t border-card-border page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-10 inline-block font-serif">
                        The Empower Commitment
                    </h2>
                    <div className="max-w-3xl mx-auto bg-card-bg p-12 rounded-3xl italic text-foreground/80 leading-relaxed border border-card-border shadow-sm text-2xl mb-12 font-serif relative">
                        <div className="absolute top-4 left-4 text-6xl text-accent-primary/10">"</div>
                        Independence is a metric, and everyone deserves a professional narrative. We are architecting the tools that prove it.
                        <div className="absolute bottom-4 right-4 text-6xl text-accent-primary/10">"</div>
                    </div>
                    <div className="space-y-1">
                        <p className="font-bold text-xl text-foreground">Empower Digital Solutions</p>
                        <div className="flex items-center justify-center gap-2 text-foreground/60 font-medium">
                            <Mail size={16} />
                            <span>nicola@empowerdigitalsolutions.co.uk</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
