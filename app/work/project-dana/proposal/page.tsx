"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Github, Mail } from "lucide-react";

export default function DanaProposalPage() {
    return (
        <main className="light bg-white min-h-screen font-sans text-slate-800 leading-relaxed overflow-x-hidden">
            {/* Navigation Header (Hidden in Print) */}
            <nav className="no-print sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
                <Link
                    href="/work/project-dana"
                    className="flex items-center gap-2 text-slate-500 hover:text-rose transition-colors font-medium"
                >
                    <ArrowLeft size={18} />
                    Back to Project
                </Link>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 bg-rose text-white px-4 py-2 rounded-full font-bold hover:bg-rose/80 transition-all shadow-lg shadow-rose/20 active:scale-95"
                >
                    <Printer size={18} />
                    Print / Save PDF
                </button>
            </nav>

            {/* Custom Styles Tag for Print Precision */}
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    .no-print {
                        display: none !important;
                    }
                    body {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .page-break-before {
                        page-break-before: always !important;
                        break-before: page !important;
                    }
                    .avoid-break-inside {
                        page-break-inside: avoid !important;
                        break-inside: avoid !important;
                    }
                    .content-wrapper {
                        padding: 1.5cm !important;
                    }
                }
                .font-heading {
                    font-family: 'Montserrat', sans-serif;
                }
            `}</style>
 
             {/* Cover Page */}
             <div className="min-h-screen flex flex-col justify-center items-center text-center p-12 bg-white border-b-8 border-[#E91E63]">
                 <img 
                     src="https://empowerdigitalsolutions.co.uk/images/logo.png" 
                     alt="Empower Logo"
                     className="w-32 h-32 rounded-full border-4 border-[#E91E63] mb-8 shadow-xl"
                 />
                 <span className="bg-slate-100 text-slate-500! px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                     CONFIDENTIAL STRATEGIC PROPOSAL
                 </span>
                 <h1 className="text-5xl md:text-7xl mb-4 text-[#8E24AA]! font-bold italic font-heading">
                     Project DANA
                 </h1>
                 <h2 className="text-2xl md:text-3xl font-light mb-12 text-slate-600!">
                     Funding & Development Roadmap
                 </h2>
                 <div className="w-24 h-1 bg-[#E91E63] mb-12"></div>
                 <div className="space-y-2">
                     <p className="text-xl">
                         Prepared for: <span className="font-bold text-slate-900!">Scottish Government / Tech for Good Hubs</span>
                     </p>
                     <p className="text-lg opacity-80 text-slate-500!">
                         Empower Digital Solutions | March 2026
                     </p>
                 </div>
             </div>
 
             <div className="content-wrapper max-w-4xl mx-auto px-8 py-20 md:px-12">
                 {/* Executive Summary */}
                 <section className="mb-20 page-break-before">
                     <h2 className="text-3xl text-[#8E24AA]! font-bold mb-6 border-b-2 border-[#E91E63] pb-2 font-heading">
                         Technical Vision: "Hidden in Plain Sight"
                     </h2>
                     <p className="text-xl mb-8 italic text-slate-700! leading-relaxed font-serif">
                         Project DANA (SafeHaven) is a high-impact "Tech for Good" solution designed to transition from a functional POC to a secure, publicly available life-saving tool.
                     </p>
                     <p className="mb-8 leading-relaxed text-lg text-slate-600!">
                         Survivors of domestic abuse, particularly those experiencing coercive control, often lack a safe way to document incidents. Abusers heavily monitor devices, making traditional journaling or evidence collection dangerous. Project DANA solves the <strong>"Surveillance Gap"</strong> by providing a secure vault disguised as <strong>ChefAI</strong>, a fully functional recipe finder application.
                     </p>
 
                     <h2 className="text-3xl text-[#8E24AA]! font-bold mb-8 border-b-2 border-[#E91E63] pb-2 mt-16 font-heading">
                         The Value Proposition
                     </h2>
                     <div className="grid md:grid-cols-3 gap-6 mb-12">
                         <div className="border-l-4 border-[#E91E63] bg-slate-50 p-6 rounded-r-xl avoid-break-inside">
                             <h3 className="text-lg text-[#8E24AA]! font-bold mb-2 font-heading">Plausible Deniability</h3>
                             <p className="text-sm text-slate-600!">The only safety tool that hides in plain sight within a premium utility app (ChefAI).</p>
                         </div>
                         <div className="border-l-4 border-[#E91E63] bg-slate-50 p-6 rounded-r-xl avoid-break-inside">
                             <h3 className="text-lg text-[#8E24AA]! font-bold mb-2 font-heading">Forensic Accuracy</h3>
                             <p className="text-sm text-slate-600!">Automated legal translation for Scottish/UK Law (Domestic Abuse Act 2018).</p>
                         </div>
                         <div className="border-l-4 border-[#E91E63] bg-slate-50 p-6 rounded-r-xl avoid-break-inside">
                             <h3 className="text-lg text-[#8E24AA]! font-bold mb-2 font-heading">Proactive Safety</h3>
                             <p className="text-sm text-slate-600!">AI-driven escalation sensing to predict and prevent harm before it occurs.</p>
                         </div>
                     </div>
 
                     <div className="overflow-x-auto">
                         <table className="w-full text-left border-collapse border border-slate-200">
                             <thead>
                                 <tr className="bg-slate-900 text-white!">
                                     <th className="p-4 font-bold border border-slate-200 text-white!">Operational Gap</th>
                                     <th className="p-4 font-bold border border-slate-200 text-white!">Project DANA Solution</th>
                                     <th className="p-4 font-bold border border-slate-200 text-white!">Impact</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr className="border-b border-slate-200">
                                     <td className="p-4 font-bold text-slate-900! border border-slate-200">Device Monitoring</td>
                                     <td className="p-4 text-slate-600! border border-slate-200">Dual-purpose decoy interface.</td>
                                     <td className="p-4 font-bold text-[#E91E63]! border border-slate-200">Zero Detection Risk.</td>
                                 </tr>
                                 <tr className="border-b border-slate-200">
                                     <td className="p-4 font-bold text-slate-900! border border-slate-200">Admissibility</td>
                                     <td className="p-4 text-slate-600! border border-slate-200">SHA-256 Hashing & Metadata tracking.</td>
                                     <td className="p-4 font-bold text-[#E91E63]! border border-slate-200">Immutable Evidence.</td>
                                 </tr>
                                 <tr className="border-b border-slate-200">
                                     <td className="p-4 font-bold text-slate-900! border border-slate-200">Coercive Control</td>
                                     <td className="p-4 text-slate-600! border border-slate-200">AI analysis of isolation/financial abuse.</td>
                                     <td className="p-4 font-bold text-[#E91E63]! border border-slate-200">Legal Alignment (DAA 2018).</td>
                                 </tr>
                                 <tr className="border-b border-slate-200">
                                     <td className="p-4 font-bold text-slate-900! border border-slate-200">Crisis Response</td>
                                     <td className="p-4 text-slate-600! border border-slate-200">Ghost notifications & Panic gestures.</td>
                                     <td className="p-4 font-bold text-[#E91E63]! border border-slate-200">Immediate Survivor Protection.</td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                 </section>
 
                 {/* Development Roadmap */}
                 <section className="mb-20 page-break-before">
                     <h2 className="text-3xl text-center text-[#8E24AA]! font-bold mb-12 border-b-4 border-[#E91E63] pb-4 font-heading">
                         Development & Investment Roadmap
                     </h2>
 
                     <div className="space-y-10">
                         {/* Phase 1 */}
                         <div className="flex border border-slate-200 rounded-xl overflow-hidden avoid-break-inside">
                             <div className="w-1/3 p-8 bg-slate-100 flex flex-col justify-center text-center border-r border-slate-200">
                                 <span className="text-[10px] font-bold uppercase text-slate-400! tracking-widest mb-2">Phase 1 (3-4 Months)</span>
                                 <span className="text-xl font-bold text-slate-900!">Security & Infra</span>
                                 <span className="text-2xl text-[#E91E63]! font-bold mt-2">£45k - £60k</span>
                             </div>
                             <div className="w-2/3 p-8 bg-white">
                                 <ul className="space-y-3 text-slate-600! text-sm">
                                     <li className="flex gap-2"><span>•</span> Zero-knowledge encrypted backend (Supabase/Vault).</li>
                                     <li className="flex gap-2"><span>•</span> Professional Penetration Testing & Security Audit.</li>
                                     <li className="flex gap-2"><span>•</span> Legal review of AI-generated witness statements.</li>
                                     <li className="flex gap-2"><span>•</span> Transition from local storage to production-grade E2EE.</li>
                                 </ul>
                             </div>
                         </div>
 
                         {/* Phase 2 */}
                         <div className="flex border-4 border-[#E91E63] rounded-xl overflow-hidden shadow-2xl scale-[1.02] transform transition-transform avoid-break-inside">
                             <div className="w-1/3 p-8 bg-[#E91E63] flex flex-col justify-center text-center text-white!">
                                 <span className="text-[10px] font-bold uppercase opacity-80 tracking-widest mb-2">Phase 2 (3 Months)</span>
                                 <span className="text-xl font-bold">Native & UX</span>
                                 <span className="text-2xl font-bold mt-2">£30k - £45k</span>
                             </div>
                             <div className="w-2/3 p-8 bg-white">
                                 <ul className="space-y-3 text-slate-600! text-sm">
                                     <li className="flex gap-2"><span>•</span> React Native/Expo conversion for iOS & Android.</li>
                                     <li className="flex gap-2"><span>•</span> Advanced "Panic Gestures" (Shake-to-wipe).</li>
                                     <li className="flex gap-2"><span>•</span> Ghost notifications hidden in fake news feeds.</li>
                                     <li className="flex gap-2"><span>•</span> Offline-first AI models for high-risk coverage.</li>
                                 </ul>
                             </div>
                         </div>
 
                         {/* Phase 3 */}
                         <div className="flex border border-slate-200 rounded-xl overflow-hidden avoid-break-inside">
                             <div className="w-1/3 p-8 bg-slate-100 flex flex-col justify-center text-center border-r border-slate-200">
                                 <span className="text-[10px] font-bold uppercase text-slate-400! tracking-widest mb-2">Phase 3 (6 Months)</span>
                                 <span className="text-xl font-bold text-slate-900!">Integration</span>
                                 <span className="text-2xl text-[#E91E63]! font-bold mt-2">£25k - £35k</span>
                             </div>
                             <div className="w-2/3 p-8 bg-white">
                                 <ul className="space-y-3 text-slate-600! text-sm">
                                     <li className="flex gap-2"><span>•</span> Partnership pilot with specialist charities (Women's Aid).</li>
                                     <li className="flex gap-2"><span>•</span> Multi-language support (ESOL accessibility).</li>
                                     <li className="flex gap-2"><span>•</span> Training manuals for charity support workers.</li>
                                     <li className="flex gap-2"><span>•</span> Feedback loops for accessibility optimizations.</li>
                                 </ul>
                             </div>
                         </div>
 
                         <div className="text-right pt-6">
                             <p className="text-slate-500! text-xl font-bold">
                                 Total Funding Recommendation: <span className="text-slate-900! border-b-2 border-[#E91E63]">£120,000 - £150,000</span>
                             </p>
                         </div>
                     </div>
                 </section>
 
                 {/* Strategy & Impact */}
                 <section className="mb-20 page-break-before">
                     <h2 className="text-3xl text-[#8E24AA]! font-bold mb-8 border-b-2 border-[#E91E63] pb-2 font-heading">
                         Strategic Social Impact (ROI)
                     </h2>
                     <div className="grid md:grid-cols-2 gap-8 mt-6">
                         <div className="text-center p-8 bg-slate-900 text-white! rounded-2xl shadow-xl border-b-8 border-[#E91E63] avoid-break-inside">
                             <div className="text-4xl font-bold text-[#E91E63]! mb-2 font-heading">Immutable</div>
                             <div className="text-xs uppercase tracking-widest font-bold opacity-60">Evidence Chain (SHA-256)</div>
                             <p className="text-sm mt-6 opacity-80 text-white! leading-relaxed">
                                 Ensures legal admissibility for Scottish Family Law and Police reporting through verifiable cryptographic hashes.
                             </p>
                         </div>
                         <div className="text-center p-8 bg-slate-900 text-white! rounded-2xl shadow-xl border-b-8 border-[#E91E63] avoid-break-inside">
                             <div className="text-4xl font-bold text-[#E91E63]! mb-2 font-heading">Survivor</div>
                             <div className="text-xs uppercase tracking-widest font-bold opacity-60">Autonomy & Protection</div>
                             <p className="text-sm mt-6 opacity-80 text-white! leading-relaxed">
                                 Providing tools that work under the unique pressures of coercive control without alerting the abuser.
                             </p>
                         </div>
                     </div>
 
                     <div className="mt-16 bg-[#E91E63]/5 border-2 border-[#E91E63] rounded-3xl p-10 shadow-sm avoid-break-inside">
                         <h3 className="text-2xl font-bold text-[#8E24AA]! mb-6 font-heading">Pitch Targets & Funding Sources</h3>
                         <div className="grid md:grid-cols-2 gap-8">
                             <div className="space-y-2">
                                 <h4 className="font-bold text-[#E91E63]! uppercase tracking-wider text-xs">1. Government & Innovation</h4>
                                 <p className="text-slate-600! text-sm leading-relaxed">
                                     Scottish Government / Tech for Good Hubs (Alignment with DAA 2018). Innovate UK Smart Grants.
                                 </p>
                             </div>
                             <div className="space-y-2">
                                 <h4 className="font-bold text-[#E91E63]! uppercase tracking-wider text-xs">2. Community & Charity</h4>
                                 <p className="text-slate-600! text-sm leading-relaxed">
                                     Comic Relief / National Lottery Community Fund. Direct Charity HQ integration (Women's Aid).
                                 </p>
                             </div>
                         </div>
                     </div>
                 </section>
 
                 {/* Governance & Security */}
                 <section className="mb-20 page-break-before">
                     <h2 className="text-3xl text-[#8E24AA]! font-bold mb-8 border-b-2 border-[#E91E63] pb-2 font-heading">
                         Technical Governance
                     </h2>
                     <div className="grid md:grid-cols-2 gap-8">
                         <div className="p-8 bg-slate-50 border-t-4 border-[#E91E63] rounded-b-xl avoid-break-inside">
                             <h4 className="font-bold mb-4 text-[#8E24AA]! font-heading">Zero-Knowledge Protocol</h4>
                             <p className="text-sm text-slate-600! leading-relaxed">
                                 Data is encrypted on-device. Even Empower as the developer cannot access raw survivor logs, satisfying the highest privacy tiers.
                             </p>
                         </div>
                         <div className="p-8 bg-slate-50 border-t-4 border-[#E91E63] rounded-b-xl avoid-break-inside">
                             <h4 className="font-bold mb-4 text-[#8E24AA]! font-heading">Scottish Law Alignment</h4>
                             <p className="text-sm text-slate-600! leading-relaxed">
                                 AI analysis specifically targets criteria from the Domestic Abuse (Scotland) Act 2018, converting trauma logs into forensic statements.
                             </p>
                         </div>
                     </div>
 
                     <div className="mt-20 text-center avoid-break-inside">
                         <p className="text-slate-400! mb-4 italic text-sm">Official POC Development Repository</p>
                         <div className="flex items-center justify-center gap-3 text-2xl font-bold text-[#8E24AA]! hover:text-[#E91E63]! transition-colors">
                             <Github />
                             <span>github.com/nicola-berry/project-dana</span>
                         </div>
                     </div>
                 </section>
 
                 {/* Commitment */}
                 <section className="mt-32 mb-12 py-16 text-center border-t border-slate-100 page-break-before">
                     <h2 className="text-3xl text-[#8E24AA]! font-bold mb-10 inline-block font-heading">
                         The Empower Commitment
                     </h2>
                     <div className="max-w-3xl mx-auto bg-slate-50 p-12 rounded-3xl italic text-slate-700! leading-relaxed shadow-sm text-2xl mb-12 font-serif relative">
                         <div className="absolute top-4 left-4 text-6xl text-[#E91E63]/10">"</div>
                         Built with rage and precision. We are bridging the gap between trauma and justice through technology that refuses to be seen.
                         <div className="absolute bottom-4 right-4 text-6xl text-[#E91E63]/10">"</div>
                     </div>
                     <div className="space-y-1">
                         <p className="font-bold text-xl text-slate-900!">Empower Digital Solutions</p>
                         <div className="flex items-center justify-center gap-2 text-slate-500! font-medium">
                             <Mail size={16} />
                             <span>nicola@empowerdigitalsolutions.co.uk</span>
                         </div>
                         <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300! mt-8 max-w-lg mx-auto leading-relaxed">
                             Disclaimer: This tool is a Proof of Concept (POC) and not a replacement for emergency services (Call 999).
                         </p>
                     </div>
                 </section>
             </div>
         </main>
     );
 }
