import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QUICKZAPS_PROJECT } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, Zap, Maximize2, X } from 'lucide-react';

export const QuickZapsPage: React.FC = () => {
  const [modalImage, setModalImage] = useState<{ src: string; index: number } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0908] text-[#f5f2eb] pt-28 pb-32">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-8">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <div className="border-b border-white/10 pb-12 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase">
            <Zap className="w-4 h-4" />
            <span>Content & Social Media Management</span>
          </div>

          <h1 className="font-editorial-serif text-5xl sm:text-7xl lg:text-8xl font-light text-white tracking-tight">
            QuickZaps
          </h1>

          <p className="max-w-2xl text-sm sm:text-base text-white/70 font-light leading-relaxed">
            QuickZaps is a fintech platform offering digital payment and banking services across India. This project focused on creating clean and modern social media creatives using bold typography, minimal layouts, and a cohesive visual system to communicate trust, simplicity, and accessibility.
          </p>
        </div>
      </header>

      {/* Actual Supplied QuickZaps Work (6 Pages) */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="space-y-12">
          <div className="flex items-center justify-between text-xs font-mono text-white/40 uppercase">
            <span>Social Campaign Assets (6 Deliverables)</span>
            <span>Digital Brand Presence</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {QUICKZAPS_PROJECT.pages.map((page, index) => (
              <div
                key={page.src}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#c91f1f]/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden bg-[#161312] p-2 flex items-center justify-center">
                  <img
                    src={page.src}
                    alt={`QuickZaps deliverable ${index + 1}`}
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
                    loading="lazy"
                  />

                  <button
                    onClick={() => setModalImage({ src: page.src, index: index + 1 })}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-[#c91f1f] text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                    title="Inspect deliverable"
                    aria-label={`Inspect deliverable ${index + 1}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span>QuickZaps Social</span>
                  <span>Creative 0{index + 1} / 06</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-12 mt-28 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          to="/projects/pcera"
          className="text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          ← Previous: WEAR PCERA
        </Link>
        <Link
          to="/#contact"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#c91f1f] text-white hover:bg-white hover:text-black transition-all text-xs font-semibold tracking-widest uppercase shadow-xl"
        >
          <span>Initiate Project / Let's Talk</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </footer>

      {/* Lightbox Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[92vh] flex flex-col items-center">
            <img
              src={modalImage.src}
              alt={`QuickZaps Deliverable ${modalImage.index}`}
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-3 text-xs font-mono text-white/70">
              QuickZaps · Creative 0{modalImage.index} / 06
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
