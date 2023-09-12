'use client'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function DarkMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => 
    setMounted(true)
  , []);

  if (!mounted) return null;

  return (
    <button className="p-2 rounded" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  )
}