"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Target, 
  Rocket, 
  Brain, 
  ShieldCheck, 
  Layers, 
  Zap,
  TrendingUp,
  Cpu,
  Globe,
  Database,
  BarChart3,
  Calendar,
  Mic,
  MapPin
} from "lucide-react";

export default function TradeProProposal() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground pb-20 selection:bg-accent-primary selection:text-accent-primary-foreground">
      {/* Navigation */}
      <nav className="border-b border-card-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-sans">
          <Link 
            href="/#work" 
            className="flex items-center gap-2 text-foreground/50 hover:text-accent-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/40 font-mono">Strategic Asset VC-104</span>
            <div className="h-4 w-px bg-card-border"></div>
            <div className="flex items-center gap-2 px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-xs font-black ring-1 ring-accent-primary/20 leading-none">
              £22,000 VALUATION
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20 font-sans">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 text-accent-primary font-black text-sm tracking-widest uppercase mb-6">
            <Target size={16} />
            <span>Investment Thesis & Roadmap</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight text-heading">
            TradePro: The <br />
            <span className="italic text-accent-primary">Digital Spine</span> for <br />
            Field Enterprises
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl italic font-medium">
            A strategic funding proposal to transition a high-performance solo-operator tool 
            into a multi-crew, AI-native field service ecosystem.
          </p>
        </div>

        {/* Asset Value Summary */}
        <section className="bg-card-bg rounded-[40px] border border-card-border p-8 md:p-12 mb-20 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-8">
            <TrendingUp size={48} className="text-accent-primary/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-accent-primary mb-4">Immediate Capacity</h3>
              <p className="text-2xl font-serif leading-snug text-heading">
                TradePro currently absorbs <span className="font-bold underline decoration-accent-primary underline-offset-8 decoration-4">16 hours</span> of 
                back-office administration per week, effectively acting as a digital workforce of 0.4 FTE.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-sm text-foreground/60">
                <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                <span className="italic">Proprietary "Voice-to-Invoice" AI Pipeline</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-sm text-foreground/60">
                <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                <span className="italic">Deterministic Fiscal Forecasting Logic</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-sm text-foreground/60">
                <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
                <span className="italic uppercase tracking-widest text-[10px]">Scalable Multi-Tenant Architecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* The 3-Phase Roadmap */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif font-medium mb-12 flex items-center gap-4 text-heading italic">
            <Rocket className="text-accent-primary" />
            Growth Phases
          </h2>
          
          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="group bg-card-bg p-8 rounded-3xl border border-card-border hover:border-accent-primary/30 transition-all duration-500 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-background rounded-lg text-[10px] font-black uppercase tracking-widest text-foreground/40 border border-card-border">Phase 01</div>
                <div className="text-accent-primary font-black text-xs uppercase tracking-widest animate-pulse">Active Baseline</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-heading">Structural Integrity & Core Intelligence</h3>
              <ul className="space-y-3 text-foreground/70 text-sm">
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-accent-primary/10 text-accent-primary"><Brain size={12} /></div>
                  Refining Gemini 1.5 Pro prompt logic for 99.9% extraction accuracy.
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-foreground/10 text-foreground/40"><MapPin size={12} /></div>
                  Advanced Maps Platform job clustering for fuel optimization.
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="group bg-card-bg p-8 rounded-3xl border border-card-border hover:border-accent-primary/30 transition-all duration-500 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-lg text-[10px] font-black uppercase tracking-widest border border-accent-primary/20">Phase 02</div>
                <div className="text-foreground/40 font-black text-xs uppercase tracking-widest">Scale Mode</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-accent-primary">The Multi-Crew Hub</h3>
              <ul className="space-y-3 text-foreground/70 text-sm italic">
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-accent-primary/10 text-accent-primary"><Globe size={12} /></div>
                  Migrating to Supabase for multi-tenant, real-time job synchronization.
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-accent-primary/10 text-accent-primary"><Mic size={12} /></div>
                  Voice Command integration for hands-free field status updates.
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="group bg-card-bg p-8 rounded-3xl border border-card-border hover:border-accent-primary/30 transition-all duration-500 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-foreground text-background rounded-lg text-[10px] font-black uppercase tracking-widest">Phase 03</div>
                <div className="text-foreground/40 font-black text-xs uppercase tracking-widest">Elite Mode</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-heading">Proprietary Field Intelligence</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6 italic">
                Training Small Language Models (SLMs) on localized trade job data to predict 
                project duration and material costs with 95% confidence before the van even arrives.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider bg-background px-3 py-1.5 rounded-full border border-card-border text-foreground/60 shadow-sm">
                  <Database size={10} className="text-accent-primary" />
                  Job ML Training
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider bg-background px-3 py-1.5 rounded-full border border-card-border text-foreground/60 shadow-sm">
                  <BarChart3 size={10} className="text-accent-primary" />
                  Predictive Inventory
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Rationale */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-medium mb-6 leading-tight text-heading italic">Strategic Valuation</h2>
            <p className="text-foreground/70 mb-8 leading-relaxed font-medium">
              TradePro is positioned as a high-value asset because it addresses a fundamental friction in the 
              £100bn+ UK trade services market: administrative inefficiency.
            </p>
            <div className="p-6 bg-accent-primary/5 border-l-8 border-accent-primary rounded-r-3xl shadow-xl">
              <div className="text-xs font-black uppercase text-accent-primary mb-2 tracking-[0.3em]">Asset Appraisal</div>
              <div className="text-5xl font-serif font-medium text-heading italic">£22,000</div>
              <p className="text-[10px] text-foreground/40 mt-4 leading-tight uppercase font-black tracking-tighter">
                Calculated via 24-month admin-cost recovery <br /> + proprietary AI automation IP.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Cpu />, label: "Compute", val: "Optimised" },
              { icon: <ShieldCheck />, label: "Security", val: "Enterprise" },
              { icon: <Calendar />, label: "Uptime", val: "99.9%" },
              { icon: <Layers />, label: "Latency", val: "< 100ms" }
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-card-bg rounded-3xl border border-card-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
                <div className="text-accent-primary mb-3">{stat.icon}</div>
                <div className="text-[10px] uppercase font-black text-foreground/30 tracking-widest mb-1">{stat.label}</div>
                <div className="text-sm font-black text-heading italic">{stat.val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="pt-12 border-t border-card-border font-sans">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center text-accent-primary-foreground font-black text-lg shadow-xl">NB</div>
              <div>
                <div className="font-black text-heading italic">Nicola Berry</div>
                <div className="text-[10px] text-foreground/40 uppercase tracking-[0.4em] font-black">Systems Architect</div>
              </div>
            </div>
            <Link 
              href="/work/trade-pro/infographic"
              className="px-8 py-4 bg-background border-2 border-card-border text-foreground hover:bg-card-bg rounded-full font-black hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-sm"
            >
              Back to Infographic
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
