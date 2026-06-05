import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { sharedMetadata, siteConfig } from "./shared-metadata";
import { projects } from "@/data/projects";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...sharedMetadata,
  alternates: { canonical: siteConfig.url },
  manifest: "/manifest.webmanifest",
};

// Dynamically generate project schema nodes to link Nicola Berry as creator of each work
const projectGraphNodes = projects.map((project) => {
  const isSoftware = project.type === "webapp" || project.type === "script";
  const projectUrl = `${siteConfig.url}/work/${project.slug}`;
  const imageUrl = project.thumbnail?.startsWith("/")
    ? `${siteConfig.url}${project.thumbnail}`
    : project.thumbnail;

  const sameAsList: string[] = [];
  if (project.liveUrl && project.liveUrl !== "#") {
    sameAsList.push(project.liveUrl);
  }
  if (project.demoUrl && project.demoUrl !== "#" && project.demoUrl !== project.liveUrl) {
    sameAsList.push(project.demoUrl);
  }
  if (project.repoUrl) {
    sameAsList.push(project.repoUrl);
  }

  const node: any = {
    "@type": isSoftware ? "SoftwareApplication" : "CreativeWork",
    "@id": `${projectUrl}#project`,
    "name": project.title,
    "description": project.shortTagline || project.description,
    "url": projectUrl,
    "creator": { "@id": `${siteConfig.url}/#person` },
    "author": { "@id": `${siteConfig.url}/#person` },
    "publisher": { "@id": `${siteConfig.url}/#person` },
    "datePublished": project.year,
  };

  if (imageUrl) {
    node.image = imageUrl;
  }
  if (sameAsList.length > 0) {
    node.sameAs = sameAsList;
  }
  if (isSoftware) {
    node.applicationCategory = project.category || "BusinessApplication";
    node.operatingSystem = "Web";
  }

  return node;
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "url": siteConfig.url,
      "name": siteConfig.title,
      "description": siteConfig.description,
      "publisher": { "@id": `${siteConfig.url}/#person` }
    },
    {
      "@type": "WebSite",
      "@id": "https://empowerdigitalsolutions.co.uk/#website",
      "url": "https://empowerdigitalsolutions.co.uk",
      "name": "Empower Digital Solutions",
      "description": "Custom web applications, automation & AI-powered digital solutions for businesses.",
      "publisher": { "@id": `${siteConfig.url}/#person` }
    },
    {
      "@type": "Organization",
      "@id": "https://empowerdigitalsolutions.co.uk/#organization",
      "name": "Empower Digital Solutions",
      "url": "https://empowerdigitalsolutions.co.uk",
      "awards": ["SME News Best Digital Systems Architecture Analyst 2026"],
      "founder": { "@id": `${siteConfig.url}/#person` },
      "sameAs": [
        "https://empowerdigitalsolutions.co.uk",
        "https://empowerdigitalsolutions.co.uk/case-studies",
        "https://www.instagram.com/digital_solutions.empower/",
        "https://www.instagram.com/digital_solutions.empower",
        "https://www.facebook.com/people/Empower-Digital-Solutions/61577425409413/",
        "https://www.bark.com/en/gb/company/empower-digital-solutions/4XPD2p/",
        "https://maps.app.goo.gl/9amYiQY4XCVV5gZX6"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://empowerautomation.co.uk/#organization",
      "name": "Empower Automation",
      "url": "https://empowerautomation.co.uk",
      "founder": { "@id": `${siteConfig.url}/#person` },
      "sameAs": [
        "https://empowerautomation.co.uk",
        "https://empowerautomation.co.uk/case-studies",
        "https://www.instagram.com/empower_automation",
        "https://www.facebook.com/people/Empower-Automation/61590429031736/"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://empowervaservices.co.uk/#organization",
      "name": "Empower VA Services",
      "url": "https://empowervaservices.co.uk",
      "founder": { "@id": `${siteConfig.url}/#person` },
      "sameAs": [
        "https://empowervaservices.co.uk",
        "https://empowervaservices.co.uk/portfolio",
        "https://portfolio.empowervaservices.co.uk",
        "https://www.instagram.com/empower_va",
        "https://www.facebook.com/p/Empower-Virtual-Assistant-Services-61577917603562/"
      ]
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      "name": "Nicola Berry",
      "url": siteConfig.url,
      "jobTitle": "Principal Digital Architect & Technical Founder",
      "award": "SME News Best Digital Systems Architecture Analyst 2026",
      "knowsAbout": [
        "Agentic AI",
        "Digital Systems Architecture",
        "Calm Technology",
        "Google Apps Script",
        "Operational Infrastructure"
      ],
      "description": siteConfig.description,
      "image": siteConfig.ogImage,
      "worksFor": { "@id": "https://empowerdigitalsolutions.co.uk/#organization" },
      "sameAs": [
        siteConfig.url,
        "https://github.com/nicola-empower",
        "https://www.linkedin.com/in/nicola-berry-a58b60373",
        "https://www.linkedin.com/in/empowervaservices",
        "https://www.facebook.com/nicola.berry.39",
        "https://www.facebook.com/nicola.berry.39/",
        "https://www.instagram.com/nicolllaaaaa",
        "https://contra.com/nicola_berry_g6tufqdn"
      ]
    },
    ...projectGraphNodes
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <a
            href="#main-content"
            className="fixed top-4 left-4 z-50 -translate-y-[150%] focus:translate-y-0 bg-heading text-background px-4 py-2 rounded-md font-bold transition-transform duration-300"
          >
            Skip to content
          </a>
          {children}
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            strategy="beforeInteractive"
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-8HMX25HCMV"
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8HMX25HCMV');
            `}
          </Script>
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wmfk7gdzs6");
            `}
          </Script>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
