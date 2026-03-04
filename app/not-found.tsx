import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-black">
            {/* Background Glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, rgba(208, 2, 27, 0.08) 0%, transparent 70%)'
                }}
            />

            <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-block text-[#D0021B] font-mono text-sm tracking-widest uppercase mb-4 opacity-80">
                    Error Code: 404
                </span>

                <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                    Even systems have <br />
                    <span className="italic font-serif">edge cases.</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                    The tactical route you're looking for doesn't exist. Let's get you back to the command center.
                </p>

                <Link href="/">
                    <Button
                        size="lg"
                        className="bg-[#D0021B] hover:bg-[#B00218] text-white border-none px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(208,2,27,0.3)]"
                    >
                        Return to Command Center
                    </Button>
                </Link>
            </div>

            {/* Aesthetic Accents */}
            <div className="absolute bottom-10 left-10 w-24 h-px bg-white/10" />
            <div className="absolute top-10 right-10 w-10 h-10 border-t border-r border-white/10" />
        </div>
    );
}
