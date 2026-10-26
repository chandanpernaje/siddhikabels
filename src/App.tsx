/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { VideoHeroBanner } from './components/VideoHeroBanner';
import { Hero } from './components/Hero';
import { BrandStrip } from './components/BrandStrip';
import { ProductsSection } from './components/ProductsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { ProductBrand, FOUR_PRODUCTS } from './data/websiteContent';

export default function App() {
  const [activeBrandId, setActiveBrandId] = useState<string>('lapp');
  const [selectedBrandModal, setSelectedBrandModal] = useState<ProductBrand | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteBrandPref, setQuoteBrandPref] = useState<string>('LAPP');

  const handleOpenQuoteModal = (brandPref?: string) => {
    if (brandPref) {
      setQuoteBrandPref(brandPref);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectBrand = (brandId: string) => {
    setActiveBrandId(brandId);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBrandDetails = (brand: ProductBrand) => {
    setSelectedBrandModal(brand);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Navbar */}
      <Navbar onRequestQuote={() => handleOpenQuoteModal()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Full-width Video Showcase Banner scrolling after each minute */}
        <VideoHeroBanner
          onSelectBrand={handleSelectBrand}
          onOpenBrandDetails={handleOpenBrandDetails}
          onRequestQuote={(brandName) => handleOpenQuoteModal(brandName)}
        />

        {/* Transforming Indian Industry Section */}
        <Hero
          onRequestQuote={() => handleOpenQuoteModal()}
          onSelectBrand={handleSelectBrand}
        />

        {/* Client Logos Strip */}
        <BrandStrip />

        {/* 4 Products Section: LAPP, EATON, MENNEKES, PARTEX */}
        <ProductsSection
          activeBrandId={activeBrandId}
          onSelectBrand={(id) => setActiveBrandId(id)}
          onOpenBrandDetails={handleOpenBrandDetails}
          onRequestQuote={(brandName) => handleOpenQuoteModal(brandName)}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Contact Coordinates & RFQ Form */}
        <ContactSection preselectedBrand={quoteBrandPref} />
      </main>

      {/* Footer */}
      <Footer
        onSelectBrand={handleSelectBrand}
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Modals */}
      <ProductDetailModal
        brand={selectedBrandModal}
        onClose={() => setSelectedBrandModal(null)}
        onRequestQuote={(brandName) => {
          setSelectedBrandModal(null);
          handleOpenQuoteModal(brandName);
        }}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        initialBrand={quoteBrandPref}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
