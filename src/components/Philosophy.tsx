"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { philosophy } from "@/constants/data";
import { Quote, Lightbulb, Footprints, Rocket } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const beliefIcons = [Lightbulb, Footprints, Rocket];

/* ---- Typewriter effect ---- */
function TypewriterQuote({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayText(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayText}
      {displayText.length < text.length && started && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block h-[1em] w-[2px] translate-y-[2px] bg-marron"
        />
      )}
    </span>
  );
}

export default function Philosophy() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const [isQuoteInView, setIsQuoteInView] = useState(false);

  const cardMouseX = useMotionValue(0);
  const cardMouseY = useMotionValue(0);
  const cardRotateX = useSpring(
    useTransform(cardMouseY, [-0.5, 0.5], [5, -5]),
    { stiffness: 200, damping: 20 }
  );
  const cardRotateY = useSpring(
    useTransform(cardMouseX, [-0.5, 0.5], [-5, 5]),
    { stiffness: 200, damping: 20 }
  );

  const handleCardMouse = (e: React.MouseEvent) => {
    if (!quoteRef.current) return;
    const rect = quoteRef.current.getBoundingClientRect();
    cardMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    cardMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleCardLeave = () => {
    cardMouseX.set(0);
    cardMouseY.set(0);
  };

  return (
    <section className="relative px-6 py-32" id="philosophy">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(237,171,98,0.05)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0em", y: 20 }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mb-4 block text-sm uppercase text-marron"
          >
            Philosophy
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
            className="text-3xl font-bold text-foreground md:text-5xl"
          >
            信念
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

        {/* Main quote card with 3D tilt */}
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, scale: 0.85, y: 60, rotateX: -10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          onViewportEnter={() => setIsQuoteInView(true)}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
          onMouseMove={handleCardMouse}
          onMouseLeave={handleCardLeave}
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformPerspective: 1000,
          }}
          className="relative mb-20"
        >
          {/* Animated gradient border */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(0deg, rgba(237,171,98,0.5), transparent 50%, rgba(96,144,232,0.3))",
                "linear-gradient(90deg, rgba(237,171,98,0.5), transparent 50%, rgba(96,144,232,0.3))",
                "linear-gradient(180deg, rgba(237,171,98,0.5), transparent 50%, rgba(96,144,232,0.3))",
                "linear-gradient(270deg, rgba(237,171,98,0.5), transparent 50%, rgba(96,144,232,0.3))",
                "linear-gradient(360deg, rgba(237,171,98,0.5), transparent 50%, rgba(96,144,232,0.3))",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[1px] rounded-3xl"
          />

          <div className="relative rounded-3xl bg-surface p-8 md:p-16">
            {/* Floating dots */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 8, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-8 top-8 h-2 w-2 rounded-full bg-marron/30"
            />
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-12 left-12 h-3 w-3 rounded-full bg-navy/20"
            />

            {/* Quote icon */}
            <motion.div
              initial={{ opacity: 0, rotate: -30, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 150,
              }}
              className="mb-8"
            >
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Quote className="h-16 w-16 text-marron/40" />
              </motion.div>
            </motion.div>

            {/* Main quote with typewriter */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <p className="animate-shimmer bg-gradient-to-r from-foreground via-marron to-foreground bg-clip-text text-2xl font-bold leading-relaxed text-transparent md:text-4xl">
                {isQuoteInView ? (
                  <>
                    「
                    <TypewriterQuote
                      text={philosophy.mainQuote}
                      delay={0.6}
                    />
                    」
                  </>
                ) : (
                  <span className="opacity-0">
                    「{philosophy.mainQuote}」
                  </span>
                )}
              </p>
            </motion.blockquote>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mb-8 h-[1px] bg-gradient-to-r from-marron/50 via-marron/20 to-transparent"
            />

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg leading-relaxed text-muted md:text-xl"
            >
              {philosophy.subtext}
            </motion.p>
          </div>
        </motion.div>

        {/* Belief cards with 3D flip entrance */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {philosophy.beliefs.map((belief, i) => {
            const Icon = beliefIcons[i];
            return (
              <motion.div
                key={belief.title}
                initial={{
                  opacity: 0,
                  y: 80,
                  rotateY: -30,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  rotateY: 5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  },
                }}
                className="group relative rounded-2xl border border-line bg-elevated p-6 transition-colors duration-300 hover:border-marron/40"
                style={{ perspective: "600px" }}
              >
                <motion.div
                  whileHover={{
                    rotate: 20,
                    scale: 1.3,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 8,
                    },
                  }}
                  className="mb-4 inline-flex rounded-xl bg-marron/10 p-3"
                >
                  <Icon className="h-6 w-6 text-marron" />
                </motion.div>

                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {belief.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {belief.text}
                </p>

                <div className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-b-2xl bg-marron/0 blur-2xl transition-all duration-700 group-hover:bg-marron/15" />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15 + 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="absolute right-4 top-4 h-1 w-6 rounded-full bg-marron/20"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
