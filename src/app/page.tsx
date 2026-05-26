"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
import { useLanguage } from "@/components/LanguageProvider";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed left-0 top-0 z-50 h-[3px] w-full bg-foreground"
    />
  );
}

function MarqueeBand({ text }: { text: string }) {
  return (
    <div className="overflow-hidden border-y border-foreground/5 py-3">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="mx-6 text-sm font-bold uppercase tracking-[0.3em] text-foreground/[0.06]">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-background">
      <ScrollProgress />
      <GrainOverlay />
      <ThemeToggle />
      <LanguageSwitcher />

      <main className="relative">
        <Hero />
        <MarqueeBand text="TRACK RECORD ✦ ACHIEVEMENTS ✦ PORTFOLIO ✦ SERIAL ENTREPRENEUR ✦" />
        <Achievements />
        <MarqueeBand text={`${t.personalInfo.alias} ✦ ${t.personalInfo.nameEn} ✦ CURRENT VENTURES ✦`} />
        <BentoGrid />
        <MarqueeBand text="HISTORY ✦ JOURNEY ✦ 2000 — PRESENT ✦ SELF-DRIVEN ✦" />
        <Timeline />
        <MarqueeBand text="PHILOSOPHY ✦ BELIEFS ✦ RESILIENCE ✦ FAILURE IS REPRODUCIBLE ✦" />
        <Philosophy />
        <MarqueeBand text="WEB PORTFOLIO ✦ AI CRAFTED ✦ FULL STACK ✦ DESIGN ✦" />
        <WebPortfolio />
        <MarqueeBand text="GALLERY ✦ PHOTOS ✦ MOMENTS ✦ BUSINESS ✦ HOSPITALITY ✦" />
        <Gallery />
        <MarqueeBand text="CONTACT ✦ GET IN TOUCH ✦ LET'S TALK ✦ COLLABORATION ✦" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
