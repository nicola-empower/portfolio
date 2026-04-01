"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Target, 
  Rocket, 
  Users, 
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
  Briefcase,
  Clock,
  Settings
} from "lucide-react";

export default function EmpowerVAProposal() {
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/40">Asset: EVA-BOUTIQUE-2026</span>
            <div className="h-4 w-px bg-card-border"></div>
            <div className="flex items-center gap-2 px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-md text-[10px] font-bold ring-1 ring-accent-primary/20 uppercase tracking-widest leading-none">
              £30,000 OPERATIONAL VALUATION
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
              <span>Investment Thesis & Operations Roadmap</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight text-heading">
              Empower VA: <br />
              The <span className="italic">Expert-in-the-Loop</span>
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl font-sans">
              A strategic proposal for the scaling and productization of our 
              premier Virtual Operations Boutique and "Operations Architecture" methodology.
            </p>
          </div>
        </div>

        {/* Strategic Moat */}
        <section className="bg-card-bg rounded-3xl border border-card-border p-8 md:p-16 mb-24 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-12 text-accent-primary/5 rotate-12 group-hover:text-accent-primary/10 transition-colors"><Settings size={120} /></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 font-sans">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-primary mb-6">Commercial Moat</h3>
              <p className="text-2xl font-serif leading-snug text-heading">
                Empower VA is the <span className="font-bold underline decoration-accent-primary underline-offset-8">Implementation Layer</span> — 
                transforming digital infrastructure into managed, high-retention client outcomes.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: "35+ Strategic Logs & Case Studies", icon: <Search size={14} /> },
                { label: "11 Hyper-Local SEO Domains", icon: <Globe size={14} /> },
                { label: "React-Powered Command Centre SPA", icon: <Workflow size={14} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-foreground/60 p-4 bg-background rounded-xl border border-card-border group hover:border-accent-primary/30 transition-all">
                  <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">{item.icon}</div>
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
            Operations Roadmap
          </h2>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-card-bg p-10 rounded-3xl border border-card-border hover:border-accent-primary/30 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-background rounded-lg text-[10px] font-bold uppercase tracking-widest text-foreground/40 font-sans">Phase 01</div>
                <div className="text-accent-primary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 font-sans italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></div>
                  Boutique Dominance
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-heading font-sans">Regional SEO Expansion</h3>
              <p className="text-foreground/50 text-sm mb-8 leading-relaxed font-sans">
                Scaling our hyper-local dominance model to a further 15 major UK tech hubs. 
                Optimising regional landing pages for "Enterprise Data Governance" and 
                "Operations Architect" high-intent keywords.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Local Landing Pages", "Keyword Domination", "Google Business Network"].map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter px-3 py-1.5 bg-background rounded-lg border border-card-border text-foreground/40 font-sans">
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
                <div className="text-accent-primary font-bold text-[10px] uppercase tracking-widest leading-none">Productization</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-heading italic">Operations-as-a-Service (OaaS)</h3>
              <p className="text-foreground/50 text-sm mb-8 leading-relaxed italic">
                Packaging our **Command Centre** and "Operations Architecture" methodology into 
                a licensable framework for other specialized agencies. Providing the 
                infrastructure for professional service delivery.
              </p>
              <ul className="space-y-3 font-sans">
                <li className="flex items-center gap-3 text-xs text-foreground/40 font-bold uppercase tracking-widest italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
                  Methodology licensing portal
                </li>
                <li className="flex items-center gap-3 text-xs text-foreground/40 font-bold uppercase tracking-widest italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary"></div>
                  White-labeled Admin Suite SaaS
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-accent-primary border border-accent-primary/30 p-10 rounded-3xl hover:border-accent-primary/60 transition-all text-background shadow-2xl">
               <div className="flex justify-between items-start mb-8">
                <div className="px-3 py-1 bg-background/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-background/60">Phase 03</div>
                <div className="text-background/40 font-bold text-[10px] uppercase tracking-widest leading-none">Enterprise Tier</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-background italic">Managed Digital Stewardship</h3>
              <p className="text-inherit opacity-70 text-sm mb-8 leading-relaxed italic">
                The final tier of human-in-the-loop coordination. Empower VA acts as the 
                managed operational layer for entire digital fleets, ensuring that 
                infrastructure is used to its full commercial potential.
              </p>
              <div className="grid grid-cols-2 gap-4 font-sans">
                <div className="p-4 bg-background/5 rounded-xl border border-background/10 text-center">
                  <div className="text-[10px] font-bold text-inherit opacity-40 uppercase tracking-widest mb-1">Execution Rating</div>
                  <div className="text-2xl font-serif text-inherit">A+ Institutional</div>
                </div>
                <div className="p-4 bg-background/5 rounded-xl border border-background/10 text-center">
                  <div className="text-[10px] font-bold text-inherit opacity-40 uppercase tracking-widest mb-1">Retention LTV</div>
                  <div className="text-2xl font-serif text-inherit font-bold italic">Premium</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Section */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-medium mb-8 leading-tight text-heading">Service IP & Operational Appraisal</h2>
            <p className="text-foreground/50 text-sm leading-relaxed mb-8 font-sans">
              The Empower VA valuation reflects the **Operational Intellectual Property** 
              (35+ logs), the **Client Acquisition System** (Regional SEO), and its unique 
              positioning as the human implementation layer for high-end technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40 font-sans">
                <Briefcase size={16} className="text-accent-primary" />
                Copyrighted Operations Methodology
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40 font-sans">
                <Clock size={16} className="text-accent-primary" />
                High-Retention Maintenance Revenue
              </div>
            </div>
          </div>
          
          <div className="bg-accent-primary p-12 rounded-[40px] text-background shadow-2xl shadow-accent-primary/20 group hover:scale-[1.02] transition-transform">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-80 font-sans">Asset Appraisal 2026</div>
            <div className="text-6xl font-serif font-medium mb-4 italic leading-tight">£30,000</div>
            <p className="text-xs font-bold opacity-80 leading-relaxed uppercase tracking-tighter font-sans">
              Includes Domain Network Equity, Service IP, <br /> and Established Client Pipeline.
            </p>
          </div>
        </section>

        {/* Sign-off */}
        <footer className="pt-16 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-12 font-sans">
           <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center font-bold text-xl text-accent-primary-foreground shadow-lg shadow-accent-primary/20">NB</div>
            <div>
              <div className="font-bold text-lg text-heading">Nicola Berry</div>
              <div className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">Operations Architect</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/work/empower-va/infographic"
              className="px-8 py-4 bg-accent-primary text-accent-primary-foreground rounded-full font-bold hover:scale-105 transition-all text-sm flex items-center gap-2"
            >
              Review Operations Blueprint
              <Settings size={16} />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
