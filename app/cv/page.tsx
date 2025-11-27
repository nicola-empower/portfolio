"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ui/ContactForm";
import { MapPin, Globe, Code, Database, Layout, Terminal, Briefcase, GraduationCap, Heart, Star, ArrowLeft } from "lucide-react";

export default function CVPage() {
    return (
        <main className="pt-24 pb-12 bg-cream dark:bg-plum-dark min-h-screen transition-colors duration-500">
            <div className="container mx-auto px-6 mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-charcoal/60 dark:text-cream/60 hover:text-rose transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Back to Home</span>
                </Link>
            </div>

            {/* 1. Hero / Header Info */}
            <section className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-charcoal dark:text-cream mb-4">
                        Nicola Berry
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-charcoal/60 dark:text-cream/60 mb-6">
                        <MapPin size={18} />
                        <span className="text-lg">Falkirk, Scotland</span>
                    </div>
                    <h2 className="font-sans text-2xl md:text-3xl font-medium text-rose mb-4">
                        Full Stack Developer & Business Process Architect
                    </h2>
                    <p className="font-serif italic text-xl text-charcoal/80 dark:text-cream/80 mb-8">
                        "Bridging the gap between Business Operations and Software Engineering."
                    </p>
                    <p className="font-sans text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto leading-relaxed">
                        I don't just write code; I build business engines. With a background in operations, I thoroughly enjoy creating website applications, dynamic websites, internal business tools, white-label SaaS platforms and automation solutions that eliminate friction and drive ROI.
                    </p>
                </motion.div>
            </section>

            {/* 2. The "About Me" Bio */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto bg-white/50 dark:bg-charcoal/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-charcoal/5 dark:border-cream/5">
                    <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-cream mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-rose rounded-full"></span>
                        About Me
                    </h3>
                    <div className="space-y-6 text-lg text-charcoal/80 dark:text-cream/80 leading-relaxed font-sans">
                        <p>
                            "My path to software engineering wasn't traditional and that is my greatest asset. With over a decade spent in high-pressure care environments and direct sales, I learned to anticipate needs, manage crises, and communicate clearly long before I wrote my first line of code.
                        </p>
                        <p>
                            After founding <strong className="text-charcoal dark:text-cream">Empower Virtual Assistant Services</strong> to help businesses streamline their operations, I realised that the true bottleneck wasn't just administration; it was the lack of bespoke, intelligent software; none currently meet the full needs of every business. I pivoted to engineering to build the solutions my clients couldn't find.
                        </p>
                        <p>
                            Today, I combine that deep operational logic with a modern tech stack (React, TypeScript, Next.js). I don't just build websites; I build platforms like <strong className="text-charcoal dark:text-cream">VowSuite</strong>: resilient, intuitive, and designed with a level of empathy and efficiency that you only get from living a life fully lived. As a mum of three, I know that time is our most valuable currency, so I build software that saves it."
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. The "Toolkit" (Tech Stack) */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-cream mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-rose rounded-full"></span>
                        The Toolkit
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/50 dark:bg-charcoal/50 p-6 rounded-xl border border-charcoal/5 dark:border-cream/5 hover:border-rose/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4 text-rose">
                                <Code size={24} />
                                <h4 className="font-bold text-lg text-charcoal dark:text-cream">Frontend Core</h4>
                            </div>
                            <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed">
                                React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3
                            </p>
                        </div>
                        <div className="bg-white/50 dark:bg-charcoal/50 p-6 rounded-xl border border-charcoal/5 dark:border-cream/5 hover:border-rose/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4 text-rose">
                                <Layout size={24} />
                                <h4 className="font-bold text-lg text-charcoal dark:text-cream">Styling & UI</h4>
                            </div>
                            <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed">
                                Tailwind CSS, Framer Motion, CSS Modules, Responsive Design
                            </p>
                        </div>
                        <div className="bg-white/50 dark:bg-charcoal/50 p-6 rounded-xl border border-charcoal/5 dark:border-cream/5 hover:border-rose/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4 text-rose">
                                <Database size={24} />
                                <h4 className="font-bold text-lg text-charcoal dark:text-cream">Backend & Data</h4>
                            </div>
                            <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed">
                                Node.js, Express.js, MongoDB, Mongoose, Firebase, Supabase, REST APIs, Google Apps Script
                            </p>
                        </div>
                        <div className="bg-white/50 dark:bg-charcoal/50 p-6 rounded-xl border border-charcoal/5 dark:border-cream/5 hover:border-rose/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4 text-rose">
                                <Terminal size={24} />
                                <h4 className="font-bold text-lg text-charcoal dark:text-cream">Tools & Ecosystem</h4>
                            </div>
                            <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed">
                                Git, GitHub, Vercel, Netlify, Google Cloud, VS Code, Redux, Tanstack Query, NextAuth
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Professional Experience */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-cream mb-12 flex items-center gap-3">
                        <span className="w-8 h-1 bg-rose rounded-full"></span>
                        Professional Experience
                    </h3>
                    <div className="space-y-12 relative border-l-2 border-rose/20 ml-3 pl-8 md:pl-12">
                        {/* 2025 - Present | Founder & Lead Developer */}
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-rose border-4 border-cream dark:border-plum-dark" />
                            <div className="mb-2">
                                <span className="text-sm font-bold text-rose uppercase tracking-wider">2025 – Present</span>
                                <h4 className="text-xl font-bold text-charcoal dark:text-cream mt-1">Founder & Lead Developer</h4>
                                <p className="text-charcoal/60 dark:text-cream/60 font-medium">Empower Digital Solutions</p>
                            </div>
                            <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed mb-4">
                                Architecting and deploying full-stack web applications and premium web designs.
                            </p>
                            <div className="bg-white/30 dark:bg-charcoal/30 p-4 rounded-lg border border-charcoal/5 dark:border-cream/5">
                                <p className="text-sm font-bold text-charcoal/80 dark:text-cream/80 mb-2 uppercase tracking-wide">Selected Projects:</p>
                                <ul className="space-y-2 text-sm text-charcoal/70 dark:text-cream/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-rose mt-1.5">•</span>
                                        <span><strong className="text-charcoal dark:text-cream">VowSuite:</strong> White-Label SaaS Platform for Wedding Planners.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-rose mt-1.5">•</span>
                                        <span><strong className="text-charcoal dark:text-cream">The Zen Den:</strong> High-performance wellness studio platform.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-rose mt-1.5">•</span>
                                        <span><strong className="text-charcoal dark:text-cream">Bistro 44:</strong> Interactive dining experience & reservation engine.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-rose mt-1.5">•</span>
                                        <span><strong className="text-charcoal dark:text-cream">AURA:</strong> Cinematic personal branding platform.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 2025 - Present | Automation Engineer */}
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-rose border-4 border-cream dark:border-plum-dark" />
                            <div className="mb-2">
                                <span className="text-sm font-bold text-rose uppercase tracking-wider">2025 – Present</span>
                                <h4 className="text-xl font-bold text-charcoal dark:text-cream mt-1">Automation Engineer</h4>
                                <p className="text-charcoal/60 dark:text-cream/60 font-medium">Empower Automation</p>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-charcoal/70 dark:text-cream/70">
                                <li>Designing bespoke Google Apps Script solutions to bridge API gaps.</li>
                                <li>Transforming manual business workflows into automated systems.</li>
                            </ul>
                        </div>

                        {/* 2020 - 2025 | Operations Manager */}
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-rose border-4 border-cream dark:border-plum-dark" />
                            <div className="mb-2">
                                <span className="text-sm font-bold text-rose uppercase tracking-wider">2020 – 2025</span>
                                <h4 className="text-xl font-bold text-charcoal dark:text-cream mt-1">Operations Manager</h4>
                                <p className="text-charcoal/60 dark:text-cream/60 font-medium">Empower Virtual Assistant Services</p>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-charcoal/70 dark:text-cream/70">
                                <li>Founded and scaled a virtual assistance agency, managing business finances, GDPR compliance, and operational systems.</li>
                                <li><em className="text-charcoal/90 dark:text-cream/90 not-italic font-medium">The Pivot:</em> Realised 80% of admin tasks could be solved with better code, sparking my transition to engineering.</li>
                            </ul>
                        </div>

                        {/* 2014 - 2020 | Professional Care & Advocacy */}
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-rose border-4 border-cream dark:border-plum-dark" />
                            <div className="mb-2">
                                <span className="text-sm font-bold text-rose uppercase tracking-wider">2014 – 2020</span>
                                <h4 className="text-xl font-bold text-charcoal dark:text-cream mt-1">Professional Care & Advocacy</h4>
                                <p className="text-charcoal/60 dark:text-cream/60 font-medium">Private & Public Sector</p>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-charcoal/70 dark:text-cream/70">
                                <li><strong>Role:</strong> Dedicated care professional and advocate for vulnerable individuals.</li>
                                <li><strong>Transferable Skills:</strong> Crisis management, high-pressure decision making and unwavering resilience.</li>
                            </ul>
                        </div>

                        {/* 2010 - 2014 | International Experience */}
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-rose border-4 border-cream dark:border-plum-dark" />
                            <div className="mb-2">
                                <span className="text-sm font-bold text-rose uppercase tracking-wider">2010 – 2014</span>
                                <h4 className="text-xl font-bold text-charcoal dark:text-cream mt-1">International Experience (North Cyprus)</h4>
                                <p className="text-charcoal/60 dark:text-cream/60 font-medium">Various Sectors</p>
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-charcoal/70 dark:text-cream/70">
                                <li><strong>Roles:</strong> Teaching Assistant, Sales, Hospitality & Professional Modelling.</li>
                                <li><strong>Impact:</strong> Developed cultural adaptability and strong communication skills. Teaching honed my ability to explain complex concepts, while living abroad built self-reliance.</li>
                            </ul>
                        </div>

                        {/* 2003 - 2010 | Sales & Customer Service */}
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-rose border-4 border-cream dark:border-plum-dark" />
                            <div className="mb-2">
                                <span className="text-sm font-bold text-rose uppercase tracking-wider">2003 – 2010</span>
                                <h4 className="text-xl font-bold text-charcoal dark:text-cream mt-1">Sales & Customer Service</h4>
                                <p className="text-charcoal/60 dark:text-cream/60 font-medium">Various Roles</p>
                            </div>
                            <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed">
                                <strong>Impact:</strong> A solid foundation in direct sales, lead generation, and identifying client needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Education & Languages */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div>
                        <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-cream mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-rose rounded-full"></span>
                            Education
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-white/50 dark:bg-charcoal/50 p-6 rounded-xl border border-charcoal/5 dark:border-cream/5">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-bold text-lg text-charcoal dark:text-cream">HND Business Administration</h4>
                                    <span className="text-xs font-bold bg-rose/10 text-rose px-2 py-1 rounded-full">SCQF Level 8</span>
                                </div>
                                <p className="text-sm text-charcoal/60 dark:text-cream/60 mb-3">Scotland</p>
                                <p className="text-charcoal/70 dark:text-cream/70 text-sm mb-2">Focus: Business Law, Economics, Financial Management.</p>
                                <p className="text-charcoal/70 dark:text-cream/70 text-sm italic">Relevance: Provides the business logic foundation for my software architecture.</p>
                            </div>

                            <div className="bg-white/50 dark:bg-charcoal/50 p-6 rounded-xl border border-charcoal/5 dark:border-cream/5">
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-bold text-lg text-charcoal dark:text-cream">Scottish Highers</h4>
                                    <span className="text-xs font-bold bg-rose/10 text-rose px-2 py-1 rounded-full">SCQF Level 6</span>
                                </div>
                                <ul className="space-y-1 text-sm text-charcoal/70 dark:text-cream/70">
                                    <li><strong>STEM:</strong> Mathematics, Chemistry.</li>
                                    <li><strong>Languages:</strong> English, Spanish, French.</li>
                                    <li><strong>Vocational:</strong> Hospitality.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-cream mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-rose rounded-full"></span>
                            Languages
                        </h3>
                        <div className="bg-white/50 dark:bg-charcoal/50 p-6 rounded-xl border border-charcoal/5 dark:border-cream/5 h-full">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium text-charcoal dark:text-cream">English</span>
                                        <span className="text-rose text-sm">Native</span>
                                    </div>
                                    <div className="w-full bg-charcoal/10 dark:bg-cream/10 rounded-full h-2">
                                        <div className="bg-rose h-2 rounded-full w-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium text-charcoal dark:text-cream">Spanish</span>
                                        <span className="text-rose text-sm">Higher Proficiency (Academic)</span>
                                    </div>
                                    <div className="w-full bg-charcoal/10 dark:bg-cream/10 rounded-full h-2">
                                        <div className="bg-rose h-2 rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium text-charcoal dark:text-cream">French</span>
                                        <span className="text-rose text-sm">Higher Proficiency (Academic)</span>
                                    </div>
                                    <div className="w-full bg-charcoal/10 dark:bg-cream/10 rounded-full h-2">
                                        <div className="bg-rose h-2 rounded-full w-[70%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium text-charcoal dark:text-cream">Turkish</span>
                                        <span className="text-rose text-sm">Conversational</span>
                                    </div>
                                    <div className="w-full bg-charcoal/10 dark:bg-cream/10 rounded-full h-2">
                                        <div className="bg-rose h-2 rounded-full w-[40%]"></div>
                                    </div>
                                    <p className="text-xs text-charcoal/50 dark:text-cream/50 mt-1">(Acquired via residence in TRNC)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. The "Superpowers" (Soft Skills) */}
            <section className="container mx-auto px-6 mb-24">
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-cream mb-8 flex items-center gap-3">
                        <span className="w-8 h-1 bg-rose rounded-full"></span>
                        The Superpowers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4 p-6 bg-rose/5 rounded-xl border border-rose/10">
                            <div className="shrink-0 w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center text-rose">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-charcoal dark:text-cream mb-1">Operational Intelligence</h4>
                                <p className="text-charcoal/70 dark:text-cream/70 text-sm">I see the business flaw before I write the code fix.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 bg-rose/5 rounded-xl border border-rose/10">
                            <div className="shrink-0 w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center text-rose">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-charcoal dark:text-cream mb-1">Crisis Management</h4>
                                <p className="text-charcoal/70 dark:text-cream/70 text-sm">Honed during 10 years in care; code bugs don't panic me.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 bg-rose/5 rounded-xl border border-rose/10">
                            <div className="shrink-0 w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center text-rose">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-charcoal dark:text-cream mb-1">Communication</h4>
                                <p className="text-charcoal/70 dark:text-cream/70 text-sm">I speak "Client", "Designer", and "Developer."</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 bg-rose/5 rounded-xl border border-rose/10">
                            <div className="shrink-0 w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center text-rose">
                                <Star size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-charcoal dark:text-cream mb-1">Resilience</h4>
                                <p className="text-charcoal/70 dark:text-cream/70 text-sm">I solve problems and love a challenge.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Contact Form */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-cream mb-8 text-center">
                        Let's Build Something Great
                    </h3>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
