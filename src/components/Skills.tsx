"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Supabase", icon: "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "OpenAI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
  { name: "Meta", icon: "https://cdn.simpleicons.org/meta" },
  { name: "Mistral", icon: "https://cdn.simpleicons.org/mistralai" },
  { name: "Webhooks", icon: "https://img.icons8.com/color/48/webhook.png" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
  { name: "Hostinger", icon: "https://cdn.simpleicons.org/hostinger" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
];

function CardGrainientBackground({ offset = 0 }: { offset?: number }) {
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

    const grainCanvas = document.createElement("canvas");
    grainCanvas.width = 128;
    grainCanvas.height = 128;
    const grainCtx = grainCanvas.getContext("2d");
    if (grainCtx) {
      const imgData = grainCtx.createImageData(128, 128);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const val = Math.random() * 255;
        imgData.data[i] = val;
        imgData.data[i + 1] = val;
        imgData.data[i + 2] = val;
        imgData.data[i + 3] = 18;
      }
      grainCtx.putImageData(imgData, 0, 0);
    }

    let time = offset;

    const render = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      time += 0.005;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      const x1 = width * 0.4 + Math.sin(time) * (width * 0.3);
      const y1 = height * 0.3 + Math.cos(time * 0.8) * (height * 0.25);
      const grad1 = ctx.createRadialGradient(x1, y1, 5, x1, y1, width * 0.7);
      grad1.addColorStop(0, "rgba(37, 99, 235, 0.22)");
      grad1.addColorStop(0.6, "rgba(96, 165, 250, 0.12)");
      grad1.addColorStop(1, "rgba(255, 255, 255, 0)");

      const x2 = width * 0.7 + Math.cos(time * 1.1) * (width * 0.25);
      const y2 = height * 0.7 + Math.sin(time * 0.9) * (height * 0.3);
      const grad2 = ctx.createRadialGradient(x2, y2, 5, x2, y2, width * 0.6);
      grad2.addColorStop(0, "rgba(14, 165, 233, 0.20)");
      grad2.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

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
  }, [offset]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"
    />
  );
}

const skillGroups = [
  {
    title: "AI & Automation",
    skills: ["Generative AI", "RAG Systems", "AI Agents", "n8n", "Meta Cloud API"]
  },
  {
    title: "Web & Frontend",
    skills: ["Next.js", "React", "WordPress", "SEO", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Backend & DevOps",
    skills: ["Node.js", "PHP", "Supabase", "REST APIs", "Webhooks", "Docker", "Git/GitHub"]
  }
];

export function Skills() {
  const x = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth / 3 + 32);
    }
  }, []);

  useAnimationFrame((_time, delta) => {
    if (!width || isDragging) return;

    let moveBy = 0.5 * (delta / 16);
    let newX = x.get() - moveBy;

    if (newX <= -width) {
      newX += width;
    } else if (newX > 0) {
      newX -= width;
    }

    x.set(newX);
  });

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-28 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold"
          >
            The Core <span className="text-gradient">Stack</span>
          </motion.h2>
        </div>

        {/* Truly Infinite Logo Marquee */}
        <div className="relative mb-20 group h-20">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] cursor-grab active:cursor-grabbing">
            <motion.div
              ref={carouselRef}
              style={{ x }}
              drag="x"
              dragConstraints={{ right: 10000, left: -10000 }}
              dragElastic={0}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              className="flex gap-24 items-center whitespace-nowrap py-4"
            >
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 select-none pointer-events-none group-hover:scale-110 transition-transform">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-base md:text-lg font-semibold opacity-80">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl p-8 shadow-xs backdrop-blur-md transition-all hover:shadow-md"
            >
              {/* Dynamic Grainient Background Canvas */}
              <CardGrainientBackground offset={index * 1.5} />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-slate-900">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-white/70 backdrop-blur-sm text-sm font-medium text-slate-800 hover:bg-white hover:text-blue-600 transition-all shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}