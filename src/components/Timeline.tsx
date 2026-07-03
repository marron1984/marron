"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { useRef } from "react";

export default function Timeline() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const sectionRotate = useTransform(scrollYProgress, [0, 0.15], [2, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ rotate: sectionRotate }}
      className="px-6 py-32 md:px-12 lg:px-20 will-change-transform"
      id="history"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 100, skewY: -3 }}
          whileInView={{ opacity: 1, y: 0, skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {t.ui.history.label}
          </span>
          <h2 className="font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            {t.ui.history.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{t.ui.history.subtitle}</p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[3px] w-32 origin-left bg-accent"
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-0 h-full w-px bg-foreground/10 md:left-24" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[6px] top-0 w-[3px] bg-accent md:left-[93px]"
          />

          <div className="space-y-14">
            {t.timeline.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                  y: 40,
                  scale: 0.9,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-6 md:gap-10"
              >
                <div className="relative z-10 flex flex-shrink-0 md:w-24 md:justify-end">
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.5, rotate: 90 }}
                    className={`mt-2 h-4 w-4 rounded-full border-2 ${
                      event.highlight
                        ? "border-accent bg-accent"
                        : "border-foreground/30 bg-background"
                    }`}
                  />
                </div>

                <div className="flex-1 pb-2">
                  <motion.span
                    whileHover={{ scale: 1.15, x: 4 }}
                    className={`mb-2 inline-block rounded-full px-4 py-1 text-xs font-black tracking-widest ${
                      event.highlight
                        ? "bg-accent text-background"
                        : "bg-foreground/5 text-dimmer"
                    }`}
                  >
                    {event.year}
                  </motion.span>
                  <h3 className="font-display mb-2 text-lg font-bold text-foreground">
                    {event.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted">
                    {event.description}
                  </p>
                  {event.detail && (
                    <motion.span
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-block border-l-2 border-accent/60 pl-3 text-xs font-bold text-dimmer"
                    >
                      {event.detail}
                    </motion.span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
