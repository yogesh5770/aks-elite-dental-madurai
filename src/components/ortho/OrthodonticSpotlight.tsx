import React, { useState } from 'react';
import { Sparkles, Smile, CheckCircle2, ArrowRight, ShieldCheck, Zap, Laptop } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

interface OrthodonticSpotlightProps {
  onOpenAppointment: (treatment?: string) => void;
}

export const OrthodonticSpotlight: React.FC<OrthodonticSpotlightProps> = ({ onOpenAppointment }) => {
  const [selectedOrthoType, setSelectedOrthoType] = useState<'aligners' | 'braces'>('aligners');

  const roadmapSteps = [
    {
      num: "01",
      title: "iTero 3D Intraoral Scan",
      desc: "Fast, zero-mess optical digital impression capturing 6,000 frames per second."
    },
    {
      num: "02",
      title: "MDS Biomechanical Plan",
      desc: "Dr. Khalidh Khan customizes teeth movement vectors for facial symmetry."
    },
    {
      num: "03",
      title: "Custom Trays / Brackets",
      desc: "Fabricated from medical-grade transparent polymers or ceramic aesthetic brackets."
    },
    {
      num: "04",
      title: "Retained Flawless Smile",
      desc: "Long-term stabilization retainers to preserve your newly perfected alignment."
    }
  ];

  return (
    <section id="orthodontics" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Orthodontic Container */}
        <div className="rounded-3xl bg-[#0F382C] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-emerald-800">
          
          {/* Subtle Ambient Decorative Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Digital Orthodontics Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900 text-amber-300 text-xs font-sans font-semibold border border-emerald-700">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>3D DIGITAL ORTHODONTICS & INVISALIGN STUDIO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                Straighten Your Teeth Without Changing Your Lifestyle.
              </h2>

              <p className="text-sm sm:text-base text-emerald-100 font-sans leading-relaxed">
                As a specialized MDS Orthodontist, <strong className="text-amber-300 font-bold">Dr. Khalidh Khan</strong> customizes teeth straightening using advanced 3D iTero digital planning, offering invisible clear aligners and ceramic aesthetic brackets.
              </p>

              {/* Toggle Selector */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-emerald-900/90 border border-emerald-700/80 w-fit">
                <button
                  type="button"
                  onClick={() => setSelectedOrthoType('aligners')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold font-sans transition-all cursor-pointer ${
                    selectedOrthoType === 'aligners'
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'text-emerald-200 hover:text-white'
                  }`}
                >
                  Invisalign & Clear Aligners
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedOrthoType('braces')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold font-sans transition-all cursor-pointer ${
                    selectedOrthoType === 'braces'
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'text-emerald-200 hover:text-white'
                  }`}
                >
                  Ceramic & Metallic Braces
                </button>
              </div>

              {/* Comparison Details Box */}
              {selectedOrthoType === 'aligners' ? (
                <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/60 space-y-3">
                  <h3 className="text-lg font-bold font-display text-white">
                    Why Choose Clear Aligners with Dr. Khalidh Khan?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-emerald-100 font-sans">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>100% Removable for meals & photos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>Zero wire cuts or emergency visits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>iTero 3D digital outcome simulation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>Fewer in-clinic adjustment visits</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-700/60 space-y-3">
                  <h3 className="text-lg font-bold font-display text-white">
                    Why Choose Ceramic & Metal Braces?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-emerald-100 font-sans">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>Ideal for severe bite & skeletal corrections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>Tooth-colored ceramic brackets blend naturally</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>Continuous 24/7 alignment biomechanics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                      <span>Economical, budget-friendly installment options</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenAppointment(selectedOrthoType === 'aligners' ? "Invisalign Clear Aligners Consultation" : "Orthodontic Braces Consultation")}
                  className="px-7 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Book Orthodontic Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent("Hello Dr. Khalidh Khan, I would like to inquire about Invisalign & Orthodontic Braces.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-2xl bg-emerald-900 hover:bg-emerald-800 text-emerald-200 border border-emerald-700 font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Column: Uncropped Doctor with iTero Scanner (Natural 3:4 aspect, full view) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden bg-white/10 p-2.5 border border-emerald-700 shadow-2xl group">
                <div className="rounded-2xl overflow-hidden aspect-3/4 bg-slate-900">
                  <img
                    src="/clinic-photos/itero_dr_khalidh_suit.webp"
                    alt="Dr. Khalidh Khan with iTero 3D Scanner at AK's Elite Dental Clinic"
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay Details */}
                <div className="p-3.5 bg-emerald-950/95 backdrop-blur-md rounded-xl mt-2 border border-emerald-800 text-white flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold font-display text-amber-300 block">
                      Dr. Khalidh Khan, MDS
                    </span>
                    <span className="text-[10px] text-emerald-200 font-sans">
                      With iTero 3D Digital Intraoral Scanner
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-900 text-amber-300 text-[10px] font-mono font-bold border border-emerald-700">
                    3D Scan
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* 4-Step 3D Smile Alignment Roadmap */}
          <div className="mt-14 pt-12 border-t border-emerald-800">
            <div className="text-center mb-8">
              <span className="text-xs font-sans font-bold text-amber-300 uppercase tracking-wider block mb-1">
                STEP-BY-STEP ORTHODONTIC JOURNEY
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                How Your 3D Smile Transformation Works
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {roadmapSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-5 rounded-2xl bg-emerald-900/50 border border-emerald-700/60 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-black font-display text-amber-300 block mb-2">
                      {step.num}
                    </span>
                    <h4 className="text-sm font-bold font-display text-white mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-emerald-100/80 font-sans leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
