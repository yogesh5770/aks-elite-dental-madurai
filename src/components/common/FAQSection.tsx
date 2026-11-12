import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

interface FAQSectionProps {
  className?: string;
  limit?: number;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ className = '', limit }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = limit ? CLINIC_DATA.faq.slice(0, limit) : CLINIC_DATA.faq;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/10 border border-emerald-900/20 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
          Patient Questions & Answers
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#061D15]">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Clear answers about treatments, 3D scanning, single-visit root canals, pricing transparency, and consultations with Dr. Khalidh Khan (MDS) in Madurai.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `faq-panel-${idx}`;
          const headerId = `faq-header-${idx}`;

          return (
            <div
              key={faq.q}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-white border-emerald-700/40 shadow-md ring-1 ring-emerald-700/20'
                  : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                type="button"
                onClick={() => toggle(idx)}
                className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 font-serif pr-2">
                  {faq.q}
                </span>
                <span
                  className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-transform duration-300 ${
                    isOpen
                      ? 'bg-emerald-900 text-amber-300 rotate-180'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in duration-200"
                >
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Help Hotline Banner */}
      <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-800/40">
        <div>
          <h3 className="text-base font-bold font-serif text-amber-300">
            Have a specific clinical or pricing question?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-1">
            Our treatment coordinator is available on WhatsApp & phone to help you.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <a
            href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent("Hello AK's Elite Dental Clinic, I have a question regarding dental treatments.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
            className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Clinic</span>
          </a>
        </div>
      </div>
    </section>
  );
};

