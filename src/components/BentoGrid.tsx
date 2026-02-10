"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/constants/data";
import type { PortfolioItem } from "@/constants/data";
import { Building2, Briefcase, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const accentColors = {
  marron: {
    border: "border-[#D4944A]/20",
    bg: "bg-[#D4944A]/5",
    hoverBorder: "hover:border-[#D4944A]/50",
    tag: "text-[#D4944A]",
    tagBg: "bg-[#D4944A]/10",
    glow: "bg-[#D4944A]/[0.06]",
    iconBg: "bg-[#D4944A]/15",
  },
  navy: {
    border: "border-[#3B6BC4]/20",
    bg: "bg-[#3B6BC4]/5",
    hoverBorder: "hover:border-[#3B6BC4]/50",
    tag: "text-[#6B9BF4]",
    tagBg: "bg-[#3B6BC4]/10",
    glow: "bg-[#3B6BC4]/[0.06]",
    iconBg: "bg-[#3B6BC4]/15",
  },
  neutral: {
    border: "border-[#4A4540]/20",
    bg: "bg-[#1A1815]/80",
    hoverBorder: "hover:border-[#6A6560]/40",
    tag: "text-[#A09A94]",
    tagBg: "bg-[#4A4540]/20",
    glow: "bg-white/[0.03]",
    iconBg: "bg-[#4A4540]/20",
  },
};

function BentoCard({ item, index }: { item: PortfolioItem; index: number }) {
  const colors = accentColors[item.accent];
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group relative cursor-pointer rounded-2xl border ${colors.border} ${colors.bg} ${colors.hoverBorder} p-6 transition-all duration-300 ${
        item.span === "wide"
          ? "md:col-span-2"
          : item.span === "tall"
          ? "md:row-span-2"
          : ""
      }`}
      style={{ perspective: "1000px" }}
    >
      {/* Hover glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className={`pointer-events-none absolute inset-0 rounded-2xl ${colors.glow} blur-xl transition-opacity duration-500`}
      />

      {/* Group label */}
      {item.group && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.3 }}
          className="mb-3 inline-block rounded-full bg-[#D4944A]/10 px-3 py-1 text-[10px] font-medium tracking-wider text-[#D4944A] uppercase"
        >
          {item.group}
        </motion.span>
      )}

      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className={`rounded-lg ${colors.iconBg} p-2`}
          >
            <Building2 className={`h-5 w-5 ${colors.tag}`} />
          </motion.div>
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            className={`rounded-lg ${colors.iconBg} p-2`}
          >
            <Briefcase className={`h-4 w-4 ${colors.tag}`} />
          </motion.div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#4A4540] transition-colors group-hover:text-[#D4944A]"
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>
      </div>

      {/* Company name */}
      <h3 className="mb-1 text-lg font-bold text-[#FDFBF7]">
        {item.company}
      </h3>

      {/* Role */}
      <p className="mb-3 text-sm font-medium text-[#A09A94]">{item.role}</p>

      {/* Description */}
      <p className="mb-2 text-sm leading-relaxed text-[#D9D0C7]">
        {item.description}
      </p>

      {/* Expanded long description */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        className="overflow-hidden"
      >
        <p className="mb-4 text-sm leading-relaxed text-[#8B8680]">
          {item.longDescription}
        </p>
      </motion.div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag, tagIdx) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + 0.2 + tagIdx * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className={`rounded-full ${colors.tagBg} px-3 py-1 text-xs font-medium ${colors.tag}`}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section className="relative px-6 py-32" id="portfolio">
      {/* Section background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,148,74,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mb-4 block text-sm text-[#D4944A] uppercase"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-[#FDFBF7] md:text-5xl"
          >
            Current Ventures
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-[#A09A94]"
          >
            2024 &mdash; 2025
          </motion.p>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4944A] to-transparent"
          />
        </motion.div>

        {/* DHP Group label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-6 text-center"
        >
          <span className="inline-block rounded-full border border-[#3D3730] bg-[#1A1815] px-4 py-1 text-xs tracking-widest text-[#A09A94]">
            DHPグループ included &middot; Click cards for details
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
