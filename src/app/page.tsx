"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import MouseBackground from "@/components/MouseBackground";
import PageLoader from "@/components/PageLoader";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import Philosophy from "@/components/Philosophy";
import WebPortfolio from "@/components/WebPortfolio";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="grain-overlay relative min-h-screen bg-background">
      <PageLoader />
      <MouseBackground />
      <ThemeToggle />
      <LanguageSwitcher />

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="scroll-progress fixed left-0 right-0 top-0 z-50 h-[2px]"
      />

      <main className="relative z-10">
        <Hero />

        {/* Section divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-marron/20 to-transparent" />
        </motion.div>

        <Achievements />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        </motion.div>

        <BentoGrid />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        </motion.div>

        <Timeline />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-marron/20 to-transparent" />
        </motion.div>

        <Philosophy />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-navy/20 to-transparent" />
        </motion.div>

        <WebPortfolio />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-marron/20 to-transparent" />
        </motion.div>

        <Gallery />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl px-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-marron/20 to-transparent" />
        </motion.div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
