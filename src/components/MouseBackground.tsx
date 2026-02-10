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

    // Geometric shapes (poker-chip / diamond inspired)
    const shapes: {
      x: number;
      y: number;
      size: number;
      rotation: number;
      speed: number;
      type: "diamond" | "circle" | "hexagon";
      opacity: number;
    }[] = [];

    for (let i = 0; i < 24; i++) {
      shapes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 8,
        rotation: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.3 + 0.1,
        type: (["diamond", "circle", "hexagon"] as const)[
          Math.floor(Math.random() * 3)
        ],
        opacity: Math.random() * 0.08 + 0.02,
      });
    }

    const drawShape = (
      shape: (typeof shapes)[0],
      mouseInfluence: { dx: number; dy: number }
    ) => {
      ctx.save();
      const offsetX = mouseInfluence.dx * shape.size * 0.02;
      const offsetY = mouseInfluence.dy * shape.size * 0.02;
      ctx.translate(shape.x + offsetX, shape.y + offsetY);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = shape.opacity;
      ctx.strokeStyle = "#B87333";
      ctx.lineWidth = 0.5;

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
        // Inner circle (poker chip)
        ctx.beginPath();
        ctx.arc(0, 0, shape.size * 0.6, 0, Math.PI * 2);
        ctx.stroke();
      } else {
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
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const dx = (mouseRef.current.x - centerX) / centerX;
      const dy = (mouseRef.current.y - centerY) / centerY;

      for (const shape of shapes) {
        shape.rotation += shape.speed * 0.01;
        shape.y += shape.speed * 0.3;

        if (shape.y > canvas.height + shape.size) {
          shape.y = -shape.size;
          shape.x = Math.random() * canvas.width;
        }

        drawShape(shape, { dx, dy });
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
