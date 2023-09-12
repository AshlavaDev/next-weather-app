"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavBarItem from "@/components/NavBarItem";
import DarkMode from "@/components/DarkMode";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center w-full h-8 px-4 py-4 md:py-8 text-lg md:text-2xl border-b border-black">
      <span>
        <Link href="/" legacyBehavior passHref className="font-display">
          Weather App
        </Link>
      </span>
      <NavigationMenu>
        <NavigationMenuList className="space-x-6">
          <NavBarItem href="/" label="Home" />
          <NavBarItem href="/search" label="Search by Location" />
          <NavBarItem href="/map" label="Weather Map" />
        </NavigationMenuList>
      </NavigationMenu>
      <DarkMode />
    </div>
  );
}
