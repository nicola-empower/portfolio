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
    Layers, Lock, Database, Cpu, Activity, RefreshCcw, Sparkles, Leaf,
    ShieldCheck, Users, ListChecks, History, Brain
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

const MedisyncInfographicPage = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    // Brand-Aligned Theme Colors (Strict 4-Color Palette)
    const chartTextColor = isDark ? '#C7B7A3' : '#6D2932';
    const chartGridColor = isDark ? 'rgba(199, 183, 163, 0.1)' : 'rgba(109, 41, 50, 0.1)';
    const accentPrimary = '#561C24';
    const accentSecondary = '#6D2932';
    const accentMuted = 'rgba(86, 28, 36, 0.1)';

    // 1. Cognitive Load Reduction (Recall Audit)
    const loadData = {
        labels: ['Memory Demand', 'Emotional Friction', 'Update Delay', 'Context Loss'],
        datasets: [
            {
                label: 'Manual Management',
                data: [95, 85, 90, 75],
                backgroundColor: 'rgba(86, 28, 36, 0.4)',
                borderColor: accentPrimary,
                borderWidth: 2,
                fill: true,
            },
            {
                label: 'Medi-Sync Automated',
                data: [12, 15, 5, 8],
                backgroundColor: isDark ? 'rgba(199, 183, 163, 0.1)' : 'rgba(109, 41, 50, 0.05)',
                borderColor: isDark ? 'rgba(199, 183, 163, 0.4)' : 'rgba(109, 41, 50, 0.4)',
                borderWidth: 2,
                fill: true,
            }
        ]
    };

    // 2. Incident Resolution Velocity
    const incidentData = {
        labels: ['Discovery', 'Logging', 'Notification', 'Network Sync'],
        datasets: [{
            label: 'Seconds to Resolve',
            data: [450, 12, 5, 2],
            backgroundColor: [
                accentPrimary,
                'rgba(86, 28, 36, 0.7)',
                'rgba(86, 28, 36, 0.4)',
                'rgba(86, 28, 36, 0.2)'
            ],
            borderRadius: 12,
        }]
    };

    // 3. Network Engagement (The "Shared Brain")
    const networkData = {
        labels: ['Medical Logs', 'Medication Sync', 'Domestic Tasks', 'Professional Briefs'],
        datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
                accentPrimary,
                'rgba(86, 28, 36, 0.8)',
                'rgba(86, 28, 36, 0.6)',
                'rgba(86, 28, 36, 0.4)'
            ],
            borderWidth: 2,
            borderColor: isDark ? '#561C24' : '#E8D8C4',
            hoverOffset: 15
        }]
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500 leading-relaxed overflow-x-hidden">
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link
                        href="/work/medi-sync"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium border-r border-card-border pr-4"
                    >
                        <ArrowLeft size={18} />
                        Back to Project
                    </Link>
                    <Link
                        href="/intelligence"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium"
                    >
                        Medical Intelligence
                    </Link>
                </div>
            </nav>

            <header className="bg-card-bg border-b border-card-border overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-accent-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-primary rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto py-32 px-8 text-center relative z-10">
                    <div className="flex justify-center mb-10">
                        <div className="bg-accent-primary p-6 rounded-3xl shadow-2xl ring-8 ring-accent-primary/10 transition-transform hover:scale-105 duration-700">
                            <Heart className="text-background w-14 h-14" />
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-8xl mb-4 text-heading font-serif font-bold italic tracking-tight">
                        Medi-<span className="text-accent-primary transition-colors duration-500">Sync</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground/40 mb-12 uppercase tracking-[0.4em]">
                        The Source of Truth
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl md:text-3xl text-heading font-serif font-bold italic leading-relaxed opacity-90 underline decoration-accent-primary/30 decoration-4 underline-offset-8">
                        "Because an exhausted parent shouldn't have to audit their own memory."
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6 md:p-12 space-y-16">
                {/* Trauma-Informed Philosophy */}
                <section className="bg-accent-primary/5 border-2 border-accent-primary/20 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl">
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-primary/5 rounded-full -mr-64 -mb-64 blur-[150px]"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6 text-foreground/40 font-bold uppercase tracking-[0.3em] text-xs">
                                <Leaf size={20} className="text-accent-primary" />
                                The Calm Methodology
                            </div>
                            <h3 className="text-4xl md:text-6xl font-serif font-bold italic mb-10 text-heading leading-tight">
                                Low-Decibel <br /><span className="text-accent-primary">Care Delivery</span>
                            </h3>
                            <p className="text-foreground/70 text-xl font-medium leading-relaxed mb-12">
                                Medi-Sync is architected on the principle of <strong className="text-heading">Calm Technology</strong>. In high-cortisol environments, UI friction isn't just a nuisance - it's a trigger. Our system uses a high-contrast, data-centric interface to remove the cognitive load of memory and the emotional drag of verbal updates.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-5xl font-serif font-bold italic text-accent-primary">0.1s</h4>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">Logging Latency</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-5xl font-serif font-bold italic text-accent-primary">100%</h4>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">Syllabus Integrity</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card-bg/50 backdrop-blur-xl border border-card-border rounded-[3rem] p-10 shadow-inner">
                            <h4 className="text-center font-bold uppercase tracking-widest text-[10px] mb-8 text-foreground/40">The "Memory Trap" Visualization</h4>
                            <div className="h-[400px] w-full">
                                <Bar
                                    data={loadData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: { legend: { position: 'bottom', labels: { color: chartTextColor, font: { weight: 'bold' } } } },
                                        scales: {
                                            y: { grid: { color: chartGridColor }, ticks: { color: chartTextColor } },
                                            x: { grid: { display: false }, ticks: { color: chartTextColor } }
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Pillar 1: Medical Log */}
                    <section className="bg-card-bg rounded-[3rem] p-12 border border-card-border shadow-xl hover:border-accent-primary/30 transition-all group">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="bg-accent-primary/10 p-4 rounded-2xl group-hover:bg-accent-primary transition-colors">
                                <ShieldCheck className="text-accent-primary group-hover:text-background" size={32} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif font-bold italic text-heading">Immutable Logs</h3>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-accent-primary font-bold">Audit-Ready Evidence</p>
                            </div>
                        </div>
                        <div className="h-[300px] w-full relative mb-12 bg-background/50 rounded-3xl p-6 border border-card-border shadow-inner">
                            <Line
                                data={{
                                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                    datasets: [{
                                        label: 'Episodes Tracked',
                                        data: [4, 2, 8, 3, 5, 2, 1],
                                        borderColor: accentPrimary,
                                        backgroundColor: 'rgba(86, 28, 36, 0.1)',
                                        fill: true,
                                        tension: 0.4
                                    }]
                                }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: { legend: { display: false } },
                                    scales: {
                                        y: { display: false },
                                        x: { grid: { display: false }, ticks: { color: chartTextColor } }
                                    }
                                }}
                            />
                        </div>
                        <p className="text-lg text-foreground/70 font-medium leading-relaxed italic border-l-8 border-accent-primary/20 pl-8">
                            Every seizure, dose, and professional intervention is time-stamped and encrypted. It's not just a log; it's a legal and medical shield for the family.
                        </p>
                    </section>

                    {/* Pillar 2: Shared Responsibility */}
                    <section className="bg-card-bg rounded-[3rem] p-12 border border-card-border shadow-xl hover:border-accent-primary/30 transition-all group">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="bg-accent-primary/10 p-4 rounded-2xl group-hover:bg-accent-primary transition-colors">
                                <Users className="text-accent-primary group-hover:text-background" size={32} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif font-bold italic text-heading">Shared Brain</h3>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-accent-primary font-bold">Domestic Task Delegation</p>
                            </div>
                        </div>
                        <div className="h-[300px] w-full relative mb-12">
                            <Doughnut
                                data={networkData}
                                options={{
                                    cutout: '80%',
                                    plugins: {
                                        legend: {
                                            position: 'bottom',
                                            labels: { color: chartTextColor, font: { weight: 'bold' }, padding: 25 }
                                        }
                                    }
                                }}
                            />
                        </div>
                        <p className="text-lg text-foreground/70 font-medium leading-relaxed italic border-l-8 border-accent-primary/20 pl-8">
                            The "Invisible Load" is made visible. Tasks are assigned, tracked, and verified across the network, ensuring no single carer carries the weight alone.
                        </p>
                    </section>
                </div>

                {/* The Outcome Pipeline */}
                <section className="bg-card-bg rounded-[4rem] p-12 md:p-20 border border-card-border relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(99,6,37,0.05),transparent)]"></div>

                    <h3 className="text-4xl md:text-5xl font-serif font-bold italic mb-16 flex items-center gap-6 text-heading">
                        <RefreshCcw className="text-accent-primary animate-spin-slow" size={48} />
                        Operational <span className="text-accent-primary">Resilience</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Brain, title: 'Recall Audit', desc: 'Removing the mental strain of data retention.', color: 'accentPrimary' },
                            { icon: History, title: 'Chronological Hub', desc: 'A deterministic timeline for medical review.', color: 'accentPrimary' },
                            { icon: ListChecks, title: 'Task Authority', desc: 'Clear delegation with zero verbal friction.', color: 'accentPrimary' },
                            { icon: ShieldCheck, title: 'Crisis Buffer', desc: 'Trauma-informed UI for peak-stress logging.', color: 'accentPrimary' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-background border border-card-border hover:border-accent-primary/30 group p-10 rounded-[2.5rem] transition-all shadow-sm">
                                <item.icon className="mb-6 group-hover:scale-110 transition-transform text-accent-primary" size={40} />
                                <h4 className="font-serif font-bold italic text-2xl mb-4 text-heading">{item.title}</h4>
                                <p className="text-sm text-foreground/60 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack Footer */}
                <section className="bg-accent-primary/5 rounded-3xl p-12 border border-card-border shadow-inner">
                    <h3 className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.5em] mb-12 text-center">Medi-Sync Infrastructure</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'Next.js 16', 'React 19', 'Firebase', 'E2E Encryption',
                            'Trauma-Informed UI', 'PWA Design', 'Cloud Sync', 'Immutable Logic'
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-8 py-3 bg-card-bg border border-card-border rounded-full text-foreground/70 font-bold text-[10px] uppercase tracking-widest shadow-sm hover:border-accent-primary/30 transition-all"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="text-center py-24 border-t border-card-border bg-card-bg/50 backdrop-blur-sm">
                <p className="text-sm font-serif font-bold italic text-heading">
                    Medi-<span className="text-accent-primary transition-colors">Sync</span> Healthcare Infographic | Version 2.0 | © Empower Services 2026
                </p>
                <div className="flex justify-center gap-12 mt-12">
                    <Heart size={24} className="text-accent-primary hover:scale-125 transition-transform cursor-pointer" />
                    <Brain size={24} className="text-accent-primary hover:scale-125 transition-transform cursor-pointer" />
                    <ShieldCheck size={24} className="text-accent-primary hover:scale-125 transition-transform cursor-pointer" />
                </div>
            </footer>
        </div>
    );
};

export default MedisyncInfographicPage;
