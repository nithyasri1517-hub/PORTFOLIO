import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 px-6 sm:px-12 lg:px-20 bg-[#090807] text-[#f5f2eb]">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-ultra text-[#c91f1f] font-mono block">
              Direct Connection
            </span>
            <h2 className="font-editorial-serif text-5xl sm:text-7xl lg:text-8xl font-light text-white tracking-tight">
              Contact
            </h2>
            <p className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl text-white/90 font-light italic pt-2">
              Let’s create something meaningful.
            </p>
          </div>

          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-xl">
            Available for select commissions, brand identity systems, editorial publications, fashion communication, and social media creative direction.
          </p>

          {/* Genuine Contact Information (No forms, no input fields) */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Email Contact Link */}
            <div className="p-8 rounded-2xl glass-card border border-white/10 hover:border-[#c91f1f]/50 transition-all duration-300 group">
              <span className="text-[10px] uppercase tracking-ultra text-white/40 font-mono block mb-3">
                Email Address
              </span>
              <a
                href="mailto:nithyacreativestudio@gmail.com"
                className="inline-flex items-center gap-3 text-lg sm:text-xl font-editorial-serif text-white group-hover:text-[#c91f1f] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#c91f1f]" />
                <span>nithyacreativestudio@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Phone Contact Link */}
            <div className="p-8 rounded-2xl glass-card border border-white/10 hover:border-[#c91f1f]/50 transition-all duration-300 group">
              <span className="text-[10px] uppercase tracking-ultra text-white/40 font-mono block mb-3">
                Studio Phone
              </span>
              <a
                href="tel:+919618179329"
                className="inline-flex items-center gap-3 text-lg sm:text-xl font-editorial-serif text-white group-hover:text-[#c91f1f] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#c91f1f]" />
                <span>+91 9618179329</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-white/40 font-mono tracking-widest uppercase gap-2">
            <span>Kolli Nithya Sri · Creative Direction</span>
            <span>India · Worldwide Collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
};
