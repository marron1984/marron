"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export default function Achievements() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-32 md:px-12 lg:px-20" id="achievements">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.achievements.label}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">
            {t.ui.achievements.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {t.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
              className="group cursor-default border-b border-r border-foreground/10 p-8 transition-colors duration-500"
            >
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-dimmer group-hover:text-background/50 transition-colors duration-500">
                0{idx + 1}
              </span>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-background transition-colors duration-500">
                {achievement.category}
              </h3>
              <ul className="space-y-2">
                {achievement.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-2 text-sm leading-relaxed text-muted group-hover:text-background/70 transition-colors duration-500">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/30 group-hover:bg-background/30 transition-colors duration-500" />
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
