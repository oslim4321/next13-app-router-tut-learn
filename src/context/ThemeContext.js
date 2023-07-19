"use client";

import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

export const ThememeContext = createContext();

export const ThemeProviderFunc = ({ children }) => {
  const [mode, setmode] = useState("dark");
  function toggle() {
    setmode((prev) => (prev === "dark" ? "light" : "dark"));
  }
  return (
    <ThememeContext.Provider value={{ mode, toggle }}>
      <div className={`theme ${mode === "dark" ? "darkMode" : "lightMode"}`}>
        {children}
      </div>
    </ThememeContext.Provider>
  );
};

export default ThemeProviderFunc;
export const GlobalThemContext = () => {
  return useContext(ThememeContext);
};
