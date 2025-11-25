import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream dark:bg-plum-dark transition-colors duration-500">
      <Hero />
      <TechStack />
      <Services />
      <Work />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
