"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactForm() {
    return (
        <GlassCard className="p-8 md:p-12">
            <form action="https://formspree.io/f/mblkwkpp" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-charcoal/70 dark:text-cream/70 uppercase tracking-wide">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full bg-white/50 dark:bg-charcoal/50 border border-charcoal/10 dark:border-cream/10 rounded-lg px-4 py-3 text-charcoal dark:text-cream focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all placeholder:text-charcoal/30 dark:placeholder:text-cream/30"
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-charcoal/70 dark:text-cream/70 uppercase tracking-wide">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full bg-white/50 dark:bg-charcoal/50 border border-charcoal/10 dark:border-cream/10 rounded-lg px-4 py-3 text-charcoal dark:text-cream focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all placeholder:text-charcoal/30 dark:placeholder:text-cream/30"
                            placeholder="jane@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium text-charcoal/70 dark:text-cream/70 uppercase tracking-wide">
                        Project Type
                    </label>
                    <div className="relative">
                        <select
                            id="projectType"
                            name="projectType"
                            className="w-full bg-white/50 dark:bg-charcoal/50 border border-charcoal/10 dark:border-cream/10 rounded-lg px-4 py-3 text-charcoal dark:text-cream focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all appearance-none cursor-pointer"
                        >
                            <option value="Custom Web App">Custom Web App</option>
                            <option value="Website">Website</option>
                            <option value="Automation">Automation</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/50 dark:text-cream/50">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-charcoal/70 dark:text-cream/70 uppercase tracking-wide">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full bg-white/50 dark:bg-charcoal/50 border border-charcoal/10 dark:border-cream/10 rounded-lg px-4 py-3 text-charcoal dark:text-cream focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all placeholder:text-charcoal/30 dark:placeholder:text-cream/30 resize-none"
                        placeholder="Tell me about your project..."
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto rounded-full px-8">
                        Send Enquiry
                    </Button>
                </div>
            </form>
        </GlassCard>
    );
}
