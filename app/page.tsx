import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const TechStack = dynamic(() => import("@/components/sections/TechStack").then(mod => mod.TechStack));
const Services = dynamic(() => import("@/components/sections/Services").then(mod => mod.Services));
const Work = dynamic(() => import("@/components/sections/Work").then(mod => mod.Work));
const IntelligenceSection = dynamic(() => import("@/components/sections/IntelligenceSection").then(mod => mod.IntelligenceSection));
const Process = dynamic(() => import("@/components/sections/Process").then(mod => mod.Process));
const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About));
const JournalSection = dynamic(() => import("@/components/sections/JournalSection").then(mod => mod.JournalSection));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-cream dark:bg-plum-dark transition-colors duration-500">
      <Hero />
      <TechStack />
      <Services />
      <Work />
      <IntelligenceSection />
      <Process />
      <About />
      <JournalSection />
      <Contact />
    </main>
  );
}
