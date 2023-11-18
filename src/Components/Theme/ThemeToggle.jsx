import React, { useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === "light" ? (
        <i className="bx bxs-sun"></i>
      ) : (
        <i className="bx bxs-moon"></i>
      )}
    </button>
  );
}
