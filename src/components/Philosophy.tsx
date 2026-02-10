"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/constants/data";
import { Quote, Lightbulb, Footprints, Rocket } from "lucide-react";

const beliefIcons = [Lightbulb, Footprints, Rocket];

export default function Philosophy() {
  return (
    <section className="relative px-6 py-32" id="philosophy">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(237, 171, 98,0.05)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mb-4 block text-sm text-[#EDAB62] uppercase"
          >
            Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-[#FDFBF7] md:text-5xl"
          >
            信念
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#EDAB62] to-transparent"
          />
        </motion.div>

        {/* Main quote card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mb-20"
        >
          {/* Animated gradient border */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(135deg, rgba(237, 171, 98,0.4), transparent, rgba(96, 144, 232,0.2))",
                "linear-gradient(225deg, rgba(237, 171, 98,0.4), transparent, rgba(96, 144, 232,0.2))",
                "linear-gradient(315deg, rgba(237, 171, 98,0.4), transparent, rgba(96, 144, 232,0.2))",
                "linear-gradient(135deg, rgba(237, 171, 98,0.4), transparent, rgba(96, 144, 232,0.2))",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[1px] rounded-3xl"
          />

          <div className="relative rounded-3xl bg-[#191714] p-8 md:p-16">
            {/* Quote icon */}
            <motion.div
              initial={{ opacity: 0, rotate: -20, scale: 0 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              className="mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Quote className="h-14 w-14 text-[#EDAB62]/50" />
              </motion.div>
            </motion.div>

            {/* Main quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="bg-gradient-to-r from-[#FDFBF7] via-[#EDAB62] to-[#FDFBF7] bg-clip-text text-2xl font-bold leading-relaxed text-transparent animate-shimmer md:text-4xl">
                「{philosophy.mainQuote}」
              </p>
            </motion.blockquote>

            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-8 h-[1px] bg-gradient-to-r from-[#EDAB62]/50 via-[#EDAB62]/20 to-transparent"
            />

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg leading-relaxed text-[#B8B2AC] md:text-xl"
            >
              {philosophy.subtext}
            </motion.p>
          </div>
        </motion.div>

        {/* Belief cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {philosophy.beliefs.map((belief, i) => {
            const Icon = beliefIcons[i];
            return (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="group relative rounded-2xl border border-[#564F48] bg-[#262320] p-6 transition-colors duration-300 hover:border-[#EDAB62]/30"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-4 inline-flex rounded-xl bg-[#EDAB62]/10 p-3"
                >
                  <Icon className="h-6 w-6 text-[#EDAB62]" />
                </motion.div>

                <h3 className="mb-3 text-lg font-bold text-[#FDFBF7]">
                  {belief.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#B8B2AC]">
                  {belief.text}
                </p>

                {/* Bottom glow on hover */}
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-12 w-3/4 -translate-x-1/2 rounded-b-2xl bg-[#EDAB62]/0 blur-xl transition-all duration-500 group-hover:bg-[#EDAB62]/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
