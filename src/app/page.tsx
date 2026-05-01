import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { FlowLines } from "@/components/FlowLines";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FlowLines />
      <Navbar />
      <Hero />

      <div className="space-y-12">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
      <footer className="py-12 border-t border-glass-border">
        <div className="max-w-7xl mx-auto px-6 text-center text-foreground/40 text-sm">
          <p>© {new Date().getFullYear()} Shantanu Harkulkar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
