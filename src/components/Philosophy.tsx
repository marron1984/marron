"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/constants/data";
import { Quote } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="relative px-6 py-32" id="philosophy">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 block text-sm tracking-[0.3em] text-[#B87333] uppercase">
            Philosophy
          </span>
          <h2 className="text-3xl font-bold text-[#F5F0EB] md:text-5xl">
            信念
          </h2>
        </motion.div>

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="relative"
        >
          {/* Decorative border */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#B87333]/30 via-transparent to-[#2A4A7F]/20" />

          <div className="relative rounded-3xl bg-[#0E0D0A] p-8 md:p-16">
            {/* Quote icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <Quote className="h-12 w-12 text-[#B87333]/40" />
            </motion.div>

            {/* Main quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-2xl font-bold leading-relaxed text-[#F5F0EB] md:text-4xl">
                「{philosophy.mainQuote}」
              </p>
            </motion.blockquote>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 h-[1px] bg-gradient-to-r from-[#B87333]/40 via-[#B87333]/20 to-transparent"
            />

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg leading-relaxed text-[#8B8680] md:text-xl"
            >
              {philosophy.subtext}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
