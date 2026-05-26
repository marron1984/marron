"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import type { WebSite } from "@/i18n/types";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

function PortfolioCard({ site, index }: { site: WebSite; index: number }) {
  return (
    <motion.a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 120, skewX: -5 }}
      whileInView={{ opacity: 1, x: 0, skewX: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        x: 16,
        backgroundColor: "var(--foreground)",
        color: "var(--background)",
        skewX: -1,
      }}
      className="group flex items-center justify-between border-b-2 border-foreground/8 py-6 px-4 transition-all duration-400"
    >
      <div className="flex items-center gap-4">
        <motion.span className="text-xs font-black tabular-nums text-dimmer group-hover:text-background/50 transition-colors duration-400">
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <h3 className="text-base font-black text-foreground group-hover:text-background transition-colors duration-400">
          {site.name}
        </h3>
        <span className="rounded-full border border-foreground/10 px-3 py-0.5 text-[10px] font-bold text-dimmer group-hover:border-background/30 group-hover:text-background/60 transition-colors duration-400">
          {site.tag}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden text-xs text-dimmer group-hover:text-background/50 sm:block transition-colors duration-400">
          {site.domain}
        </span>
        <motion.div
          whileHover={{ rotate: 90, scale: 1.5 }}
          transition={{ duration: 0.3 }}
        >
          <ExternalLink className="h-4 w-4 text-dimmer transition-colors duration-400 group-hover:text-background" />
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function WebPortfolio() {
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
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 100, skewY: 3 }}
          whileInView={{ opacity: 1, y: 0, skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-3 inline-block rounded-full border border-foreground/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-dimmer"
          >
            {t.ui.webPortfolio.badge}
          </motion.span>
          <h2 className="mt-4 text-5xl font-black tracking-tight text-foreground md:text-7xl">
            {t.ui.webPortfolio.title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            {t.ui.webPortfolio.description}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[3px] w-32 origin-left bg-foreground"
          />
        </motion.div>

        <div>
          {t.webPortfolio.map((site, i) => (
            <PortfolioCard key={site.domain} site={site} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex gap-12"
        >
          {[
            { value: `${t.webPortfolio.length}`, label: t.ui.webPortfolio.websites },
            { value: "AI", label: t.ui.webPortfolio.powered },
            { value: "Full", label: t.ui.webPortfolio.stack },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.2, y: -6, rotate: 3 }}
            >
              <p className="text-4xl font-black text-foreground">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-dimmer">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
