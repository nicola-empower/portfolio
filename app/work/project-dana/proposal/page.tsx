"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Github, Mail } from "lucide-react";

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
                    Project DANA
                </h1>
                <h2 className="text-2xl md:text-3xl font-light mb-12 text-foreground/80 font-serif">
                    Funding & Development Roadmap
                </h2>
                <div className="w-24 h-1 bg-accent-primary mb-12"></div>
                <div className="space-y-2">
                    <p className="text-xl">
                        Prepared for: <span className="font-bold">Scottish Government / Tech for Good Hubs</span>
                    </p>
                    <p className="text-lg opacity-80 text-foreground/60">
                        Empower Digital Solutions | March 2026
                    </p>
                </div>
            </div>

            <div className="content-wrapper max-w-4xl mx-auto px-8 py-20 md:px-12">
                {/* Executive Summary */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-6 border-b-2 border-rose pb-2 font-serif">
                        Technical Vision: "Hidden in Plain Sight"
                    </h2>
                    <p className="text-xl mb-8 italic text-foreground/90 leading-relaxed font-serif">
                        Project DANA (SafeHaven) is a high-impact "Tech for Good" solution designed to transition from a functional POC to a secure, publicly available life-saving tool.
                    </p>
                    <p className="mb-8 leading-relaxed text-lg text-foreground/70">
                        Survivors of domestic abuse, particularly those experiencing coercive control, often lack a safe way to document incidents. Abusers heavily monitor devices, making traditional journaling or evidence collection dangerous. Project DANA solves the <strong>"Surveillance Gap"</strong> by providing a secure vault disguised as <strong>ChefAI</strong>, a fully functional recipe finder application.
                    </p>

                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-rose pb-2 mt-16 font-serif">
                        The Value Proposition
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="border-l-4 border-rose bg-card-bg p-6 rounded-r-xl avoid-break-inside border border-card-border">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">Plausible Deniability</h3>
                            <p className="text-sm text-foreground/60">The only safety tool that hides in plain sight within a premium utility app (ChefAI).</p>
                        </div>
                        <div className="border-l-4 border-rose bg-card-bg p-6 rounded-r-xl avoid-break-inside border border-card-border">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">Forensic Accuracy</h3>
                            <p className="text-sm text-foreground/60">Automated legal translation for Scottish/UK Law (Domestic Abuse Act 2018).</p>
                        </div>
                        <div className="border-l-4 border-rose bg-card-bg p-6 rounded-r-xl avoid-break-inside border border-card-border">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">Proactive Safety</h3>
                            <p className="text-sm text-foreground/60">AI-driven escalation sensing to predict and prevent harm before it occurs.</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse border border-card-border">
                            <thead>
                                <tr className="bg-heading text-background">
                                    <th className="p-4 font-bold border border-card-border">Operational Gap</th>
                                    <th className="p-4 font-bold border border-card-border">Project DANA Solution</th>
                                    <th className="p-4 font-bold border border-card-border">Impact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-card-border">
                                    <td className="p-4 font-bold text-foreground border border-card-border">Device Monitoring</td>
                                    <td className="p-4 text-foreground/70 border border-card-border">Dual-purpose decoy interface.</td>
                                    <td className="p-4 font-bold text-rose border border-card-border">Zero Detection Risk.</td>
                                </tr>
                                <tr className="border-b border-card-border">
                                    <td className="p-4 font-bold text-foreground border border-card-border">Admissibility</td>
                                    <td className="p-4 text-foreground/70 border border-card-border">SHA-256 Hashing & Metadata tracking.</td>
                                    <td className="p-4 font-bold text-rose border border-card-border">Immutable Evidence.</td>
                                </tr>
                                <tr className="border-b border-card-border">
                                    <td className="p-4 font-bold text-foreground border border-card-border">Coercive Control</td>
                                    <td className="p-4 text-foreground/70 border border-card-border">AI analysis of isolation/financial abuse.</td>
                                    <td className="p-4 font-bold text-rose border border-card-border">Legal Alignment (DAA 2018).</td>
                                </tr>
                                <tr className="border-b border-card-border">
                                    <td className="p-4 font-bold text-foreground border border-card-border">Crisis Response</td>
                                    <td className="p-4 text-foreground/70 border border-card-border">Ghost notifications & Panic gestures.</td>
                                    <td className="p-4 font-bold text-rose border border-card-border">Immediate Survivor Protection.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Development Roadmap */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-center text-accent-primary font-bold mb-12 border-b-4 border-rose pb-4 font-serif">
                        Development & Investment Roadmap
                    </h2>

                    <div className="space-y-10">
                        {/* Phase 1 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-secondary/30 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-widest mb-2">Phase 1 (3-4 Months)</span>
                                <span className="text-xl font-bold text-foreground">Security & Infra</span>
                                <span className="text-2xl text-rose font-bold mt-2">£45k - £60k</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li className="flex gap-2"><span>•</span> Zero-knowledge encrypted backend (Supabase/Vault).</li>
                                    <li className="flex gap-2"><span>•</span> Professional Penetration Testing & Security Audit.</li>
                                    <li className="flex gap-2"><span>•</span> Legal review of AI-generated witness statements.</li>
                                    <li className="flex gap-2"><span>•</span> Transition from local storage to production-grade E2EE.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex border-4 border-rose rounded-xl overflow-hidden shadow-2xl scale-[1.02] transform transition-transform avoid-break-inside">
                            <div className="w-1/3 p-8 bg-rose flex flex-col justify-center text-center text-background">
                                <span className="text-[10px] font-bold uppercase opacity-80 tracking-widest mb-2">Phase 2 (3 Months)</span>
                                <span className="text-xl font-bold">Native & UX</span>
                                <span className="text-2xl font-bold mt-2">£30k - £45k</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li className="flex gap-2"><span>•</span> React Native/Expo conversion for iOS & Android.</li>
                                    <li className="flex gap-2"><span>•</span> Advanced "Panic Gestures" (Shake-to-wipe).</li>
                                    <li className="flex gap-2"><span>•</span> Ghost notifications hidden in fake news feeds.</li>
                                    <li className="flex gap-2"><span>•</span> Offline-first AI models for high-risk coverage.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-secondary/30 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-widest mb-2">Phase 3 (6 Months)</span>
                                <span className="text-xl font-bold text-foreground">Integration</span>
                                <span className="text-2xl text-rose font-bold mt-2">£25k - £35k</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li className="flex gap-2"><span>•</span> Partnership pilot with specialist charities (Women's Aid).</li>
                                    <li className="flex gap-2"><span>•</span> Multi-language support (ESOL accessibility).</li>
                                    <li className="flex gap-2"><span>•</span> Training manuals for charity support workers.</li>
                                    <li className="flex gap-2"><span>•</span> Feedback loops for accessibility optimisations.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-right pt-6">
                            <p className="text-foreground/60 text-xl font-bold">
                                Total Funding Recommendation: <span className="text-foreground border-b-2 border-rose">£120,000 - £150,000</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Strategy & Impact */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-rose pb-2 font-serif">
                        Strategic Social Impact (ROI)
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div className="text-center p-8 bg-heading text-background rounded-2xl shadow-xl border-b-8 border-rose avoid-break-inside">
                            <div className="text-4xl font-bold text-accent-secondary mb-2 font-serif">Immutable</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Evidence Chain (SHA-256)</div>
                            <p className="text-sm mt-6 opacity-80 text-background leading-relaxed font-sans">
                                Ensures legal admissibility for Scottish Family Law and Police reporting through verifiable cryptographic hashes.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-heading text-background rounded-2xl shadow-xl border-b-8 border-rose avoid-break-inside">
                            <div className="text-4xl font-bold text-accent-secondary mb-2 font-serif">Survivor</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Autonomy & Protection</div>
                            <p className="text-sm mt-6 opacity-80 text-background leading-relaxed font-sans">
                                Providing tools that work under the unique pressures of coercive control without alerting the abuser.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 bg-rose/5 border-2 border-rose rounded-3xl p-10 shadow-sm avoid-break-inside">
                        <h3 className="text-2xl font-bold text-accent-primary mb-6 font-serif">Pitch Targets & Funding Sources</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <h4 className="font-bold text-rose uppercase tracking-wider text-xs">1. Government & Innovation</h4>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    Scottish Government / Tech for Good Hubs (Alignment with DAA 2018). Innovate UK Smart Grants.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-rose uppercase tracking-wider text-xs">2. Community & Charity</h4>
                                <p className="text-foreground/70 text-sm leading-relaxed">
                                    Comic Relief / National Lottery Community Fund. Direct Charity HQ integration (Women's Aid).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Governance & Security */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-rose pb-2 font-serif">
                        Technical Governance
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-card-bg border-t-4 border-rose rounded-b-xl avoid-break-inside border border-card-border">
                            <h4 className="font-bold mb-4 text-accent-primary font-serif">Zero-Knowledge Protocol</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                Data is encrypted on-device. Even Empower as the developer cannot access raw survivor logs, satisfying the highest privacy tiers.
                            </p>
                        </div>
                        <div className="p-8 bg-card-bg border-t-4 border-rose rounded-b-xl avoid-break-inside border border-card-border">
                            <h4 className="font-bold mb-4 text-accent-primary font-serif">Scottish Law Alignment</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                AI analysis specifically targets criteria from the Domestic Abuse (Scotland) Act 2018, converting trauma logs into forensic statements.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 text-center avoid-break-inside">
                        <p className="text-foreground/40 mb-4 italic text-sm">Official POC Development Repository</p>
                        <div className="flex items-center justify-center gap-3 text-2xl font-bold text-accent-primary hover:text-rose transition-colors">
                            <Github />
                            <span>github.com/nicola-empower/project-dana</span>
                        </div>
                    </div>
                </section>

                {/* Commitment */}
                <section className="mt-32 mb-12 py-16 text-center border-t border-card-border page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-10 inline-block font-serif">
                        The Empower Commitment
                    </h2>
                    <div className="max-w-3xl mx-auto bg-card-bg p-12 rounded-3xl italic text-foreground/90 leading-relaxed border border-card-border shadow-sm text-2xl mb-12 font-serif relative">
                        <div className="absolute top-4 left-4 text-6xl text-rose/10 transition-colors duration-500">"</div>
                        Built with rage and precision. We are bridging the gap between trauma and justice through technology that refuses to be seen.
                        <div className="absolute bottom-4 right-4 text-6xl text-rose/10 transition-colors duration-500">"</div>
                    </div>
                    <div className="space-y-1">
                        <p className="font-bold text-xl text-foreground">Empower Digital Solutions</p>
                        <div className="flex items-center justify-center gap-2 text-foreground/60 font-medium">
                            <Mail size={16} />
                            <a href="mailto:connect@nicolaberry.uk" className="hover:text-rose-500 transition-colors">connect@nicolaberry.uk</a>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/30 mt-8 max-w-lg mx-auto leading-relaxed">
                            Disclaimer: This tool is a Proof of Concept (POC) and not a replacement for emergency services (Call 999).
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
