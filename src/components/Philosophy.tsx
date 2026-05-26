"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-24 md:px-12 lg:px-20" id="philosophy">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.philosophy.label}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            {t.ui.philosophy.title}
          </h2>
          <div className="mt-4 h-px w-16 bg-foreground" />
        </motion.div>

        {/* Main quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-l-2 border-foreground pl-8 md:pl-12"
        >
          <p className="mb-6 text-2xl font-black leading-snug text-foreground md:text-4xl">
            「{t.philosophy.mainQuote}」
          </p>
          <div className="mb-6 h-px w-12 bg-foreground/20" />
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {t.philosophy.subtext}
          </p>
        </motion.div>

        {/* Belief cards */}
        <div className="grid grid-cols-1 gap-px border border-foreground/8 md:grid-cols-3">
          {t.philosophy.beliefs.map((belief, i) => (
            <motion.div
              key={belief.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-foreground/8 bg-background p-8 md:border-r last:md:border-r-0"
            >
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-dimmer">
                0{i + 1}
              </span>
              <h3 className="mb-3 text-base font-bold text-foreground">
                {belief.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {belief.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
