"use client";

import { useEffect, useRef } from "react";

export default function MouseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

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
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const shapes: {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      speed: number;
      type: "diamond" | "circle" | "hexagon" | "cross" | "ring";
      opacity: number;
      wobblePhase: number;
      wobbleAmp: number;
    }[] = [];

    for (let i = 0; i < 45; i++) {
      shapes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 3,
        size: Math.random() * 24 + 6,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        speed: Math.random() * 0.5 + 0.15,
        type: (["diamond", "circle", "hexagon", "cross", "ring"] as const)[
          Math.floor(Math.random() * 5)
        ],
        opacity: Math.random() * 0.1 + 0.03,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleAmp: Math.random() * 30 + 10,
      });
    }

    const drawShape = (
      shape: (typeof shapes)[0],
      mouseInfluence: { dx: number; dy: number }
    ) => {
      ctx.save();
      const wobble = Math.sin(time * 0.001 + shape.wobblePhase) * shape.wobbleAmp;
      const offsetX = mouseInfluence.dx * shape.size * 0.04 + wobble * 0.3;
      const offsetY = mouseInfluence.dy * shape.size * 0.04;
      ctx.translate(shape.x + offsetX, shape.y + offsetY);
      ctx.rotate(shape.rotation);
      ctx.lineWidth = 0.6;

      const dist = Math.hypot(
        shape.x - mouseRef.current.x,
        shape.y - mouseRef.current.y
      );
      const proximity = Math.max(0, 1 - dist / 400);
      ctx.globalAlpha = shape.opacity + proximity * 0.15;
      ctx.strokeStyle = proximity > 0.3
        ? `rgba(212, 148, 74, ${0.3 + proximity * 0.5})`
        : `rgba(212, 148, 74, ${0.15 + proximity * 0.3})`;

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
          ctx.moveTo(Math.cos(angle) * shape.size * 0.85, Math.sin(angle) * shape.size * 0.85);
          ctx.lineTo(Math.cos(angle) * shape.size, Math.sin(angle) * shape.size);
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
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, shape.size * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const dx = (mouseRef.current.x - centerX) / centerX;
      const dy = (mouseRef.current.y - centerY) / centerY;

      for (const shape of shapes) {
        shape.rotation += shape.rotationSpeed;
        shape.y -= shape.speed;
        if (shape.y < -shape.size * 2) {
          shape.y = canvas.height + shape.size * 2;
          shape.x = Math.random() * canvas.width;
        }
        drawShape(shape, { dx, dy });
      }

      ctx.lineWidth = 0.3;
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dist = Math.hypot(shapes[i].x - shapes[j].x, shapes[i].y - shapes[j].y);
          if (dist < 150) {
            ctx.globalAlpha = (1 - dist / 150) * 0.06;
            ctx.strokeStyle = "rgba(212, 148, 74, 0.04)";
            ctx.beginPath();
            ctx.moveTo(shapes[i].x, shapes[i].y);
            ctx.lineTo(shapes[j].x, shapes[j].y);
            ctx.stroke();
          }
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
