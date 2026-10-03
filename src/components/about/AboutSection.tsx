import React from 'react';
import { Sparkles, Palette, PenTool, Film } from 'lucide-react';

const SKILLS = [
  'Branding',
  'Graphic Design',
  'Visual Identity',
  'Social Media',
  'Content Creation',
  'Creative Direction',
  'Motion Design',
];

const TOOLS = [
  { name: 'Figma', category: 'UI & Layout' },
  { name: 'Canva', category: 'Rapid Visuals' },
  { name: 'Adobe Illustrator', category: 'Vector & Identity' },
  { name: 'Premiere Pro', category: 'Video Editing' },
  { name: 'CapCut', category: 'Social Motion' },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-12 lg:px-20 bg-[#0c0a09] text-[#f5f2eb] overflow-hidden">
      {/* Editorial Watermark Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[18vw] font-editorial-serif font-black text-white leading-none whitespace-nowrap z-0">
        NITHYA
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Visual Column (Featuring the supplied 3D Character Artwork) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-[#191514]">
              <img
                src="/generated/character-3d.webp"
                alt="Nithya portrait creative visual"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/80 font-mono tracking-widest uppercase">
                <span>Nithya</span>
                <span className="text-[#c91f1f]">Brand & Visual Designer</span>
              </div>
            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#c91f1f]/20 via-transparent to-white/10 -z-10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c91f1f] tracking-widest uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Designer & Creative Director</span>
              </div>
              <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
                Crafting visual worlds with intention.
              </h2>
            </div>

            {/* Exact Directed About Copy */}
            <div className="border-l-2 border-[#c91f1f] pl-6 py-2">
              <p className="font-editorial-serif text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed italic">
                “I’m Nithya — a designer focused on branding, visual identity and social media. I like turning ideas into visuals that feel intentional, expressive and memorable. From brand identities to social content, I work across design, storytelling and creative direction to help brands build a stronger visual presence.”
              </p>
            </div>

            {/* Relevant Skills */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 font-mono">
                <Palette className="w-3.5 h-3.5 text-[#c91f1f]" />
                <span>Disciplines & Focus Areas</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-xs font-light tracking-wider bg-white/5 border border-white/10 text-white/85 hover:border-[#c91f1f]/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Relevant Tools */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 font-mono">
                <PenTool className="w-3.5 h-3.5 text-[#c91f1f]" />
                <span>Software & Creative Tools</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between hover:bg-white/[0.06] transition-colors"
                  >
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {tool.name}
                    </span>
                    <span className="text-[10px] text-white/40 font-mono mt-0.5">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
