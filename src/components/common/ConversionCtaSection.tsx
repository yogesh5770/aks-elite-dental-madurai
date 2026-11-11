import React from 'react';
import { Calendar, Phone, MessageSquare, Star, ArrowRight } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

interface ConversionCtaSectionProps {
  onOpenAppointment: () => void;
}

export const ConversionCtaSection: React.FC<ConversionCtaSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-emerald-950 text-white text-left relative overflow-hidden">
      
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-emerald-900/60 border border-emerald-800 shadow-2xl">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800 text-amber-300 text-xs font-semibold border border-emerald-700">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.9 ★ RATED DENTAL CLINIC IN K.PUDUR, MADURAI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Transform Your Smile with Specialist Care.
            </h2>

            <p className="text-xs sm:text-sm text-emerald-200 font-sans leading-relaxed">
              Book your consultation with Dr. Khalidh Khan or message our reception desk directly on WhatsApp.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="px-7 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent("Hello AKS Elite Dental Clinic, I would like to book a dental consultation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
              className="px-5 py-4 rounded-2xl bg-emerald-950 hover:bg-emerald-900 text-emerald-200 border border-emerald-700 font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{CLINIC_DATA.contact.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
