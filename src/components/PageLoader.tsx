"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Decorative rings */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1], opacity: [0, 0.3, 0.1] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute h-[400px] w-[400px] rounded-full border border-marron/20"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2, 1.5], opacity: [0, 0.2, 0.05] }}
            transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
            className="absolute h-[400px] w-[400px] rounded-full border border-navy/15"
          />

          {/* Name reveal */}
          <motion.div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold tracking-wider text-foreground md:text-7xl"
            >
              {"Marron".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.08,
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Underline sweep */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] as const }}
              className="mt-2 h-[2px] origin-left bg-gradient-to-r from-marron via-marron/50 to-transparent"
            />
          </motion.div>

          {/* Loading counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.p className="font-mono text-sm tracking-[0.3em] text-marron/70">
              {Math.round(count).toString().padStart(3, "0")}
            </motion.p>

            {/* Progress bar */}
            <div className="h-[1px] w-48 overflow-hidden bg-line/30">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: count / 100 }}
                className="h-full origin-left bg-marron"
              />
            </div>
          </motion.div>

          {/* Exit curtains */}
          <motion.div
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="absolute inset-0 origin-bottom bg-background"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
