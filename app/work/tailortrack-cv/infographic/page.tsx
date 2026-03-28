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

  // Dynamic Colors
  const chartTextColor = isDark ? '#E2E8F0' : '#64748B';
  const chartGridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
  const chartAccent = isDark ? '#c994a4' : '#5B0024';

  // Skill Translation Chart Data
  const skillData = {
    labels: ['Placement Start', 'Month 1', 'Month 2', 'Month 3', 'Final Review'],
    datasets: [{
      label: 'Skills Translated to Workplace-Ready',
      data: [2, 8, 15, 24, 32],
      borderColor: '#E91E63',
      backgroundColor: 'rgba(233, 30, 99, 0.1)',
      fill: true,
      tension: 0.3
    }]
  };

  const skillOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: chartAccent,
        titleColor: isDark ? '#120008' : '#ffffff',
        bodyColor: isDark ? '#120008' : '#ffffff',
        padding: 12,
        cornerRadius: 8
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

  // Efficiency Chart Data
  const efficiencyData = {
    labels: ['Year 1 (Manual)', 'Year 2 (TailorTrack Beta)', 'Projected (Institutional)'],
    datasets: [{
      label: 'Staff Hours Spent per 100 Students',
      data: [1200, 450, 180],
      backgroundColor: [
        '#64748b',
        '#8E24AA',
        '#E91E63'
      ],
      borderRadius: 12
    }]
  };

  const efficiencyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
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
      backgroundColor: ['#E91E63', '#8E24AA', '#cbd5e1'],
      borderWidth: 0,
      hoverOffset: 4
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

      <header className="bg-card-bg border-b border-card-border">
        <div className="max-w-7xl mx-auto py-16 px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-accent-primary p-4 rounded-3xl shadow-lg ring-8 ring-accent-primary/10">
              <Zap className="text-background w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-heading mb-4 tracking-tight">
            TailorTrack AI <span className="text-accent-primary italic">Architecture</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-accent-primary mb-2 uppercase tracking-wide">
            Privacy-First Empowerment Engine
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/60 leading-relaxed">
            Visualising the dual-mission career architecture designed for Independent Professionals
            and the "Independent Me" Institutional Ecosystem.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Core Value Section */}
        <section className="md:col-span-2 bg-accent-primary rounded-3xl p-8 md:p-12 text-background! shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110"></div>
          <div className="relative z-10">
            <h3 className="text-background! mb-4 flex items-center gap-3">
              <Accessibility className="w-8 h-8" />
              The Mission: Closing the "Autonomy Gap"
            </h3>
            <p className="text-background/80! mb-10 text-lg leading-relaxed max-w-4xl">
              Students and professionals with additional needs often face a "cliff edge" of support.
              TailorTrack AI acts as a digital scaffold, translating daily placement efforts into
              <strong> verifiable workplace potential</strong> while maintaining absolute data ownership.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background/10 border border-background/20 rounded-2xl p-6">
                <h4 className="font-bold text-background! text-xl mb-2">90% Efficiency</h4>
                <p className="text-sm text-background/60!">In CV tailoring through AI skill-mapping.</p>
              </div>
              <div className="bg-background/10 border border-background/20 rounded-2xl p-6 shadow-xl ring-1 ring-background/30">
                <h4 className="font-bold text-background! text-xl mb-2">80% Time Saving</h4>
                <p className="text-sm text-background/60!">For institutional mentors and support staff.</p>
              </div>
              <div className="bg-background/10 border border-background/20 rounded-2xl p-6">
                <h4 className="font-bold text-background! text-xl mb-2">100% Privacy</h4>
                <p className="text-sm text-background/60!">Through local-first data architecture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sovereignty Section */}
        <section className="bg-card-bg rounded-3xl p-8 md:p-12 border border-card-border shadow-xl overflow-hidden text-foreground">
          <h3 className="text-2xl font-bold text-accent-primary mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6" />
            Data Sovereignty Model
          </h3>
          <p className="text-foreground/60 mb-8 text-sm">
            Ensuring Special Category Data remains in the user's hands.
          </p>
          <div className="h-[250px] w-full relative">
            <Doughnut data={sovereigntyData} options={{ cutout: '70%', plugins: { legend: { position: 'bottom', labels: { color: chartTextColor } } } }} />
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex border-l-4 border-accent-primary pl-4">
              <p className="text-sm text-foreground/60"><strong>Local Only:</strong> CV drafts, application logs, and placement notes stored client-side.</p>
            </div>
            <div className="flex border-l-4 border-accent-secondary pl-4">
              <p className="text-sm text-foreground/60"><strong>Opt-In Sync:</strong> Structured growth milestones shared with institutional mentors.</p>
            </div>
          </div>
        </section>

        {/* Efficiency Chart */}
        <section className="bg-card-bg rounded-3xl p-8 md:p-12 border border-card-border shadow-sm">
          <h3 className="text-2xl font-bold text-heading mb-2">Institutional Efficiency</h3>
          <p className="text-foreground/60 mb-8 text-sm">Staff hours redirected from admin to support.</p>
          <div className="h-[250px] w-full bg-background rounded-2xl p-6 shadow-inner border border-card-border">
            <Bar data={efficiencyData} options={efficiencyOptions} />
          </div>
        </section>

        {/* Skill Translation Workflow */}
        <section className="md:col-span-2 bg-card-bg rounded-3xl p-8 md:p-12 border border-card-border shadow-sm">
          <h3 className="text-3xl font-bold text-accent-primary mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8" />
            The Skill Translation Engine
          </h3>
          <p className="text-foreground/70 mb-12 text-lg max-w-3xl">
            Our AI doesn't just "fix grammar." It maps placement routines against national
            qualification frameworks (GCSE, Level 1/2) to translate effort into employability data.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Routine Log', desc: 'Student logs placement task (e.g. "Cleaned kitchen").', color: 'var(--accent-primary)' },
              { step: '02', title: 'Skill Extract', desc: 'AI identifies competency (e.g. Hygiene Compliance).', color: 'var(--accent-primary)' },
              { step: '03', title: 'Polish', desc: 'Sentence uplift to professional workplace standard.', color: 'var(--accent-primary)' },
              { step: '04', title: 'Passport', desc: 'Valid skill added to Employment Passport.', color: 'var(--accent-primary)' }
            ].map((item, idx) => (
              <div key={idx} className="bg-background p-6 rounded-2xl shadow-sm border border-card-border relative group hover:border-accent-primary transition-colors">
                <span className="text-3xl font-black opacity-30 absolute top-4 right-4 group-hover:opacity-60 transition-opacity" style={{ color: item.color }}>{item.step}</span>
                <h4 className="font-bold text-lg mb-2" style={{ color: item.color }}>{item.title}</h4>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Growth Tracking */}
        <section className="md:col-span-2 bg-card-bg rounded-3xl p-8 md:p-12 border border-card-border shadow-xl overflow-hidden">
          <h3 className="text-2xl font-bold text-heading mb-2">Empirical Growth Tracking</h3>
          <p className="text-foreground/60 mb-8 text-sm uppercase tracking-widest font-bold">Bridging the "Translation Gap"</p>
          <div className="h-[350px] w-full">
            <Line data={skillData} options={skillOptions} />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="md:col-span-2 bg-accent-secondary/10 rounded-3xl p-8 border border-card-border mb-4">
          <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-6">Empowerment Architecture Stack</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Next.js 15', color: 'var(--accent-primary)' },
              { label: 'React 19', color: 'var(--accent-primary)' },
              { label: 'Tailwind v4', color: 'var(--accent-primary)' },
              { label: 'Gemini 1.5 Pro', color: 'var(--rose)' },
              { label: 'Zustand (State)', color: 'var(--accent-primary)' },
              { label: 'PWA (Service Workers)', color: 'var(--accent-primary)' },
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

      <footer className="text-center py-16 border-t border-card-border text-foreground/40">
        <p className="text-sm italic">
          TailorTrack AI Infographic | The Empowerment Roadmap | © Empower 2026
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <Mail className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" />
          <Github className="w-5 h-5 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" />
        </div>
      </footer>
    </div>
  );
};

export default InfographicPage;
