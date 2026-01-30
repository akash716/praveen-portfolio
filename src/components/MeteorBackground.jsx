import { useEffect, useRef } from "react";

export default function MeteorBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const meteors = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: Math.random() * 120 + 40,
      speed: Math.random() * 6 + 4,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const m of meteors) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(167,139,250,${m.alpha})`;
        ctx.lineWidth = 2;
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.len, m.y + m.len);
        ctx.stroke();

        m.x += m.speed;
        m.y -= m.speed;

        if (m.x > width || m.y < 0) {
          m.x = Math.random() * width;
          m.y = height + 100;
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none blur-2xl opacity-60"
    />
  );
}
