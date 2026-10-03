import React, { useState } from 'react';
import { CASE_STUDIES } from '../../data/portfolioData';
import { CaseStudyItem } from '../../types/portfolio';
import { Maximize2, X } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<CaseStudyItem | null>(null);

  return (
    <section id="casestudies" className="relative py-28 px-6 sm:px-12 lg:px-20 bg-[#0e0c0b] text-[#f5f2eb]">
      {/* Decorative Top Separator */}
      <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-ultra text-[#c91f1f] font-mono block mb-2">
            Selected Editorial Artwork
          </span>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
            Case Studies
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-white/60 font-light leading-relaxed">
          Four conceptual studies examining personal and societal tension — rendered in strict sequence to chronicle the journey from overwhelming weight to quiet peace.
        </p>
      </div>

      {/* 4 Artworks in Strict Order: 1. Quite Pressure, 2. Loud Silence, 3. Leave Though, 4. Here Enough */}
      <div className="max-w-7xl mx-auto space-y-32">
        {CASE_STUDIES.map((study, index) => {
          const isEven = index % 2 === 1;

          return (
            <article
              key={study.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Artwork Frame */}
              <div className="w-full lg:w-7/12 group relative">
                <div className="relative rounded-2xl overflow-hidden bg-[#181514] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-[#c91f1f]/50">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-auto object-cover max-h-[850px] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                  {/* High-res Inspection Trigger */}
                  <button
                    onClick={() => setActiveModalItem(study)}
                    className="absolute top-4 right-4 p-3 rounded-full bg-black/60 hover:bg-[#c91f1f] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md"
                    title="View high-resolution artwork"
                    aria-label={`View full size ${study.title}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Text Information Panel (Separate from Artwork) */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs tracking-widest text-[#c91f1f] font-semibold">
                    0{study.order}
                  </span>
                  <div className="h-[1px] w-8 bg-white/20" />
                  <span className="text-[11px] tracking-ultra uppercase text-white/50">
                    {study.tag}
                  </span>
                </div>

                <h3 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide">
                  {study.title}
                </h3>

                {/* Concept Description - Kept completely separate from the artwork */}
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[10px] tracking-ultra uppercase text-white/40 font-mono block mb-2">
                    Core Concept
                  </span>
                  <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed italic font-editorial-serif">
                    "{study.concept}"
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => setActiveModalItem(study)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors group"
                  >
                    <span>Inspect Fine Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox / High-Res Zoom Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setActiveModalItem(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[92vh] flex flex-col items-center">
            <img
              src={activeModalItem.image}
              alt={activeModalItem.title}
              className="max-h-[82vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h4 className="font-editorial-serif text-xl text-white">
                0{activeModalItem.order}. {activeModalItem.title}
              </h4>
              <p className="text-xs text-white/60 italic mt-1 font-editorial-serif max-w-xl mx-auto">
                "{activeModalItem.concept}"
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
