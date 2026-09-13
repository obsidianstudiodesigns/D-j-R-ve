import React, { useState, useMemo } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Sparkles, Calculator, MessageCircle, Mail, Check, ShieldAlert } from 'lucide-react';

export const QuoteEstimator: React.FC = () => {
  const [productType, setProductType] = useState('wedding-sign');
  const [material, setMaterial] = useState('gold-mirror');
  const [quantity, setQuantity] = useState(1);
  const [isRush, setIsRush] = useState(false);
  const [needsDesignAssistance, setNeedsDesignAssistance] = useState(true);
  const [clientNotes, setClientNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const productOptions = [
    { id: 'wedding-sign', name: 'Wedding Welcome Board / Seating Chart (A1/A2)', basePrice: 650 },
    { id: 'cake-topper', name: 'Bespoke Mirrored Cake Topper / Monogram', basePrice: 180 },
    { id: 'party-boxes', name: 'Luxury Party & Favor Boxes (Pack of 10+)', basePrice: 28 }, // per item
    { id: 'corporate-box', name: 'Laser Engraved Wooden Executive Gift Box', basePrice: 320 },
    { id: '3d-sign', name: '3D Layered Acrylic Event / Office Sign (60-90cm)', basePrice: 850 },
    { id: 'custom-cut', name: 'Custom Laser Cutting / Vector Prototyping', basePrice: 400 },
  ];

  const materialOptions = [
    { id: 'gold-mirror', name: 'Mirror Gold Cast Acrylic (3mm)', multiplier: 1.25 },
    { id: 'rose-gold-mirror', name: 'Mirror Rose Gold Acrylic (3mm)', multiplier: 1.25 },
    { id: 'silver-mirror', name: 'Mirror Silver Acrylic (3mm)', multiplier: 1.2 },
    { id: 'matte-black', name: 'Matte Onyx Black Acrylic (3-5mm)', multiplier: 1.15 },
    { id: 'frosted', name: 'Translucent Frosted Acrylic (3mm)', multiplier: 1.1 },
    { id: 'baltic-birch', name: 'Grade-A Baltic Birch Wood (3-6mm)', multiplier: 1.0 },
    { id: 'luxe-cardstock', name: '350gsm Foil-Grade Luxury Cardstock', multiplier: 0.9 },
  ];

  // Dynamic estimate calculation
  const estimate = useMemo(() => {
    const selectedProd = productOptions.find((p) => p.id === productType) || productOptions[0];
    const selectedMat = materialOptions.find((m) => m.id === material) || materialOptions[0];

    let base = selectedProd.basePrice * selectedMat.multiplier;

    // Quantity discounts for bulk (e.g. party boxes)
    let total = base * quantity;
    if (quantity >= 50) {
      total *= 0.85; // 15% bulk discount
    } else if (quantity >= 20) {
      total *= 0.9; // 10% discount
    }

    if (needsDesignAssistance) {
      total += 150; // CAD/Proof fee
    }

    if (isRush) {
      total *= 1.25; // Rush fee
    }

    const min = Math.round(total * 0.92);
    const max = Math.round(total * 1.08);

    return { min, max, average: Math.round(total) };
  }, [productType, material, quantity, isRush, needsDesignAssistance]);

  const selectedProdName = productOptions.find((p) => p.id === productType)?.name || '';
  const selectedMatName = materialOptions.find((m) => m.id === material)?.name || '';

  // Generate WhatsApp brief
  const whatsappMessage = useMemo(() => {
    const msg = `Hello Déjà Rêve! I generated an estimate on your website:
- Item: ${selectedProdName}
- Material: ${selectedMatName}
- Quantity: ${quantity} unit(s)
- Custom Vector Design: ${needsDesignAssistance ? 'Yes, please design for me' : 'I have vector files'}
- Urgent Rush Order: ${isRush ? 'Yes (24-48h)' : 'Standard (3-5 days)'}
- Estimated Budget: R${estimate.min} - R${estimate.max}
${clientNotes ? `- Notes/Dimensions: ${clientNotes}` : ''}

Could you please provide a finalized quote and invoice?`;
    return encodeURIComponent(msg);
  }, [selectedProdName, selectedMatName, quantity, needsDesignAssistance, isRush, estimate, clientNotes]);

  // Email subject and body
  const emailHref = useMemo(() => {
    const subject = encodeURIComponent(`Bespoke Order Inquiry: ${selectedProdName}`);
    const body = encodeURIComponent(`Dear Déjà Rêve Team,

I would like to inquire about a custom laser cutting project:

Product Type: ${selectedProdName}
Material Choice: ${selectedMatName}
Quantity: ${quantity} unit(s)
Design Assistance: ${needsDesignAssistance ? 'Needed' : 'Artwork Ready'}
Production Priority: ${isRush ? 'Rush (24-48 hours)' : 'Standard'}
Estimated Range: R${estimate.min} - R${estimate.max}

Additional Notes:
${clientNotes || 'N/A'}

Contact Details:
[Please add your name and phone number]

Thank you,
Looking forward to bringing this dream to reality.`);
    return `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  }, [selectedProdName, selectedMatName, quantity, needsDesignAssistance, isRush, estimate, clientNotes]);

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 bg-[#0c0c0c] relative border-t border-[#d4af37]/15">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161616] border border-[#d4af37]/30 text-[11px] uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-3 font-display">
            Estimate Your Custom Creation
          </h2>
          <p className="text-sm text-[#999] leading-relaxed">
            Select your desired item, luxury materials, and quantities to receive an immediate guideline estimate. 
            Once satisfied, send your pre-filled brief directly to our Witbank artisans.
          </p>
        </div>

        {/* Calculator Frame */}
        <div className="rounded-2xl bg-[#121212] border border-[#d4af37]/30 p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Config Panel */}
            <div className="lg:col-span-7 space-y-6">
              {/* Product Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                  1. Choose Item Type
                </label>
                <select
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full bg-[#181818] border border-white/15 focus:border-[#d4af37] rounded-xl px-4 py-3 text-sm text-[#e5e5e5] outline-none transition-colors"
                >
                  {productOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Material Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                  2. Select Material & Finish
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full bg-[#181818] border border-white/15 focus:border-[#d4af37] rounded-xl px-4 py-3 text-sm text-[#e5e5e5] outline-none transition-colors"
                >
                  {materialOptions.map((mat) => (
                    <option key={mat.id} value={mat.id}>
                      {mat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity Slider & Counter */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                    3. Quantity (Units)
                  </label>
                  <span className="text-sm font-bold text-[#f3e5ab] bg-[#1a1a1a] px-3 py-1 rounded-lg border border-white/10">
                    {quantity} {quantity === 1 ? 'piece' : 'pieces'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={productType === 'party-boxes' ? 200 : 50}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                />
                <div className="flex justify-between text-[10px] text-[#666] mt-1">
                  <span>1 unit</span>
                  {productType === 'party-boxes' && <span>Discounts at 20+ & 50+</span>}
                  <span>{productType === 'party-boxes' ? '200+ units' : '50 units'}</span>
                </div>
              </div>

              {/* Add-ons Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl bg-[#161616] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                  <input
                    type="checkbox"
                    checked={needsDesignAssistance}
                    onChange={(e) => setNeedsDesignAssistance(e.target.checked)}
                    className="w-4 h-4 accent-[#d4af37] rounded"
                  />
                  <div className="text-xs">
                    <span className="text-[#e5e5e5] font-medium block">
                      Include Digital CAD & Typography Proofing (+R150)
                    </span>
                    <span className="text-[#777]">
                      Our graphic team formats your monograms, vectors, and font pairings.
                    </span>
                  </div>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl bg-[#161616] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                  <input
                    type="checkbox"
                    checked={isRush}
                    onChange={(e) => setIsRush(e.target.checked)}
                    className="w-4 h-4 accent-[#d4af37] rounded"
                  />
                  <div className="text-xs">
                    <span className="text-[#e5e5e5] font-medium block">
                      Priority Express Rush (24 - 48 Hours)
                    </span>
                    <span className="text-[#777]">
                      Pushed directly to the front of the laser cutting queue.
                    </span>
                  </div>
                </label>
              </div>

              {/* Custom Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#aaa] mb-1">
                  Specific Dimensions or Name/Wording (Optional)
                </label>
                <input
                  type="text"
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  placeholder="e.g., 'Trevor & Nandi 24.10.2026', A1 size, Gold font on matte black"
                  className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs text-[#e5e5e5] outline-none"
                />
              </div>
            </div>

            {/* Right Summary & Immediate Action Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-[#181818] to-[#121212] border border-[#d4af37]/40 shadow-inner">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#d4af37]/20">
                  <span className="text-xs uppercase tracking-widest text-[#a0a0a0]">
                    Bespoke Estimate
                  </span>
                  <span className="text-[11px] text-[#25D366] font-medium flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span>Studio Live Pricing</span>
                  </span>
                </div>

                {/* Price Display */}
                <div className="py-2">
                  <div className="text-xs text-[#d4af37] font-medium mb-1">
                    Estimated Total Range (ZAR)
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#f3e5ab] font-display">
                    R{estimate.min.toLocaleString()} — R{estimate.max.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-[#777] mt-1">
                    *Exact cost confirmed upon vector artwork review and material gauge.
                  </p>
                </div>

                {/* Summary Specs */}
                <div className="space-y-2 py-3 border-t border-white/5 text-xs text-[#bbb]">
                  <div className="flex justify-between">
                    <span className="text-[#888]">Item:</span>
                    <span className="font-medium text-[#e5e5e5] text-right truncate max-w-[190px]">
                      {selectedProdName.split('(')[0]}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">Material:</span>
                    <span className="font-medium text-[#e5e5e5] text-right truncate max-w-[190px]">
                      {selectedMatName.split('(')[0]}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">Units:</span>
                    <span className="font-medium text-[#e5e5e5]">{quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">Turnaround:</span>
                    <span className="font-medium text-[#d4af37]">
                      {isRush ? 'Express 24-48h' : 'Standard 3-5 days'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#888]">Studio Location:</span>
                    <span className="text-[#e5e5e5]">Witbank, 33 B Barlow Rd</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20bd5a] transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Send Brief to WhatsApp</span>
                </a>

                <a
                  href={emailHref}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-[#e5e5e5] bg-[#222] hover:bg-[#282828] border border-white/10 hover:border-[#d4af37]/40 transition-all flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <span>Send via Email ({BUSINESS_INFO.email})</span>
                </a>

                <p className="text-[10px] text-center text-[#666]">
                  Immediate reply via WhatsApp during studio hours (08:30 – 17:00)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
