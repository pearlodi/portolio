"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  HomeIcon,
  MoonStar,
  NotebookText,
  Sun,
  User2Icon,
  Menu,
  X,
} from "lucide-react";
import { HiLightBulb } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa";
import Link from "next/link";

const navItems = [
  { label: "Home", icon: HomeIcon, id: "#home" },
  { label: "About", icon: User2Icon, id: "#about" },
  { label: "Jobs", icon: NotebookText, id: "#resume" },
  { label: "Skills", icon: HiLightBulb, id: "#skills" },
  { label: "Projects", icon: FaRegImages, id: "#projects" },
  { label: "Articles", icon: IoBookSharp, id: "#articles" },
  { label: "Contact", icon: IoMdContact, id: "#contact" },
];

const Buttons = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  useEffect(() => {
    const onScroll = () => {
      const sections = navItems
        .map(item => item.id.replace("#", ""))
        .filter(id => id !== "home");
  
      let current = "";
  
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
  
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = `#${id}`;
        }
      });
  
      setActiveId(current);
    };
  
    window.addEventListener("scroll", onScroll);
    onScroll();
  
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  
  return (
    <>
      {/* ================= MOBILE MENU BUTTON ================= */}
      <div className=" flex items-center   justify-end w-full">
        <div className="fixed bg-[#080e29] px-2 py-1 rounded-full top-4 mr-2  z-[1000] gap-2 md:hidden">
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="rounded-full bg-[#080e29] p-2 text-white shadow-lg"
            >
              <Menu size={20} />
            </button>
          )}

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full ml-2 bg-gray-200 dark:bg-[#c726a4] p-2"
          >
            {theme === "light" ? <Sun size={18} /> : <MoonStar size={18} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0  z-[998] bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
          md:hidden
        `}
      />

      {/* ================= MOBILE NAV ================= */}
      <aside
        className={`
          fixed top-0 left-0 z-[999]
          h-full w-64
          bg-white dark:bg-[#080e29]
          p-4 shadow-xl
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setOpen(false)}
            className=" rounded-full w-fit bg-[#c726a4] p-2 text-white"
          >
            <X size={18} />
          </button>
          {navItems.map(({ label, icon: Icon, id }) => (
            <Link key={label} href={id} onClick={() => setOpen(false)}>
              <div className="flex items-center gap-3 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-white/10">
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      {/* ================= DESKTOP NAV (UNCHANGED) ================= */}
      <div className="fixed top-1/2 -translate-y-1/2 left-3 z-[999] hidden md:block">
        <div className="flex flex-col gap-3">
          {/* Theme Toggle */}
          <div className="group">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="
                w-9 flex items-center group-hover:w-32 overflow-hidden
                rounded-full bg-[#c726a4] p-2 text-white shadow-lg
                transition-all duration-300 ease-out
              "
            >
              <span className="flex w-8 justify-center">
                {theme === "light" ? <Sun size={18} /> : <MoonStar size={18} />}
              </span>
              <span className="ml-2 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100">
                {theme === "light" ? "Light mode" : "Dark mode"}
              </span>
            </button>
          </div>

          {/* Navigation Buttons */}
          {navItems.map(({ label, icon: Icon, id }) => (
            <Link href={id} key={label}>
              <div className="cursor-pointer group">
                <button
                className={`
      flex items-center w-9 group-hover:w-24 overflow-hidden
                    rounded-full bg-gray-200 dark:bg-[#080e29]
                    p-2 shadow-md transition-all duration-300 ease-out
 
`}

                >
                  <span className="flex justify-center">
                  <Icon
  size={20}
  className={
    id !== "#home" && activeId === id
      ? "text-[#c726a4]"
      : "text-[#080e29] dark:text-white"
  }
/>

                  </span>
                  <span className="ml-2 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 dark:text-white">
                    {label}
                  </span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Buttons;
