"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Settings, 
  Users, 
  CheckCircle2, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  Zap, 
  MousePointer2, 
  FileText,
  Clock,
  ArrowRight,
  Sparkles,
  Briefcase,
  Workflow,
  Globe
} from "lucide-react";

export default function EmpowerVAInfographic() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent-primary selection:text-accent-primary-foreground pb-20">
      {/* Navigation */}
      <nav className="border-b border-card-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-sans">
          <Link 
            href="/#work" 
            className="flex items-center gap-2 text-foreground/50 hover:text-accent-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Exit Boutique</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/40 text-xs">Service Level: ELITE-2026</span>
            <div className="h-4 w-px bg-card-border"></div>
            <span className="text-sm font-semibold text-accent-primary font-serif">Operations Architecture</span>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-20">
        {/* Hero Section */}
        <header className="mb-24 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/5 border border-accent-primary/10 text-accent-primary mb-8 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={14} />
            <span>Operational Excellence Defined</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight text-heading">
            From Chaos to <br />
            <span className="text-accent-primary italic">Deterministic Order.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl font-sans">
            Empower VA Services is the expert implementation arm of our digital fleet. 
            We transform raw technology into managed outcomes through bespoke Operations Architecture.
          </p>
        </header>

        {/* The Service Maturity Curve */}
        <section className="mb-32">
          <div className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-16 relative overflow-hidden">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-serif mb-6 text-heading font-medium">The Maturity Curve</h2>
                <p className="text-foreground/70 text-sm leading-relaxed mb-12 font-sans">
                  We don't just execute tasks; we evolve your business. Our methodology 
                  moves founders away from reactive bottlenecking toward autonomous, 
                  architected growth.
                </p>
                
                <div className="space-y-8">
                  {[
                    { stage: "01", name: "Executive Admin", desc: "Inbox management, diary coordination, basic triage.", impact: "+10hrs / week", color: "bg-background text-foreground/40" },
                    { stage: "02", name: "Process Coordinator", desc: "Workflow implementation, team synchronization, data governance.", impact: "+25hrs / week", color: "bg-accent-primary/10 text-accent-primary" },
                    { stage: "03", name: "Operations Architect", desc: "Strategic infrastructure design, autonomous systems oversight.", impact: "Full Freedom", color: "bg-accent-primary text-accent-primary-foreground" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-sm font-bold ${item.color} font-sans`}>
                        {item.stage}
                      </div>
                      <div className="flex-1 pb-8 border-b border-card-border last:border-0 group-hover:translate-x-1 transition-transform">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-heading font-bold text-sm uppercase tracking-widest">{item.name}</h4>
                          <span className="text-[10px] font-bold text-accent-primary uppercase tracking-tighter">{item.impact}</span>
                        </div>
                        <p className="text-xs text-foreground/50 leading-relaxed font-sans">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square bg-background rounded-full border border-card-border p-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-accent-primary/5 rounded-full"></div>
                <div className="relative w-full h-full border border-dashed border-accent-primary/20 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite]">
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 p-4 bg-background rounded-2xl border border-card-border text-accent-primary"><Settings size={20} /></div>
                   <div className="absolute top-1/2 -left-4 -translate-y-1/2 p-4 bg-background rounded-2xl border border-card-border text-emerald-500"><CheckCircle2 size={20} /></div>
                   <div className="absolute top-1/2 -right-4 -translate-y-1/2 p-4 bg-background rounded-2xl border border-card-border text-blue-500"><Users size={20} /></div>
                   <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 p-4 bg-background rounded-2xl border border-card-border text-amber-500"><BarChart3 size={20} /></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 bg-card-bg rounded-[32px] border border-card-border flex items-center justify-center shadow-2xl">
                      <Workflow className="text-accent-primary" size={40} />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-10 border border-card-border rounded-3xl bg-card-bg hover:border-accent-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 text-accent-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-serif text-heading mb-4">Command Centre</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-sans">
              A React-powered operational SPA featuring automated invoicing, task triage, 
              and time-telemetry. We manage by the numbers.
            </p>
          </div>

          <div className="p-10 border border-card-border rounded-3xl bg-card-bg hover:border-accent-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-serif text-heading mb-4">Data Governance</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-sans">
              Enterprise-grade information security. We implement clinical data standards 
              to ensure your business assets are safe and accessible.
            </p>
          </div>

          <div className="p-10 border border-card-border rounded-3xl bg-card-bg hover:border-accent-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-serif text-heading mb-4">Regional SEO</h3>
            <p className="text-foreground/60 text-sm leading-relaxed font-sans">
              Market dominance through 11+ hyper-local regional landing pages. 
              We own the operational narrative in every major city in Scotland.
            </p>
          </div>
        </div>

        {/* The Synergy Section */}
        <section className="mb-32 text-center">
          <div className="inline-block px-4 py-2 bg-accent-primary/5 border border-accent-primary/10 rounded-full text-accent-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8 font-sans">
            Integrated Fleet Value
          </div>
          <h2 className="text-4xl font-serif mb-12 text-heading">Expert Implementation. <span className="text-accent-primary">Guaranteed Adoption.</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {["Admin Suite", "Client Portal", "Strategic Logs", "Regional SEO"].map((item, i) => (
               <div key={i} className="p-6 bg-card-bg border border-card-border rounded-2xl text-center group hover:border-accent-primary/30 transition-all">
                  <div className="text-[10px] font-bold text-accent-primary uppercase tracking-widest mb-2 italic font-sans">Active</div>
                  <div className="text-sm font-bold text-foreground/50 font-sans">{item}</div>
               </div>
             ))}
          </div>
        </section>

        {/* Final CTA */}
        <footer className="text-center pt-16 border-t border-card-border">
          <div className="inline-block p-1 bg-card-bg rounded-full mb-12 border border-card-border shadow-inner">
             <Link 
                href="/work/empower-va/proposal"
                className="flex items-center gap-6 pl-8 pr-2 py-2 group hover:gap-8 transition-all font-sans"
              >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">Access Operations Roadmap</span>
              <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center text-accent-primary-foreground group-hover:scale-110 transition-transform shadow-lg shadow-accent-primary/20">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
          <div className="text-[10px] font-bold text-foreground/20 uppercase tracking-[0.4em] font-sans">Empower Operations Boutique © 2026</div>
        </footer>
      </main>
    </div>
  );
}
