import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy & Terms | Nicola Berry Portfolio",
    description: "ICO Registered Data Protection Compliance, ISO-Aligned Security Principles, and professional Terms of Engagement for Nicola Berry's portfolio.",
    alternates: {
        canonical: "https://nicolaberry.uk/privacy",
    },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
