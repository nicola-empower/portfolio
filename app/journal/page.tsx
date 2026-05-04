import { journals } from "@/data/journals";
import Link from "next/link";
import { ArrowRight, BookOpen, ArrowLeft } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technical Journal | Nicola Berry Portfolio",
    description: "A collection of thoughts on system architecture, operational bottlenecks, calm technology, and the philosophy of building software.",
};

export default function JournalIndex() {
    // Sort journals chronologically (newest first)
    const sortedJournals = [...journals].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    // Group journals by month and year
    const journalGroups: { monthYear: string; entries: typeof journals }[] = [];
    sortedJournals.forEach((journal) => {
        const d = new Date(journal.date);
        const monthYear = d.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
        const lastGroup = journalGroups[journalGroups.length - 1];
        
        if (lastGroup && lastGroup.monthYear === monthYear) {
            lastGroup.entries.push(journal);
        } else {
            journalGroups.push({ monthYear, entries: [journal] });
        }
    });

    return (
        <main className="min-h-screen bg-cream dark:bg-plum-dark transition-colors duration-500 pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-5xl">
                <FadeIn delay={0.1}>
                    <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors mb-12 font-medium">
                        <ArrowLeft size={18} />
                        Back to Portfolio
                    </Link>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <header className="mb-20">
                        <h1 className="font-serif text-5xl md:text-7xl font-bold text-heading dark:text-foreground mb-6 tracking-tight">
                            Technical <br />
                            <span className="italic text-accent-primary">
                                Journal.
                            </span>
                        </h1>
                        <p className="font-sans text-xl text-foreground/70 max-w-2xl leading-relaxed">
                            A systematic ledger of architectural insights, operational breakthroughs, and the philosophy of building software out of sheer necessity.
                        </p>
                    </header>
                </FadeIn>
                
                <div className="space-y-24">
                    {journalGroups.map((group, groupIndex) => (
                        <section key={group.monthYear} className="relative">
                            {/* Monthly Header */}
                            <div className="flex items-center gap-4 mb-12">
                                <h2 className="font-serif text-2xl font-bold text-[#D4A84F] whitespace-nowrap">
                                    {group.monthYear} <span className="text-foreground/20 italic font-normal ml-2">Updates</span>
                                </h2>
                                <div className="h-px w-full bg-[#D4A84F]/20" />
                            </div>

                            <div className="space-y-12">
                                {group.entries.map((journal, index) => (
                                    <FadeIn key={journal.slug} delay={0.1}>
                                        <article className="group relative bg-card-bg border border-card-border rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300">
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                                <div className="md:w-1/4 flex flex-col space-y-2 mt-1">
                                                    <span className="text-sm font-bold tracking-wider text-accent-primary uppercase">{journal.topic}</span>
                                                    <span className="text-sm text-foreground/60">{journal.date}</span>
                                                    <span className="text-sm flex items-center gap-1 text-foreground/50"><BookOpen size={14} /> {journal.readTime}</span>
                                                </div>
                                                
                                                <div className="md:w-3/4">
                                                    <Link href={`/journal/${journal.slug}`}>
                                                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-heading dark:text-foreground mb-4 group-hover:text-accent-primary transition-colors">
                                                            {journal.title}
                                                        </h2>
                                                        <p className="font-sans text-lg text-foreground/70 mb-6 leading-relaxed line-clamp-3">
                                                            {journal.excerpt}
                                                        </p>
                                                        <div className="inline-flex items-center gap-2 font-medium text-heading dark:text-foreground group-hover:text-accent-primary transition-colors">
                                                            Read Full Analysis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    </FadeIn>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
