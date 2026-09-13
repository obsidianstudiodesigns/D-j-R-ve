import React, { useState } from 'react';
import { TESTIMONIALS, FAQS, BUSINESS_INFO } from '../data/content';
import { Star, ChevronDown, ChevronUp, Quote, MessageCircle } from 'lucide-react';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0a0a0a] relative border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141414] border border-[#d4af37]/25 text-[11px] uppercase tracking-[0.2em] text-[#d4af37] mb-3">
              <span>Client Commendations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] mb-3 font-display">
              Loved by Brides & Brands
            </h2>
            <p className="text-sm text-[#999]">
              Real feedback from celebrations and corporate galas across Witbank and Mpumalanga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl bg-[#111111] border border-[#d4af37]/25 flex flex-col justify-between relative shadow-lg"
              >
                <Quote className="w-8 h-8 text-[#d4af37]/20 absolute top-6 right-6" />

                <div>
                  <div className="flex items-center space-x-1 mb-4 text-[#d4af37]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>

                  <p className="text-sm text-[#ccc] leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="font-bold text-sm text-[#f5f5f5] font-display">
                    {t.clientName}
                  </div>
                  <div className="text-xs text-[#d4af37]/90">{t.event}</div>
                  <div className="text-[11px] text-[#666]">{t.location} &bull; {t.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#f5f5f5] mb-3 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#999]">
              Everything you need to know about commissioning custom work with Déjà Rêve.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#121212] border border-white/10 overflow-hidden transition-colors hover:border-[#d4af37]/40"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between font-semibold text-sm text-[#f0f0f0] focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#d4af37] shrink-0 ml-3" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#888] shrink-0 ml-3" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#aaa] leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-[#888] mb-3">Still have questions?</p>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Hello Déjà Rêve! I have a question about custom laser orders.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#f3e5ab] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Ask our team on WhatsApp ({BUSINESS_INFO.phoneFormatted})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
