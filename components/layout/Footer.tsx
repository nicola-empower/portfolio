"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background transition-colors duration-500 border-t border-heading/5 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
                    {/* Left: Brand */}
                    <div className="text-center md:text-left space-y-4">
                        <h3 className="font-serif text-2xl font-bold text-heading">
                            Empower Digital Solutions
                        </h3>
                        <p className="font-sans text-sm font-medium tracking-widest uppercase text-accent-primary">
                            Code. Automation. Freedom.
                        </p>
                    </div>

                    {/* Middle: Navigation */}
                    <div className="text-center space-y-4">
                        <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-heading/40 mb-6">
                            Explore
                        </h4>
                        <nav className="flex flex-col gap-3">
                            <Link
                                href="/"
                                className="font-sans text-foreground hover:text-accent-primary transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="#services"
                                className="font-sans text-foreground hover:text-accent-primary transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="#work"
                                className="font-sans text-foreground hover:text-accent-primary transition-colors"
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/journal"
                                className="font-sans text-foreground hover:text-accent-primary transition-colors font-semibold"
                            >
                                Technical Journal
                            </Link>
                            <Link
                                href="/analysis"
                                className="font-sans text-foreground hover:text-accent-primary transition-colors"
                            >
                                Strategic Analysis
                            </Link>
                        </nav>
                    </div>

                    {/* Right: The Network */}
                    <div className="text-center md:text-right space-y-4">
                        <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-heading/40 mb-6">
                            The Network
                        </h4>
                        <nav className="flex flex-col gap-3">
                            <Link
                                href="https://empowervaservices.co.uk"
                                className="font-sans text-foreground hover:text-accent-primary transition-colors"
                            >
                                Empower Virtual Assistant Services
                            </Link>
                            <Link
                                href="https://empowerautomation.co.uk"
                                className="font-sans text-foreground hover:text-accent-primary transition-colors"
                            >
                                Empower Automation
                            </Link>
                            <Link
                                href="https://empowerdigitalsolutions.co.uk"
                                className="font-sans text-foreground hover:text-accent-primary transition-colors"
                            >
                                Empower Digital Solutions
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="pt-8 border-t border-heading/5 text-center">
                    <p className="font-sans text-sm text-foreground/60">
                        &copy; Nicola Berry. {currentYear}
                    </p>
                </div>
            </div>
        </footer>
    );
}
