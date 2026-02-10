"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/constants/data";
import { Sparkles } from "lucide-react";
import { useEffect } from "react";

/* ---- Split text reveal ---- */
function SplitText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ---- Animated stat counter ---- */
function StatCounter({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ scale: 1.1, y: -4, transition: { duration: 0.3 } }}
      className="group relative text-center"
    >
      <div className="absolute -inset-3 rounded-xl bg-[#EDAB62]/5 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
      <motion.p
        className="relative text-3xl font-bold text-[#EDAB62] md:text-4xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring", stiffness: 200 }}
      >
        {value}
      </motion.p>
      <p className="relative mt-1 text-xs text-[#B8B2AC] md:text-sm">{label}</p>
    </motion.div>
  );
}

export default function Hero() {
  /* ---- Mouse parallax for photo ---- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const photoX = useTransform(springX, [-500, 500], [-15, 15]);
  const photoY = useTransform(springY, [-500, 500], [-15, 15]);
  const photoRotate = useTransform(springX, [-500, 500], [-3, 3]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      {/* Radial gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(237, 171, 98,0.08)_0%,_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#101018]" />

      {/* Floating decorative orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-[#EDAB62]/[0.04] blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[15%] top-[30%] h-48 w-48 rounded-full bg-[#6090E8]/[0.05] blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[20%] left-[30%] h-32 w-32 rounded-full bg-[#EDAB62]/[0.03] blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        {/* Profile photo with parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="mb-10 flex justify-center"
        >
          <motion.div
            className="relative"
            style={{ x: photoX, y: photoY, rotate: photoRotate }}
          >
            {/* Animated outer glow */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#EDAB62]/60 via-[#EDAB62]/20 to-[#6090E8]/40 blur-md"
            />
            {/* Spinning ring */}
            <div className="animate-spin-slow absolute -inset-4 rounded-full border border-dashed border-[#EDAB62]/20" />
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-[#EDAB62]/50 md:h-44 md:w-44">
              <Image
                src="/profile.jpeg"
                alt={personalInfo.nameJa}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Alias badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 150 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#EDAB62]/40 bg-[#EDAB62]/10 px-5 py-2 backdrop-blur-sm"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-4 w-4 text-[#EDAB62]" />
          </motion.div>
          <span className="text-sm font-medium tracking-widest text-[#EDAB62]">
            {personalInfo.alias}
          </span>
        </motion.div>

        {/* Name — split text animation */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#FDFBF7] md:text-7xl lg:text-8xl">
          <SplitText text={personalInfo.nameJa} delay={0.7} />
        </h1>

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mb-6 text-lg text-[#B8B2AC] md:text-xl"
        >
          {personalInfo.nameEn}
        </motion.p>

        {/* Catchphrase with stagger */}
        <div className="mx-auto mb-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="bg-gradient-to-r from-[#FDFBF7] via-[#EDAB62] to-[#FDFBF7] bg-clip-text text-2xl font-bold text-transparent animate-shimmer md:text-3xl"
          >
            {personalInfo.catchphrase}
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-[#EAE2DA] md:text-xl"
        >
          {personalInfo.subcatchphrase}
        </motion.p>

        {/* Core identity */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="mx-auto mb-12 max-w-2xl text-sm leading-relaxed text-[#A09B95] md:text-base"
        >
          {personalInfo.coreIdentity}
        </motion.p>

        {/* Stats counters */}
        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {personalInfo.stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={2.0 + i * 0.15}
            />
          ))}
        </div>

        {/* Quick info pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {[personalInfo.birthDate, personalInfo.origin, `趣味：${personalInfo.hobby}`].map(
            (info, i) => (
              <motion.span
                key={info}
                whileHover={{ scale: 1.08, borderColor: "rgba(237, 171, 98,0.5)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-full border border-[#564F48] bg-[#262320] px-4 py-2 text-sm text-[#B8B2AC]"
              >
                {info}
              </motion.span>
            )
          )}
        </motion.div>

        {/* Keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {personalInfo.keywords.map((keyword, i) => (
            <motion.span
              key={keyword}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.9 + i * 0.1 }}
              whileHover={{ color: "#EDAB62", scale: 1.1 }}
              className="cursor-default text-xs font-medium tracking-widest uppercase text-[#EDAB62]/50"
            >
              {keyword}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto h-16 w-[2px] bg-gradient-to-b from-[#EDAB62] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
