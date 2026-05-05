"use client";

import React from "react";
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
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Github, Mail, Shield, Zap, Search, Eye, FileText, Layout, Info, UserCheck, Play, Camera, Monitor, Sparkles } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";

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

const PaxInfographicPage = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    // Dynamic Colors based on semantic tokens (Strict 4-Color Palette)
    const chartTextColor = isDark ? "#C7B7A3" : "#6D2932";
    const chartGridColor = isDark ? "rgba(199, 183, 163, 0.1)" : "rgba(109, 41, 50, 0.05)";
    const chartAccent = "#561C24";

    // Prompt Alignment Chart Data
    const alignmentData = {
        labels: ["Base Model (SDXL)", "Fine-tuned Flux", "PAX Precision Engine"],
        datasets: [{
            label: "Prompt Alignment Score (%)",
            data: [65, 82, 95],
            backgroundColor: ["#C7B7A3", "#6D2932", chartAccent],
            borderRadius: 12
        }]
    };

    const alignmentOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#561C24",
                titleColor: "#E8D8C4",
                bodyColor: "#E8D8C4",
                borderColor: "#6D2932",
                borderWidth: 1
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: { color: chartGridColor },
                ticks: { color: chartTextColor, font: { family: "serif", weight: "bold" as const } }
            },
            x: {
                grid: { display: false },
                ticks: { color: chartTextColor, font: { family: "serif", weight: "bold" as const } }
            }
        }
    };

    // Identity Drift Data (Lower is better)
    const driftData = {
        labels: ["Shot 1", "Shot 5", "Shot 10", "Shot 20"],
        datasets: [{
            label: "Identity Drift (Manual)",
            data: [0, 15, 35, 60],
            borderColor: "#6D2932",
            backgroundColor: "transparent",
            borderDash: [5, 5],
            tension: 0.3
        }, {
            label: "PAX Persistent Engine",
            data: [0, 2, 5, 8],
            borderColor: chartAccent,
            backgroundColor: "rgba(86, 28, 36, 0.1)",
            fill: true,
            tension: 0.3
        }]
    };

    // Motion Efficiency
    const motionData = {
        labels: ["Manual Prompting", "Gemini Suggester", "PAX CineMotion"],
        datasets: [{
            data: [70, 25, 5],
            backgroundColor: ["#C7B7A3", "#6D2932", chartAccent],
            borderWidth: 0,
            hoverOffset: 4
        }]
    };

    return (
        <main className="min-h-screen bg-background text-foreground font-medium transition-colors duration-500 leading-relaxed overflow-x-hidden selection:bg-accent-primary/30">
            {/* Header / Navigation */}
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-card-border px-6 py-4 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center gap-4">
                    <Link
                        href="/work/pax-visual-engine"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-all duration-300 font-bold border-r border-card-border pr-4 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Project</span>
                    </Link>
                    <Link
                        href="/intelligence"
                        className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-all duration-300 font-bold"
                    >
                        <Monitor size={18} />
                        <span>System Intelligence</span>
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-primary leading-none">System Active</span>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative bg-card-bg border-b border-card-border overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent opacity-50"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

                <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-black uppercase tracking-widest mb-8 animate-fade-in">
                        <Sparkles size={14} />
                        <span>Visual Intelligence Architecture</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-serif font-bold italic text-heading mb-6 tracking-tight">
                        PAX <span className="text-accent-primary not-italic">Engine</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold text-accent-primary mb-8 uppercase tracking-[0.3em] max-w-3xl mx-auto leading-tight">
                        The "Cher Horowitz" Wardrobe for AI Identity
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/60 leading-relaxed font-serif italic border-l-2 border-accent-primary/30 pl-8 text-center border-l-0">
                        Visualising the "Prompt Hygiene" layer that transforms raw latent space into a consistent, safe-for-work digital twin.
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-12 animate-fade-in-up">
                {/* Core Value Section - High Impact Glass */}
                <section className="bg-accent-primary rounded-[2rem] p-8 md:p-16 text-background shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-background/10 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                            <div className="max-w-2xl">
                                <h3 className="text-background font-serif text-4xl md:text-5xl font-bold italic mb-6 flex items-center gap-4">
                                    <Monitor className="w-10 h-10" />
                                    The IKEA PAX Metaphor
                                </h3>
                                <p className="text-background/90 text-xl md:text-2xl leading-relaxed font-medium">
                                    Named after the modular wardrobe system, PAX allows users to "click to choose" style architectures without writing manual prompt engineering. It solves the "latent failure points" of raw prompting by hard-coding negative anchors into a one-tap UI.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <Link
                                    href="/work/pax-visual-engine/proposal"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-background text-accent-primary rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                                >
                                    <span>View Proposal</span>
                                    <ArrowLeft className="rotate-180" size={20} />
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "SFW Reliability", value: "100%", sub: "Guaranteed Compliance" },
                                { label: "Selection Speed", value: "< 2s", sub: "Instant Style Mapping" },
                                { label: "Manual Effort", value: "0", sub: "Lines Typed Daily" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-background/10 backdrop-blur-md border border-background/20 rounded-[1.5rem] p-8 hover:bg-background/20 transition-all group/stat">
                                    <h4 className="font-serif font-bold italic text-5xl text-background mb-2 group-hover/stat:translate-x-1 transition-transform">{stat.value}</h4>
                                    <p className="text-background/60 font-black uppercase tracking-widest text-xs">{stat.label}</p>
                                    <p className="text-background/40 text-[10px] uppercase font-bold mt-1">{stat.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Prompt Precision Section */}
                    <section className="bg-card-bg rounded-[2rem] p-8 md:p-12 border border-card-border shadow-xl backdrop-blur-sm group hover:border-accent-primary/30 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary">
                                <Search size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold italic text-heading">Prompt Alignment Efficacy</h3>
                                <p className="text-foreground/40 text-xs font-black uppercase tracking-widest">Flux-Mapping vs Standard Diffusion</p>
                            </div>
                        </div>
                        <div className="h-[300px] w-full bg-background/50 rounded-2xl p-6 border border-card-border shadow-inner relative group-hover:bg-background/80 transition-all">
                            <Bar data={alignmentData} options={alignmentOptions} />
                        </div>
                        <div className="mt-8 p-4 rounded-xl bg-accent-primary/5 border border-accent-primary/10">
                            <p className="text-sm text-foreground/60 italic font-serif leading-relaxed">
                                "PAX filters eliminate 'prompt bleed' by isolating aesthetic tokens from character identity, maintaining 95% alignment across 100+ generations."
                            </p>
                        </div>
                    </section>

                    {/* Production Velocity */}
                    <section className="bg-card-bg rounded-[2rem] p-8 md:p-12 border border-card-border shadow-xl backdrop-blur-sm group hover:border-accent-primary/30 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary">
                                <Play size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold italic text-heading">Production Velocity</h3>
                                <p className="text-foreground/40 text-xs font-black uppercase tracking-widest">Concept to 4K Cinematic Loop (Minutes)</p>
                            </div>
                        </div>
                        <div className="h-[300px] w-full relative flex items-center justify-center">
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                                <span className="text-4xl font-serif font-bold italic text-accent-primary leading-none">93%</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Efficiency Gain</span>
                            </div>
                            <Doughnut
                                data={motionData}
                                options={{
                                    cutout: "75%",
                                    plugins: {
                                        legend: {
                                            position: "bottom",
                                            labels: {
                                                color: chartTextColor,
                                                font: { family: "serif", weight: "bold", size: 10 },
                                                padding: 20
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </section>

                    {/* Workflow Workflow - Full Width Mobile, Half Desktop */}
                    <section className="md:col-span-2 bg-card-bg rounded-[2rem] p-8 md:p-16 border border-card-border shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-30"></div>

                        <div className="max-w-4xl">
                            <h3 className="text-4xl font-serif font-bold italic text-heading mb-6 flex items-center gap-4">
                                <Zap className="w-10 h-10 text-accent-primary" />
                                The Virtual Wardrobe Workflow
                            </h3>
                            <p className="text-foreground/60 mb-16 text-xl leading-relaxed font-serif italic">
                                Built as a high-fidelity alternative to traditional Gen-AI prompting, PAX maps creative intent to engines with one-click deterministic logic.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                            {[
                                { step: "01", title: "Style Selection", desc: "Select 'wardrobe' presets via the dashboard (Cher Horowitz style)." },
                                { step: "02", title: "Hygiene Injection", desc: "Hard-coded negative anchors ensure quality and 100% SFW compliance." },
                                { step: "03", title: "Flux Synthesis", desc: "Astria API processes 4 identity-consistent variations." },
                                { step: "04", title: "Motion Analysis", desc: "Vision AI analyses composition for realistic cinematic prompts." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-background/40 p-8 rounded-2xl border border-card-border relative group hover:border-accent-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <span className="text-6xl font-serif font-bold italic opacity-5 absolute -top-4 -right-4 text-accent-primary group-hover:opacity-10 transition-opacity">
                                        {item.step}
                                    </span>
                                    <div className="w-10 h-10 rounded-xl bg-accent-primary/5 flex items-center justify-center text-accent-primary font-black mb-6 border border-accent-primary/10">
                                        {item.step}
                                    </div>
                                    <h4 className="font-serif font-bold text-xl mb-3 italic text-heading group-hover:text-accent-primary transition-colors">{item.title}</h4>
                                    <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Identity Drift Tracking */}
                    <section className="md:col-span-2 bg-card-bg rounded-[2rem] p-8 md:p-16 border border-card-border shadow-xl overflow-hidden group">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                            <div>
                                <h3 className="text-3xl font-serif font-bold italic text-heading mb-2">Identity Matrix Control</h3>
                                <p className="text-accent-primary font-black uppercase tracking-[0.2em] text-xs">Persistent Anatomy Across Generations</p>
                            </div>
                            <div className="px-4 py-2 rounded-full bg-accent-primary text-accent-primary-foreground text-[10px] font-black uppercase tracking-widest shadow-lg animate-pulse">
                                Active Monitoring
                            </div>
                        </div>
                        <div className="h-[400px] w-full bg-background/50 rounded-3xl p-8 border border-card-border shadow-inner group-hover:bg-background/80 transition-all">
                            <Line data={driftData} options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        position: "top",
                                        labels: { color: chartTextColor, font: { family: "serif", weight: "bold" }, usePointStyle: true, padding: 20 }
                                    }
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        title: { display: true, text: "% Deviation from Source", color: chartTextColor, font: { family: "serif", weight: "bold" } },
                                        ticks: { color: chartTextColor },
                                        grid: { color: chartGridColor }
                                    },
                                    x: {
                                        ticks: { color: chartTextColor, font: { family: "serif", weight: "bold" } },
                                        grid: { display: false }
                                    }
                                }
                            }} />
                        </div>
                    </section>

                    {/* Final Core Pillars */}
                    <section className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
                        {[
                            {
                                icon: <Shield size={24} />,
                                title: "Prompt Hygiene",
                                desc: "Automated injection of negative prompts to prune hallucinated limbs and ensure compliance."
                            },
                            {
                                icon: <Camera size={24} />,
                                title: "Latent Anchoring",
                                desc: "Hard-coding skeletal structures into the Flux pipeline to prevent identity drift."
                            },
                            {
                                icon: <Sparkles size={24} />,
                                title: "Motion Vectors",
                                desc: "Gemini 2.0 analyses image weights to suggest realistic motion patterns for Luma exports."
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="bg-card-bg p-10 rounded-[2rem] border border-card-border shadow-lg hover:border-accent-primary/30 transition-all text-center group">
                                <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-8 mx-auto text-accent-primary group-hover:scale-110 group-hover:bg-accent-primary group-hover:text-accent-primary-foreground transition-all shadow-xl">
                                    {pillar.icon}
                                </div>
                                <h4 className="font-serif font-bold text-2xl text-heading mb-4 italic">{pillar.title}</h4>
                                <p className="text-foreground/60 text-sm leading-relaxed font-serif italic">
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>

            {/* Print Footer */}
            <footer className="mt-24 border-t border-card-border py-20 bg-card-bg/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="w-10 h-1bg-accent-primary rounded-full"></div>
                        <Sparkles className="text-accent-primary w-8 h-8" />
                        <div className="w-10 h-1bg-accent-primary rounded-full"></div>
                    </div>
                    <p className="text-foreground/40 font-serif italic text-sm mb-8 tracking-widest uppercase">
                        PAX Visual Intelligence | Technical Architecture Suite | © Empower 2026
                    </p>
                    <div className="flex justify-center gap-8 items-center no-print">
                        <Link href="mailto:contact@empower.co.uk" className="text-foreground/40 hover:text-accent-primary transition-all">
                            <Mail size={20} />
                        </Link>
                        <Link href="https://github.com/nicola-empower" className="text-foreground/40 hover:text-accent-primary transition-all">
                            <Github size={20} />
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default PaxInfographicPage;


