"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 py-10 md:py-0">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start w-full lg:flex-1"
          >
            <div className="relative w-[240px] h-[240px] md:w-[360px] md:h-[360px] lg:w-[480px] lg:h-[480px]">
              
              {/* Removed: Layer 1, 2, and 3 Aura animations */}

              <div className="relative w-full h-full overflow-hidden rounded-t-2xl rounded-bl-[125px] rounded-br-[90px] md:rounded-bl-[200px] md:rounded-br-[140px] lg:rounded-bl-[300px] lg:rounded-br-[160px]">
                <Image
                  src="/me.png"
                  alt="Shantanu Harkulkar"
                  fill
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 360px, 480px"
                  className="relative z-10 object-cover lg:object-contain translate-x-0 lg:translate-x-6 scale-110"
                  priority
                />
              </div>

              {/* Bottom Base Shadow stays for depth */}
              <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[70%] h-[40px] bg-black/10 blur-2xl rounded-full z-0" />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center md:text-left w-full"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="px-6 py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold border border-primary/20 tracking-wide uppercase"
            >
              Open for Opportunities
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] break-words"
            >
              Shantanu <span className="text-gradient">Harkulkar</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-2xl md:mx-0 mx-auto leading-relaxed px-4 md:px-0"
            >
              AI Automation & Generative AI Developer.
              <br />
              <span className="text-foreground font-semibold">"I build AI systems that automate real-world workflows."</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 md:mt-12 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-b from-primary to-primary/90 text-white rounded-full font-bold text-base md:text-lg flex items-center gap-3 transition-all shadow-[0_20px_40px_-15px_rgba(0,122,255,0.5)] hover:shadow-[0_25px_50px_-15px_rgba(0,122,255,0.6)] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-3">
                  View Projects <ArrowRight size={20} />
                </span>
              </motion.a>
              <div className="flex items-center gap-3 md:gap-4">
                <a
                  href="https://github.com/shantanuuh"
                  target="_blank"
                  className="p-3 md:p-4 glass rounded-full hover:bg-primary/5 transition-all hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shantanu-harkulkar-563b38269/"
                  target="_blank"
                  className="p-3 md:p-4 glass rounded-full hover:bg-primary/5 transition-all hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}