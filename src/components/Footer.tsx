import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, FOUR_PRODUCTS } from '../data/websiteContent';

interface FooterProps {
  onSelectBrand: (brandId: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectBrand, onRequestQuote }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block p-2 bg-white rounded-lg shadow-sm">
              <img
                src="/images/logo.png"
                alt="Siddhi Kabel Corporation Pvt Ltd"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {COMPANY_INFO.name} is one of the leading and reliable suppliers of world-class Industrial Electrical, Automation &amp; Safety Products. Established in 2008 by industry veterans.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1 font-mono">
              <div>CIN: {COMPANY_INFO.cin}</div>
              <div>GST &amp; Statutory Compliant B2B Distribution</div>
            </div>
          </div>

          {/* Col 2: The 4 Authorized Products */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              The 4 Authorized Brands
            </h4>
            <ul className="space-y-2 text-xs">
              {FOUR_PRODUCTS.map((brand) => (
                <li key={brand.id}>
                  <button
                    onClick={() => {
                      onSelectBrand(brand.id);
                      const el = document.getElementById('products');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between w-full group py-0.5"
                  >
                    <span>{brand.name}</span>
                    <span className="text-[11px] text-slate-400 group-hover:text-amber-300 font-mono">
                      {brand.country.split(',')[1]?.trim() || brand.country}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>Request B2B Catalog Sheets</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#video-banner" className="text-slate-400 hover:text-white transition-colors">
                  Home (Video Showcase)
                </a>
              </li>
              <li>
                <a href="#transforming-industry" className="text-slate-400 hover:text-white transition-colors">
                  Transforming Indian Industry
                </a>
              </li>
              <li>
                <a href="#products" className="text-slate-400 hover:text-white transition-colors">
                  Products (4 Brands)
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-slate-400 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Registered Office
            </h4>
            <div className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>

            <div className="pt-2 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-slate-300 font-mono">{COMPANY_INFO.phone1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-slate-300 font-mono">{COMPANY_INFO.phone2}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2020 Siddhi Kabel. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-[11px] text-slate-400">
            Authorised Distributors, Importers and Integrators of Industrial Electrical, Automation &amp; Safety Products.
          </div>
        </div>
      </div>
    </footer>
  );
};
