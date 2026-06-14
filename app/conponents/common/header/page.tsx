"use client";

import Link from "next/link";
import { FaBars, FaCode, FaSun, FaMoon } from "react-icons/fa6";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";
import SocialMediaLinks from "../media/page";
import { useTheme } from "../theme/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-neutral-200/30 dark:bg-neutral-800/30 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <header className="w-full bg-background/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 px-8 py-3 sm:px-10 lg:px-12 xl:px-24 md:py-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
        <div className="w-full flex items-center justify-between relative">
          
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 z-50">
            <FaCode size={32} className="text-blue-500 hover:scale-105 transition-transform duration-300" />
            <span className="font-bold text-lg tracking-tight hidden sm:block text-foreground">Portfolio</span>
          </Link>

          {/* Center: Navigation Menu */}
          <nav className="md:absolute md:left-1/2 md:-translate-x-1/2 z-40">
            <ul
              className={`flex flex-col uppercase font-medium text-sm gap-6 md:gap-8 items-center bg-background/95 dark:bg-slate-900/95 backdrop-blur-md md:backdrop-blur-none border-b border-neutral-200/50 dark:border-neutral-800/50 md:border-b-0 h-[calc(100vh-3.5rem)] w-full justify-center fixed md:static md:flex-row md:w-auto md:h-auto md:bg-transparent left-0 top-14 md:top-auto transition-transform duration-300 ease-in-out md:translate-x-0 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
              {menuItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.name} className="w-full md:w-auto text-center">
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-foreground/85 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              {/* Mobile-only social links in menu drawer */}
              <li className="mt-8 md:hidden">
                <SocialMediaLinks />
              </li>
            </ul>
          </nav>

          {/* Right: Social Media Links & Theme Toggle */}
          <div className="flex items-center gap-4 sm:gap-6 z-50">
            <div className="hidden md:block">
              <SocialMediaLinks />
            </div>
            
            <ThemeToggle />

            <button
              className="text-foreground focus:outline-none md:hidden p-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <FaBars size={24} />
            </button>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;
