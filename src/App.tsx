import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { MaterialsAndProcess } from './components/MaterialsAndProcess';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ServiceItem, PortfolioItem } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  const handleOpenGeneralQuote = () => {
    setSelectedService(null);
    setSelectedPortfolioItem(null);
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setSelectedPortfolioItem(null);
    setIsQuoteModalOpen(true);
  };

  const handleInquirePortfolioItem = (item: PortfolioItem) => {
    setSelectedPortfolioItem(item);
    setSelectedService(null);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#e5e5e5] flex flex-col selection:bg-[#d4af37]/30 selection:text-[#f3e5ab]">
      {/* Top Luxury Navigation */}
      <Navbar onOpenQuoteModal={handleOpenGeneralQuote} />

      {/* Main Experience Layout */}
      <main className="flex-1">
        {/* Hero Landing Stage */}
        <Hero onOpenQuoteModal={handleOpenGeneralQuote} />

        {/* Specialized Laser Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Filterable Portfolio Showcase */}
        <PortfolioGallery onInquireItem={handleInquirePortfolioItem} />

        {/* Materials Science & 5-Step Workflow */}
        <MaterialsAndProcess />

        {/* Verified Testimonials & FAQ */}
        <TestimonialsAndFaq />

        {/* Witbank Studio Physical Location & Contact */}
        <ContactSection />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating Order / Quote Modal */}
      <OrderModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefillService={selectedService}
        prefillPortfolioItem={selectedPortfolioItem}
      />

      {/* Mobile Sticky Quick Navigation Bar */}
      <MobileQuickBar onOpenQuoteModal={handleOpenGeneralQuote} />
    </div>
  );
}
