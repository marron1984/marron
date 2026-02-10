"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "@/constants/data";
import { useRef } from "react";

/* ---- Magnetic Link ---- */
function MagneticLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ color: "#EDAB62" }}
      transition={{ duration: 0.2 }}
      className="text-sm text-[#B8B2AC]"
    >
      {children}
    </motion.a>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[#564F48]/50 px-6 py-16">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EDAB62]/20 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 60,
          }}
          className="flex flex-col items-center gap-8 md:flex-row md:justify-between"
        >
          {/* Name */}
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <p className="text-lg font-bold text-[#FDFBF7]">
              {personalInfo.nameJa}
            </p>
            <p className="mt-1 text-sm text-[#8C8780]">
              {personalInfo.nameEn} / {personalInfo.alias}
            </p>
          </motion.div>

          {/* Nav with magnetic links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { label: "Portfolio", href: "#portfolio" },
              { label: "History", href: "#history" },
              { label: "Philosophy", href: "#philosophy" },
              { label: "Gallery", href: "#gallery" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <MagneticLink key={link.href} href={link.href}>
                {link.label}
              </MagneticLink>
            ))}
          </nav>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xs text-[#635C56]"
          >
            &copy; {new Date().getFullYear()} {personalInfo.alias}. All rights
            reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
