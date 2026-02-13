"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const THEMES = {
  dark: {
    shapeR: 237, shapeG: 171, shapeB: 98,
    shapeAlpha: 0.15,
    shapeHoverAlpha: 0.35,
    auroraMarronAlpha: 0.8,
    auroraNavyAlpha: 0.6,
    auroraBgAlpha: 0.015,
    trailAlpha: 0.4,
    connectionAlpha: 0.06,
    mouseLineAlpha: 0.15,
    glowMultiplier: 0.3,
  },
  light: {
    shapeR: 180, shapeG: 140, shapeB: 80,
    shapeAlpha: 0.08,
    shapeHoverAlpha: 0.2,
    auroraMarronAlpha: 0.5,
    auroraNavyAlpha: 0.3,
    auroraBgAlpha: 0.008,
    trailAlpha: 0.25,
    connectionAlpha: 0.03,
    mouseLineAlpha: 0.08,
    glowMultiplier: 0.15,
  },
};

export default function MouseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      prevMouseRef.current = { ...mouseRef.current };
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      speed: number;
      type: "diamond" | "circle" | "hexagon" | "cross" | "ring" | "dot" | "triangle";
      opacity: number;
      wobblePhase: number;
      wobbleAmp: number;
      life: number;
      maxLife: number;
      vx: number;
      vy: number;
    }

    const shapes: Particle[] = [];

    // Background shapes
    for (let i = 0; i < 55; i++) {
      shapes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 3,
        size: Math.random() * 24 + 6,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        speed: Math.random() * 0.5 + 0.15,
        type: (
          [
            "diamond",
            "circle",
            "hexagon",
            "cross",
            "ring",
            "dot",
            "triangle",
          ] as const
        )[Math.floor(Math.random() * 7)],
        opacity: Math.random() * 0.12 + 0.03,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleAmp: Math.random() * 30 + 10,
        life: 0,
        maxLife: Infinity,
        vx: 0,
        vy: 0,
      });
    }

    // Mouse trail particles
    const trailParticles: Particle[] = [];

    const drawShape = (shape: Particle) => {
      const t = THEMES[themeRef.current];
      ctx.save();
      const wobble =
        Math.sin(time * 0.001 + shape.wobblePhase) * shape.wobbleAmp;
      const mouseInfluenceX =
        ((mouseRef.current.x - canvas.width / 2) / canvas.width) *
        shape.size *
        0.04;
      const mouseInfluenceY =
        ((mouseRef.current.y - canvas.height / 2) / canvas.height) *
        shape.size *
        0.04;
      ctx.translate(
        shape.x + mouseInfluenceX + wobble * 0.3,
        shape.y + mouseInfluenceY
      );
      ctx.rotate(shape.rotation);
      ctx.lineWidth = 0.6;

      const dist = Math.hypot(
        shape.x - mouseRef.current.x,
        shape.y - mouseRef.current.y
      );
      const proximity = Math.max(0, 1 - dist / 400);
      ctx.globalAlpha = shape.opacity + proximity * 0.2;

      const a = proximity > 0.3 ? t.shapeHoverAlpha + proximity * 0.5 : t.shapeAlpha + proximity * 0.3;
      ctx.strokeStyle = `rgba(${t.shapeR}, ${t.shapeG}, ${t.shapeB}, ${a})`;

      if (proximity > 0.5) {
        ctx.shadowColor = `rgba(${t.shapeR}, ${t.shapeG}, ${t.shapeB}, ${proximity * t.glowMultiplier})`;
        ctx.shadowBlur = proximity * 15;
      }

      if (shape.type === "diamond") {
        ctx.beginPath();
        ctx.moveTo(0, -shape.size);
        ctx.lineTo(shape.size, 0);
        ctx.lineTo(0, shape.size);
        ctx.lineTo(-shape.size, 0);
        ctx.closePath();
        ctx.stroke();
      } else if (shape.type === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, shape.size * 0.55, 0, Math.PI * 2);
        ctx.stroke();
        for (let n = 0; n < 8; n++) {
          const angle = (Math.PI / 4) * n;
          ctx.beginPath();
          ctx.moveTo(
            Math.cos(angle) * shape.size * 0.85,
            Math.sin(angle) * shape.size * 0.85
          );
          ctx.lineTo(
            Math.cos(angle) * shape.size,
            Math.sin(angle) * shape.size
          );
          ctx.stroke();
        }
      } else if (shape.type === "hexagon") {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          const x = Math.cos(angle) * shape.size;
          const y = Math.sin(angle) * shape.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      } else if (shape.type === "cross") {
        const arm = shape.size * 0.3;
        ctx.beginPath();
        ctx.moveTo(-arm, -shape.size);
        ctx.lineTo(arm, -shape.size);
        ctx.lineTo(arm, -arm);
        ctx.lineTo(shape.size, -arm);
        ctx.lineTo(shape.size, arm);
        ctx.lineTo(arm, arm);
        ctx.lineTo(arm, shape.size);
        ctx.lineTo(-arm, shape.size);
        ctx.lineTo(-arm, arm);
        ctx.lineTo(-shape.size, arm);
        ctx.lineTo(-shape.size, -arm);
        ctx.lineTo(-arm, -arm);
        ctx.closePath();
        ctx.stroke();
      } else if (shape.type === "triangle") {
        ctx.beginPath();
        ctx.moveTo(0, -shape.size);
        ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
        ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
        ctx.closePath();
        ctx.stroke();
      } else if (shape.type === "dot") {
        ctx.beginPath();
        ctx.arc(0, 0, shape.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, shape.size * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.restore();
    };

    const animate = () => {
      const t = THEMES[themeRef.current];
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw aurora blobs
      const auroraTime = time * 0.003;
      ctx.globalAlpha = t.auroraBgAlpha;
      const grad1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(auroraTime) * 100,
        canvas.height * 0.4 + Math.cos(auroraTime * 0.7) * 80,
        0,
        canvas.width * 0.3,
        canvas.height * 0.4,
        400
      );
      grad1.addColorStop(0, `rgba(${t.shapeR}, ${t.shapeG}, ${t.shapeB}, ${t.auroraMarronAlpha})`);
      grad1.addColorStop(1, "transparent");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const grad2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(auroraTime * 0.8) * 120,
        canvas.height * 0.6 + Math.sin(auroraTime * 0.6) * 90,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        350
      );
      grad2.addColorStop(0, `rgba(96, 144, 232, ${t.auroraNavyAlpha})`);
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 1;

      // Spawn trail particles on fast mouse movement
      const mouseVelocity = Math.hypot(
        mouseRef.current.x - prevMouseRef.current.x,
        mouseRef.current.y - prevMouseRef.current.y
      );
      if (mouseVelocity > 3 && trailParticles.length < 30) {
        trailParticles.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          size: Math.random() * 4 + 2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
          speed: 0,
          type: "dot",
          opacity: t.trailAlpha,
          wobblePhase: 0,
          wobbleAmp: 0,
          life: 0,
          maxLife: 40,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }

      // Update and draw trail particles
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const p = trailParticles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = t.trailAlpha * (1 - p.life / p.maxLife);
        p.size *= 0.98;
        if (p.life >= p.maxLife) {
          trailParticles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${t.shapeR}, ${t.shapeG}, ${t.shapeB}, ${p.opacity})`;
        ctx.fill();
        ctx.restore();
      }

      // Update and draw shapes
      for (const shape of shapes) {
        shape.rotation += shape.rotationSpeed;
        shape.y -= shape.speed;
        if (shape.y < -shape.size * 2) {
          shape.y = canvas.height + shape.size * 2;
          shape.x = Math.random() * canvas.width;
        }
        drawShape(shape);
      }

      // Connection lines
      ctx.lineWidth = 0.3;
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dist = Math.hypot(
            shapes[i].x - shapes[j].x,
            shapes[i].y - shapes[j].y
          );
          if (dist < 150) {
            const alpha = (1 - dist / 150) * t.connectionAlpha;
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = `rgba(${t.shapeR}, ${t.shapeG}, ${t.shapeB}, ${t.connectionAlpha})`;
            ctx.beginPath();
            ctx.moveTo(shapes[i].x, shapes[i].y);
            ctx.lineTo(shapes[j].x, shapes[j].y);
            ctx.stroke();
          }
        }
      }

      // Mouse-to-shape connections
      ctx.lineWidth = 0.4;
      for (const shape of shapes) {
        const dist = Math.hypot(
          shape.x - mouseRef.current.x,
          shape.y - mouseRef.current.y
        );
        if (dist < 200) {
          const alpha = (1 - dist / 200) * 0.1;
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = `rgba(${t.shapeR}, ${t.shapeG}, ${t.shapeB}, ${t.mouseLineAlpha})`;
          ctx.beginPath();
          ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
          ctx.lineTo(shape.x, shape.y);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
