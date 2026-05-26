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
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`group cursor-pointer border-b-2 border-foreground/8 pb-6 transition-all duration-300 hover:border-foreground ${
        item.span === "wide" ? "md:col-span-2" : item.span === "tall" ? "md:row-span-2" : ""
      }`}
      style={{ perspective: 1000 }}
    >
      {item.group && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-2 inline-block rounded-full border border-foreground/10 px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-dimmer transition-colors duration-300 group-hover:border-foreground group-hover:text-foreground"
        >
          {item.group}
        </motion.span>
      )}

      <div className="mb-2 flex items-start justify-between">
        <h3 className="text-base font-bold text-foreground">{item.company}</h3>
        <motion.div
          animate={{ rotate: isExpanded ? 135 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-1 text-dimmer transition-colors group-hover:text-foreground"
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>

      <p className="mb-1 text-xs font-medium text-muted">{item.role}</p>
      <p className="mb-3 text-sm text-secondary">{item.description}</p>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="mb-4 text-sm leading-relaxed text-dim">{item.longDescription}</p>
      </motion.div>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag, i) => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.1, backgroundColor: "var(--foreground)", color: "var(--background)" }}
            className="rounded-full border border-foreground/8 px-2.5 py-0.5 text-[10px] font-medium text-dimmer transition-colors duration-300"
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
  return (
    <section className="px-6 py-32 md:px-12 lg:px-20" id="portfolio">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.portfolio.label}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">
            {t.ui.portfolio.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{t.ui.portfolio.subtitle}</p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-xs text-dimmer"
        >
          {t.ui.portfolio.clickHint}
        </motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.portfolio.map((item, index) => (
            <BentoCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
