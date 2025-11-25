"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by rendering nothing until mounted
    if (!mounted) {
        return <div className="w-16 h-8" />; // Placeholder to prevent layout shift
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-16 h-8 rounded-full bg-taupe/30 dark:bg-plum-light/50 backdrop-blur-sm border border-charcoal/10 dark:border-cream/10 p-1 transition-colors duration-500 focus:outline-none"
            aria-label="Toggle Theme"
        >
            <motion.div
                className="w-6 h-6 rounded-full bg-cream shadow-sm flex items-center justify-center text-charcoal"
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{
                    x: isDark ? 32 : 0
                }}
            >
                <motion.div
                    initial={false}
                    animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1, opacity: isDark ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                >
                    <Sun size={14} />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{ rotate: isDark ? 0 : -180, scale: isDark ? 1 : 0, opacity: isDark ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                >
                    <Moon size={14} />
                </motion.div>
            </motion.div>
        </button>
    );
}
