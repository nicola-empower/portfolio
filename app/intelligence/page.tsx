import React from "react";
import { Metadata } from "next";
import { intelligenceDossiers } from "@/data/intelligence";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { IntelligenceGrid } from "@/components/intelligence/IntelligenceGrid";

export const metadata: Metadata = {
  title: "System Intelligence | Nicola Berry Portfolio",
  description: "Detailed briefings on the architecture, psychology, and operational reasoning behind core digital systems.",
};

export default function IntelligencePage() {
  return (
    <main className="min-h-screen bg-cream dark:bg-plum-dark transition-colors duration-500 pt-32 pb-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <FadeIn delay={0.1}>
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent-primary transition-colors mb-12 font-medium">
              <ArrowLeft size={18} />
              Back to Portfolio
            </Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif text-heading mb-6 tracking-tight">
              System <br />
              <span className="italic text-accent-primary">Intelligence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl leading-relaxed font-sans">
              Detailed briefings on the architecture, psychology, and operational reasoning 
              behind my core digital systems. These dossiers move beyond code to document 
              the structural intelligence of human-centric technical solutions.
            </p>
          </FadeIn>
        </header>

        <IntelligenceGrid dossiers={intelligenceDossiers} />
      </div>
    </main>
  );
}
