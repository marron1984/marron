"use client";

import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

function AutoScrollTrack({
  speed = 0.5,
  galleryImages,
}: {
  speed?: number;
  galleryImages: { src: string; alt: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useAnimationFrame(() => {
    if (!trackRef.current) return;
    xRef.current -= speed;
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
                ? "h-48 w-48 bg-white md:h-56 md:w-56"
                : "h-48 w-72 md:h-56 md:w-80"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`${isLogo ? "object-contain p-4" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
              sizes="320px"
            />
          </div>
        );
      })}
    </div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <section className="py-24" id="gallery">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.gallery.label}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            {t.ui.gallery.title}
          </h2>
          <div className="mt-4 h-px w-16 bg-foreground" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden"
      >
        <AutoScrollTrack speed={0.4} galleryImages={t.galleryImages} />
      </motion.div>
    </section>
  );
}
