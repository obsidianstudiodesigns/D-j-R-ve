import React from 'react';
import { MATERIALS, WORKFLOW_STEPS } from '../data/content';
import { Sparkles, Layers, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';

export const MaterialsAndProcess: React.FC = () => {
  return (
    <section id="materials" className="py-24 px-4 sm:px-6 bg-[#070707] relative border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto">
        {/* Part 1: Materials Showcase */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141414] border border-[#d4af37]/25 text-[11px] uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Mastery of Substrates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4 font-display">
            Finest Grade Materials
          </h2>
          <p className="text-sm sm:text-base text-[#999] leading-relaxed">
            We exclusively mill and engrave high-density cast acrylics, imported grade-A hardwood veneers, 
            and structural boxboards to guarantee smooth glass-like flame-polished laser edges.
          </p>
        </div>

        {/* Materials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {MATERIALS.map((mat) => (
            <div
              key={mat.id}
              className="p-6 rounded-2xl bg-[#111111] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 relative group shadow-md"
            >
              {mat.badge && (
                <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#d4af37]/15 text-[#f3e5ab] border border-[#d4af37]/30">
                  {mat.badge}
                </span>
              )}

              <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-[#f5f5f5] mb-1 font-display">
                {mat.name}
              </h3>

              <div className="text-xs text-[#d4af37]/90 font-medium mb-3">
                Finish: {mat.finish}
              </div>

              <p className="text-xs text-[#888] leading-relaxed">
                {mat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Part 2: The 5-Step Bespoke Workflow */}
        <div id="process" className="pt-12 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141414] border border-[#d4af37]/25 text-[11px] uppercase tracking-[0.2em] text-[#d4af37] mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Couture Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-4 font-display">
              From Concept to Masterpiece
            </h2>
            <p className="text-sm text-[#999] leading-relaxed">
              Transparent, communicative, and methodical. You approve every digital curve and font dimension before laser firing begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {WORKFLOW_STEPS.map((step, index) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-[#111111]/90 border border-white/10 hover:border-[#d4af37]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-gold-gradient font-display mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#f5f5f5] mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#888] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[11px] text-[#d4af37]">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Quality Assured</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
