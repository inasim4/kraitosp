"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeItem, setActiveItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showLabel, setShowLabel] = useState(false);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Work", href: "#work" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll tracking for active nav item
  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      let found = false;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) {
            setActiveItem(navItems[i].name);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveItem(navItems[0].name);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Smooth scroll with offset
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -72; // header height offset
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Progress for side nav
  const getSectionProgress = (href: string) => {
    const section = document.querySelector(href);
    if (!section) return 0;
    const rect = section.getBoundingClientRect();
    const height = rect.height || 1;
    const winHeight = window.innerHeight;
    if (rect.top > winHeight) return 0;
    if (rect.bottom < 0) return 1;
    const visible = Math.min(winHeight, rect.bottom) - Math.max(0, rect.top);
    return Math.max(0, Math.min(1, visible / height));
  };

  // Listen for scroll for side nav progress
  const [progress, setProgress] = useState<number[]>(
    Array(navItems.length).fill(0)
  );
  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => {
      setProgress(navItems.map((item) => getSectionProgress(item.href)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            {mounted && (
              <Image
                src={
                  theme === "dark"
                    ? "/logo/kraito-white.png"
                    : "/logo/kraito-black.png"
                }
                alt="Kraito Logo"
                width={120}
                height={40}
                className="h-8 w-auto pl-2"
                priority
              />
            )}
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-6"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                onClick={handleNavClick(item.href)}
                className={
                  `text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded-md ` +
                  (activeItem === item.name
                    ? "bg-primary/10 text-primary"
                    : "text-foreground")
                }
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <a href="#contact">
              <Button className="hidden md:inline-flex">Get in Touch</Button>
            </a>
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav
                  className="flex flex-col space-y-6 mt-8 px-4"
                  aria-label="Mobile navigation"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-label={item.name}
                      className={
                        `text-base font-medium transition-colors hover:text-primary px-2 py-1 rounded-md ` +
                        (activeItem === item.name
                          ? "bg-primary/10 text-primary"
                          : "text-foreground")
                      }
                      onClick={handleNavClick(item.href)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a href="#contact" className="mt-4">
                    <Button className="w-full">Get in Touch</Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Floating Side Navigation (Progress Indicator) */}
      <div
        className="fixed top-1/2 -translate-y-1/2 right-1 sm:right-2 md:right-4 xl:right-8 flex flex-col space-y-2 sm:space-y-3 md:space-y-4 z-40"
        style={{ pointerEvents: "none" }}
      >
        {navItems.map((item, idx) => (
          <div
            key={item.name}
            className="relative flex items-center group"
            style={{ pointerEvents: "auto" }}
            onMouseEnter={() => {
              setHoveredItem(item.name);
              setShowLabel(true);
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
              setShowLabel(false);
            }}
          >
            <button
              aria-label={`Scroll to ${item.name}`}
              onClick={handleNavClick(item.href)}
              className={`w-1.5 h-8 sm:w-2 sm:h-10 md:h-12 rounded-full transition-all duration-300 border-none focus:outline-none focus:ring-2 focus:ring-primary/60 bg-muted ${
                activeItem === item.name ? "bg-primary" : ""
              }`}
              style={{ height: `${24 + progress[idx] * 24}px` }}
            ></button>
            {/* Tooltip-style label, only show on sm+ or on active/hover */}
            <span
              className={`absolute right-5 sm:right-6 px-2 sm:px-3 py-1 rounded bg-background text-xs text-foreground shadow transition-opacity duration-200 pointer-events-none whitespace-nowrap ${
                (hoveredItem === item.name && showLabel) ||
                window.innerWidth < 640
                  ? "opacity-100"
                  : "opacity-0"
              } hidden xs:inline-block sm:inline-block`}
              style={{ top: "50%", transform: "translateY(-50%)" }}
              aria-hidden={hoveredItem !== item.name}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
