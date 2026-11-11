import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, HelpCircle, Phone, Calendar } from 'lucide-react';
import { TreatmentsBento } from '../components/treatments/TreatmentsBento';
import { SymptomTriage } from '../components/quiz/SymptomTriage';
import { CLINIC_DATA } from '../data/clinicData';

interface ServicesPageProps {
  onOpenAppointment: (treatmentTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenAppointment }) => {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen">
      {/* 1. Page Header & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#061D15] to-[#0A3326] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-300/80 mb-4 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">Treatments & Specialties</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Specialist Dental Surgery & Orthodontics
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
              Specialist Treatments & Clinical Disciplines
            </h1>
            <p className="mt-4 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Every procedure at AK'S Elite Dental Clinic is executed using precision digital dentistry, hospital-grade Class-B sterilization, and personalized treatment plans in K.Pudur, Madurai.
            </p>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. Full Treatments Bento (All 8 Disciplines) */}
      <section className="py-12">
        <TreatmentsBento onOpenAppointment={onOpenAppointment} />
      </section>

      {/* 3. Interactive Symptom & Treatment Triage */}
      <section className="py-12 bg-white border-y border-emerald-950/5">
        <SymptomTriage onOpenAppointment={onOpenAppointment} />
      </section>

      {/* 4. Pricing & Transparent Care Guarantee */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-emerald-800/40">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-300">
              Transparent Treatment Planning & Consultation
            </h2>
            <p className="mt-3 text-emerald-100/80 text-sm sm:text-base leading-relaxed">
              We provide full diagnostic clarity, digital 3D scans, and written treatment estimates before initiating any procedure. No hidden costs.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-emerald-200">
              <span className="flex items-center gap-1.5">✓ 0% Interest EMI Available</span>
              <span className="flex items-center gap-1.5">✓ All Major Insurance/Cards Accepted</span>
              <span className="flex items-center gap-1.5">✓ Same-Day Emergency Relief</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenAppointment()}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
              className="px-6 py-3.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-white font-semibold text-sm transition-all border border-emerald-700/50 text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>{CLINIC_DATA.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
