import React, { useState, useEffect } from 'react';
import { DejaReveLogo } from './DejaReveLogo';
import { BUSINESS_INFO } from '../data/content';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Materials & Craft', href: '#materials' },
    { name: 'How It Works', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-2.5'
          : 'bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent py-4'
      }`}
    >
      {/* Top micro-bar for Witbank Studio info (desktop only) */}
      <div className="hidden lg:block border-b border-[#d4af37]/10 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs tracking-wider text-[#a0a0a0]">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-[#d4af37]/80">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>33 B, Barlow Road, Witbank, 1035</span>
            </span>
            <span className="text-[#666]">|</span>
            <span>Bespoke Laser Cutting & High-End Luxury Designs</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${BUSINESS_INFO.whatsappDefaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[#f3e5ab] hover:text-[#d4af37] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <span className="text-[#666]">|</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hover:text-[#d4af37] transition-colors"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo - Enlarged without side text */}
        <a href="#" className="flex items-center group py-0.5" aria-label="Déjà Rêve Home">
          <DejaReveLogo
            size="md"
            className="w-16 h-16 sm:w-20 sm:h-20 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]"
            withGlow={true}
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#cccccc] hover:text-[#f3e5ab] hover:underline decoration-[#d4af37]/50 underline-offset-8 transition-colors duration-200 text-xs uppercase tracking-widest font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${BUSINESS_INFO.whatsappDefaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="flex items-center space-x-2 px-3 py-2 rounded-full text-xs font-medium text-[#e5e5e5] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            id="nav-get-quote-btn"
            className="relative group overflow-hidden px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0a0a0a] bg-gradient-to-r from-[#DFB76C] via-[#FCEABB] to-[#C59B27] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0a0a0a]" />
              <span>Request Quote</span>
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenQuoteModal}
            className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#0a0a0a] bg-[#d4af37]"
          >
            Quote
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-[#f3e5ab] hover:text-white border border-[#d4af37]/30 hover:bg-[#d4af37]/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#d4af37]/20 px-6 py-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#e5e5e5] hover:text-[#f3e5ab] font-medium py-1 tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-3 text-xs text-[#a0a0a0]">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>33 B, Barlow Road, Witbank, 1035</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>076 983 2759</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${BUSINESS_INFO.whatsappDefaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#DFB76C] to-[#C59B27] text-[#0a0a0a] font-semibold text-sm tracking-wider uppercase"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
