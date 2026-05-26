"use client";

import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Timeline from "@/components/Timeline";
import ContactInfo from "@/components/ContactInfo";
import Achievements from "@/components/Achievements";
import Philosophy from "@/components/Philosophy";
import WebPortfolio from "@/components/WebPortfolio";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mx-auto max-w-6xl px-6"
    >
      <div className="h-px bg-foreground/8" />
    </motion.div>
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
        <ContactInfo />
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
