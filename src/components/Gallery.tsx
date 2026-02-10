"use client";

import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

function AutoScrollTrack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useAnimationFrame(() => {
    if (!trackRef.current) return;
    xRef.current -= 0.5;
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
            className={`relative flex-shrink-0 overflow-hidden rounded-xl border border-[#3D3730]/50 ${
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

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative py-32" id="gallery">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,107,196,0.04)_0%,_transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mb-4 block text-sm uppercase text-[#D4944A]"
          >
            Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-[#FDFBF7] md:text-5xl"
          >
            Recent Photos
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4944A] to-transparent"
          />
        </motion.div>
      </div>

      {/* Auto-scrolling row */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-8 overflow-hidden"
      >
        <AutoScrollTrack />
      </motion.div>

      {/* Manual scrollable row */}
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Navigation arrows */}
        <motion.button
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#3D3730] bg-[#1A1815]/90 p-2.5 text-[#A09A94] backdrop-blur-sm transition-colors hover:border-[#D4944A]/50 hover:text-[#D4944A] md:left-0"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
        <motion.button
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[#3D3730] bg-[#1A1815]/90 p-2.5 text-[#A09A94] backdrop-blur-sm transition-colors hover:border-[#D4944A]/50 hover:text-[#D4944A] md:right-0"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth px-2 pb-4"
        >
          {galleryImages.map((img, idx) => {
            const isLogo = img.src.endsWith(".png");
            return (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.85, rotate: idx % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.03,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className={`group relative flex-shrink-0 overflow-hidden rounded-xl border border-[#3D3730] transition-colors duration-300 hover:border-[#D4944A]/40 ${
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
