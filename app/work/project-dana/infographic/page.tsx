'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { Github, Mail, Shield, Zap, Search, Eye, FileText, Layout, Info, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const InfographicPage = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Dynamic Colors
  const chartTextColor = isDark ? '#E2E8F0' : '#64748B';
  const chartGridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
  const chartAccent = isDark ? '#c994a4' : '#5B0024';

  // Escalation Chart Data
  const escalationData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Reported Incidents',
      data: [1, 2, 2, 4, 5, 8],
      borderColor: chartAccent,
      backgroundColor: isDark ? 'rgba(201, 148, 164, 0.2)' : 'rgba(91, 0, 36, 0.1)',
      fill: true,
      tension: 0.3
    }]
  };

  const escalationOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: chartAccent,
        titleColor: isDark ? '#120008' : '#ffffff',
        bodyColor: isDark ? '#120008' : '#ffffff',
        titleFont: { family: 'Inter', weight: 'bold' as const },
        bodyFont: { family: 'Inter' },
        padding: 12,
        cornerRadius: 8
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: chartGridColor },
        ticks: { color: chartTextColor, font: { family: 'Inter', weight: 500 } }
      },
      x: {
        grid: { display: false },
        ticks: { color: chartTextColor, font: { family: 'Inter', weight: 500 } }
      }
    }
  };

  // Welfare Chart Data
  const welfareData = {
    labels: [
      'Returned Hungry',
      'Withdrawn / Silent',
      'Aggressive',
      'Bedwetting',
      'Nightmares'
    ],
    datasets: [{
      label: 'Logged Occurrences (Last 3 Months)',
      data: [12, 10, 8, 5, 6],
      backgroundColor: '#E91E63',
      borderRadius: 6
    }]
  };

  const welfareOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: chartAccent,
        titleColor: isDark ? '#120008' : '#ffffff',
        bodyColor: isDark ? '#120008' : '#ffffff',
        titleFont: { family: 'Inter', weight: 'bold' as const },
        bodyFont: { family: 'Inter' },
        padding: 12,
        cornerRadius: 8
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: chartGridColor },
        ticks: { color: chartTextColor, font: { family: 'Inter', weight: 500 } }
      },
      x: {
        grid: { display: false },
        ticks: { color: chartTextColor, font: { family: 'Inter', weight: 500 } }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500 leading-relaxed overflow-x-hidden">
      <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/work/project-dana"
            className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium border-r border-card-border pr-4"
          >
            <ArrowLeft size={18} />
            Back to Project
          </Link>
          <Link
            href="/intelligence"
            className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium"
          >
            System Intelligence
          </Link>
        </div>
      </nav>

      <header className="bg-card-bg border-b border-card-border">
        <div className="max-w-7xl mx-auto py-16 px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-accent-primary p-4 rounded-3xl shadow-lg ring-8 ring-accent-primary/10">
              <Shield className="text-background w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-heading mb-4 tracking-tight">
            ChefAI / Project DANA <span className="text-accent-primary italic">v2</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-accent-primary mb-2">
            The "Hidden in Plain Sight" Security Model
          </h2>
          <p className="text-sm font-bold tracking-widest uppercase text-accent-primary/70 mb-6">
            Digital Archive and Narrative Assistant
          </p>
          <p className="max-w-3xl mx-auto text-lg text-foreground/60 leading-relaxed">
            A forensic-ready stealth application disguised as a premium culinary assistant,
            designed to protect survivors through AI-driven deniability and legal translation.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Core Problem Section */}
        <section className="md:col-span-2 bg-card-bg rounded-3xl p-8 md:p-12 border border-card-border shadow-sm overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-accent-primary mb-4 flex items-center gap-3">
              <Info className="w-8 h-8" />
              The Core Problem: A Legal Paradox
            </h3>
            <p className="text-foreground/70 mb-10 text-lg leading-relaxed max-w-4xl">
              Survivors must prove a <strong className="text-heading">"Course of Conduct"</strong> (a pattern of abuse) and
              <strong className="text-heading"> "Impact on the Child"</strong> (for family court), but the very act of documenting this evidence is dangerous.
              Project DANA solves this by existing as a <strong>Dual-State Application</strong>.
            </p>
            <div className="bg-background rounded-2xl p-8 shadow-inner flex flex-col md:flex-row justify-around items-center gap-8 border border-card-border">
              <div className="text-center group/item">
                <span className="text-6xl font-black text-accent-primary mb-2 block tracking-tighter transition-transform group-hover/item:scale-110">95%</span>
                <p className="font-bold text-heading text-xl">Interactive Decoy</p>
                <p className="text-foreground/60 font-medium mt-1">ChefAI: Recipes, Pantry AI, & News.</p>
              </div>
              <div className="text-5xl text-foreground/10 font-thin hidden md:block">|</div>
              <div className="w-12 h-1 bg-card-border md:hidden"></div>
              <div className="text-center group/item">
                <span className="text-6xl font-black text-accent-primary mb-2 block tracking-tighter transition-transform group-hover/item:scale-110">5%</span>
                <p className="font-bold text-heading text-xl">Forensic Vault</p>
                <p className="text-foreground/60 font-medium mt-1">Encrypted logs & Witness Statement Export.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Architecture Section */}
        <section className="md:col-span-2 bg-background rounded-3xl p-8 md:p-12 border border-card-border shadow-xl overflow-hidden text-foreground">
          <h3 className="text-3xl font-bold text-accent-primary mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8" />
            Innovation 1: Triple-State Security
          </h3>
          <p className="text-foreground/70 mb-10 text-lg leading-relaxed">
            A simple password isn't safe. The app uses a behavioral security model.
            Different, non-obvious inputs render entirely different applications, providing plausible deniability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card-bg rounded-2xl border border-card-border hover:border-accent-primary/30 transition-colors">
              <p className="font-bold text-foreground/70 uppercase tracking-widest text-[10px] mb-4">User Action</p>
              <div className="bg-background w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-card-border">
                <Layout className="text-accent-primary w-6 h-6" />
              </div>
              <p className="font-bold text-lg text-heading">Normal Use</p>
              <div className="my-4 text-foreground/10">↓</div>
              <p className="font-bold text-accent-primary">"ChefAI" (Decoy)</p>
            </div>

            <div className="text-center p-8 bg-card-bg rounded-2xl border-2 border-accent-primary/20 shadow-lg relative transform hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 bg-accent-primary text-background text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter">Secure</div>
              <p className="font-bold text-foreground/70 uppercase tracking-widest text-[10px] mb-4">User Action</p>
              <div className="bg-background w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-card-border">
                <Search className="text-accent-primary w-6 h-6" />
              </div>
              <p className="font-bold text-lg text-heading">"Magic Search Term"</p>
              <div className="my-4 text-foreground/10">↓</div>
              <p className="font-bold text-accent-primary">"DANA" (Vault)</p>
            </div>

            <div className="text-center p-8 bg-card-bg rounded-2xl border border-card-border">
              <p className="font-bold text-foreground/70 uppercase tracking-widest text-[10px] mb-4">User Action</p>
              <div className="bg-background w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-card-border">
                <Eye className="text-foreground/40 w-6 h-6" />
              </div>
              <p className="font-bold text-lg text-heading">"Duress Code"</p>
              <div className="my-4 text-foreground/10">↓</div>
              <p className="font-bold text-foreground/40">"Gratitude Journal"</p>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="md:col-span-2 bg-accent-primary rounded-3xl p-8 md:p-12 text-background! shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-secondary/20"></div>
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-background!">
            <Zap className="w-8 h-8 text-accent-secondary" />
            Innovation 2: The "Empowerment" Workflow
          </h3>
          <p className="text-background/80! mb-12 text-lg leading-relaxed max-w-3xl">
            The app bridges the "translation gap" between a survivor's raw experience and the objective
            language required by courts. It uses AI for suggestions, but prioritises human agency.
          </p>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-6">
            <div className="flex-1 bg-background/5 border border-background/10 rounded-2xl p-6 hover:bg-background/10 transition-colors">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-background/20 text-background! rounded-full font-black text-sm mb-4">01</span>
              <p className="font-bold text-lg mb-2 text-background!">Raw Input</p>
              <p className="text-sm text-background/70!">User logs emotional entries under pressure.</p>
            </div>
            <div className="lg:rotate-0 rotate-90 flex justify-center text-background/40"><Zap className="w-8 h-8" /></div>
            <div className="flex-1 bg-background/5 border border-background/10 rounded-2xl p-6 hover:bg-background/10 transition-colors shadow-xl ring-1 ring-background/30">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-accent-secondary text-accent-primary rounded-full font-black text-sm mb-4">02</span>
              <p className="font-bold text-lg mb-2 text-background!">Sensing</p>
              <p className="text-sm text-background/70!">AI detects pattern velocity and risk escalation.</p>
            </div>
            <div className="lg:rotate-0 rotate-90 flex justify-center text-background/40"><Zap className="w-8 h-8" /></div>
            <div className="flex-1 bg-background/5 border border-background/10 rounded-2xl p-6 hover:bg-background/10 transition-colors">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-background/20 text-background! rounded-full font-black text-sm mb-4">03</span>
              <p className="font-bold text-lg mb-2 text-background!">Translation</p>
              <p className="text-sm text-background/70!">AI maps entries to Coercive Control identifiers.</p>
            </div>
            <div className="lg:rotate-0 rotate-90 flex justify-center text-background/40"><Zap className="w-8 h-8" /></div>
            <div className="flex-1 bg-background/10 border-2 border-accent-secondary rounded-2xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-accent-secondary text-accent-primary rounded-full font-black text-sm mb-4">04</span>
              <p className="font-bold text-lg mb-2 text-background!">Forensic Export</p>
              <p className="text-sm text-background/70!">Immutable logs converted to Witness Statements.</p>
            </div>
          </div>
        </section>

        {/* Charts Sections */}
        <section className="bg-card-bg rounded-3xl p-8 md:p-10 border border-card-border shadow-sm">
          <h3 className="text-2xl font-bold text-accent-primary mb-3 leading-tight">
            Data Insight:<br />"Course of Conduct"
          </h3>
          <p className="text-foreground/60 mb-8 text-sm font-medium">
            Proving a <strong>pattern</strong> of abuse. Visualisation of escalation over time for criminal law contexts.
          </p>
          <div className="h-[300px] w-full bg-background rounded-2xl p-6 shadow-inner relative border border-card-border">
            <Line data={escalationData} options={escalationOptions} />
          </div>
        </section>

        <section className="bg-card-bg rounded-3xl p-8 md:p-10 border border-card-border shadow-sm">
          <h3 className="text-2xl font-bold text-accent-primary mb-3 leading-tight">
            Data Insight:<br />Child Welfare Impact
          </h3>
          <p className="text-foreground/60 mb-8 text-sm font-medium">
            Family Court focus: Objective logging of a child's state after contact sessions.
          </p>
          <div className="h-[300px] w-full bg-background rounded-2xl p-6 shadow-inner relative border border-card-border">
            <Bar data={welfareData} options={welfareOptions} />
          </div>
        </section>

        {/* Features Section */}
        <section className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card-bg p-8 rounded-3xl border border-card-border">
            <div className="w-12 h-12 bg-accent-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <Layout className="text-accent-primary" />
            </div>
            <h4 className="font-bold text-xl text-heading mb-4">Cognitive Load Reduction</h4>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Calming, high-contrast palette and large, tap-friendly inputs assist users in states of hyper-arousal or duress.
            </p>
          </div>
          <div className="bg-card-bg p-8 rounded-3xl border border-card-border shadow-sm">
            <div className="w-12 h-12 bg-accent-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <Github className="text-accent-primary" />
            </div>
            <h4 className="font-bold text-xl text-heading mb-4">Historical Backdating</h4>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Survivors often find help after a crisis. Robust timeline building allows immediate logging of past incidents with metadata.
            </p>
          </div>
          <div className="bg-card-bg p-8 rounded-3xl border border-card-border">
            <div className="w-12 h-12 bg-accent-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="text-accent-primary" />
            </div>
            <h4 className="font-bold text-xl text-heading mb-4">Dual Legal Export</h4>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Export data tailored for Civil (Family Law) or Criminal (DAA 2018) systems with forensic-grade verification.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="md:col-span-2 bg-accent-secondary/10 rounded-3xl p-8 border border-card-border mb-12">
          <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-6">v2 Tech Stack</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Next.js 15', color: 'var(--accent-primary)' },
              { label: 'React 19', color: 'var(--accent-primary)' },
              { label: 'Tailwind v4', color: 'var(--accent-primary)' },
              { label: 'Gemini 1.5 Pro', color: 'var(--rose)' },
              { label: 'Framer Motion', color: 'var(--accent-primary)' },
              { label: 'PWA (Service Workers)', color: 'var(--accent-primary)' }
            ].map((tech) => (
              <span
                key={tech.label}
                className="px-6 py-2 rounded-xl text-background font-bold text-sm shadow-sm"
                style={{ backgroundColor: tech.color }}
              >
                {tech.label}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-16 border-t border-card-border text-foreground/40">
        <p className="text-sm italic">
          Project DANA Infographic | Visualising the Stealth Security Core | © Empower 2026
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <Mail className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" />
          <Github className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" />
        </div>
      </footer>
    </div>
  );
};

export default InfographicPage;
