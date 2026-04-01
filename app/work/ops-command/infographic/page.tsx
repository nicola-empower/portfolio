"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Activity, 
  LayoutDashboard, 
  Zap, 
  Target, 
  Cpu, 
  ShieldCheck, 
  Layers,
  CircleDot,
  BarChart3,
  Search,
  Network
} from "lucide-react";

export default function OpsCommandInfographic() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent-primary selection:text-accent-primary-foreground pb-20">
      {/* Navigation */}
      <nav className="border-b border-card-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/#work" 
            className="flex items-center gap-2 text-foreground/50 hover:text-accent-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm">Return to Fleet</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/50">System Variant V4</span>
            <div className="h-4 w-px bg-card-border"></div>
            <span className="text-sm font-bold text-accent-primary">OpsCommand OS</span>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-20">
        {/* Hero Section */}
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/5 border border-accent-primary/20 text-foreground/60 mb-8">
            <LayoutDashboard size={14} className="text-accent-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Enterprise Command Layer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-8 leading-tight text-heading">
            One Interface.<br />
            <span className="text-accent-primary italic">One Truth.</span>
          </h1>
          <p className="text-lg text-foreground font-medium leading-relaxed">
            Consolidating the SaaS sprawl into a unified operational intelligence layer. 
            OpsCommand provides the high-resolution visibility required for the modern, high-decibel enterprise.
          </p>
        </header>

        {/* Global Health Orbs */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif font-bold italic text-heading">Global Health Orbs</h2>
            <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-foreground/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                Nominal
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                Warning
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(99,6,37,0.5)]"></div>
                Critical
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Sales", status: "emerald", val: "94%" },
              { label: "Operations", status: "emerald", val: "98%" },
              { label: "Technical", status: "amber", val: "72%" },
              { label: "Finance", status: "emerald", val: "100%" }
            ].map((orb, i) => (
              <div key={i} className="flex flex-col items-center p-8 bg-card-bg rounded-3xl border border-card-border group hover:border-accent-primary/50 transition-all shadow-lg">
                <div className="relative mb-6">
                  <div className={`w-24 h-24 rounded-full border-2 border-${orb.status}-500/30 flex items-center justify-center relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-${orb.status}-500/10 animate-pulse`}></div>
                    <div className="text-2xl font-serif font-bold text-heading">{orb.val}</div>
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-background rounded-full border-2 border-${orb.status}-500 flex items-center justify-center`}>
                    <div className={`w-2 h-2 rounded-full bg-${orb.status}-500 animate-ping`}></div>
                  </div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60">{orb.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <section className="bg-card-bg p-12 rounded-[40px] border border-card-border relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-8 text-accent-primary/20"><Activity size={64} /></div>
            <h3 className="text-3xl font-serif font-bold italic mb-8 text-heading">The Pulse Feed</h3>
            <p className="text-foreground font-medium text-sm mb-12 leading-relaxed">
              A real-time, deterministic stream of operational events. From fulfillment spikes 
              to infrastructure alerts, every meaningful action is indexed and visualized.
            </p>
            <div className="space-y-4">
              {[
                { time: "0s", event: "Payment Gateway Health Check", level: "emerald" },
                { time: "12s", event: "Inventory Threshold Reached: Sector 7", level: "amber" },
                { time: "44s", event: "Order #9921 Fulfilled Successfully", level: "emerald" }
              ].map((item, i) => (
                <div key={i} className="bg-background/50 p-4 rounded-xl border border-card-border flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${item.level}-500`}></div>
                    <span className="text-xs font-bold text-foreground">{item.event}</span>
                  </div>
                  <span className="text-[10px] font-bold text-foreground/40 uppercase">{item.time}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card-bg p-12 rounded-[40px] border border-card-border shadow-xl">
            <h3 className="text-3xl font-serif font-bold italic mb-8 text-heading">Resource Orchestration</h3>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-2">
                  <span>Team Capacity</span>
                  <span className="text-accent-primary">82% Peak</span>
                </div>
                <div className="h-1.5 w-full bg-accent-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-linear-to-r from-emerald-500 to-accent-primary w-[82%]"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-background/50 rounded-2xl border border-card-border shadow-sm">
                  <div className="text-accent-primary mb-2"><BarChart3 size={18} /></div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-1">Efficiency</div>
                  <div className="text-2xl font-serif font-bold text-heading">+18.4%</div>
                </div>
                <div className="p-6 bg-background/50 rounded-2xl border border-card-border shadow-sm">
                  <div className="text-accent-primary mb-2"><Search size={18} /></div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-1">Bottlenecks</div>
                  <div className="text-2xl font-serif font-bold text-heading">2 Found</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl flex items-center gap-4">
              <Zap size={20} className="text-accent-primary" />
              <div className="text-xs text-foreground font-bold leading-tight">
                <span className="font-black text-accent-primary uppercase tracking-wider">Proactive Remediation:</span> <br />
                System automatically nudged Tech Team for Sector 4 unblocking.
              </div>
            </div>
          </section>
        </div>

        {/* Technical Architecture */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold italic mb-4 text-heading">Under the Command Center</h2>
            <p className="text-foreground/50 text-sm font-bold uppercase tracking-widest">The High-Performance Stack</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Cpu className="text-accent-primary" />, 
                title: "Next.js Core", 
                desc: "Server-side orchestration for sub-100ms dashboard responsiveness." 
              },
              { 
                icon: <Network className="text-accent-primary" />, 
                title: "Durable Webhooks", 
                desc: "Real-time integration layer connecting Stripe, Shopify, and Slack." 
              },
              { 
                icon: <ShieldCheck className="text-accent-primary" />, 
                title: "RBAC Controls", 
                desc: "Enterprise-grade role-based access for department-specific views." 
              }
            ].map((tech, i) => (
              <div key={i} className="p-8 bg-card-bg border border-card-border rounded-3xl group hover:border-accent-primary/50 transition-all shadow-lg">
                <div className="mb-6 bg-accent-primary/10 w-fit p-3 rounded-xl">{tech.icon}</div>
                <h4 className="font-bold mb-3 text-sm uppercase tracking-wide text-accent-primary">{tech.title}</h4>
                <p className="text-foreground/70 text-sm font-medium leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <footer className="text-center">
          <div className="inline-block p-1 bg-card-bg rounded-full mb-12 border border-card-border shadow-2xl">
             <Link 
              href="/work/ops-command/proposal"
              className="flex items-center gap-6 pl-8 pr-2 py-2 group hover:gap-8 transition-all"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-heading">Review Strategy Portfolio</span>
              <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center text-accent-primary-foreground group-hover:scale-110 transition-transform shadow-lg">
                <Target size={20} />
              </div>
            </Link>
          </div>
          <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">OpsCommand Strategic Division © 2026</div>
        </footer>
      </main>
    </div>
  );
}
