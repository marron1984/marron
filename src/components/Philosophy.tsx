"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { useRef } from "react";

export default function Philosophy() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const quoteX = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  const quoteOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} className="px-6 py-32 md:px-12 lg:px-20" id="philosophy">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.philosophy.label}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">
            {t.ui.philosophy.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground"
          />
        </motion.div>

        {/* Main quote — parallax driven */}
        <motion.div
          style={{ x: quoteX, opacity: quoteOpacity }}
          className="mb-20 border-l-4 border-foreground pl-8 md:pl-12"
        >
          <p className="mb-6 whitespace-pre-line text-3xl font-black leading-snug text-foreground md:text-5xl">
            「{t.philosophy.mainQuote}」
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 h-px w-16 origin-left bg-foreground/20"
          />
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {t.philosophy.subtext}
          </p>
        </motion.div>

        {/* Belief cards */}
        <div className="grid grid-cols-1 gap-0 border-2 border-foreground/10 md:grid-cols-3">
          {t.philosophy.beliefs.map((belief, i) => (
            <motion.div
              key={belief.title}
              initial={{ opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
              className="group cursor-default border-foreground/10 p-10 transition-colors duration-500 md:border-r last:md:border-r-0"
            >
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, type: "spring" }}
                className="mb-6 inline-block text-4xl font-black text-foreground/10 group-hover:text-background/20 transition-colors duration-500"
              >
                0{i + 1}
              </motion.span>
              <h3 className="mb-3 text-lg font-bold text-foreground group-hover:text-background transition-colors duration-500">
                {belief.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted group-hover:text-background/70 transition-colors duration-500">
                {belief.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
