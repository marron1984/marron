"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export default function Achievements() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-24 md:px-12 lg:px-20" id="achievements">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.achievements.label}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            {t.ui.achievements.title}
          </h2>
          <div className="mt-4 h-px w-16 bg-foreground" />
        </motion.div>

        {/* Achievement grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="border-t border-foreground/10 pt-6"
            >
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
                {achievement.category}
              </h3>
              <ul className="space-y-2">
                {achievement.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
