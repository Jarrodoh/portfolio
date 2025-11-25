"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Journey" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const pathname = usePathname();
  const buildHref = (hash: string) => {
    const target = hash.startsWith("#") ? hash : `#${hash}`;
    return pathname === "/" ? target : `/${target}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-500 origin-left z-40"
        style={{ scaleX }}
      />
      <div className="mx-auto max-w-6xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-full bg-slate-950/80 px-4 py-2 shadow-lg shadow-sky-500/10 ring-1 ring-slate-800/60 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-sky-500 to-fuchsia-500 animate-float" />
            <span className="font-display text-sm font-semibold tracking-wide">
              JARROD OH
            </span>
          </div>

          <button
            className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 bg-slate-100" />
              <span className="block h-0.5 w-4 bg-slate-100" />
            </div>
          </button>

          <ul className="hidden items-center gap-6 text-sm text-slate-200 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={buildHref(link.href)}
                  className="group relative transition-colors hover:text-sky-400"
                  prefetch={false}
                >
                  {link.label}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px translate-y-1 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl bg-slate-950/95 p-4 text-sm shadow-lg shadow-sky-500/10 ring-1 ring-slate-800/80 sm:hidden">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={buildHref(link.href)}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-1.5 text-slate-200 hover:bg-slate-800/80 hover:text-sky-400"
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}