"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Work() {
    const featuredProjects = projects.filter(p => p.featured).slice(0, 10);

    return (
        <section id="work" className="py-32 bg-background dark:bg-[#0d0d0d] transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-heading dark:text-foreground mb-6">
                            Featured <br />
                            <span className="italic text-accent-primary">Intelligence.</span>
                        </h2>
                        <p className="font-sans text-xl text-heading/70 dark:text-foreground/70 leading-relaxed">
                            A curated selection of high-impact platforms focusing on systems architecture, AI utility, and digital authority.
                        </p>
                    </div>

                    <Link href="/work" className="hidden md:block">
                        <Button variant="outline" className="group">
                            View Full Catalog
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                    </Link>
                </div>

                {/* Featured Grid - More space for each project */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            priority={index < 2}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link href="/work">
                        <Button variant="outline" size="lg" className="w-full">
                            View Full Catalog
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}