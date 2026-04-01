"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Cpu, 
  Network, 
  Database, 
  ShieldCheck, 
  Layers, 
  Globe, 
  Zap, 
  LineChart, 
  Sparkles,
  Command,
  ArrowRight,
  Brain,
  Workflow,
  Lock,
  MessageSquare,
  Activity
} from "lucide-react";

export default function EmpowerDigitalInfographic() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent-primary selection:text-accent-primary-foreground pb-20 overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-card-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-sans">
          <Link 
            href="/#work" 
            className="flex items-center gap-2 text-foreground/50 hover:text-accent-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Exit Command</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/40 text-xs">Master Level: APEX-2026</span>
            <div className="h-4 w-px bg-card-border"></div>
            <span className="text-sm font-semibold text-accent-primary font-serif">Master Agency Architecture</span>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-20 relative z-10">
        {/* Apex Header */}
        <header className="mb-24 text-center">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary mb-8 text-[10px] font-bold uppercase tracking-widest leading-none font-sans">
            <Sparkles size={14} />
            <span>The Apex Master Brand</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-medium mb-8 leading-tight text-heading tracking-tight">
            Mastering the <br />
            <span className="text-accent-primary italic">Digital Lifecycle.</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto font-sans">
            Empower Digital Solutions is the master architect of our conglomerate. 
            We orchestrate strategy, AI, and institutional infrastructure across 51+ assets.
          </p>
        </header>

        {/* The £25k Value Proposition - Strategic Pillars */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold italic mb-4 text-heading border-b-2 border-accent-primary/20 pb-4 inline-block">The £25,000 Value Proposition</h2>
            <p className="text-foreground/50 text-[10px] font-bold uppercase tracking-[0.4em] mt-4">Enterprise-Grade Strategic Architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Hybrid Architecture */}
            <div className="bg-card-bg p-8 rounded-[32px] border border-card-border shadow-xl hover:border-accent-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold italic text-heading mb-4">High-Performance Hybrid Architecture</h3>
              <ul className="space-y-3 text-xs text-foreground font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Astro/React "Metal-Ready" hybrid stack</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> sub-100ms LCP & 99+ Lighthouse scores</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Enterprise-Grade SEO for multiple niches</li>
              </ul>
            </div>

            {/* 2. Portal Ecosystem */}
            <div className="bg-card-bg p-8 rounded-[32px] border border-card-border shadow-xl hover:border-accent-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform">
                <Command size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold italic text-heading mb-4">Proprietary Portal Ecosystem</h3>
              <ul className="space-y-3 text-xs text-foreground font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Bespoke Admin Command Dashboard</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Branded Client Management Portals</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> No-license data persistence engine</li>
              </ul>
            </div>

            {/* 3. Interactive Lead Engines */}
            <div className="bg-card-bg p-8 rounded-[32px] border border-card-border shadow-xl hover:border-accent-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold italic text-heading mb-4">Interactive Lead Engines</h3>
              <ul className="space-y-3 text-xs text-foreground font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Bespoke ROI & Financial Calculators</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Built-in Digital Health Audit Tool</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> High-intent triage & intent widgets</li>
              </ul>
            </div>

            {/* 4. Strategic Intelligence */}
            <div className="bg-card-bg p-8 rounded-[32px] border border-card-border shadow-xl hover:border-accent-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold italic text-heading mb-4">Strategic Intelligence & Security</h3>
              <ul className="space-y-3 text-xs text-foreground font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Gemini AI-Powered agentic workflows</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> High-resolution fingerprinting & security</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> "SafeHaven" stealth logic protocols</li>
              </ul>
            </div>

            {/* 5. Premium Motion Design */}
            <div className="bg-card-bg p-8 rounded-[32px] border border-card-border shadow-xl hover:border-accent-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold italic text-heading mb-4">Visual Excellence & Motion</h3>
              <ul className="space-y-3 text-xs text-foreground font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Bespoke Circuit & Orbital animations</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Signature "Soft Luxury" Glassmorphism UI</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Motion-engineered UX transitions</li>
              </ul>
            </div>

            {/* 6. Full Ownership & Scale */}
            <div className="bg-card-bg p-8 rounded-[32px] border border-card-border shadow-xl hover:border-accent-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold italic text-heading mb-4">Ownership & Institutional Scale</h3>
              <ul className="space-y-3 text-xs text-foreground font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Zero Ongoing SaaS Licensing Fees</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> Unlimited scalability on Vercel/Netlify</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-accent-primary"></div> GDPR & 6-Year HMRC Compliance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Global Coordination Section */}
        <section className="mb-32 text-center relative">
          <div className="inline-block px-4 py-2 bg-accent-primary/5 border border-accent-primary/10 rounded-full text-accent-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            The Multi-Phase Digital Lifecycle
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-heading italic font-bold">Mastering 51+ Assets. <br /><span className="text-accent-primary font-bold tracking-tight non-italic">One Unified Agency.</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
             {["Bespoke Architecture", "AI Automation", "Lead Engines", "Data Vaults", "Strategic Security", "Managed Growth"].map((item, i) => (
               <div key={i} className="px-6 py-3 border border-card-border rounded-full bg-card-bg text-[10px] font-bold text-foreground/40 uppercase tracking-widest hover:border-accent-primary/50 hover:text-accent-primary transition-all cursor-default">
                  {item}
               </div>
             ))}
          </div>
        </section>

        {/* Final CTA */}
        <footer className="text-center pt-16 border-t border-card-border">
          <div className="inline-block p-1 bg-card-bg rounded-full mb-12 border border-card-border shadow-2xl">
             <Link 
                href="/work/empower-digital-solutions/proposal"
                className="flex items-center gap-6 pl-8 pr-2 py-2 group hover:gap-8 transition-all"
              >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-heading">Access Master Strategic Proposal</span>
              <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center text-accent-primary-foreground group-hover:scale-110 transition-transform shadow-lg shadow-accent-primary/20">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
          <div className="text-[10px] font-bold text-foreground/20 uppercase tracking-[0.5em]">Empower Digital Solutions Master Agency © 2026</div>
        </footer>

      </main>
    </div>
  );
}
