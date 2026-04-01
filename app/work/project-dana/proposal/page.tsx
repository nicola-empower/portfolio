"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Github, Mail, Shield, Zap } from "lucide-react";

export default function DanaProposalPage() {
    return (
        <main className="min-h-screen font-sans bg-background text-foreground transition-colors duration-500 leading-relaxed overflow-x-hidden">
            {/* Navigation Header (Hidden in Print) */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <Link
                    href="/work/project-dana"
                    className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium"
                >
                    <ArrowLeft size={18} />
                    Back to Project
                </Link>
                <div className="flex items-center gap-4">
                    <Link
                        href="/intelligence"
                        className="text-foreground/60 hover:text-accent-primary transition-colors font-medium text-sm border-r border-card-border pr-4"
                    >
                        Intelligence
                    </Link>
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 bg-accent-primary text-accent-primary-foreground px-4 py-2 rounded-full font-bold hover:opacity-90 transition-all shadow-lg active:scale-95"
                    >
                        <Printer size={18} />
                        Print / Save PDF
                    </button>
                </div>
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
            <div className="min-h-screen flex flex-col justify-center items-center text-center p-12 bg-background border-b-8 border-accent-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/5 rounded-full -mr-48 -mt-48"></div>
                <div className="bg-accent-primary p-6 rounded-3xl mb-8 shadow-2xl ring-8 ring-accent-primary/10 transition-transform hover:scale-105 duration-700">
                    <Shield className="text-accent-primary-foreground w-16 h-16" />
                </div>
                <span className="bg-accent-primary/10 text-accent-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6 border border-accent-primary/20">
                    CONFIDENTIAL STRATEGIC PROPOSAL
                </span>
                <h1 className="text-5xl md:text-7xl mb-4 text-heading font-serif font-bold italic tracking-tight">
                    Project <span className="text-accent-primary">DANA</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-serif font-bold italic mb-12 text-foreground/60">
                    Funding & Development Roadmap
                </h2>
                <div className="w-24 h-1 bg-accent-primary mb-12 rounded-full"></div>
                <div className="space-y-4">
                    <p className="text-xl font-medium">
                        Prepared for: <span className="text-heading font-bold italic underline decoration-accent-primary/30 underline-offset-4">Scottish Government / Tech for Good Hubs</span>
                    </p>
                    <p className="text-lg text-foreground/40 font-medium">
                        Empower Digital Solutions | v2.0 | March 2026
                    </p>
                </div>
            </div>

            <div className="content-wrapper max-w-4xl mx-auto px-8 py-20 md:px-12">
                {/* Executive Summary */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-serif font-bold italic mb-6 border-b-2 border-card-border pb-2">
                        Technical Vision: "Hidden in Plain Sight"
                    </h2>
                    <p className="text-xl mb-8 italic text-heading leading-relaxed font-serif font-medium">
                        Project DANA (Digital Archive and Narrative Assistant) is a high-impact solution designed to bridge the "Surveillance Gap" through technical deniability.
                    </p>
                    <p className="mb-8 leading-relaxed text-lg text-foreground/70 font-medium">
                        Survivors of domestic abuse often lack a safe way to document incidents. Abusers heavily monitor devices, making traditional evidence collection dangerous. Project DANA solves this by providing a secure vault disguised as <strong>ChefAI</strong>, a fully functional premium utility application.
                    </p>

                    <h2 className="text-3xl text-accent-primary font-serif font-bold italic mb-8 border-b-2 border-card-border pb-2 mt-16 text-heading">
                        Strategic Value Proposition
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg text-heading font-serif font-bold italic mb-2">Plausible Deniability</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">The only safety tool that hides in plain sight within a premium utility app (ChefAI).</p>
                        </div>
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg text-heading font-serif font-bold italic mb-2">Forensic Accuracy</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">Automated legal translation for Scottish/UK Law (Domestic Abuse Act 2018).</p>
                        </div>
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg text-heading font-serif font-bold italic mb-2">Proactive Safety</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">AI-driven escalation sensing to predict and prevent harm before it occurs.</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-card-border shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-accent-primary text-background font-black italic">
                                    <th className="p-5 font-bold uppercase tracking-widest text-[10px]">Operational Gap</th>
                                    <th className="p-5 font-bold uppercase tracking-widest text-[10px]">Project DANA Solution</th>
                                    <th className="p-5 font-bold uppercase tracking-widest text-[10px]">Strategic Impact</th>
                                </tr>
                            </thead>
                            <tbody className="font-medium">
                                <tr className="border-b border-card-border bg-card-bg/50">
                                    <td className="p-5 text-heading font-bold text-sm">Device Monitoring</td>
                                    <td className="p-5 text-foreground/70 text-sm">Dual-purpose decoy interface.</td>
                                    <td className="p-5 font-serif font-bold italic text-accent-primary">Zero Detection Risk</td>
                                </tr>
                                <tr className="border-b border-card-border">
                                    <td className="p-5 text-heading font-bold text-sm">Admissibility</td>
                                    <td className="p-5 text-foreground/70 text-sm">SHA-256 Hashing & Metadata.</td>
                                    <td className="p-5 font-serif font-bold italic text-accent-primary">Immutable Evidence</td>
                                </tr>
                                <tr className="border-b border-card-border bg-card-bg/50">
                                    <td className="p-5 text-heading font-bold text-sm">Coercive Control</td>
                                    <td className="p-5 text-foreground/70 text-sm">AI analysis of isolation patterns.</td>
                                    <td className="p-5 font-serif font-bold italic text-accent-primary">DAA 2018 Alignment</td>
                                </tr>
                                <tr>
                                    <td className="p-5 text-heading font-bold text-sm">Crisis Response</td>
                                    <td className="p-5 text-foreground/70 text-sm">Ghost notifications & Panic gestures.</td>
                                    <td className="p-5 font-serif font-bold italic text-accent-primary">Direct Protection</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Development Roadmap */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-center text-heading font-serif font-bold italic mb-12 border-b-4 border-accent-primary pb-4">
                        Development & Investment Roadmap
                    </h2>

                    <div className="space-y-10">
                        {/* Phase 1 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside shadow-sm">
                            <div className="w-1/3 p-8 bg-accent-primary/5 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-widest mb-2">Phase 1 (3-4 Months)</span>
                                <span className="text-xl font-serif font-bold italic text-heading">Security & Infra</span>
                                <span className="text-2xl text-accent-primary font-bold mt-2">£45k - £60k</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm font-medium">
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Zero-knowledge encrypted backend (Supabase/Vault).</li>
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Professional Penetration Testing & Security Audit.</li>
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Legal review of AI-generated witness statements.</li>
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Transition from local storage to production-grade E2EE.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex border-2 border-accent-primary rounded-xl overflow-hidden shadow-xl scale-[1.02] transform transition-transform avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-primary flex flex-col justify-center text-center text-background font-black italic shadow-inner">
                                <span className="text-[10px] font-bold uppercase opacity-80 tracking-widest mb-2 font-sans not-italic">Phase 2 (3 Months)</span>
                                <span className="text-xl font-serif font-bold italic">Native & UX</span>
                                <span className="text-2xl font-bold mt-2">£30k - £45k</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm font-medium">
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> React Native/Expo conversion for iOS & Android.</li>
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Advanced "Panic Gestures" (Shake-to-wipe).</li>
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Ghost notifications hidden in fake news feeds.</li>
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Offline-first AI models for high-risk coverage.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside shadow-sm">
                            <div className="w-1/3 p-8 bg-accent-primary/5 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-widest mb-2">Phase 3 (6 Months)</span>
                                <span className="text-xl font-serif font-bold italic text-heading">Integration</span>
                                <span className="text-2xl text-accent-primary font-bold mt-2">£25k - £35k</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm font-medium">
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Partnership pilot with specialist charities (Women's Aid).</li>
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Multi-language support (ESOL accessibility).</li>
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Training manuals for charity support workers.</li>
                                    <li className="flex gap-2"><span className="text-accent-primary font-bold">•</span> Feedback loops for accessibility optimisations.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-right pt-6">
                            <p className="text-foreground/40 text-xl font-medium">
                                Total Funding Recommendation: <span className="text-heading font-bold italic underline decoration-accent-primary/30 underline-offset-4">£120,000 - £150,000</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Strategy & Impact */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-serif font-bold italic mb-8 border-b-2 border-card-border pb-2">
                        Strategic Social Impact (ROI)
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div className="text-center p-10 bg-accent-primary text-background rounded-3xl shadow-xl hover:shadow-2xl transition-all avoid-break-inside relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-background/20"></div>
                            <div className="text-4xl font-serif font-bold italic mb-2 tracking-tight">Immutable</div>
                            <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Evidence Chain (SHA-256)</div>
                            <p className="text-sm mt-8 opacity-90 leading-relaxed font-medium italic">
                                Ensures legal admissibility for Scottish Family Law and Police reporting through verifiable cryptographic hashes.
                            </p>
                        </div>
                        <div className="text-center p-10 bg-card-bg text-heading rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-card-border avoid-break-inside relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-accent-primary/10"></div>
                            <div className="text-4xl font-serif font-bold italic text-accent-primary mb-2 tracking-tight">Survivor</div>
                            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">Autonomy & Protection</div>
                            <p className="text-sm mt-8 text-foreground/60 leading-relaxed font-medium">
                                Providing tools that work under the unique pressures of coercive control without alerting the abuser.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 bg-accent-primary/5 border-2 border-accent-primary/20 rounded-3xl p-10 shadow-sm avoid-break-inside">
                        <h3 className="text-2xl font-serif font-bold italic text-heading mb-8">Pitch Targets & Funding Sources</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <h4 className="font-bold text-accent-primary uppercase tracking-widest text-[10px]">1. Government & Innovation</h4>
                                <p className="text-foreground/70 text-sm leading-relaxed font-medium">
                                    Scottish Government / Tech for Good Hubs (Alignment with DAA 2018). Innovate UK Smart Grants.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-bold text-accent-primary uppercase tracking-widest text-[10px]">2. Community & Charity</h4>
                                <p className="text-foreground/70 text-sm leading-relaxed font-medium">
                                    Comic Relief / National Lottery Community Fund. Direct Charity HQ integration (Women's Aid).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Governance & Security */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-serif font-bold italic mb-8 border-b-2 border-card-border pb-2">
                        Technical Governance
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-card-bg border-t-4 border-accent-primary rounded-b-xl avoid-break-inside border border-card-border shadow-sm">
                            <h4 className="font-serif font-bold italic mb-4 text-heading">Zero-Knowledge Protocol</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                                Data is encrypted on-device. Even Empower as the developer cannot access raw survivor logs, satisfying the highest privacy tiers.
                            </p>
                        </div>
                        <div className="p-8 bg-card-bg border-t-4 border-accent-primary rounded-b-xl avoid-break-inside border border-card-border shadow-sm">
                            <h4 className="font-serif font-bold italic mb-4 text-heading">Scottish Law Alignment</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                                AI analysis specifically targets criteria from the Domestic Abuse (Scotland) Act 2018, converting trauma logs into forensic statements.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 text-center avoid-break-inside">
                        <p className="text-foreground/40 mb-4 italic font-medium text-sm">Official POC Development Repository</p>
                        <div className="flex items-center justify-center gap-3 text-2xl font-bold text-accent-primary hover:text-accent-primary/80 transition-colors">
                            <Github />
                            <span className="font-serif italic underline decoration-accent-primary/30 underline-offset-8">github.com/nicola-empower/project-dana</span>
                        </div>
                    </div>
                </section>

                {/* Commitment */}
                <section className="mt-32 mb-12 py-16 text-center border-t border-card-border page-break-before">
                    <h2 className="text-3xl text-accent-primary font-serif font-bold italic mb-10 inline-block">
                        The Empower Commitment
                    </h2>
                    <div className="max-w-3xl mx-auto bg-card-bg p-12 rounded-3xl italic text-heading leading-relaxed border border-card-border shadow-sm text-2xl mb-12 font-serif font-bold relative group">
                        <div className="absolute top-4 left-4 text-6xl text-accent-primary/10 group-hover:text-accent-primary/20 transition-colors duration-500">"</div>
                        Built with rage and precision. We are bridging the gap between trauma and justice through technology that refuses to be seen.
                        <div className="absolute bottom-4 right-4 text-6xl text-accent-primary/10 group-hover:text-accent-primary/20 transition-colors duration-500">"</div>
                    </div>
                    <div className="space-y-2">
                        <p className="font-serif font-bold italic text-2xl text-heading">Empower Digital Solutions</p>
                        <div className="flex items-center justify-center gap-3 text-foreground/60 font-bold">
                            <Mail size={18} className="text-accent-primary" />
                            <a href="mailto:connect@nicolaberry.uk" className="hover:text-accent-primary transition-colors underline decoration-accent-primary/30 underline-offset-4">connect@nicolaberry.uk</a>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/30 mt-12 max-w-lg mx-auto leading-relaxed border-t border-card-border pt-8">
                            Disclaimer: This tool is a Proof of Concept (POC) and not a replacement for emergency services (Call 999).
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
