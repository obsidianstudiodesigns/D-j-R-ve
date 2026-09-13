import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { X, Sparkles, MessageCircle, Mail, Send, Check } from 'lucide-react';
import { ServiceItem, PortfolioItem } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: ServiceItem | null;
  prefillPortfolioItem?: PortfolioItem | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  prefillService,
  prefillPortfolioItem,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [itemType, setItemType] = useState('Wedding Welcome Sign');
  const [material, setMaterial] = useState('Mirror Gold Acrylic');
  const [quantity, setQuantity] = useState('1');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (prefillService) {
      setItemType(prefillService.title);
    } else if (prefillPortfolioItem) {
      setItemType(prefillPortfolioItem.title);
      setMaterial(prefillPortfolioItem.material);
    }
  }, [prefillService, prefillPortfolioItem]);

  if (!isOpen) return null;

  const buildWhatsappMessage = () => {
    const text = `Hello Déjà Rêve!
I would like to order/request a quote:
- Project: ${itemType}
- Material: ${material}
- Quantity: ${quantity}
- Name: ${name || 'N/A'}
- Phone: ${phone || 'N/A'}
${notes ? `- Specific wording/details: ${notes}` : ''}

Looking forward to hearing from you!`;
    return encodeURIComponent(text);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const subject = encodeURIComponent(`Order Request: ${itemType} (${name || 'Client'})`);
    const body = encodeURIComponent(`Client Name: ${name}
Phone: ${phone}
Email: ${email}
Item Type: ${itemType}
Material: ${material}
Quantity: ${quantity}
Notes & Dimensions:
${notes || 'None specified'}

Submitted to Déjà Rêve Witbank Studio.`);
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#111111] border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#888] hover:text-white rounded-full hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-[#d4af37] text-xs uppercase tracking-widest font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Project Order</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#f5f5f5] font-display mb-1">
          Design Your Creation
        </h3>
        <p className="text-xs text-[#888] mb-6">
          Déjà Rêve Witbank Studio &bull; {BUSINESS_INFO.phoneFormatted}
        </p>

        {sent ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#f5f5f5]">Email Brief Generated</h4>
            <p className="text-xs text-[#aaa]">
              Your project specifications have been drafted to {BUSINESS_INFO.email}.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${buildWhatsappMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Also Send via WhatsApp for Quickest Reply</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-[#222] text-[#aaa] text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#aaa] mb-1">
                  Item Type *
                </label>
                <input
                  type="text"
                  required
                  value={itemType}
                  onChange={(e) => setItemType(e.target.value)}
                  placeholder="e.g. Wedding Welcome Sign"
                  className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-3.5 py-2 text-xs text-[#e5e5e5] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#aaa] mb-1">
                  Material
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-3.5 py-2 text-xs text-[#e5e5e5] outline-none"
                >
                  <option value="Mirror Gold Acrylic">Mirror Gold Acrylic</option>
                  <option value="Mirror Rose Gold Acrylic">Mirror Rose Gold Acrylic</option>
                  <option value="Matte Black Acrylic">Matte Black Acrylic</option>
                  <option value="Frosted Translucent Acrylic">Frosted Translucent Acrylic</option>
                  <option value="Baltic Birch Wood">Grade-A Baltic Birch Wood</option>
                  <option value="Luxury Cardstock">Luxury 350gsm Box Cardstock</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#aaa] mb-1">
                  Quantity
                </label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 1 sign or 50 boxes"
                  className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-3.5 py-2 text-xs text-[#e5e5e5] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#aaa] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Lerato Khumalo"
                  className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-3.5 py-2 text-xs text-[#e5e5e5] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#aaa] mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 076 123 4567"
                  className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-3.5 py-2 text-xs text-[#e5e5e5] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#aaa] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. lerato@email.com"
                  className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-3.5 py-2 text-xs text-[#e5e5e5] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#aaa] mb-1">
                Custom Wording, Dimensions, or Inspiration Notes
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Names, dates, sizes (e.g. 800mm round, A1), or link to reference photos..."
                className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-3.5 py-2 text-xs text-[#e5e5e5] outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${buildWhatsappMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Order</span>
              </a>

              <button
                type="submit"
                className="py-3 px-5 rounded-xl bg-gradient-to-r from-[#DFB76C] to-[#C59B27] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Brief</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
