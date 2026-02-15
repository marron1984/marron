"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { useRef, useEffect, useState } from "react";

/* ── Glitch Text ─────────────────────────────────────── */
const GLITCH_CHARS = "アイウエオカキ0123456789!@#$%";

function GlitchText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      let frame = 0;
      const glitch = setInterval(() => {
        frame++;
        setDisplayText(
          text
            .split("")
            .map((c, i) => {
              if (c === " ") return " ";
              if (frame > 3 + i) return c;
              return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            })
            .join(""),
        );
        if (frame > text.length + 3) {
          clearInterval(glitch);
          setDisplayText(text);
          setIsGlitching(false);
        }
      }, 35);
    }, 8000);
    return () => clearInterval(interval);
  }, [text]);

  return <span className={isGlitching ? "text-marron" : ""}>{displayText}</span>;
}

/* ── Magnetic Link ───────────────────────────────────── */
function MagneticLink({
  href,
  children,
  idx,
}: {
  href: string;
  children: React.ReactNode;
  idx: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3 + idx * 0.06,
      }}
      style={{ x: springX, y: springY }}
      whileHover={{ color: "#EDAB62", scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="relative text-sm text-muted transition-colors"
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 h-[1px] w-0 bg-marron transition-all duration-300"
        whileHover={{ width: "100%" }}
      />
    </motion.a>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden border-t border-line/50 px-6 py-16">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marron/20 to-transparent" />

      {/* ambient rotating glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle, var(--marron) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.5, 1], y: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 60,
          }}
          className="flex flex-col items-center gap-8 md:flex-row md:justify-between"
        >
          {/* Name with glitch effect */}
          <motion.div
            whileHover={{ x: 6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-bold text-foreground">
              <GlitchText text={t.personalInfo.nameJa} />
            </p>
            <p className="mt-1 text-sm text-dimmer">
              {t.personalInfo.nameEn} / {t.personalInfo.alias}
            </p>
          </motion.div>

          {/* Nav with magnetic links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {t.ui.footer.navLinks.map((link, i) => (
              <MagneticLink key={link.href} href={link.href} idx={i}>
                {link.label}
              </MagneticLink>
            ))}
          </nav>

          {/* Copyright with shimmer */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="animate-shimmer bg-gradient-to-r from-dimmest via-muted to-dimmest bg-clip-text text-xs text-transparent"
          >
            &copy; {new Date().getFullYear()} {t.personalInfo.alias}. All rights
            reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
