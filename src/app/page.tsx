"use client";

import { motion } from "framer-motion";
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

function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-[2px] origin-left bg-foreground/8"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <ThemeToggle />
      <LanguageSwitcher />

      <main className="relative">
        <Hero />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <BentoGrid />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Philosophy />
        <SectionDivider />
        <WebPortfolio />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
