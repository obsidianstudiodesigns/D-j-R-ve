import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Phone, MessageCircle, Sparkles, MapPin } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-[#d4af37]/30 px-3 py-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${BUSINESS_INFO.whatsappDefaultMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={`tel:${BUSINESS_INFO.phoneFormatted.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-[#161616] border border-white/10 text-[#f5f5f5] active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#d4af37] mb-0.5" />
          <span className="text-[10px] font-medium">Call</span>
        </a>

        {/* Directions / Witbank */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=33+B+Barlow+Road+Witbank+1035"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-[#161616] border border-white/10 text-[#f5f5f5] active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 text-[#d4af37] mb-0.5" />
          <span className="text-[10px] font-medium">Witbank</span>
        </a>

        {/* Request Quote Modal */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-gradient-to-r from-[#DFB76C] to-[#C59B27] text-black font-bold active:scale-95 transition-transform shadow-md"
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] uppercase tracking-tighter">Quote</span>
        </button>
      </div>
    </div>
  );
};
