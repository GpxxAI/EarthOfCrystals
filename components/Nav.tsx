"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Storia" },
  { href: "#collection", label: "Collezione" },
  { href: "#process", label: "Processo" },
  { href: "#contact", label: "Contatti" },
];

export default function Nav(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all",
      scrolled ? "backdrop-blur bg-black/40 border-b border-white/10" : "bg-transparent"
    )}>
      <nav className="container flex items-center justify-between py-4">
        <a href="#home" className="inline-flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="h-7 w-7" />
          <span className="font-semibold tracking-wide">Earth of Crystals</span>
        </a>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}><a className="hover:text-brand-300/90" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="md:hidden px-3 py-1.5 rounded-full bg-brand-500 hover:bg-brand-400 transition">Contatta</a>
      </nav>
    </header>
  )
}
