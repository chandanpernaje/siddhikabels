import React, { useState } from 'react';
import { X, Check, ShieldCheck, Mail, Send, CheckCircle2, Download, Building, ArrowRight } from 'lucide-react';
import { ProductBrand, COMPANY_INFO } from '../data/websiteContent';

interface ProductDetailModalProps {
  brand: ProductBrand | null;
  onClose: () => void;
  onRequestQuote: (brandName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  brand,
  onClose,
  onRequestQuote,
}) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
  });

  if (!brand) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 px-2 py-1 bg-slate-50 border border-slate-200 rounded flex items-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-7 max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">{brand.country}</div>
              <h3 className="text-base font-bold text-slate-950 leading-tight">
                {brand.name} Specification &amp; Product Lines
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Top Banner with Image and Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-7">
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                Authorized Distribution Partner
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-1">
                {brand.tagline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {brand.description}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200 space-y-1.5">
                {brand.keyHighlights.map((hl, i) => (
                  <div key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full Category Breakdowns */}
          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Complete {brand.name} Product Range Handled by Siddhi Kabel
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brand.categories.map((cat, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="text-xs font-bold text-slate-900 mb-2">
                    {cat.title}
                  </div>
                  <ul className="space-y-1">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-amber-500 select-none">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Quick Inquiry Form for this Brand */}
          <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800">
            {inquirySent ? (
              <div className="py-4 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h6 className="text-sm font-bold text-white">Inquiry Received for {brand.name}</h6>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Our technical sales desk at Banashankari, Bengaluru will review your specifications and contact you shortly with catalog sheets and pricing.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-3 text-xs text-amber-400 underline hover:text-amber-300"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Instant Price &amp; Stock Inquiry · {brand.name}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Bangalore Stock</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name / Company"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Official Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    required
                    placeholder={`Mention part numbers, sizes, or application (e.g. ${brand.categories[0].items[0]})...`}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400">
                    Direct phone desk: {COMPANY_INFO.phone1}
                  </span>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Submit {brand.name} Inquiry</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex items-center justify-between text-xs text-slate-500">
          <span>CIN: {COMPANY_INFO.cin}</span>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(brand.name);
            }}
            className="font-semibold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1"
          >
            <span>Proceed to Formal RFQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
