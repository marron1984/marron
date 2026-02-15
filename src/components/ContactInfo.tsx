"use client";

import { useLanguage } from "./LanguageProvider";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, IdCard } from "lucide-react";
import { useRef, useState, useCallback, type MouseEvent, type ComponentType } from "react";

/* ── 3D tilt card ────────────────────────────────────── */
function TiltCard({
  children,
  idx,
}: {
  children: React.ReactNode;
  idx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springCfg = { stiffness: 350, damping: 18, mass: 0.8 };

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [14, -14]),
    springCfg,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-14, 14]),
    springCfg,
  );

  const glowX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), springCfg);
  const glowY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), springCfg);

  const handleMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mouseX.set((e.clientX - r.left) / r.width);
      mouseY.set((e.clientY - r.top) / r.height);
    },
    [mouseX, mouseY],
  );

  const handleLeave = useCallback(() => {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 60, rotateX: -25, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 16,
        delay: 0.15 + idx * 0.12,
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 700,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      {/* ── animated border glow ── */}
      <motion.div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate(
            glowX,
            glowY,
            "radial-gradient(400px circle at ",
            "% ",
            "%, rgba(237,171,98,0.35), rgba(96,144,232,0.15) 50%, transparent 80%)",
          ),
        }}
      />

      {/* ── scan line ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 2px,currentColor 2px,currentColor 3px)",
          }}
        />
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-marron to-transparent opacity-0 group-hover:opacity-60"
          animate={hovered ? { y: ["-100%", "500%"] } : { y: "-100%" }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* ── glass card ── */}
      <div
        className="relative z-10 overflow-hidden rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur-sm transition-all duration-300 group-hover:border-marron/40 group-hover:bg-surface/95 group-hover:shadow-[0_8px_40px_-8px_rgba(237,171,98,0.2)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}

        {/* ── corner accent ── */}
        <motion.div
          className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--marron) 0%, transparent 70%)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ── helper: build a MotionValue-based template string ─ */
function useMotionTemplate(
  valA: MotionValue<number>,
  valB: MotionValue<number>,
  prefix: string,
  mid: string,
  suffix: string,
) {
  return useTransform([valA, valB], ([a, b]) => `${prefix}${a}${mid}${b}${suffix}`);
}

/* ── extras badge with spring pop ────────────────────── */
function ExtraBadge({
  icon: Icon,
  label,
  href,
  color,
  i,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  href: string;
  color: string;
  i: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 14,
        delay: 0.5 + i * 0.1,
      }}
      whileHover={{
        scale: 1.15,
        y: -3,
        boxShadow: `0 6px 24px -4px ${color}55`,
      }}
      whileTap={{ scale: 0.9 }}
      style={{
        color,
        backgroundColor: `${color}18`,
        borderColor: `${color}30`,
        transformStyle: "preserve-3d",
        translateZ: 20,
      }}
      className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors"
    >
      <motion.span
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2 + i * 0.5,
          ease: "easeInOut",
        }}
      >
        <Icon className="h-3.5 w-3.5" />
      </motion.span>
      {label}
    </motion.a>
  );
}

/* ── main component ──────────────────────────────────── */
export default function ContactInfo() {
  const { t } = useLanguage();

  const items = [
    {
      icon: Phone,
      label: t.ui.contact.phoneLabel,
      value: t.ui.contact.phone,
      href: `tel:${t.ui.contact.phone.replace(/-/g, "")}`,
      extras: [
        {
          icon: MessageCircle,
          label: "LINE Works",
          href: "https://works.do/R/ti/p/syoshida@aaworks",
          color: "#00C73C",
        },
        {
          icon: MessageCircle,
          label: "LINE",
          href: "https://line.me/ti/p/0F2Yv5Je6b",
          color: "#06C755",
        },
        {
          icon: IdCard,
          label: "名刺",
          href: "https://8card.net/virtual_cards/-fWqt7rpTBlXjBCx4k1Krw",
          color: "#3B82F6",
        },
      ],
    },
    {
      icon: Mail,
      label: "Email",
      value: t.ui.contact.emailAddress,
      href: `mailto:${t.ui.contact.emailAddress}`,
    },
    {
      icon: MapPin,
      label: t.ui.contact.addressLabel,
      value: t.ui.contact.address,
    },
  ];

  return (
    <section className="relative px-6 py-20" id="info">
      {/* ── background ambient glow ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, var(--marron) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {items.map((item, idx) => (
            <TiltCard key={idx} idx={idx}>
              {/* ── icon + label row ── */}
              <div className="mb-3 flex items-center gap-2.5">
                <motion.div
                  className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-marron/10"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  style={{ transformStyle: "preserve-3d", translateZ: 25 }}
                >
                  <item.icon className="h-4 w-4 text-marron" />
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-marron/20"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: idx * 0.8,
                    }}
                  />
                </motion.div>
                <motion.span
                  className="text-xs font-bold uppercase tracking-[0.2em] text-dimmest"
                  style={{ transformStyle: "preserve-3d", translateZ: 15 }}
                >
                  {item.label}
                </motion.span>
              </div>

              {/* ── value ── */}
              {"href" in item && item.href ? (
                <motion.a
                  href={item.href}
                  className="relative inline-block text-sm font-medium text-foreground transition-colors hover:text-marron"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  style={{ transformStyle: "preserve-3d", translateZ: 10 }}
                >
                  {item.value}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-marron transition-all duration-300 group-hover:w-full"
                  />
                </motion.a>
              ) : (
                <p
                  className="text-sm leading-relaxed text-foreground"
                  style={{ transformStyle: "preserve-3d", translateZ: 10 } as React.CSSProperties}
                >
                  {item.value}
                </p>
              )}

              {/* ── extras ── */}
              {"extras" in item && item.extras && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.extras.map((ex, i) => (
                    <ExtraBadge key={i} i={i} {...ex} />
                  ))}
                </div>
              )}
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
