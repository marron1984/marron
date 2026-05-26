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
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="px-6 py-32 md:px-12 lg:px-20" id="history">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.history.label}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">
            {t.ui.history.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{t.ui.history.subtitle}</p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground"
          />
        </motion.div>

        <div className="relative">
          {/* Static track */}
          <div className="absolute left-[7px] top-0 h-full w-px bg-foreground/10 md:left-24" />
          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-0 w-[2px] bg-foreground md:left-24"
          />

          <div className="space-y-12">
            {t.timeline.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Dot */}
                <div className="relative z-10 flex flex-shrink-0 md:w-24 md:justify-end">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 300 }}
                    className={`mt-2 h-[14px] w-[14px] rounded-full border-2 ${
                      event.highlight
                        ? "border-foreground bg-foreground"
                        : "border-foreground/30 bg-background"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className={`mb-1 inline-block rounded-full px-3 py-0.5 text-[10px] font-bold tracking-widest ${
                      event.highlight
                        ? "bg-foreground text-background"
                        : "bg-foreground/5 text-dimmer"
                    }`}
                  >
                    {event.year}
                  </motion.span>
                  <h3 className="mb-2 text-base font-bold text-foreground">
                    {event.title}
                  </h3>
                  <p className="mb-2 text-sm leading-relaxed text-muted">
                    {event.description}
                  </p>
                  {event.detail && (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="inline-block border-l-2 border-foreground/30 pl-3 text-xs font-medium text-dimmer"
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
    </section>
  );
}
