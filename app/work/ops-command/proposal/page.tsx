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
  Network,
  Activity,
  Workflow,
  CircleDot
} from "lucide-react";

export default function OpsCommandProposal() {
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
            <span className="font-bold text-sm text-foreground/60">Back to Command</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/40">Asset Designation: OS-2026</span>
            <div className="h-4 w-px bg-card-border"></div>
            <div className="flex items-center gap-2 px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-[10px] font-bold ring-1 ring-accent-primary/20 uppercase tracking-widest">
              £25,000 STRATEGIC VALUATION
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20">
        {/* Header Section */}
        <div className="mb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-accent-primary font-bold text-[10px] tracking-widest uppercase mb-6">
            <Target size={16} />
            <span>Investment Thesis & Scaling Roadmap</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-8 leading-tight text-heading">
            OpsCommand: The <br />
            <span className="italic text-accent-primary">Durable Spine</span> for <br />
            Global Enterprises
          </h1>
          <p className="text-xl text-foreground font-medium leading-relaxed max-w-2xl">
            A strategic funding proposal to transition a high-fidelity operational hub into
            a unified, AI-native Business Operating System.
          </p>
        </div>

        {/* Core Value Prop */}
        <section className="bg-card-bg rounded-[40px] border border-card-border p-8 md:p-16 mb-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 text-accent-primary/5 rotate-12"><Activity size={120} /></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-primary mb-6">Strategic Moat</h3>
              <p className="text-2xl font-serif font-bold italic leading-snug text-heading">
                OpsCommand addresses the <span className="font-black underline decoration-accent-primary underline-offset-8 text-heading">SaaS Sprawl</span> -
                consolidating fragmented operational data into a single, high-resolution execution layer.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: "Real-Time Departmental Health Orbs", icon: <CircleDot size={14} /> },
                { label: "Durable Workflow Orchestration", icon: <Workflow size={14} /> },
                { label: "Predictive Capacity Forecasting", icon: <BarChart3 size={14} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-foreground font-bold p-4 bg-background/50 rounded-2xl border border-card-border group hover:border-accent-primary/30 transition-all shadow-sm">
                  <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 3-Phase Scaling Engine */}
        <section className="mb-32">
          <h2 className="text-4xl font-serif font-bold italic mb-16 flex items-center gap-4 text-heading">
            <Rocket className="text-accent-primary" />
            Growth Phases
          </h2>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-card-bg p-10 rounded-[32px] border border-card-border hover:border-accent-primary/30 transition-all shadow-lg">
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-accent-primary/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-accent-primary">Phase 01</div>
                <div className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  Foundation Optimized
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif italic text-heading">Universal Logic Connectors</h3>
              <p className="text-foreground/70 text-sm font-medium mb-8 leading-relaxed">
                Implementing standard webhooks for **Stripe, Shopify, and Jira** to feed
                the Global Pulse in real-time. Migrating to Supabase for multi-tenant data persistence.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Stripe Integration", "Supabase DB", "Pulse Webhooks"].map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter px-3 py-1.5 bg-background rounded-xl border border-card-border text-foreground/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Phase 2 (Scale) */}
            <div className="bg-accent-primary/5 p-10 rounded-[32px] border border-accent-primary/20 hover:border-accent-primary/50 transition-all relative shadow-lg">
              <div className="absolute top-0 right-0 p-8 opacity-20 text-accent-primary"><Network size={48} /></div>
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-lg text-[10px] font-bold uppercase tracking-widest">Phase 02</div>
                <div className="text-accent-primary font-bold text-[10px] uppercase tracking-widest">Scaling Architecture</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif italic text-heading text-accent-primary">Durable Execution Layer</h3>
              <p className="text-foreground/70 text-sm font-medium mb-8 leading-relaxed">
                Integrating **Temporal.io** or **Inngest** to handle complex, long-running
                business workflows that survive server restarts and network interruptions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs text-foreground font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
                  Self-healing workflow retry logic
                </li>
                <li className="flex items-center gap-3 text-xs text-foreground font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
                  Distributed state management
                </li>
              </ul>
            </div>

            {/* Phase 3 (Intelligence) */}
            <div className="bg-card-bg border border-card-border p-10 rounded-[32px] hover:border-accent-primary/30 transition-all shadow-lg">
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-accent-primary/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-accent-primary">Phase 03</div>
                <div className="text-foreground/40 font-bold text-[10px] uppercase tracking-widest">Autonomous Ops</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif italic text-heading">Autonomous Business Intelligence</h3>
              <p className="text-foreground/70 text-sm font-medium mb-8 leading-relaxed">
                Applying Small Language Models (SLMs) to historical operational data to
                **predict the next 3 weeks of resource demand** with 92% accuracy.
                Proactive bottleneck resolution without human intervention.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background/50 rounded-2xl border border-card-border text-center">
                  <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1">AI Prediction Score</div>
                  <div className="text-2xl font-serif font-bold text-accent-primary">92%</div>
                </div>
                <div className="p-4 bg-background/50 rounded-2xl border border-card-border text-center">
                  <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1">Human Intervention</div>
                  <div className="text-2xl font-serif font-bold text-accent-primary">-70%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Section */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold italic mb-8 leading-tight text-heading">Strategic Enterprise <br /> Valuation</h2>
            <p className="text-foreground font-medium text-sm leading-relaxed mb-8">
              OpsCommand is not a tool; it is infrastructure. By owning the 'Operational Truth' of a business,
              it becomes the most un-installable asset in the stack.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent-primary">
                <TrendingUp size={16} />
                24-Month ROI: 4.5x
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent-primary">
                <Globe size={16} />
                Global Market Readiness: 100%
              </div>
            </div>
          </div>

          <div className="bg-accent-primary p-12 rounded-[40px] text-accent-primary-foreground shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 text-accent-primary-foreground/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <TrendingUp size={120} />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-80">Current Appraisal</div>
              <div className="text-6xl font-serif font-bold mb-4 italic leading-tight">£25,000</div>
              <p className="text-sm font-bold opacity-90 leading-relaxed uppercase tracking-tighter">
                A comprehensive valuation of the <br /> Unified Business OS Property & <br /> High-Decibel Architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Sign-off */}
        <footer className="pt-16 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center font-bold text-xl text-accent-primary-foreground shadow-lg ring-4 ring-accent-primary/10">NB</div>
            <div>
              <div className="font-bold text-lg text-heading">Nicola Berry</div>
              <div className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">Founder & Systems Lead</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              href="/work/ops-command/infographic"
              className="px-8 py-4 bg-accent-primary text-accent-primary-foreground rounded-full font-bold hover:scale-105 transition-all text-sm flex items-center gap-2 shadow-lg"
            >
              Back to Infographic
              <Activity size={16} />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
