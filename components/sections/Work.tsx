"use client";

import { ProjectsGallery } from "@/components/work/ProjectsGallery";

export function Work() {
    return (
        <section id="work" className="py-24 bg-cream dark:bg-plum-dark transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-4">
                        Selected Work
                    </h2>
                    <p className="font-sans text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto">
                        High-impact, full-stack solutions showcasing systems architecture, AI integration, and complex logic.
                    </p>
                </div>

                <ProjectsGallery />
            </div>
        </section>
    );
}