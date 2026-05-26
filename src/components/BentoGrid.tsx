"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import type { PortfolioItem } from "@/i18n/types";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";

function BentoCard({ item, index }: { item: PortfolioItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotateX: 20,
        rotateZ: (index % 3 - 1) * 5,
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateZ: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, scale: 1.02, rotateZ: -0.5 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group cursor-pointer border-b-2 border-foreground/8 pb-8 transition-all duration-500 hover:border-foreground ${
        item.span === "wide" ? "md:col-span-2" : item.span === "tall" ? "md:row-span-2" : ""
      }`}
      style={{ perspective: 1000 }}
    >
      {item.group && (
        <motion.span
          whileHover={{ scale: 1.15, backgroundColor: "var(--foreground)", color: "var(--background)" }}
          className="mb-3 inline-block rounded-full border border-foreground/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-dimmer transition-colors duration-300"
        >
          {item.group}
        </motion.span>
      )}

      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-lg font-black text-foreground">{item.company}</h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-1 text-dimmer transition-colors group-hover:text-foreground"
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>
      </div>

      <p className="mb-1 text-xs font-bold text-muted">{item.role}</p>
      <p className="mb-4 text-sm text-secondary">{item.description}</p>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="mb-4 text-sm leading-relaxed text-dim">{item.longDescription}</p>
      </motion.div>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.15, backgroundColor: "var(--foreground)", color: "var(--background)" }}
            className="rounded-full border border-foreground/8 px-3 py-1 text-[10px] font-bold text-dimmer transition-all duration-300"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const sectionScale = useTransform(scrollYProgress, [0, 0.2], [0.85, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale: sectionScale }}
      className="px-6 py-32 md:px-12 lg:px-20 will-change-transform"
      id="portfolio"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 100, skewY: 5 }}
          whileInView={{ opacity: 1, y: 0, skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.portfolio.label}
          </span>
          <h2 className="text-5xl font-black tracking-tight text-foreground md:text-7xl">
            {t.ui.portfolio.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{t.ui.portfolio.subtitle}</p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[3px] w-32 origin-left bg-foreground"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-xs text-dimmer"
        >
          {t.ui.portfolio.clickHint}
        </motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.portfolio.map((item, index) => (
            <BentoCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
