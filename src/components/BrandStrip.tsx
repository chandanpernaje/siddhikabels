import React from 'react';
import { CLIENT_LOGOS } from '../data/websiteContent';

export const BrandStrip: React.FC = () => {
  return (
    <section className="py-10 bg-slate-100/80 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Trusted By Leading Public & Private Industrial Corporations
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 sm:gap-6 items-center">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-2.5 bg-white border border-slate-200/90 rounded-lg shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all h-16 group"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-9 max-w-full object-contain filter grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
