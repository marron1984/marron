"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-32 md:px-12 lg:px-20"
    >
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 h-px origin-left bg-foreground/20"
        />

        {/* Info pills row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          {[
            t.personalInfo.birthDate,
            t.personalInfo.origin,
            t.personalInfo.hobby,
          ].map((info) => (
            <span
              key={info}
              className="rounded-full border border-foreground/20 px-4 py-1.5 text-xs tracking-wide text-muted"
            >
              {info}
            </span>
          ))}
          {t.personalInfo.keywords.map((keyword) => (
            <span
              key={keyword}
              className="text-xs font-medium uppercase tracking-[0.15em] text-dimmer"
            >
              {keyword}
            </span>
          ))}
        </motion.div>

        {/* Main catchphrase — huge bold text */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.95] tracking-tight text-foreground"
        >
          {t.personalInfo.catchphrase}
        </motion.h1>

        {/* Subcatchphrase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {t.personalInfo.subcatchphrase}
        </motion.p>

        {/* Core identity */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12 max-w-2xl text-sm leading-relaxed text-dim"
        >
          {t.personalInfo.coreIdentity}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 h-px origin-left bg-foreground/10"
        />

        {/* Bottom: Profile + Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          {/* Profile */}
          <div className="flex items-center gap-5">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-foreground/10">
              <Image
                src="/profile.jpeg"
                alt={t.personalInfo.nameJa}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-foreground">
                {t.personalInfo.nameJa}
              </p>
              <p className="text-sm tracking-widest text-dimmer">
                {t.personalInfo.nameEn} / {t.personalInfo.alias}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            {t.personalInfo.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black text-foreground md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-dimmer">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-dimmer">
            {t.ui.scroll}
          </span>
          <div className="h-8 w-px bg-foreground/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
