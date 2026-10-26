import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteContent';

interface NavbarProps {
  onRequestQuote: (brandPref?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#video-banner' },
    { label: 'About Us', href: '#transforming-industry' },
    { label: 'Products (4 Brands)', href: '#products' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow">
      {/* Top utility contact bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-medium hidden md:inline">
              {COMPANY_INFO.tagline}
            </span>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone1.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors tabular-nums"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 zones (Brand wordmark, Nav links, 1 Primary CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Exact Original Logo */}
        <a href="#video-banner" className="flex items-center shrink-0 group">
          <img
            src="/images/logo.png"
            alt="Siddhi Kabel Corporation Pvt Ltd"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: 5 single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap hover:text-amber-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onRequestQuote()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:scale-[0.98] transition-all whitespace-nowrap shadow-sm hover:shadow"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Request Quote
            </button>
            <div className="text-xs text-slate-500 pt-2 flex flex-col gap-1.5 px-3">
              <span className="font-semibold text-slate-700">{COMPANY_INFO.phone1}</span>
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
