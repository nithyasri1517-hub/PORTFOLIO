import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SAVOIR_SECTIONS } from '../data/portfolioData';
import { SavoirSection, PageAsset } from '../types/portfolio';
import { ArrowLeft, ArrowRight, Maximize2, X, Layers } from 'lucide-react';

export const SavoirPage: React.FC = () => {
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0908] text-[#f5f2eb] pt-28 pb-32">
      {/* Top Breadcrumb & Return Link */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-8">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Project Hero Header */}
      <header className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <div className="border-b border-white/10 pb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase mb-3">
            <Layers className="w-4 h-4" />
            <span>Brand Identity System</span>
          </div>

          <h1 className="font-editorial-serif text-5xl sm:text-7xl lg:text-8xl font-light text-white tracking-tight">
            Savoir
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-[#c91f1f] font-editorial-serif italic">
            Coffee & Pastry · Complete Visual & Spatial Brand Identity
          </p>

          <p className="mt-6 max-w-2xl text-sm sm:text-base text-white/70 font-light leading-relaxed">
            Savoir is an artisanal coffee and pastry atelier rooted in slow craftsmanship and Mediterranean serenity. The identity unfolds across 10 disciplined chapters — balancing delicate custom patterns, social campaigns, advertising, tactile packaging, bespoke stationery, and culinary menus.
          </p>

          {/* Quick Jump Bar for all 10 Sections in Exact Order */}
          <div className="mt-10">
            <span className="text-[10px] uppercase tracking-ultra text-white/40 font-mono block mb-3">
              10 Core Chapters (In Exact Sequence)
            </span>
            <div className="flex flex-wrap gap-2">
              {SAVOIR_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono text-white/70 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-all flex items-center gap-1.5"
                >
                  <span className="text-[#c91f1f] font-semibold">{sec.order}.</span>
                  <span>{sec.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 10 Sections in Strict Order */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 space-y-36">
        {SAVOIR_SECTIONS.map((section: SavoirSection) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-32 pt-4 border-t border-white/5"
          >
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm tracking-widest text-[#c91f1f] font-semibold">
                    Chapter {section.order < 10 ? `0${section.order}` : section.order} / 10
                  </span>
                  <div className="h-[1px] w-6 bg-white/20" />
                  <span className="text-[11px] font-mono tracking-widest uppercase text-white/40">
                    {section.subtitle}
                  </span>
                </div>
                <h2 className="font-editorial-serif text-4xl sm:text-5xl font-light text-white">
                  {section.title}
                </h2>
              </div>
              <p className="max-w-md text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Artwork Renderings */}
            <div
              className={`grid gap-8 ${
                section.pages.length === 1
                  ? 'grid-cols-1 max-w-4xl mx-auto'
                  : section.pages.length === 2
                  ? 'grid-cols-1 md:grid-cols-2'
                  : section.pages.length === 4
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {section.pages.map((page: PageAsset, pIdx: number) => (
                <div
                  key={page.src}
                  className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#c91f1f]/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden bg-[#181514] flex items-center justify-center p-2">
                    <img
                      src={page.src}
                      alt={`${section.title} page ${pIdx + 1}`}
                      className="w-full h-auto max-h-[700px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Zoom Button */}
                    <button
                      onClick={() => setModalImage({ src: page.src, title: `${section.title} — Page ${pIdx + 1}` })}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-[#c91f1f] text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                      title="Inspect full resolution"
                      aria-label="Zoom image"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>{section.title}</span>
                    <span>Plate {pIdx + 1} of {section.pages.length}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Next Project Footer Link */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-12 mt-32 pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          to="/#work"
          className="text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          ← Back to All Projects
        </Link>
        <Link
          to="/projects/red"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#c91f1f] text-white hover:bg-white hover:text-black transition-all text-xs font-semibold tracking-widest uppercase shadow-xl"
        >
          <span>Next: RED (Physical Page-Turning)</span>
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
              alt={modalImage.title}
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-3 text-xs font-mono text-white/70">{modalImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};
