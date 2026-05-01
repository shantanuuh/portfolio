import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Shantanu Harkulkar | AI Automation & Generative AI Developer",
  description: "I build AI systems that automate real-world workflows. Specializing in WhatsApp automation, Meta Cloud API, and AI Agent architecture.",
  openGraph: {
    title: "Shantanu Harkulkar | AI Portfolio",
    description: "AI Automation & Generative AI Developer",
    images: ["/me.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-grid`} suppressHydrationWarning>

        {children}
      </body>
    </html>
  );
}
