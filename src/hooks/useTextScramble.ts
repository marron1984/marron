"use client";

import { useState, useEffect, useCallback } from "react";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function useTextScramble(text: string, options?: { speed?: number; delay?: number; trigger?: boolean }) {
  const { speed = 30, delay = 0, trigger = true } = options ?? {};
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  const scramble = useCallback(() => {
    if (!trigger) return;
    let iteration = 0;
    const length = text.length;

    const interval = setInterval(() => {
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === "\n") return "\n";
            if (i < iteration) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration += 1 / 2;
      if (iteration > length) {
        setDisplayed(text);
        setDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, trigger]);

  useEffect(() => {
    const timer = setTimeout(scramble, delay);
    return () => clearTimeout(timer);
  }, [scramble, delay]);

  return { displayed, done };
}
