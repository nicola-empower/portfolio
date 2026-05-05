"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "Intelligence", href: "/intelligence" },
    { name: "Journal", href: "/journal" },
    { name: "About", href: "/#about" },
    { name: "CV", href: "/cv" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4 rounded-full border transition-all duration-500 pointer-events-auto
                    ${isScrolled 
                        ? "bg-[#4A0E0E]/95 backdrop-blur-md border-[#D4A84F]/30 shadow-lg py-2.5 md:py-3" 
                        : "bg-[#4A0E0E]/70 backdrop-blur-sm border-[#D4A84F]/10 py-3 md:py-4"
                    }`}
            >
                {/* Logo Anchor */}
                <Link href="/" className="group flex items-center gap-2 md:gap-3">
                    <div className="relative w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
                        <img 
                            src="/logo.png" 
                            alt="Nicola Berry Signature" 
                            className="object-contain w-full h-full brightness-110"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A84F]/70 hover:text-[#D4A84F] transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pl-4 border-l border-[#D4A84F]/20">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-[#D4A84F]"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-x-6 top-24 bg-[#4A0E0E]/95 backdrop-blur-xl border border-[#D4A84F]/20 rounded-3xl p-8 shadow-2xl z-50 md:hidden pointer-events-auto"
                    >
                        <div className="flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-serif font-bold text-white hover:text-[#D4A84F] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
