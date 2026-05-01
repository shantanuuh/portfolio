"use client";

import { motion } from "framer-motion";
import { User, Code, Sparkles, Network } from "lucide-react";

export function About() {


  return (
    <section id="about" className="py-24 relative overflow-hidden bg-foreground/[0.02] border-y border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto space-y-6 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mx-auto">
              <User size={16} />
              <span>About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold">
              Bridging the gap between <span className="text-gradient">AI and Reality.</span>
            </h2>
            
            <div className="space-y-6 mt-8 text-left">
              <p className="text-lg text-foreground/70 leading-relaxed">
                I’m Shantanu Harkulkar, working in AI automation and generative AI. I like building things that actually work in the real world, not just demos.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Most of what I do is around connecting systems—using AI, APIs, and webhooks to create workflows that can run on their own and handle real tasks like conversations or lead flow.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                During my time at Volosist, I worked on WhatsApp automation using Meta’s Cloud API, built webhook-based systems, and created AI agents that could interact with users. That experience pushed me to think more in terms of systems rather than just code.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I enjoy what people call “vibe coding”—getting into a flow, trying things out, and building end-to-end until it actually works. It’s less about perfection and more about making something useful.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Right now, I’m exploring AI agents, automation, and trying to build things that can stand on their own. If you’re building something interesting in this space, I’m always open to connecting.
              </p>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
