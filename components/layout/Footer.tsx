"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#4A0E0E] transition-colors duration-500 border-t border-[#D4A84F]/10 pt-20 pb-8 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
                    {/* Left: Brand */}
                    <div className="flex flex-col items-center md:items-start space-y-8">
                        <Link href="/" className="group transition-transform hover:scale-105 duration-300">
                            <img 
                                src="/logo.png" 
                                alt="Nicola Berry Signature" 
                                className="w-24 h-24 md:w-28 md:h-28 object-contain brightness-110"
                            />
                        </Link>
                        <div className="space-y-6 text-center md:text-left">
                            <div className="space-y-2">
                                <h3 className="font-serif text-3xl font-bold text-white">
                                    Empower Digital Solutions
                                </h3>
                                <p className="font-sans text-sm font-medium tracking-widest uppercase text-[#D4A84F]">
                                    Code. Automation. Freedom.
                                </p>
                            </div>
                            <div className="pt-4 flex justify-center md:justify-start">
                                <img 
                                    src="/smefooter.png" 
                                    alt="SME News Award 2026" 
                                    className="w-full max-w-[280px] md:max-w-xs h-auto opacity-100 transition-opacity duration-300 brightness-110"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Middle: Navigation */}
                    <div className="text-center space-y-4">
                        <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-[#D4A84F]/40 mb-6">
                            Explore
                        </h4>
                        <nav className="flex flex-col gap-3">
                            <Link
                                href="/"
                                className="font-sans text-white/70 hover:text-[#D4A84F] transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/#services"
                                className="font-sans text-white/70 hover:text-[#D4A84F] transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="/#work"
                                className="font-sans text-white/70 hover:text-[#D4A84F] transition-colors"
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/intelligence"
                                className="font-sans text-white/70 hover:text-[#D4A84F] transition-colors font-semibold"
                            >
                                System Intelligence
                            </Link>
                            <Link
                                href="/journal"
                                className="font-sans text-white/70 hover:text-[#D4A84F] transition-colors font-semibold"
                            >
                                Technical Journal
                            </Link>

                        </nav>
                    </div>

                    {/* Right: The Network */}
                    <div className="text-center md:text-right space-y-4">
                        <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-[#D4A84F]/40 mb-6">
                            The Network
                        </h4>
                        <nav className="flex flex-col gap-3">
                            <Link
                                href="https://empowervaservices.co.uk"
                                className="font-sans text-white/70 hover:text-[#D4A84F] transition-colors"
                            >
                                Empower Virtual Assistant Services
                            </Link>
                            <Link
                                href="https://empowerautomation.co.uk"
                                className="font-sans text-white/70 hover:text-[#D4A84F] transition-colors"
                            >
                                Empower Automation
                            </Link>
                            <Link
                                href="https://empowerdigitalsolutions.co.uk"
                                className="font-sans text-white/70 hover:text-[#D4A84F] transition-colors"
                            >
                                Empower Digital Solutions
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="pt-8 border-t border-[#D4A84F]/10 text-center space-y-2">
                    <p className="font-sans text-sm text-white/40">
                        &copy; Nicola Berry. {currentYear}
                    </p>
                    <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] text-[#D4A84F]/30 leading-relaxed max-w-md mx-auto">
                        ICO Registered: ZC102381 | Professional Indemnity Insurance by PolicyBee | 
                        <Link href="/privacy" className="hover:text-[#D4A84F] transition-colors ml-1 underline decoration-[#D4A84F]/20 underline-offset-4">
                            Privacy & Terms
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
