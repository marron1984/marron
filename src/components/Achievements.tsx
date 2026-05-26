"use client";

import { useLanguage } from "./LanguageProvider";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Achievements() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const sectionScale = useTransform(scrollYProgress, [0, 0.2], [0.85, 1]);
  const sectionRotate = useTransform(scrollYProgress, [0, 0.2], [-2, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale: sectionScale, rotate: sectionRotate }}
      className="px-6 py-32 md:px-12 lg:px-20 will-change-transform"
      id="achievements"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 100, skewY: 5 }}
          whileInView={{ opacity: 1, y: 0, skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.achievements.label}
          </span>
          <h2 className="text-5xl font-black tracking-tight text-foreground md:text-7xl">
            {t.ui.achievements.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[3px] w-32 origin-left bg-foreground"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {t.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 80,
                x: (idx % 3 - 1) * 40,
                rotate: (idx % 3 - 1) * 3,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
                scale: 1.03,
                zIndex: 10,
              }}
              className="group cursor-default border-b border-r border-foreground/10 p-8 transition-all duration-500"
            >
              <span className="mb-2 block text-3xl font-black text-foreground/5 group-hover:text-background/10 transition-colors duration-500">
                0{idx + 1}
              </span>
              <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-foreground group-hover:text-background transition-colors duration-500">
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
    </motion.section>
  );
}
