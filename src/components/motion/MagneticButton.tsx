'use client';

import { useRef, useState, useEffect, ReactNode, PointerEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // Maximum translation in pixels (default 4px)
}

/**
 * MagneticButton
 * Moves subtly toward the pointer on desktop hover and springs back smoothly on leave.
 * - Restrained 3-5px movement.
 * - Disabled on touch and prefers-reduced-motion.
 * - Retains normal link/button click and keyboard accessibility.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 4,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const isFinePointerRef = useRef(false);

  useEffect(() => {
    isFinePointerRef.current =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isFinePointerRef.current || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const pullX = (distanceX / (rect.width / 2)) * strength;
    const pullY = (distanceY / (rect.height / 2)) * strength;

    setOffset({ x: pullX, y: pullY });
  };

  const handlePointerLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`inline-block transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: `translate3d(${offset.x.toFixed(1)}px, ${offset.y.toFixed(1)}px, 0)`,
      }}
    >
      {children}
    </div>
  );
}
