import React, { useState } from 'react';
import { PORTFOLIO, BUSINESS_INFO } from '../data/content';
import { PortfolioItem } from '../types';
import { Sparkles, Eye, X, MessageCircle, Clock, Layers, UserCheck } from 'lucide-react';

interface PortfolioGalleryProps {
  onInquireItem: (item: PortfolioItem) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onInquireItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'weddings', label: 'Weddings & Suites' },
    { id: 'party-boxes', label: 'Party & Favor Boxes' },
    { id: 'corporate', label: 'Corporate Branding' },
    { id: 'signage', label: '3D Signage & Decor' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 bg-[#070707] relative border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141414] border border-[#d4af37]/25 text-[11px] uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <span>Portfolio of Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4 font-display">
            Curated Bespoke Works
          </h2>
          <p className="text-sm sm:text-base text-[#999] leading-relaxed">
            Every piece engineered at Déjà Rêve reflects a client’s distinct fantasy brought to life in shimmering gold, deep acrylic, and handcrafted hardwoods.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#DFB76C] to-[#C59B27] text-[#0a0a0a] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#121212] text-[#a0a0a0] hover:text-[#f3e5ab] border border-white/10 hover:border-[#d4af37]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl bg-[#111111] border border-[#d4af37]/20 hover:border-[#d4af37] overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161616]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#d4af37]/30 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">
                  {item.categoryLabel}
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-[#d4af37] text-[#0a0a0a] text-xs font-semibold flex items-center space-x-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specifications</span>
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#f5f5f5] group-hover:text-[#f3e5ab] transition-colors font-display line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#888] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#aaa]">
                  <span className="truncate max-w-[140px] text-[#d4af37]/90 font-medium">
                    {item.material.split(' on ')[0]}
                  </span>
                  <span className="text-[#666]">{item.turnaround}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-[#777] mb-3">
            Have a custom design concept or vector file ready?
          </p>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
              'Hello Déjà Rêve! I saw your portfolio and would like to request a custom laser design.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#f3e5ab] bg-[#141414] border border-[#d4af37]/40 hover:bg-[#d4af37]/15 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Send Artwork to WhatsApp ({BUSINESS_INFO.phoneFormatted})</span>
          </a>
        </div>
      </div>

      {/* Selected Item Modal Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#111111] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.25)]">
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-[#e5e5e5] hover:text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#d4af37]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#d4af37]">
                {selectedItem.categoryLabel}
              </div>
            </div>

            {/* Modal Specs */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f5] font-display mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-[#bbb] leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#161616] border border-white/5 flex items-start space-x-2.5">
                  <Layers className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#888] block text-[10px] uppercase tracking-wider">Material & Finish</span>
                    <span className="text-[#e5e5e5] font-medium">{selectedItem.material}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#161616] border border-white/5 flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#888] block text-[10px] uppercase tracking-wider">Turnaround Time</span>
                    <span className="text-[#e5e5e5] font-medium">{selectedItem.turnaround || '3-5 Business Days'}</span>
                  </div>
                </div>

                {selectedItem.client && (
                  <div className="p-3 rounded-lg bg-[#161616] border border-white/5 flex items-start space-x-2.5 sm:col-span-2">
                    <UserCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#888] block text-[10px] uppercase tracking-wider">Commission</span>
                      <span className="text-[#e5e5e5] font-medium">{selectedItem.client}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const item = selectedItem;
                    setSelectedItem(null);
                    onInquireItem(item);
                  }}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#DFB76C] to-[#C59B27] text-[#0a0a0a] font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity"
                >
                  Order a Piece Like This
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                    `Hello Déjà Rêve! I am inquiring about creating something like: "${selectedItem.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#181818] border border-[#d4af37]/40 text-[#f3e5ab] hover:text-white text-xs font-semibold flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
