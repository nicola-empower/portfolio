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
    Filler,
    ArcElement
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
    ArrowLeft, Shield, Zap, Bell, Heart, Coffee, Moon, Briefcase,
    Search, CheckCircle, Clock, Smartphone, MessageSquare, Newspaper,
    Layers, Lock, Database, Cpu, Activity, RefreshCcw, Sparkles, Leaf
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const ReclaimInfographicPage = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    // Dynamic Theme Colors (Strict 4-Color Palette)
    const chartTextColor = isDark ? '#C7B7A3' : '#6D2932'; 
    const chartGridColor = isDark ? 'rgba(199, 183, 163, 0.1)' : 'rgba(109, 41, 50, 0.1)';
    const burgundyAccent = '#561C24'; 
    const maroonAccent = '#6D2932'; 
    const taupeAccent = '#C7B7A3';
    const creamAccent = '#E8D8C4';

    // 1. Biometric Readiness Data
    const bioData = {
        labels: ['Hydration (L)', 'Fuel (Food)', 'Oxygen (Walks)', 'Focus (Blocks)'],
        datasets: [{
            label: 'Actual vs Target',
            data: [6, 2, 1, 4],
            backgroundColor: [burgundyAccent, maroonAccent, taupeAccent, '#561C24'],
            borderRadius: 8,
        }]
    };

    const bioOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { grid: { color: chartGridColor }, ticks: { color: chartTextColor } },
            x: { grid: { display: false }, ticks: { color: chartTextColor } }
        }
    };

    // 2. Strategic Intelligence (Sector Audit)
    const auditData = {
        labels: ['Pruned Distractions', 'Strategic Pillars', 'Executive Slack'],
        datasets: [{
            data: [42, 12, 5],
            backgroundColor: [burgundyAccent, maroonAccent, taupeAccent], 
            borderWidth: 0,
            hoverOffset: 10
        }]
    };

    // 3. Efficiency Gains
    const efficiencyData = {
        labels: ['Pre-Reclaim (Manual)', 'Apps Script v1', 'Reclaim v3.1'],
        datasets: [{
            label: 'Executive Decibel (Lower is Better)',
            data: [100, 45, 12],
            borderColor: burgundyAccent,
            backgroundColor: 'rgba(86, 28, 36, 0.1)',
            fill: true,
            tension: 0.4
        }]
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500 leading-relaxed overflow-x-hidden">
            <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link
                        href="/work/reclaim"
                        className="flex items-center gap-2 text-foreground/90 hover:text-accent-primary transition-colors font-bold border-r border-card-border pr-4"
                    >
                        <ArrowLeft size={18} />
                        Back to Project
                    </Link>
                    <Link
                        href="/intelligence"
                        className="flex items-center gap-2 text-foreground/90 hover:text-accent-primary transition-colors font-bold"
                    >
                        System Intelligence
                    </Link>
                </div>
            </nav>

            <header className="bg-card-bg border-b border-card-border">
                <div className="max-w-7xl mx-auto py-20 px-8 text-center">
                    <div className="flex justify-center mb-8">
                        <div className="bg-accent-primary p-5 rounded-3xl shadow-2xl ring-8 ring-accent-primary/10 rotate-3">
                            <Shield className="text-background w-12 h-12" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-heading mb-4 tracking-tight">
                        Reclaim
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-accent-primary mb-6 uppercase tracking-[0.2em]">
                        Executive Control Plane
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-foreground font-medium leading-relaxed">
                        "Authority is built in the silence between decisions." <br />
                        Architecting the transition from global deep-work to human rituals.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6 md:p-12 space-y-12">
                {/* Core Value Section */}
                <section className="bg-background border-2 border-accent-primary/20 rounded-[3rem] p-10 md:p-16 text-foreground shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full -mr-64 -mt-64 blur-[120px]"></div>
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h3 className="text-4xl md:text-5xl font-serif italic font-bold mb-8 text-accent-primary">
                                Reclaim
                            </h3>
                            <p className="text-foreground text-lg font-bold leading-relaxed mb-12 max-w-2xl">
                                Born from a mission-critical Apps Script, Reclaim serves as the <strong>Director's Pulse</strong>, the only intelligence stream required to manage a digital conglomerate. It enforces a 100% operational uptime through defensive AI resolution and deterministic boundary state switching.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="bg-card-bg border border-accent-primary/40 rounded-2xl p-6 shadow-lg">
                                    <h4 className="font-bold text-accent-primary text-2xl mb-1 tracking-tighter italic font-serif leading-none">42</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground font-bold">Pruned / Day</p>
                                </div>
                                <div className="bg-card-bg border border-accent-primary/40 rounded-2xl p-6 shadow-lg">
                                    <h4 className="font-bold text-accent-primary text-2xl mb-1 tracking-tighter italic font-serif leading-none">124ms</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground font-bold">Fault Recovery</p>
                                </div>
                                <div className="bg-card-bg border border-accent-primary/40 rounded-2xl p-6 shadow-lg">
                                    <h4 className="font-bold text-accent-primary text-2xl mb-1 tracking-tighter italic font-serif leading-none">100%</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground font-bold">Privacy SLA</p>
                                </div>
                                <div className="bg-card-bg border border-accent-primary/40 rounded-2xl p-6 shadow-lg">
                                    <h4 className="font-bold text-accent-primary text-2xl mb-1 tracking-tighter italic font-serif leading-none">£17k</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-foreground font-bold">Asset Value</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section className="bg-card-bg rounded-[2.5rem] p-10 border border-card-border shadow-xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-accent-primary/10 p-3 rounded-2xl">
                                <Newspaper className="text-accent-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold italic text-heading">Strategic Synthesis</h3>
                                <p className="text-xs uppercase tracking-widest text-accent-primary font-black">The Sector Audit Engine</p>
                            </div>
                        </div>
                        <div className="h-[300px] w-full relative mb-12">
                            <Doughnut
                                data={auditData}
                                options={{
                                    cutout: '75%',
                                    plugins: {
                                        legend: {
                                            position: 'bottom',
                                            labels: { color: chartTextColor, font: { weight: 'bold' }, padding: 20 }
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="bg-background/50 border border-card-border p-5 rounded-2xl">
                                <p className="text-sm font-medium italic leading-relaxed text-foreground/90">
                                    "AI Alpha, Market Shift, and Ops Fuel are the only three pillars that survive the audit. Everything else is garbage-collected into the archives."
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-card-bg rounded-[2.5rem] p-10 border border-card-border shadow-xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-accent-secondary/10 p-3 rounded-2xl">
                                <Activity className="text-accent-secondary" size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold italic text-heading">Biometric Readiness</h3>
                                <p className="text-xs uppercase tracking-widest text-accent-secondary font-black">The Sanctuary Protocol</p>
                            </div>
                        </div>
                        <div className="h-[300px] w-full bg-background/50 rounded-3xl p-8 border border-card-border mb-12 shadow-inner">
                            <Bar data={bioData} options={bioOptions} />
                        </div>
                        <p className="text-sm text-foreground font-bold leading-relaxed italic border-l-4 border-accent-secondary pl-6">
                            Executive authority requires baseline stability. Reclaim tracks hydration, food intake, and oxygen quotas to ensure the human element remains as resilient as the architecture.
                        </p>
                    </section>
                </div>

                <section className="bg-card-bg rounded-[3rem] p-10 md:p-16 border border-card-border">
                    <h3 className="text-4xl font-serif font-bold italic mb-12 flex items-center gap-6 text-accent-primary">
                        <RefreshCcw className="text-accent-primary" size={40} />
                        The State Pipeline
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Director Scan', desc: 'Synthesising inbox, calendar, and 40+ newsletters via Gemini 3 Pro.', color: 'accent-primary' },
                            { step: '02', title: 'Context Audit', desc: 'Pruning high-decibel noise into strategic operational pillars.', color: 'accent-primary' },
                            { step: '03', title: '5:30 Boundary', desc: 'The "Hard Switch" from CEO Mode to Mum Mode ritual.', color: 'accent-primary' },
                            { step: '04', title: 'Sanctuary Sync', desc: 'Transitioning to human rituals and bio-metric restoration.', color: 'accent-primary' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-background border border-card-border group hover:border-accent-primary/50 transition-all relative overflow-hidden p-8 rounded-[2.5rem]">
                                <span className="text-5xl font-black text-accent-primary/10 absolute top-4 right-6 group-hover:text-accent-primary/20 transition-colors font-serif">{item.step}</span>
                                <h4 className="font-serif italic font-bold text-xl mb-4 text-accent-primary">{item.title}</h4>
                                <p className="text-sm text-foreground font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resilience Section */}
                <section className="bg-card-bg rounded-[3rem] p-10 md:p-20 border border-card-border shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full -mr-64 -mt-64 blur-[120px]"></div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <h3 className="text-3xl md:text-5xl font-serif italic text-accent-primary font-bold mb-12 text-center">
                            The Resilience Layer
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                            {/* Step 1: Input */}
                            <div className="bg-background border border-card-border p-8 rounded-[2.5rem] relative group hover:border-accent-primary/50 transition-all">
                                <div className="bg-accent-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-accent-primary">
                                    <Database size={24} />
                                </div>
                                <h4 className="font-serif italic font-bold text-xl mb-3">Raw Intelligence</h4>
                                <p className="text-xs text-foreground font-bold leading-relaxed italic">
                                    Synthesising volatile data streams from 40+ sources including calendars, inboxes, and global news.
                                </p>
                                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                                    <div className="w-8 h-px bg-accent-primary/50"></div>
                                </div>
                            </div>
                             {/* Step 2: Filter */}
                            <div className="bg-accent-primary/5 border-2 border-accent-primary/20 p-8 rounded-[2.5rem] relative shadow-lg">
                                <div className="bg-accent-primary w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-background shadow-lg">
                                    <Lock size={24} />
                                </div>
                                <h4 className="font-serif italic font-bold text-xl mb-3 text-accent-primary">String Cannon™</h4>
                                <p className="text-xs text-foreground font-medium leading-relaxed">
                                    The proprietary "Reality-Sync" engine that enforces data integrity and isolates AI hallucinations in real-time.
                                </p>
                                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                                    <div className="w-8 h-px bg-accent-primary/30"></div>
                                </div>
                            </div>

                            {/* Step 3: Output */}
                            <div className="bg-background border border-card-border p-8 rounded-[2.5rem]">
                                <div className="bg-accent-secondary/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-accent-secondary">
                                    <Shield size={24} />
                                </div>
                                <h4 className="font-serif italic font-bold text-xl mb-3">Deterministic State</h4>
                                <p className="text-xs text-foreground font-bold leading-relaxed italic">
                                    Guaranteeing 100% operational uptime by outputting stabilised, executive-ready action plans.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 p-10 bg-accent-primary/5 rounded-[2.5rem] border border-accent-primary/20 text-center">
                            <p className="text-sm italic font-serif text-foreground font-bold max-w-2xl mx-auto">
                                "Technical resilience isn't just about code stability; it's about the psychological safety of the Director. RECLAIM removes the noise so the authority can lead."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Overlay (Standardized Layout) */}
                <section className="bg-accent-secondary/5 rounded-3xl p-10 border border-card-border">
                    <h3 className="text-sm font-bold text-accent-primary uppercase tracking-[0.3em] mb-8 text-center">Reclaim Intelligence Stack</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'React 19', 'Vite', 'Gemini 3 Pro', 'Google Apps Script',
                            'Zustand', 'Chart.js', 'Framer Motion', 'PWA Architecture'
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-8 py-3 bg-accent-primary rounded-2xl text-background font-bold text-xs shadow-lg uppercase tracking-widest"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="text-center py-20 border-t border-card-border text-foreground font-bold">
                <p className="text-sm italic font-serif">
                    Reclaim Technical Infographic | © Empower 2026
                </p>
                <div className="flex justify-center gap-10 mt-10">
                    <Database size={20} className="hover:text-accent-primary transition-colors cursor-pointer" />
                    <Cpu size={20} className="hover:text-accent-primary transition-colors cursor-pointer" />
                    <Smartphone size={20} className="hover:text-accent-primary transition-colors cursor-pointer" />
                </div>
            </footer>
        </div>
    );
};

export default ReclaimInfographicPage;
