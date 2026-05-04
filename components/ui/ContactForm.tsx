"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { getDigitalFingerprint } from "@/lib/fingerprint";

const inputClass = [
    "w-full rounded-lg px-4 py-3 text-sm transition-all",
    "bg-background border border-foreground/15 text-foreground placeholder:text-foreground/35",
    "bg-card-bg border-foreground/5 text-foreground placeholder:text-foreground/30",
    "focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary",
].join(" ");

const labelClass = "block text-xs font-bold uppercase tracking-widest text-heading/50 mb-2";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        
        // Inject Digital Fingerprint
        const fingerprint = getDigitalFingerprint();
        const payload = {
            ...data,
            fingerprint: JSON.stringify(fingerprint),
            source: "Portfolio Digital Estate"
        };

        try {
            // LIVE: Dedicated Infrastructure Sentry
            const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwr5_I528y1re3OLchg265bpWJLmqBnbDBgpWD9UcUJinPdURLcjRLbRtmTrAB-Yzzi/exec";
            
            await fetch(APPS_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Required for Apps Script POST
                cache: "no-cache",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage("System handshake failed. Please try again or email directly.");
        }
    };

    return (
        <GlassCard className="p-8 md:p-12 bg-card-bg border border-foreground/5 backdrop-blur-md relative overflow-hidden">
            {status === "success" ? (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                >
                    <div className="w-16 h-16 bg-accent-primary/20 text-accent-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-heading mb-2">Enquiry Received</h3>
                    <p className="text-foreground/60 italic max-w-md mx-auto">
                        Thank you for your interest. I will personally review your requirements and be in touch to discuss the next steps.
                    </p>
                    <button 
                        onClick={() => setStatus("idle")}
                        className="mt-8 text-xs font-bold uppercase tracking-widest text-accent-primary hover:underline"
                    >
                        Send Another Enquiry
                    </button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                            required
                            className={inputClass + " resize-none"}
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    {status === "error" && (
                        <p className="text-red-500 text-xs font-bold italic">{errorMessage}</p>
                    )}

                    <div className="pt-2">
                        <Button
                            type="submit"
                            size="lg"
                            disabled={status === "sending"}
                            className="w-full md:w-auto bg-accent-primary text-accent-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-3"
                        >
                            {status === "sending" ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    Establishing Connection...
                                </>
                            ) : (
                                "Send Enquiry"
                            )}
                        </Button>
                    </div>
                </form>
            )}
        </GlassCard>
    );
}
