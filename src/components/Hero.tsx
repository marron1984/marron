"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { useRef, useState, useEffect } from "react";
import { useTextScramble } from "@/hooks/useTextScramble";
import { useCounter } from "@/hooks/useCounter";
import { useInView } from "framer-motion";

type Ease = [number, number, number, number];
const EASE: Ease = [0.16, 1, 0.3, 1];

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounter(numericPart, { trigger: isInView, duration: 2500 });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0, rotateZ: -10 }}
      animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
      transition={{ duration: 0.8, delay: 1.4, ease: EASE }}
      whileHover={{ scale: 1.2, y: -8, rotateZ: 3 }}
    >
      <p className="text-4xl font-black tabular-nums text-foreground md:text-5xl">
        {count}{suffix}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-dimmer">
        {label}
      </p>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const bgNumber = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const marqueeSpeed = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const catchphraseLines = t.personalInfo.catchphrase.split("\n");
  const { displayed: scrambledLine1 } = useTextScramble(catchphraseLines[0] || "", { delay: 500, speed: 40 });
  const { displayed: scrambledLine2 } = useTextScramble(catchphraseLines[1] || "", { delay: 900, speed: 40 });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-32 md:px-12 lg:px-20"
    >
      {/* Background giant number — parallax */}
      <motion.div
        style={{ y: bgNumber }}
        className="pointer-events-none absolute right-[-10%] top-[5%] select-none text-[40vw] font-black leading-none text-foreground/[0.02]"
      >
        16
      </motion.div>

      {/* Background marquee band */}
      <motion.div
        style={{ x: marqueeSpeed }}
        className="pointer-events-none absolute left-0 top-[40%] select-none whitespace-nowrap"
      >
        <span className="text-[12vw] font-black uppercase tracking-tight text-foreground/[0.015]">
          SERIAL ENTREPRENEUR — SOCIAL PROBLEM SOLVER — RESILIENT LEADER — SERIAL ENTREPRENEUR — SOCIAL PROBLEM SOLVER —
        </span>
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {/* Top line — explosive expand */}
        <motion.div
          initial={{ scaleX: 0, height: 0 }}
          animate={{ scaleX: 1, height: 2 }}
          transition={{ duration: 1.4, delay: 0.1, ease: EASE }}
          className="mb-8 origin-left bg-foreground"
        />

        {/* Info pills — staggered bounce in */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {[
            t.personalInfo.birthDate,
            t.personalInfo.origin,
            t.personalInfo.hobby,
          ].map((info, i) => (
            <motion.span
              key={info}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, backgroundColor: "var(--foreground)", color: "var(--background)" }}
              className="rounded-full border border-foreground/20 px-4 py-1.5 text-xs tracking-wide text-muted transition-colors duration-300 cursor-default"
            >
              {info}
            </motion.span>
          ))}
          {t.personalInfo.keywords.map((keyword, i) => (
            <motion.span
              key={keyword}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: EASE }}
              className="text-xs font-medium uppercase tracking-[0.15em] text-dimmer"
            >
              {keyword}
            </motion.span>
          ))}
        </div>

        {/* Main catchphrase — TEXT SCRAMBLE + scale entrance */}
        <motion.h1
          initial={{ scale: 1.5, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          className="mb-6"
        >
          <span className="block text-[clamp(2.5rem,9vw,8rem)] font-black leading-[0.95] tracking-tighter text-foreground">
            {mounted ? scrambledLine1 : catchphraseLines[0]}
          </span>
          <span className="block text-[clamp(2.5rem,9vw,8rem)] font-black leading-[0.95] tracking-tighter text-foreground">
            {mounted ? scrambledLine2 : catchphraseLines[1]}
          </span>
        </motion.h1>

        {/* Subcatchphrase — typewriter-like reveal */}
        <motion.p
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.5, delay: 1.2, ease: EASE }}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {t.personalInfo.subcatchphrase}
        </motion.p>

        {/* Core identity — slide up from behind */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: EASE }}
          className="mb-12 overflow-hidden"
        >
          <p className="max-w-2xl text-sm leading-relaxed text-dim">
            {t.personalInfo.coreIdentity}
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.3, ease: EASE }}
          className="mb-8 h-[2px] origin-left bg-foreground/10"
        />

        {/* Bottom: Profile + Stats */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Profile — spin in */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
            className="flex items-center gap-5"
          >
            <motion.div
              initial={{ scale: 0, rotate: -360 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 1.3, ease: EASE }}
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-foreground"
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
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-xl font-black tracking-tight text-foreground"
              >
                {t.personalInfo.nameJa}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="text-sm tracking-widest text-dimmer"
              >
                {t.personalInfo.nameEn} / {t.personalInfo.alias}
              </motion.p>
            </div>
          </motion.div>

          {/* Stats — counter animation */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {t.personalInfo.stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator — pulsing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.0 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 14, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-dimmer">
            {t.ui.scroll}
          </span>
          <div className="h-12 w-px bg-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
