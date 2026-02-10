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

const galleryImages = [
  { src: "/gallery/01.jpg", alt: "高級レストラン" },
  { src: "/gallery/02.jpg", alt: "レストラン内観" },
  { src: "/gallery/03.jpg", alt: "ダイニング" },
  { src: "/gallery/04.jpg", alt: "料理" },
  { src: "/gallery/05.jpg", alt: "奈良の鹿" },
  { src: "/gallery/06.jpg", alt: "旅館" },
  { src: "/gallery/07.jpg", alt: "事業風景" },
  { src: "/gallery/08.jpg", alt: "事業風景" },
  { src: "/gallery/09.jpg", alt: "事業風景" },
  { src: "/gallery/10.png", alt: "ええかんご AA-KANGO" },
  { src: "/gallery/11.png", alt: "ええさぽーと" },
  { src: "/gallery/12.png", alt: "ブランドロゴ" },
  { src: "/gallery/13.jpg", alt: "チームメンバー" },
  { src: "/gallery/14.jpg", alt: "チームメンバー" },
  { src: "/gallery/15.jpg", alt: "ビジネスシーン" },
  { src: "/gallery/16.jpg", alt: "事業風景" },
  { src: "/gallery/17.png", alt: "ブランドロゴ" },
  { src: "/gallery/18.jpg", alt: "事業風景" },
  { src: "/gallery/19.jpg", alt: "事業風景" },
  { src: "/gallery/20.jpg", alt: "事業風景" },
  { src: "/gallery/21.jpg", alt: "チームメンバー" },
];

/* ---- Auto-scrolling track ---- */
function AutoScrollTrack({ speed = 0.6 }: { speed?: number }) {
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
            className={`relative flex-shrink-0 overflow-hidden rounded-xl border border-[#564F48]/50 transition-all duration-500 hover:border-[#EDAB62]/40 ${
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
function DragScrollRow() {
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
              className={`group relative flex-shrink-0 overflow-hidden rounded-xl border border-[#564F48] transition-colors duration-300 hover:border-[#EDAB62]/50 ${
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
            className="mb-4 block text-sm uppercase text-[#EDAB62]"
          >
            Gallery
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
            className="text-3xl font-bold text-[#FDFBF7] md:text-5xl"
          >
            Recent Photos
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
            className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-[#EDAB62] to-transparent"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-sm text-[#8C8780]"
          >
            Drag to scroll &middot; ドラッグでスクロール
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
        <AutoScrollTrack speed={0.5} />
      </motion.div>

      {/* Drag-scrollable row */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 40 }}
        className="mx-auto max-w-7xl px-6"
      >
        <DragScrollRow />
      </motion.div>
    </section>
  );
}
