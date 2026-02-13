"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

const CATEGORY_ICONS: Record<string, string> = {
  "マン島事業": "🏦",
  "Isle of Man": "🏦",
  "Men oroli": "🏦",
  "Isle of Man စီးပွားရေး": "🏦",
  "痛スーツ事業": "👔",
  "Itai Suit (Anime Suit)": "👔",
  "Itai kostyum (Anime kostyum)": "👔",
  "Itai Suit (Anime ဝတ်စုံ)": "👔",
  "メディア事業": "📰",
  "Media": "📰",
  "မီဒီယာလုပ်ငန်း": "📰",
  "イベント・団体": "🎨",
  "Events & Organizations": "🎨",
  "Tadbirlar va tashkilotlar": "🎨",
  "ပွဲများနှင့် အဖွဲ့အစည်းများ": "🎨",
  "IT事業": "💻",
  "IT": "💻",
  "IT လုပ်ငန်း": "💻",
  "金融事業": "💰",
  "Finance": "💰",
  "Moliya": "💰",
  "ဘဏ္ဍာရေးလုပ်ငန်း": "💰",
  "飲食事業": "🍽️",
  "Food & Beverage": "🍽️",
  "Ovqatlanish": "🍽️",
  "စားသောက်လုပ်ငန်း": "🍽️",
  "不動産事業": "🏢",
  "Real Estate": "🏢",
  "Ko'chmas mulk": "🏢",
  "အိမ်ခြံမြေလုပ်ငန်း": "🏢",
  "ホテル事業": "🏨",
  "Hotels": "🏨",
  "Mehmonxona": "🏨",
  "ဟိုတယ်လုပ်ငန်း": "🏨",
};

export default function Achievements() {
  const { t } = useLanguage();

  return (
    <section className="relative px-6 py-32" id="achievements">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(96,144,232,0.03)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0em", y: 20 }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mb-4 block text-sm uppercase text-marron"
          >
            {t.ui.achievements.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="text-3xl font-bold text-foreground md:text-5xl"
          >
            {t.ui.achievements.title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-marron to-transparent"
          />
        </motion.div>

        {/* Achievement grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + idx * 0.06,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-marron/30 hover:shadow-lg hover:shadow-marron/5"
            >
              {/* Category header */}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl">
                  {CATEGORY_ICONS[achievement.category] || "📋"}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-marron">
                  {achievement.category}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-2">
                {achievement.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex gap-2 text-sm leading-relaxed text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-marron/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
