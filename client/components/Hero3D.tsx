import { useEffect, useRef } from "react";

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number; size: number; alpha: number;
    }[] = [];

    const count = 80;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let angle = 0;
    let mouseX = w / 2;
    let mouseY = h / 2;

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      angle += 0.008;

      // Grid
      ctx.strokeStyle = "rgba(0, 255, 0, 0.04)";
      ctx.lineWidth = 0.5;
      const step = 40;
      const ox = (mouseX - w / 2) * 0.005;
      const oy = (mouseY - h / 2) * 0.005;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x + ox, 0);
        ctx.lineTo(x + ox + Math.sin(angle + x * 0.01) * 2, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y + oy);
        ctx.lineTo(w, y + oy + Math.cos(angle + y * 0.01) * 2);
        ctx.stroke();
      }

      // Geometric shape
      const cx = w * 0.75;
      const cy = h * 0.4;
      const size = Math.min(w, h) * 0.15;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle * 0.5);

      // Outer wireframe
      ctx.strokeStyle = "rgba(0, 255, 0, 0.15)";
      ctx.lineWidth = 1;
      for (let k = 0; k < 3; k++) {
        ctx.save();
        ctx.rotate((k * Math.PI * 2) / 3);
        ctx.beginPath();
        for (let i = 0; i <= 20; i++) {
          const t = (i / 20) * Math.PI * 2;
          const r = size * (0.8 + Math.sin(t * 3) * 0.2);
          const x = Math.cos(t) * r;
          const y = Math.sin(t) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      }

      // Inner glow shape
      ctx.shadowColor = "rgba(0, 255, 0, 0.3)";
      ctx.shadowBlur = 30;
      ctx.strokeStyle = "rgba(0, 255, 0, 0.12)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let i = 0; i <= 30; i++) {
        const t = (i / 30) * Math.PI * 2;
        const r = size * 0.5;
        const x = Math.cos(t) * r;
        const y = Math.sin(t) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.restore();

      // Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 0, ${p.alpha})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 0, ${p.alpha * 0.1})`;
        ctx.fill();
      }

      // Connection lines
      for (let i = 0; i < particles.length; i += 3) {
        const a = particles[i];
        const b = particles[(i + 1) % particles.length];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0, 255, 0, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ contain: "strict" }}
    />
  );
}
