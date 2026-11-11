import React from 'react';
import { Phone, MessageSquare, Calendar, Navigation } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

interface MobileStickyBarProps {
  onOpenAppointment: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenAppointment }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-emerald-950/10 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-4 gap-2">
        
        {/* Call */}
        <a
          href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
          className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl bg-[#FAF8F5] text-slate-800 font-sans font-semibold text-[10px] active:scale-95 transition-transform border border-emerald-950/5"
        >
          <Phone className="w-4 h-4 text-emerald-700" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent("Hello AKS Elite Dental Clinic, I would like to book an appointment.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 font-sans font-semibold text-[10px] active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-emerald-700" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment */}
        <button
          type="button"
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl bg-emerald-950 text-amber-300 font-sans font-bold text-[10px] active:scale-95 transition-transform shadow-xs border border-amber-400/30"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>Book</span>
        </button>

        {/* Directions */}
        <a
          href={CLINIC_DATA.contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl bg-[#FAF8F5] text-slate-800 border border-emerald-950/5 font-sans font-semibold text-[10px] active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 text-emerald-700" />
          <span>Map</span>
        </a>

      </div>
    </div>
  );
};
