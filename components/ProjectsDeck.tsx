"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";

type Props = {
  items: Project[];
};

const stackedOffsets = [
  { x: -140, y: -140, rotate: -10 },
  { x: 10, y: -180, rotate: -4 },
  { x: 150, y: -120, rotate: 6 },
  { x: -90, y: -10, rotate: -6 },
  { x: 120, y: 20, rotate: 8 },
  { x: -60, y: 140, rotate: -2 },
  { x: 90, y: 160, rotate: 4 }
];

export default function ProjectsDeck({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject = activeIndex !== null ? items[activeIndex] : null;

  return (
    <div className="space-y-10">
      <div
        className="relative hidden h-[900px] md:block"
        onMouseLeave={() => setActiveIndex(null)}
      >
        <div className="pointer-events-none absolute inset-x-32 bottom-16 h-32 rounded-full bg-gradient-to-r from-sky-500/20 via-white/10 to-fuchsia-500/20 blur-3xl" />
        {items.map((project, index) => {
          const offset = stackedOffsets[index % stackedOffsets.length];
          const zIndex = items.length - index;
          return (
            <motion.article
              key={project.title}
              className="group absolute left-1/2 top-1/2 flex w-[420px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_35px_120px_rgba(2,6,23,0.55)] ring-1 ring-slate-100/5 backdrop-blur-3xl"
              style={{ zIndex }}
              tabIndex={0}
              initial={{ opacity: 0, x: offset.x, y: offset.y + 80, rotate: offset.rotate - 6 }}
              whileInView={{ opacity: 1, x: offset.x, y: offset.y, rotate: offset.rotate }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 160, damping: 22, delay: index * 0.08 }}
              whileHover={{
                x: offset.x,
                y: offset.y - 20,
                rotate: offset.rotate * 0.7,
                scale: 1.04,
                boxShadow: "0 45px 140px rgba(14, 165, 233, 0.45)",
                transition: { type: "spring", stiffness: 220, damping: 20 }
              }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex((prev) => (prev === index ? null : prev))}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex((prev) => (prev === index ? null : prev))}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-sky-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-300/80">
                    {project.period}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">{project.stack}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  project.status === "In Development"
                    ? "bg-amber-900/80 text-amber-200"
                    : "bg-slate-900/80 text-slate-200"
                }`}>
                  {project.status === "In Development" ? "In Dev" : "Build"}
                </span>
              </div>
              <p className="relative mt-4 text-sm text-slate-200">
                {project.tagline}
              </p>
              <motion.ul
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 space-y-2 text-xs text-slate-300"
              >
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-gradient-to-r from-slate-500 to-sky-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </motion.ul>
              {project.link && (
                <motion.a
                  href={project.link}
                  whileHover={{ x: 4 }}
                  className="relative mt-5 inline-flex items-center gap-2 text-xs font-medium text-sky-300"
                >
                  View live
                  <span aria-hidden>↗</span>
                </motion.a>
              )}
            </motion.article>
          );
        })}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            key={activeProject.title}
            className="pointer-events-none fixed inset-0 z-40 hidden md:flex items-center justify-center bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "opacity" }}
          >
            <motion.div
              className="pointer-events-none w-[780px] max-w-[90vw] rounded-[44px] border border-white/15 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-sky-950/70 p-10 shadow-[0_55px_160px_rgba(8,47,73,0.75)]"
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 60 }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 18,
                mass: 0.8
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300/80">
                    {activeProject.period}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    {activeProject.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{activeProject.stack}</p>
                </div>
                <span className={`rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] ${
                  activeProject.status === "In Development"
                    ? "bg-amber-900/80 text-amber-100"
                    : "bg-slate-900/80 text-slate-100"
                }`}>
                  {activeProject.status === "In Development" ? "In Dev" : "Build"}
                </span>
              </div>
              <p className="mt-6 text-base text-slate-200">
                {activeProject.tagline}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200/90">
                {activeProject.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-6 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {activeProject.link && (
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                  {activeProject.link}
                  <span aria-hidden>↗</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-6 md:hidden">
        {items.map((project) => (
          <article key={project.title} className="card-glass rounded-2xl p-5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {project.period} · {project.stack}
                </p>
              </div>
              <span className={`rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${
                project.status === "In Development"
                  ? "bg-amber-500/10 text-amber-300"
                  : "bg-sky-500/10 text-sky-300"
              }`}>
                {project.status === "In Development" ? "IN DEV" : "BUILD"}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{project.tagline}</p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-3 rounded-full bg-sky-400/80" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-sky-300 hover:text-sky-200"
              >
                View live
                <span aria-hidden>↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
