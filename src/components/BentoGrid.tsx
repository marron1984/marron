"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/constants/data";
import type { PortfolioItem } from "@/constants/data";
import { Building2, Briefcase } from "lucide-react";

const accentColors = {
  marron: {
    border: "border-[#B87333]/20",
    bg: "bg-[#B87333]/5",
    hoverBorder: "hover:border-[#B87333]/40",
    tag: "text-[#B87333]",
    tagBg: "bg-[#B87333]/10",
  },
  navy: {
    border: "border-[#2A4A7F]/20",
    bg: "bg-[#2A4A7F]/5",
    hoverBorder: "hover:border-[#2A4A7F]/40",
    tag: "text-[#5B8DD9]",
    tagBg: "bg-[#2A4A7F]/10",
  },
  neutral: {
    border: "border-[#3A3530]/20",
    bg: "bg-[#1A1815]/50",
    hoverBorder: "hover:border-[#5A5550]/40",
    tag: "text-[#8B8680]",
    tagBg: "bg-[#3A3530]/20",
  },
};

function BentoCard({ item, index }: { item: PortfolioItem; index: number }) {
  const colors = accentColors[item.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className={`group relative rounded-2xl border ${colors.border} ${colors.bg} ${colors.hoverBorder} p-6 transition-colors duration-300 ${
        item.span === "wide"
          ? "md:col-span-2"
          : item.span === "tall"
          ? "md:row-span-2"
          : ""
      }`}
    >
      {/* Icon */}
      <div className="mb-4 flex items-center gap-3">
        <div className={`rounded-lg ${colors.tagBg} p-2`}>
          <Building2 className={`h-5 w-5 ${colors.tag}`} />
        </div>
        <div className={`rounded-lg ${colors.tagBg} p-2`}>
          <Briefcase className={`h-4 w-4 ${colors.tag}`} />
        </div>
      </div>

      {/* Company name */}
      <h3 className="mb-1 text-lg font-semibold text-[#F5F0EB]">
        {item.company}
      </h3>

      {/* Role */}
      <p className="mb-3 text-sm text-[#8B8680]">{item.role}</p>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-[#C9C0B6]">
        {item.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full ${colors.tagBg} px-3 py-1 text-xs ${colors.tag}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className={`absolute inset-0 rounded-2xl ${
            item.accent === "marron"
              ? "bg-[#B87333]/[0.03]"
              : item.accent === "navy"
              ? "bg-[#2A4A7F]/[0.03]"
              : "bg-white/[0.02]"
          }`}
        />
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section className="relative px-6 py-32" id="portfolio">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block text-sm tracking-[0.3em] text-[#B87333] uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold text-[#F5F0EB] md:text-5xl">
            Current Ventures
          </h2>
          <p className="mt-4 text-[#8B8680]">2024 &mdash; 2025</p>
        </motion.div>

        {/* DHP Group label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <span className="inline-block rounded-full border border-[#2A2520] bg-[#12110E] px-4 py-1 text-xs tracking-widest text-[#8B8680]">
            DHPグループ included
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {portfolio.map((item, index) => (
            <BentoCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
