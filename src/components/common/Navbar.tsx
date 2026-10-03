import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
      // Allow route transition then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 sm:py-6 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 sm:px-8 py-3.5 rounded-full transition-all duration-500 glass-nav ${
          isScrolled
            ? 'shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-white/10 bg-[#120f0e]/80'
            : 'shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-white/5 bg-[#14100f]/60'
        }`}
      >
        {/* Brand Logo / Monogram */}
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="group flex items-center gap-2.5 text-xs font-semibold tracking-ultra uppercase text-white/90 hover:text-white transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#c91f1f] group-hover:scale-125 transition-transform" />
          <span className="font-editorial-display tracking-widest text-sm">NITHYA</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-medium tracking-widest uppercase">
          <button
            onClick={() => handleNavClick('casestudies')}
            className="text-white/70 hover:text-white transition-colors hover:tracking-ultra duration-300 relative py-1"
          >
            CASE STUDIES
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="text-white/70 hover:text-white transition-colors hover:tracking-ultra duration-300 relative py-1"
          >
            ABOUT
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-white/70 hover:text-white transition-colors hover:tracking-ultra duration-300 relative py-1"
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-white/80 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 p-6 rounded-2xl glass-nav bg-[#120f0e]/95 border border-white/10 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => handleNavClick('casestudies')}
            className="text-left text-sm tracking-widest uppercase py-2 text-white/80 hover:text-white border-b border-white/5"
          >
            Case Studies
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="text-left text-sm tracking-widest uppercase py-2 text-white/80 hover:text-white border-b border-white/5"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-left text-sm tracking-widest uppercase py-2 text-white/80 hover:text-white"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
