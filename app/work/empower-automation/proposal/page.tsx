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
  Activity,
  Globe,
  Database,
  Search,
  Network,
  Workflow,
  Sparkles,
  ArrowRight,
  Command,
  Cpu
} from "lucide-react";

export default function EmpowerAutomationProposal() {
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
            <span className="font-medium text-sm">Back to Intelligence</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/40">Asset: EA-NEXUS-2026</span>
            <div className="h-4 w-px bg-card-border"></div>
            <div className="flex items-center gap-2 px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-md text-[10px] font-bold ring-1 ring-accent-primary/20 uppercase tracking-widest leading-none">
              £35,000 INFRASTRUCTURE VALUATION
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20">
        {/* Header Section */}
        <div className="mb-24 relative">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-accent-primary font-bold text-[10px] tracking-widest uppercase mb-6">
              <Target size={16} />
              <span>Investment Thesis & Infrastructure Roadmap</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight text-heading">
              Empower Automation: <br />
              The <span className="italic text-accent-primary">Strategic Nexus</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl font-sans">
              A comprehensive proposal for the stewardship and scaling of the
              primary coordination layer for a 51+ asset digital conglomerate.
            </p>
          </div>
        </div>

        {/* Strategic Moat */}
        <section className="bg-card-bg rounded-3xl border border-card-border p-8 md:p-16 mb-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 text-accent-primary/5 rotate-12 group-hover:text-accent-primary/10 transition-colors"><Cpu size={120} /></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 font-sans">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-primary mb-6 font-mono">Infrastructure Moat</h3>
              <p className="text-2xl font-serif leading-snug text-heading">
                The Nexus is the <span className="font-bold underline decoration-accent-primary underline-offset-8">Central Brain</span> -
                coordinating content IP, personalised acquisition, and fleet-wide lead orchestration.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: "MDX Content Engine (21+ Strategic Logs)", icon: <Search size={14} /> },
                { label: "URL Personalization Logic (Magic Welcome)", icon: <Sparkles size={14} /> },
                { label: "Unified Business OS Integration Hub", icon: <Command size={14} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-foreground/70 p-4 bg-background/50 rounded-xl border border-card-border group hover:border-accent-primary/30 transition-all">
                  <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scaling Roadmap */}
        <section className="mb-32">
          <h2 className="text-3xl font-serif font-medium mb-16 flex items-center gap-4">
            <Rocket className="text-accent-primary" />
            Nexus Roadmap
          </h2>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-card-bg p-10 rounded-3xl border border-card-border hover:border-accent-primary/30 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-accent-secondary/30 rounded-lg text-[10px] font-bold uppercase tracking-widest text-foreground/60">Phase 01</div>
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse"></div>
                  Nexus Alpha Live
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-sans text-heading">Autonomous Lead Orchestration</h3>
              <p className="text-foreground/60 text-sm mb-8 leading-relaxed font-sans">
                Integrating the **Unified Lead Router** to automatically enrich every contact
                submission with technical fingerprinting and behavioral metrics before
                routing to Trello/Slack.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Lead Enrichment", "Technical Fingerprinting", "Astro-Edge Middleware"].map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter px-3 py-1.5 bg-background rounded-lg border border-card-border text-foreground/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-accent-primary/5 p-10 rounded-3xl border border-accent-primary/20 hover:border-accent-primary/50 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform"><Layers size={48} /></div>
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-lg text-[10px] font-bold uppercase tracking-widest">Phase 02</div>
                <div className="text-accent-primary font-bold text-[10px] uppercase tracking-widest leading-none">Predictive Valuation</div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-sans text-heading">LTV Prediction & CRM Sync</h3>
              <p className="text-foreground/60 text-sm mb-8 leading-relaxed font-sans">
                Leveraging historical data from the **Business OS** to predict Client Lifetime Value
                in real-time as leads enter the Nexus. Auto-prioritizing high-ticket
                &ldquo;Automation Architecture&rdquo; requests.
              </p>
              <ul className="space-y-3 font-sans">
                <li className="flex items-center gap-3 text-xs text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
                  Real-time LTV coefficient calculation
                </li>
                <li className="flex items-center gap-3 text-xs text-foreground/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
                  Dynamic pricing adjustment engine
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-card-bg border border-card-border p-10 rounded-3xl hover:border-accent-primary/30 transition-all">
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-accent-secondary/30 rounded-lg text-[10px] font-bold uppercase tracking-widest text-foreground/60">Phase 03</div>
                <div className="text-foreground/40 font-bold text-[10px] uppercase tracking-widest leading-none">Global Control</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-heading font-sans">Proactive Portfolio Stewardship</h3>
              <p className="text-foreground/60 text-sm mb-8 leading-relaxed font-sans">
                Transforming the Nexus into an **Autonomous Fleet Commander**. The system
                monitors health across all 51 assets and proactively reallocates ad-spend
                and server resources based on predictive ROI.
              </p>
              <div className="grid grid-cols-2 gap-4 font-sans">
                <div className="p-4 bg-background/50 rounded-xl border border-card-border text-center">
                  <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1 font-mono">Ops Supervision</div>
                  <div className="text-2xl font-serif text-accent-primary">24/7 Agentic</div>
                </div>
                <div className="p-4 bg-background/50 rounded-xl border border-card-border text-center">
                  <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1 font-mono">Portfolio Synergy</div>
                  <div className="text-2xl font-serif text-emerald-600 dark:text-emerald-400">+115%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Section */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-medium mb-8 leading-tight text-heading">Infrastructure Intellectual <br /> Property Valuation</h2>
            <p className="text-foreground/60 text-sm leading-relaxed mb-8 font-sans">
              The Nexus appraisal is derived from the **Content IP** (21 high-fidelity strategy
              logs), the **Acquisition Engine**, and its crucial role as the coordination
              layer for the entire £150,000+ fleet.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-foreground/70">
                <ShieldCheck size={16} className="text-accent-primary" />
                Copyrighted Strategic Content Engine
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-foreground/70">
                <Globe size={16} className="text-accent-primary" />
                Unified Branding Infrastructure
              </div>
            </div>
          </div>

          <div className="bg-accent-primary p-12 rounded-[40px] text-accent-primary-foreground shadow-2xl shadow-accent-primary/20 group hover:scale-[1.02] transition-transform">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-80 text-accent-primary-foreground font-sans">Nexus Appraisal 2026</div>
            <div className="text-6xl font-serif font-medium mb-4 italic leading-tight text-accent-primary-foreground">£35,000</div>
            <p className="text-xs font-bold opacity-80 leading-relaxed uppercase tracking-tighter font-sans">
              Includes Domain Equity, Content IP, <br /> and Centralised Coordination logic.
            </p>
          </div>
        </section>

        {/* Sign-off */}
        <footer className="pt-16 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-12 font-sans">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center font-bold text-xl text-accent-primary-foreground shadow-lg ring-4 ring-accent-primary/10">NB</div>
            <div>
              <div className="font-bold text-lg text-heading">Nicola Berry</div>
              <div className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest font-sans">Nexus Architect</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              href="/work/empower-automation/infographic"
              className="px-8 py-4 bg-accent-primary text-accent-primary-foreground rounded-full font-bold hover:scale-105 transition-all text-sm flex items-center gap-2"
            >
              Review Nexus Blueprint
              <Activity size={16} />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
