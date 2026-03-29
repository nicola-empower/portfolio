"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Mail, Shield, Zap, TrendingUp, Users, Layout, Globe, Search, Camera, Video } from "lucide-react";

export default function PaxProposalPage() {
    return (
        <main className="min-h-screen font-sans bg-background text-foreground transition-colors duration-500 leading-relaxed overflow-x-hidden">
            {/* Navigation Header (Hidden in Print) */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <Link
                    href="/work/pax-visual-engine"
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
                    PAX
                </h1>
                <h2 className="text-2xl md:text-3xl font-light mb-12 text-foreground/80 font-serif lowercase tracking-tight">
                    the visual creation suite
                </h2>
                <div className="w-24 h-1 bg-accent-primary mb-12"></div>
                <div className="space-y-4">
                    <p className="text-xl">
                        Flux-Powered Architecture & <span className="font-bold border-b-2 border-accent-primary">Operational Valuation</span>
                    </p>
                    <p className="text-lg text-foreground/80 max-w-lg mx-auto">
                        Prepared for Creative Tech Stakeholders / AI Production Hubs / Digital Identity Platforms
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
                        Mission: Sovereignty in the Generative Age
                    </h2>
                    <p className="text-xl mb-8 italic text-foreground/90 leading-relaxed font-serif">
                        Inspired by Katya Varbanova's "Viral Marketing Stars," PAX (the IKEA wardrobe metaphor) was built to bypass the expensive "Prompt Tax" of raw AI generation.
                    </p>
                    <p className="mb-8 leading-relaxed text-lg text-foreground/70">
                        PAX is a high-fidelity visual engine designed to bridge the gap between static generative art and intentional cinematic motion. By combining the precision of **Flux LoRAs** with the analytical 'vision' of **Google Gemini**, PAX eliminates common AI failure points: "3-armed" generations, warped fingers, and safety compromises. It transforms the complex act of prompt engineering into a "Cher Horowitz" wardrobe experience, where style consistency is a single, surgical button-click away.
                    </p>

                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-accent-primary pb-2 mt-16 font-serif">
                        Core Engine Architecture
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">🎯 Precision</h3>
                            <p className="text-xs text-foreground/60 font-bold uppercase tracking-wider mb-2">Flux + Astria</p>
                            <p className="text-sm text-foreground/70 leading-relaxed">Fine-tuned identity-consistent LoRAs that anchor facial features across variables.</p>
                        </div>
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">🚿 Hygiene</h3>
                            <p className="text-xs text-foreground/60 font-bold uppercase tracking-wider mb-2">Automated Sanitization</p>
                            <p className="text-sm text-foreground/70 leading-relaxed">Hard-coded negative prompting and safety guards to eliminate "3-armed" hallucinations.</p>
                        </div>
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">🎬 Motion</h3>
                            <p className="text-xs text-foreground/60 font-bold uppercase tracking-wider mb-2">Gemini Vision</p>
                            <p className="text-sm text-foreground/70 leading-relaxed">Intelligent analysis of image physics to suggest natural, cinematic movement.</p>
                        </div>
                    </div>
                </section>

                {/* Technical Strategy */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-accent-primary pb-2 font-serif">
                        The "Visual Intelligence" Layer
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-card-bg border border-card-border border-t-4 border-t-accent-primary rounded-b-xl avoid-break-inside">
                            <div className="flex items-center gap-3 mb-4">
                                <Camera className="text-accent-primary" size={20} />
                                <h4 className="font-bold text-accent-primary font-serif">Identity Consistency</h4>
                            </div>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                Unlike standard generators, PAX utilizes a persistent configuration engine that maps user-selected hair, outfit, and lighting configurations to complex model parameters, ensuring an 85% reduction in "identity drift."
                            </p>
                        </div>
                        <div className="p-8 bg-card-bg border border-card-border border-t-4 border-t-accent-primary rounded-b-xl avoid-break-inside">
                            <div className="flex items-center gap-3 mb-4">
                                <Video className="text-accent-primary" size={20} />
                                <h4 className="font-bold text-accent-primary font-serif">Context-Aware Animation</h4>
                            </div>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                Gemini 2.0 Flash acts as the 'Director,' analyzing lighting and physics in a generated frame to craft unique motion prompts, resulting in 1-click video transitions with 95% prompt alignment.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Developer Cost Breakdown */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-center text-accent-primary font-bold mb-12 border-b-4 border-accent-primary pb-4 font-serif">
                        Development & Cost Breakdown
                    </h2>

                    <div className="space-y-10">
                        {/* Phase 1 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-secondary/30 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-widest mb-2">Phase 1</span>
                                <span className="text-xl font-bold text-foreground">Foundation</span>
                                <span className="text-2xl text-accent-primary font-bold mt-2">£1,050</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li>Project Architecture (Next.js 15, React 19)</li>
                                    <li>"Virtual Studio" Design System Interface</li>
                                    <li>Local Persistence & Session History Engine</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside border-l-8 border-l-accent-primary">
                            <div className="w-1/3 p-8 bg-accent-primary flex flex-col justify-center text-center text-background">
                                <span className="text-[10px] font-bold uppercase opacity-80 tracking-widest mb-2">Phase 2</span>
                                <span className="text-xl font-bold">Flux Visual Engine</span>
                                <span className="text-2xl font-bold mt-2">£1,750</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li>Flux Fine-Tuning & Astria API Integration</li>
                                    <li>Precision Wardrobe & Environment Mapping</li>
                                    <li>Simultaneous 4-Variation Generation Logic</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-secondary/30 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-widest mb-2">Phase 3</span>
                                <span className="text-xl font-bold text-foreground">Motion Intelligence</span>
                                <span className="text-2xl text-accent-primary font-bold mt-2">£1,400</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li>Gemini 2.0 Flash Visual Intelligence Layer</li>
                                    <li>Automated Motion Suggestion Algorithm</li>
                                    <li>1-Click MP4 Transformation Logic</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 4 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside border-l-8 border-l-accent-primary">
                            <div className="w-1/3 p-8 bg-accent-primary flex flex-col justify-center text-center text-background">
                                <span className="text-[10px] font-bold uppercase opacity-80 tracking-widest mb-2">Phase 4</span>
                                <span className="text-xl font-bold">Prompt Hygiene</span>
                                <span className="text-2xl font-bold mt-2">£1,050</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li>Automated "Safety Guard" Negative Prompts</li>
                                    <li>"Cher Horowitz" Multi-format Wardrobe Mapping</li>
                                    <li>Identity Anchoring Facemark Verification Logic</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-right pt-8">
                            <p className="text-foreground/70 text-sm uppercase tracking-widest mb-1">Delivered Asset Value</p>
                            <p className="text-3xl md:text-5xl font-bold text-accent-primary font-serif italic tracking-tighter">
                                £5,250
                            </p>
                            <p className="text-foreground/60 text-sm mt-2 italic">Based on 15 development days to V1.0 delivery</p>
                        </div>
                    </div>
                </section>

                {/* ROI Analysis */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-accent-primary pb-2 font-serif">
                        ROI (Return on Impact)
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div className="text-center p-8 bg-heading text-background rounded-2xl shadow-xl border-b-8 border-accent-primary avoid-break-inside">
                            <div className="text-4xl font-bold text-accent-secondary mb-2 font-serif italic">85%</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Consistency Increase</div>
                            <p className="text-sm mt-6 opacity-80 text-background leading-relaxed">
                                Eliminates the 'randomness' of standard AI art by mapping persistent identity configuration to model parameters.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-heading text-background rounded-2xl shadow-xl border-b-8 border-accent-primary avoid-break-inside">
                            <div className="text-4xl font-bold text-accent-secondary mb-2 font-serif italic">1-Click</div>
                            <div className="text-xs uppercase tracking-widest font-bold text-accent-secondary">Production Pipeline</div>
                            <p className="text-sm mt-6 opacity-80 text-background leading-relaxed">
                                Transforms static imagery into high-quality cinematic motion without the need for manual video coding or complex prompting.
                            </p>
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
                        PAX: Restoring the human core to generative vision. Identity isn't a prompt; it's a constant.
                        <div className="absolute bottom-4 right-4 text-6xl text-accent-primary/10">"</div>
                    </div>
                    <div className="space-y-1">
                        <p className="font-bold text-xl text-foreground">Nicola Berry</p>
                        <p className="text-sm font-bold uppercase tracking-widest text-accent-primary">Founder · Empower Digital Solutions</p>
                        <div className="flex items-center justify-center gap-2 text-foreground/80 font-medium pt-4">
                            <Mail size={16} />
                            <a href="mailto:connect@nicolaberry.uk" className="hover:text-rose-500 transition-colors">connect@nicolaberry.uk</a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
