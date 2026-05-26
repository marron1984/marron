"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { useRef } from "react";

type Ease = [number, number, number, number];
const EASE: Ease = [0.16, 1, 0.3, 1];

const charVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.03, ease: EASE },
  }),
};

const slideUp = {
  hidden: { opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 1, delay, ease: EASE },
  }),
};

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgNumber = useTransform(scrollYProgress, [0, 0.5], [0, -120]);

  const chars = t.personalInfo.catchphrase.split("");

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-32 md:px-12 lg:px-20"
    >
      {/* Background giant number */}
      <motion.div
        style={{ y: bgNumber, scale: bgScale }}
        className="pointer-events-none absolute right-[-5%] top-[10%] select-none text-[30vw] font-black leading-none text-foreground/[0.03]"
      >
        16
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 h-[2px] origin-left bg-foreground"
        />

        {/* Info pills row */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          {[
            t.personalInfo.birthDate,
            t.personalInfo.origin,
            t.personalInfo.hobby,
          ].map((info, i) => (
            <motion.span
              key={info}
              variants={slideUp}
              custom={0.4 + i * 0.08}
              className="rounded-full border border-foreground/20 px-4 py-1.5 text-xs tracking-wide text-muted transition-colors duration-300 hover:border-foreground hover:text-foreground"
            >
              {info}
            </motion.span>
          ))}
          {t.personalInfo.keywords.map((keyword, i) => (
            <motion.span
              key={keyword}
              variants={slideUp}
              custom={0.6 + i * 0.06}
              className="text-xs font-medium uppercase tracking-[0.15em] text-dimmer"
            >
              {keyword}
            </motion.span>
          ))}
        </motion.div>

        {/* Main catchphrase — character-by-character 3D reveal */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="mb-6 whitespace-pre-line text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.95] tracking-tight text-foreground"
          style={{ perspective: 600 }}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              variants={charVariants}
              custom={i}
              className="inline-block"
              style={{ transformOrigin: "bottom" }}
            >
              {char === " " ? " " : char === "\n" ? <br /> : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subcatchphrase */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-muted md:text-xl"
        >
          {t.personalInfo.subcatchphrase}
        </motion.p>

        {/* Core identity */}
        <motion.p
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl text-sm leading-relaxed text-dim"
        >
          {t.personalInfo.coreIdentity}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 h-[2px] origin-left bg-foreground/10"
        />

        {/* Bottom: Profile + Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          {/* Profile */}
          <motion.div
            className="flex items-center gap-5"
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-foreground"
            >
              <Image
                src="/profile.jpeg"
                alt={t.personalInfo.nameJa}
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
            <div>
              <p className="text-lg font-bold tracking-tight text-foreground">
                {t.personalInfo.nameJa}
              </p>
              <p className="text-sm tracking-widest text-dimmer">
                {t.personalInfo.nameEn} / {t.personalInfo.alias}
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {t.personalInfo.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.15, y: -4 }}
              >
                <p className="text-3xl font-black text-foreground md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-dimmer">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-dimmer">
            {t.ui.scroll}
          </span>
          <div className="h-10 w-px bg-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
