"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-24 md:px-12 lg:px-20" id="history">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.history.label}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            {t.ui.history.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{t.ui.history.subtitle}</p>
          <div className="mt-4 h-px w-16 bg-foreground" />
        </motion.div>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 h-full w-px bg-foreground/10 md:left-24" />

          <div className="space-y-10">
            {t.timeline.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Dot */}
                <div className="relative z-10 flex flex-shrink-0 md:w-24 md:justify-end">
                  <div
                    className={`mt-2 h-[14px] w-[14px] rounded-full border-2 ${
                      event.highlight
                        ? "border-foreground bg-foreground"
                        : "border-foreground/30 bg-background"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <span
                    className={`mb-1 inline-block rounded-full px-3 py-0.5 text-[10px] font-bold tracking-widest ${
                      event.highlight
                        ? "bg-foreground text-background"
                        : "bg-foreground/5 text-dimmer"
                    }`}
                  >
                    {event.year}
                  </span>
                  <h3 className="mb-2 text-base font-bold text-foreground">
                    {event.title}
                  </h3>
                  <p className="mb-2 text-sm leading-relaxed text-muted">
                    {event.description}
                  </p>
                  {event.detail && (
                    <span className="text-xs font-medium text-dimmer">
                      — {event.detail}
                    </span>
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
