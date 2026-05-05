"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Mail, Shield, Zap, TrendingUp, Users, Layout, Globe, Search, Camera, Video, Sparkles, Mic, Trello, Headphones } from "lucide-react";

export default function NanoBrandProposalPage() {
    return (
        <main className="min-h-screen bg-background text-foreground font-medium transition-colors duration-500 leading-relaxed overflow-x-hidden selection:bg-accent-primary/30">
            {/* Navigation Header (Hidden in Print) */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-card-border px-6 py-4 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center gap-4">
                    <Link
                        href="/work/nano-brand"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-all duration-300 font-bold border-r border-card-border pr-4 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Project</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-2 text-foreground/40 text-[10px] font-black uppercase tracking-widest">
                        <Shield size={14} className="text-accent-primary" />
                        <span>Confidential Strategic Intelligence</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 bg-accent-primary text-background px-6 py-2.5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(86,28,36,0.3)] active:scale-95 text-xs"
                    >
                        <Printer size={18} />
                        <span>Export Proposal</span>
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
                        background: #E8D8C4 !important;
                        color: #561C24 !important;
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
                        <Zap size={16} />
                        <span>Enterprise Content Orchestration</span>
                    </div>

                    <h1 className="text-7xl md:text-9xl font-serif font-bold italic text-heading mb-4 tracking-tighter leading-none">
                        NANO<span className="text-accent-primary not-italic">.</span>BRAND
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-light text-foreground/60 font-serif italic mb-12 tracking-tight">
                        the multi-brand ai orchestrator
                    </h2>

                    <div className="w-32 h-2 bg-accent-primary mb-12 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary">Proprietary Architecture</p>
                                <p className="text-2xl font-serif italic text-heading">Agency-in-a-Box Ecosystem</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary">Valuation Model</p>
                                <p className="text-2xl font-serif italic text-heading">£35,000 Strategic Implementation</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end md:items-end md:text-right space-y-4">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Prepared For</p>
                                <p className="text-lg font-bold text-heading">High-Velocity Founders</p>
                                <p className="text-sm text-foreground/60 italic font-serif">Multi-Brand Digital Orchestrators</p>
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
                            Mission: Content Freedom
                        </h2>
                    </div>

                    <div className="bg-card-bg border border-card-border p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <p className="text-2xl md:text-3xl italic text-heading leading-relaxed font-serif mb-8 relative z-10 border-l-4 border-accent-primary pl-8">
                            "To sell a £35,000 solution, you aren't selling software; you are selling freedom from mental fatigue."
                        </p>
                        <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                            Nano Brand is a premium, AI-powered content orchestration suite designed to manage multiple distinct brands with zero mental friction and maximum alignment. By baking brand DNA into grounding protocols and connecting directly to the Trello API, it transforms the "Context-Switching Hell" of multi-brand management into a calm, deterministic production flow. It is the architect and the factory for the modern solo-founder.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: <Trello className="w-5 h-5" />, title: "Inventory", sub: "Trello API Sync", desc: "Live mirroring of content boards to visualise and curate the brand vibe in real-time." },
                            { icon: <Mic className="w-5 h-5" />, title: "Capture", sub: "Voice-to-Post", desc: "Hands-free idea capture that transcribes and ships raw thoughts directly to production." },
                            { icon: <Headphones className="w-5 h-5" />, title: "Proofing", sub: "Auditory DNA", desc: "Hear your content narrated in a bespoke Scottish voice to ensure perfect tonal alignment." }
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

                {/* Strategic Blueprint */}
                <section className="mb-32 space-y-12 page-break">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-heading underline decoration-accent-primary/30 decoration-8 underline-offset-8">
                        The "Intelligence" Layer
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 bg-card-bg border border-card-border rounded-[2rem] shadow-xl relative overflow-hidden group hover:border-accent-primary/30 transition-all avoid-break">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary">
                                    <Shield size={24} />
                                </div>
                                <h4 className="text-2xl font-serif font-bold italic text-heading">Sacred Notes Protocol</h4>
                            </div>
                            <p className="text-lg text-foreground/60 leading-relaxed font-serif italic mb-6">
                                "Protection for the founder's original thinking."
                            </p>
                            <p className="text-sm text-foreground/40 leading-relaxed">
                                Our grounding protocols ensure that AI-generated refinements never overwrite personal thoughts. Every Polish action appends to the Trello history, maintaining a perfect audit trail of the creator's raw logic.
                            </p>
                        </div>

                        <div className="p-10 bg-card-bg border border-card-border rounded-[2rem] shadow-xl relative overflow-hidden group hover:border-accent-primary/30 transition-all avoid-break">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary">
                                    <Globe size={24} />
                                </div>
                                <h4 className="text-2xl font-serif font-bold italic text-heading">British-English Grounding</h4>
                            </div>
                            <p className="text-lg text-foreground/60 leading-relaxed font-serif italic mb-6">
                                "Zero Hallucinations. 100% Brand Accuracy."
                            </p>
                            <p className="text-sm text-foreground/40 leading-relaxed">
                                Utilising Gemini 2.0 Flash with strict multi-brand DNA anchors to ensure that output always sounds like a senior version of the founder, never a generic AI assistant.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Investment Structure */}
                <section className="mb-32 space-y-16 page-break">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold italic text-heading tracking-tight">
                            Strategic <span className="text-accent-primary not-italic">Investment</span>
                        </h2>
                        <p className="text-foreground/40 font-black uppercase tracking-[0.3em] text-[10px]">Technical Project Valuation • Professional Tier</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { phase: "Foundation", title: "Command & Inventory", price: "£11,500", features: ["Multi-Brand Command Centre Architecture", "Live Trello Inventory Mirroring", "Next.js 15 / React 19 Core Engine"] },
                            { phase: "Intelligence", title: "Nicola-Bot Polish", price: "£9,000", highlight: true, features: ["Gemini 2.0 Flash DNA Grounding", "Campaign Repurposing Engine", "Strategic Inspiration Feed"] },
                            { phase: "Experience", title: "Auditory & Voice", price: "£10,000", features: ["Voice-to-Post Pipeline", "ElevenLabs Scottish Voice Synthesis", "Auditory Proofing Studio"] },
                            { phase: "Governance", title: "Health & Visuals", price: "£4,500", highlight: true, features: ["Brand Health & Mentor Dashboard", "PAX Visual Engine Integration", "Sacred Notes Safety Protocol"] }
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
                            <p className="text-background font-black uppercase tracking-[0.4em] text-xs mb-4">Total Implementation Value</p>
                            <p className="text-6xl md:text-8xl font-serif font-bold italic tracking-tighter text-background mb-6">
                                £35,000
                            </p>
                            <div className="flex flex-col md:flex-row justify-end items-center gap-4 text-background/40 text-sm">
                                <span className="flex items-center gap-2"><Zap size={14} className="text-background" /> Delivered in 12 Dev Weeks</span>
                                <span className="hidden md:block text-background">•</span>
                                <span>Zero-Recurring Agency Personnel Costs</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROI Analysis */}
                <section className="mb-32 space-y-12 page-break">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-heading underline decoration-accent-primary/30 decoration-8 underline-offset-8">
                        ROI (Return on Impact)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-12 bg-card-bg border border-accent-primary/30 rounded-[2rem] shadow-xl text-center flex flex-col justify-center gap-6 relative group border-t-8 avoid-break">
                            <div className="text-6xl font-serif font-bold italic text-accent-primary tracking-tighter group-hover:scale-105 transition-transform">£78k</div>
                            <div className="space-y-2">
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-heading leading-tight">Recovered Time Value</p>
                                <p className="text-sm text-foreground/40 font-serif italic">Calculated based on 520 hours of recovered founder focus at a rate of £150 per hour.</p>
                            </div>
                        </div>
                        <div className="p-12 bg-card-bg border border-accent-primary/30 rounded-[2rem] shadow-xl text-center flex flex-col justify-center gap-6 relative group border-t-8 avoid-break">
                            <div className="text-6xl font-serif font-bold italic text-accent-primary tracking-tighter group-hover:scale-105 transition-transform">300%</div>
                            <div className="space-y-2">
                                <p className="text-xs font-black uppercase tracking-[0.2em] text-heading leading-tight">Agency Capacity Increase</p>
                                <p className="text-sm text-foreground/40 font-serif italic">The technical ability to manage the content output of a full marketing team with zero hiring overhead.</p>
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
                            Nano Brand is the end of creative friction. It is the tactical advantage for founders who refuse to let administrative gravity compromise their vision.
                            <span className="text-6xl font-serif text-accent-primary/20 absolute bottom-4 right-4">"</span>
                        </div>
                    </div>

                    <div className="pt-12 space-y-6">
                        <div className="space-y-1">
                            <p className="text-3xl font-serif font-bold italic text-heading">Nicola Berry</p>
                            <p className="text-xs font-black uppercase tracking-[0.3em] text-accent-primary">Principal Digital Architect • Empower Digital Solutions</p>
                        </div>
                        <div className="flex flex-col items-center gap-3 text-foreground/60 transition-all font-bold group">
                            <div className="flex items-center gap-3 hover:text-accent-primary cursor-pointer px-6 py-3 rounded-2xl bg-card-bg border border-card-border shadow-sm">
                                <Mail size={18} className="text-accent-primary" />
                                <span className="text-sm">connect@nicolaberry.uk</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                                <span>Architecting the Future of Content Strategy</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
