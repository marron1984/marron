"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useScroll, useTransform } from "framer-motion";
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
    if (Math.abs(xRef.current) >= totalWidth) {
      xRef.current = 0;
    }
    trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  const doubled = [...galleryImages, ...galleryImages];

  return (
    <div ref={trackRef} className="flex gap-3 will-change-transform">
      {doubled.map((img, i) => {
        const isLogo = img.src.endsWith(".png");
        return (
          <div
            key={`${img.src}-${i}`}
            className={`group relative flex-shrink-0 overflow-hidden ${
              isLogo
                ? "h-56 w-56 bg-white md:h-72 md:w-72"
                : "h-56 w-80 md:h-72 md:w-96"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`${isLogo ? "object-contain p-4" : "object-cover"} grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110`}
              sizes="400px"
            />
            <div className="absolute inset-0 bg-foreground/10 transition-opacity duration-500 group-hover:opacity-0" />
          </div>
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
  const row1X = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const row2X = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const half = Math.ceil(t.galleryImages.length / 2);
  const row1 = t.galleryImages.slice(0, half);
  const row2 = t.galleryImages.slice(half);

  return (
    <section ref={sectionRef} className="py-32" id="gallery">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.gallery.label}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">
            {t.ui.gallery.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground"
          />
        </motion.div>
      </div>

      <div className="space-y-3 overflow-hidden">
        <motion.div style={{ x: row1X }}>
          <AutoScrollTrack speed={0.6} direction={1} galleryImages={row1} />
        </motion.div>
        <motion.div style={{ x: row2X }}>
          <AutoScrollTrack speed={0.4} direction={-1} galleryImages={row2} />
        </motion.div>
      </div>
    </section>
  );
}
