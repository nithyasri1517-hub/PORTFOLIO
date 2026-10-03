import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { EXPERIMENTAL_PROJECTS } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, Maximize2, X, Sparkles } from 'lucide-react';

export const ExperimentalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const currentKey = id && EXPERIMENTAL_PROJECTS[id] ? id : 'ash';
  const project = EXPERIMENTAL_PROJECTS[currentKey];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const keys = Object.keys(EXPERIMENTAL_PROJECTS);
  const currentIndex = keys.indexOf(currentKey);
  const nextKey = keys[(currentIndex + 1) % keys.length];
  const prevKey = keys[(currentIndex - 1 + keys.length) % keys.length];

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

      {/* Header and Switcher Tabs */}
      <header className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Experimental Inquiries · 0{currentIndex + 1} / 04</span>
            </div>
            <h1 className="font-editorial-serif text-5xl sm:text-7xl font-light text-white">
              {project.title}
            </h1>
            <p className="mt-2 text-base text-[#c91f1f] font-editorial-serif italic">
              {project.subtitle}
            </p>
          </div>

          {/* 4 Studies Switcher Tabs */}
          <div className="flex flex-wrap gap-2">
            {keys.map((k) => {
              const item = EXPERIMENTAL_PROJECTS[k];
              const active = k === currentKey;
              return (
                <button
                  key={k}
                  onClick={() => navigate(`/projects/experimental/${k}`)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    active
                      ? 'bg-white text-black font-semibold shadow-lg'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Study Presentation */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Artwork Rendering */}
          <div className="lg:col-span-7 group relative">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 bg-[#161312] shadow-2xl p-4 flex items-center justify-center">
              <img
                src={project.pages[0].src}
                alt={`${project.title} experimental artwork`}
                className="w-full h-auto max-h-[850px] object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
                loading="eager"
              />

              <button
                onClick={() => setModalOpen(true)}
                className="absolute top-8 right-8 p-3 rounded-full bg-black/60 hover:bg-[#c91f1f] text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                title="Inspect in full resolution"
                aria-label="Inspect artwork"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Conceptual Description (Separate from Artwork) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-ultra text-white/40 font-mono block">
                Conceptual Thesis
              </span>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl text-white font-light">
                About {project.title}
              </h2>
              <div className="border-l-2 border-[#c91f1f] pl-6 py-2">
                <p className="font-editorial-serif text-lg sm:text-xl text-white/90 font-light leading-relaxed italic">
                  "{project.concept}"
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-white/5 space-y-3 text-xs text-white/60 font-light leading-relaxed">
              <p>
                Each experimental plate investigates the interplay of form, void, high-contrast typography, and surface texture without commercial constraint.
              </p>
              <div className="pt-2 flex items-center justify-between font-mono text-[10px] text-white/40 border-t border-white/5 uppercase">
                <span>Plate Specification</span>
                <span>Original Vector & Editorial Raster</span>
              </div>
            </div>

            {/* Quick Next/Prev Switcher */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => navigate(`/projects/experimental/${prevKey}`)}
                className="px-5 py-2.5 rounded-full border border-white/10 hover:border-white/40 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors"
              >
                ← Prev Study
              </button>
              <button
                onClick={() => navigate(`/projects/experimental/${nextKey}`)}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider text-white transition-colors"
              >
                Next Study →
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-12 mt-28 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          to="/projects/red"
          className="text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          ← Previous: RED Editorial
        </Link>
        <Link
          to="/projects/social/rmc"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#c91f1f] text-white hover:bg-white hover:text-black transition-all text-xs font-semibold tracking-widest uppercase shadow-xl"
        >
          <span>Next: Social Media (RMC)</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </footer>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[92vh] flex flex-col items-center">
            <img
              src={project.pages[0].src}
              alt={project.title}
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-3 text-xs font-mono text-white/70">
              {project.title} — Conceptual Study
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
