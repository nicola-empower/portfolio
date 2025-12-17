import { Metadata } from "next";

export const siteConfig = {
    title: "Nicola Berry | Full Stack Engineer & Automation Architect",
    description: "Specializing in high-performance web applications, bespoke automation systems, and digital transformation for agencies and businesses.",
    url: "https://nicolaberry.dev", // Replace with actual production URL if different
    ogImage: "https://nicolaberry.dev/og-image.jpg", // We need to ensure this image exists
    twitterHandle: "@nicola_empower", // Replace or remove if not applicable
};

export const sharedMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | Nicola Berry`,
    },
    description: siteConfig.description,
    keywords: [
        "Full Stack Developer",
        "Automation Architect",
        "Next.js",
        "React",
        "TypeScript",
        "Google Apps Script",
        "Web Development",
        "Digital Transformation",
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
                alt: "Nicola Berry - Full Stack Engineer & Automation Architect",
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
        icon: "/favicon.ico",
    },
};
