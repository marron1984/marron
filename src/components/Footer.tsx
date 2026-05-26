"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

function MarqueeText({ text, speed = 20 }: { text: string; speed?: number }) {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-foreground/10 py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="mx-8 text-6xl font-black uppercase tracking-tight text-foreground/[0.04] md:text-8xl">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <MarqueeText text={`${t.personalInfo.alias} — ${t.personalInfo.nameEn} —`} />

      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base font-bold text-foreground">
                {t.personalInfo.nameJa}
              </p>
              <p className="mt-0.5 text-xs text-dimmer">
                {t.personalInfo.nameEn} / {t.personalInfo.alias}
              </p>
            </motion.div>

            <nav className="flex flex-wrap justify-center gap-6">
              {t.ui.footer.navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="text-xs text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <p className="text-[10px] text-dimmer">
              &copy; {new Date().getFullYear()} {t.personalInfo.alias}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
