"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

function MarqueeText({ text, speed = 20, reverse = false }: { text: string; speed?: number; reverse?: boolean }) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="mx-6 text-7xl font-black uppercase tracking-tight text-foreground/[0.03] md:text-9xl">
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
    <footer className="overflow-hidden">
      <div className="border-t-2 border-foreground/10">
        <MarqueeText text={`${t.personalInfo.alias} —`} speed={25} />
        <MarqueeText text={`${t.personalInfo.nameEn} —`} speed={30} reverse />
      </div>

      <div className="border-t border-foreground/10 px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg font-black text-foreground">
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
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="text-xs font-bold uppercase tracking-wider text-muted transition-colors hover:text-foreground"
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
