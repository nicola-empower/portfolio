'use client';

import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import { Leaf, Coffee, Zap, Brain, MessageSquare, Camera, Mic, Info, ArrowLeft, Heart, Search, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import FadeIn from '@/components/ui/FadeIn';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
);

const NourishInfographicPage = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    // Dynamic Colors (Boutique Diner Palette: Burgundy, Pink, Cream)
    const chartTextColor = isDark ? '#feccd5' : '#5B0024';
    const chartGridColor = isDark ? 'rgba(254, 204, 213, 0.1)' : 'rgba(91, 0, 36, 0.1)';
    const chartAccent = '#5B0024'; // Burgundy

    // Radar Chart: AI Surface Area
    const aiRadarData = {
        labels: [
            'Vision (Fridge Scanner)',
            'Natural Language (Voice-to-Social)',
            'Reasoning (Swap-Bot)',
            'Pattern Recognition (Meal Planner)',
            'Personalisation (Social Matchmaker)',
            'Contextual Logic (Budget Optimizer)'
        ],
        datasets: [{
            label: 'Implementation Maturity',
            data: [85, 90, 75, 95, 80, 70],
            backgroundColor: 'rgba(91, 0, 36, 0.2)',
            borderColor: '#5B0024',
            pointBackgroundColor: '#5B0024',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#5B0024'
        }]
    };

    const aiRadarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { color: chartGridColor },
                grid: { color: chartGridColor },
                pointLabels: {
                    color: chartTextColor,
                    font: { family: 'Inter', size: 10, weight: 600 }
                },
                ticks: { display: false }
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    // Bar Chart: Development Value Lifecycle
    const valueData = {
        labels: ['Foundation', 'Nourish Hub', 'Lifestyle Pivot', 'AI Suite'],
        datasets: [{
            label: 'Delivered Value (£)',
            data: [875, 2625, 1925, 3326],
            backgroundColor: '#5B0024',
            borderRadius: 8
        }]
    };

    const valueOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: chartAccent,
                titleColor: '#e5d4d6',
                bodyColor: '#e5d4d6',
                padding: 12,
                cornerRadius: 8
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: chartGridColor },
                ticks: {
                    color: chartTextColor,
                    callback: (value: any) => `£${value}`,
                    font: { family: 'Inter', weight: 500 }
                }
            },
            x: {
                grid: { display: false },
                ticks: { color: chartTextColor, font: { family: 'Inter', weight: 500 } }
            }
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500 leading-relaxed overflow-x-hidden selection:bg-accent-primary selection:text-background">
            {/* Navigation */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link
                        href="/work/nourish-tea"
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

            {/* Header */}
            <header className="bg-[#feccd520] border-b border-card-border relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #5B0024 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-7xl mx-auto py-24 px-8 text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="bg-[#5B0024] p-5 rounded-full shadow-2xl ring-8 ring-[#5B0024]/10">
                            <Leaf className="text-[#e5d4d6] w-12 h-12" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-heading mb-6 tracking-tight">
                        Nourish <span className="italic text-accent-secondary">Tea</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold italic text-[#5B0024] mb-8">
                        The Holistic Lifestyle Hub
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-foreground/70 leading-relaxed font-light italic">
                        Visualizing the architecture behind a "Digital Village" that solves the modern domestic
                        overhead through Food, Movement, and Mindfulness.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6 md:p-12 space-y-12">

                {/* The 7-Point AI Engine */}
                <section className="bg-card-bg rounded-[3rem] p-8 md:p-16 border border-card-border shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none text-[#5B0024]">
                        <Brain size={400} />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-serif font-bold italic text-[#5B0024] mb-8 flex items-center gap-4 text-heading">
                                <Zap className="w-10 h-10 text-[#5B0024]" />
                                The 7-Point AI Engine
                            </h3>
                            <p className="text-foreground/80 mb-10 text-lg leading-relaxed">
                                Nourish implements a comprehensive AI stack that touches every stage of the domestic lifestyle loop - from cupboard and fridge contents scanning to recipe ideas and social connection.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Camera, title: "Fridge Scanner", desc: "Computer Vision ingredient detection" },
                                    { icon: Mic, title: "Voice-to-Social", desc: "Whisper/Gemini recipe parsing" },
                                    { icon: Users, title: "Food Twin", desc: "Embedding similarity matchmaking" },
                                    { icon: Brain, title: "Swap-Bot", desc: "Contextual ingredient replacement" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#5B0024]/10 flex items-center justify-center text-[#5B0024] shrink-0">
                                            <item.icon size={16} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-heading text-sm">{item.title}</p>
                                            <p className="text-[11px] opacity-60 uppercase tracking-tighter">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-[400px] w-full bg-background/50 rounded-3xl p-8 border border-card-border">
                            <Radar data={aiRadarData} options={aiRadarOptions} />
                        </div>
                    </div>
                </section>

                {/* Development Value Lifecycle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-foreground">
                    <section className="bg-background rounded-[2.5rem] p-10 border border-card-border shadow-md">
                        <h3 className="text-2xl font-serif font-bold italic text-[#5B0024] mb-6 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8" />
                            Commercial Lifecycle
                        </h3>
                        <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                            Transitioning from a MVP "Meal List" to a £20k+ high-fidelity ecosystem. Phase-based deployment keeps
                            development velocity aligned with commercial goals.
                        </p>
                        <div className="h-[250px] w-full bg-card-bg/50 rounded-2xl p-6 shadow-inner relative border border-card-border">
                            <Bar data={valueData} options={valueOptions} />
                        </div>
                    </section>

                    <section className="bg-[#5B0024] rounded-[2.5rem] p-10 text-[#e5d4d6] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#feccd5]/20 blur-3xl rounded-full"></div>
                        <h3 className="text-2xl font-serif font-bold italic text-[#e5d4d6] mb-6 flex items-center gap-3 uppercase tracking-widest">
                            <ShieldCheck className="w-8 h-8" />
                            Village Calm™
                        </h3>
                        <p className="opacity-80 mb-10 text-lg leading-relaxed italic">
                            The "Local-First" methodology ensures family data and verdict notes never leave the device, providing a
                            forensically clean sanctuary for domestic life.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-background/10 rounded-xl border border-background/10 text-center">
                                <span className="text-[#feccd5] text-2xl font-serif block mb-1">100%</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Local Privacy</span>
                            </div>
                            <div className="p-4 bg-background/10 rounded-xl border border-background/10 text-center">
                                <span className="text-[#feccd5] text-2xl font-serif block mb-1">90%</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Search Speed</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Pivot Architecture (The Three Pillars) */}
                <section className="bg-card-bg rounded-[2.5rem] p-12 border border-card-border overflow-hidden relative">
                    <h3 className="text-3xl font-serif font-bold italic text-[#5B0024] mb-12 flex items-center gap-3">
                        <Search className="w-8 h-8" />
                        The Hub-and-Spoke Architecture
                    </h3>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="p-8 bg-background/50 rounded-3xl border border-card-border relative group hover:border-[#5B0024]/40 transition-colors">
                            <div className="w-12 h-12 bg-[#5B0024]/10 rounded-2xl flex items-center justify-center mb-6 text-[#5B0024]">
                                <Coffee size={24} />
                            </div>
                            <h4 className="font-bold text-xl mb-4">Nourish (Food)</h4>
                            <p className="text-sm opacity-60 leading-relaxed">The metabolic foundation. Recipe forks and social matchmaking drive the daily habit loop.</p>
                        </div>

                        <div className="p-8 bg-background/50 rounded-3xl border border-card-border relative group hover:border-[#5B0024]/40 transition-colors">
                            <div className="w-12 h-12 bg-[#5B0024]/10 rounded-2xl flex items-center justify-center mb-6 text-[#5B0024]">
                                <Zap size={24} />
                            </div>
                            <h4 className="font-bold text-xl mb-4">Move (Activity)</h4>
                            <p className="text-sm opacity-60 leading-relaxed">The kinetic layer. Mobile-first workout player designed for parent-focused HIIT and flow.</p>
                        </div>

                        <div className="p-8 bg-background/50 rounded-3xl border border-card-border relative group hover:border-[#5B0024]/40 transition-colors">
                            <div className="w-12 h-12 bg-[#5B0024]/10 rounded-2xl flex items-center justify-center mb-6 text-[#5B0024]">
                                <Heart size={24} />
                            </div>
                            <h4 className="font-bold text-xl mb-4">Mind (Wellness)</h4>
                            <p className="text-sm opacity-60 leading-relaxed">The cognitive sanctuary. Ambient soundscapes and mindful plating education for the soul.</p>
                        </div>
                    </div>
                </section>

                {/* Closing */}
                <div className="py-24 text-center">
                    <FadeIn>
                        <h4 className="font-serif text-4xl md:text-5xl font-bold italic text-heading mb-8">
                            "Built for the families who want to <br />
                            <span className="text-[#5B0024]">Cook, Move, and Breathe Better."</span>
                        </h4>
                    </FadeIn>
                </div>

            </main>

            <footer className="text-center py-16 border-t border-card-border text-foreground/40 bg-card-bg/30">
                <p className="text-sm italic font-medium">
                    Nourish Tea | System Intelligence Dossier | Holistic Lifestyle Architecture | © Empower 2026
                </p>
            </footer>
        </div>
    );
};

export default NourishInfographicPage;
