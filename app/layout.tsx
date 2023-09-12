import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans, Cairo } from "next/font/google";

import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Next 13 Weather App",
  description: "A simple weather app built with Next.js 13 and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${cairo.variable} font-sans`}
    >
      <body className="bg-slate-300 dark:bg-slate-800 min-h-screen font-mono">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
