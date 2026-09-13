import React from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { Sparkles, ArrowUpRight, CheckCircle2, Heart, Gift, Briefcase, Compass } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <Heart className="w-5 h-5 text-[#d4af37]" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-[#d4af37]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#d4af37]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
      default:
        return <Compass className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#0a0a0a] relative border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141414] border border-[#d4af37]/25 text-[11px] uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Specialist Studio Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4 font-display">
            Artisanal Precision. <br />
            <span className="text-gold-gradient italic font-serif-luxury font-normal">Unrivaled Luxury.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#999] leading-relaxed">
            From the most delicate wedding lace acrylics to heavyweight industrial corporate trophies, 
            our Witbank workshop unites high-caliber laser mechanics with couture design sensibility.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#111111] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_35px_rgba(212,175,55,0.15)]"
            >
              {/* Card Image Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-[#181818]">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                
                {/* Starting Price Tag */}
                {service.startingPrice && (
                  <div className="absolute top-4 right-4 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#f3e5ab]">
                    {service.startingPrice}
                  </div>
                )}

                {/* Service Icon Badge */}
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-[#0a0a0a]/90 backdrop-blur-md border border-[#d4af37]/30 flex items-center justify-center shadow-lg">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#f5f5f5] mb-1 font-display group-hover:text-gold-gradient transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#d4af37]/80 italic mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-[#999] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-[#bbb]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-[#777] uppercase tracking-wider">
                    Witbank Studio Craft
                  </span>

                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#f3e5ab] hover:text-white px-3 py-1.5 rounded-lg bg-[#d4af37]/15 hover:bg-[#d4af37]/30 border border-[#d4af37]/40 transition-colors"
                  >
                    <span>Customize</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
