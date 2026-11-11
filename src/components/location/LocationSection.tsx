import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ChevronDown, ChevronUp, Star, HelpCircle, Sparkles } from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

export const LocationSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="location" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-sans font-semibold mb-3.5 border border-emerald-300 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>K.PUDUR / SURYA NAGAR EXTN CLINIC LOCATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-emerald-950 tracking-tight leading-tight">
            VISIT OUR CLINIC
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-sans max-w-2xl mx-auto leading-relaxed">
            Conveniently situated on 5th Meenakshi Amman Nagar Main Road near Surya Nagar MedPlus in K.Pudur, Madurai, with dedicated parking facilities.
          </p>
        </div>

        {/* 2-Column Info & Maps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-emerald-950">
                    Clinic Address
                  </h3>
                  <span className="text-[11px] text-emerald-800 font-semibold">
                    AKS Elite Dental Clinic
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {CLINIC_DATA.contact.address}
              </p>

              <p className="text-xs text-slate-500 font-sans border-t border-slate-200/60 pt-2.5">
                <strong className="text-emerald-950">Landmark:</strong> {CLINIC_DATA.contact.landmark}
              </p>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-emerald-950">
                    Consultation Hours
                  </h3>
                  <span className="text-[11px] text-emerald-800 font-semibold">
                    Morning & Evening Slots
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 font-sans">
                <div className="flex justify-between py-1 border-b border-slate-200/40">
                  <span>Monday – Saturday:</span>
                  <span className="font-semibold text-emerald-950">9:30 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Sunday:</span>
                  <span className="font-semibold text-emerald-800">10:30 AM – 2:00 PM</span>
                </div>
              </div>
            </div>

            {/* Visual Building Landmark Photo Card */}
            <div className="p-3.5 rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 shadow-sm flex items-center gap-3.5">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-2xs">
                <img
                  src="/clinic-photos/aks_real_04.webp"
                  alt="Clinic Entrance Signboard Landmark"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Building Landmark</span>
                <p className="text-xs font-bold text-emerald-950 font-display mt-0.5">Alagar Complex Main Road Entrance</p>
                <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-snug">Prominent green clinic signboard near Surya Nagar MedPlus.</p>
              </div>
            </div>

            {/* Navigation & Call Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={CLINIC_DATA.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-2xl bg-emerald-950 hover:bg-emerald-900 text-amber-300 font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer hover:scale-[1.02] border border-amber-400/30"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
                className="py-3.5 px-4 rounded-2xl bg-emerald-100 hover:bg-emerald-200 text-emerald-950 border border-emerald-300 font-sans font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
              >
                <Phone className="w-4 h-4 text-emerald-800" />
                <span>Call Clinic Desk</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Named Place Embed (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden bg-slate-100 border border-emerald-950/10 shadow-xl relative h-[420px] lg:h-[460px]">
              <iframe
                title="AKS Elite Dental Clinic Google Maps Location"
                src="https://maps.google.com/maps?q=Aks+elite+dental+clinic+and+orthodontic+centre,+Main+Road,+Al+Amin+Nagar,+Meenakshi+Amman+Nagar,+Madurai,+Tamil+Nadu+625007&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Verified Badge */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-200 text-left max-w-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-950 font-display">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>AKS Elite Dental Clinic (4.9 ★)</span>
                </div>
                <p className="text-[10px] text-slate-500 font-sans mt-0.5">
                  Surya Nagar Extn, K.Pudur, Madurai
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Local Area Coverage & Transit Connections (Critical for Local Map Pack Rank) */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-emerald-950/10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-emerald-950/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5" />
                <span>Prime Madurai Connectivity & Serving Localities</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-emerald-950 mt-1">
                Easy Driving & Transit Access Across Madurai
              </h3>
            </div>
            <span className="text-xs font-semibold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full w-fit">
              Dedicated Free Patient Parking
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                area: "K.Pudur & Surya Nagar",
                time: "Immediate (0 km)",
                desc: "Located directly on 5th Meenakshi Amman Nagar Main Rd, next to Surya Nagar MedPlus and Alagar Complex."
              },
              {
                area: "Mattuthavani (MIBT)",
                time: "5 Mins (2.5 km)",
                desc: "Direct straight-line access from Mattuthavani Integrated Bus Terminus via Alagar Kovil Road."
              },
              {
                area: "Iyer Bungalow & Surveyor Colony",
                time: "6 Mins (3.2 km)",
                desc: "Fast connectivity along New Natham Road & Reserve Line with smooth non-congested routes."
              },
              {
                area: "Othakadai & Melur Road",
                time: "8 Mins (4.1 km)",
                desc: "Quick drive for residents and students near Agricultural College and High Court Bench."
              },
              {
                area: "Tallakulam & Goripalayam",
                time: "10 Mins (4.8 km)",
                desc: "Accessible via Gokhale Road and Tamukkam Grounds connecting central Madurai."
              },
              {
                area: "Anna Nagar & KK Nagar",
                time: "12 Mins (5.4 km)",
                desc: "Seamless connectivity across 80 Feet Road and Apollo Hospital bypass corridor."
              }
            ].map((loc) => (
              <div key={loc.area} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-emerald-950">{loc.area}</h4>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    {loc.time}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-slate-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-emerald-950">
              Patient Questions Answered
            </h3>
          </div>

          <div className="space-y-3">
            {CLINIC_DATA.faq.map((item, idx) => (
              <div
                key={item.q}
                className="rounded-2xl bg-[#FAF8F5] border border-emerald-950/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-sans font-semibold text-emerald-950 hover:text-emerald-800 text-sm sm:text-base cursor-pointer"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-emerald-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-200/40">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
