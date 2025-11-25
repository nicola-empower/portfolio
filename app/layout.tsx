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

export const metadata: Metadata = {
  title: "Empower Digital Solutions",
  description: "Building Your Digital Authority",
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
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
