"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import type { PortfolioItem } from "@/i18n/types";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

function BentoCard({ item, index }: { item: PortfolioItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group cursor-pointer border-b border-foreground/8 pb-6 ${
        item.span === "wide" ? "md:col-span-2" : item.span === "tall" ? "md:row-span-2" : ""
      }`}
    >
      {/* Group label */}
      {item.group && (
        <span className="mb-2 inline-block rounded-full border border-foreground/10 px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-dimmer">
          {item.group}
        </span>
      )}

      {/* Header */}
      <div className="mb-2 flex items-start justify-between">
        <h3 className="text-base font-bold text-foreground">{item.company}</h3>
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1 text-dimmer transition-colors group-hover:text-foreground"
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>

      <p className="mb-1 text-xs font-medium text-muted">{item.role}</p>
      <p className="mb-3 text-sm text-secondary">{item.description}</p>

      {/* Expanded */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mb-4 text-sm leading-relaxed text-dim">{item.longDescription}</p>
      </motion.div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-foreground/8 px-2.5 py-0.5 text-[10px] font-medium text-dimmer"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  const { t } = useLanguage();
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20" id="portfolio">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.portfolio.label}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            {t.ui.portfolio.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{t.ui.portfolio.subtitle}</p>
          <div className="mt-4 h-px w-16 bg-foreground" />
        </motion.div>

        <p className="mb-8 text-xs text-dimmer">{t.ui.portfolio.clickHint}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.portfolio.map((item, index) => (
            <BentoCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
