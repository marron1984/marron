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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group flex items-center justify-between border-b border-foreground/8 py-4 transition-colors hover:bg-foreground/[0.02]"
    >
      <div className="flex items-center gap-4">
        <h3 className="text-sm font-bold text-foreground">{site.name}</h3>
        <span className="rounded-full border border-foreground/10 px-2.5 py-0.5 text-[10px] font-medium text-dimmer">
          {site.tag}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden text-xs text-dimmer sm:block">{site.domain}</span>
        <ExternalLink className="h-3.5 w-3.5 text-dimmer transition-colors group-hover:text-foreground" />
      </div>
    </motion.a>
  );
}

export default function WebPortfolio() {
  const { t } = useLanguage();
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mb-3 inline-block rounded-full border border-foreground/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-dimmer">
            {t.ui.webPortfolio.badge}
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground md:text-5xl">
            {t.ui.webPortfolio.title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            {t.ui.webPortfolio.description}
          </p>
          <div className="mt-4 h-px w-16 bg-foreground" />
        </motion.div>

        <div>
          {t.webPortfolio.map((site, i) => (
            <PortfolioCard key={site.domain} site={site} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex gap-10"
        >
          {[
            { value: `${t.webPortfolio.length}`, label: t.ui.webPortfolio.websites },
            { value: "AI", label: t.ui.webPortfolio.powered },
            { value: "Full", label: t.ui.webPortfolio.stack },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-black text-foreground">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider text-dimmer">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
