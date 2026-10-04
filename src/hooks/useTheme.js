import { useEffect, useState } from "react";

const STORAGE_KEY = "demo-platform-theme";

/**
 * Reads the theme from localStorage (or defaults to "dark"),
 * applies it to <html data-theme="...">, and returns
 * [theme, toggleTheme].
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  // Whenever `theme` changes, sync it to <html> and localStorage.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return [theme, toggleTheme];
}