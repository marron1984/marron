"use client";

import { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
  PanInfo,
} from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

/* ---- Auto-scrolling track ---- */
function AutoScrollTrack({ speed = 0.6, galleryImages }: { speed?: number; galleryImages: { src: string; alt: string }[] }) {
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
    <div ref={trackRef} className="flex gap-4 will-change-transform">
      {doubled.map((img, i) => {
        const isLogo = img.src.endsWith(".png");
        return (
          <div
            key={`${img.src}-${i}`}
            className={`relative flex-shrink-0 overflow-hidden rounded-xl border border-line/50 transition-all duration-500 hover:border-marron/40 ${
              isLogo
                ? "h-48 w-48 bg-white md:h-56 md:w-56"
                : "h-48 w-72 md:h-56 md:w-80"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`${
                isLogo ? "object-contain p-4" : "object-cover"
              } transition-transform duration-700 hover:scale-110`}
              sizes="320px"
            />
          </div>
        );
      })}
    </div>
  );
}

/* ---- Drag-scrollable row with momentum ---- */
function DragScrollRow({ galleryImages }: { galleryImages: { src: string; alt: string }[] }) {
  const constraintRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const springX = useSpring(dragX, { stiffness: 100, damping: 30 });

  return (
    <div ref={constraintRef} className="overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={constraintRef}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        style={{ x: springX }}
        className="flex cursor-grab gap-5 px-2 pb-4 active:cursor-grabbing"
      >
        {galleryImages.map((img, idx) => {
          const isLogo = img.src.endsWith(".png");
          return (
            <motion.div
              key={img.src}
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: idx % 2 === 0 ? -3 : 3,
              }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.03,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{
                scale: 1.08,
                y: -10,
                rotate: 0,
                transition: { type: "spring", stiffness: 300, damping: 12 },
              }}
              className={`group relative flex-shrink-0 overflow-hidden rounded-xl border border-line transition-colors duration-300 hover:border-marron/50 ${
                isLogo
                  ? "h-56 w-56 bg-white md:h-64 md:w-64"
                  : "h-56 w-80 md:h-64 md:w-96"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`${
                  isLogo ? "object-contain p-4" : "object-cover"
                } transition-transform duration-700 group-hover:scale-110`}
                sizes="400px"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <motion.p
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
                className="absolute bottom-3 left-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                {img.alt}
              </motion.p>

              {/* Shine sweep on hover */}
              <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  return (
    <section className="relative py-32" id="gallery">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(96,144,232,0.04)_0%,_transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6">
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
            {t.ui.gallery.label}
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
            {t.ui.gallery.title}
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-sm text-dimmer"
          >
            {t.ui.gallery.dragHint}
          </motion.p>
        </motion.div>
      </div>

      {/* Auto-scrolling row */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, type: "spring", stiffness: 40 }}
        className="mb-10 overflow-hidden"
      >
        <AutoScrollTrack speed={0.5} galleryImages={t.galleryImages} />
      </motion.div>

      {/* Drag-scrollable row */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 40 }}
        className="mx-auto max-w-7xl px-6"
      >
        <DragScrollRow galleryImages={t.galleryImages} />
      </motion.div>
    </section>
  );
}
