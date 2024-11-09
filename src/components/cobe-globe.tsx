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
        theta: 0.2,
        dark: 0,
        opacity: 0.7,
        baseColor: [237 / 255, 237 / 255, 255 / 255],
        diffuse: 3,
        glowColor: [231 / 255, 204 / 255, 255 / 255],
        mapSamples: 16000,
        mapBrightness: 3.2,

        markerColor: [73 / 255, 56 / 255, 255 / 255],
        markers: [
          { location: [37.7595, -122.4367], size: 0.04 },
          { location: [40.7128, -74.006], size: 0.05 },
          { location: [60.7128, -174.006], size: 0.05 },
          { location: [80.7128, -4.006], size: 0.03 },
          { location: [25.0749, 55.152], size: 0.06 },
          { location: [55.274, 24.008], size: 0.06 },
        ],
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
