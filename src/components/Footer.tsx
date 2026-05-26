"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-foreground/8 px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Name */}
          <div>
            <p className="text-base font-bold text-foreground">
              {t.personalInfo.nameJa}
            </p>
            <p className="mt-0.5 text-xs text-dimmer">
              {t.personalInfo.nameEn} / {t.personalInfo.alias}
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {t.ui.footer.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[10px] text-dimmer">
            &copy; {new Date().getFullYear()} {t.personalInfo.alias}
          </p>
        </div>
      </div>
    </footer>
  );
}
