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
  const quoteScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.7, 1, 1]);
  const quoteRotate = useTransform(scrollYProgress, [0, 0.3], [-3, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} className="relative px-6 py-40 md:px-12 lg:px-20" id="philosophy">
      {/* Giant background text */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
      >
        <span className="text-[20vw] font-black uppercase leading-none text-foreground/[0.02]">
          信念
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -100, skewX: -5 }}
          whileInView={{ opacity: 1, x: 0, skewX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.philosophy.label}
          </span>
          <h2 className="text-5xl font-black tracking-tight text-foreground md:text-7xl">
            {t.ui.philosophy.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[3px] w-32 origin-left bg-foreground"
          />
        </motion.div>

        {/* Main quote — dramatic scale + rotation */}
        <motion.div
          style={{ scale: quoteScale, rotate: quoteRotate }}
          className="mb-24 border-l-4 border-foreground pl-8 md:pl-12 will-change-transform"
        >
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 whitespace-pre-line text-3xl font-black leading-snug text-foreground md:text-5xl lg:text-6xl"
          >
            「{t.philosophy.mainQuote}」
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8 h-px w-20 origin-left bg-foreground/20"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base leading-relaxed text-muted md:text-lg"
          >
            {t.philosophy.subtext}
          </motion.p>
        </motion.div>

        {/* Belief cards — 3D flip on hover */}
        <div className="grid grid-cols-1 gap-0 border-2 border-foreground md:grid-cols-3">
          {t.philosophy.beliefs.map((belief, i) => (
            <motion.div
              key={belief.title}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
                scale: 1.02,
                zIndex: 10,
              }}
              className="group relative cursor-default border-foreground p-12 transition-colors duration-500 md:border-r last:md:border-r-0"
              style={{ perspective: 1000 }}
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.2, type: "spring", stiffness: 150 }}
                className="mb-8 block text-6xl font-black text-foreground/5 group-hover:text-background/10 transition-colors duration-500"
              >
                0{i + 1}
              </motion.span>
              <h3 className="mb-4 text-xl font-black text-foreground group-hover:text-background transition-colors duration-500">
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
