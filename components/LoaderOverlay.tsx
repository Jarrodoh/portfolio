"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOADER_TEXT = "Loading Jarrod's Portfolio";

const balls = [
  { size: 52, left: "14%", delay: 0, x: [-40, 0, 24, -6] },
  { size: 72, left: "28%", delay: 0.05, x: [30, -12, 18, -22] },
  { size: 44, left: "42%", delay: 0.12, x: [-12, 22, -18, 14] },
  { size: 66, left: "56%", delay: 0.08, x: [18, -26, 20, -12] },
  { size: 50, left: "70%", delay: 0.18, x: [-20, 8, -10, 6] },
  { size: 42, left: "82%", delay: 0.22, x: [6, -14, 10, -4] }
];

export default function LoaderOverlay() {
  const [visible, setVisible] = useState(true);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (visible) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    setTypedText("");
    let index = 0;
    const interval = window.setInterval(() => {
      setTypedText(LOADER_TEXT.slice(0, index + 1));
      index += 1;
      if (index >= LOADER_TEXT.length) {
        window.clearInterval(interval);
      }
    }, 90);
    return () => window.clearInterval(interval);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative flex h-64 w-full max-w-2xl items-end justify-center">
            {balls.map((ball, index) => (
              <motion.span
                key={`${ball.left}-${index}`}
                className="metal-ball"
                style={{ left: ball.left, width: ball.size, height: ball.size }}
                initial={{ y: -220, scale: 0.85 }}
                animate={{
                  y: [-220, 0, -40, 0],
                  x: ball.x,
                  scale: [0.85, 1, 0.95, 1],
                  boxShadow: [
                    "0 20px 45px rgba(12, 74, 110, 0.2)",
                    "0 35px 65px rgba(14, 116, 144, 0.35)",
                    "0 18px 35px rgba(12, 74, 110, 0.25)",
                    "0 30px 55px rgba(14, 116, 144, 0.35)"
                  ]
                }}
                transition={{
                  duration: 2.4,
                  delay: ball.delay,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-3xl sm:text-5xl font-semibold tracking-[0.2em] text-slate-100">
                {typedText}
                <motion.span
                  className="ml-2 inline-block h-10 w-1 bg-slate-200 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "mirror" }}
                />
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
