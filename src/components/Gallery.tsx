"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

function AutoScrollTrack({
  speed = 0.5,
  direction = 1,
  galleryImages,
}: {
  speed?: number;
  direction?: number;
  galleryImages: { src: string; alt: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useAnimationFrame(() => {
    if (!trackRef.current) return;
    xRef.current -= speed * direction;
    const totalWidth = trackRef.current.scrollWidth / 2;
    if (Math.abs(xRef.current) >= totalWidth) xRef.current = 0;
    trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  const doubled = [...galleryImages, ...galleryImages];

  return (
    <div ref={trackRef} className="flex gap-4 will-change-transform">
      {doubled.map((img, i) => {
        const isLogo = img.src.endsWith(".png");
        return (
          <motion.div
            key={`${img.src}-${i}`}
            whileHover={{ scale: 1.08, zIndex: 10 }}
            transition={{ duration: 0.4 }}
            className={`group relative flex-shrink-0 overflow-hidden ${
              isLogo
                ? "h-64 w-64 bg-white md:h-80 md:w-80"
                : "h-64 w-96 md:h-80 md:w-[28rem]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`${isLogo ? "object-contain p-6" : "object-cover"} grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110`}
              sizes="500px"
            />
            <div className="absolute inset-0 bg-foreground/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-foreground/90 px-4 py-3 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-xs font-bold text-background">{img.alt}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const row1X = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const row2X = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.3], [0.85, 1]);

  const half = Math.ceil(t.galleryImages.length / 2);
  const row1 = t.galleryImages.slice(0, half);
  const row2 = t.galleryImages.slice(half);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale: sectionScale }}
      className="py-32 will-change-transform"
      id="gallery"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 80, skewY: 3 }}
          whileInView={{ opacity: 1, y: 0, skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.gallery.label}
          </span>
          <h2 className="text-5xl font-black tracking-tight text-foreground md:text-7xl">
            {t.ui.gallery.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[3px] w-32 origin-left bg-foreground"
          />
        </motion.div>
      </div>

      <div className="space-y-4 overflow-hidden">
        <motion.div style={{ x: row1X }}>
          <AutoScrollTrack speed={0.8} direction={1} galleryImages={row1} />
        </motion.div>
        <motion.div style={{ x: row2X }}>
          <AutoScrollTrack speed={0.5} direction={-1} galleryImages={row2} />
        </motion.div>
      </div>
    </motion.section>
  );
}
