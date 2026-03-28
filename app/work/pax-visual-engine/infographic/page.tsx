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

    // Dynamic Colors
    const chartTextColor = isDark ? "#E2E8F0" : "#64748B";
    const chartGridColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)";
    const chartAccent = isDark ? "#c994a4" : "#5B0024";

    // Prompt Alignment Chart Data
    const alignmentData = {
        labels: ["Base Model (SDXL)", "Fine-tuned Flux", "PAX Precision Engine"],
        datasets: [{
            label: "Prompt Alignment Score (%)",
            data: [65, 82, 95],
            backgroundColor: ["#94a3b8", "#A855F7", chartAccent],
            borderRadius: 12
        }]
    };

    const alignmentOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: { color: chartGridColor },
                ticks: { color: chartTextColor }
            },
            x: {
                grid: { display: false },
                ticks: { color: chartTextColor }
            }
        }
    };

    // Identity Drift Data (Lower is better)
    const driftData = {
        labels: ["Shot 1", "Shot 5", "Shot 10", "Shot 20"],
        datasets: [{
            label: "Identity Drift (Manual)",
            data: [0, 15, 35, 60],
            borderColor: "#cbd5e1",
            backgroundColor: "transparent",
            borderDash: [5, 5],
            tension: 0.3
        }, {
            label: "PAX Persistent Engine",
            data: [0, 2, 5, 8],
            borderColor: chartAccent,
            backgroundColor: isDark ? "rgba(201, 148, 164, 0.2)" : "rgba(91, 0, 36, 0.1)",
            fill: true,
            tension: 0.3
        }]
    };

    // Motion Efficiency
    const motionData = {
        labels: ["Manual Prompting", "Gemini Suggester", "PAX CineMotion"],
        datasets: [{
            data: [70, 25, 5],
            backgroundColor: ["#94a3b8", "#A855F7", chartAccent],
            borderWidth: 0,
            hoverOffset: 4
        }]
    };

    return (
        <main className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500 leading-relaxed overflow-x-hidden">
            <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Link
                        href="/work/pax-visual-engine"
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
                        <div className="bg-accent-primary p-4 rounded-3xl shadow-lg ring-8 ring-accent-primary/10 text-background">
                            <Sparkles className="w-12 h-12" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-heading mb-4 tracking-tight">
                        PAX <span className="text-accent-primary italic">Architecture</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-accent-primary mb-2 uppercase tracking-wide">
                        The "Cher Horowitz" Wardrobe for AI Identity
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-foreground/60 leading-relaxed font-serif italic">
                        Visualising the "Prompt Hygiene" layer that transforms raw latent space into a consistent, safe-for-work digital twin.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Core Value Section */}
                <section className="md:col-span-2 bg-accent-primary rounded-3xl p-8 md:p-12 text-background! shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <h3 className="text-background! mb-4 font-serif text-3xl italic flex items-center gap-3">
                            <Monitor className="w-8 h-8" />
                            The IKEA PAX Metaphor
                        </h3>
                        <p className="text-background/80! mb-10 text-xl leading-relaxed max-w-4xl font-light">
                            Named after the IKEA wardrobe system, PAX allows users to "click to choose" an outfit style without writing 12 lines of prompt engineering. It solves the "3 arms / no clothes" failure points of raw prompting by hard-coding negative prompts and identity-anchors into a one-tap UI.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-background/10 border border-background/20 rounded-2xl p-6">
                                <h4 className="font-bold text-background! text-2xl mb-2 italic">100%</h4>
                                <p className="text-sm text-background/60! font-bold uppercase tracking-widest">SFW Reliability</p>
                            </div>
                            <div className="bg-background/10 border border-background/20 rounded-2xl p-6 shadow-xl ring-1 ring-background/30">
                                <h4 className="font-bold text-background! text-2xl mb-2 italic">&lt; 2s</h4>
                                <p className="text-sm text-background/60! font-bold uppercase tracking-widest">Selection Speed</p>
                            </div>
                            <div className="bg-background/10 border border-background/20 rounded-2xl p-6">
                                <h4 className="font-bold text-background! text-2xl mb-2 italic">0</h4>
                                <p className="text-sm text-background/60! font-bold uppercase tracking-widest">Manual Lines typed</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Prompt Precision Section */}
                <section className="bg-card-bg rounded-3xl p-8 md:p-12 border border-card-border shadow-xl">
                    <h3 className="text-2xl font-bold text-accent-primary mb-6 flex items-center gap-3 font-serif italic">
                        <Search className="w-6 h-6" />
                        Prompt Alignment Efficacy
                    </h3>
                    <p className="text-foreground/60 mb-8 text-sm">
                        Comparing PAX's Flux-Mapping engine against industry-standard diffusion models.
                    </p>
                    <div className="h-[250px] w-full bg-background/50 rounded-2xl p-4 shadow-inner border border-card-border">
                        <Bar data={alignmentData} options={alignmentOptions} />
                    </div>
                </section>

                {/* Motion Pipeline Section */}
                <section className="bg-card-bg rounded-3xl p-8 md:p-12 border border-card-border shadow-xl overflow-hidden">
                    <h3 className="text-2xl font-bold text-accent-primary mb-6 flex items-center gap-3 font-serif italic">
                        <Play className="w-6 h-6" />
                        Production Velocity (Minutes)
                    </h3>
                    <p className="text-foreground/60 mb-8 text-sm">
                        Time required to transform a concept into a 4K cinematic loop.
                    </p>
                    <div className="h-[250px] w-full relative">
                        <Doughnut data={motionData} options={{ cutout: "70%", plugins: { legend: { position: "bottom", labels: { color: chartTextColor, font: { weight: "bold" } } } } }} />
                    </div>
                </section>

                {/* Workflow Workflow */}
                <section className="md:col-span-2 bg-card-bg rounded-3xl p-8 md:p-12 border border-card-border shadow-sm">
                    <h3 className="text-3xl font-bold text-accent-primary mb-6 flex items-center gap-3 font-serif">
                        <Zap className="w-8 h-8" />
                        The Virtual Wardrobe Workflow
                    </h3>
                    <p className="text-foreground/70 mb-12 text-lg max-w-3xl">
                        Built as a high-fidelity alternative to Katya Varbanova's "Viral Marketing Stars" frameworks, PAX maps creative intent to AI engines with one-click simplicity.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
                        {[
                            { step: "01", title: "Style Selection", desc: "Select 'wardrobe' items via the dashboard (Cher Horowitz style)." },
                            { step: "02", title: "Hygiene Injection", desc: "Hard-coded negative prompts ensure quality and SFW compliance." },
                            { step: "03", title: "Flux Synthesis", desc: "Astria API processes 4 identity-consistent variations." },
                            { step: "04", title: "Gemini Analysis", desc: "Vision AI analyzes composition for cinematic motion prompts." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-background p-6 rounded-2xl shadow-sm border border-card-border relative group hover:border-accent-primary transition-colors">
                                <span className="text-3xl font-black opacity-30 absolute top-4 right-4 group-hover:opacity-60 transition-opacity italic text-accent-primary">{item.step}</span>
                                <h4 className="font-bold text-lg mb-2 italic text-accent-primary">{item.title}</h4>
                                <p className="text-sm text-foreground/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Identity Drift Tracking */}
                <section className="md:col-span-2 bg-card-bg rounded-3xl p-8 md:p-12 border border-card-border shadow-xl overflow-hidden">
                    <h3 className="text-2xl font-bold text-heading mb-2 font-serif italic">Identity Matrix Control</h3>
                    <p className="text-foreground/60 mb-8 text-sm uppercase tracking-widest font-bold">Maintaining the Human Core Across Generations</p>
                    <div className="h-[350px] w-full bg-background/30 rounded-3xl p-6 border border-card-border">
                        <Line data={driftData} options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { position: "top", labels: { color: chartTextColor } } },
                            scales: { 
                                y: { beginAtZero: true, title: { display: true, text: "% Deviation", color: chartTextColor }, ticks: { color: chartTextColor }, grid: { color: chartGridColor } },
                                x: { ticks: { color: chartTextColor }, grid: { display: false } }
                            }
                        }} />
                    </div>
                </section>

                {/* Prompt Hygiene Audit Section */}
                <section className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-card-bg p-8 rounded-3xl border border-card-border">
                        <div className="w-12 h-12 bg-accent-primary/5 rounded-2xl flex items-center justify-center mb-6">
                            <Shield className="text-accent-primary" />
                        </div>
                        <h4 className="font-bold text-xl text-heading mb-4">Prompt Hygiene</h4>
                        <p className="text-foreground/60 text-sm leading-relaxed">
                            Automated injection of negative prompts to prune "hallucinated limbs" (3-arms/6-fingers) and ensure 100% SFW compliance.
                        </p>
                    </div>
                    <div className="bg-card-bg p-8 rounded-3xl border border-card-border shadow-sm">
                        <div className="w-12 h-12 bg-accent-primary/5 rounded-2xl flex items-center justify-center mb-6">
                            <Camera className="text-accent-primary" />
                        </div>
                        <h4 className="font-bold text-xl text-heading mb-4">Latent Anchoring</h4>
                        <p className="text-foreground/60 text-sm leading-relaxed">
                            Hard-coding facial landmarks and structural weights into the Flux LoRA pipeline to prevent "Identity Drift" during training.
                        </p>
                    </div>
                    <div className="bg-card-bg p-8 rounded-3xl border border-card-border">
                        <div className="w-12 h-12 bg-accent-primary/5 rounded-2xl flex items-center justify-center mb-6">
                            <Sparkles className="text-accent-primary" />
                        </div>
                        <h4 className="font-bold text-xl text-heading mb-4">Physics-Aware Motion</h4>
                        <p className="text-foreground/60 text-sm leading-relaxed">
                            Gemini 2.0 analyzes image weights to suggest realistic motion vectors (hair flow, light patterns) for Luma/Runway exports.
                        </p>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="md:col-span-2 bg-accent-secondary/10 rounded-3xl p-8 border border-card-border mb-4">
                    <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-6">Visual Engine Architecture</h3>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { label: 'Next.js 15', color: 'var(--accent-primary)' },
                            { label: 'React 19', color: 'var(--accent-primary)' },
                            { label: 'Flux Shnell', color: 'var(--accent-primary)' },
                            { label: 'Astria.ai API', color: 'var(--accent-primary)' },
                            { label: 'Gemini 2.0 Flash', color: 'var(--rose)' },
                            { label: 'Luma Dream Machine', color: 'var(--accent-primary)' },
                            { label: 'Chart.js', color: 'var(--accent-primary)' }
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

            <footer className="text-center py-16 border-t border-card-border text-foreground/40 font-serif">
                <p className="text-sm italic">
                    PAX Visual Intelligence Infographic | Technical Architecture | © Empower 2026
                </p>
                <div className="flex justify-center gap-6 mt-6">
                    <Mail className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" />
                    <Github className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" />
                </div>
            </footer>
        </main>
    );
};

export default PaxInfographicPage;
