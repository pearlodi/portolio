"use client";

import { useState } from "react";
import Logo from "../logo";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { MoonStar, Sun } from "lucide-react";

const Buttons = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // const handleDownloadPDF = () => {
  //     window.print();
  // };
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  console.log(theme, "theme");
  return (
    <div className="">
            <div className="fixed z-999 top-[50%]">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="px-3 py-1 rounded cursor-pointer bg-gray-200 dark:bg-[#080e29] text-black dark:text-white"
              >
                {theme === "light" ? <Sun />: <MoonStar />}
              </button>
            </div>
          
    </div>
  
  );
};

export default Buttons;
