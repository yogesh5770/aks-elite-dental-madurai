import React from 'react';
import { Sparkles, ShieldCheck, HeartPulse, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenAppointment: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAppointment }) => {
  const pillars = [
    {
      icon: Sparkles,
      title: "3D Digital Orthodontics",
      subtitle: "Aligners & Braces",
      desc: "Advanced computerized treatment planning for invisible clear aligners and precision ceramic braces ensuring optimal aesthetic outcomes."
    },
    {
      icon: HeartPulse,
      title: "Painless Endodontic Care",
      subtitle: "Single-Sitting RCT",
      desc: "Motorized rotary root canal technology that eliminates pain and preserves natural teeth in a single comfortable session."
    },
    {
      icon: ShieldCheck,
      title: "Hospital-Grade Autoclaving",
      subtitle: "100% Sterile Protocol",
      desc: "Strict multi-barrier infection control and high-pressure steam autoclaving for every dental instrument and tray."
    },
    {
      icon: Award,
      title: "Transparent & Affordable Care",
      subtitle: "Honest Dentistry",
      desc: "Upfront explanations with clear treatment stages, zero hidden costs, and accessible pricing for all patients in Madurai."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-sans font-semibold mb-3.5 border border-emerald-300 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>EXCELLENCE IN PATIENT-CENTRIC DENTISTRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-emerald-950 tracking-tight leading-tight">
            ABOUT AKS ELITE DENTAL CLINIC
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-sans max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to deliver boutique, high-precision orthodontic and dental care in K.Pudur, Madurai. Led by Dr. Khalidh Khan, we combine modern dental machinery with gentle, compassionate care.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Clinic Entrance Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-emerald-950/10 shadow-2xl p-2.5 group">
              <div className="rounded-2xl overflow-hidden aspect-4/3 sm:aspect-16/12 lg:aspect-4/3">
                <img
                  src="/clinic-photos/aks_real_04.webp"
                  alt="AK's Elite Dental Clinic Official Entrance & Landmark Signboard in K.Pudur"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inset Badge */}
              <div className="p-4 bg-[#FAF8F5] rounded-xl mt-2 border border-emerald-950/5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-950 font-display block">
                    Official Clinic Entrance & Landmark
                  </span>
                  <span className="text-[11px] text-slate-600 font-sans">
                    Alagar Complex, 5th Meenakshi Amman Nagar Main Rd, K.Pudur
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Clinical Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-6 rounded-3xl bg-white border border-emerald-950/10 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:bg-emerald-950 group-hover:text-amber-300 transition-colors shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                      {p.subtitle}
                    </span>

                    <h3 className="text-base font-bold font-display text-emerald-950 group-hover:text-emerald-800 transition-colors mb-2">
                      {p.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-sans text-emerald-800 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Clinic Standard</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-emerald-950 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <span className="text-xs font-sans font-bold text-amber-400 uppercase tracking-wider block">
              EXPERIENCE BOUTIQUE DENTAL CARE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Ready to Discuss Your Smile Goals with Dr. Khalidh Khan?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200 font-sans">
              Visit our studio in K.Pudur for an in-depth consultation and personalized treatment roadmap.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenAppointment}
            className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2.5 transition-all hover:scale-105 cursor-pointer shrink-0"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
