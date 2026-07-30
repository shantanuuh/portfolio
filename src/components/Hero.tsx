"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

// Organic Wave-Clustered Navy Dot Grid with Fluid Glass Distortion
function FluidGlassDotGridBackground() {
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

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // --- GRID & LENS PARAMETERS ---
    const dotSpacing = 18;       // Clean, dense grid as shown in your image
    const baseRadius = 1.0;      // Tiny, sharp dot baseline
    const lensRadius = 65;       // Compact glass cursor lens
    const glassRefraction = 10; // Subtle liquid displacement

    // 2D Perlin Noise Math Generator (for organic wave clouds)
    const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (t: number, a: number, b: number) => a + t * (b - a);
    const grad = (hash: number, x: number, y: number) => {
      const h = hash & 7;
      const u = h < 4 ? x : y;
      const v = h < 4 ? y : x;
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    };

    const p = new Uint8Array(512);
    for (let i = 0; i < 256; i++) p[i] = p[i + 256] = Math.floor(Math.random() * 256);

    const noise2D = (x: number, y: number) => {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const xf = x - Math.floor(x);
      const yf = y - Math.floor(y);
      const u = fade(xf);
      const v = fade(yf);

      const aa = p[p[X] + Y];
      const ab = p[p[X] + Y + 1];
      const ba = p[p[X + 1] + Y];
      const bb = p[p[X + 1] + Y + 1];

      return lerp(
        v,
        lerp(u, grad(aa, xf, yf), grad(ba, xf - 1, yf)),
        lerp(u, grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1))
      );
    };

    let time = 0;

    const render = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      time += 0.003; // Smooth slow cloud drift speed

      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      for (let x = dotSpacing; x < width; x += dotSpacing) {
        for (let y = dotSpacing; y < height; y += dotSpacing) {
          // Compute organic noise value for this exact coordinate
          const noiseValue = noise2D(x * 0.004 + time, y * 0.004 + time * 0.5);

          // Normalized noise intensity (0.0 to 1.0)
          const cloudFactor = Math.max(0, Math.min(1, (noiseValue + 0.6) / 1.2));

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.hypot(dx, dy);

          let drawX = x;
          let drawY = y;

          // Deep Blue / Slate Navy Palette mapping based on cloud density
          const r = Math.round(2 + cloudFactor * 25);   // Deep midnight blue tone
          const g = Math.round(45 + cloudFactor * 65);  // Rich ocean teal/navy tone
          const b = Math.round(90 + cloudFactor * 110); // Sapphire blue highlight

          // Dense dark patches vs nearly transparent empty areas (as seen in your image)
          let alpha = Math.pow(cloudFactor, 2.2) * 0.85;
          let radius = baseRadius + cloudFactor * 0.4;

          // Compact Glass Lens Effect under cursor
          if (dist < lensRadius && dist > 0) {
            const normDist = dist / lensRadius;
            const glassFactor = Math.sin(normDist * Math.PI);
            const push = glassFactor * glassRefraction;

            const angle = Math.atan2(dy, dx);

            drawX = x + Math.cos(angle) * push;
            drawY = y + Math.sin(angle) * push;

            const centerPower = 1 - normDist;
            alpha = Math.min(0.95, alpha + centerPower * 0.3);
            radius = radius + centerPower * 0.3;
          }

          // Skip drawing if completely transparent for maximum performance
          if (alpha > 0.03) {
            ctx.beginPath();
            ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Fluid Glass Refracting Dark Dot Grid Background */}
      <FluidGlassDotGridBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 md:py-0">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start w-full lg:flex-1"
          >
            <div className="relative w-[240px] h-[240px] md:w-[360px] md:h-[360px] lg:w-[480px] lg:h-[480px]">
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
              <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[70%] h-[40px] bg-black/10 blur-2xl rounded-full z-0" />
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left w-full"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="px-6 py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold border border-primary/20 tracking-wide uppercase inline-block"
            >
              Open for Opportunities
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] break-words"
            >
              Shantanu <span className="text-gradient">Harkulkar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-2xl md:mx-0 mx-auto leading-relaxed px-4 md:px-0"
            >
              AI Automation & Generative AI Developer.
              <br />
              <span className="text-foreground font-semibold">
                "I build AI systems that automate real-world workflows."
              </span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 md:mt-12 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
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
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 md:p-4 glass rounded-full hover:bg-primary/5 transition-all block"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/shantanu-harkulkar-563b38269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 md:p-4 glass rounded-full hover:bg-primary/5 transition-all block"
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