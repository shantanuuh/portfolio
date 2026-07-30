"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
    { name: "Demos", href: "/demos" },
    { name: "Blogs", href: "/blog" },
];

function FooterGrainientCanvas() {
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
                imgData.data[i + 3] = 22;  // Grain intensity alpha
            }
            grainCtx.putImageData(imgData, 0, 0);
        }

        let time = 0;

        const render = () => {
            const width = canvas.offsetWidth;
            const height = canvas.offsetHeight;

            time += 0.006; // Animated movement speed

            // Base Deep Blue Gradient Background
            const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
            baseGrad.addColorStop(0, "#1e40af"); // Deep Royal Blue
            baseGrad.addColorStop(1, "#1d4ed8"); // Rich Blue
            ctx.fillStyle = baseGrad;
            ctx.fillRect(0, 0, width, height);

            // --- Radial Mesh Wave 1 ---
            const x1 = width * 0.3 + Math.sin(time) * (width * 0.25);
            const y1 = height * 0.5 + Math.cos(time * 0.8) * (height * 0.3);
            const grad1 = ctx.createRadialGradient(x1, y1, 10, x1, y1, width * 0.6);
            grad1.addColorStop(0, "rgba(37, 99, 235, 0.8)");
            grad1.addColorStop(0.6, "rgba(29, 78, 216, 0.2)");
            grad1.addColorStop(1, "rgba(30, 58, 138, 0)");

            // --- Radial Mesh Wave 2 ---
            const x2 = width * 0.75 + Math.cos(time * 1.1) * (width * 0.2);
            const y2 = height * 0.4 + Math.sin(time * 0.9) * (height * 0.3);
            const grad2 = ctx.createRadialGradient(x2, y2, 10, x2, y2, width * 0.5);
            grad2.addColorStop(0, "rgba(14, 165, 233, 0.6)"); // Cyan Accent Highlight
            grad2.addColorStop(0.7, "rgba(37, 99, 235, 0.15)");
            grad2.addColorStop(1, "rgba(30, 58, 138, 0)");

            // Render Mesh Gradients
            ctx.fillStyle = grad1;
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = grad2;
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
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"
        />
    );
}

export function Footer() {
    const currentYear = new Date().getFullYear();
    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNavigation = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();

        if (!href.includes("#")) {
            router.push(href);
            return;
        }

        const [path, hash] = href.split("#");

        if (window.location.pathname === "/" || window.location.pathname === "") {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
            return;
        }

        router.push("/");
        setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 300);
    };

    return (
        <>
            <footer className="relative w-full px-6 py-12 md:px-10 md:py-14 mt-24 text-white overflow-hidden border-t border-white/10 shadow-lg">
                {/* Animated Grainient Background Canvas */}
                <FooterGrainientCanvas />

                <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-10 relative z-10">
                    {/* Top: Brand + Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center flex flex-col items-center"
                    >
                        <Link
                            href="/"
                            className="text-1.5xl font-bold tracking-tight text-white hover:text-blue-100 transition-all duration-200"
                        >
                            Shantanu Harkulkar
                        </Link>
                        <p className="mt-1.5 text-xs font-normal text-white/70">
                            © {currentYear} All rights reserved.
                        </p>
                    </motion.div>

                    {/* Middle: Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 max-w-2xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavigation(e, link.href)}
                                className="text-sm font-medium text-white/90 hover:text-white hover:underline underline-offset-4 decoration-2 transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>

                    {/* Bottom: Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-6"
                    >
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="text-white/90 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-200"
                        >
                            <Github size={22} strokeWidth={2} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="text-white/90 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-200"
                        >
                            <Linkedin size={22} strokeWidth={2} />
                        </a>
                        <a
                            href="mailto:shantanu.harkulkar@gmail.com"
                            aria-label="Email"
                            className="text-white/90 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all duration-200"
                        >
                            <Mail size={22} strokeWidth={2} />
                        </a>
                    </motion.div>
                </div>
            </footer>

            {/* Scroll‑to‑top button container matching page layout width */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 md:px-10 pointer-events-none z-50 flex justify-end">
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 md:p-4 rounded-full glass border border-white/20 shadow-2xl group pointer-events-auto bg-white/10 backdrop-blur-md"
                    aria-label="Scroll to top"
                >
                    <ChevronUp
                        size={24}
                        strokeWidth={2.5}
                        className="text-foreground/90 group-hover:text-blue-300 group-hover:-translate-y-1 transition-all duration-300 ease-out font-medium tracking-tight" />
                </motion.button>
            </div>
        </>
    );
}