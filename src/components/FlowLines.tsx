"use client";

import { motion } from "framer-motion";

export function FlowLines() {
  const lines = [
    { d: "M-100 200 C 150 150, 350 250, 500 200 S 850 150, 1100 200", duration: 25, delay: 0, width: 0.8 },
    { d: "M-100 400 C 200 450, 400 350, 600 400 S 900 450, 1100 400", duration: 30, delay: 2, width: 0.5 },
    { d: "M-100 600 C 100 550, 300 650, 500 600 S 800 550, 1100 600", duration: 28, delay: 5, width: 1 },
    { d: "M-100 800 C 300 750, 500 850, 700 800 S 1000 750, 1100 800", duration: 35, delay: 1, width: 0.6 },
    { d: "M-100 150 C 250 200, 450 100, 650 150 S 950 200, 1100 150", duration: 22, delay: 7, width: 0.4 },
    { d: "M-100 750 C 150 700, 350 800, 550 750 S 850 700, 1100 750", duration: 40, delay: 3, width: 0.9 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <filter id="softBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>
        
        {lines.map((line, i) => (
          <motion.path
            key={i}
            d={line.d}
            stroke="url(#windGradient)"
            strokeWidth={line.width}
            fill="transparent"
            filter="url(#softBlur)"
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 0.4, 0],
              pathOffset: [0, 1.2],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
              ease: "linear"
            }}
          />
        ))}
        
        <defs>
          <linearGradient id="windGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

