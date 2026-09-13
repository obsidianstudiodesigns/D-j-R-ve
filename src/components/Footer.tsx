import React from 'react';
import { DejaReveLogo } from './DejaReveLogo';
import { BUSINESS_INFO } from '../data/content';
import { MapPin, Phone, Mail, MessageCircle, Heart, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-[#888] border-t border-[#d4af37]/20 pt-16 pb-24 md:pb-16 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <DejaReveLogo size="sm" withGlow={false} />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gold-gradient font-display">
                  Déjà Rêve
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#d4af37] uppercase">
                  "Once a dream, now reality"
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#777]">
              Witbank’s bespoke studio for precision laser cutting, luxury wedding suites, custom party boxes, and executive corporate design.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] text-[#f3e5ab] font-medium border-l-2 border-[#d4af37] pl-2.5">
                Handcrafted with pride in Mpumalanga
              </span>
            </div>
          </div>

          {/* Col 2: Studio Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f5f5f5] font-semibold font-display">
              Bespoke Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#f3e5ab] transition-colors">Mirror Acrylic Wedding Signs</a></li>
              <li><a href="#services" className="hover:text-[#f3e5ab] transition-colors">Luxury Party & Favor Boxes</a></li>
              <li><a href="#services" className="hover:text-[#f3e5ab] transition-colors">Corporate Engraved Wood Boxes</a></li>
              <li><a href="#services" className="hover:text-[#f3e5ab] transition-colors">3D Monograms & Cake Toppers</a></li>
              <li><a href="#services" className="hover:text-[#f3e5ab] transition-colors">Industrial Contract Laser Cutting</a></li>
            </ul>
          </div>

          {/* Col 3: Witbank Studio Location */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f5f5f5] font-semibold font-display">
              Witbank Studio
            </h4>
            <div className="space-y-2.5 text-xs text-[#aaa]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>33 B, Barlow Road, Witbank, 1035</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneFormatted.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="text-[11px] text-[#777] pt-1">
                Mon - Fri: 08:30 – 17:00
              </div>
            </div>
          </div>

          {/* Col 4: Quick Connections & GitHub Hosting */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f5f5f5] font-semibold font-display">
              Direct Contact
            </h4>
            <p className="text-xs text-[#777]">
              Need an urgent quote or want to check material samples in person?
            </p>
            <div className="pt-1 flex flex-col space-y-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${BUSINESS_INFO.whatsappDefaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href="https://obsidianstudiodesigns.github.io/DejaRêve/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-[#141414] border border-white/10 text-xs text-[#999] hover:text-[#f3e5ab] hover:border-[#d4af37]/40 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Pages Live Deployment</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#666] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Déjà Rêve. All Rights Reserved. 33 B Barlow Road, Witbank, 1035.
          </p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span>Bespoke Digital Experience by</span>
              <span className="text-[#d4af37] font-medium">Obsidian Studio Designs</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
