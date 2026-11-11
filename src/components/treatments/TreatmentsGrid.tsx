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
  User,
  X,
  Calendar,
  Check
} from 'lucide-react';
import { CLINIC_DATA, Treatment } from '../../data/clinicData';

interface TreatmentsGridProps {
  onOpenAppointment: (treatmentTitle?: string) => void;
}

export const TreatmentsGrid: React.FC<TreatmentsGridProps> = ({ onOpenAppointment }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
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

  const filteredTreatments = activeCategory === 'all'
    ? CLINIC_DATA.treatments
    : CLINIC_DATA.treatments.filter(t => t.category === activeCategory);

  return (
    <section id="treatments" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-sans font-semibold mb-3.5 border border-emerald-300 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>SPECIALIZED CLINICAL SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-emerald-950 tracking-tight leading-tight">
            COMPREHENSIVE DENTAL & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-amber-700">
              ORTHODONTIC TREATMENTS
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-sans max-w-2xl mx-auto leading-relaxed">
            Delivering advanced digital teeth alignment, single-visit endodontics, dental implants, and aesthetic smile designing with clinical precision.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {[
            { id: 'all', label: 'All Treatments' },
            { id: 'ortho', label: 'Orthodontics & Aligners' },
            { id: 'endodontics', label: 'Root Canals & Implants' },
            { id: 'cosmetic', label: 'Cosmetic & Makeover' },
            { id: 'general', label: 'General & Preventive' },
          ].map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold font-sans transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-emerald-950 text-amber-300 border-emerald-950 shadow-md scale-105'
                  : 'bg-[#FAF8F5] text-slate-700 border-emerald-950/10 hover:border-emerald-400 hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 8 Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTreatments.map((treatment) => {
            const Icon = getTreatmentIcon(treatment.iconName);
            return (
              <div
                key={treatment.id}
                onClick={() => setModalTreatment(treatment)}
                className="p-6 rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-950/10 text-emerald-800 flex items-center justify-center shadow-2xs group-hover:bg-emerald-950 group-hover:text-amber-300 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100/70 text-emerald-950 text-[10px] font-bold uppercase tracking-wider">
                      {treatment.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-emerald-950 group-hover:text-emerald-800 transition-colors mb-2 leading-snug">
                    {treatment.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 mb-4">
                    {treatment.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200/60 text-[11px] text-slate-600 font-sans">
                    <div className="flex items-center gap-1.5 text-emerald-900 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{treatment.timeline}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <User className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{treatment.idealFor}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-emerald-800 group-hover:text-emerald-950">
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detailed Treatment Drawer / Modal */}
      {modalTreatment && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalTreatment(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-emerald-950/10 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setModalTreatment(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close treatment modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-950 text-amber-300 flex items-center justify-center">
                {React.createElement(getTreatmentIcon(modalTreatment.iconName), { className: "w-5 h-5" })}
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                  {modalTreatment.category} • AKS Elite Dental
                </span>
                <h3 className="text-xl font-bold font-display text-emerald-950">
                  {modalTreatment.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 font-sans leading-relaxed mb-6">
              {modalTreatment.fullDesc}
            </p>

            {/* Benefits */}
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-emerald-950 font-display block uppercase tracking-wide">
                Key Advantages:
              </span>
              {modalTreatment.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  const title = modalTreatment.title;
                  setModalTreatment(null);
                  onOpenAppointment(title);
                }}
                className="flex-1 py-3 px-5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-amber-300 text-xs font-bold font-sans flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Reserve Consultation</span>
              </button>

              <button
                type="button"
                onClick={() => setModalTreatment(null)}
                className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold font-sans cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
