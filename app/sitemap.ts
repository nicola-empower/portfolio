import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "./shared-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    const projectUrls = projects.map((project) => ({
        url: `${siteConfig.url}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${siteConfig.url}/analysis`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        ...projectUrls,
    ];
}
