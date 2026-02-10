"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#2A2520] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8 md:flex-row md:justify-between"
        >
          {/* Left: Name */}
          <div>
            <p className="text-lg font-bold text-[#F5F0EB]">
              {personalInfo.nameJa}
            </p>
            <p className="mt-1 text-sm text-[#5A5550]">
              {personalInfo.nameEn} / {personalInfo.alias}
            </p>
          </div>

          {/* Center: Nav */}
          <nav className="flex gap-8">
            {[
              { label: "Portfolio", href: "#portfolio" },
              { label: "History", href: "#history" },
              { label: "Philosophy", href: "#philosophy" },
              { label: "Gallery", href: "#gallery" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#8B8680] transition-colors duration-300 hover:text-[#B87333]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Copyright */}
          <p className="text-xs text-[#3A3530]">
            &copy; {new Date().getFullYear()} {personalInfo.alias}. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
