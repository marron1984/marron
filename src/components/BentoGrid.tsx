"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { portfolio } from "@/constants/data";
import type { PortfolioItem } from "@/constants/data";
import { Building2, Briefcase, ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";

const accentColors = {
  marron: {
    border: "border-marron/20",
    bg: "bg-marron/5",
    hoverBorder: "hover:border-marron/50",
    tag: "text-marron",
    tagBg: "bg-marron/10",
    glow: "#EDAB62",
    iconBg: "bg-marron/15",
  },
  navy: {
    border: "border-navy/20",
    bg: "bg-navy/5",
    hoverBorder: "hover:border-navy/50",
    tag: "text-[#90B8FF]",
    tagBg: "bg-navy/10",
    glow: "#6090E8",
    iconBg: "bg-navy/15",
  },
  neutral: {
    border: "border-dimmest/20",
    bg: "bg-elevated/80",
    hoverBorder: "hover:border-[#6A6560]/40",
    tag: "text-muted",
    tagBg: "bg-dimmest/20",
    glow: "#8C8780",
    iconBg: "bg-dimmest/20",
  },
};

/* ---- 3D Tilt Card ---- */
function BentoCard({ item, index }: { item: PortfolioItem; index: number }) {
  const colors = accentColors[item.accent];
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 300,
    damping: 20,
  });

  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, rotateX: -15, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className={`group relative cursor-pointer rounded-2xl border ${colors.border} ${colors.bg} ${colors.hoverBorder} p-6 transition-colors duration-300 ${
        item.span === "wide"
          ? "md:col-span-2"
          : item.span === "tall"
          ? "md:row-span-2"
          : ""
      }`}
    >
      {/* Dynamic glow that follows mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}% ${y}%, ${colors.glow}15 0%, transparent 60%)`
          ),
        }}
      />

      {/* Scan line on hover */}
      <motion.div
        initial={{ y: "-100%" }}
        whileHover={{ y: "200%" }}
        transition={{ duration: 1.5, ease: "linear" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-marron/20 to-transparent opacity-0 group-hover:opacity-100"
      />

      {/* Group label */}
      {item.group && (
        <motion.span
          initial={{ opacity: 0, x: -20, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1 + 0.3,
            type: "spring",
            stiffness: 200,
          }}
          className="mb-3 inline-block rounded-full bg-marron/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-marron"
        >
          {item.group}
        </motion.span>
      )}

      {/* Header */}
      <div
        className="mb-4 flex items-start justify-between"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{
              rotate: 15,
              scale: 1.2,
              transition: { type: "spring", stiffness: 400 },
            }}
            className={`rounded-lg ${colors.iconBg} p-2`}
          >
            <Building2 className={`h-5 w-5 ${colors.tag}`} />
          </motion.div>
          <motion.div
            whileHover={{
              rotate: -15,
              scale: 1.2,
              transition: { type: "spring", stiffness: 400 },
            }}
            className={`rounded-lg ${colors.iconBg} p-2`}
          >
            <Briefcase className={`h-4 w-4 ${colors.tag}`} />
          </motion.div>
        </div>
        <motion.div
          animate={{
            rotate: isExpanded ? 135 : 0,
            scale: isExpanded ? 1.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="text-dimmest transition-colors group-hover:text-marron"
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="mb-1 text-lg font-bold text-foreground">
          {item.company}
        </h3>
        <p className="mb-3 text-sm font-medium text-muted">{item.role}</p>
        <p className="mb-2 text-sm leading-relaxed text-secondary">
          {item.description}
        </p>
      </div>

      {/* Expanded description */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        className="overflow-hidden"
        style={{ transform: "translateZ(25px)" }}
      >
        <p className="mb-4 text-sm leading-relaxed text-dim">
          {item.longDescription}
        </p>
      </motion.div>

      {/* Tags */}
      <div
        className="mt-4 flex flex-wrap gap-2"
        style={{ transform: "translateZ(15px)" }}
      >
        {item.tags.map((tag, tagIdx) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1 + 0.3 + tagIdx * 0.06,
              type: "spring",
              stiffness: 250,
              damping: 12,
            }}
            whileHover={{
              scale: 1.15,
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(237,171,98,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0em", y: 20 }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="mb-4 block text-sm uppercase text-marron"
          >
            Portfolio
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
            Current Ventures
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-muted"
          >
            2024 &mdash; 2025
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

        {/* DHP Group label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
          className="mb-6 text-center"
        >
          <span className="inline-block rounded-full border border-line bg-elevated px-4 py-1 text-xs tracking-widest text-muted">
            DHPグループ included &middot; Click cards for details
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {portfolio.map((item, index) => (
            <BentoCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
