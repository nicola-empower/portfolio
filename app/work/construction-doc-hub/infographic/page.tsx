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
import { Github, Mail, Shield, Zap, Search, Eye, FileText, Layout, Info, UserCheck, Accessibility, ArrowLeft, Activity, Target, HardHat } from 'lucide-react';
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

const DocControlInfographic = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Dynamic Colors (Strict 4-Color Palette)
  const chartTextColor = isDark ? '#C7B7A3' : '#6D2932'; // Taupe or Maroon
  const chartGridColor = isDark ? 'rgba(199, 183, 163, 0.05)' : 'rgba(109, 41, 50, 0.05)';
  const chartAccent = '#561C24'; // Deep Burgundy

  // Schedule Shielding Data
  const scheduleData = {
    labels: ['Initial Phase', 'Month 2', 'Month 4', 'Month 6', 'Project Handover'],
    datasets: [{
      label: 'Gemini Risk Shielding Score (%)',
      data: [15, 45, 78, 92, 98],
      borderColor: '#561C24',
      backgroundColor: 'rgba(86, 28, 36, 0.1)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#561C24',
      pointBorderColor: isDark ? '#561C24' : '#E8D8C4',
      pointHoverRadius: 6,
      pointRadius: 4
    }]
  };

  const scheduleOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#561C24',
        cornerRadius: 12,
        padding: 12,
        displayColors: false,
        borderWidth: 1,
        borderColor: '#C7B7A3'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: chartGridColor },
        ticks: { color: chartTextColor, font: { weight: 'bold' } as any }
      },
      x: {
        grid: { display: false },
        ticks: { color: chartTextColor, font: { weight: 'bold' } as any }
      }
    }
  };

  // Compliance ROI Data
  const complianceData = {
    labels: ['Traditional (Manual)', 'Standard Enterprise', 'DocControl (AI-Enabled)'],
    datasets: [{
      label: 'Staff Hours Spent on Audit Readiness',
      data: [850, 420, 95],
      backgroundColor: [
        'rgba(109, 41, 50, 0.2)',
        'rgba(199, 183, 163, 0.4)',
        '#561C24'
      ],
      borderRadius: 8
    }]
  };

  const complianceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: '#561C24', cornerRadius: 12, padding: 12 }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: chartGridColor },
        ticks: { color: chartTextColor }
      },
      x: {
        grid: { display: false },
        ticks: { color: chartTextColor }
      }
    }
  };

  // Roadblock Distribution
  const roadblockData = {
    labels: ['Active RFI Suppression', 'Projected Delay Mitigation', 'Risk Surface Reduction'],
    datasets: [{
      data: [65, 25, 10],
      backgroundColor: ['#561C24', '#6D2932', '#C7B7A3'],
      borderWidth: 2,
      borderColor: isDark ? '#561C24' : '#E8D8C4',
      hoverOffset: 10
    }]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500 leading-relaxed overflow-x-hidden">
      <nav className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/work/construction-doc-hub"
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

      <header className="bg-card-bg border-b border-card-border overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-primary/2 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto py-24 px-8 text-center relative z-10 group">
          <div className="flex justify-center mb-12">
            <div className="bg-accent-primary p-5 rounded-3xl shadow-xl ring-8 ring-accent-primary/10 rotate-3 group-hover:rotate-0 transition-transform duration-500 inline-flex items-center justify-center">
              <HardHat className="text-background w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic text-heading mb-6 tracking-tight">
            DocControl <span className="text-accent-primary">Manifesto</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-accent-primary mb-8 uppercase tracking-[0.3em]">
            Proactive Intelligence & Risk Shielding
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-foreground/40 leading-relaxed font-medium italic">
            Transforming construction document control from a simple utility into a 
            strategic shield that protects project margins and schedules.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* The Data Graveyard Problem */}
        <section className="md:col-span-2 bg-accent-primary rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group border border-accent-primary/20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-background/5 rounded-full -mr-64 -mt-64 transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <Activity className="w-10 h-10 text-background" />
              <h3 className="text-4xl md:text-5xl font-serif font-bold italic text-background tracking-tight">
                The "Data Graveyard" Problem
              </h3>
            </div>
            <p className="text-background/80 mb-16 text-2xl font-serif italic leading-relaxed max-w-4xl border-l-8 border-background/20 pl-10">
              For decades, construction management has been treated as a filing task.
              Massive, bloated systems act as "everything buckets" where
              <strong className="text-background"> high-stakes engineering intelligence</strong> is buried under mundane site data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background/10 backdrop-blur-md border border-background/20 rounded-3xl p-10 transition-all hover:bg-background/20">
                <h4 className="font-serif font-bold italic text-background text-4xl mb-4">£12k</h4>
                <p className="text-sm font-bold text-background/60 uppercase tracking-widest">Average loss per incident due to RFI delays.</p>
              </div>
              <div className="bg-background/10 backdrop-blur-md border border-background/20 rounded-3xl p-10 transition-all hover:bg-background/20 shadow-2xl ring-1 ring-background/30">
                <h4 className="font-serif font-bold italic text-background text-4xl mb-4">30%</h4>
                <p className="text-sm font-bold text-background/60 uppercase tracking-widest">Time spent by engineers digging for data.</p>
              </div>
              <div className="bg-background/10 backdrop-blur-md border border-background/20 rounded-3xl p-10 transition-all hover:bg-background/20">
                <h4 className="font-serif font-bold italic text-background text-4xl mb-4">60%</h4>
                <p className="text-sm font-bold text-background/60 uppercase tracking-widest">Reduction in manual tracking using DocControl AI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Risk Mitigation */}
        <section className="bg-card-bg rounded-[3rem] p-12 border border-card-border shadow-sm overflow-hidden text-foreground flex flex-col">
          <h3 className="text-2xl font-serif font-bold italic text-accent-primary mb-2 flex items-center gap-3">
            <Shield className="w-6 h-6" />
            Schedule Shielding
          </h3>
          <p className="text-foreground/40 mb-12 text-xs font-bold uppercase tracking-widest">
            Roadblock Prediction Protocol 2.0
          </p>
          <div className="h-[280px] w-full relative mb-8">
            <Doughnut data={roadblockData} options={{ cutout: '75%', plugins: { legend: { display: false } } }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-4xl font-serif font-bold italic text-heading">65%</span>
              <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Risk Shielding</span>
            </div>
          </div>
          <div className="mt-auto space-y-6">
            <div className="flex border-l-4 border-accent-primary pl-6">
              <p className="text-sm text-foreground/60 font-medium italic"><strong className="text-heading not-italic">RFI Suppression:</strong> Proactive identification of engineering bottlenecks.</p>
            </div>
            <div className="flex border-l-4 border-accent-primary/20 pl-6">
              <p className="text-sm text-foreground/40 font-medium italic"><strong className="text-foreground/60 not-italic">Data Moat:</strong> Proprietary intelligence assets for the firm.</p>
            </div>
          </div>
        </section>

        {/* Audit Readiness Chart */}
        <section className="bg-card-bg rounded-[3rem] p-12 border border-card-border shadow-sm flex flex-col">
          <h3 className="text-2xl font-serif font-bold italic text-heading mb-2">Automated Governance</h3>
          <p className="text-foreground/40 mb-12 text-xs font-bold uppercase tracking-widest">Audit Readiness Efficiency</p>
          <div className="h-[280px] w-full bg-accent-primary/2 rounded-4xl p-8 border border-card-border/50 shadow-inner">
            <Bar data={complianceData} options={complianceOptions} />
          </div>
          <p className="mt-8 text-sm text-foreground/60 font-medium italic leading-relaxed">
            Staff hours redirected from manual auditing to <span className="text-accent-primary font-bold">high-stakes delivery</span>.
          </p>
        </section>

        {/* Intelligence Infrastructure */}
        <section className="md:col-span-2 bg-card-bg rounded-[3rem] p-12 border border-card-border shadow-sm avoid-break">
          <h3 className="text-3xl font-serif font-bold italic text-accent-primary mb-6 flex items-center gap-3 tracking-tight">
            <Zap className="w-8 h-8" />
            Intelligent Infrastructure
          </h3>
          <p className="text-foreground/70 mb-12 text-lg max-w-3xl font-medium italic leading-relaxed">
            Actionable Intelligence is more valuable than simple storage. DocControl acts as a 
            <span className="text-accent-primary font-bold"> Proactive Operating System</span> that shifts document control from passive to predictive.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Roadblock Predictor', desc: 'Analyzing RFI sentiment to predict potential schedule delays.' },
              { step: '02', title: 'Compliance Auditor', desc: 'Real-time verification of submittals against project requirements.' },
              { step: '03', title: 'Health Index', desc: 'Executive dashboard surfacing aggregated project risk KPIs.' },
              { step: '04', title: 'Data Moat', desc: 'Shielding proprietary intelligence for long-term firm valuation.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-8 rounded-3xl shadow-sm border border-card-border relative group hover:border-accent-primary transition-all hover:shadow-md">
                <span className="text-4xl font-serif font-bold italic opacity-10 absolute top-4 right-4 text-accent-primary group-hover:opacity-30 transition-opacity">{item.step}</span>
                <h4 className="font-serif font-bold italic text-xl mb-3 text-heading">{item.title}</h4>
                <p className="text-sm text-foreground/50 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shielding Growth */}
        <section className="md:col-span-2 bg-card-bg rounded-[3rem] p-12 border border-card-border shadow-sm overflow-hidden avoid-break">
          <h3 className="text-2xl font-serif font-bold italic text-heading mb-2">Schedule Shielding Growth</h3>
          <p className="text-foreground/40 mb-12 text-xs font-bold uppercase tracking-widest">The "Strategic Shield" ROI</p>
          <div className="h-[350px] w-full p-8 bg-accent-primary/1 rounded-[2.5rem] border border-card-border/50">
            <Line data={scheduleData} options={scheduleOptions} />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="md:col-span-2 bg-accent-primary/5 rounded-[3rem] p-12 border border-accent-primary/10 mb-12 avoid-break">
          <h3 className="text-xs font-bold text-accent-primary uppercase tracking-[0.3em] mb-10 text-center">Infrastructure Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React 18', 'TypeScript 5.8', 'Next.js 15', 'Supabase',
              'Gemini AI', 'Tailwind CSS', 'Chart.js v4'
            ].map((tech) => (
              <span
                key={tech}
                className="px-8 py-3 rounded-2xl bg-card-bg text-heading font-bold text-sm shadow-sm border border-card-border transition-all hover:border-accent-primary hover:shadow-md cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-24 border-t border-card-border bg-card-bg text-foreground/20 text-[10px] font-bold tracking-[0.5em] uppercase">
        <p className="italic mb-6">
          DocControl Manifesto | The Strategic Shield Roadmap | © Empower 2026
        </p>
        <div className="flex justify-center gap-8">
          <Mail className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity hover:text-accent-primary" />
          <Github className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity hover:text-accent-primary" />
        </div>
      </footer>
    </div>
  );
};

export default DocControlInfographic;
