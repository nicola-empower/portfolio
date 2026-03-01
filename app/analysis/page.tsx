"use client";

import React, { useState, useMemo } from 'react';
import {
    TrendingUp,
    ExternalLink,
    Target,
    Layers,
    BarChart,
    Zap,
    ShoppingBag,
    Layout,
    ShieldCheck,
    Heart,
    Wrench,
    ChevronRight,
    Search,
    Compass,
    Globe,
    Briefcase,
    LucideIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    id: number;
    name: string;
    category: string;
    license: string;
    exit: string;
    marketability: string;
    platform: string;
    icon: LucideIcon;
}

const projects: Project[] = [
    { id: 24, name: "Empower VA (Agency Engine)", category: "Agency Engine", license: "£299 - £499", exit: "£15,000 - £30,000", marketability: "Very High", platform: "Acquire.com", icon: Briefcase },
    { id: 16, name: "Automation OS", category: "Agency OS", license: "£499", exit: "£12,000 - £25,000", marketability: "Very High", platform: "Acquire.com", icon: Layers },
    { id: 17, name: "Social Genie", category: "AI SaaS", license: "£199 - £325", exit: "£12,000 - £20,000", marketability: "Very High", platform: "Acquire.com", icon: Zap },
    { id: 25, name: "Digital Solutions (Sales Funnel)", category: "Sales Funnel", license: "N/A", exit: "£10,000 - £20,000", marketability: "Very High", platform: "Acquire.com", icon: ExternalLink },
    { id: 14, name: "Liam's Match Day", category: "Independence", license: "£149 - £249", exit: "£10,000 - £15,000", marketability: "Very High", platform: "Acquire.com", icon: Heart },
    { id: 7, name: "OpsCommand", category: "Business OS", license: "£319 - £449", exit: "£12,000 - £24,000", marketability: "Very High", platform: "Acquire.com", icon: Layout },
    { id: 1, name: "The Gym (GymOS)", category: "Enterprise SaaS", license: "£319 - £475", exit: "£6,500 - £12,000+", marketability: "Very High", platform: "Acquire.com", icon: BarChart },
    { id: 18, name: "VowSuite", category: "Wedding SaaS", license: "£249 - £399", exit: "£8,000 - £15,000", marketability: "Very High", platform: "Acquire.com", icon: Layout },
    { id: 20, name: "Trades Booking", category: "Vertical SaaS", license: "£219 - £349", exit: "£7,000 - £12,000", marketability: "Very High", platform: "Acquire.com", icon: Wrench },
    { id: 9, name: "Empower Command Centre", category: "Digital Intel", license: "£399", exit: "£8,000 - £16,000", marketability: "High", platform: "Acquire.com", icon: Layers },
    { id: 19, name: "Urban Stay", category: "PropTech SaaS", license: "£179 - £289", exit: "£6,000 - £10,000", marketability: "Very High", platform: "Acquire.com", icon: Target },
    { id: 26, name: "Project Voyager", category: "Travel AI", license: "£149 - £189", exit: "£5,000 - £8,000", marketability: "High", platform: "Acquire.com", icon: Globe },
    { id: 2, name: "The Salon (Salon OS)", category: "Enterprise SaaS", license: "£239 - £399", exit: "£4,000 - £8,000", marketability: "Very High", platform: "Acquire.com", icon: Heart },
    { id: 10, name: "PAX (Visual Engine)", category: "Visual/AI", license: "£199", exit: "£4,000 - £10,000", marketability: "High", platform: "Acquire.com", icon: Zap },
    { id: 15, name: "Reclaim", category: "Wellness", license: "£89 - £149", exit: "£5,000 - £7,500", marketability: "High", platform: "Lemon Squeezy", icon: ShieldCheck },
    { id: 27, name: "My Travel Planner", category: "Personal OS", license: "£59 - £89", exit: "£4,000 - £7,000", marketability: "Very High", platform: "Lemon Squeezy", icon: Compass },
    { id: 12, name: "ContentFlow Pro", category: "Social Suite", license: "£159 - £249", exit: "£3,200 - £6,000", marketability: "Very High", platform: "Lemon Squeezy", icon: ExternalLink },
    { id: 8, name: "LeadFlow", category: "Marketing Tool", license: "£99 - £149", exit: "£2,800 - £4,800", marketability: "High", platform: "Lemon Squeezy", icon: TrendingUp },
    { id: 11, name: "Project Dana (v2)", category: "Safety Tech", license: "£120", exit: "£4,000+", marketability: "Impact", platform: "Support Hub", icon: ShieldCheck },
    { id: 13, name: "Trades Hub", category: "Template Bundle", license: "£249", exit: "£4,000 - £8,000", marketability: "High", platform: "Lemon Squeezy", icon: Wrench },
    { id: 21, name: "Portfolio Suite", category: "Portfolios", license: "£79 - £129", exit: "£4,000 - £8,000", marketability: "High", platform: "Lemon Squeezy", icon: Layout },
    { id: 22, name: "Logistics Plan", category: "Logistics", license: "£120 - £180", exit: "£3,000 - £5,000", marketability: "High", platform: "B2B Market", icon: Globe },
    { id: 3, name: "Empower Sync", category: "Micro-SaaS", license: "£119 - £159", exit: "£2,000 - £3,600", marketability: "Very High", platform: "Acquire.com", icon: Zap },
    { id: 4, name: "Nourish (Tea)", category: "Lifestyle / AI", license: "£65 - £99", exit: "£2,000 - £4,000", marketability: "High", platform: "Lemon Squeezy", icon: ShoppingBag },
    { id: 5, name: "VAAssist", category: "Vertical SaaS", license: "£79 - £119", exit: "£1,200 - £2,800", marketability: "High", platform: "Lemon Squeezy", icon: Target },
    { id: 23, name: "Sub Slayer", category: "Micro-SaaS", license: "£29 - £49", exit: "£2,000 - £4,000", marketability: "High", platform: "Lemon Squeezy", icon: TrendingUp },
    { id: 6, name: "Finance Ninja", category: "Finance", license: "£39 - £65", exit: "£800 - £1,600", marketability: "Med-High", platform: "Lemon Squeezy", icon: TrendingUp },
    { id: 28, name: "Medical-Dental OS", category: "Enterprise SaaS", license: "£399+", exit: "£15,000 - £25,000", marketability: "Very High", platform: "Acquire.com", icon: ShieldCheck },
    { id: 29, name: "Pets-Vets OS", category: "Vertical SaaS", license: "£249+", exit: "£10,000 - £18,000", marketability: "High", platform: "Acquire.com", icon: Heart }
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function StrategicAnalysisPage() {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = useMemo(() => {
        return projects.filter(p => {
            const matchesFilter = filter === 'All' || p.category === filter;
            const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.category.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }, [filter, searchTerm]);

    return (
        <div className="min-h-screen bg-background p-4 md:p-8 text-foreground font-sans selection:bg-accent-primary/20">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6"
                >
                    <div className="space-y-1">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-heading">
                            Project Strategic Analysis
                        </h1>
                        <p className="text-foreground/70 text-lg flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-accent-primary"></span>
                            32+ Projects | Authority Portfolio | Feb 2026
                        </p>
                    </div>
                    <div className="bg-white/50 dark:bg-accent-primary/5 backdrop-blur-sm p-6 rounded-3xl border border-accent-secondary/30 shadow-sm flex items-center gap-5 min-w-[280px]">
                        <div className="bg-accent-primary/10 p-3 rounded-2xl text-accent-primary">
                            <TrendingUp size={32} />
                        </div>
                        <div>
                            <p className="text-xs text-foreground/50 uppercase font-bold tracking-widest">Total Portfolio Exit</p>
                            <p className="text-3xl font-bold text-heading">£310k - £500k+</p>
                        </div>
                    </div>
                </motion.div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-6 mb-10">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-primary/40 group-focus-within:text-accent-primary transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search 32+ projects..."
                            className="w-full pl-12 pr-6 py-4 rounded-2xl border border-accent-secondary/40 bg-white/40 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary transition-all placeholder:text-foreground/30 text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3 overflow-x-auto py-2 no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2.5 rounded-2xl text-sm font-bold tracking-wide uppercase transition-all shrink-0 ${filter === cat
                                    ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/30'
                                    : 'bg-white/50 dark:bg-accent-primary/5 text-foreground/60 border border-accent-secondary/20 hover:border-accent-primary/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => {
                            const IconComponent = project.icon;
                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-accent-secondary/30 p-7 hover:shadow-2xl hover:shadow-accent-primary/10 hover:border-accent-primary/40 transition-all group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="p-4 rounded-2xl bg-accent-primary/5 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                                <IconComponent size={28} />
                                            </div>
                                            <span className={`text-[11px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest ${project.marketability === 'Very High' ? 'bg-accent-primary/10 text-accent-primary'
                                                : 'bg-foreground/5 text-foreground/70'}`}>
                                                {project.marketability} Demand
                                            </span>
                                        </div>
                                        <h3 className="font-serif font-bold text-2xl text-heading group-hover:text-accent-primary transition-colors leading-tight">
                                            {project.name}
                                        </h3>
                                        <p className="text-foreground/40 text-xs mt-1 mb-6 uppercase font-black tracking-widest flex items-center gap-2">
                                            <span className="w-4 h-px bg-accent-primary/30"></span>
                                            {project.category}
                                        </p>

                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center text-sm border-b border-foreground/5 pb-3">
                                                <span className="text-foreground/50 font-medium flex items-center gap-2">
                                                    <ShoppingBag size={16} className="text-accent-primary" /> Licensing
                                                </span>
                                                <span className="font-bold text-heading">{project.license}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm border-b border-foreground/5 pb-3">
                                                <span className="text-foreground/50 font-medium flex items-center gap-2">
                                                    <TrendingUp size={16} className="text-accent-primary" /> Full Exit
                                                </span>
                                                <span className="font-bold text-accent-primary">{project.exit}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 flex items-center justify-between border-t border-accent-secondary/10">
                                        <span className="text-[12px] font-bold text-foreground/40 flex items-center gap-2">
                                            Market: <span className="text-heading/80 uppercase tracking-tighter">{project.platform}</span>
                                        </span>
                                        <button className="text-accent-primary bg-accent-primary/5 hover:bg-accent-primary hover:text-white p-2 rounded-xl transition-all duration-300">
                                            <ChevronRight size={22} />
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>



                <div className="text-center text-foreground/30 text-xs py-12 font-bold tracking-[0.3em] uppercase">
                    Valuations benchmarks via Acquire.com & Lemon Squeezy | © Empower Digital 2026
                </div>

            </div>
        </div>
    );
}
