"use client";

import { useEffect, useRef } from "react";

import createGlobe from "cobe";
import { useSpring } from "react-spring";

export function CobeDraggableAuto({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    if (canvasRef.current) {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2 * 0.4,
        phi: 0,
        theta: 0.3,
        dark: 0,
        diffuse: 3,
        mapSamples: 16000,
        mapBrightness: 1.2,
        baseColor: [1, 1, 1],
        markerColor: [251 / 255, 100 / 255, 21 / 255],
        glowColor: [1.2, 1.2, 1.2],
        markers: [],
        scale: 2,
        offset: [width * 2 * 0.4 * 0.6, width * 2 * 0.4 * 0.4],
        onRender: (state) => {
          // This prevents rotation while dragging
          if (!pointerInteracting.current) {
            // Called on every animation frame.
            // `state` will be an empty object, return updated params.
            phi += 0.005;
          }
          state.phi = phi + r.get();
          state.width = width * 2;
          state.height = width * 2 * 0.4;
        },
      });
      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      });
      return () => {
        globe.destroy();
        window.removeEventListener("resize", onResize);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={className}
      style={{
        width: "100%",
        aspectRatio: 1 / 0.4,
        margin: "auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          if (canvasRef.current) {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          if (canvasRef.current) {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          if (canvasRef.current) {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null && canvasRef.current) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}
