"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/constants/data";
import { Circle } from "lucide-react";

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
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
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
        <div
          className={`inline-block rounded-2xl border ${
            event.highlight
              ? "border-[#B87333]/30 bg-[#B87333]/5"
              : "border-[#2A2520] bg-[#12110E]"
          } p-6 transition-colors duration-300 hover:border-[#B87333]/20`}
        >
          {/* Year */}
          <span
            className={`mb-2 block text-sm font-medium tracking-widest ${
              event.highlight ? "text-[#B87333]" : "text-[#5A5550]"
            }`}
          >
            {event.year}
          </span>

          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold text-[#F5F0EB]">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[#8B8680]">
            {event.description}
          </p>
        </div>
      </div>

      {/* Center dot - visible on md+ */}
      <div className="absolute left-0 top-6 z-10 md:static md:flex md:flex-shrink-0 md:items-start md:justify-center">
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full ${
            event.highlight ? "bg-[#B87333]" : "bg-[#3A3530]"
          }`}
        >
          <Circle
            className={`h-2 w-2 ${
              event.highlight ? "text-[#0A0A0F]" : "text-[#5A5550]"
            }`}
            fill="currentColor"
          />
        </div>
      </div>

      {/* Spacer for alternate side */}
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

  return (
    <section className="relative px-6 py-32" id="history">
      <div ref={containerRef} className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 block text-sm tracking-[0.3em] text-[#B87333] uppercase">
            History
          </span>
          <h2 className="text-3xl font-bold text-[#F5F0EB] md:text-5xl">
            The Journey
          </h2>
          <p className="mt-4 text-[#8B8680]">2001 &mdash; Present</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-0 top-0 hidden h-full w-[1px] bg-[#2A2520] md:left-1/2 md:block md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#B87333] to-[#B87333]/20"
            />
          </div>

          {/* Vertical line (mobile) */}
          <div className="absolute left-[7px] top-0 h-full w-[1px] bg-[#2A2520] md:hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#B87333] to-[#B87333]/20"
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
