import { MetadataRoute } from "next";
import { siteConfig } from "./shared-metadata";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/private/", "/api/"],
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
    };
}
