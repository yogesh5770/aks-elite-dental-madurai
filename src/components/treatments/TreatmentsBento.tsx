import React, { useState } from 'react';
import { 
  Sparkles, 
  Smile, 
  Zap, 
  ShieldCheck, 
  HeartHandshake, 
  Activity, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  X, 
  Calendar,
  Check
} from 'lucide-react';
import { CLINIC_DATA, Treatment } from '../../data/clinicData';

interface TreatmentsBentoProps {
  onOpenAppointment: (treatmentTitle?: string) => void;
}

export const TreatmentsBento: React.FC<TreatmentsBentoProps> = ({ onOpenAppointment }) => {
  const [modalTreatment, setModalTreatment] = useState<Treatment | null>(null);

  const getTreatmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Smile': return Smile;
      case 'Zap': return Zap;
      case 'ShieldCheck': return ShieldCheck;
      case 'HeartHandshake': return HeartHandshake;
      case 'Activity': return Activity;
      case 'Award': return Award;
      default: return CheckCircle2;
    }
  };

  const treatments = CLINIC_DATA.treatments;

  return (
    <section id="treatments" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-sans font-semibold mb-3.5 border border-emerald-300 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>CLINICAL DENTAL SPECIALTIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0F382C] tracking-tight leading-tight">
            COMPREHENSIVE MULTI-SPECIALITY <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-amber-700">
              CLINICAL PORTFOLIO
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-sans max-w-2xl mx-auto leading-relaxed">
            Delivering the complete spectrum of advanced dental surgery, nerve preservation, lifetime implantology, 3D invisible orthodontics, and pediatric care with hospital-grade sterilization in K.Pudur, Madurai.
          </p>
        </div>

        {/* Asymmetric Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Single-Visit Rotary RCT (Large 2-column span on LG) */}
          <div
            onClick={() => setModalTreatment(treatments[0])}
            className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F382C] via-[#144838] to-[#0a271f] text-white border border-emerald-800 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center border border-emerald-700 shadow-inner group-hover:scale-105 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                  ★ Acute Pain Relief Suite
                </span>
              </div>

              <span className="text-xs font-bold text-amber-300 font-display uppercase tracking-widest block mb-1">
                Motorized Rotary Endodontics
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-amber-300 transition-colors mb-3">
                {treatments[0].title}
              </h3>

              <p className="text-sm text-emerald-100 font-sans leading-relaxed max-w-2xl mb-6">
                {treatments[0].fullDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-200 font-sans">
                {treatments[0].benefits.slice(0, 4).map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-800 flex items-center justify-between text-xs font-bold text-amber-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Duration: {treatments[0].timeline}</span>
              </div>
              <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Clinical Protocol</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: Dental Implants & Zirconia Crowns */}
          <div
            onClick={() => setModalTreatment(treatments[1])}
            className="p-8 rounded-3xl bg-[#F4EFEA] border border-emerald-950/10 hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-950/10 text-emerald-800 flex items-center justify-center group-hover:bg-[#0F382C] group-hover:text-amber-300 transition-colors shadow-2xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#0F382C] text-[10px] font-bold uppercase">
                  Permanent Replacement
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-[#0F382C] group-hover:text-emerald-800 transition-colors mb-2">
                {treatments[1].title}
              </h3>

              <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 mb-4">
                {treatments[1].shortDesc}
              </p>

              <div className="space-y-1.5 text-xs text-slate-600 font-sans">
                <div className="flex items-center gap-1.5 text-emerald-900 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{treatments[1].timeline}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>Explore Implants Protocol</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Invisalign & Clear Aligners (Large 2-column span on LG) */}
          <div
            onClick={() => setModalTreatment(treatments[2])}
            className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#123028] via-[#194036] to-[#0d261f] text-white border border-teal-800 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-teal-300 flex items-center justify-center border border-teal-700 shadow-inner group-hover:scale-105 transition-transform">
                  <Sparkles className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-teal-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                  ★ 3D Digital Alignment
                </span>
              </div>

              <span className="text-xs font-bold text-teal-300 font-display uppercase tracking-widest block mb-1">
                Zero Putty • iTero Optical Scanner
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-teal-300 transition-colors mb-3">
                {treatments[2].title}
              </h3>

              <p className="text-sm text-teal-100 font-sans leading-relaxed max-w-2xl mb-6">
                {treatments[2].fullDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-teal-200 font-sans">
                {treatments[2].benefits.slice(0, 4).map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-teal-800 flex items-center justify-between text-xs font-bold text-teal-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Timeline: {treatments[2].timeline}</span>
              </div>
              <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Digital Aligner Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 4: Smile Makeover & Teeth Whitening */}
          <div
            onClick={() => setModalTreatment(treatments[3])}
            className="p-8 rounded-3xl bg-[#F4EFEA] border border-emerald-950/10 hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-950/10 text-emerald-800 flex items-center justify-center group-hover:bg-[#0F382C] group-hover:text-amber-300 transition-colors shadow-2xs">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-950 text-[10px] font-bold uppercase">
                  Aesthetic Glow
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-[#0F382C] group-hover:text-emerald-800 transition-colors mb-2">
                {treatments[3].title}
              </h3>

              <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 mb-4">
                {treatments[3].shortDesc}
              </p>

              <div className="space-y-1.5 text-xs text-slate-600 font-sans">
                <div className="flex items-center gap-1.5 text-rose-900 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                  <span>{treatments[3].timeline}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>Explore Cosmetic Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Ultrasonic Scaling & Gum Therapy */}
          <div
            onClick={() => setModalTreatment(treatments[4])}
            className="p-8 rounded-3xl bg-[#F4EFEA] border border-emerald-950/10 hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-950/10 text-emerald-800 flex items-center justify-center group-hover:bg-[#0F382C] group-hover:text-amber-300 transition-colors shadow-2xs">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-950 text-[10px] font-bold uppercase">
                  Gum Wellness
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-[#0F382C] group-hover:text-emerald-800 transition-colors mb-2">
                {treatments[4].title}
              </h3>

              <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 mb-4">
                {treatments[4].shortDesc}
              </p>

              <div className="space-y-1.5 text-xs text-slate-600 font-sans">
                <div className="flex items-center gap-1.5 text-indigo-900 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
                  <span>{treatments[4].timeline}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>Learn About Periodontics</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Pediatric Kids Dental Care */}
          <div
            onClick={() => setModalTreatment(treatments[5])}
            className="p-8 rounded-3xl bg-[#F4EFEA] border border-emerald-950/10 hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-950/10 text-emerald-800 flex items-center justify-center group-hover:bg-[#0F382C] group-hover:text-amber-300 transition-colors shadow-2xs">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-950 text-[10px] font-bold uppercase">
                  Children Care
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-[#0F382C] group-hover:text-emerald-800 transition-colors mb-2">
                {treatments[5].title}
              </h3>

              <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 mb-4">
                {treatments[5].shortDesc}
              </p>

              <div className="space-y-1.5 text-xs text-slate-600 font-sans">
                <div className="flex items-center gap-1.5 text-amber-900 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{treatments[5].timeline}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>View Pediatric Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 7: Painless Wisdom Tooth Extractions */}
          <div
            onClick={() => setModalTreatment(treatments[6])}
            className="p-8 rounded-3xl bg-[#F4EFEA] border border-emerald-950/10 hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-950/10 text-emerald-800 flex items-center justify-center group-hover:bg-[#0F382C] group-hover:text-amber-300 transition-colors shadow-2xs">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-slate-200 text-slate-900 text-[10px] font-bold uppercase">
                  Oral Surgery
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-[#0F382C] group-hover:text-emerald-800 transition-colors mb-2">
                {treatments[6].title}
              </h3>

              <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 mb-4">
                {treatments[6].shortDesc}
              </p>

              <div className="space-y-1.5 text-xs text-slate-600 font-sans">
                <div className="flex items-center gap-1.5 text-slate-900 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <span>{treatments[6].timeline}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>Surgery Protocol</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>

      {/* Clinical Procedure Deep-Dive Modal */}
      {modalTreatment && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setModalTreatment(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-emerald-950/10 relative text-left space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalTreatment(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-10">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-semibold">
                {modalTreatment.tag}
              </span>
              <h3 className="text-2xl font-bold font-display text-[#0F382C]">
                {modalTreatment.title}
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Timeline: {modalTreatment.timeline} • Ideal For: {modalTreatment.idealFor}
              </p>
            </div>

            {/* Detailed Description */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-950/5">
              <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                {modalTreatment.fullDesc}
              </p>
            </div>

            {/* Key Clinical Benefits */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 font-display uppercase tracking-wider">
                Clinical Highlights & Outcomes:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-sans">
                {modalTreatment.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setModalTreatment(null)}
                className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  const title = modalTreatment.title;
                  setModalTreatment(null);
                  onOpenAppointment(title);
                }}
                className="px-6 py-3 rounded-xl bg-[#0F382C] hover:bg-[#184D3E] text-amber-300 text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Reserve Consultation</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
