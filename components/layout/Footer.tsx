"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-cream dark:bg-plum-dark transition-colors duration-500 border-t border-charcoal/5 dark:border-cream/5 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
                    {/* Left: Brand */}
                    <div className="text-center md:text-left space-y-4">
                        <h3 className="font-serif text-2xl font-bold text-charcoal dark:text-cream">
                            Empower Digital Solutions
                        </h3>
                        <p className="font-sans text-sm font-medium tracking-widest uppercase text-rose dark:text-rose/80">
                            Code. Automation. Freedom.
                        </p>
                    </div>

                    {/* Middle: Navigation */}
                    <div className="text-center space-y-4">
                        <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-charcoal/40 dark:text-cream/40 mb-6">
                            Explore
                        </h4>
                        <nav className="flex flex-col gap-3">
                            <Link
                                href="#"
                                className="font-sans text-charcoal/80 dark:text-cream/80 hover:text-rose dark:hover:text-rose transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="#services"
                                className="font-sans text-charcoal/80 dark:text-cream/80 hover:text-rose dark:hover:text-rose transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="#work"
                                className="font-sans text-charcoal/80 dark:text-cream/80 hover:text-rose dark:hover:text-rose transition-colors"
                            >
                                Portfolio
                            </Link>
                        </nav>
                    </div>

                    {/* Right: The Network */}
                    <div className="text-center md:text-right space-y-4">
                        <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-charcoal/40 dark:text-cream/40 mb-6">
                            The Network
                        </h4>
                        <nav className="flex flex-col gap-3">
                            <Link
                                href="#"
                                className="font-sans text-charcoal/80 dark:text-cream/80 hover:text-rose dark:hover:text-rose transition-colors"
                            >
                                Empower VA Services
                            </Link>
                            <Link
                                href="#"
                                className="font-sans text-charcoal/80 dark:text-cream/80 hover:text-rose dark:hover:text-rose transition-colors"
                            >
                                Empower Automation
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="pt-8 border-t border-charcoal/5 dark:border-cream/5 text-center">
                    <p className="font-sans text-sm text-charcoal/40 dark:text-cream/40">
                        &copy; Nicola Berry. {currentYear}
                    </p>
                </div>
            </div>
        </footer>
    );
}
