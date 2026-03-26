"use client";

import { journals } from "@/data/journals";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export function JournalSection() {
    const recentJournals = journals.slice(0, 3);

    return (
        <section id="journal" className="py-32 bg-accent-secondary/5 dark:bg-[#0d0d0d] transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-heading dark:text-foreground mb-6">
                            Technical <br />
                            <span className="italic text-accent-primary">Journal.</span>
                        </h2>
                        <p className="font-sans text-xl text-heading/70 dark:text-foreground/70 leading-relaxed">
                            Architectural insights, operational philosophy, and the reasoning behind why I build.
                        </p>
                    </div>

                    <Link href="/journal" className="hidden md:block">
                        <Button variant="outline" className="group">
                            Read All Entries
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentJournals.map((journal) => (
                        <Link href={`/journal/${journal.slug}`} key={journal.slug} className="group flex flex-col h-full bg-white dark:bg-white/5 border border-foreground/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="p-8 grow flex flex-col">
                                <div className="flex items-center gap-3 text-accent-primary mb-4 text-sm font-semibold tracking-wider uppercase">
                                    <BookOpen size={16} />
                                    <span>{journal.topic}</span>
                                    <span className="text-foreground/40">•</span>
                                    <span className="text-foreground/60">{journal.readTime}</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-heading dark:text-foreground mb-4 group-hover:text-accent-primary transition-colors">
                                    {journal.title}
                                </h3>
                                <p className="font-sans text-foreground/70 mb-8 leading-relaxed grow">
                                    {journal.excerpt}
                                </p>
                                <div className="mt-auto flex items-center gap-2 font-medium text-heading dark:text-foreground group-hover:text-accent-primary transition-colors">
                                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link href="/journal">
                        <Button variant="outline" size="lg" className="w-full">
                            Read All Entries
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
