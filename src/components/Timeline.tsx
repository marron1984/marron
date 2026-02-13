"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import { timeline } from "@/constants/data";
import { Circle, Zap } from "lucide-react";

function TimelineItem({
  event,
  index,
  scrollProgress,
}: {
  event: (typeof timeline)[0];
  index: number;
  scrollProgress: number;
}) {
  const isEven = index % 2 === 0;
  const itemThreshold = index / timeline.length;
  const isActive = scrollProgress > itemThreshold;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isEven ? -100 : 100,
        scale: 0.85,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1,
        delay: index * 0.08,
        type: "spring",
        stiffness: 60,
        damping: 15,
      }}
      className={`relative flex items-start gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Content */}
      <div
        className={`flex-1 ${
          isEven ? "md:text-right" : "md:text-left"
        } text-left`}
      >
        <motion.div
          whileHover={{
            scale: 1.04,
            y: -6,
            rotateY: isEven ? -3 : 3,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          className={`inline-block rounded-2xl border ${
            event.highlight
              ? "border-marron/40 bg-marron/8"
              : "border-line bg-elevated"
          } p-6 transition-all duration-500 hover:shadow-xl ${
            event.highlight
              ? "hover:shadow-marron/15"
              : "hover:shadow-white/5"
          }`}
          style={{ perspective: "600px" }}
        >
          {/* Year badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08 + 0.2,
              type: "spring",
              stiffness: 300,
              damping: 12,
            }}
            className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-widest ${
              event.highlight
                ? "bg-marron/15 text-marron"
                : "bg-subtle text-dimmer"
            }`}
          >
            {event.year}
          </motion.span>

          <h3 className="mb-2 text-lg font-bold text-foreground">
            {event.title}
          </h3>

          <p className="mb-3 text-sm leading-relaxed text-muted">
            {event.description}
          </p>

          {/* Detail tag */}
          {event.detail && (
            <motion.div
              initial={{
                opacity: 0,
                x: isEven ? 20 : -20,
                scale: 0.8,
              }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08 + 0.4,
                type: "spring",
                stiffness: 200,
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-marron/10 px-3 py-1"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Zap className="h-3 w-3 text-marron" />
              </motion.div>
              <span className="text-xs font-medium text-marron">
                {event.detail}
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Center dot with pulse */}
      <div className="absolute left-0 top-6 z-10 md:static md:flex md:flex-shrink-0 md:items-start md:justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.08 + 0.15,
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          whileHover={{
            scale: 1.8,
            transition: { type: "spring", stiffness: 500, damping: 8 },
          }}
          className="relative"
        >
          {isActive && (
            <motion.div
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className={`absolute inset-0 rounded-full ${
                event.highlight ? "bg-marron" : "bg-dimmest"
              }`}
            />
          )}
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-full ${
              event.highlight
                ? "bg-marron shadow-lg shadow-marron/40"
                : "bg-dimmest"
            }`}
          >
            <Circle
              className={`h-2 w-2 ${
                event.highlight ? "text-background" : "text-dimmer"
              }`}
              fill="currentColor"
            />
          </div>
        </motion.div>
      </div>

      <div className="hidden flex-1 md:block" />
    </motion.div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 0.8, 0.2]
  );
  const lineSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  useMotionValueEvent(lineSpring, "change", (v) => setProgress(v));

  return (
    <section className="relative px-6 py-32" id="history">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(96,144,232,0.04)_0%,_transparent_60%)]" />

      <div ref={containerRef} className="relative mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0em", y: 20 }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mb-4 block text-sm uppercase text-marron"
          >
            History
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="text-3xl font-bold text-foreground md:text-5xl"
          >
            The Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-muted"
          >
            2001 &mdash; Present
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-marron to-transparent"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-0 top-0 hidden h-full w-[2px] bg-subtle/50 md:left-1/2 md:block md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-marron via-marron to-navy/50"
            />
            {/* Glow trail */}
            <motion.div
              style={{ height: lineHeight, opacity: glowOpacity }}
              className="absolute -left-1 top-0 w-[6px] bg-marron blur-md"
            />
            {/* Moving dot */}
            <motion.div
              style={{ top: lineHeight }}
              className="absolute -left-[5px] h-3 w-3 rounded-full bg-marron shadow-lg shadow-marron/50"
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-marron"
              />
            </motion.div>
          </div>

          {/* Vertical line (mobile) */}
          <div className="absolute left-[9px] top-0 h-full w-[2px] bg-subtle/50 md:hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-marron to-marron/20"
            />
          </div>

          <div className="space-y-14 pl-10 md:space-y-20 md:pl-0">
            {timeline.map((event, index) => (
              <TimelineItem
                key={event.title}
                event={event}
                index={index}
                scrollProgress={progress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
