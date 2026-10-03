import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageFlip } from 'page-flip';
import { RED_EDITORIAL_PAGES } from '../data/portfolioData';
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export const RedEditorialPage: React.FC = () => {
  const bookContainerRef = useRef<HTMLDivElement>(null);
  const pageFlipInstance = useRef<PageFlip | null>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(RED_EDITORIAL_PAGES.length);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkMobile = () => {
      const small = window.innerWidth < 768;
      setIsMobile((prev) => (prev !== small ? small : prev));
    };
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!bookContainerRef.current) return;

    // Safely tear down existing instance without removing container or pages from DOM
    const destroyInstance = () => {
      if (pageFlipInstance.current) {
        try {
          const pf = pageFlipInstance.current as any;
          if (pf.ui) {
            // Restore .page-item children back to container before destroying wrapper
            if (typeof pf.ui.clear === 'function') {
              pf.ui.clear();
            }
            if (typeof pf.ui.removeHandlers === 'function') {
              pf.ui.removeHandlers();
            }
            if (pf.ui.distElement && typeof pf.ui.distElement.remove === 'function') {
              pf.ui.distElement.remove();
            }
            if (pf.ui.wrapper && typeof pf.ui.wrapper.remove === 'function') {
              pf.ui.wrapper.remove();
            }
          }
          if (bookContainerRef.current) {
            bookContainerRef.current.classList.remove('stf__parent');
          }
        } catch (e) {
          // ignore
        }
        pageFlipInstance.current = null;
      }
    };

    destroyInstance();

    const container = bookContainerRef.current;
    const isSmall = window.innerWidth < 768;

    // The supplied RED pages are exact 1:1 square (2200x2200).
    // Calculate page size preserving strict 1:1 aspect ratio without stretching, squashing, or cropping.
    const pageSize = isSmall
      ? Math.min(window.innerWidth - 32, 400)
      : Math.min(Math.floor((window.innerWidth - 160) / 2), 520);

    try {
      const pageFlip = new PageFlip(container, {
        width: pageSize,
        height: pageSize, // 1:1 exact ratio for square pages
        size: isSmall ? 'fixed' : 'stretch',
        minWidth: isSmall ? 200 : 280,
        maxWidth: 600,
        minHeight: isSmall ? 200 : 280,
        maxHeight: 600,
        maxShadowOpacity: 0.6,
        showCover: true,
        mobileScrollSupport: false,
        usePortrait: isSmall,
        startPage: 0,
        drawShadow: true,
        flippingTime: 800,
        useMouseEvents: true,
        swipeDistance: 30,
        clickEventForward: true,
      });

      const pages = container.querySelectorAll<HTMLElement>('.page-item');
      if (pages.length > 0) {
        pageFlip.loadFromHTML(pages);
        pageFlipInstance.current = pageFlip;
        setTotalPages(pageFlip.getPageCount());

        pageFlip.on('flip', (e) => {
          setCurrentPage(e.data as number);
        });
      }
    } catch (err) {
      console.error('PageFlip initialization error:', err);
    }

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        pageFlipInstance.current?.flipNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        pageFlipInstance.current?.flipPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      destroyInstance();
    };
  }, [isMobile]);

  const flipPrev = () => {
    pageFlipInstance.current?.flipPrev();
  };

  const flipNext = () => {
    pageFlipInstance.current?.flipNext();
  };

  return (
    <div className="min-h-screen bg-[#0a0707] text-[#f5f2eb] pt-28 pb-32 overflow-hidden flex flex-col justify-between">
      {/* Top Header & Breadcrumbs */}
      <header className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#c91f1f] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-white/60">
              Physical Volume Reader
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Editorial Monograph</span>
            </div>
            <h1 className="font-editorial-serif text-5xl sm:text-6xl lg:text-7xl font-light text-white">
              RED
            </h1>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            An editorial publication in scarlet and charcoal. Drag page corners or use arrow keys to experience tactile physical paper physics.
          </p>
        </div>
      </header>

      {/* Main Physical Flipbook Area */}
      <main className="my-12 flex-1 flex flex-col items-center justify-center px-4 relative">
        {/* Soft studio ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c91f1f]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Tactile Book Container */}
        <div className="relative z-10 flex flex-col items-center">
          <div
            ref={bookContainerRef}
            className="flipbook-container rounded-lg overflow-hidden border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_40px_rgba(201,31,31,0.15)] bg-[#120e0e]"
          >
            {RED_EDITORIAL_PAGES.map((page, index) => (
              <div
                key={page.src}
                className="page-item w-full h-full bg-[#141010] overflow-hidden select-none relative shadow-inner aspect-square"
              >
                <img
                  src={page.src}
                  alt={`RED Editorial Page ${index + 1}`}
                  className="w-full h-full object-contain pointer-events-none"
                  loading="eager"
                />

                {/* Subtle paper grain and vignette shading */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15 pointer-events-none" />

                {/* Page number indicator */}
                <div className="absolute bottom-3 right-4 text-[9px] font-mono tracking-widest text-white/40 pointer-events-none">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Navigation Control Bar */}
          <div className="mt-8 flex items-center gap-6 glass-card px-6 py-3 rounded-full border border-white/10 shadow-2xl">
            <button
              onClick={flipPrev}
              disabled={currentPage === 0}
              className={`p-2 rounded-full transition-all ${
                currentPage === 0
                  ? 'text-white/20 cursor-not-allowed'
                  : 'text-white hover:bg-white/10 hover:text-[#c91f1f]'
              }`}
              title="Previous Page (Left Arrow)"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Status Indicator */}
            <div className="text-xs font-mono tracking-widest uppercase text-white/80 min-w-[130px] text-center">
              {currentPage === 0
                ? 'Cover · Page 1'
                : currentPage >= totalPages - 1
                ? `Back Cover · Page ${totalPages}`
                : isMobile
                ? `Page ${currentPage + 1} of ${totalPages}`
                : `Pages ${currentPage}-${currentPage + 1} of ${totalPages}`}
            </div>

            <button
              onClick={flipNext}
              disabled={currentPage >= totalPages - 1}
              className={`p-2 rounded-full transition-all ${
                currentPage >= totalPages - 1
                  ? 'text-white/20 cursor-not-allowed'
                  : 'text-white hover:bg-white/10 hover:text-[#c91f1f]'
              }`}
              title="Next Page (Right Arrow / Space)"
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-4 text-[11px] font-mono tracking-widest text-white/40 uppercase">
            💡 Drag corners with cursor or use ← → arrow keys
          </p>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-12 w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          to="/projects/savoir"
          className="text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          ← Previous: Savoir Brand Identity
        </Link>
        <Link
          to="/projects/experimental/ash"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black hover:bg-[#c91f1f] hover:text-white transition-all text-xs font-semibold tracking-widest uppercase shadow-xl"
        >
          <span>Next: Experimental Studies</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </footer>
    </div>
  );
};
