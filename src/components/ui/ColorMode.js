"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import IconSunDark from "/public/icons/icon-sun-dark.svg";
import IconSunLight from "/public/icons/icon-sun-light.svg";
import IconMoonDark from "/public/icons/icon-moon-dark.svg";
import IconMoonLight from "/public/icons/icon-moon-light.svg";

export default function ColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 md:gap-4"
    >
      <Image
        src={resolvedTheme === "dark" ? IconSunLight : IconSunDark}
        width={20}
        height={20}
        alt="Color Mode Sun Icon"
      ></Image>
      <div className="md:w-14 md:h-7 w-8 h-5 flex items-center rounded-full p-1 cursor-pointer bg-secondary">
        <div
          className={
            "bg-white md:w-6 md:h-6 h-3 w-3 rounded-full shadow-md transform transition-all duration-300 ease-in-out" +
            (resolvedTheme === "dark"
              ? "transform translate-x-full"
              : "-translate-x-2")
          }
        ></div>
      </div>
      <Image
        src={resolvedTheme === "dark" ? IconMoonLight : IconMoonDark}
        width={20}
        height={20}
        alt="Color Mode Moon Icon"
      ></Image>
    </button>
  );
}
