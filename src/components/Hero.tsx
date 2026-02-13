"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { personalInfo, webPortfolio } from "@/constants/data";
import { Sparkles, ExternalLink, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ---- Text Scramble Effect ---- */
const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789!@#$%";

function TextScramble({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [displayText, setDisplayText] = useState(
    text
      .split("")
      .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
      .join("")
  );
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = text.length * 3 + 10;
    const interval = setInterval(() => {
      frame++;
      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            const revealAt = i * 3;
            if (frame > revealAt) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (frame >= totalFrames) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className={className} aria-label={text}>
      {displayText}
    </span>
  );
}

/* ---- Split text with 3D flip ---- */
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
          initial={{ opacity: 0, y: 60, rotateX: -90, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.06,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ---- Counting stat with spring physics ---- */
function StatCounter({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const targetNum = parseInt(numericPart) || 0;
  const [displayNum, setDisplayNum] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = 40;
    const interval = setInterval(() => {
      frame++;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplayNum(Math.round(targetNum * progress));
      if (frame >= totalFrames) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [started, targetNum]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 120,
        damping: 10,
      }}
      whileHover={{
        scale: 1.15,
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      className="group relative text-center"
    >
      <div className="absolute -inset-4 rounded-xl bg-[#EDAB62]/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <motion.p className="relative text-4xl font-bold text-[#EDAB62] md:text-5xl">
        {displayNum}
        {suffix}
      </motion.p>
      <p className="relative mt-2 text-xs text-[#B8B2AC] md:text-sm">
        {label}
      </p>
    </motion.div>
  );
}

/* ---- Web Portfolio Card ---- */
function WebPortfolioCard({
  site,
  index,
}: {
  site: (typeof webPortfolio)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springMx = useSpring(mx, { stiffness: 300, damping: 20 });
  const springMy = useSpring(my, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const rotateX = useTransform(springMy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springMx, [-0.5, 0.5], [-6, 6]);
  const glowX = useTransform(springMx, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(springMy, [-0.5, 0.5], [0, 100]);

  return (
    <motion.a
      ref={cardRef}
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      transition={{
        duration: 0.7,
        delay: 1.5 + index * 0.08,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      whileHover={{
        scale: 1.05,
        y: -4,
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 600,
      }}
      className="group relative block overflow-hidden rounded-xl border border-[#564F48]/60 bg-[#1A1816]/80 px-4 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-[#EDAB62]/50"
    >
      {/* Dynamic glow following mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}% ${y}%, rgba(237,171,98,0.12) 0%, transparent 60%)`
          ),
        }}
      />

      {/* Shine sweep */}
      <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />

      <div className="relative flex items-center gap-3">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#EDAB62]/10 transition-colors duration-300 group-hover:bg-[#EDAB62]/20">
          <Globe className="h-3.5 w-3.5 text-[#EDAB62]/70 transition-colors duration-300 group-hover:text-[#EDAB62]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm font-medium text-[#FDFBF7] transition-colors duration-300 group-hover:text-[#EDAB62]">
              {site.name}
            </p>
            <span className="flex-shrink-0 rounded-full bg-[#EDAB62]/10 px-2 py-0.5 text-[10px] font-medium text-[#EDAB62]/80">
              {site.tag}
            </span>
          </div>
          <p className="truncate text-[11px] text-[#8C8780] transition-colors duration-300 group-hover:text-[#B8B2AC]">
            {site.domain}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="flex-shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <ExternalLink className="h-3.5 w-3.5 text-[#EDAB62]" />
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ---- Mouse parallax for photo (magnetic effect) ---- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const photoX = useTransform(springX, [-500, 500], [-25, 25]);
  const photoY = useTransform(springY, [-500, 500], [-25, 25]);
  const photoRotateX = useTransform(springY, [-500, 500], [8, -8]);
  const photoRotateY = useTransform(springX, [-500, 500], [-8, 8]);

  /* ---- Scroll parallax ---- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* Morphing background blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="animate-morph pointer-events-none absolute left-[5%] top-[15%] h-[500px] w-[500px] bg-[#EDAB62]/[0.03] blur-[80px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
        className="animate-morph pointer-events-none absolute right-[10%] top-[25%] h-[400px] w-[400px] bg-[#6090E8]/[0.04] blur-[60px]"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1.1, ease: "easeOut" }}
        className="animate-morph pointer-events-none absolute bottom-[15%] left-[25%] h-[300px] w-[300px] bg-[#EDAB62]/[0.02] blur-[50px]"
        style={{ animationDelay: "4s" }}
      />

      {/* Radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(237,171,98,0.08)_0%,_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#101018]" />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        {/* ===== Photo + Web Portfolio side-by-side ===== */}
        <div className="mb-12 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
          {/* Profile photo with magnetic 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
            className="flex flex-shrink-0 justify-center"
            style={{ perspective: "800px" }}
          >
            <motion.div
              className="relative"
              style={{
                x: photoX,
                y: photoY,
                rotateX: photoRotateX,
                rotateY: photoRotateY,
              }}
            >
              {/* Pulse rings */}
              <motion.div
                animate={{ scale: [1, 1.4, 1.4], opacity: [0.5, 0, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute -inset-4 rounded-full border-2 border-[#EDAB62]/30"
              />
              <motion.div
                animate={{ scale: [1, 1.6, 1.6], opacity: [0.3, 0, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                className="absolute -inset-4 rounded-full border border-[#6090E8]/20"
              />

              {/* Animated outer glow */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#EDAB62]/60 via-[#EDAB62]/20 to-[#6090E8]/40 blur-lg"
              />

              {/* Spinning rings */}
              <div className="animate-spin-slow absolute -inset-6 rounded-full border border-dashed border-[#EDAB62]/15" />
              <div className="animate-spin-reverse absolute -inset-10 rounded-full border border-dotted border-[#6090E8]/10" />

              {/* Photo */}
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-[#EDAB62]/50 shadow-2xl shadow-[#EDAB62]/20 md:h-48 md:w-48">
                <Image
                  src="/profile.jpeg"
                  alt={personalInfo.nameJa}
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Scan line effect */}
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 4,
                  }}
                  className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#EDAB62]/40 to-transparent"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Web Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 1.0,
              type: "spring",
              stiffness: 60,
              damping: 15,
            }}
            className="w-full max-w-md lg:max-w-lg"
          >
            {/* Portfolio header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-4 flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#EDAB62]/30 bg-[#EDAB62]/10"
              >
                <Globe className="h-3.5 w-3.5 text-[#EDAB62]" />
              </motion.div>
              <div>
                <h3 className="text-sm font-semibold text-[#FDFBF7]">
                  Web Portfolio
                </h3>
                <p className="text-[11px] text-[#8C8780]">
                  AI-crafted websites &middot; {webPortfolio.length} sites
                </p>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] as const }}
                className="ml-auto h-[1px] flex-1 bg-gradient-to-r from-[#EDAB62]/30 to-transparent"
              />
            </motion.div>

            {/* Portfolio cards */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {webPortfolio.map((site, i) => (
                <WebPortfolioCard key={site.domain} site={site} index={i} />
              ))}
            </div>

            {/* Bottom decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="mt-3 text-center"
            >
              <motion.p
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[10px] uppercase tracking-[0.2em] text-[#635C56]"
              >
                Hover to explore &middot; Click to visit
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Alias badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 12,
          }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#EDAB62]/40 bg-[#EDAB62]/10 px-6 py-2.5 backdrop-blur-sm"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-4 w-4 text-[#EDAB62]" />
          </motion.div>
          <TextScramble
            text={personalInfo.alias}
            className="text-sm font-medium tracking-[0.2em] text-[#EDAB62]"
            delay={0.8}
          />
        </motion.div>

        {/* Name */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#FDFBF7] md:text-7xl lg:text-8xl">
          <SplitText text={personalInfo.nameJa} delay={0.9} />
        </h1>

        {/* English name with scramble */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mb-6 text-lg text-[#B8B2AC] md:text-xl"
        >
          <TextScramble text={personalInfo.nameEn} className="" delay={1.5} />
        </motion.p>

        {/* Catchphrase */}
        <div className="mx-auto mb-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1.8,
              type: "spring",
              stiffness: 100,
            }}
            className="animate-shimmer bg-gradient-to-r from-[#FDFBF7] via-[#EDAB62] to-[#FDFBF7] bg-clip-text text-2xl font-bold text-transparent md:text-4xl"
          >
            {personalInfo.catchphrase}
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-[#EAE2DA] md:text-xl"
        >
          {personalInfo.subcatchphrase}
        </motion.p>

        {/* Core identity */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mx-auto mb-14 max-w-2xl text-sm leading-relaxed text-[#A09B95] md:text-base"
        >
          {personalInfo.coreIdentity}
        </motion.p>

        {/* Stats */}
        <div className="mb-14 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {personalInfo.stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={2.4 + i * 0.15}
            />
          ))}
        </div>

        {/* Quick info pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {[
            personalInfo.birthDate,
            personalInfo.origin,
            `趣味：${personalInfo.hobby}`,
          ].map((info, i) => (
            <motion.span
              key={info}
              initial={{ opacity: 0, x: -30, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{
                delay: 3.1 + i * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(237,171,98,0.6)",
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="rounded-full border border-[#564F48] bg-[#262320] px-5 py-2 text-sm text-[#B8B2AC]"
            >
              {info}
            </motion.span>
          ))}
        </motion.div>

        {/* Keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          {personalInfo.keywords.map((keyword, i) => (
            <motion.span
              key={keyword}
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 3.5 + i * 0.12,
                type: "spring",
                stiffness: 250,
                damping: 12,
              }}
              whileHover={{
                color: "#EDAB62",
                scale: 1.2,
                textShadow: "0 0 20px rgba(237,171,98,0.5)",
                transition: { type: "spring", stiffness: 300 },
              }}
              className="cursor-default text-xs font-medium uppercase tracking-[0.2em] text-[#EDAB62]/50"
            >
              {keyword}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.8 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex flex-col items-center gap-2"
          >
            <motion.span
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] uppercase tracking-[0.3em] text-[#EDAB62]/40"
            >
              Scroll
            </motion.span>
            <div className="relative h-10 w-[2px]">
              <motion.div
                animate={{ scaleY: [0, 1, 0], y: [0, 0, 40] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full origin-top bg-gradient-to-b from-[#EDAB62] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
