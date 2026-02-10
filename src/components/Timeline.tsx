"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/constants/data";
import { Circle, Zap } from "lucide-react";

function TimelineItem({
  event,
  index,
}: {
  event: (typeof timeline)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -80 : 80, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
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
            scale: 1.03,
            y: -4,
            transition: { duration: 0.3 },
          }}
          className={`inline-block rounded-2xl border ${
            event.highlight
              ? "border-[#EDAB62]/40 bg-[#EDAB62]/8"
              : "border-[#564F48] bg-[#262320]"
          } p-6 transition-all duration-300 hover:shadow-lg ${
            event.highlight ? "hover:shadow-[#EDAB62]/10" : "hover:shadow-white/5"
          }`}
        >
          {/* Year badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
            className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-widest ${
              event.highlight
                ? "bg-[#EDAB62]/15 text-[#EDAB62]"
                : "bg-[#3B3632] text-[#8C8780]"
            }`}
          >
            {event.year}
          </motion.span>

          {/* Title */}
          <h3 className="mb-2 text-lg font-bold text-[#FDFBF7]">
            {event.title}
          </h3>

          {/* Description */}
          <p className="mb-3 text-sm leading-relaxed text-[#B8B2AC]">
            {event.description}
          </p>

          {/* Detail tag */}
          {event.detail && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#EDAB62]/10 px-3 py-1"
            >
              <Zap className="h-3 w-3 text-[#EDAB62]" />
              <span className="text-xs font-medium text-[#EDAB62]">
                {event.detail}
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Center dot */}
      <div className="absolute left-0 top-6 z-10 md:static md:flex md:flex-shrink-0 md:items-start md:justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 300 }}
          whileHover={{ scale: 1.5 }}
          className={`flex h-5 w-5 items-center justify-center rounded-full ${
            event.highlight ? "bg-[#EDAB62] shadow-lg shadow-[#EDAB62]/30" : "bg-[#635C56]"
          }`}
        >
          <Circle
            className={`h-2 w-2 ${
              event.highlight ? "text-[#101018]" : "text-[#8C8780]"
            }`}
            fill="currentColor"
          />
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden flex-1 md:block" />
    </motion.div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 0.3]);

  return (
    <section className="relative px-6 py-32" id="history">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(96, 144, 232,0.04)_0%,_transparent_60%)]" />

      <div ref={containerRef} className="relative mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mb-4 block text-sm text-[#EDAB62] uppercase"
          >
            History
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-[#FDFBF7] md:text-5xl"
          >
            The Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-[#B8B2AC]"
          >
            2001 &mdash; Present
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#EDAB62] to-transparent"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-0 top-0 hidden h-full w-[2px] bg-[#3B3632] md:left-1/2 md:block md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#EDAB62] to-[#EDAB62]/20"
            />
            {/* Glow effect on line */}
            <motion.div
              style={{ height: lineHeight, opacity: glowOpacity }}
              className="absolute top-0 w-full bg-[#EDAB62] blur-md"
            />
          </div>

          {/* Vertical line (mobile) */}
          <div className="absolute left-[9px] top-0 h-full w-[2px] bg-[#3B3632] md:hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#EDAB62] to-[#EDAB62]/20"
            />
          </div>

          <div className="space-y-12 pl-10 md:space-y-16 md:pl-0">
            {timeline.map((event, index) => (
              <TimelineItem key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
