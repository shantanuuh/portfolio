import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shantanuharkulkar.com"),
  title: "Shantanu Harkulkar",
  description: "I build AI systems that automate real-world workflows. Specializing in WhatsApp automation, Meta Cloud API, and AI Agent architecture.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Shantanu Harkulkar",
    description: "AI Automation & Generative AI Developer",
    images: ["/me.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shantanu Harkulkar",
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
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

