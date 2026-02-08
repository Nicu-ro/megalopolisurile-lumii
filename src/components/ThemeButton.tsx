"use client";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center justify-center gap-2 px-6 py-2 transition-colors relative";

type ToggleOptionsType = "light" | "dark";

const ThemeButton = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("light");
  const [mounted, setMounted] = useState(false);

 
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as ToggleOptionsType | null;
    if (savedTheme) {
      setSelected(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (selected === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [selected, mounted]);

  return (
  
    <div className="flex items-center justify-center py-10 ml-8" suppressHydrationWarning>
     
      {mounted ? (
        <SliderToggle selected={selected} setSelected={setSelected} />
      ) : (
       
        <div className="h-[40px] w-[180px]" />
      )}
    </div>
  );
};

const SliderToggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full bg-transparent gap-8">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-500"
        }`}
        onClick={() => setSelected("light")}
      >
        <FiSun className="relative z-10 text-lg" />
        <span className="relative z-10">Light</span>
        {selected === "light" && (
          <motion.span
            layoutId="pill"
            className="absolute inset-y-0 -left-2 -right-2 z-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </button>
      
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-500"
        }`}
        onClick={() => setSelected("dark")}
      >
        <FiMoon className="relative z-10 text-lg" />
        <span className="relative z-10">Dark</span>
        {selected === "dark" && (
          <motion.span
            layoutId="pill"
            className="absolute inset-y-0 -left-2 -right-2 z-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;