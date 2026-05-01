"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const H = ({ children }: { children: React.ReactNode }) => (
  <span className="text-foreground font-semibold">{children}</span>
);

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-foreground/[0.02] border-y border-glass-border py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mx-auto">
            <User size={16} />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Bridging the gap between<br />
            <span className="text-gradient">AI and Reality.</span>
          </h2>

          <div className="space-y-6 mt-8 text-left max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              I'm <H>Shantanu Harkulkar</H>, working in <H>AI automation</H> and <H>generative AI</H>. I like building things that actually work in the <H>real world</H>, not just demos.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Most of what I do is around <H>connecting systems</H>—using <H>AI</H>, <H>APIs</H>, and <H>webhooks</H> to create workflows that can run on their own and handle real tasks like conversations or lead flow.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              During my time at <H>Volosist</H>, I worked on <H>WhatsApp automation</H> using Meta's <H>Cloud API</H>, built <H>webhook-based systems</H>, and created <H>AI agents</H> that could interact with users. That experience pushed me to think more in terms of <H>systems</H> rather than just code.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              I enjoy what people call <H>"vibe coding"</H>—getting into a flow, trying things out, and building <H>end-to-end</H> until it actually works. It's less about perfection and more about making something <H>useful</H>.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Right now, I'm exploring <H>AI agents</H>, <H>automation</H>, and trying to build things that can stand on their own. If you're building something interesting in this space, I'm always open to <H>connecting</H>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
