import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SOCIAL_MEDIA_PROJECTS } from '../data/portfolioData';
import { PageAsset } from '../types/portfolio';
import { ArrowLeft, ArrowRight, Share2, Maximize2, X } from 'lucide-react';

export const SocialMediaDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentKey = id && SOCIAL_MEDIA_PROJECTS[id] ? id : 'rmc';
  const project = SOCIAL_MEDIA_PROJECTS[currentKey];

  const [modalImage, setModalImage] = useState<{ src: string; caption: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const brandKeys = Object.keys(SOCIAL_MEDIA_PROJECTS);
  const currentIndex = brandKeys.indexOf(currentKey);
  const nextKey = brandKeys[(currentIndex + 1) % brandKeys.length];
  const prevKey = brandKeys[(currentIndex - 1 + brandKeys.length) % brandKeys.length];

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

      {/* Header with Brand Icon Badge and 4 Brands Switcher */}
      <header className="max-w-7xl mx-auto px-6 sm:px-12 mb-14">
        <div className="border-b border-white/10 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex items-start sm:items-center gap-6">
            {/* Supplied Brand Icon Display Badge */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#161312] border border-white/10 p-2.5 flex items-center justify-center shrink-0 shadow-lg">
              <img
                src={project.iconPages[0].src}
                alt={`${project.name} Brand Icon`}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase mb-1.5">
                <Share2 className="w-4 h-4" />
                <span>Social Media Architecture · Brand 0{currentIndex + 1} / 04</span>
              </div>
              <h1 className="font-editorial-serif text-4xl sm:text-6xl font-light text-white">
                {project.displayName}
              </h1>
              <p className="mt-1 text-sm sm:text-base text-[#c91f1f] font-editorial-serif italic">
                {project.category}
              </p>
            </div>
          </div>

          {/* 4 Brand Switcher Pills */}
          <div className="flex flex-wrap gap-2">
            {brandKeys.map((k) => {
              const item = SOCIAL_MEDIA_PROJECTS[k];
              const active = k === currentKey;
              return (
                <button
                  key={k}
                  onClick={() => navigate(`/projects/social/${k}`)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    active
                      ? 'bg-[#c91f1f] text-white font-semibold shadow-lg'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Presentation Area: FULL WORK OPENS DIRECTLY */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-ultra text-[#c91f1f] font-mono block">
                Supplied Campaign Work
              </span>
              <h2 className="font-editorial-serif text-2xl sm:text-3xl text-white">
                {project.displayName} — Campaign Slides ({project.workPages.length} Slides)
              </h2>
            </div>
            <p className="text-xs text-white/50 max-w-md font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Grid of Supplied Work Pages (Directly Visible) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.workPages.map((page: PageAsset, idx: number) => (
              <div
                key={page.src}
                className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#c91f1f]/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden bg-[#181514] p-2 flex items-center justify-center">
                  <img
                    src={page.src}
                    alt={`${project.name} slide ${idx + 1}`}
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* High-res Zoom Trigger */}
                  <button
                    onClick={() => setModalImage({ src: page.src, caption: `${project.name} — Slide 0${idx + 1} of 0${project.workPages.length}` })}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-[#c91f1f] text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
                    title="Inspect slide in full resolution"
                    aria-label={`Inspect slide ${idx + 1}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span>{project.name} Campaign</span>
                  <span>Slide 0{idx + 1} / 0{project.workPages.length}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="max-w-7xl mx-auto px-6 sm:px-12 mt-28 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => navigate(`/projects/social/${prevKey}`)}
          className="text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          ← Prev Brand: {SOCIAL_MEDIA_PROJECTS[prevKey].name}
        </button>

        <div className="flex items-center gap-4">
          <Link
            to="/projects/pcera"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#c91f1f] text-white hover:bg-white hover:text-black transition-all text-xs font-semibold tracking-widest uppercase shadow-xl"
          >
            <span>Next: WEAR PCERA (Fashion)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
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
              alt={modalImage.caption}
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-3 text-xs font-mono text-white/70">{modalImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};
