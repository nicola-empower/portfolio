"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Mic, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Zap,
  CheckCircle,
  MapPin,
  Mail,
  Calculator
} from "lucide-react";

export default function TradeProInfographic() {
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
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/40">Project Engine</span>
            <div className="h-4 w-px bg-card-border"></div>
            <span className="text-sm font-semibold text-accent-primary">TradePro v1.0</span>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-16 font-sans">
        {/* Hero Section */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/5 border border-accent-primary/10 text-accent-primary mb-6">
            <Zap size={14} />
            <span className="text-xs font-bold uppercase tracking-wider">Operational Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6 leading-tight text-heading">
            The <span className="italic text-accent-primary">Silicon Valet</span>: <br />
            Automating the Field
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Visualizing the transformation of chaotic field administration into a deterministic, 
            AI-powered growth engine for independent tradespeople.
          </p>
        </header>

        {/* The Core Metric Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 font-sans">
          <div className="bg-card-bg p-8 rounded-3xl border border-card-border shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-accent-primary flex items-center justify-center text-accent-primary-foreground mb-6">
              <Clock size={24} />
            </div>
            <div className="text-4xl font-serif font-medium mb-2 text-heading italic">16 hrs</div>
            <div className="text-sm text-foreground/40 uppercase tracking-wide font-bold">Admin Reclaimed / Week</div>
            <div className="mt-4 h-2 w-full bg-card-border rounded-full overflow-hidden">
              <div className="h-full bg-accent-primary w-3/4"></div>
            </div>
          </div>

          <div className="bg-card-bg p-8 rounded-3xl border border-card-border shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-foreground/20 flex items-center justify-center text-foreground mb-6">
              <TrendingUp size={24} />
            </div>
            <div className="text-4xl font-serif font-medium mb-2 text-heading italic">+25%</div>
            <div className="text-sm text-foreground/40 uppercase tracking-wide font-bold">Job Throughput Increase</div>
            <div className="mt-4 h-2 w-full bg-card-border rounded-full overflow-hidden">
              <div className="h-full bg-foreground/30 w-1/2"></div>
            </div>
          </div>

          <div className="bg-accent-primary p-8 rounded-3xl text-background shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-background/20 flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <div className="text-4xl font-serif font-medium mb-2 italic">100%</div>
            <div className="text-sm text-background/70 uppercase tracking-wide font-bold">Invoicing Compliance</div>
            <div className="mt-4 h-2 w-full bg-background/10 rounded-full overflow-hidden">
              <div className="h-full bg-background w-full"></div>
            </div>
          </div>
        </section>

        {/* The Workflow Visualization */}
        <section className="mb-24 font-sans">
          <h2 className="text-3xl font-serif font-medium mb-12 text-heading">The Voice-to-Invoice Pipeline</h2>
          <div className="relative border-l-2 border-card-border ml-6 pl-12 space-y-16 font-sans">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[61px] top-0 w-10 h-10 rounded-full bg-background border-4 border-accent-primary flex items-center justify-center z-10">
                <Mic size={16} className="text-accent-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-heading">Stage 1: Intent Capture</h3>
              <p className="text-foreground/70 max-w-xl italic font-serif">
                The owner provides a raw voice note or informal text: <br />
                <span className="text-heading">"Book a boiler service for John at 10am tomorrow, £85."</span>
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[61px] top-0 w-10 h-10 rounded-full bg-background border-4 border-foreground/20 flex items-center justify-center z-10">
                <Zap size={16} className="text-foreground/60" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-heading">Stage 2: Gemini Intelligence Layer</h3>
              <p className="text-foreground/70 max-w-xl">
                AI parses unstructured data into deterministic fields: Job Type, Client, Time, and Value. 
                It cross-references the existing schedule and flags conflicts.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sans">
                {["Entity Extraction", "Conflict Detection", "Priority Mapping"].map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-card-bg border border-card-border rounded text-foreground/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[61px] top-0 w-10 h-10 rounded-full bg-background border-4 border-foreground/20 flex items-center justify-center z-10">
                <Calendar size={16} className="text-foreground/60" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-heading">Stage 3: Automated Orchestration</h3>
              <p className="text-foreground/70 max-w-xl">
                The job is committed to the dashboard. Google Maps API calculates optimal routes between field sites. 
                A professional confirmation email is drafted and sent to the client.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[61px] top-0 w-10 h-10 rounded-full bg-background border-4 border-accent-primary flex items-center justify-center z-10">
                <FileText size={16} className="text-accent-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-accent-primary">Stage 4: Financial Finality</h3>
              <p className="text-foreground/70 max-w-xl">
                Upon job completion, a professional PDF invoice is generated via jsPDF. 
                Real-time tax obligations (UK/NI) are calculated and updated in the project dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="bg-card-bg text-foreground rounded-[40px] p-12 md:p-20 overflow-hidden relative mb-24 border border-card-border shadow-2xl font-sans">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 blur-[120px] -mr-48 -mt-48"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-medium mb-8 leading-tight text-heading italic">
                The AI Field <br /> <span className="text-accent-primary non-italic font-bold">Efficiency Matrix</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 text-accent-primary"><CheckCircle size={20} /></div>
                  <div>
                    <div className="font-bold uppercase tracking-wide text-sm mb-1 text-heading">Smart Routing</div>
                    <div className="text-foreground/50 text-sm">Reduced travel fuel costs by 18% through dynamic job clustering.</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-accent-primary"><CheckCircle size={20} /></div>
                  <div>
                    <div className="font-bold uppercase tracking-wide text-sm mb-1 text-heading">Auto-Drafting</div>
                    <div className="text-foreground/50 text-sm">Zero manual typing for invoices; 100% brand consistency.</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-accent-primary"><CheckCircle size={20} /></div>
                  <div>
                    <div className="font-bold uppercase tracking-wide text-sm mb-1 text-heading">Tax Forecasting</div>
                    <div className="text-foreground/50 text-sm">Eliminated end-of-year tax anxiety with real-time provisioning.</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background/50 backdrop-blur-xl rounded-3xl p-8 border border-card-border shadow-inner font-sans">
              <div className="text-xs font-bold uppercase tracking-widest text-accent-primary mb-8 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent-primary animate-pulse"></div>
                System Telemetry
              </div>
              <div className="space-y-8">
                {/* Visual Data Point 1 */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-tighter">
                    <span>Admin Velocity</span>
                    <span className="text-accent-primary">94% Faster</span>
                  </div>
                  <div className="h-1 w-full bg-card-border rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-accent-primary/20 to-accent-primary w-[94%]"></div>
                  </div>
                </div>
                {/* Visual Data Point 2 */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-tighter">
                    <span>Data Precision</span>
                    <span className="text-accent-primary">99.8% Accurate</span>
                  </div>
                  <div className="h-1 w-full bg-card-border rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-accent-primary/20 to-accent-primary w-[99%]"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-4 font-sans">
                <div className="p-4 bg-background/50 rounded-xl border border-card-border">
                  <div className="text-xs text-foreground/40 uppercase font-bold mb-1">Maps Sync</div>
                  <div className="text-lg font-serif italic text-heading">Active</div>
                </div>
                <div className="p-4 bg-background/50 rounded-xl border border-card-border">
                  <div className="text-xs text-foreground/40 uppercase font-bold mb-1">Gemini Pro</div>
                  <div className="text-lg font-serif italic text-heading">Connected</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <footer className="text-center pb-20 font-sans">
          <div className="h-px w-24 bg-card-border mx-auto mb-12"></div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-foreground/20 mb-8">Next Strategic Phase</p>
          <Link 
            href="/work/trade-pro/proposal"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-background rounded-full font-bold hover:scale-105 transition-all text-sm group shadow-xl"
          >
            Review Funding Proposal
            <Zap size={16} className="text-background group-hover:animate-pulse" />
          </Link>
        </footer>
      </main>
    </div>
  );
}
