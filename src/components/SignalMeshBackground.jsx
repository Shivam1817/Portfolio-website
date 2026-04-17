import { useEffect, useRef } from "react";

const NODE_COUNT = 42;
const MAX_DPR = 2;

const createNode = () => ({
  x: Math.random(),
  y: Math.random(),
  baseX: Math.random(),
  baseY: Math.random(),
  radius: Math.random() * 1.8 + 0.8,
  speed: Math.random() * 0.45 + 0.18,
  phase: Math.random() * Math.PI * 2,
});

export const SignalMeshBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const pointer = { x: 0.72, y: 0.24, active: false };
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const nodes = Array.from({ length: NODE_COUNT }, createNode);
    let frameId = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMove = (event) => {
      pointer.x = event.clientX / Math.max(width, 1);
      pointer.y = event.clientY / Math.max(height, 1);
      pointer.active = true;
    };

    const handleLeave = () => {
      pointer.active = false;
    };

    const render = (time) => {
      const seconds = time * 0.001;
      const pointerX = (pointer.active ? pointer.x : 0.72) * width;
      const pointerY = (pointer.active ? pointer.y : 0.24) * height;

      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(pointerX, pointerY, 0, pointerX, pointerY, 360);
      glow.addColorStop(0, "rgba(114, 226, 255, 0.18)");
      glow.addColorStop(0.5, "rgba(255, 146, 74, 0.08)");
      glow.addColorStop(1, "rgba(3, 6, 9, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.x =
          node.baseX +
          Math.sin(seconds * node.speed + node.phase) * 0.032 +
          Math.cos(seconds * (node.speed * 0.56) + node.phase) * 0.02;
        node.y =
          node.baseY +
          Math.cos(seconds * node.speed + node.phase * 1.2) * 0.04 +
          Math.sin(seconds * (node.speed * 0.8) + node.phase) * 0.016;
      });

      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];
        const x = node.x * width;
        const y = node.y * height;

        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const nextNode = nodes[nextIndex];
          const nextX = nextNode.x * width;
          const nextY = nextNode.y * height;
          const distance = Math.hypot(nextX - x, nextY - y);

          if (distance > 180) continue;

          const strength = 1 - distance / 180;
          context.strokeStyle = `rgba(114, 226, 255, ${strength * 0.14})`;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(nextX, nextY);
          context.stroke();
        }

        const pointerDistance = Math.hypot(pointerX - x, pointerY - y);
        if (pointerDistance < 220) {
          const strength = 1 - pointerDistance / 220;
          context.strokeStyle = `rgba(255, 146, 74, ${strength * 0.22})`;
          context.lineWidth = 0.7;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(pointerX, pointerY);
          context.stroke();
        }

        context.beginPath();
        context.fillStyle = "rgba(221, 249, 255, 0.8)";
        context.shadowBlur = 16;
        context.shadowColor = "rgba(114, 226, 255, 0.35)";
        context.arc(x, y, node.radius, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      }

      frameId = window.requestAnimationFrame(render);
    };

    resize();
    frameId = window.requestAnimationFrame(render);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-mesh" aria-hidden="true" />;
};
