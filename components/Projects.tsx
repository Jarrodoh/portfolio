"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <SectionHeader
        eyebrow="PROJECTS"
        title="Selected work."
        description="A snapshot of projects where I combined ML, cloud and automation into working prototypes."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group card-glass flex flex-col rounded-2xl p-5 hover:shadow-sky-500/30"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {project.period} · {project.stack}
                </p>
              </div>
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sky-300">
                BUILD
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{project.tagline}</p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              {project.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-3 rounded-full bg-sky-400/80" />
                  <span>{b}</span>
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
          </motion.article>
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-sky-100"
        >
          More projects
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </section>
  );
}