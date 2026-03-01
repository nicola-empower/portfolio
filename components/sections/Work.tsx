"use client";

import { ProjectsGallery } from "@/components/work/ProjectsGallery";

export function Work() {
    return (
        <section id="work" className="py-24 bg-background dark:bg-[#0d0d0d] transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-heading dark:text-foreground mb-4">
                        Selected Work
                    </h2>
                    <p className="font-sans text-lg text-heading/70 dark:text-foreground/70 max-w-2xl mx-auto">
                        High-impact, full-stack solutions showcasing systems architecture, AI integration, and complex logic.
                    </p>
                </div>

                <ProjectsGallery />
            </div>
        </section>
    );
}