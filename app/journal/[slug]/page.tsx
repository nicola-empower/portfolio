import { journals } from "@/data/journals";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export async function generateStaticParams() {
    return journals.map((journal) => ({
        slug: journal.slug,
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const journal = journals.find((j) => j.slug === params.slug);

    if (!journal) return { title: "Journal Not Found" };

    return {
        title: `${journal.title} | Technical Journal`,
        description: journal.excerpt,
        openGraph: {
            title: `${journal.title} | Technical Journal`,
            description: journal.excerpt,
            type: "article",
            publishedTime: journal.date,
        },
    };
}

export default async function JournalPost(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const journal = journals.find((j) => j.slug === params.slug);

    if (!journal) {
        notFound();
    }

    const relatedProject = journal.relatedProjectSlug ? projects.find(p => p.slug === journal.relatedProjectSlug) : null;

    return (
        <main className="min-h-screen bg-cream dark:bg-plum-dark transition-colors duration-500 pt-32 pb-24">
            <article className="container mx-auto px-6 max-w-4xl overflow-hidden">
                <FadeIn delay={0.1}>
                    <Link href="/journal" className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors mb-12 font-medium">
                        <ArrowLeft size={18} />
                        Back to Journals
                    </Link>
                </FadeIn>

                <header className="mb-16">
                    <FadeIn delay={0.2} y={15}>
                        <div className="flex flex-wrap items-center gap-4 text-sm font-bold tracking-wider text-accent-primary uppercase mb-6">
                            <span>{journal.topic}</span>
                            <span className="text-foreground/30">•</span>
                            <span className="flex items-center gap-2 text-foreground/60"><Calendar size={16} /> {journal.date}</span>
                            <span className="text-foreground/30">•</span>
                            <span className="flex items-center gap-2 text-foreground/60"><Clock size={16} /> {journal.readTime}</span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3} y={20}>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-heading dark:text-foreground mb-8 leading-tight">
                            {journal.title}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4} y={20}>
                        <p className="font-sans text-xl md:text-2xl text-foreground/70 leading-relaxed border-l-4 border-accent-primary pl-6 py-2 italic bg-accent-primary/5 rounded-r-lg">
                            {journal.excerpt}
                        </p>
                    </FadeIn>
                </header>

                <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none">
                    {journal.content.map((paragraph, index) => (
                        <FadeIn key={index} delay={0.1} y={20}>
                            <p className="font-sans text-foreground/90 leading-loose mb-8">
                                {paragraph}
                            </p>
                        </FadeIn>
                    ))}
                </div>

                {relatedProject && (
                    <FadeIn delay={0.2}>
                        <div className="mt-16 p-8 rounded-2xl bg-accent-secondary/5 border border-accent-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <span className="text-accent-primary text-sm font-bold tracking-widest uppercase mb-2 block">Related Architecture</span>
                                <h3 className="font-serif text-2xl font-bold text-heading dark:text-foreground leading-tight">{relatedProject.title}</h3>
                            </div>
                            <Link href={`/work/${relatedProject.slug}`} className="shrink-0 px-6 py-3 bg-accent-primary text-black rounded-lg font-bold hover:bg-accent-primary/90 transition-colors flex items-center gap-2">
                                View Case Study <ArrowRight size={16} />
                            </Link>
                        </div>
                    </FadeIn>
                )}

                <hr className="my-16 border-foreground/10" />

                <FadeIn delay={0.2} y={30}>
                    <div className="bg-accent-secondary/5 dark:bg-white/5 border border-foreground/10 rounded-2xl p-8 md:p-12 text-center text-balance overflow-hidden">
                        <h3 className="font-serif text-3xl font-bold text-heading dark:text-foreground mb-4">Are you facing an operational bottleneck?</h3>
                        <p className="font-sans text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                            I specialise in tearing down complex administrative debt and replacing it with frictionless, resilient workflows. Let&apos;s engineer your freedom.
                        </p>
                        <Link href="/#contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-accent-primary text-black shadow hover:bg-accent-primary/90 h-12 px-8 py-2">
                            Start the Conversation
                        </Link>
                    </div>
                </FadeIn>
            </article>
        </main>
    );
}
