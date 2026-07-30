"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Globe } from "lucide-react";
import { useEffect, useRef } from "react";

export function BlueSilkGrainientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Pre-generate fine grain noise pattern for maximum performance
    const grainCanvas = document.createElement("canvas");
    grainCanvas.width = 128;
    grainCanvas.height = 128;
    const grainCtx = grainCanvas.getContext("2d");
    if (grainCtx) {
      const imgData = grainCtx.createImageData(128, 128);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const val = Math.random() * 255;
        imgData.data[i] = val;     // R
        imgData.data[i + 1] = val; // G
        imgData.data[i + 2] = val; // B
        imgData.data[i + 3] = 18;  // Grain intensity alpha
      }
      grainCtx.putImageData(imgData, 0, 0);
    }

    let time = 0;

    const render = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Faster silky wave movement speed
      time += 0.007;

      // Base white background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      // --- Wave 1: Vibrant Sapphire Grainient ---
      const x1 = width * 0.45 + Math.sin(time) * (width * 0.22);
      const y1 = height * 0.35 + Math.cos(time * 0.8) * (height * 0.18);
      const grad1 = ctx.createRadialGradient(x1, y1, 10, x1, y1, width * 0.55);
      grad1.addColorStop(0, "rgba(37, 99, 235, 0.32)");   // Royal Blue
      grad1.addColorStop(0.5, "rgba(96, 165, 250, 0.18)"); // Sky Blue
      grad1.addColorStop(1, "rgba(255, 255, 255, 0)");

      // --- Wave 2: Cobalt Wave Grainient ---
      const x2 = width * 0.75 + Math.cos(time * 1.1) * (width * 0.2);
      const y2 = height * 0.65 + Math.sin(time * 0.9) * (height * 0.22);
      const grad2 = ctx.createRadialGradient(x2, y2, 10, x2, y2, width * 0.5);
      grad2.addColorStop(0, "rgba(29, 78, 216, 0.28)");   // Deep Cobalt
      grad2.addColorStop(0.6, "rgba(191, 219, 254, 0.14)");
      grad2.addColorStop(1, "rgba(255, 255, 255, 0)");

      // --- Wave 3: Cyan Highlight Wave ---
      const x3 = width * 0.25 + Math.sin(time * 1.3) * (width * 0.18);
      const y3 = height * 0.7 + Math.cos(time * 1.0) * (height * 0.18);
      const grad3 = ctx.createRadialGradient(x3, y3, 10, x3, y3, width * 0.45);
      grad3.addColorStop(0, "rgba(14, 165, 233, 0.25)");   // Cyan Glow
      grad3.addColorStop(1, "rgba(255, 255, 255, 0)");

      // Composite gradient mesh
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, width, height);

      // --- Grain Overlay ---
      if (grainCtx) {
        const pattern = ctx.createPattern(grainCanvas, "repeat");
        if (pattern) {
          ctx.fillStyle = pattern;
          ctx.fillRect(0, 0, width, height);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90"
    />
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-20 bg-white overflow-hidden">
      {/* Faster Blue Silk Grainient Background */}
      <BlueSilkGrainientBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-4 border-primary/10 pb-12"
          >
            {/* Card without hover border elevation or interaction glow */}
            <div className="p-8 backdrop-blur-md bg-white/70 border border-slate-200/60 shadow-sm rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Generative AI Intern</h3>
                  <div className="flex items-center gap-2 text-primary mt-1 font-medium">
                    <Globe size={16} />
                    <a
                      href="https://volosist.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary/70 transition-colors underline underline-offset-4"
                    >
                      Volosist.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-foreground/50 text-sm bg-slate-100/80 border border-slate-200 px-4 py-2 rounded-full w-fit">
                  <Calendar size={14} />
                  <span>Dec 2025 – Mar 2026 (Around 3 Months)</span>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Architected end-to-end WhatsApp automation workflows using Meta Cloud API and n8n webhooks.",
                  "Developed statica.in, an e-commerce platform featuring a custom-built PHP chatbot plugin.",
                  "Engineered Retrieval-Augmented Generation (RAG) AI agents for intelligent customer support.",
                  "Configured secure SMTP email automation systems for dynamic newsletter and campaign workflows.",
                  "Implemented on-page and off-page SEO strategies, significantly improving search visibility."
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 text-foreground/70"
                  >
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}