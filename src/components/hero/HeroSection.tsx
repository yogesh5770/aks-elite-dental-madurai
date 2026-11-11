import React, { useState } from 'react';
import { 
  Calendar, 
  Phone, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Zap, 
  Activity, 
  HeartHandshake,
  Camera,
  Maximize2
} from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

interface HeroSectionProps {
  onOpenAppointment: (treatment?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointment }) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const heroShowcasePhotos = [
    {
      tabLabel: "Doctor",
      title: "Dr. Khalidh Khan, BDS, MDS",
      desc: "Specialist in Orthodontics & Dentofacial Orthopaedics • CEO, AK's Elite",
      badge: "CHIEF SPECIALIST",
      src: "/clinic-photos/dr_khalidh_khan_suit.webp",
      objectPosition: "object-top"
    },
    {
      tabLabel: "Suite",
      title: "AK's Elite Consultation Suite",
      desc: "Consultation Suite with Official AK's Logo & MDS Credentials",
      badge: "CONSULTATION SUITE",
      src: "/clinic-photos/aks_real_03.webp",
      objectPosition: "object-center"
    },
    {
      tabLabel: "3D Tech",
      title: "iTero 3D Digital Scanning Suite",
      desc: "High-Precision 3D Intraoral Scanning & Digital Treatment Planning",
      badge: "3D DIGITAL SCANNER",
      src: "/clinic-photos/itero_dr_khalidh_suit.webp",
      objectPosition: "object-top"
    }
  ];

  const currentHeroPhoto = heroShowcasePhotos[activePhotoIdx];

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EFEAE2] via-[#F4EFEA] to-white overflow-hidden text-left border-b border-emerald-950/10">
      
      {/* Ambient Decorative Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Comprehensive Multi-Speciality Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Motto Banner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F382C] text-amber-300 text-xs font-sans font-semibold border border-emerald-800 shadow-xs">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>AK'S ELITE DENTAL CLINIC & ORTHODONTIC CENTRE • K.PUDUR, MADURAI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-[#0F382C] tracking-tight leading-[1.14]">
              Specialist Orthodontics & Dental Clinic in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-amber-700">
                K.Pudur, Madurai.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed max-w-2xl">
              From instant relief for acute toothaches to lifetime dental implants, 3D invisible aligners, laser gum therapy, and fear-free pediatric dentistry — experience gentle, painless, clinic dental healthcare led by <strong className="text-[#0F382C] font-bold">Dr. Khalidh Khan (BDS, MDS)</strong> and specialist consultants.
            </p>

            {/* 4 Multi-Speciality Pillar Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="p-3 rounded-2xl bg-white border border-emerald-950/10 shadow-2xs">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">Endodontics</span>
                <span className="text-xs font-bold text-slate-900 font-display">Single-Sitting RCT</span>
                <span className="text-[10px] text-slate-500 block">Painless relief</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-emerald-950/10 shadow-2xs">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">Implantology</span>
                <span className="text-xs font-bold text-slate-900 font-display">Dental Implants</span>
                <span className="text-[10px] text-slate-500 block">Lifetime fixed teeth</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-emerald-950/10 shadow-2xs">
                <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block">Orthodontics</span>
                <span className="text-xs font-bold text-slate-900 font-display">3D Clear Aligners</span>
                <span className="text-[10px] text-slate-500 block">Invisalign certified</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-emerald-950/10 shadow-2xs">
                <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block">Aesthetics & Kids</span>
                <span className="text-xs font-bold text-slate-900 font-display">Smile & Pediatric</span>
                <span className="text-[10px] text-slate-500 block">Gentle family care</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => onOpenAppointment()}
                className="px-7 py-4 rounded-2xl bg-[#0F382C] hover:bg-[#184D3E] text-amber-300 font-sans font-bold text-sm shadow-xl shadow-emerald-950/15 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] cursor-pointer border border-amber-400/30"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Priority Consultation</span>
              </button>

              <a
                href="#transformations"
                className="px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-sans font-bold text-sm border border-slate-300/80 flex items-center justify-center gap-2 transition-all hover:border-emerald-700 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>View Before & After Cases</span>
              </a>

              <a
                href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
                className="px-5 py-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-sans font-bold text-sm border border-emerald-300/80 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
              >
                <Phone className="w-4 h-4 text-emerald-800" />
                <span>{CLINIC_DATA.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Proof Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-sans">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-slate-900">4.9 ★</span>
                <span>(105+ Google Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Autoclave Class-B Sterilization</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>Mon – Sat: 9:30 AM – 9:00 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Speciality Media Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Consultation Suite Showcase Card with Perfect 4:5 Aspect Ratio */}
            <div className="relative rounded-3xl bg-slate-950 p-2.5 shadow-2xl border border-emerald-900/30">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 group">
                <img
                  src={currentHeroPhoto.src}
                  alt={currentHeroPhoto.title}
                  className={`w-full h-full object-cover ${currentHeroPhoto.objectPosition} transition-all duration-700 group-hover:scale-105`}
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Floating Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold font-mono-code bg-black/70 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                    {currentHeroPhoto.badge}
                  </span>
                </div>

                {/* Bottom Overlay Info & Mini Switcher */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-2">
                  <div>
                    <h4 className="font-bold font-display text-base text-amber-200">
                      {currentHeroPhoto.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 font-sans mt-0.5 line-clamp-2">
                      {currentHeroPhoto.desc}
                    </p>
                  </div>

                  {/* 3 Interactive Photo Switcher Tabs */}
                  <div className="flex items-center gap-1.5 pt-1">
                    {heroShowcasePhotos.map((p, idx) => (
                      <button
                        key={p.badge}
                        type="button"
                        onClick={() => setActivePhotoIdx(idx)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-sans font-bold transition-all cursor-pointer flex-1 text-center ${
                          activePhotoIdx === idx
                            ? 'bg-amber-400 text-slate-950 shadow-xs'
                            : 'bg-white/15 text-slate-300 hover:bg-white/30 hover:text-white'
                        }`}
                      >
                        {p.tabLabel}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Consultation Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-white border border-emerald-950/10 shadow-sm flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Painless Treatment Guarantee</span>
                  <span className="text-slate-500 text-[11px] block">Advanced computerized rotary systems & gentle anesthesia</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenAppointment()}
                className="text-emerald-800 font-bold hover:underline shrink-0 text-xs cursor-pointer"
              >
                Inquire &rarr;
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

