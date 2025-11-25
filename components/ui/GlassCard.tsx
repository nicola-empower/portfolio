import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
    return (
        <div
            className={cn(
                "backdrop-blur-xl rounded-2xl p-8 transition-all duration-500",
                "bg-[var(--card-bg)] border border-[var(--card-border)]",
                "shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
                "hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:-translate-y-2",
                className
            )}
        >
            {children}
        </div>
    );
}
