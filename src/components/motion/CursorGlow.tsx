'use client';

import { useEffect, useRef } from 'react';

/**
 * CursorGlow
 * Renders a subtle, performant ambient cyan-to-emerald glow following the user's cursor.
 * - Uses requestAnimationFrame with linear interpolation (lerp) for smooth organic float.
 * - Directly mutates transform via style to avoid React state re-renders on mouse movement.
 * - Automatically disables on touch devices, small screens, and reduced-motion preferences.
 * - Non-blocking: pointer-events-none and placed behind interactive layers.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    const glow = glowRef.current;
    if (!glow) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let isVisible = false;
    let animationFrameId: number;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        glow.style.opacity = '1';
      }
    };

    const handlePointerLeave = () => {
      isVisible = false;
      glow.style.opacity = '0';
    };

    const render = () => {
      // Smooth interpolation (lerp factor 0.08 for natural gentle lag)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      glow.style.transform = `translate3d(${currentX - 220}px, ${currentY - 220}px, 0)`;

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-[440px] h-[440px] rounded-full pointer-events-none z-0 opacity-0 transition-opacity duration-500 will-change-transform"
      style={{
        background:
          'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(16, 185, 129, 0.06) 45%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(45px)',
      }}
    />
  );
}
