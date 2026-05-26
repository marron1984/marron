"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import type { WebSite } from "@/i18n/types";
import { ExternalLink } from "lucide-react";

function PortfolioCard({ site, index }: { site: WebSite; index: number }) {
  return (
    <motion.a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 12, backgroundColor: "var(--foreground)", color: "var(--background)" }}
      className="group flex items-center justify-between border-b-2 border-foreground/8 py-5 px-4 transition-all duration-400"
    >
      <div className="flex items-center gap-4">
        <motion.span
          className="text-[10px] font-bold text-dimmer group-hover:text-background/50 transition-colors duration-400"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <h3 className="text-sm font-bold text-foreground group-hover:text-background transition-colors duration-400">{site.name}</h3>
        <span className="rounded-full border border-foreground/10 px-2.5 py-0.5 text-[10px] font-medium text-dimmer group-hover:border-background/30 group-hover:text-background/60 transition-colors duration-400">
          {site.tag}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden text-xs text-dimmer group-hover:text-background/50 sm:block transition-colors duration-400">{site.domain}</span>
        <motion.div
          whileHover={{ rotate: 45, scale: 1.3 }}
          transition={{ duration: 0.2 }}
        >
          <ExternalLink className="h-3.5 w-3.5 text-dimmer transition-colors duration-400 group-hover:text-background" />
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function WebPortfolio() {
  const { t } = useLanguage();
  return (
    <section className="px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="mb-3 inline-block rounded-full border border-foreground/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-dimmer"
          >
            {t.ui.webPortfolio.badge}
          </motion.span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground md:text-6xl">
            {t.ui.webPortfolio.title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            {t.ui.webPortfolio.description}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground"
          />
        </motion.div>

        <div>
          {t.webPortfolio.map((site, i) => (
            <PortfolioCard key={site.domain} site={site} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex gap-10"
        >
          {[
            { value: `${t.webPortfolio.length}`, label: t.ui.webPortfolio.websites },
            { value: "AI", label: t.ui.webPortfolio.powered },
            { value: "Full", label: t.ui.webPortfolio.stack },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.15, y: -4 }}
            >
              <p className="text-3xl font-black text-foreground">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-dimmer">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
