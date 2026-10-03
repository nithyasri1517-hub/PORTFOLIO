import React, { useEffect, useRef } from 'react';
import { ArrowDown, Eye } from 'lucide-react';

const FRAME_COUNT = 64;

// 64 high-quality WebP frames along 360° circular trajectory in public/frames/
const FRAME_SRCS: string[] = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `/frames/frame_${i.toString().padStart(2, '0')}.webp`
);
const CENTER_FRAME_SRC = '/frames/center.webp';

// Progressive lower quadrant frame sources (CENTER -> SLIGHT -> MID -> MORE -> DEEP)
const PROG_FRAME_SRCS: Record<string, string> = {
  prog_down_slight: '/frames/prog_down_slight.webp',
  prog_down_mid: '/frames/prog_down_mid.webp',
  prog_down_more: '/frames/prog_down_more.webp',
  prog_down_deep: '/frames/prog_down_deep.webp',
  prog_dl_slight: '/frames/prog_dl_slight.webp',
  prog_dl_mid: '/frames/prog_dl_mid.webp',
  prog_dl_more: '/frames/prog_dl_more.webp',
  prog_dl_deep: '/frames/prog_dl_deep.webp',
  prog_dr_slight: '/frames/prog_dr_slight.webp',
  prog_dr_mid: '/frames/prog_dr_mid.webp',
  prog_dr_more: '/frames/prog_dr_more.webp',
  prog_dr_deep: '/frames/prog_dr_deep.webp',
};

// Character background RGB (225, 30, 22) -> exact hex #E11E16
const SEAMLESS_BG_HEX = '#E11E16';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cached Image elements for zero-delay synchronous GPU canvas drawing
  const centerImageRef = useRef<HTMLImageElement | null>(null);
  const frameImagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(FRAME_COUNT).fill(null)
  );
  const progImagesRef = useRef<Record<string, HTMLImageElement | null>>({});

  // Pointer coordinates and continuously smoothed physics state
  const mousePos = useRef({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 960,
    y: typeof window !== 'undefined' ? window.innerHeight * 0.35 : 350,
  });
  const currentAngle = useRef<number>(0); // continuous radians in [-PI, PI]
  const lastDrawnKeyRef = useRef<string>('center');
  const rafId = useRef<number | null>(null);

  // Preload center, 64 circular trajectory frames, and progressive frames into browser memory
  useEffect(() => {
    // 1. Center image (priority for neutral eye contact)
    const centerImg = new Image();
    centerImg.src = CENTER_FRAME_SRC;
    centerImg.onload = () => {
      centerImageRef.current = centerImg;
      // Draw initial center frame immediately on canvas
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d', { alpha: false });
        if (ctx) {
          ctx.globalAlpha = 1.0;
          ctx.drawImage(centerImg, 0, 0, 1920, 1080);
        }
      }
    };

    // 2. Preload 64 circular trajectory frames
    FRAME_SRCS.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        frameImagesRef.current[idx] = img;
      };
    });

    // 3. Preload progressive lower quadrant frames
    Object.entries(PROG_FRAME_SRCS).forEach(([key, src]) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        progImagesRef.current[key] = img;
      };
    });
  }, []);

  // Continuous Pointer Tracking & Smooth Shortest-Path Interpolation Loop
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePos.current.x = e.touches[0].clientX;
        mousePos.current.y = e.touches[0].clientY;
      }
    };

    const handlePointerLeave = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePos.current.x = rect.left + rect.width * 0.5;
        mousePos.current.y = rect.top + rect.height * 0.35;
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    // Continuous 60fps/120fps render loop
    const updateGaze = () => {
      if (canvasRef.current && containerRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false });

        const rect = containerRef.current.getBoundingClientRect();
        const containerW = rect.width;
        const containerH = rect.height;

        // 1. Calculate live rendered geometry of the 16:9 character visual
        const imageAspect = 1920 / 1080;
        const containerAspect = containerW / containerH;

        let renderedW = containerW;
        let renderedH = containerH;
        let renderedLeft = rect.left;
        let renderedTop = rect.top;

        const isDesktop = window.innerWidth >= 768;

        if (isDesktop) {
          // Desktop uses object-contain object-bottom
          if (containerAspect >= imageAspect) {
            renderedH = containerH;
            renderedW = containerH * imageAspect;
            renderedTop = rect.top;
            renderedLeft = rect.left + (containerW - renderedW) * 0.5;
          } else {
            renderedW = containerW;
            renderedH = containerW / imageAspect;
            renderedTop = rect.top + (containerH - renderedH);
            renderedLeft = rect.left;
          }
        } else {
          // Mobile uses object-cover object-bottom
          if (containerAspect >= imageAspect) {
            renderedW = containerW;
            renderedH = containerW / imageAspect;
            renderedTop = rect.top + (containerH - renderedH);
            renderedLeft = rect.left;
          } else {
            renderedH = containerH;
            renderedW = containerH * imageAspect;
            renderedTop = rect.top;
            renderedLeft = rect.left + (containerW - renderedW) * 0.5;
          }
        }

        // Live gaze origin (eyes are horizontally centered and at 35.2% from top of image)
        const eyeX = renderedLeft + renderedW * 0.499;
        const eyeY = renderedTop + renderedH * 0.352;

        // 2. Vector relative to live gaze origin
        const dx = mousePos.current.x - eyeX;
        const dy = mousePos.current.y - eyeY;
        const rawDist = Math.hypot(dx, dy);

        // Small anti-twitch deadzone (~28px) for direct center eye contact
        const DEADZONE_RADIUS = 28;

        let activeImg: HTMLImageElement | null = null;
        let activeKey: string = 'center';

        if (rawDist < DEADZONE_RADIUS) {
          // Inside small deadzone: direct eye contact looking forward into user's eyes
          activeImg = centerImageRef.current;
          activeKey = 'center';
        } else {
          // Calculate cursor angle relative to character face center: atan2(dy, dx)
          const targetAngle = Math.atan2(dy, dx);

          // Shortest-path circular angular lerp (lerpAngle) with fast response factor (~0.26)
          // Tracks in ~35ms with zero lag
          const angleDiff = Math.atan2(
            Math.sin(targetAngle - currentAngle.current),
            Math.cos(targetAngle - currentAngle.current)
          );
          currentAngle.current += angleDiff * 0.26;
          currentAngle.current = Math.atan2(
            Math.sin(currentAngle.current),
            Math.cos(currentAngle.current)
          );

          // Map smoothed continuous angle (0..360°)
          const deg = ((currentAngle.current * 180) / Math.PI + 360) % 360;

          // Upper half or near horizontal perimeter: continuous 64 clock frames
          if (dy <= 0 || deg < 15 || deg > 165) {
            const frameIndex = Math.round((deg / 360) * FRAME_COUNT) % FRAME_COUNT;
            activeImg = frameImagesRef.current[frameIndex];
            activeKey = `frame_${frameIndex}`;
          } else {
            // Lower half: dedicated continuous progressive downward gaze
            // Responds smoothly to vertical depth (dy) and continuous angle (deg)
            const bottomExtent = Math.max(1, window.innerHeight - eyeY);
            const depth = Math.min(1.0, Math.max(0.0, (dy - DEADZONE_RADIUS) / (bottomExtent * 0.55)));
            const r = depth;

            let chosenKey = 'center';

            if (r < 0.10) {
              // Very close to eye level: maintain direct eye contact
              chosenKey = 'center';
            } else if (r < 0.32) {
              // Slight downward gaze
              chosenKey = deg < 70 ? 'prog_dr_slight' : deg <= 110 ? 'prog_down_slight' : 'prog_dl_slight';
            } else if (r < 0.58) {
              // Medium downward gaze
              chosenKey = deg < 70 ? 'prog_dr_mid' : deg <= 110 ? 'prog_down_mid' : 'prog_dl_mid';
            } else if (r < 0.82) {
              // Deeper downward gaze
              chosenKey = deg < 70 ? 'prog_dr_more' : deg <= 110 ? 'prog_down_more' : 'prog_dl_more';
            } else {
              // Full bottom downward gaze
              chosenKey = deg < 70 ? 'prog_dr_deep' : deg <= 110 ? 'prog_down_deep' : 'prog_dl_deep';
            }

            activeImg = chosenKey === 'center' ? centerImageRef.current : (progImagesRef.current[chosenKey] || centerImageRef.current);
            activeKey = chosenKey;
          }
        }

        // Fallback to center image if selected image is still loading
        if (!activeImg || !activeImg.complete) {
          activeImg = centerImageRef.current;
          activeKey = 'center';
        }

        // ZERO-GHOSTING 60 FPS CANVAS RENDERER:
        // Draw EXACTLY ONE crisp frame at 100% opacity on canvas
        // DO NOT alpha-blend overlapping frames (alpha blending creates double-face ghosting)
        if (ctx && activeImg && activeImg.complete) {
          if (lastDrawnKeyRef.current !== activeKey) {
            lastDrawnKeyRef.current = activeKey;
            ctx.globalAlpha = 1.0;
            ctx.drawImage(activeImg, 0, 0, 1920, 1080);
          }
        }
      }

      rafId.current = requestAnimationFrame(updateGaze);
    };

    rafId.current = requestAnimationFrame(updateGaze);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden select-none"
      style={{
        backgroundColor: SEAMLESS_BG_HEX,
      }}
    >
      {/* Main Character Display (Hero Visual) */}
      <div className="relative z-10 w-full min-h-screen flex items-end justify-center pointer-events-none pb-0">
        <div
          ref={containerRef}
          className="relative w-full h-[62vh] sm:h-[66vh] md:h-[70vh] lg:h-[74vh] max-h-[660px] max-w-[1280px] flex items-end justify-center pointer-events-none"
        >
          <canvas
            ref={canvasRef}
            width={1920}
            height={1080}
            className="w-full h-full object-cover md:object-contain object-bottom pointer-events-none select-none"
            style={{ backgroundColor: SEAMLESS_BG_HEX }}
          />
        </div>
      </div>

      {/* Stay Curious Pill */}
      <div className="absolute top-24 right-6 sm:right-12 z-30 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black font-semibold shadow-md text-[10px] tracking-widest uppercase">
        <Eye className="w-3 h-3" />
        <span>Stay Curious</span>
      </div>

      {/* Hero Bottom-Left Information & Navigation CTA */}
      <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 lg:left-16 xl:left-24 z-30 max-w-lg lg:max-w-xl text-left pointer-events-auto">
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-light tracking-ultra uppercase text-white/80">
            Hi, I'm
          </p>
          <h1 className="font-editorial-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-normal tracking-wide drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)] leading-tight pl-1 sm:pl-2">
            Nithya
          </h1>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-md tracking-wide drop-shadow">
          A designer focused on branding, visual identity, and social media. Turning ideas into visuals that feel intentional, expressive, and memorable — helping brands build a stronger visual presence.
        </p>

        {/* Hero Functional Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollToSection('work')}
            className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white text-black hover:bg-[#0b0908] hover:text-white transition-all duration-300 shadow-xl border border-white hover:border-white/40"
          >
            PORTFOLIO
          </button>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div
        onClick={() => scrollToSection('casestudies')}
        className="absolute bottom-8 right-6 sm:right-12 z-30 hidden lg:flex flex-col items-center gap-2 cursor-pointer text-white/60 hover:text-white transition-colors group"
      >
        <span className="text-[10px] tracking-ultra uppercase font-mono group-hover:tracking-widest transition-all">
          Scroll Down
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-white/80" />
      </div>
    </section>
  );
};
