"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const AdminThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const useAdminTheme = () => useContext(AdminThemeContext);

export const AdminThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("admin-theme", newTheme);
  };

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem("admin-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  // Update root html element classes
  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [theme, mounted]);

  // Avoid layout shift before loading theme
  if (!mounted) {
    return <div className="dark h-full w-full">{children}</div>;
  }

  return (
    <AdminThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="h-full w-full transition-colors duration-300">
        {children}
      </div>
    </AdminThemeContext.Provider>
  );
};
