"use client";

import { motion } from "framer-motion";

const techs = [
    // Frontend / Core Languages
    {
        name: "React",
        path: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z", // Atom-like simplified
        viewBox: "0 0 24 24",
    },
    {
        name: "Next.js",
        path: "M12 2L2 19.7778H22L12 2Z M12 4L19.5 17.5H4.5L12 4Z", // Simplified Black Triangle/N shape
        viewBox: "0 0 24 24",
    },
    {
        name: "JavaScript",
        path: "M4 4H20V20H4V4ZM6 6V18H18V6H6ZM10 10V14H14V10H10ZM11 11L13 11L13 13L11 13L11 11Z", // JS Block, intentionally abstract
        viewBox: "0 0 24 24",
    },
    {
        name: "TypeScript",
        path: "M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM6 10H18V12H6V10Z", // 'TS' inside a square, simplified
        viewBox: "0 0 24 24",
    },
    {
        name: "HTML5",
        path: "M3 3L5 18L12 22L19 18L21 3H3ZM16 10H8L8.5 15L12 16.5L15.5 15L16 10Z", // Shield Shape
        viewBox: "0 0 24 24",
    },
    {
        name: "CSS3",
        path: "M3 3L5 18L12 22L19 18L21 3H3ZM16 10H8L8.5 15L12 16.5L15.5 15L16 10Z", // Same shield as HTML5, representing the pair
        viewBox: "0 0 24 24",
    },
 {
        name: "Tailwind CSS",
        // This is the correct path for the two filled "waves" of the Tailwind logo
        path: "M10.79 12.912c-1.679.111-3.679-1.14-4.772-2.753C3.812 7.473 6.87 4.117 10.56 3c.26-.08.364.261.158.428-1.197.966-2.387 2.732-1.903 4.513.683 2.51 3.753 2.706 4.707 1.782.692-.672 1.106-1.807 1.106-1.807s.392 1.285 1.031 1.954c2.048 2.143 5.508 1.869 7.591-.297.335-.348.822-.118.664.35-1.32 3.907-5.07 6.547-8.842 6.338-2.743-.151-4.55-1.993-4.55-1.993s.573 1.757.138 2.873c-.464 1.193-1.616 2.316-3.323 2.778-2.187.593-4.591-.307-6.08-2.262-.222-.292-.074-.713.286-.675 2.135.225 4.32-.837 5.293-2.74.953-1.867.02-4.198-2.096-5.352-.35-.19-.356-.702.048-.833 1.467-.474 3.204.382 3.928 1.54 1.353 2.161-.606 4.605-3.105 5.117-.27.056-.397.383-.217.594 1.128 1.325 2.85 1.939 4.594 1.617 2.587-.476 4.253-2.704 4.253-2.704s-1.188 1.374-2.385 1.52z",
        viewBox: "0 0 24 24",
        // IMPORTANT: Changed to false so it fills the shape instead of drawing outline
        isStroke: false, 
    },
    {
        name: "Framer Motion",
        path: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z", // Half-circle motion blur representation
        viewBox: "0 0 24 24",
    },
    // Backend / Database
    {
        name: "Node.js",
        path: "M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z", // Hexagon, simplified
        viewBox: "0 0 24 24",
    },
    {
        name: "Express.js",
        path: "M4 8H20V16H4V8ZM6 10V14H18V10H6Z M10 12H14V14H10V12Z", // Abstract 'E' or block placeholder
        viewBox: "0 0 24 24",
    },
    {
        name: "MongoDB",
        path: "M12 2C7.58172 2 4 4.68629 4 8C4 11.3137 7.58172 14 12 14C16.4183 14 20 11.3137 20 8C20 4.68629 16.4183 2 12 2Z M12 22C7.58172 22 4 19.3137 4 16C4 12.6863 7.58172 10 12 10C16.4183 10 20 12.6863 20 16C20 19.3137 16.4183 22 12 22Z", // Two Ellipses/Orbs
        viewBox: "0 0 24 24",
    },
    {
        name: "Mongoose",
        path: "M4 12H20M12 4V20M8 8L16 16M16 8L8 16", // Mongoose logo is circular, using a simplified intersecting lines pattern
        viewBox: "0 0 24 24",
        isStroke: true,
    },
    {
        name: "REST APIs",
        path: "M3 10H8V14H3V10ZM11 10H16V14H11V10ZM19 10H24V14H19V10Z", // Blocks representing communication flow
        viewBox: "0 0 24 24",
    },
    // Tools / Services
    {
        name: "Git",
        path: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z M12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8Z M12 12L12 18M8 16L16 16", // Commit/Branch visualization
        viewBox: "0 0 24 24",
    },
    {
        name: "GitHub",
        path: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM10 16C10 16.55 10.45 17 11 17H13C13.55 17 14 16.55 14 16V10H10V16Z", // Simplified Octocat/Commit
        viewBox: "0 0 24 24",
    },
    {
        name: "Vercel",
        path: "M12 2L2 19.7778H22L12 2Z", // Upside-down triangle (simplified Vercel logo)
        viewBox: "0 0 24 24",
    },
    {
        name: "Netlify",
        path: "M2 12L12 2L22 12L12 22L2 12Z M12 4.196L19.804 12L12 19.804L4.196 12L12 4.196Z", // Rhombus/Diamond shape
        viewBox: "0 0 24 24",
    },
    {
        name: "Google Cloud",
        path: "M12 2L2 12L12 22L22 12L12 2Z M12 4.8L18.8 12L12 19.2L5.2 12L12 4.8Z", // Cloud-like abstract
        viewBox: "0 0 24 24",
    },
    {
        name: "VS Code",
        path: "M4 4H20V20H4V4ZM6 6V18H18V6H6ZM10 10H14V14H10V10Z", // Abstract nested block
        viewBox: "0 0 24 24",
    },
    // State Management / Others
    {
        name: "Redux",
        path: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM10 8V16L16 12L10 8Z", // Simplified Triangle inside circle (Dispatch/Flow)
        viewBox: "0 0 24 24",
    },
    {
        name: "Tanstack Query",
        path: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6V18", // Circle with a vertical line (data fetching)
        viewBox: "0 0 24 24",
    },
    {
        name: "NextAuth",
        path: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C13.1046 6 14 6.89543 14 8V16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16V8C10 6.89543 10.8954 6 12 6Z", // Lock/Authentication symbol
        viewBox: "0 0 24 24",
    },
    {
        name: "Firebase",
        path: "M12 2L2 19.7778H22L12 2Z M12 4L19.5 17.5H4.5L12 4Z M12 8L16.5 15.25H7.5L12 8Z", // Triangular flame shape
        viewBox: "0 0 24 24",
    },
    {
        name: "Supabase",
        path: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6V18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z", // Simplified 'S' or database representation
        viewBox: "0 0 24 24",
    },
];

// Duplicate the array to ensure seamless looping
const allTechs = [...techs, ...techs, ...techs, ...techs];

export function TechStack() {
    return (
        <section className="py-10 bg-cream dark:bg-plum-dark transition-colors duration-500 overflow-hidden border-y border-charcoal/5 dark:border-cream/5">
            <div className="container mx-auto px-6 text-center mb-6">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-rose dark:text-rose">
                    Powered by modern architecture
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream dark:from-plum-dark to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cream dark:from-plum-dark to-transparent z-10" />

                <motion.div
                    className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
                    animate={{
                        x: ["-50%", "0%"], // Moving left to right means starting from left (negative) and moving to 0
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {allTechs.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 transition-all duration-300 group"
                        >
                            <svg
                                viewBox={tech.viewBox}
                                className={`w-8 h-8 transition-colors ${tech.isStroke ? "stroke-current stroke-2 fill-none" : "fill-current"} text-plum-dark dark:text-cream`}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d={tech.path} />
                            </svg>
                            <span className="font-sans font-medium text-lg hidden md:block text-rose dark:text-rose">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
