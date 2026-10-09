'use client';

import { useRef, useState, useEffect, ReactNode, PointerEvent } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTiltDeg?: number;
  enableSpotlight?: boolean;
}

/**
 * TiltCard
 * Adds subtle, restrained 3D perspective tilt (2-3.5 deg) and cursor spotlight.
 * - Calculated relative to card center.
 * - Smooth CSS transition on reset.
 * - Automatically disabled on touch screens and reduced-motion environments.
 */
export default function TiltCard({
  children,
  className = '',
  maxTiltDeg = 3,
  enableSpotlight = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const isFinePointerRef = useRef(false);

  useEffect(() => {
    isFinePointerRef.current =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isFinePointerRef.current || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-maxTilt to +maxTilt)
    const rotateX = -((y - centerY) / centerY) * maxTiltDeg;
    const rotateY = ((x - centerX) / centerX) * maxTiltDeg;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(4px)`
    );

    if (enableSpotlight) {
      setSpotlightPos({
        x: Math.round((x / rect.width) * 100),
        y: Math.round((y / rect.height) * 100),
      });
    }
  };

  const handlePointerEnter = () => {
    if (isFinePointerRef.current) {
      setIsHovered(true);
    }
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Subtle dynamic cursor spotlight */}
      {enableSpotlight && isHovered && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(56, 189, 248, 0.08), transparent 80%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
