import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { COMPANY_INFO, FOUR_PRODUCTS } from '../data/websiteContent';

interface HeroProps {
  onRequestQuote: (brandPref?: string) => void;
  onSelectBrand: (brandId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onSelectBrand }) => {
  return (
    <section id="transforming-industry" className="relative pt-12 sm:pt-16 pb-16 bg-white overflow-hidden border-b border-slate-200">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500 mb-4 uppercase">
              <span>{COMPANY_INFO.kicker}</span>
              <span aria-hidden="true" className="text-amber-500 font-bold">/</span>
              <span className="text-amber-600 font-medium">Est. 2008 · Bengaluru</span>
            </div>

            {/* Dominant Headline (no orphan wrap) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] text-balance mb-5">
              Transforming <span className="text-amber-600">Indian Industry</span> With Innovative Products
            </h1>

            {/* Authentic Subheadline & Description */}
            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed mb-4">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
              {COMPANY_INFO.aboutExcerpt}
            </p>

            {/* The 4 Products Quick Switch Strip */}
            <div className="mb-8 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-amber-600" />
                <span>Authorized Distribution · 4 Core Brands</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {FOUR_PRODUCTS.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => onSelectBrand(brand.id)}
                    className="flex flex-col items-start p-2.5 bg-white border border-slate-200/80 rounded-lg hover:border-amber-500 hover:shadow-sm text-left transition-all group"
                  >
                    <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors flex items-center justify-between w-full">
                      {brand.name}
                      <ChevronRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-[11px] text-slate-500 truncate w-full mt-0.5">
                      {brand.id === 'lapp' && 'Cables & Glands'}
                      {brand.id === 'eaton' && 'Switchgear & Breakers'}
                      {brand.id === 'mennekes' && 'CEE Plugs & Sockets'}
                      {brand.id === 'partex' && 'Wire Marking Systems'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onRequestQuote()}
                className="px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-sm hover:shadow active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Request B2B Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#products"
                className="px-6 py-3 text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Explore 4 Products
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-500 ml-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Genuine Origin & Statutory Compliance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 aspect-[4/3] lg:aspect-auto lg:h-[460px] group">
              <img
                src="/images/hero_industrial_facility_1792987893482.jpg"
                alt="Siddhi Kabel Industrial Automation and Electrical Solutions"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* In-image caption / brand lockup */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                  <span>Bengaluru Facility & National Supply Chain</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold leading-snug text-white">
                  Industrial Cables, Switchgears & Automated Electrical Systems
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Serving Machine Tools, Aerospace, Automotive, Process and Manufacturing Industries across India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Statistics Strip (full width row below hero) */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tabular-nums">
              {COMPANY_INFO.yearsExperience}
            </div>
            <div className="text-xs font-semibold text-slate-900 mt-0.5">Years Experience</div>
            <div className="text-xs text-slate-500 mt-0.5">Founded in 2008 by industry veterans</div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tabular-nums">
              {COMPANY_INFO.yearsPresence}
            </div>
            <div className="text-xs font-semibold text-slate-900 mt-0.5">Industry Presence</div>
            <div className="text-xs text-slate-500 mt-0.5">Decades of multi-vertical expertise</div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-mono tabular-nums">
              4 Brands
            </div>
            <div className="text-xs font-semibold text-slate-900 mt-0.5">Focused Portfolio</div>
            <div className="text-xs text-slate-500 mt-0.5">LAPP · EATON · MENNEKES · PARTEX</div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tabular-nums">
              {COMPANY_INFO.customersServed}
            </div>
            <div className="text-xs font-semibold text-slate-900 mt-0.5">Customers Served</div>
            <div className="text-xs text-slate-500 mt-0.5">Automotive, aerospace & machine tools</div>
          </div>
        </div>
      </div>
    </section>
  );
};
