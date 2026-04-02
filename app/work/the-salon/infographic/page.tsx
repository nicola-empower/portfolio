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
import { Scissors, Heart, Eye, Zap, Info, ArrowLeft, Layout, MousePointer2, TrendingUp, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import FadeIn from '@/components/ui/FadeIn';

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

const SalonInfographicPage = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Dynamic Colors (Luxury Burgundy & Champagne Palette)
  const chartTextColor = isDark ? '#E8D8C4' : '#6D2932'; 
  const chartGridColor = isDark ? 'rgba(199, 183, 163, 0.05)' : 'rgba(109, 41, 50, 0.05)';
  const chartAccent = '#6D2932'; // Burgundy

  // ROI Chart Data (SaaS Trap vs Owned IP)
  const roiData = {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    datasets: [
      {
        label: 'SaaS Rental (Fees + Commissions)',
        data: [12000, 24500, 38000, 52000, 68000],
        borderColor: '#9CA3AF',
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        fill: true,
        borderDash: [5, 5],
        tension: 0.1
      },
      {
        label: 'The Salon OS (Owned Asset)',
        data: [25000, 25000, 25000, 25000, 25000],
        borderColor: '#6D2932',
        backgroundColor: 'rgba(109, 41, 50, 0.1)',
        fill: true,
        tension: 0.1
      }
    ]
  };

  const roiOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        display: true,
        labels: { color: chartTextColor, font: { family: 'Inter', weight: 600 } }
      },
      tooltip: {
        backgroundColor: chartAccent,
        titleColor: '#E8D8C4',
        bodyColor: '#E8D8C4',
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
            callback: (value: any) => `£${value / 1000}k`,
            font: { family: 'Inter', weight: 500 } 
        }
      },
      x: {
        grid: { display: false },
        ticks: { color: chartTextColor, font: { family: 'Inter', weight: 500 } }
      }
    }
  };

  // Triage Efficiency Data
  const triageData = {
    labels: ['9 AM', '11 AM', '1 PM', '3 PM', '5 PM'],
    datasets: [{
      label: 'Gap Conversion Factor',
      data: [15, 45, 90, 60, 120], // Reprsenting minutes of 'leaked' time converted to revenue
      backgroundColor: '#C7B7A3',
      hoverBackgroundColor: '#6D2932',
      borderRadius: 12
    }]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500 leading-relaxed overflow-x-hidden selection:bg-accent-primary selection:text-background">
      {/* Navigation */}
      <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/work/the-salon-os"
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
      <header className="bg-card-bg border-b border-card-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto py-24 px-8 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-heading p-5 rounded-[2rem] shadow-2xl ring-8 ring-accent-primary/5">
              <Scissors className="text-background w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-heading mb-6 tracking-tight">
            The Salon <span className="italic text-accent-secondary">OS</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif font-bold italic text-accent-primary mb-8">
            Architecting the Luxury "Digital Nervous System"
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-foreground/70 leading-relaxed font-light">
            A high-performance technical breakdown of how we replaced fragmented SaaS rental models with a 
            bespoke enterprise operating system.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12 space-y-12">
        
        {/* Core Narrative: The SaaS Trap */}
        <section className="bg-card-bg rounded-[3rem] p-8 md:p-16 border border-card-border shadow-xl relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none">
                <Layout size={400} />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h3 className="text-3xl font-serif font-bold italic text-accent-primary mb-8 flex items-center gap-4 text-heading">
                        <TrendingUp className="w-10 h-10 text-accent-primary" />
                        The ROI Intelligence
                    </h3>
                    <p className="text-foreground/80 mb-8 text-lg leading-relaxed">
                        Most salons "rent their brain". They pay high monthly fees to SaaS platforms and sacrifice 20% of new client revenue to middleman commissions. 
                    </p>
                    <p className="text-foreground/80 mb-12 text-lg leading-relaxed font-bold italic">
                        The Salon OS transforms these "variable costs" into "fixed equity". 
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-6 bg-background/50 rounded-2xl border border-card-border">
                            <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-heading text-lg">£100k+ 5-Year Savings</p>
                                <p className="text-sm text-foreground/60">Eliminating the "Fresha Tax" and base SaaS subscription monthly bleed.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="h-[400px] w-full bg-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-inner border border-card-border">
                    <Line data={roiData} options={roiOptions} />
                </div>
            </div>
        </section>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-foreground">
            {/* Triage Logic */}
            <section className="bg-background rounded-[2.5rem] p-10 border border-card-border shadow-md">
                <h3 className="text-2xl font-serif font-bold italic text-accent-primary mb-6 flex items-center gap-3">
                    <MousePointer2 className="w-8 h-8" />
                    Walk-In Triage 🟢🟡🔴
                </h3>
                <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                    By replacing paper books with a real-time availability matrix, reception can instantly convert idle gaps into booked slots.
                </p>
                <div className="h-[250px] w-full bg-card-bg/50 rounded-2xl p-6 shadow-inner relative border border-card-border">
                    <Bar data={triageData} options={{...roiOptions, indexAxis: 'y' as const}} />
                </div>
            </section>

            {/* AI Vision */}
            <section className="bg-heading rounded-[2.5rem] p-10 text-background shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-secondary/20 blur-3xl rounded-full"></div>
                <h3 className="text-2xl font-serif font-bold italic text-background mb-6 flex items-center gap-3">
                    <Eye className="w-8 h-8 text-accent-secondary" />
                    Gemini AI Vision
                </h3>
                <p className="opacity-80 mb-10 text-lg leading-relaxed">
                    Personalized retail upselling through automated visual analysis. The system "recommends" the salon's physical stock based on client hair/skin profiles.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-background/10 rounded-xl border border-background/10 text-center">
                        <span className="text-accent-secondary text-2xl font-serif block mb-1">20%</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">AOV Increase</span>
                    </div>
                    <div className="p-4 bg-background/10 rounded-xl border border-background/10 text-center">
                        <span className="text-accent-secondary text-2xl font-serif block mb-1">0%</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Inventory Drift</span>
                    </div>
                </div>
            </section>
        </div>

        {/* Technical Architecture (Astro Islands) */}
        <section className="bg-card-bg rounded-[2.5rem] p-12 border border-card-border overflow-hidden relative">
            <h3 className="text-3xl font-serif font-bold italic text-accent-primary mb-12 flex items-center gap-3">
                <Zap className="w-8 h-8" />
                Performance Engineering: Astro Islands
            </h3>
            
            <div className="grid md:grid-cols-3 gap-12">
                <div className="relative">
                    <div className="p-6 bg-background rounded-2xl border border-card-border relative z-10">
                        <h4 className="font-bold text-lg mb-2">Static Shell (Astro)</h4>
                        <p className="text-sm opacity-60">Zero JS marketing pages for 100/100 Lighthouse SEO performance.</p>
                    </div>
                    <div className="hidden md:block absolute top-1/2 left-full w-12 h-[2px] bg-accent-primary/20 -translate-y-1/2"></div>
                </div>
                
                <div className="relative">
                    <div className="p-6 bg-accent-primary text-background rounded-2xl border-2 border-accent-primary/20 relative z-10 shadow-xl">
                        <h4 className="font-bold text-lg mb-2 text-background">Island Hydration</h4>
                        <p className="text-sm text-background/80">Only the Rota and Triage tools load React 19 components.</p>
                    </div>
                     <div className="hidden md:block absolute top-1/2 left-full w-12 h-[2px] bg-accent-primary/20 -translate-y-1/2"></div>
                </div>

                <div className="relative">
                    <div className="p-6 bg-background rounded-2xl border border-card-border relative z-10">
                        <h4 className="font-bold text-lg mb-2">Edge Logic (Gemini)</h4>
                        <p className="text-sm opacity-60">Real-time Vision AI calls handled via secure server-side routes.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Closing Quote/Tagline */}
        <div className="py-24 text-center">
            <FadeIn>
                <h4 className="font-serif text-4xl md:text-5xl font-bold italic text-heading mb-8">
                    "Turning Administrative Gravity <br />
                    <span className="text-accent-secondary">Into Operational Velocity."</span>
                </h4>
            </FadeIn>
        </div>

      </main>

      <footer className="text-center py-16 border-t border-card-border text-foreground/40 bg-card-bg/30">
        <p className="text-sm italic font-medium">
          The Salon OS | System Intelligence Dossier | Visualising Luxury Infrastructure | © Empower 2026
        </p>
      </footer>
    </div>
  );
};

export default SalonInfographicPage;
