import React, { useState } from 'react';
import { ArrowUpRight, Check, ExternalLink, ShieldCheck, Sparkles, ChevronRight, FileText } from 'lucide-react';
import { FOUR_PRODUCTS, ProductBrand } from '../data/websiteContent';

interface ProductsSectionProps {
  activeBrandId: string;
  onSelectBrand: (brandId: string) => void;
  onOpenBrandDetails: (brand: ProductBrand) => void;
  onRequestQuote: (brandName?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  activeBrandId,
  onSelectBrand,
  onOpenBrandDetails,
  onRequestQuote,
}) => {
  const currentBrand = FOUR_PRODUCTS.find((p) => p.id === activeBrandId) || FOUR_PRODUCTS[0];

  return (
    <section id="products" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <span>Specialized Distribution</span>
            <span aria-hidden="true">·</span>
            <span>4 Premier Product Lines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Engineered For Extreme Reliability: LAPP, EATON, MENNEKES &amp; PARTEX
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Siddhi Kabel provides comprehensive technical assistance, stocking, and direct distribution for four world-class manufacturing partners. Every item is 100% genuine, factory-tested, and fully compliant with international industrial standards.
          </p>
        </div>

        {/* 4 Brand Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-1.5 bg-slate-100 rounded-xl mb-10 border border-slate-200">
          {FOUR_PRODUCTS.map((brand) => {
            const isActive = brand.id === currentBrand.id;
            return (
              <button
                key={brand.id}
                onClick={() => onSelectBrand(brand.id)}
                className={`flex items-center justify-between p-3.5 rounded-lg transition-all text-left ${
                  isActive
                    ? 'bg-white text-slate-950 shadow-sm border border-slate-200/90'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/50'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-7 flex items-center justify-center shrink-0 bg-slate-50 border border-slate-200 rounded p-0.5">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="truncate">
                    <div className="text-sm font-bold truncate">{brand.name}</div>
                    <div className="text-[11px] text-slate-500 truncate">{brand.country}</div>
                  </div>
                </div>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Marquee Featured Brand Spotlight */}
        <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-slate-50/70 shadow-2xs mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left: Product Image & Brand Header */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="h-12 flex items-center p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                    <img
                      src={currentBrand.logo}
                      alt={currentBrand.name}
                      className="max-h-8 max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 font-medium">Headquarters</span>
                    <div className="text-xs font-semibold text-slate-800">{currentBrand.country}</div>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] bg-white group">
                  <img
                    src={currentBrand.image}
                    alt={`${currentBrand.name} Industrial Solutions`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    Genuine Distribution
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-4">
                  {currentBrand.tagline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {currentBrand.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex flex-wrap gap-3">
                <button
                  onClick={() => onRequestQuote(currentBrand.name)}
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-sm transition-all flex items-center gap-1.5 active:scale-[0.98]"
                >
                  <span>Request {currentBrand.name} Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenBrandDetails(currentBrand)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-600" />
                  <span>View Technical Specs</span>
                </button>
              </div>
            </div>

            {/* Right: Technical Product Categories Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Product Lines &amp; Technical Families
                  </span>
                  <span className="text-xs text-slate-500">
                    Available from Bangalore Buffer Stock
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentBrand.categories.map((cat, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white border border-slate-200/90 rounded-xl shadow-2xs hover:border-slate-300 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>{cat.title}</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {cat.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="text-xs text-slate-600 flex items-start gap-1.5 leading-snug"
                          >
                            <span className="text-slate-400 select-none mt-0.5">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Key Quality Highlights */}
                <div className="mt-5 p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl">
                  <div className="text-xs font-bold text-amber-900 mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Technical &amp; Statutory Certifications</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentBrand.keyHighlights.map((hl, i) => (
                      <div key={i} className="text-[11px] text-amber-950 flex items-start gap-1 leading-tight">
                        <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Direct Import &amp; Authorized Channel Partner for South India</span>
                <span className="font-mono">ISO 9001:2015 Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Products Comparative Matrix Grid */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              Overview of All 4 Authorized Brands
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Click any brand below to inspect detailed capabilities and request exact pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOUR_PRODUCTS.map((brand) => (
              <div
                key={brand.id}
                onClick={() => onOpenBrandDetails(brand)}
                className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  brand.id === currentBrand.id
                    ? 'border-amber-500 bg-amber-50/20 shadow-md ring-1 ring-amber-500'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="h-8 max-w-[120px] flex items-center">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-full max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 font-mono">
                      {brand.country.split(',')[1]?.trim() || brand.country}
                    </span>
                  </div>

                  <div className="rounded-lg overflow-hidden border border-slate-200 mb-3 aspect-[16/10] bg-slate-100">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {brand.name}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-snug">
                    {brand.tagline}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-700 mb-1.5">Key Offerings:</div>
                    <ul className="space-y-1">
                      {brand.categories.slice(0, 3).map((cat, i) => (
                        <li key={i} className="text-[11px] text-slate-500 truncate flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-slate-400" />
                          <span>{cat.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-600 group-hover:text-amber-700">
                  <span>Explore Catalog</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
