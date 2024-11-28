import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const themes = {
  light: {
    "--color-background": "#f9fafb",
    "--color-surface": "#ffffff",
    "--color-text": "#111827",
    "--color-text-secondary": "#4b5563",
    "--color-primary": "#dc2626",
    "--color-primary-hover": "#b91c1c",
    "--color-secondary": "#6b7280",
    "--color-secondary-hover": "#4b5563",
  },
  dark: {
    "--color-background": "#111827",
    "--color-surface": "#1f2937",
    "--color-text": "#f9fafb",
    "--color-text-secondary": "#d1d5db",
    "--color-primary": "#ef4444",
    "--color-primary-hover": "#dc2626",
    "--color-secondary": "#6b7280",
    "--color-secondary-hover": "#4b5563",
  },
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    // Apply theme CSS variables to :root
    const root = document.documentElement;
    Object.entries(themes[currentTheme]).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = {
    currentTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
