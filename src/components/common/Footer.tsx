import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080706] text-white/70 border-t border-white/5 py-16 px-6 sm:px-12 overflow-hidden">
      {/* Subtle background red glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c91f1f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12 relative z-10">
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c91f1f]" />
            <span className="font-editorial-display tracking-widest text-lg font-bold text-white uppercase">
              NITHYA
            </span>
          </div>
          <p className="text-xs text-white/50 leading-relaxed font-light tracking-wide">
            Creative direction, visual identity, editorial publications, and social media storytelling. Crafting intentional, expressive visual presence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 text-xs tracking-widest uppercase">
          <a href="#work" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#casestudies" className="hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-white/10 hover:border-white/30 text-white/80 hover:text-white hover:bg-white/5 transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 tracking-wider">
        <p>© {new Date().getFullYear()} Nithya. All original creative works reserved.</p>
        <p className="mt-2 sm:mt-0 font-light">Curated Portfolio · Editorial & Fashion Direction</p>
      </div>
    </footer>
  );
};
