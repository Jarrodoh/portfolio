"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { MouseEvent } from "react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="top"
      className="relative flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between"
    >
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 max-w-xl"
      >
        <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700/80">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          Applied AI Student · Singapore
        </p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Building AI, cloud and automation projects{" "}
            <span className="bg-gradient-to-r from-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
              that actually ship.
            </span>
          </h1>
          <p className="text-sm text-slate-300 sm:text-base">
            I’m Jarrod, a Diploma in Applied Artificial Intelligence student at
            Temasek Polytechnic. I enjoy turning{" "}
            <span className="font-medium text-sky-300">
              machine learning, computer vision and automation
            </span>{" "}
            into real working tools – from AWS Rekognition plant apps to UiPath
            bots that generate full reports.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
          >
            View projects
            <span aria-hidden>↗</span>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-4 py-2 font-medium text-slate-200 hover:border-sky-400 hover:text-sky-300"
          >
            Contact me
          </motion.a>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-slate-400">
          <span>Python · ML · CV</span>
          <span>UiPath · Automation</span>
          <span>AWS · Streamlit · React</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative mx-auto h-64 w-64 max-w-xs sm:h-72 sm:w-72 perspective-1000"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-500/40 via-fuchsia-500/30 to-emerald-400/30 blur-3xl" />
        <motion.div 
          style={{ transform: "translateZ(75px)" }}
          className="relative h-full w-full rounded-[2rem] card-glass overflow-hidden"
        >
          <div className="absolute top-4 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full border border-white/30 bg-slate-900/30 shadow-xl shadow-sky-500/40 ring-2 ring-slate-900/40 overflow-hidden relative">
            <Image
              src="/profile.jpg"
              alt="Portrait of Jarrod Oh"
              fill
              sizes="128px"
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-y-0 w-1/2 bg-gradient-to-b from-transparent via-sky-400/40 to-transparent animate-shimmer" />
          </div>
          <div className="relative flex h-full flex-col justify-between p-5 text-xs">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-sky-300">
                LIVE PROJECTS
              </p>
              <p className="mt-1 text-sm font-semibold">Jarrod’s Lab</p>
            </div>
            <div className="space-y-2">
              <Stat label="Deployed apps" value="6+" />
              <Stat label="Hackathons joined" value="3" />
              <Stat label="Lines of code" value="100k+" />
            </div>
            <p className="mt-2 text-[10px] text-slate-400">
              Built with curiosity, lots of bug fixing and way too many VS Code
              tabs.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2">
      <span className="text-[11px] text-slate-400">{label}</span>
      <span className="text-sm font-semibold text-sky-300">{value}</span>
    </div>
  );
}