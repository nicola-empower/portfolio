import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

import { sharedMetadata, siteConfig } from "./shared-metadata";
import Script from "next/script";

export const metadata: Metadata = sharedMetadata;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "url": siteConfig.url,
      "name": siteConfig.title,
      "description": siteConfig.description,
      "publisher": {
        "@id": `${siteConfig.url}/#person`
      }
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      "name": "Nicola Berry",
      "url": siteConfig.url,
      "jobTitle": "Full Stack Engineer & Automation Architect",
      "description": siteConfig.description,
      "image": siteConfig.ogImage,
      "sameAs": [
        "https://github.com/nicola-empower",
        "https://linkedin.com/in/nicola-berry", // Update if needed
      ]
    }
  ]
};

import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <div className="fixed top-6 right-6 z-40">
            <ThemeToggle />
          </div>
          <a
            href="#main-content"
            className="fixed top-4 left-4 z-50 -translate-y-[150%] focus:translate-y-0 bg-charcoal text-cream px-4 py-2 rounded-md font-bold transition-transform duration-300"
          >
            Skip to content
          </a>
          {children}
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            strategy="afterInteractive"
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-8HMX25HCMV"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8HMX25HCMV');
            `}
          </Script>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
