"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { LOCALES } from "@/i18n/types";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = LOCALES.find((l) => l.code === locale)!;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="fixed left-6 top-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -6, 2, -1, 0],
        }}
        transition={{
          opacity: { delay: 0.5, duration: 0.3 },
          scale: { delay: 0.5, type: "spring", stiffness: 200, damping: 15 },
          y: {
            delay: 1.5,
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.1, y: 0 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-11 items-center gap-2 rounded-full border border-line bg-surface/80 px-4 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-marron/50"
      >
        <Globe className="h-4 w-4 text-marron" />
        <span className="text-xs font-medium text-foreground">
          {currentLocale.flag} {currentLocale.label}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="absolute left-0 top-14 overflow-hidden rounded-xl border border-line bg-surface/95 shadow-2xl backdrop-blur-md"
          >
            {LOCALES.map((l, i) => (
              <motion.button
                key={l.code}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setLocale(l.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-5 py-3 text-left text-sm transition-colors duration-200 hover:bg-marron/10 ${
                  locale === l.code
                    ? "bg-marron/5 font-semibold text-marron"
                    : "text-foreground"
                }`}
              >
                <span className="text-base">{l.flag}</span>
                <span className="whitespace-nowrap">{l.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
