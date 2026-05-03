import { MetadataRoute } from "next";
import { siteConfig } from "./shared-metadata";
import { projects } from "@/data/projects";
import { journals } from "@/data/journals";

export default function sitemap(): MetadataRoute.Sitemap {
    const defaultPages = [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 1,
        },
        {
            url: `${siteConfig.url}/work`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${siteConfig.url}/journal`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
    ];

    const projectPages = projects.flatMap((p) => {
        const pages = [
            {
                url: `${siteConfig.url}/work/${p.slug}`,
                lastModified: new Date(),
                changeFrequency: "yearly" as const,
                priority: 0.7,
            },
        ];

        if (p.infographicUrl) {
            pages.push({
                url: `${siteConfig.url}${p.infographicUrl}`,
                lastModified: new Date(),
                changeFrequency: "yearly" as const,
                priority: 0.6,
            });
        }

        if (p.proposalUrl) {
            pages.push({
                url: `${siteConfig.url}${p.proposalUrl}`,
                lastModified: new Date(),
                changeFrequency: "yearly" as const,
                priority: 0.6,
            });
        }

        return pages;
    });

    const journalPages = journals.map((j) => {
        // Robust date parsing for "Month Day, Year" or "Month Year"
        const date = new Date(j.date);
        const validDate = isNaN(date.getTime()) ? new Date() : date;
        
        return {
            url: `${siteConfig.url}/journal/${j.slug}`,
            lastModified: validDate,
            changeFrequency: "yearly" as const,
            priority: 0.8,
        };
    });

    return [...defaultPages, ...projectPages, ...journalPages];
}
