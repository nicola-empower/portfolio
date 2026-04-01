"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Target, 
  Rocket, 
  Cpu, 
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
  Settings,
  Brain,
  Lock,
  MessageSquare,
  LineChart,
  Zap,
  TrendingUp
} from "lucide-react";

export default function EmpowerDigitalProposal() {
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
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/40">Asset: EDS-MASTER-2026</span>
            <div className="h-4 w-px bg-card-border"></div>
            <div className="flex items-center gap-2 px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-md text-[10px] font-bold ring-1 ring-accent-primary/20 uppercase tracking-widest leading-none">
              £40,000 APEX VALUATION
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20">
        {/* Apex Header */}
        <div className="mb-24 relative text-center md:text-left">
           <div className="relative z-10 font-sans">
            <div className="flex items-center justify-center md:justify-start gap-2 text-accent-primary font-bold text-[10px] tracking-widest uppercase mb-6">
              <Target size={16} />
              <span>Strategic Investment Thesis</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-8 leading-tight text-heading tracking-tight">
              Empower Digital: <br />
              The <span className="italic text-accent-primary underline decoration-accent-primary/20 underline-offset-8">£25k Transformation</span>
            </h1>
            <p className="text-xl text-foreground font-medium leading-relaxed max-w-2xl">
              A comprehensive breakdown of the strategic pillars that transform 
              a digital presence into a high-octane <strong>Operational Engine</strong>.
            </p>
          </div>
        </div>

        {/* The £25k Value Proposition - Strategic Pillars */}
        <section className="mb-32 space-y-12">
          <h2 className="text-4xl font-serif font-bold italic mb-16 flex items-center gap-4 text-heading border-b border-card-border pb-6">
            <Rocket className="text-accent-primary" />
            Strategic Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Architecture */}
            <div className="bg-card-bg p-10 rounded-[32px] border border-card-border shadow-lg hover:border-accent-primary/30 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                  <Layers size={24} />
                </div>
                <span className="text-[10px] font-bold text-accent-primary uppercase tracking-widest">Pillar 01</span>
              </div>
              <h3 className="text-2xl font-serif font-bold italic text-heading mb-4">High-Performance Hybrid Architecture</h3>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                Utilizing an <strong>Astro/React "Metal-Ready"</strong> hybrid stack for near-instant loads and 
                enterprise-grade SEO across multiple vertical-specific niches.
              </p>
            </div>

            {/* 2. Portals */}
            <div className="bg-card-bg p-10 rounded-[32px] border border-card-border shadow-lg hover:border-accent-primary/30 transition-all">
               <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                  <Briefcase size={24} />
                </div>
                <span className="text-[10px] font-bold text-accent-primary uppercase tracking-widest">Pillar 02</span>
              </div>
              <h3 className="text-2xl font-serif font-bold italic text-heading mb-4">Proprietary Portal Ecosystem</h3>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                A central <strong>Administrative Dashboard</strong> for fleet management and branded 
                <strong>Client Portals</strong> for professional, secure service delivery.
              </p>
            </div>

            {/* 3. Lead Engines */}
            <div className="bg-card-bg p-10 rounded-[32px] border border-card-border shadow-lg hover:border-accent-primary/30 transition-all">
               <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                  <Zap size={24} />
                </div>
                <span className="text-[10px] font-bold text-accent-primary uppercase tracking-widest">Pillar 03</span>
              </div>
              <h3 className="text-2xl font-serif font-bold italic text-heading mb-4">Interactive Lead Engines</h3>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                Custom-built <strong>ROI Calculators</strong> and <strong>Site Health Checkers</strong> 
                acting as high-intent lead magnets with sophisticated triage logic.
              </p>
            </div>

            {/* 4. Intelligence */}
            <div className="bg-card-bg p-10 rounded-[32px] border border-card-border shadow-lg hover:border-accent-primary/30 transition-all">
               <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                  <Brain size={24} />
                </div>
                <span className="text-[10px] font-bold text-accent-primary uppercase tracking-widest">Pillar 04</span>
              </div>
              <h3 className="text-2xl font-serif font-bold italic text-heading mb-4">Strategic Intelligence & Security</h3>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                <strong>Gemini AI</strong> integration for automated workflows and 
                <strong>Project DANA</strong> stealth protocols for advanced data security.
              </p>
            </div>
          </div>

          {/* Pillars 5 & 6 (Wide) */}
          <div className="space-y-8">
            <div className="bg-accent-primary/5 p-10 rounded-[32px] border border-accent-primary/20 hover:border-accent-primary/50 transition-all">
              <h3 className="text-3xl font-serif font-bold italic text-heading mb-4 text-accent-primary">05. Premium Motion Design</h3>
              <p className="text-foreground/80 font-medium text-lg leading-relaxed mb-6">
                Bespoke React-based animations (Hero Circuits, Orbital Flows) and signature 
                <strong>Glassmorphism UI</strong> that command attention and define the brand.
              </p>
              <div className="flex gap-4">
                 <span className="px-3 py-1 bg-accent-primary/20 rounded-full text-[10px] font-bold text-accent-primary uppercase tracking-widest">Soft Luxury UX</span>
                 <span className="px-3 py-1 bg-accent-primary/20 rounded-full text-[10px] font-bold text-accent-primary uppercase tracking-widest">Bespoke Keyframes</span>
              </div>
            </div>

            <div className="bg-card-bg p-10 rounded-[32px] border border-card-border hover:border-accent-primary/30 transition-all">
              <h3 className="text-3xl font-serif font-bold italic text-heading mb-4">06. Full Ownership & Institutional Scale</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-8">
                <strong>Zero Ongoing Licensing</strong> — you own every line of code. Built for unlimited scale on Vercel Edge 
                with full GDPR and 6-year HMRC compliance baked in.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                 {["Unlimited Pages", "Vercel Edge", "HMRC Compliant", "Zero Per-Seat Fees"].map(tag => (
                   <div key={tag} className="p-3 bg-background/50 rounded-xl border border-card-border text-[9px] font-bold uppercase tracking-widest text-foreground/40">{tag}</div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Section */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold italic mb-8 leading-tight text-heading">Strategic Digital <br /> Valuation</h2>
            <p className="text-foreground font-medium text-sm leading-relaxed mb-8">
              This is not a "website"—it is a full-scale <strong>Operational Engine</strong> and <strong>Sales Machine</strong>. 
              The valuation reflects the proprietary IP, AI frameworks, and un-installable architecture.
            </p>
            <div className="space-y-4 font-sans">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-accent-primary">
                <Globe size={16} />
                Master Brand Stewardship
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-accent-primary">
                <LineChart size={16} />
                Tier-1 Institutional Quality
              </div>
            </div>
          </div>
          
          <div className="bg-accent-primary p-12 rounded-[40px] text-accent-primary-foreground shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 text-accent-primary-foreground/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                <TrendingUp size={160} />
            </div>
            <div className="relative z-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 opacity-80">Current Strategic Value</div>
                <div className="text-6xl font-serif font-bold mb-4 italic leading-tight">£25,000</div>
                <p className="text-sm font-bold opacity-90 leading-relaxed uppercase tracking-tighter">
                  Comprehensive Valuation of the <br /> 
                  Unified Digital Master Engine <br /> 
                  & Institutional IP Framework.
                </p>
            </div>
          </div>
        </section>

        {/* Final Sign-off */}
        <footer className="pt-16 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-12 font-sans">
           <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center font-bold text-xl text-accent-primary-foreground shadow-lg ring-4 ring-accent-primary/10">NB</div>
            <div>
              <div className="font-bold text-lg text-heading">Nicola Berry</div>
              <div className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">Master Architect</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/work/empower-digital-solutions/infographic"
              className="px-8 py-4 bg-accent-primary text-accent-primary-foreground rounded-full font-bold hover:scale-105 transition-all text-sm flex items-center gap-2 shadow-lg"
            >
              Review Master Blueprint
              <Activity size={16} />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
