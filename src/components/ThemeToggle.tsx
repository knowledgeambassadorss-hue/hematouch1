import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    
    if (initialTheme) {
      setTheme(initialTheme);
      if (initialTheme === "light") {
        root.classList.remove("dark");
        root.classList.add("light");
      } else {
        root.classList.add("dark");
        root.classList.remove("light");
      }
    } else {
      // Default to dark mode
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = theme === "dark" ? "light" : "dark";
    
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full hover:bg-secondary"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-foreground transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-foreground transition-all" />
      )}
    </Button>
  );
};

export default ThemeToggle;
