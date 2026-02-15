"use client";

import { useLanguage } from "./LanguageProvider";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState, useCallback } from "react";

const CATEGORY_ICONS: Record<string, string> = {
  "マン島事業": "🏦",
  "Isle of Man": "🏦",
  "Men oroli": "🏦",
  "Isle of Man စီးပွားရေး": "🏦",
  "痛スーツ事業": "👔",
  "Itai Suit (Anime Suit)": "👔",
  "Itai kostyum (Anime kostyum)": "👔",
  "Itai Suit (Anime ဝတ်စုံ)": "👔",
  "メディア事業": "📰",
  "Media": "📰",
  "မီဒီယာလုပ်ငန်း": "📰",
  "イベント・団体": "🎨",
  "Events & Organizations": "🎨",
  "Tadbirlar va tashkilotlar": "🎨",
  "ပွဲများနှင့် အဖွဲ့အစည်းများ": "🎨",
  "IT事業": "💻",
  "IT": "💻",
  "IT လုပ်ငန်း": "💻",
  "金融事業": "💰",
  "Finance": "💰",
  "Moliya": "💰",
  "ဘဏ္ဍာရေးလုပ်ငန်း": "💰",
  "飲食事業": "🍽️",
  "Food & Beverage": "🍽️",
  "Ovqatlanish": "🍽️",
  "စားသောက်လုပ်ငန်း": "🍽️",
  "不動産事業": "🏢",
  "Real Estate": "🏢",
  "Ko'chmas mulk": "🏢",
  "အိမ်ခြံမြေလုပ်ငန်း": "🏢",
  "ホテル事業": "🏨",
  "Hotels": "🏨",
  "Mehmonxona": "🏨",
  "ဟိုတယ်လုပ်ငန်း": "🏨",
};

/* ── 3D Tilt Achievement Card ─────────────────────── */
function AchievementCard({
  achievement,
  idx,
}: {
  achievement: { category: string; items: string[] };
  idx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const cfg = { stiffness: 320, damping: 18, mass: 0.7 };

  const rotateX = useSpring(useTransform(my, [0, 1], [12, -12]), cfg);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-12, 12]), cfg);
  const glowX = useSpring(useTransform(mx, [0, 1], [0, 100]), cfg);
  const glowY = useSpring(useTransform(my, [0, 1], [0, 100]), cfg);

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    [mx, my],
  );

  const handleLeave = useCallback(() => {
    setHovered(false);
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  const bg = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(350px circle at ${x}% ${y}%, rgba(237,171,98,0.18), rgba(96,144,232,0.08) 50%, transparent 80%)`,
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 70, rotateX: -20, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        delay: 0.08 + idx * 0.08,
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 700,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      {/* cursor-tracking glow border */}
      <motion.div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: bg }}
      />

      {/* scan line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-marron to-transparent opacity-0 group-hover:opacity-50"
          animate={hovered ? { y: ["-100%", "600%"] } : { y: "-100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* card */}
      <div className="relative z-10 overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-marron/40 group-hover:shadow-[0_8px_40px_-8px_rgba(237,171,98,0.18)]">
        {/* Category header */}
        <div
          className="mb-4 flex items-center gap-3"
          style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
        >
          <motion.span
            className="text-2xl"
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: idx * 0.5,
              ease: "easeInOut",
            }}
          >
            {CATEGORY_ICONS[achievement.category] || "📋"}
          </motion.span>
          <h3 className="text-sm font-bold uppercase tracking-wider text-marron">
            {achievement.category}
          </h3>
        </div>

        {/* Items with staggered entrance */}
        <ul
          className="space-y-2"
          style={{ transformStyle: "preserve-3d", transform: "translateZ(12px)" }}
        >
          {achievement.items.map((item, itemIdx) => (
            <motion.li
              key={itemIdx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 16,
                delay: 0.2 + idx * 0.06 + itemIdx * 0.08,
              }}
              className="flex gap-2 text-sm leading-relaxed text-secondary"
            >
              <motion.span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-marron/60"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: itemIdx * 0.3,
                }}
              />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>

        {/* corner accent */}
        <motion.div
          className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-25"
          style={{
            background: "radial-gradient(circle, var(--marron) 0%, transparent 70%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const { t } = useLanguage();

  return (
    <section className="relative px-6 py-32" id="achievements">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(96,144,232,0.03)_0%,_transparent_60%)]" />

      {/* ambient rotating glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full opacity-[0.025]"
          style={{
            background: "radial-gradient(circle, var(--marron) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0em", y: 20 }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mb-4 block text-sm uppercase text-marron"
          >
            {t.ui.achievements.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="animate-shimmer bg-gradient-to-r from-foreground via-marron to-foreground bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
          >
            {t.ui.achievements.title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-marron to-transparent"
          />
        </motion.div>

        {/* Achievement grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.achievements.map((achievement, idx) => (
            <AchievementCard key={idx} achievement={achievement} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
