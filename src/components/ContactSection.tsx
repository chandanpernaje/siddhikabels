import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Building, ShieldCheck, Clock, FileSpreadsheet } from 'lucide-react';
import { COMPANY_INFO, FOUR_PRODUCTS } from '../data/websiteContent';

interface ContactSectionProps {
  preselectedBrand?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedBrand }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: preselectedBrand || 'LAPP',
    city: 'Bengaluru',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <span>Direct Commercial Engagement</span>
            <span aria-hidden="true">·</span>
            <span>Fast Turnaround</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Connect With Our Technical Sales Desk
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Contact us for product availability, technical cross-referencing, project bill of quantities (BOQ), or scheduled deliveries across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Registered Office */}
          <div className="lg:col-span-5 space-y-6">
            {/* Registered Office Card */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-2xs">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-2.5 bg-amber-500/10 text-amber-600 rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Registered Office &amp; Distribution Hub
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {COMPANY_INFO.shortName} Corporation Pvt. Ltd.
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Corporate Identity No (CIN):</span>
                  <span className="font-mono font-medium text-slate-800">{COMPANY_INFO.cin}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Operating Hours:</span>
                  <span className="font-medium text-slate-800">Mon – Sat: 9:30 AM – 6:30 PM</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-500/10 text-amber-600 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Telephonic Support</h3>
                  <div className="text-xs text-slate-500">Direct sales &amp; order inquiries</div>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-600">Mobile Desk 1:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, '')}`}
                    className="font-mono font-semibold text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    {COMPANY_INFO.phone1}
                  </a>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-600">Mobile Desk 2:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, '')}`}
                    className="font-mono font-semibold text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    {COMPANY_INFO.phone2}
                  </a>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-600">Landline:</span>
                  <a
                    href={`tel:${COMPANY_INFO.landline.replace(/\s+/g, '')}`}
                    className="font-mono font-semibold text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    {COMPANY_INFO.landline}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Desks */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-amber-500/10 text-amber-600 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Email Desks</h3>
                  <div className="text-xs text-slate-500">Send RFQs &amp; technical drawings</div>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-600">General Inquiries:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-medium text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-600">Executive Desk:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email2}`}
                    className="font-medium text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    {COMPANY_INFO.email2}
                  </a>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-600">Sales &amp; Quotations:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.emailSales}`}
                    className="font-medium text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    {COMPANY_INFO.emailSales}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive RFQ Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Official Request For Quotation (RFQ)
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Inquire For LAPP, EATON, MENNEKES &amp; PARTEX
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Provide your requirements below. Our commercial team will prepare itemized pricing and inventory availability within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Quotation Request Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your inquiry for{' '}
                    <span className="text-amber-400 font-semibold">{formData.product}</span> has been forwarded to our Bengaluru desk at{' '}
                    <span className="text-slate-200">sales@siddhikabel.com</span>. We will follow up with formal pricing and datasheets shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        product: 'LAPP',
                        city: 'Bengaluru',
                        message: '',
                      });
                    }}
                    className="mt-4 px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Company / Firm Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Precision Automation Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Product of Interest *
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="LAPP">LAPP - Cables, Glands &amp; Connectors</option>
                        <option value="EATON">EATON - Switchgears &amp; Motor Control</option>
                        <option value="MENNEKES">MENNEKES - CEE Plugs &amp; Sockets</option>
                        <option value="PARTEX">PARTEX - Wire &amp; Cable Marking</option>
                        <option value="All 4 Products / Multiple Brands">Multiple / All 4 Brands</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Location / Delivery City
                      </label>
                      <input
                        type="text"
                        placeholder="Bengaluru, Chennai, Pune, etc."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Technical Specifications, Part Numbers or Quantities
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Please specify cable cross-sections, amperage, part numbers, quantity, or project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Zero spam · Strictly confidential commercial RFQ</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-75 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Quotation Request'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
