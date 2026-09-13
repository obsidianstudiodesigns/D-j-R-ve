import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'wedding',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Also trigger mailto fallback
    const subject = encodeURIComponent(`Inquiry from ${formData.name}: ${formData.projectType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject: ${formData.projectType}\n\nDetails:\n${formData.message}`
    );
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  const whatsappInquiryUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Hello Déjà Rêve! My name is ${formData.name || '[My Name]'}. I'd like to discuss a ${formData.projectType} project: ${formData.message || 'Please contact me.'}`
  )}`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#070707] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141414] border border-[#d4af37]/25 text-[11px] uppercase tracking-[0.2em] text-[#d4af37] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Witbank Studio Headquarters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4 font-display">
            Bring Your Vision to Reality
          </h2>
          <p className="text-sm sm:text-base text-[#999]">
            Visit our Witbank studio for hands-on material previews or connect directly via WhatsApp and email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Business Details & Witbank Studio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#111111] border border-[#d4af37]/30 shadow-[0_10px_35px_rgba(0,0,0,0.7)] space-y-6">
              <h3 className="text-xl font-bold text-[#f5f5f5] font-display text-gold-gradient">
                Déjà Rêve Studio
              </h3>
              <p className="text-xs text-[#888] leading-relaxed">
                "Once a dream, now reality" — Bespoke laser cutting, fine wedding stationery, party boxes, and executive branding.
              </p>

              {/* Specific Details */}
              <div className="space-y-4 pt-2 border-t border-white/10 text-xs">
                {/* Address */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#666] block text-[10px] uppercase tracking-wider font-semibold">Physical Address</span>
                    <span className="text-[#f5f5f5] text-sm font-medium block">{BUSINESS_INFO.address}</span>
                    <span className="text-[#888] text-[11px] block">{BUSINESS_INFO.city}</span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=33+B+Barlow+Road+Witbank+1035"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d4af37] hover:underline inline-block mt-1 font-medium"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#666] block text-[10px] uppercase tracking-wider font-semibold">Direct Calls & WhatsApp</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneFormatted.replace(/\s+/g, '')}`}
                      className="text-[#f5f5f5] text-sm font-medium hover:text-[#d4af37] transition-colors block"
                    >
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${BUSINESS_INFO.whatsappDefaultMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline inline-block mt-0.5 font-medium"
                    >
                      Chat on WhatsApp &rarr;
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#666] block text-[10px] uppercase tracking-wider font-semibold">Orders & Vector Submissions</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-[#f3e5ab] text-sm font-medium hover:underline block"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Studio Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#666] block text-[10px] uppercase tracking-wider font-semibold">Operating Hours</span>
                    <span className="text-[#bbb] block">{BUSINESS_INFO.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#111111] border border-[#d4af37]/30 shadow-2xl">
              <h3 className="text-xl font-bold text-[#f5f5f5] font-display mb-2">
                Send a Studio Project Brief
              </h3>
              <p className="text-xs text-[#888] mb-6">
                Tell us about your wedding date, party theme, or corporate requirements.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#161616] border border-[#25D366]/40 text-center space-y-4 animate-in fade-in">
                  <CheckCircle className="w-12 h-12 text-[#25D366] mx-auto" />
                  <h4 className="text-lg font-bold text-[#f5f5f5]">Thank You! Your Brief is Ready</h4>
                  <p className="text-xs text-[#bbb] max-w-md mx-auto">
                    Your email client has been prepared. For immediate response from our Witbank studio, tap below to send directly via WhatsApp:
                  </p>
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#20bd5a] transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp ({BUSINESS_INFO.phoneFormatted})</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#aaa] font-semibold mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs text-[#e5e5e5] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#aaa] font-semibold mb-1">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 076 123 4567"
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs text-[#e5e5e5] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#aaa] font-semibold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs text-[#e5e5e5] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#aaa] font-semibold mb-1">
                        Project Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs text-[#e5e5e5] outline-none"
                      >
                        <option value="Wedding Suite & Decor">Wedding Stationery & Welcome Boards</option>
                        <option value="Luxury Party Boxes">Party, Favor & Celebration Boxes</option>
                        <option value="Corporate Branding">Corporate Gifts & Engraved Wood Boxes</option>
                        <option value="3D Acrylic Signage">3D Signage & Backdrops</option>
                        <option value="Bespoke Laser Cutting">Custom Vector Laser Cutting & Engraving</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#aaa] font-semibold mb-1">
                      Project Description & Quantities *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your event date, required sizes (e.g. A1 welcome board), wording, and any preferred material (Mirror gold, matte black, wood)..."
                      className="w-full bg-[#181818] border border-white/10 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs text-[#e5e5e5] outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#DFB76C] via-[#FCEABB] to-[#C59B27] text-[#0a0a0a] font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4 text-[#0a0a0a]" />
                      <span>Submit Inquiry to Studio</span>
                    </button>

                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-semibold text-xs flex items-center justify-center space-x-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Quick WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-center text-[#666] pt-1">
                    Emails go straight to <span className="text-[#bbb]">{BUSINESS_INFO.email}</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
