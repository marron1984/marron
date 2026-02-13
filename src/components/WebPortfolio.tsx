"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { webPortfolio } from "@/constants/data";
import { ExternalLink, Globe, Sparkles } from "lucide-react";
import { useRef } from "react";

/* ---- Animated section title letters ---- */
function AnimatedTitle({ text }: { text: string }) {
  return (
    <span aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: i * 0.04,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ---- 3D Tilt Portfolio Card ---- */
function PortfolioCard({
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

  const rotateX = useTransform(springMy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springMx, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(springMx, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(springMy, [-0.5, 0.5], [0, 100]);

  return (
    <motion.a
      ref={cardRef}
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50, scale: 0.85, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        type: "spring",
        stiffness: 100,
        damping: 14,
      }}
      whileHover={{
        scale: 1.04,
        y: -6,
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
      className="group relative block overflow-hidden rounded-2xl border border-[#564F48]/40 bg-[#161414]/70 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-[#EDAB62]/50"
    >
      {/* Dynamic radial glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}% ${y}%, rgba(237,171,98,0.10) 0%, transparent 60%)`
          ),
        }}
      />

      {/* Shine sweep */}
      <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />

      {/* Top border glow on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#EDAB62]/0 to-transparent transition-all duration-500 group-hover:via-[#EDAB62]/40" />

      <div className="relative flex items-start gap-4">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#EDAB62]/15 to-[#6090E8]/10 transition-all duration-300 group-hover:from-[#EDAB62]/25 group-hover:to-[#6090E8]/15 group-hover:shadow-lg group-hover:shadow-[#EDAB62]/10"
        >
          <Globe className="h-5 w-5 text-[#EDAB62]/70 transition-colors duration-300 group-hover:text-[#EDAB62]" />
        </motion.div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2.5">
            <h3 className="truncate text-base font-semibold text-[#FDFBF7] transition-colors duration-300 group-hover:text-[#EDAB62]">
              {site.name}
            </h3>
            <span className="flex-shrink-0 rounded-full border border-[#EDAB62]/20 bg-[#EDAB62]/8 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-[#EDAB62]/80">
              {site.tag}
            </span>
          </div>
          <p className="truncate text-xs text-[#8C8780] transition-colors duration-300 group-hover:text-[#B8B2AC]">
            {site.domain}
          </p>
        </div>

        {/* External link */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg opacity-0 transition-all duration-300 group-hover:bg-[#EDAB62]/10 group-hover:opacity-100"
        >
          <ExternalLink className="h-4 w-4 text-[#EDAB62]" />
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function WebPortfolio() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(96,144,232,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6090E8]/30 bg-[#6090E8]/8 px-5 py-2"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-[#6090E8]" />
            </motion.div>
            <span className="text-xs font-medium tracking-[0.15em] text-[#6090E8]">
              AI CRAFTED
            </span>
          </motion.div>

          <h2 className="mb-4 text-4xl font-bold text-[#FDFBF7] md:text-5xl lg:text-6xl">
            <AnimatedTitle text="Web Portfolio" />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-xl text-base text-[#A09B95] md:text-lg"
          >
            AIを活用して制作したウェブサイト。デザインから実装まで、最先端の技術で構築。
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mx-auto mt-8 h-[1px] w-32 bg-gradient-to-r from-transparent via-[#EDAB62]/40 to-transparent"
          />
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {webPortfolio.map((site, i) => (
            <PortfolioCard key={site.domain} site={site} index={i} />
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { value: `${webPortfolio.length}`, label: "Websites" },
            { value: "AI", label: "Powered" },
            { value: "Full", label: "Stack" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-[#EDAB62] md:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs tracking-wider text-[#8C8780]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
