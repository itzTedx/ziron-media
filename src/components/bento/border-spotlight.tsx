"use client";

import React, {
  MouseEvent,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

interface MousePosition {
  x: number;
  y: number;
}

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  ProximitySpotlight?: boolean;
  HoverFocusSpotlight?: boolean;
  CursorFlowGradient?: boolean;
}
interface SpotlightItemProps {
  children: React.ReactNode;
  className?: string;
}

interface SpotLightContextType {
  ProximitySpotlight: boolean;
  HoverFocusSpotlight: boolean;
  CursorFlowGradient: boolean;
}

const SpotLightContext = createContext<SpotLightContextType | undefined>(
  undefined
);
export const useSpotlight = () => {
  const context = useContext(SpotLightContext);
  if (!context) {
    throw new Error("useSpotlight must be used within a SpotlightProvider");
  }
  return context;
};
export const Spotlight = ({
  children,
  className,
  ProximitySpotlight = true,
  HoverFocusSpotlight = false,
  CursorFlowGradient = true,
}: SpotlightProps) => {
  return (
    <SpotLightContext.Provider
      value={{
        ProximitySpotlight,
        HoverFocusSpotlight,
        CursorFlowGradient,
      }}
    >
      <div
        className={cn(
          className,
          "group relative z-10 grid grid-cols-4 gap-2 rounded-md"
        )}
      >
        {children}
      </div>
    </SpotLightContext.Provider>
  );
};
export function SpotLightItem({ children, className }: SpotlightItemProps) {
  const { HoverFocusSpotlight, ProximitySpotlight, CursorFlowGradient } =
    useSpotlight();
  const boxWrapper = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });

  // @ts-expect-error
  const handleMouemove = ({ currentTarget, clientX, clientY }): MouseEvent => {
    let { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setOverlayColor({ x, y });
  };
  // console.log(overlayColor)

  return (
    <div
      onMouseMove={handleMouemove}
      onMouseEnter={() => CursorFlowGradient && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={boxWrapper}
      className={cn(
        className,
        "relative items-center justify-center overflow-hidden rounded-lg bg-[#ffffff] p-[2px]"
      )}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute z-50 h-full w-full rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `
            radial-gradient(
              250px circle at ${overlayColor.x}px ${overlayColor.y}px,
              hsla(var(--background)/0.137),
              transparent 80%
            )
          `,
          }}
        />
      )}
      {HoverFocusSpotlight && (
        <div
          className="absolute inset-0 z-10 rounded-lg bg-fixed opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(230, 50%, 59%, 1) 0%,transparent 20%,transparent) fixed `,
          }}
        ></div>
      )}
      {ProximitySpotlight && (
        <div
          className="absolute inset-0 z-0 rounded-lg bg-fixed"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(230, 50%, 59%, 1) 0%,transparent 20%,transparent) fixed`,
          }}
        ></div>
      )}
      {children}
    </div>
  );
}

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-3xl bg-slate-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-slate-400 before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-96 after:w-96 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-[100px] after:transition-opacity after:duration-500 after:hover:opacity-10 before:group-hover:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}
