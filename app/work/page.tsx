import { projects } from "@/data/projects";
import { ProjectsGallery } from "@/components/work/ProjectsGallery";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Project Catalog | Nicola Berry Portfolio",
    description: "Full directory of technical platforms, AI agents, and digital solutions.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-cream dark:bg-plum-dark transition-colors duration-500 pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <header className="mb-20">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-charcoal/60 dark:text-cream/60 hover:text-rose transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-charcoal dark:text-cream mb-6">
                        The <span className="italic text-rose">Catalog.</span>
                    </h1>
                    <p className="font-sans text-xl text-charcoal/60 dark:text-cream/60 max-w-2xl leading-relaxed">
                        Explore the complete library of systems, automations, and architectural experiments. Use the filters to find specific technologies or project types.
                    </p>
                </header>

                <ProjectsGallery />
            </div>
        </main>
    );
}
