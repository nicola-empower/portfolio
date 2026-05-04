import { Metadata } from "next";

export const siteConfig = {
    title: "Nicola Berry | Principal Digital Architect | Female Technical Founder",
    description: "Award-winning Strategic Systems Architect specialised in high-performance digital ecosystems, Agentic AI, and custom operational infrastructure for founders.",
    url: "https://nicolaberry.uk",
    ogImage: "https://nicolaberry.uk/og-image.png",
    twitterHandle: "@nicola_empower",
};

export const sharedMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | Nicola Berry`,
    },
    description: siteConfig.description,
    keywords: [
        "Principal Digital Architect Scotland",
        "Award-winning Systems Architect 2026",
        "Female Technical Founder UK",
        "Calm Tech Architect",
        "Agentic AI Developer",
        "Google Apps Script Expert",
        "Operations Engineer",
        "Solutions Architect",
        "Automation Architect",
        "Next.js Developer",
        "SaaS Builder",
        "AI Automation Specialist",
        "Business Automation",
        "Digital Estate Sovereignty",
        "Empower Digital Solutions",
        "Nicola Berry Developer",
        "Scotland Web Developer",
        "Custom Web App UK",
    ],
    authors: [{ name: "Nicola Berry", url: siteConfig.url }],
    creator: "Nicola Berry",
    publisher: "Nicola Berry",
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: "Nicola Berry Portfolio",
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Nicola Berry - Principal Digital Architect | Operations Engineer | Technical Founder",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.twitterHandle,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/logo.png",
    },
};
