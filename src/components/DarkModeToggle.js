"use client";
import { GlobalThemContext } from "@/context/ThemeContext";
import React from "react";

const DarkModeToggle = () => {
  // const mode = "light";
  const { mode, toggle } = GlobalThemContext();
  console.log(mode);
  return (
    <div
      className="w-[60px] h-[24px] border border-[#53c28b70] rounded-[30px] flex items-cnter justify-between px-1 cursor-pointer relative transition duration-150 ease-in-out"
      onClick={toggle}
    >
      <div>🌛</div>
      <div>🌞</div>
      <div
        className={`w-[20px] h-[20px] p-2 rounded-full absolute transition duration-150 ease-in-out  ${
          mode === "light" ? "bg-black" : "bg-white"
        }`}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
