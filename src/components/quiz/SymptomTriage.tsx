import React, { useState } from 'react';
import { 
  Stethoscope, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Smile, 
  Activity, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Calendar 
} from 'lucide-react';
import { CLINIC_DATA, SymptomTriageItem } from '../../data/clinicData';

interface SymptomTriageProps {
  onOpenAppointment: (treatmentTitle?: string) => void;
}

export const SymptomTriage: React.FC<SymptomTriageProps> = ({ onOpenAppointment }) => {
  const [selectedId, setSelectedId] = useState<string>('toothache');

  const items = CLINIC_DATA.symptomTriageOptions;
  const currentItem = items.find(i => i.id === selectedId) || items[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return Zap;
      case 'ShieldCheck': return ShieldCheck;
      case 'Smile': return Smile;
      case 'Activity': return Activity;
      case 'Sparkles': return Sparkles;
      case 'Award': return Award;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="symptom-triage" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-white to-[#F9F7F3] border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-sans font-semibold mb-3.5 border border-emerald-300 shadow-2xs">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-700" />
            <span>INTERACTIVE CLINICAL TRIAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0F382C] tracking-tight leading-tight">
            WHAT DENTAL CONCERN ARE YOU <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-amber-700">
              EXPERIENCING TODAY?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-sans max-w-2xl mx-auto leading-relaxed">
            Select your symptom or dental goal below to receive an instant clinical assessment, recommended procedure protocol, and direct booking guidance.
          </p>
        </div>

        {/* Triage Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Symptom Selector Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2 px-1">
              Select Your Current Primary Concern:
            </span>

            {items.map((item) => {
              const Icon = getIcon(item.iconName);
              const isSelected = item.id === selectedId;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#0F382C] text-white border-emerald-800 shadow-lg shadow-emerald-950/15 scale-[1.01]'
                      : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-200/90'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className={`text-sm sm:text-base font-bold font-display ${isSelected ? 'text-amber-200' : 'text-[#0F382C]'}`}>
                        {item.chiefComplaint}
                      </h4>
                      <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      item.urgency === 'Immediate'
                        ? isSelected ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-rose-50 text-rose-800 border-rose-200'
                        : isSelected ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {item.urgency}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Diagnosis & Recommended Action Studio (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-3xl border border-emerald-950/15 shadow-xl p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-slate-100 pb-5">
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-3">
                  CLINICAL ASSESSMENT PROTOCOL
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F382C] leading-snug">
                  {currentItem.chiefComplaint}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans mt-2 leading-relaxed">
                  {currentItem.description}
                </p>
              </div>

              {/* Recommended Treatment Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-[#FAF8F5] border border-emerald-200/80 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-900 block">
                  Recommended Treatment Procedure:
                </span>
                <h4 className="text-sm font-bold text-[#0F382C] font-display">
                  {currentItem.recommendedSpecialty}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                  {currentItem.expectedOutcome}
                </p>
              </div>

              {/* Clinic Care Features */}
              <div className="space-y-2.5 pt-1 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Single-visit painless computerized technology available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Led by Dr. Khalidh Khan (MDS) & specialist consultants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero waiting time with scheduled appointment</span>
                </div>
              </div>

              {/* Direct Booking Trigger */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenAppointment(currentItem.recommendedSpecialty)}
                  className="w-full py-4 rounded-2xl bg-[#0F382C] hover:bg-[#184D3E] text-amber-300 font-sans font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/15 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer border border-amber-400/30"
                >
                  <span>Book Priority Appointment For This Care</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
                <span className="text-[11px] text-slate-500 block text-center mt-2">
                  Available Mon – Sat (9:30 AM – 9:00 PM) | Sun (10:30 AM – 2:00 PM)
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
