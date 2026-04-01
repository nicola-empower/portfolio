"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Terminal, 
  Cpu, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Layers, 
  LineChart, 
  Network, 
  Database,
  Code2,
  ArrowRight,
  Sparkles,
  Command
} from "lucide-react";

export default function EmpowerAutomationInfographic() {
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
            <span className="font-medium text-sm font-sans">Exit Nexus</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/40">System Version: PRO-2026</span>
            <div className="h-4 w-px bg-card-border"></div>
            <span className="text-sm font-semibold text-accent-primary font-serif">Empower Architecture</span>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-20">
        {/* Header */}
        <header className="mb-24 relative">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-primary/10 border border-accent-primary/20 text-accent-primary mb-8 text-[10px] font-bold uppercase tracking-widest">
              <Command size={14} />
              <span>Infrastructure Layer Established</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight text-heading">
              The <span className="text-accent-primary">Nexus</span> of <br />
              <span className="text-heading">Digital Scale.</span>
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl font-sans">
              Welcome to the Mother Ship. Empower Automation is the strategic coordination layer 
              designed to unify fragmented tools into a single, high-resilience business engine.
            </p>
          </div>
        </header>

        {/* The Automation Maturity Model */}
        <section className="mb-32">
          <div className="bg-card-bg border border-card-border rounded-3xl p-8 md:p-16 relative overflow-hidden">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-serif mb-6 text-heading font-medium">The Maturity Model</h2>
                <p className="text-foreground/80 text-sm leading-relaxed mb-12 font-sans">
                  We guide enterprises through the transition from manual, reactive labor to 
                  proactive, autonomous operations. Scale is not about adding more people; 
                  it's about increasing **System Intelligence**.
                </p>
                
                <div className="space-y-6">
                  {[
                    { level: "01", name: "Manual Chaos", desc: "Reactive tasks, data silos, tool fatigue.", status: "Baseline", color: "text-foreground/40" },
                    { level: "02", name: "Integrated Flows", desc: "API connections, centralized CRM, auto-sync.", status: "Transition", color: "text-amber-600" },
                    { level: "03", name: "Autonomous Core", desc: "Self-healing workflows, AI-agents, 24/7 Ops.", status: "Optimal", color: "text-accent-primary" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className={`text-sm font-bold ${item.color} mt-1`}>{item.level}</div>
                      <div className="flex-1 pb-6 border-b border-card-border last:border-0 hover:border-accent-primary/30 transition-colors">
                        <h4 className="text-heading font-bold mb-1 text-sm uppercase tracking-widest">{item.name}</h4>
                        <p className="text-xs text-foreground/60 font-sans">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-accent-primary/5 rounded-full animate-pulse"></div>
                <div className="relative w-full h-full p-8 text-foreground/20 italic font-serif flex items-center justify-center">
                   <div className="w-full h-full border-2 border-dashed border-accent-primary/20 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                    <div className="w-2/3 h-2/3 border-2 border-card-border rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
                       <div className="w-1/3 h-1/3 bg-accent-primary rounded-full shadow-[0_0_50px_var(--accent-primary)] flex items-center justify-center">
                        <Cpu className="text-accent-primary-foreground" size={32} />
                       </div>
                    </div>
                  </div>
                  {/* Floating nodes */}
                  <div className="absolute top-1/4 left-1/4 p-3 bg-background border border-accent-primary/30 rounded-lg text-accent-primary animate-bounce"><Zap size={16} /></div>
                  <div className="absolute bottom-1/4 right-1/4 p-3 bg-background border border-accent-secondary/30 rounded-lg text-accent-secondary animate-bounce [animation-delay:1s]"><Database size={16} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 border border-card-border rounded-3xl bg-card-bg hover:border-accent-primary/30 transition-all relative overflow-hidden group">
            <div className="absolute -bottom-4 -right-4 text-accent-primary/5 group-hover:text-accent-primary/10 transition-colors"><Code2 size={120} /></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-accent-primary/20 text-accent-primary flex items-center justify-center"><Terminal size={20} /></div>
              <h3 className="text-xl font-serif text-heading">Magic Welcome V2</h3>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-8 font-sans">
              Instant personalization at the edge. The Nexus uses URL-based intelligence to 
              reconfigure its value proposition in real-time, delivering a 1:1 sales experience 
              to every visitor.
            </p>
            <div className="bg-background p-4 rounded-xl border border-card-border text-[10px] text-accent-primary font-bold leading-relaxed break-all">
              https://nexus.io/?target=Enterprise&sector=Tech&priority=ROI
            </div>
          </div>

          <div className="p-12 border border-card-border rounded-3xl bg-card-bg hover:border-accent-primary/30 transition-all relative overflow-hidden group">
            <div className="absolute -bottom-4 -right-4 text-accent-primary/5 group-hover:text-accent-primary/10 transition-colors"><Layers size={120} /></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-accent-primary/20 text-accent-primary flex items-center justify-center"><Network size={20} /></div>
              <h3 className="text-xl font-serif text-heading">MDX Log Engine</h3>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-8 font-sans">
              21+ high-fidelity technical logs consolidated into a single searchable refinery. 
              The Nexus serves as the educational foundation for all business automation initiatives.
            </p>
             <div className="flex gap-2">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className={`h-1 flex-1 rounded-full ${i <= 4 ? 'bg-accent-primary' : 'bg-card-border'}`}></div>
               ))}
             </div>
             <div className="mt-2 text-[10px] font-bold text-foreground/40 uppercase tracking-widest flex justify-between font-sans">
                <span>Knowledge Maturity</span>
                <span>94.2%</span>
             </div>
          </div>
        </div>

        {/* Connectivity Map */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4 font-medium text-heading">Interconnected Synergy</h2>
            <p className="text-foreground/40 text-[10px] font-bold uppercase tracking-[0.3em]">Coordination Layer Visualization</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { name: "Fleet Ops", status: "Active", color: "text-emerald-600" },
               { name: "ROI Engine", status: "Active", color: "text-emerald-600" },
               { name: "MDX Refinery", status: "Active", color: "text-emerald-600" },
               { name: "Lead Router", status: "Latency_Low", color: "text-amber-600" }
             ].map((node, i) => (
               <div key={i} className="p-6 border border-card-border rounded-2xl bg-card-bg text-center group hover:border-accent-primary/30 transition-all">
                  <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-4 font-sans">{node.name}</div>
                  <div className={`text-[10px] font-bold ${node.color} uppercase tracking-tighter`}>{node.status}</div>
               </div>
             ))}
          </div>
        </section>

        {/* Final CTA */}
        <footer className="text-center">
          <div className="inline-block p-1 bg-card-bg rounded-full mb-12 border border-card-border backdrop-blur-3xl shadow-2xl">
             <Link 
                href="/work/empower-automation/proposal"
                className="flex items-center gap-6 pl-8 pr-2 py-2 group hover:gap-8 transition-all font-sans"
              >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/60">Access Infrastructure Roadmap</span>
              <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center text-accent-primary-foreground group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--accent-primary)]">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
          <div className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.4em] font-sans">Empower Strategic Nexus © 2026</div>
        </footer>
      </main>
    </div>
  );
}
