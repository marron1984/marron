"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#564F48] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8 md:flex-row md:justify-between"
        >
          {/* Left: Name */}
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
            <p className="text-lg font-bold text-[#FDFBF7]">
              {personalInfo.nameJa}
            </p>
            <p className="mt-1 text-sm text-[#8C8780]">
              {personalInfo.nameEn} / {personalInfo.alias}
            </p>
          </motion.div>

          {/* Center: Nav */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { label: "Portfolio", href: "#portfolio" },
              { label: "History", href: "#history" },
              { label: "Philosophy", href: "#philosophy" },
              { label: "Gallery", href: "#gallery" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2, color: "#EDAB62" }}
                transition={{ duration: 0.2 }}
                className="text-sm text-[#B8B2AC]"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Right: Copyright */}
          <p className="text-xs text-[#635C56]">
            &copy; {new Date().getFullYear()} {personalInfo.alias}. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
