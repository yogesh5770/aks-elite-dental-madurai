import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Zap, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      num: "01",
      icon: Sparkles,
      title: "Orthodontic & Aligners Precision",
      desc: "Specialized in customized 3D digital clear aligners and low-friction ceramic self-ligating braces for comfortable smile transformations."
    },
    {
      num: "02",
      icon: Zap,
      title: "Painless Single-Sitting Root Canals",
      desc: "Computer-assisted motorized rotary equipment and electronic apex locators ensure fast, painless, and complete pulp disinfection."
    },
    {
      num: "03",
      icon: HeartHandshake,
      title: "Transparent & Honest Doctor Guidance",
      desc: "Dr. Khalidh Khan explains your clinical condition thoroughly, giving honest recommendations with zero push for unnecessary treatments."
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "100% Autoclaved Hospital Hygiene",
      desc: "Medical-grade sterilization protocols ensure every instrument pouch is autoclaved and opened directly in front of the patient."
    },
    {
      num: "05",
      icon: Award,
      title: "Affordable Quality Care",
      desc: "Top-tier aesthetic materials (zirconia crowns, digital aligners) offered at transparent and reasonable pricing for Madurai residents."
    },
    {
      num: "06",
      icon: MapPin,
      title: "Convenient K.Pudur & Surya Nagar Location",
      desc: "Located on 5th Meenakshi Amman Nagar Main Road near Surya Nagar MedPlus with ample parking and morning/evening hours."
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-sans font-semibold mb-3.5 border border-emerald-300 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>THE AKS ELITE ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-emerald-950 tracking-tight leading-tight">
            WHY PATIENTS TRUST <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-amber-700">
              AKS ELITE DENTAL CLINIC
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-sans max-w-2xl mx-auto leading-relaxed">
            Rated 4.9 ★ on Google for gentle chairside care, sterile clinical environment, and predictable orthodontic results.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.num}
                className="p-7 rounded-3xl bg-white border border-emerald-950/10 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold group-hover:bg-emerald-950 group-hover:text-amber-300 transition-colors shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-display text-slate-300 group-hover:text-emerald-700 transition-colors">
                      {adv.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-emerald-950 group-hover:text-emerald-800 transition-colors mb-2.5 leading-snug">
                    {adv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-800 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
