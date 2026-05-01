"use client";

import { motion } from "framer-motion";

export function FlowLines() {
  const lines = [
    // Left to right (original direction)
    { d: "M-100 200 C 150 150, 350 250, 500 200 S 850 150, 1100 200", duration: 25, delay: 0, width: 0.8, gradId: "gradLR" },
    { d: "M-100 600 C 100 550, 300 650, 500 600 S 800 550, 1100 600", duration: 28, delay: 5, width: 1, gradId: "gradLR" },

    // Right to left
    { d: "M1100 350 C 850 300, 650 400, 450 350 S 150 300, -100 350", duration: 32, delay: 3, width: 0.7, gradId: "gradRL" },
    { d: "M1100 750 C 800 800, 600 700, 400 750 S 100 800, -100 750", duration: 38, delay: 8, width: 0.5, gradId: "gradRL" },

    // Top to bottom (diagonal)
    { d: "M200 -100 C 250 200, 150 400, 200 600 S 250 800, 200 1100", duration: 30, delay: 2, width: 0.6, gradId: "gradTB" },
    { d: "M700 -100 C 750 250, 650 450, 700 650 S 750 850, 700 1100", duration: 36, delay: 6, width: 0.9, gradId: "gradTB" },

    // Bottom to top (diagonal)
    { d: "M400 1100 C 350 800, 450 600, 400 400 S 350 200, 400 -100", duration: 33, delay: 4, width: 0.5, gradId: "gradBT" },
    { d: "M850 1100 C 900 750, 800 550, 850 350 S 900 150, 850 -100", duration: 40, delay: 9, width: 0.8, gradId: "gradBT" },

    // Diagonal top-left to bottom-right
    { d: "M-100 -100 C 100 150, 300 300, 500 500 S 800 750, 1100 1100", duration: 45, delay: 1, width: 0.4, gradId: "gradDiag1" },

    // Diagonal top-right to bottom-left
    { d: "M1100 -100 C 900 150, 700 300, 500 500 S 200 750, -100 1100", duration: 42, delay: 7, width: 0.5, gradId: "gradDiag2" },
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
            stroke={`url(#${line.gradId})`}
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
          {/* Left to right */}
          <linearGradient id="gradLR" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </linearGradient>
          {/* Right to left */}
          <linearGradient id="gradRL" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          {/* Top to bottom */}
          <linearGradient id="gradTB" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </linearGradient>
          {/* Bottom to top */}
          <linearGradient id="gradBT" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          {/* Diagonal TL→BR */}
          <linearGradient id="gradDiag1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          {/* Diagonal TR→BL */}
          <linearGradient id="gradDiag2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
