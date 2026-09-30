"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Book, Notebook, Briefcase, Mail, Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Precise scroll-position detection to prevent skipping small sections
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const sectionIds = ["projects", "experience", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      // When near top of the page, default to Home
      if (window.scrollY < 180) {
        setActiveSection("");
        return;
      }

      // Check if user is scrolled near the bottom of the page (activates Contact)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection("contact");
        return;
      }

      // Find the current section under the focus line
      let current = "";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    // Initial check on load
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const getHref = (href: string) => {
    if (href.startsWith("#")) {
      return isHomePage ? href : `/${href}`;
    }
    return href;
  };

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: Book, label: "Projects", href: "#projects" },
    { icon: Notebook, label: "Blog", href: "/blogs" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md backdrop-saturate-150 border border-white/40 dark:border-white/10 shadow-lg dark:shadow-2xl transition-all duration-300">

        {navItems.map((item) => {
          const targetHref = getHref(item.href);

          let isActive = false;
          if (pathname === "/blogs") {
            isActive = item.href === "/blogs";
          } else if (isHomePage) {
            if (activeSection) {
              isActive = item.href === `#${activeSection}`;
            } else {
              isActive = item.href === "/";
            }
          }

          return (
            <NavItem
              key={item.label}
              {...item}
              href={targetHref}
              isActive={isActive}
            />
          );
        })}

        <div className="w-px h-5 bg-neutral-200 dark:bg-neutral-800 mx-1" />

        <div className="group relative">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-transparent dark:border-white/5 text-neutral-600 dark:text-neutral-400 transition-all duration-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 hover:border-neutral-200 dark:hover:border-white/10 hover:scale-105"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              currentTheme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )
            ) : (
              <div className="w-4 h-4" />
            )}
          </button>
          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-2 group-hover:translate-y-0 pointer-events-none">
            <div className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-medium px-2.5 py-1 rounded-lg whitespace-nowrap shadow-sm">
              Theme
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rotate-45" />
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  href,
  isActive
}: {
  icon: any;
  label: string;
  href: string;
  isActive?: boolean;
}) {
  return (
    <Link href={href} className="group relative block">
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-105 ${isActive
          ? "bg-neutral-100 dark:bg-white/15 border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white font-medium shadow-sm"
          : "border-transparent dark:border-white/5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 hover:border-neutral-200 dark:hover:border-white/10"
          }`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-2 group-hover:translate-y-0 pointer-events-none">
        <div className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-medium px-2.5 py-1 rounded-lg whitespace-nowrap shadow-sm">
          {label}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 dark:bg-neutral-100 rotate-45" />
        </div>
      </div>
    </Link>
  );
}