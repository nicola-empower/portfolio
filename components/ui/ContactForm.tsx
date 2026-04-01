"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

const inputClass = [
    "w-full rounded-lg px-4 py-3 text-sm transition-all",
    "bg-background border border-foreground/15 text-foreground placeholder:text-foreground/35",
    "bg-card-bg border-foreground/5 text-foreground placeholder:text-foreground/30",
    "focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary",
].join(" ");

const labelClass = "block text-xs font-bold uppercase tracking-widest text-heading/50 mb-2";

export function ContactForm() {
    return (
        <GlassCard className="p-8 md:p-12 bg-card-bg border border-foreground/5 backdrop-blur-md">
            <form action="https://formspree.io/f/mblkwkpp" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className={labelClass}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={inputClass}
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={labelClass}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className={inputClass}
                            placeholder="jane@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="projectType" className={labelClass}>Project Type</label>
                    <div className="relative">
                        <select
                            id="projectType"
                            name="projectType"
                            className={inputClass + " appearance-none cursor-pointer pr-10"}
                        >
                            <option value="Custom Web App">Custom Web App</option>
                            <option value="Website">Website</option>
                            <option value="Automation">Automation</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-heading/40">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className={labelClass}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={inputClass + " resize-none"}
                        placeholder="Tell me about your project..."
                    />
                </div>

                <div className="pt-2">
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto bg-accent-primary text-accent-primary-foreground hover:opacity-90 transition-opacity"
                    >
                        Send Enquiry
                    </Button>
                </div>
            </form>
        </GlassCard>
    );
}
