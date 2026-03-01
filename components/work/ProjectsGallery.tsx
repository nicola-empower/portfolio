"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectsGallery() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Extract unique categories (types)
    const categories = ["all", ...Array.from(new Set(projects.map((p) => p.type)))];

    // Filter Logic
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesCategory =
                selectedCategory === "all" || project.type === selectedCategory;
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.techStack.some((tech) =>
                    tech.toLowerCase().includes(searchQuery.toLowerCase())
                );

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="w-full">
            {/* Controls Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? "bg-heading text-background dark:bg-foreground dark:text-background shadow-md"
                                : "bg-white/50 dark:bg-white/5 text-heading/70 dark:text-foreground/70 hover:bg-white dark:hover:bg-white/10"
                                }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-heading/40 dark:text-foreground/40" size={18} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-heading/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 text-heading dark:text-foreground placeholder:text-heading/40 dark:placeholder:text-foreground/40 transition-all"
                    />
                </div>
            </div>

            {/* Masonry-style Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-heading/50 dark:text-foreground/50">
                        <Filter size={48} className="mx-auto mb-4 opacity-50" />
                        <p className="text-lg">No projects match your filters.</p>
                        <button
                            onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
                            className="mt-4 text-accent-primary hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
