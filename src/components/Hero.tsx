"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/constants/data";
import { Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0F]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Profile photo */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#B87333]/60 via-[#B87333]/20 to-[#2A4A7F]/40 blur-sm" />
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[#B87333]/40 md:h-40 md:w-40">
              <Image
                src="/profile.jpeg"
                alt={personalInfo.nameJa}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Alias badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#B87333]/30 bg-[#B87333]/10 px-4 py-2">
          <Sparkles className="h-4 w-4 text-[#B87333]" />
          <span className="text-sm tracking-widest text-[#B87333]">
            {personalInfo.alias}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-5xl font-bold tracking-tight text-[#F5F0EB] md:text-7xl lg:text-8xl"
        >
          {personalInfo.nameJa}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-8 text-lg tracking-[0.3em] text-[#8B8680] md:text-xl"
        >
          {personalInfo.nameEn}
        </motion.p>

        {/* Catchphrase */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[#C9C0B6] md:text-xl"
        >
          {personalInfo.catchphrase}
        </motion.p>

        {/* Quick info pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {[personalInfo.birthDate, personalInfo.origin, `趣味：${personalInfo.hobby}`].map(
            (info) => (
              <span
                key={info}
                className="rounded-full border border-[#2A2520] bg-[#12110E] px-4 py-2 text-sm text-[#8B8680]"
              >
                {info}
              </span>
            )
          )}
        </motion.div>

        {/* Keywords */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {personalInfo.keywords.map((keyword) => (
            <span
              key={keyword}
              className="text-xs font-medium tracking-widest text-[#B87333]/60 uppercase"
            >
              {keyword}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto h-12 w-[1px] bg-gradient-to-b from-[#B87333] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
