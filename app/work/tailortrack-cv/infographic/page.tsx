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
import { Github, Mail, Shield, Zap, Search, Eye, FileText, Layout, Info, UserCheck, Accessibility, ArrowLeft } from 'lucide-react';
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

const InfographicPage = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Dynamic Colors (Strict 4-Color Palette)
  const chartTextColor = isDark ? '#C7B7A3' : '#6D2932'; 
  const chartGridColor = isDark ? 'rgba(199, 183, 163, 0.05)' : 'rgba(109, 41, 50, 0.05)';
  const chartAccent = '#561C24';

  // Skill Translation Chart Data
  const skillData = {
    labels: ['Placement Start', 'Month 1', 'Month 2', 'Month 3', 'Final Review'],
    datasets: [{
      label: 'Skills Translated to Workplace-Ready',
      data: [2, 8, 15, 24, 32],
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

  const skillOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#561C24',
        titleColor: '#E8D8C4',
        bodyColor: '#E8D8C4',
        padding: 12,
        cornerRadius: 12,
        displayColors: false,
        borderWidth: 1,
        borderColor: '#C7B7A3'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: chartGridColor, skipLibCheck: true } as any,
        ticks: { color: chartTextColor, font: { weight: 'bold' } as any }
      },
      x: {
        grid: { display: false },
        ticks: { color: chartTextColor, font: { weight: 'bold' } as any }
      }
    }
  };

  // Efficiency Chart Data
  const efficiencyData = {
    labels: ['Year 1 (Manual)', 'Year 2 (TailorTrack Beta)', 'Projected (Institutional)'],
    datasets: [{
      label: 'Staff Hours Spent per 100 Students',
      data: [1200, 450, 180],
      backgroundColor: [
        'rgba(109, 41, 50, 0.2)',
        'rgba(199, 183, 163, 0.4)',
        '#561C24'
      ],
      borderRadius: 8,
      hoverBackgroundColor: '#561C24'
    }]
  };

  const efficiencyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#561C24',
        cornerRadius: 12,
        padding: 12
      }
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

  // Sovereignty Data
  const sovereigntyData = {
    labels: ['Local Device (User Owned)', 'Optional Inst. Sync', 'Third Party'],
    datasets: [{
      data: [90, 10, 0],
      backgroundColor: ['#561C24', 'rgba(109, 41, 50, 0.5)', 'rgba(199, 183, 163, 0.2)'],
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
            href="/work/tailortrack-cv"
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
        <div className="max-w-7xl mx-auto py-24 px-8 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-accent-primary p-5 rounded-3xl shadow-2xl ring-8 ring-accent-primary/10 rotate-3 transition-transform hover:rotate-0 duration-500">
              <Zap className="text-background w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic text-heading mb-6 tracking-tight">
            TailorTrack AI <span className="text-accent-primary">Architecture</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-accent-primary mb-8 uppercase tracking-[0.3em]">
            Privacy-First Empowerment Engine
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-foreground/40 leading-relaxed font-medium italic">
            Visualising the dual-mission career architecture designed for Independent Professionals
            and the "Independent Me" Institutional Ecosystem.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Core Value Section */}
        <section className="md:col-span-2 bg-accent-primary rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group border border-accent-primary/20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-background/5 rounded-full -mr-64 -mt-64 transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <Accessibility className="w-10 h-10 text-background" />
              <h3 className="text-4xl md:text-5xl font-serif font-bold italic text-background tracking-tight">
                Closing the "Autonomy Gap"
              </h3>
            </div>
            <p className="text-background/80 mb-16 text-2xl font-serif italic leading-relaxed max-w-4xl border-l-8 border-background/20 pl-10">
              Students and professionals with additional needs often face a "cliff edge" of support.
              TailorTrack AI acts as a digital scaffold, translating daily placement efforts into
              <strong className="text-background"> verifiable workplace potential</strong> while maintaining absolute data ownership.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background/10 backdrop-blur-md border border-background/20 rounded-3xl p-10 transition-all hover:bg-background/20">
                <h4 className="font-serif font-bold italic text-background text-4xl mb-4">90%</h4>
                <p className="text-sm font-bold text-background/60 uppercase tracking-widest leading-relaxed">Efficiency in CV tailoring through AI skill-mapping.</p>
              </div>
              <div className="bg-background/10 backdrop-blur-md border border-background/20 rounded-3xl p-10 transition-all hover:bg-background/20 shadow-2xl ring-1 ring-background/30">
                <h4 className="font-serif font-bold italic text-background text-4xl mb-4">80%</h4>
                <p className="text-sm font-bold text-background/60 uppercase tracking-widest leading-relaxed">Time Saving for institutional mentors and support staff.</p>
              </div>
              <div className="bg-background/10 backdrop-blur-md border border-background/20 rounded-3xl p-10 transition-all hover:bg-background/20">
                <h4 className="font-serif font-bold italic text-background text-4xl mb-4">100%</h4>
                <p className="text-sm font-bold text-background/60 uppercase tracking-widest leading-relaxed">Privacy Through local-first data architecture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sovereignty Section */}
        <section className="bg-card-bg rounded-[3rem] p-12 border border-card-border shadow-sm overflow-hidden text-foreground flex flex-col">
          <h3 className="text-2xl font-serif font-bold italic text-accent-primary mb-2 flex items-center gap-3">
            <Shield className="w-6 h-6" />
            Data Sovereignty
          </h3>
          <p className="text-foreground/40 mb-12 text-xs font-bold uppercase tracking-widest">
            Ownership Protocol v1.0
          </p>
          <div className="h-[280px] w-full relative mb-8">
            <Doughnut data={sovereigntyData} options={{ cutout: '75%', plugins: { legend: { display: false } } }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-4xl font-serif font-bold italic text-heading">90%</span>
              <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Sovereign</span>
            </div>
          </div>
          <div className="mt-auto space-y-6">
            <div className="flex border-l-4 border-accent-primary pl-6">
              <p className="text-sm text-foreground/60 font-medium italic"><strong className="text-heading not-italic">Local Only:</strong> CV drafts and application logs stored client-side.</p>
            </div>
            <div className="flex border-l-4 border-accent-primary/20 pl-6">
              <p className="text-sm text-foreground/40 font-medium italic"><strong className="text-foreground/60 not-italic">Opt-In Sync:</strong> Milestones shared with institutional mentors.</p>
            </div>
          </div>
        </section>

        {/* Efficiency Chart */}
        <section className="bg-card-bg rounded-[3rem] p-12 border border-card-border shadow-sm flex flex-col">
          <h3 className="text-2xl font-serif font-bold italic text-heading mb-2">Institutional ROI</h3>
          <p className="text-foreground/40 mb-12 text-xs font-bold uppercase tracking-widest">Administrative Load reduction</p>
          <div className="h-[280px] w-full bg-accent-primary/2 rounded-4xl p-8 border border-card-border/50 shadow-inner">
            <Bar data={efficiencyData} options={efficiencyOptions} />
          </div>
          <p className="mt-8 text-sm text-foreground/60 font-medium italic leading-relaxed">
            Staff hours redirected from manual data entry to <span className="text-accent-primary font-bold">high-impact support</span>.
          </p>
        </section>

        {/* Skill Translation Workflow */}
        <section className="md:col-span-2 bg-card-bg rounded-[3rem] p-12 border border-card-border shadow-sm avoid-break">
          <h3 className="text-3xl font-serif font-bold italic text-accent-primary mb-6 flex items-center gap-3 tracking-tight">
            <Zap className="w-8 h-8" />
            The Skill Translation Engine
          </h3>
          <p className="text-foreground/70 mb-12 text-lg max-w-3xl font-medium italic leading-relaxed">
            Our AI doesn't just "fix grammar." It maps placement routines against national
            qualification frameworks (GCSE, Level 1/2) to translate effort into <span className="text-accent-primary font-bold">employability data</span>.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Routine Log', desc: 'Student logs placement task (e.g. "Cleaned kitchen").' },
              { step: '02', title: 'Skill Extract', desc: 'AI identifies competency (e.g. Hygiene Compliance).' },
              { step: '03', title: 'Polish', desc: 'Sentence uplift to professional workplace standard.' },
              { step: '04', title: 'Passport', desc: 'Valid skill added to Employment Passport.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-8 rounded-3xl shadow-sm border border-card-border relative group hover:border-accent-primary transition-all hover:shadow-md">
                <span className="text-4xl font-serif font-bold italic opacity-10 absolute top-4 right-4 text-accent-primary group-hover:opacity-30 transition-opacity">{item.step}</span>
                <h4 className="font-serif font-bold italic text-xl mb-3 text-heading">{item.title}</h4>
                <p className="text-sm text-foreground/50 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Growth Tracking */}
        <section className="md:col-span-2 bg-card-bg rounded-[3rem] p-12 border border-card-border shadow-sm overflow-hidden avoid-break">
          <h3 className="text-2xl font-serif font-bold italic text-heading mb-2">Empirical Growth Tracking</h3>
          <p className="text-foreground/40 mb-12 text-xs font-bold uppercase tracking-widest">Bridging the "Translation Gap"</p>
          <div className="h-[350px] w-full p-8 bg-accent-primary/1 rounded-[2.5rem] border border-card-border/50">
            <Line data={skillData} options={skillOptions} />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="md:col-span-2 bg-accent-primary/5 rounded-[3rem] p-12 border border-accent-primary/10 mb-12 avoid-break">
          <h3 className="text-xs font-bold text-accent-primary uppercase tracking-[0.3em] mb-10 text-center">Empowerment Architecture Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Next.js 15', 'React 19', 'Tailwind v4', 'Gemini 1.5 Pro',
              'Zustand', 'PWA Architecture', 'Chart.js v4'
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
          TailorTrack AI Infographic | The Empowerment Roadmap | © Empower 2026
        </p>
        <div className="flex justify-center gap-8">
          <Mail className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity hover:text-accent-primary" />
          <Github className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity hover:text-accent-primary" />
        </div>
      </footer>
    </div>
  );
};

export default InfographicPage;
