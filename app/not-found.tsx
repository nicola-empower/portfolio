import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-background">
            {/* Background Aesthetic */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    background: 'radial-gradient(circle at center, var(--accent-primary) 0%, transparent 70%)'
                }}
            />

            <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-block text-accent-primary font-mono text-sm tracking-widest uppercase mb-8 font-bold">
                    System Protocol: 404
                </span>

                <h1 className="text-6xl md:text-8xl font-serif font-bold italic text-heading mb-8 tracking-tighter leading-tight">
                    Missing <span className="text-accent-primary not-italic">Dimension.</span>
                </h1>

                <p className="text-foreground/60 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed font-medium italic">
                    The requested operational node does not exist in the current archive. 
                    It may have been purged or relocated within the structural hierarchy.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link href="/">
                        <Button
                            size="lg"
                            className="bg-accent-primary text-accent-primary-foreground border-none px-12 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl font-bold uppercase tracking-widest"
                        >
                            Return to Origin
                        </Button>
                    </Link>
                    <Link href="/#work">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-heading/20 text-heading px-12 py-7 text-lg rounded-full transition-all duration-300 hover:bg-heading/5 font-bold uppercase tracking-widest"
                        >
                            Review Matrix
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Aesthetic Accents */}
            <div className="absolute bottom-10 left-10 w-24 h-px bg-heading/10" />
            <div className="absolute top-10 right-10 w-10 h-10 border-t border-r bg-heading/10" />
        </div>
    );
}
