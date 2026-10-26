import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, Award, Users, Boxes, FileCheck2, Scale } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/websiteContent';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    '01': <Boxes className="w-5 h-5 text-amber-600" />,
    '02': <Award className="w-5 h-5 text-amber-600" />,
    '03': <CheckCircle2 className="w-5 h-5 text-amber-600" />,
    '04': <Users className="w-5 h-5 text-amber-600" />,
    '05': <Clock className="w-5 h-5 text-amber-600" />,
    '06': <ShieldCheck className="w-5 h-5 text-amber-600" />,
    '07': <FileCheck2 className="w-5 h-5 text-amber-600" />,
    '08': <Scale className="w-5 h-5 text-amber-600" />,
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
            <span>The Siddhi Kabel Commitment</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2008</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Why Leading Industrial Enterprises Choose Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            For many customers Siddhi Kabel is more than a supplier — we combine superior product offerings with unparalleled technical support, supply chain logistics, and dedicated buffer inventory.
          </p>
        </div>

        {/* 8 Points Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.number}
              className="p-6 bg-white border border-slate-200/90 rounded-xl shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {item.number}
                  </span>
                  <div className="p-2 bg-amber-50 rounded-lg">
                    {iconMap[item.number]}
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verified Industry Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-12 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Prompt Dispatches Across India
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white mt-1">
              Need customer-specific inventory or scheduled call-off deliveries?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Our Bangalore central warehouse maintains dedicated buffer stocks for regular OEM clients to guarantee zero machine downtime.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
            >
              Consult Our Technical Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
