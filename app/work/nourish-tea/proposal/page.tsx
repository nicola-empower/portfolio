"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Mail, Shield, Zap, TrendingUp, Users, Layout, Globe, Search, Heart } from "lucide-react";

export default function NourishProposalPage() {
    return (
        <main className="min-h-screen font-sans bg-background text-foreground transition-colors duration-500 leading-relaxed overflow-x-hidden">
            {/* Navigation Header (Hidden in Print) */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <Link
                    href="/work/nourish-tea"
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
                    Nourish
                </h1>
                <h2 className="text-2xl md:text-3xl font-light mb-12 text-foreground/80 font-serif lowercase tracking-tight">
                    the holistic lifestyle hub
                </h2>
                <div className="w-24 h-1 bg-accent-primary mb-12"></div>
                <div className="space-y-4">
                    <p className="text-xl">
                        Technical Architecture & <span className="font-bold border-b-2 border-accent-primary">Professional Valuation</span>
                    </p>
                    <p className="text-lg text-foreground/80 max-w-lg mx-auto">
                        Prepared for Wellness Tech Investors / Lifestyle Hub Partners / Digital Health Stakeholders
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
                        Mission: Engineering Family Calm
                    </h2>
                    <p className="text-xl mb-8 italic text-foreground/90 leading-relaxed font-serif">
                        Nourish is a high-premium lifestyle sanctuary designed to reduce the "invisible load" for busy households through social proof and AI automation.
                    </p>
                    <p className="mb-8 leading-relaxed text-lg text-foreground/70">
                        Modern families are overwhelmed by disjointed wellness apps. Nourish unifies Food, Movement, and Mindfulness into a single "Digital Village." By utilising an Instagram-inspired UI, it leverages familiar social patterns to foster community support, allowing parents to "fork" recipes and rituals based on real-world household successes.
                    </p>

                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-accent-primary pb-2 mt-16 font-serif">
                        The Three Pillars Architecture
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">🍱 Nourish</h3>
                            <p className="text-xs text-foreground/60 font-bold uppercase tracking-wider mb-2">Food & Community</p>
                            <p className="text-sm text-foreground/70 leading-relaxed">Social Feed, Recipe Forking, and AI Fridge Scanner.</p>
                        </div>
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">🏃 Move</h3>
                            <p className="text-xs text-foreground/60 font-bold uppercase tracking-wider mb-2">Movement Hub</p>
                            <p className="text-sm text-foreground/70 leading-relaxed">Ella-style HIIT, stroller sprints, and intensity markers.</p>
                        </div>
                        <div className="border border-card-border border-l-4 border-l-accent-primary bg-card-bg p-6 rounded-r-xl avoid-break-inside">
                            <h3 className="text-lg text-accent-primary font-bold mb-2 font-serif">🧘 Mind</h3>
                            <p className="text-xs text-foreground/70 font-bold uppercase tracking-wider mb-2">Mindful Sanctuary</p>
                            <p className="text-sm text-foreground/80 leading-relaxed">Culinary blogs, expert guest intake, and soundscapes.</p>
                        </div>
                    </div>
                </section>

                {/* Technical Strategy */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-accent-primary font-bold mb-8 border-b-2 border-accent-primary pb-2 font-serif">
                        AI Synergy & Engagement Logic
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-card-bg border border-card-border border-t-4 border-t-accent-primary rounded-b-xl avoid-break-inside">
                            <div className="flex items-center gap-3 mb-4">
                                <Search className="text-accent-primary" size={20} />
                                <h4 className="font-bold text-accent-primary font-serif">Global Discovery Layer</h4>
                            </div>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                A glassmorphic (Cmd+K) search hub that indexes all three pillars simultaneously, allowing users to jump from a recipe to a related mindfulness sounding or workout in one unified experience.
                            </p>
                        </div>
                        <div className="p-8 bg-card-bg border border-card-border border-t-4 border-t-accent-primary rounded-b-xl avoid-break-inside">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="text-accent-primary" size={20} />
                                <h4 className="font-bold text-accent-primary font-serif">The Ritual Engine</h4>
                            </div>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                Data-driven habit loops that nudge users toward a specific pillar each day. This rotation logic builds wellness habits while ensuring all feature sets are explored by the household.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Developer Cost Breakdown */}
                <section className="mb-20 page-break-before">
                    <h2 className="text-3xl text-center text-accent-primary font-bold mb-12 border-b-4 border-accent-primary pb-4 font-serif">
                        Development & Cost Breakdown
                    </h2>

                    {/* Rate Card (Optional but professional) */}
                    <div className="mb-12 bg-heading text-background p-8 rounded-2xl flex justify-around items-center avoid-break-inside shadow-xl">
                        <div className="text-center">
                            <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Standard Day</p>
                            <p className="text-2xl font-bold font-serif text-accent-secondary">£350</p>
                        </div>
                        <div className="w-px h-10 bg-background/20"></div>
                        <div className="text-center">
                            <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Standard Hour</p>
                            <p className="text-2xl font-bold font-serif text-accent-secondary">£50</p>
                        </div>
                        <div className="w-px h-10 bg-background/20"></div>
                        <div className="text-center">
                            <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Retainer (10+)</p>
                            <p className="text-2xl font-bold font-serif text-accent-secondary">£300</p>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {/* Phase 1 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-secondary/30 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-widest mb-2">Phase 1</span>
                                <span className="text-xl font-bold text-foreground">Foundation & UI</span>
                                <span className="text-2xl text-accent-primary font-bold mt-2">£875</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li>Setup (Next.js 15, Tailwind v4, TS config)</li>
                                    <li>"Modern Boutique" Design System Architecture</li>
                                    <li>Layout shell & Pillar Structural Logic</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-secondary/30 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/40 tracking-widest mb-2">Phase 2</span>
                                <span className="text-xl font-bold text-foreground">Social & Food</span>
                                <span className="text-2xl text-accent-primary font-bold mt-2">£2,625</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li>Nourish Social Feed (Order-Slip Architecture)</li>
                                    <li>Recipe Forking & Variation Threading Logic</li>
                                    <li>SOS / Crew Ping emergency flow</li>
                                    <li>Community Discovery Hubs & Profiles</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside border-l-8 border-l-accent-primary">
                            <div className="w-1/3 p-8 bg-accent-primary flex flex-col justify-center text-center text-background">
                                <span className="text-[10px] font-bold uppercase opacity-8 tracking-widest mb-2">Phase 3</span>
                                <span className="text-xl font-bold">Lifestyle Pivot</span>
                                <span className="text-2xl font-bold mt-2">£1,925</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li>Movement Hub Extension (/move)</li>
                                    <li>Mindfulness Blog & Guest Intake Engine (/mind)</li>
                                    <li>Global Cmd+K Discovery Layer Integration</li>
                                    <li>Engagement Pulse & Ritual Loop Logic</li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 4 */}
                        <div className="flex border border-card-border rounded-xl overflow-hidden avoid-break-inside">
                            <div className="w-1/3 p-8 bg-accent-secondary/30 flex flex-col justify-center text-center border-r border-card-border">
                                <span className="text-[10px] font-bold uppercase text-foreground/70 tracking-widest mb-2">Phase 4</span>
                                <span className="text-xl font-bold text-foreground">AI Implementation</span>
                                <span className="text-2xl text-accent-primary font-bold mt-2">£2,451</span>
                            </div>
                            <div className="w-2/3 p-8 bg-card-bg">
                                <ul className="space-y-3 text-foreground/70 text-sm">
                                    <li>AI Family Meal Planner & Visual Scanner</li>
                                    <li>Voice-to-Recipe (Whisper/Gemini) Conversion</li>
                                    <li>Swap-Bot Substitution Engine</li>
                                    <li>Social Matchmaker & 'Food Twin' rationales</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-right pt-8">
                            <p className="text-foreground/70 text-sm uppercase tracking-widest mb-1">Delivered Asset Value</p>
                            <p className="text-3xl md:text-5xl font-bold text-accent-primary font-serif">
                                £8,751
                            </p>
                            <p className="text-foreground/60 text-sm mt-2 italic">Based on 25 development days to V2.0 rebrand</p>
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
                            <div className="text-4xl font-bold text-accent-secondary mb-2 font-serif italic">Community</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Leveraged Social Proof</div>
                            <p className="text-sm mt-6 opacity-80 text-background leading-relaxed">
                                Curates the "Digital Village" to drive engagement and retention by showing the successful habits of other users.
                            </p>
                        </div>
                        <div className="text-center p-8 bg-heading text-background rounded-2xl shadow-xl border-b-8 border-accent-primary avoid-break-inside">
                            <div className="text-4xl font-bold text-accent-secondary mb-2 font-serif italic">Operational</div>
                            <div className="text-xs uppercase tracking-widest font-bold opacity-60">Administrative Erasure</div>
                            <p className="text-sm mt-6 opacity-80 text-background leading-relaxed">
                                Reclaims hours of parental "invisible load" by automating meal planning, substitution decisions, and wellness scheduling.
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
                        Nourish: Built for the families who want to cook, move, and breathe better.
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
