"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Target, 
  Activity, 
  TrendingUp, 
  Zap, 
  Search, 
  Layers, 
  BarChart3, 
  MousePointer2, 
  Coins,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function LeadFlowInfographic() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent-primary selection:text-background pb-20">
      {/* Navigation */}
      <nav className="border-b border-card-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/#work" 
            className="flex items-center gap-2 text-foreground/50 hover:text-accent-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm">Return to Fleet</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-foreground/40 font-mono">Pipeline Variant V2.0</span>
            <div className="h-4 w-px bg-card-border"></div>
            <span className="text-sm font-black text-accent-primary italic uppercase tracking-wider">LeadFlow Intelligence</span>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-20">
        {/* Hero Section */}
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary mb-8 shadow-sm">
            <Activity size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Acquisition Intelligence Layer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight text-heading">
            The Flow of <span className="text-accent-primary italic underline decoration-accent-primary/30 underline-offset-8">Capital.</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto font-medium italic">
            Stop guessing. Start simulating. LeadFlow transforms marketing pipelines into 
            physics-driven environments where ROI is deterministic, not anecdotal.
          </p>
        </header>

        {/* The Optimization Gap Visualization */}
        <section className="mb-32">
          <div className="bg-card-bg border border-card-border rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-12 text-accent-primary/5 rotate-12"><BarChart3 size={160} /></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6 text-heading font-medium italic">The Optimization Gap</h2>
                <p className="text-foreground/70 text-sm leading-relaxed mb-8 font-medium">
                  By mapping **Actual Results** against **Simulated Potential**, LeadFlow reveals 
                  the hidden leaks in your customer journey. We visualize the energy lost between 
                  raw traffic and realized revenue.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-2xl border border-card-border flex items-center justify-between group hover:border-accent-primary/30 transition-all cursor-default shadow-sm font-sans">
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Actual ROI</span>
                    <span className="text-xl font-serif text-heading italic font-bold">2.4x</span>
                  </div>
                  <div className="p-4 bg-accent-primary/10 rounded-2xl border border-accent-primary/20 flex items-center justify-between group hover:border-accent-primary/50 transition-all cursor-default shadow-md font-sans">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent-primary">Simulated Potential</span>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-serif text-accent-primary font-black">4.8x</span>
                      <span className="text-[10px] font-black text-accent-primary uppercase tracking-tighter italic">+100% Lift Possible</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 flex items-center justify-center">
                {/* SVG Particle Simulation Mockup */}
                <svg width="100%" height="100%" className="opacity-90">
                  <path d="M10,120 Q150,120 300,50" fill="none" stroke="rgba(86, 28, 36, 0.1)" strokeWidth="8" />
                  <path d="M10,120 Q150,120 300,50" fill="none" stroke="url(#golden-path)" strokeWidth="4" className="animate-[dash_3s_linear_infinite]" strokeDasharray="10,10" />
                  
                  {/* Actuals particles */}
                  <circle cx="50" cy="120" r="3" fill="currentColor" className="text-foreground/20 animate-[fadeMove_4s_ease-in-out_infinite]" />
                  <circle cx="120" cy="120" r="3" fill="currentColor" className="text-foreground/20 animate-[fadeMove_4s_ease-in-out_infinite_1s]" />
                  
                  {/* Simulated particles */}
                  <circle cx="180" cy="90" r="4" fill="#561C24" className="animate-[fadeMove_2s_linear_infinite] shadow-[0_0_12px_#561C24]" />
                  <circle cx="240" cy="65" r="4" fill="#561C24" className="animate-[fadeMove_2s_linear_infinite_0.5s] shadow-[0_0_12px_#561C24]" />

                  <defs>
                    <linearGradient id="golden-path" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#561C24" stopOpacity="0" />
                      <stop offset="50%" stopColor="#561C24" stopOpacity="1" />
                      <stop offset="100%" stopColor="#561C24" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="px-6 py-3 bg-background/90 backdrop-blur-xl rounded-full border border-accent-primary/20 text-[10px] font-black uppercase tracking-[0.2em] text-accent-primary shadow-2xl ring-1 ring-accent-primary/30">
                    Golden Path Detected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 border border-card-border rounded-[40px] bg-card-bg hover:bg-background/4 transition-all shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent-primary/20 text-accent-primary flex items-center justify-center shadow-lg"><Zap size={20} /></div>
              <h3 className="text-xl font-serif text-heading italic font-bold">Ghost Lead Physics</h3>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-12 font-medium">
               Visualizing the movement of customers through your system. LeadFlow calculates the 
               `velocity` and `mass` of your pipeline, allowing you to identify the physical 
               constraints of your conversion engine.
            </p>
            <div className="flex items-end gap-2 h-20">
              {[40, 70, 45, 90, 65, 30].map((h, i) => (
                <div key={i} className="flex-1 bg-accent-primary/20 rounded-t-lg transition-all group hover:bg-accent-primary shadow-sm" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-black text-foreground/30 uppercase tracking-[0.3em]">
              <span>Traffic In</span>
              <span>Revenue Out</span>
            </div>
          </div>

          <div className="p-12 border border-card-border rounded-[40px] bg-card-bg hover:bg-background/4 transition-all relative overflow-hidden shadow-sm">
             <div className="absolute top-0 right-0 p-8 opacity-10 text-accent-primary"><Sparkles size={48} /></div>
             <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-foreground/10 text-foreground/40 flex items-center justify-center"><Search size={20} /></div>
              <h3 className="text-xl font-serif text-heading italic font-bold">Recursive Backtracing</h3>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-8 font-medium">
              Our proprietary algorithm traces the highest-value conversion route backward 
              from the final checkout. It tells you exactly which landing page or ad set 
              is responsible for your most profitable customers.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] mb-1">
                <span className="text-foreground/30">Algorithm Maturity</span>
                <span className="text-accent-primary italic">V4.2 (DAG-traversal)</span>
              </div>
              <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden border border-card-border">
                <div className="h-full bg-accent-primary w-[94%] shadow-[0_0_8px_rgba(86,28,36,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Callouts */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4 font-medium text-heading italic px-4 py-1 inline-block border-b-2 border-accent-primary/30">The Strategic Stack</h2>
            <p className="text-foreground/40 text-[10px] font-black uppercase tracking-[0.4em] mt-4">Acquisition Intelligence Pipeline</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="p-8 border border-card-border rounded-3xl bg-card-bg/50 group hover:border-accent-primary/30 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 text-accent-primary flex items-center justify-center mx-auto mb-6 shadow-md"><Layers size={21} /></div>
              <h4 className="font-black mb-3 text-[10px] uppercase tracking-[0.3em] text-heading">Zustand Simulation</h4>
              <p className="text-foreground/50 text-xs leading-relaxed font-medium italic">Centralized simulation store for ultra-responsive ROI updates without re-renders.</p>
            </div>
             <div className="p-8 border border-card-border rounded-3xl bg-card-bg/50 group hover:border-accent-primary/30 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 text-accent-primary flex items-center justify-center mx-auto mb-6 shadow-md"><MousePointer2 size={21} /></div>
              <h4 className="font-black mb-3 text-[10px] uppercase tracking-[0.3em] text-heading">Interactive DAGs</h4>
              <p className="text-foreground/50 text-xs leading-relaxed font-medium italic">Drag-and-drop funnel logic with instant mathematical propagation.</p>
            </div>
             <div className="p-8 border border-card-border rounded-3xl bg-card-bg/50 group hover:border-accent-primary/30 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 text-accent-primary flex items-center justify-center mx-auto mb-6 shadow-md"><Coins size={21} /></div>
              <h4 className="font-black mb-3 text-[10px] uppercase tracking-[0.3em] text-heading">Profit Playbooks</h4>
              <p className="text-foreground/50 text-xs leading-relaxed font-medium italic">AI-suggested improvements for every node identified as a bottleneck.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <footer className="text-center">
          <div className="inline-block p-1 bg-card-border rounded-full mb-12 border border-card-border backdrop-blur-3xl shadow-2xl">
             <Link 
                href="/work/leadflow/proposal"
                className="flex items-center gap-6 pl-8 pr-2 py-2 group hover:gap-8 transition-all"
              >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-heading">Review Strategy Portfolio</span>
              <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center text-background group-hover:scale-110 transition-all shadow-xl shadow-accent-primary/20">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
          <div className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.6em]">LeadFlow Acquisition Division © 2026</div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        @keyframes fadeMove {
          0% { transform: translateX(0); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateX(100px) translateY(-40px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
