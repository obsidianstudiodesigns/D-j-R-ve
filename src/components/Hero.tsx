import React from 'react';
import { DejaReveLogo } from './DejaReveLogo';
import { BUSINESS_INFO } from '../data/content';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, MapPin, Layers } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-[#050505]">
      {/* Full-Screen Edge-to-Edge Responsive Wallpaper */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <picture className="w-full h-full block">
          {/* Mobile Wallpaper: Landing page mobile.jpg (< 768px) */}
          <source media="(max-width: 767px)" srcSet="./landing-page-mobile.jpg" />
          {/* Desktop Wallpaper: landing page.jpg (>= 768px) */}
          <source media="(min-width: 768px)" srcSet="./landing-page.jpg" />
          {/* Fallback image */}
          <img
            src="./landing-page.jpg"
            alt="Déjà Rêve Bespoke Luxury Wallpaper"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </picture>

        {/* Sophisticated Luxury Scrim & Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/75 via-[#050505]/45 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(5,5,5,0.45)_65%,rgba(5,5,5,0.9)_100%)]" />
      </div>

      {/* Ambient Starlight & Gold Glow Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#d4af37]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#aa771c]/15 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern for precision feel */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-[0.06]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Top Badge: Studio Location & Excellence */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#161616] border border-[#d4af37]/30 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#f3e5ab] font-medium">
            Witbank Studio &bull; South Africa
          </span>
          <span className="text-[#666]">&bull;</span>
          <span className="text-xs text-[#a0a0a0] flex items-center space-x-1">
            <MapPin className="w-3 h-3 text-[#d4af37]" />
            <span>33 B Barlow Rd</span>
          </span>
        </div>

        {/* Central Brand Badge: Déjà Rêve */}
        <div className="mb-8 relative group">
          <DejaReveLogo size="xl" withGlow={true} animated={true} />
          
          {/* Subtle floating gold sparkle tags */}
          <div className="hidden sm:block absolute -top-2 -right-8 bg-[#121212]/90 border border-[#d4af37]/40 px-3 py-1 rounded-full text-[11px] text-[#f3e5ab] shadow-lg animate-float-slow">
            ✨ Laser Precision
          </div>
          <div className="hidden sm:block absolute -bottom-2 -left-8 bg-[#121212]/90 border border-[#d4af37]/40 px-3 py-1 rounded-full text-[11px] text-[#f3e5ab] shadow-lg animate-float-slow [animation-delay:2s]">
            👑 Luxury Craftsmanship
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f5f5f5] mb-4 font-display leading-[1.1]">
          Once a Dream, <br />
          <span className="text-gold-gradient italic font-serif-luxury font-normal">
            Now Reality.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#b5b5b5] font-light leading-relaxed mb-8 sm:mb-10">
          Specializing in bespoke <span className="text-[#f3e5ab] font-normal">laser cutting</span>, precision print, 
          luxurious <span className="text-[#f3e5ab] font-normal">wedding stationery</span>, artisanal party & favor boxes, 
          and executive corporate designs.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12 sm:mb-16">
          <button
            onClick={onOpenQuoteModal}
            id="hero-request-quote-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold tracking-wider uppercase text-xs sm:text-sm text-[#0a0a0a] bg-gradient-to-r from-[#DFB76C] via-[#FCEABB] to-[#C59B27] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-[#0a0a0a]" />
            <span>Request Bespoke Quote</span>
            <ArrowRight className="w-4 h-4 text-[#0a0a0a]" />
          </button>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${BUSINESS_INFO.whatsappDefaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold tracking-wider text-xs sm:text-sm text-[#e5e5e5] bg-[#121212] border border-[#d4af37]/40 hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp ({BUSINESS_INFO.phoneFormatted})</span>
          </a>

          <a
            href="#portfolio"
            className="text-xs uppercase tracking-widest text-[#a0a0a0] hover:text-[#f3e5ab] underline underline-offset-8 transition-colors pt-2 sm:pt-0"
          >
            View Portfolio &darr;
          </a>
        </div>

        {/* Trust Badges & Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl border-t border-[#d4af37]/20 pt-8 sm:pt-10 text-left">
          <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#d4af37]/15">
            <div className="text-[#d4af37] font-semibold text-lg sm:text-xl font-display">0.05 mm</div>
            <div className="text-xs text-[#a0a0a0] uppercase tracking-wider mt-1">Laser Accuracy</div>
            <p className="text-[11px] text-[#777] mt-1">Ultra-fine microscopic cuts on wood & acrylic</p>
          </div>

          <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#d4af37]/15">
            <div className="text-[#d4af37] font-semibold text-lg sm:text-xl font-display">Bespoke Only</div>
            <div className="text-xs text-[#a0a0a0] uppercase tracking-wider mt-1">Custom Creations</div>
            <p className="text-[11px] text-[#777] mt-1">Tailored for your weddings, parties & brand</p>
          </div>

          <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#d4af37]/15">
            <div className="text-[#d4af37] font-semibold text-lg sm:text-xl font-display">Barlow Road</div>
            <div className="text-xs text-[#a0a0a0] uppercase tracking-wider mt-1">Witbank Studio</div>
            <p className="text-[11px] text-[#777] mt-1">Visit our local workshop for custom proofs</p>
          </div>

          <div className="p-4 rounded-xl bg-[#111111]/80 border border-[#d4af37]/15">
            <div className="text-[#d4af37] font-semibold text-lg sm:text-xl font-display">Nationwide</div>
            <div className="text-xs text-[#a0a0a0] uppercase tracking-wider mt-1">Express Delivery</div>
            <p className="text-[11px] text-[#777] mt-1">Door-to-door insured courier across SA</p>
          </div>
        </div>
      </div>
    </section>
  );
};
