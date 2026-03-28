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
                <Link
                    href="/work/pax-visual-engine"
                    className="flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors font-medium"
                >
                    <ArrowLeft size={18} />
                    Back to Project
                </Link>
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
                        The Visual Intelligence Engine
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-foreground/60 leading-relaxed font-serif italic">
                        Visualising the bridge between latent space creativity and cinematic motion.
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
                            Solving the "Consistency Gap"
                        </h3>
                        <p className="text-background/80! mb-10 text-xl leading-relaxed max-w-4xl font-light">
                            PAX transforms unpredictable generative outputs into a high-fidelity creative pipeline. By mapping persistent identities to complex latent vectors, we enable professional-grade digital storytelling.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-background/10 border border-background/20 rounded-2xl p-6">
                                <h4 className="font-bold text-background! text-2xl mb-2 italic">95%</h4>
                                <p className="text-sm text-background/60! font-bold uppercase tracking-widest">Prompt Alignment</p>
                            </div>
                            <div className="bg-background/10 border border-background/20 rounded-2xl p-6 shadow-xl ring-1 ring-background/30">
                                <h4 className="font-bold text-background! text-2xl mb-2 italic">85%</h4>
                                <p className="text-sm text-background/60! font-bold uppercase tracking-widest">Identity Retention</p>
                            </div>
                            <div className="bg-background/10 border border-background/20 rounded-2xl p-6">
                                <h4 className="font-bold text-background! text-2xl mb-2 italic">&lt; 15s</h4>
                                <p className="text-sm text-background/60! font-bold uppercase tracking-widest">Motion Synthesis</p>
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
                        The Virtual Studio Workflow
                    </h3>
                    <p className="text-foreground/70 mb-12 text-lg max-w-3xl">
                        A seamless 4-step execution layer that maps creative intent to high-performance AI engines.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
                        {[
                            { step: "01", title: "Definitive Look", desc: "User selects features from the Studio Dashboard." },
                            { step: "02", title: "Flux Synthesis", desc: "Astria API processes 4 identity-consistent variations." },
                            { step: "03", title: "Gemini Analysis", desc: "Vision AI analyzes composition for motion physics." },
                            { step: "04", title: "CineMotion", desc: "Instant export to cinematic MP4 loop." }
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
