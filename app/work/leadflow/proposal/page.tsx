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
  Globe,
  Database,
  BarChart3,
  Network,
  Activity,
  Workflow,
  Coins,
  ArrowRight
} from "lucide-react";

export default function LeadFlowProposal() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground pb-20 selection:bg-accent-primary selection:text-accent-primary-foreground">
      {/* Navigation */}
      <nav className="border-b border-card-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-foreground/50 hover:text-accent-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Back to Intelligence</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-foreground/40 font-mono">Asset Title: LF-2026</span>
            <div className="h-4 w-px bg-card-border"></div>
            <div className="flex items-center gap-2 px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-[10px] font-black ring-1 ring-accent-primary/20 uppercase tracking-widest leading-none">
              £28,000 STRATEGIC VALUATION
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20 font-sans">
        {/* Header Section */}
        <div className="mb-24">
          <div className="flex items-center gap-2 text-accent-primary font-black text-[10px] tracking-widest uppercase mb-6">
            <Target size={16} />
            <span>Investment Thesis & Pipeline Roadmap</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight text-heading">
            LeadFlow: The <br />
            <span className="italic text-accent-primary">Intelligence Engine</span> for <br />
            Acquisition Mastery
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl font-medium italic">
            A strategic funding proposal to scale a physics-driven marketing simulator into
            a unified, autonomous acquisition operating system.
          </p>
        </div>

        {/* Strategic Moat */}
        <section className="bg-card-bg rounded-[40px] border border-card-border p-8 md:p-16 mb-24 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-12 text-accent-primary/5 rotate-12"><Network size={120} /></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary mb-6">Strategic Advantage</h3>
              <p className="text-2xl font-serif leading-snug text-heading">
                LeadFlow ends the era of <span className="font-bold underline decoration-accent-primary underline-offset-8 decoration-4">Marketing Blindness</span> -
                transforming static reports into a dynamic, physics-driven simulation environment.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: "Ghost Lead Particle Simulation", icon: <Activity size={14} /> },
                { label: "Recursive 'Golden Path' Backtracing", icon: <Zap size={14} /> },
                { label: "AI-Driven Funnel Remediation", icon: <Brain size={14} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-foreground/60 p-4 bg-background rounded-2xl border border-card-border group hover:border-accent-primary/30 transition-all font-medium italic">
                  <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary shadow-sm">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scaling Roadmap */}
        <section className="mb-32">
          <h2 className="text-3xl font-serif font-medium mb-16 flex items-center gap-4 text-heading italic">
            <Rocket className="text-accent-primary" />
            Acquisition Roadmap
          </h2>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-card-bg p-10 rounded-[32px] border border-card-border hover:border-accent-primary/30 transition-all shadow-sm">
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-background rounded-lg text-[10px] font-black uppercase tracking-widest text-foreground/40 border border-card-border">Phase 01</div>
                <div className="text-accent-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 animate-pulse">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
                  Simulator Live
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-heading">Universal Acquisition Connectors</h3>
              <p className="text-foreground/70 text-sm mb-8 leading-relaxed font-medium italic">
                Implementing authenticated API connectors for **Meta Ads, Google Ads, and HubSpot**.
                Automating the transition from static mapping to live-data simulation.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Meta API", "HubSpot Sync", "Dynamic DAGs"].map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-tighter px-3 py-1.5 bg-background rounded-xl border border-card-border text-foreground/40 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-accent-primary/5 p-10 rounded-[32px] border border-accent-primary/20 hover:border-accent-primary/50 transition-all relative shadow-md">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-accent-primary"><Workflow size={48} /></div>
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-lg text-[10px] font-black uppercase tracking-widest">Phase 02</div>
                <div className="text-accent-primary font-black text-[10px] uppercase tracking-widest italic">Durable Optimization</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-accent-primary">Durable Execution Logic</h3>
              <p className="text-foreground/70 text-sm mb-8 leading-relaxed font-medium">
                Integrating high-resilience task management to handle **multi-step lead enrichment**
                and attribution logic that survives complex webhooks and service timeouts.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs text-foreground/60 font-black uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(99,6,37,0.5)]"></div>
                  Resilient attribution event tracking
                </li>
                <li className="flex items-center gap-3 text-xs text-foreground/60 font-black uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(99,6,37,0.5)]"></div>
                  Cross-channel deduplication engine
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-card-bg border border-card-border p-10 rounded-[32px] hover:border-accent-primary/30 transition-all shadow-sm">
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-foreground text-background rounded-lg text-[10px] font-black uppercase tracking-widest">Phase 03</div>
                <div className="text-foreground/40 font-black text-[10px] uppercase tracking-widest italic">Autonomous Scale</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-heading">Autonomous Acquisition Intelligence</h3>
              <p className="text-foreground/70 text-sm mb-8 leading-relaxed font-medium italic">
                Closing the loop with **AI-driven budget reallocation**. The system automatically
                adjusts ad spend based on real-time funnel simulation results, pursuing the
                Golden Path with zero manual intervention.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-2xl border border-card-border text-center shadow-sm">
                  <div className="text-[10px] font-black text-foreground/30 uppercase tracking-widest mb-1">Human Effort Reduction</div>
                  <div className="text-3xl font-serif text-accent-primary italic font-bold leading-none">-85%</div>
                </div>
                <div className="p-4 bg-background rounded-2xl border border-card-border text-center shadow-sm">
                  <div className="text-[10px] font-black text-foreground/30 uppercase tracking-widest mb-1">Scale Velocity</div>
                  <div className="text-3xl font-serif text-heading italic font-bold leading-none">+4.2x</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Section */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-medium mb-8 leading-tight text-heading italic underline decoration-accent-primary/20 underline-offset-8">Strategic Acquisition <br /> Valuation</h2>
            <p className="text-foreground/70 text-sm leading-relaxed mb-8 font-medium">
              LeadFlow isn't just a dashboard; it's a decision-support system. By quantifying
              the "Optimization Gap," it provides the single most important metric for
              any scaling business: The Cost of Inaction.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60">
                <TrendingUp size={16} className="text-accent-primary" />
                LTV Prediction Accuracy: 94%
              </div>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60">
                <Coins size={16} className="text-accent-primary" />
                Market Readiness Score: 9.8/10
              </div>
            </div>
          </div>

          <div className="bg-accent-primary p-12 rounded-[40px] text-accent-primary-foreground shadow-[0_30px_60px_-15px_rgba(99,6,37,0.3)] group hover:scale-[1.02] transition-all duration-500 ring-1 ring-background/10">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 opacity-60">Asset Appraisal</div>
            <div className="text-6xl font-serif font-medium mb-4 italic leading-tight font-black">£28,000</div>
            <p className="text-xs font-black opacity-80 leading-relaxed uppercase tracking-widest italic">
              A comprehensive valuation of the <br /> Simulation Engine Property & <br /> Acquisition Maturity Assets.
            </p>
          </div>
        </section>

        {/* Sign-off */}
        <footer className="pt-16 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-12 font-sans">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center font-black text-xl text-accent-primary-foreground shadow-xl ring-4 ring-accent-primary/10">NB</div>
            <div>
              <div className="font-black text-lg text-heading italic">Nicola Berry</div>
              <div className="text-[10px] text-foreground/40 font-black uppercase tracking-[0.4em]">Founder & Lead Architect</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              href="/work/leadflow/infographic"
              className="px-8 py-4 bg-background border-2 border-card-border text-foreground rounded-full font-black hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-sm flex items-center gap-3"
            >
              Review Infographic
              <Activity size={16} className="text-accent-primary" />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
