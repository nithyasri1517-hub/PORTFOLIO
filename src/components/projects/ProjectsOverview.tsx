import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Sparkles, Layers, Share2, Compass, Zap } from 'lucide-react';
import { SOCIAL_MEDIA_PROJECTS, EXPERIMENTAL_PROJECTS } from '../../data/portfolioData';

export const ProjectsOverview: React.FC = () => {
  return (
    <section id="work" className="relative py-28 px-6 sm:px-12 lg:px-20 bg-[#0b0908] text-[#f5f2eb]">
      {/* Editorial Section Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#c91f1f]" />
          <span className="text-[11px] uppercase tracking-ultra text-[#c91f1f] font-mono">
            Selected Works & Disciplines
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
          <h2 className="font-editorial-serif text-5xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight">
            Curated Projects
          </h2>
          <p className="max-w-md text-xs sm:text-sm text-white/60 font-light leading-relaxed">
            Distinct creative universes spanning luxury brand systems, tactile editorial volumes, conceptual inquiries, and targeted digital architectures.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* ============================================================== */}
        {/* 1. BRAND IDENTITY — SAVOIR                                    */}
        {/* ============================================================== */}
        <div className="group relative rounded-3xl overflow-hidden glass-card border border-white/10 p-8 sm:p-12 lg:p-16 hover:border-[#c91f1f]/40 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase">
                <Layers className="w-4 h-4" />
                <span>Brand Identity</span>
              </div>
              <h3 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
                Savoir
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                A complete identity system structured into 10 distinct deliverables: from bespoke patterns and typography to social campaigns, packaging mockups, and tactile stationery.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] uppercase tracking-widest text-white/50 font-mono">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">10 Core Sections</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">Packaging</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">Editorial System</span>
              </div>
              <div className="pt-4">
                <Link
                  to="/projects/savoir"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black hover:bg-[#c91f1f] hover:text-white transition-all text-xs font-semibold tracking-widest uppercase group-hover:shadow-[0_0_25px_rgba(201,31,31,0.4)]"
                >
                  <span>Explore Savoir (10 Sections)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Link to="/projects/savoir" className="block relative rounded-2xl overflow-hidden border border-white/10 group-hover:scale-[1.01] transition-transform duration-500 bg-[#f8f4e8]">
                <img
                  src="/generated/pdf-pages/brand identity/Logo/page-001.webp"
                  alt="Savoir brand identity logo"
                  className="w-full h-80 sm:h-96 object-contain object-center p-8 sm:p-12"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 pointer-events-none">
                  <div className="text-xs text-white/80 font-mono tracking-widest uppercase flex items-center justify-between w-full">
                    <span>Savoir Brand Identity</span>
                    <span className="text-[#c91f1f]">Explore Identity →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. EDITORIAL — RED (Tactile Physical Page-Turn Volume)         */}
        {/* ============================================================== */}
        <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a0808] via-[#120808] to-[#0c0505] border border-white/10 p-8 sm:p-12 lg:p-16 hover:border-[#c91f1f]/50 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Link to="/projects/red" className="block relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
                <img
                  src="/generated/pdf-pages/editorial/_RED/page-001.webp"
                  alt="RED editorial magazine cover"
                  className="w-full h-96 sm:h-[420px] object-cover object-top"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase">
                <BookOpen className="w-4 h-4" />
                <span>Editorial Publication</span>
              </div>
              <h3 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal">
                RED
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                An editorial magazine experienced as a real physical publication. Features realistic page-turn physics, tactile corner dragging, and striking typographic tension.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] uppercase tracking-widest text-white/50 font-mono">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">8 Editorial Pages</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">Physical Page Flip</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">Tactile Navigation</span>
              </div>
              <div className="pt-4">
                <Link
                  to="/projects/red"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#c91f1f] text-white hover:bg-white hover:text-black transition-all text-xs font-semibold tracking-widest uppercase shadow-[0_0_30px_rgba(201,31,31,0.3)]"
                >
                  <span>Open Page-Turn Reader</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. EXPERIMENTAL — Ash, Euphoria, Fashion, Book                 */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Experimental Design</span>
              </div>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl text-white">
                Conceptual Typographic Studies
              </h3>
            </div>
            <p className="text-xs text-white/50 max-w-sm">
              Non-commercial inquiries into raw textures, psychological chroma, sculptural silhouettes, and prose.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(EXPERIMENTAL_PROJECTS).map((item) => (
              <Link
                key={item.id}
                to={`/projects/experimental/${item.id}`}
                className="group flex flex-col rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#c91f1f]/50 transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#181514]">
                  <img
                    src={item.pages[0].src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] tracking-ultra uppercase text-[#c91f1f] font-mono block">
                      Study
                    </span>
                    <h4 className="font-editorial-serif text-2xl text-white font-normal mt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/60 font-light mt-2 line-clamp-2">
                      {item.concept}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                    View Study →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 4. SOCIAL MEDIA — RMC, Zion, HOD, Vivere Arte                  */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase mb-1">
                <Share2 className="w-4 h-4" />
                <span>Social Media</span>
              </div>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl text-white">
                Brand Icon & Carousel Suites
              </h3>
            </div>
            <p className="text-xs text-white/50 max-w-sm">
              Click any brand icon to reveal its bespoke multi-slide social campaigns, visual pacing, and feed storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(SOCIAL_MEDIA_PROJECTS).map((item) => (
              <Link
                key={item.id}
                to={`/projects/social/${item.id}`}
                className="group flex flex-col rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#c91f1f]/50 p-6 transition-all duration-300 relative"
              >
                {/* Brand Icon Display */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#181514] border border-white/5 mb-4 group-hover:border-[#c91f1f]/30 transition-colors">
                  <img
                    src={item.iconPages[0].src}
                    alt={`${item.name} brand icon`}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] tracking-ultra uppercase text-[#c91f1f] font-mono">
                        Brand Icon
                      </span>
                      <span className="text-[10px] font-mono text-white/40">
                        {item.workPages.length} Slides
                      </span>
                    </div>
                    <h4 className="font-editorial-serif text-2xl text-white font-normal mt-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-white/60 font-light mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                    <span>Open Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 5. FASHION & 6. CONTENT MANAGEMENT (Two Column Split)          */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fashion: PCERA */}
          <div className="group rounded-3xl overflow-hidden glass-card border border-white/10 p-8 sm:p-10 hover:border-[#c91f1f]/40 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase">
                <Compass className="w-4 h-4" />
                <span>Fashion</span>
              </div>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl text-white font-normal">
                WEAR PCERA
              </h3>
              <p className="text-xs text-[#c91f1f] font-mono tracking-widest uppercase">
                Feminine · Refined · Contemporary
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Exploring scale, pacing, hierarchy, framing and graphic accents for contemporary fashion communication across 8 high-fashion spreads.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <Link to="/projects/pcera" className="block rounded-xl overflow-hidden border border-white/10 relative group-hover:scale-[1.01] transition-transform">
                <img
                  src="/generated/pdf-pages/fashion/pcera (1)/page-001.webp"
                  alt="PCERA fashion communication editorial spread"
                  className="w-full h-56 sm:h-64 object-cover object-center"
                  loading="lazy"
                />
              </Link>

              <Link
                to="/projects/pcera"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white hover:text-[#c91f1f] transition-colors"
              >
                <span>View PCERA Fashion Case (8 Pages)</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Content & Social Media Management: QuickZaps */}
          <div className="group rounded-3xl overflow-hidden glass-card border border-white/10 p-8 sm:p-10 hover:border-[#c91f1f]/40 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase">
                <Zap className="w-4 h-4" />
                <span>Content & Social Media Management</span>
              </div>
              <h3 className="font-editorial-serif text-3xl sm:text-4xl text-white font-normal">
                QuickZaps
              </h3>
              <p className="text-xs text-[#c91f1f] font-mono tracking-widest uppercase">
                Digital Narrative & Strategy
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Creative social media management collateral engineered to captivate modern digital audiences and articulate clear brand milestones.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <Link to="/projects/quickzaps" className="block rounded-xl overflow-hidden border border-white/10 relative group-hover:scale-[1.01] transition-transform bg-[#f5f5f5]">
                <img
                  src="/generated/pdf-pages/content and social media management/quickzaps (4)/page-001.webp"
                  alt="QuickZaps Logo"
                  className="w-full h-56 sm:h-64 object-contain object-center p-6"
                  loading="lazy"
                />
              </Link>

              <Link
                to="/projects/quickzaps"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white hover:text-[#c91f1f] transition-colors"
              >
                <span>View QuickZaps Showcase (6 Pages)</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
