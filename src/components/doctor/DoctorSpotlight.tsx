import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  Quote, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp,
  GraduationCap, 
  Building2, 
  HeartHandshake, 
  Stethoscope,
  ShieldCheck
} from 'lucide-react';
import { CLINIC_DATA } from '../../data/clinicData';

interface DoctorSpotlightProps {
  onOpenAppointment: (doctorName?: string) => void;
}

export const DoctorSpotlight: React.FC<DoctorSpotlightProps> = ({ onOpenAppointment }) => {
  const doc = CLINIC_DATA.doctor;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="doctor" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FDFCFB] border-b border-stone-200/80 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-sans font-semibold mb-3.5 border border-emerald-200/80 shadow-xs">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span className="tracking-wide uppercase font-semibold">Specialist in Orthodontics & Dentofacial Orthopaedics</span>
          </div>

          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[44px] font-bold font-sans text-[#0F382C] tracking-tight leading-tight">
            Meet Your Dentist – Dr. Khalidh Khan, MDS
          </h2>

          <p className="text-xs sm:text-base text-stone-600 mt-3 font-sans max-w-2xl mx-auto leading-relaxed">
            At AK’s Elite Dental Clinic and Orthodontic Centre, we believe every smile deserves expert care, personalised attention, and uncompromising quality.
          </p>
        </div>

        {/* Doctor Magazine Profile Card */}
        <div className="p-3.5 min-[360px]:p-5 sm:p-10 lg:p-12 rounded-3xl bg-[#FAF8F5] border border-stone-200/90 shadow-[0_15px_40px_rgba(15,56,44,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Doctor Portrait & Primary Action Buttons (5 cols) */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-xl p-2.5 sm:p-3 group">
                
                {/* Natural Uncropped High-Res Suit Portrait */}
                <div className="rounded-2xl overflow-hidden aspect-3/4 bg-stone-100 border border-stone-200/80 relative">
                  <img
                    src={doc.invisalignPhoto}
                    alt="Dr. Khalidh Khan, MDS - Specialist in Orthodontics & Dentofacial Orthopaedics"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Floating Experience Badge at Bottom (Clear of Face) */}
                  <div className="absolute bottom-3 left-3 bg-[#0F382C]/90 backdrop-blur-md text-amber-200 text-xs font-medium font-sans px-3 py-1.5 rounded-full border border-amber-400/30 flex items-center gap-1.5 shadow-md z-10">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>9+ Years Clinical Practice</span>
                  </div>
                </div>

                {/* Doctor Credentials Plaque */}
                <div className="p-4 sm:p-4.5 bg-[#0F382C] text-white rounded-xl mt-3 space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-bold font-sans text-amber-300 tracking-tight leading-snug">
                        {doc.name}, {doc.qualification}
                      </h4>
                      <p className="text-xs text-emerald-200 font-sans mt-0.5">
                        CEO & Senior Consultant • Specialist Orthodontist
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-900 border border-emerald-700 text-amber-300 font-sans font-bold text-xs shrink-0">
                      RGUHS
                    </span>
                  </div>

                  <div className="pt-2 border-t border-emerald-800/80 text-xs text-emerald-100/90 font-sans space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span>BDS (2014) • MDS (2018) — Bengaluru, Karnataka</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span>Senior Consultant Across Multiple Hospitals</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons Below Portrait */}
              <div className="flex flex-col gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenAppointment("Consultation with Dr. Khalidh Khan, MDS")}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#0F382C] hover:bg-[#154637] text-amber-300 text-xs sm:text-sm font-bold font-sans flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg border border-amber-400/30 active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Reserve Consultation with Dr. Khalidh Khan</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent("Hello Dr. Khalidh Khan (MDS), I would like to consult regarding orthodontic / dental treatment.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-medium font-sans flex items-center justify-center gap-2 transition-colors cursor-pointer border border-stone-300 shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp Doctor (+91 95387 23872)</span>
                </a>
              </div>

            </div>

            {/* Right Column: Bio, 3 Prominent Stat Cards & Scrollable Reader (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Doctor Title & Header Row */}
              <div className="space-y-1.5 pb-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#0F382C] tracking-tight">
                    {doc.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0F382C] text-amber-300 border border-emerald-800 text-xs font-bold font-mono">
                    {doc.qualification}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-semibold font-sans">
                    CEO & Senior Consultant
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-emerald-900 font-sans">
                  {doc.speciality}
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold font-sans">
                  <span>Motto:</span>
                  <span className="italic">"We brace your teeth with grace"</span>
                </div>
              </div>

              {/* THREE PROMINENT STATISTIC CARDS (Fit beautifully on all screen widths) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3.5 pt-1">
                <div className="bg-white rounded-2xl border border-stone-200/90 p-2.5 min-[400px]:p-3.5 sm:p-5 text-center shadow-xs hover:border-emerald-600/30 hover:shadow-sm transition-all overflow-hidden">
                  <span className="text-lg min-[360px]:text-[19px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-[#0F382C] tracking-tight block whitespace-nowrap">
                    25,000+
                  </span>
                  <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs font-medium text-stone-600 block mt-1 leading-tight">
                    Patients treated
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-stone-200/90 p-2.5 min-[400px]:p-3.5 sm:p-5 text-center shadow-xs hover:border-emerald-600/30 hover:shadow-sm transition-all overflow-hidden">
                  <span className="text-lg min-[360px]:text-[19px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-[#0F382C] tracking-tight block whitespace-nowrap">
                    10,000+
                  </span>
                  <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs font-medium text-stone-600 block mt-1 leading-tight">
                    Braces cases
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-stone-200/90 p-2.5 min-[400px]:p-3.5 sm:p-5 text-center shadow-xs hover:border-emerald-600/30 hover:shadow-sm transition-all overflow-hidden">
                  <span className="text-lg min-[360px]:text-[19px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-[#0F382C] tracking-tight block whitespace-nowrap">
                    1,000+
                  </span>
                  <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs font-medium text-stone-600 block mt-1 leading-tight">
                    Aligner cases
                  </span>
                </div>
              </div>

              {/* Core Philosophy Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs relative">
                <div className="flex items-start gap-3.5">
                  <Quote className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed italic font-medium">
                      "{doc.quote}"
                    </p>
                    <span className="text-xs text-emerald-900 font-semibold block mt-1.5">
                      — Dr. Khalidh Khan, MDS (Orthodontics & Dentofacial Orthopaedics)
                    </span>
                  </div>
                </div>
              </div>

              {/* EDITORIAL CLINICAL READER BOX (Clean Slim Scrollbar, Structured Sections) */}
              <div className="rounded-2xl border border-stone-200/90 overflow-hidden bg-white shadow-sm">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 bg-[#0F382C] text-white">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Stethoscope className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-300 shrink-0" />
                    <span className="text-[11px] sm:text-sm font-bold font-sans tracking-wide uppercase text-amber-200">
                      Clinical Message & Philosophy
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {!isExpanded && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-xs text-emerald-200 font-sans">
                        Scroll to read <ChevronDown className="w-3.5 h-3.5 animate-bounce text-amber-300" />
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-[11px] sm:text-xs font-sans font-semibold text-amber-300 hover:text-white underline cursor-pointer flex items-center gap-1"
                    >
                      {isExpanded ? (
                        <>Collapse <ChevronUp className="w-3 h-3" /></>
                      ) : (
                        <>Expand <ChevronDown className="w-3 h-3" /></>
                      )}
                    </button>
                  </div>
                </div>

                {/* Editorial Reader Body */}
                <div 
                  className={`p-4 sm:p-7 space-y-5 sm:space-y-6 text-left text-stone-700 font-sans text-xs sm:text-sm leading-relaxed transition-all duration-300 ${
                    isExpanded 
                      ? "max-h-none overflow-visible" 
                      : "max-h-[380px] overflow-y-auto pr-3 sm:pr-3.5 editorial-scrollbar"
                  }`}
                >
                  
                  {/* Introduction Section */}
                  <div className="space-y-3">
                    <p className="font-semibold text-stone-900 text-sm sm:text-base leading-snug">
                      At AK’s Elite Dental Clinic and Orthodontic Centre, we believe every smile deserves expert care, personalised attention, and uncompromising quality.
                    </p>
                    <p>
                      I am <strong className="text-stone-900 font-semibold">Dr. Khalidh Khan, MDS</strong>, a specialist in Orthodontics and Dentofacial Orthopaedics, with my BDS and MDS qualifications from <strong className="text-stone-900 font-semibold">Rajiv Gandhi University of Health Sciences (RGUHS), Bengaluru, Karnataka</strong>. I completed my BDS in 2014 and MDS in 2018 and bring over 9 years of private clinical practice experience, along with extensive experience across various areas of dentistry.
                    </p>
                    <p>
                      As the CEO of AK’s Elite Dental Clinic and Orthodontic Centre and a Senior Consultant at multiple hospitals and clinics, my approach combines specialist expertise, modern dental technology, and a patient-first philosophy.
                    </p>
                    <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200/80 text-emerald-950 font-medium text-xs sm:text-sm">
                      Over the course of my clinical practice, I have treated <strong className="font-bold text-emerald-900">25,000+ patients</strong>, managed <strong className="font-bold text-emerald-900">10,000+ orthodontic braces cases</strong>, and provided <strong className="font-bold text-emerald-900">1,000+ clear aligner cases</strong>, including Invisalign treatments.
                    </div>
                  </div>

                  {/* Section: Our Expertise */}
                  <div className="space-y-3 pt-3 border-t border-stone-100">
                    <div className="flex items-center gap-2 text-[#0F382C] font-bold text-sm uppercase tracking-wide">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Our Expertise</span>
                    </div>
                    <p>
                      My clinical expertise includes orthodontic braces, Invisalign and clear aligner treatments, smile designing, correction of irregular teeth and bite problems, and the assessment and management of jaw growth and development. Our clinic also provides comprehensive dental care, including preventive dentistry, restorative treatments, root canal treatment, replacement of missing teeth, and other essential dental services.
                    </p>
                    <p className="text-stone-900 font-medium italic">
                      Our goal is to help patients achieve healthier teeth, better oral function, and confident smiles through appropriate, individually planned treatment.
                    </p>
                    
                    {/* Specialized Focus Areas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {doc.focusAreas.map((area) => (
                        <div key={area} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section: Our Philosophy - Quality Over Quantity */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/40 border border-amber-200/70 space-y-3 text-stone-800">
                    <div className="flex items-center gap-2 text-[#0F382C] font-bold text-sm uppercase tracking-wide">
                      <HeartHandshake className="w-4 h-4 text-emerald-700" />
                      <span>Our Philosophy: Quality Over Quantity</span>
                    </div>
                    <p className="font-semibold text-emerald-950 italic text-sm">
                      "At AK’s Elite Dental Clinic and Orthodontic Centre, we believe that dentistry is not about treating more patients in less time; it is about treating every patient with the care and attention they deserve."
                    </p>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      We prioritise thorough diagnosis, personalised treatment planning, high standards of sterilisation and hygiene, quality materials, modern technology, and clear communication at every stage of treatment.
                    </p>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      We do not believe in compromising treatment quality to compete on price. Instead, we focus on delivering value through expertise, precision, safety, and long-term oral health. Every patient deserves to understand their treatment options, the expected benefits, and the associated costs before making an informed decision.
                    </p>
                  </div>

                  {/* Section: Your Smile, Our Priority */}
                  <div className="space-y-3 pt-3 border-t border-stone-100">
                    <div className="flex items-center gap-2 text-[#0F382C] font-bold text-sm uppercase tracking-wide">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Your Smile, Our Priority</span>
                    </div>
                    <p>
                      Whether you are considering braces, Invisalign, smile enhancement, or comprehensive dental care for your family, our team is committed to making your dental experience comfortable, transparent, and personalised.
                    </p>
                    <p className="font-medium text-stone-900">
                      At AK’s Elite Dental Clinic and Orthodontic Centre, we don’t just treat teeth — we care for people, build confidence, and create healthier smiles.
                    </p>
                    <div className="p-3.5 rounded-xl bg-[#0F382C] text-amber-300 font-bold text-center text-xs sm:text-sm tracking-wide">
                      "Your smile, our priority. We brace your teeth with grace."
                    </div>
                    <p className="text-center text-stone-600 font-medium text-xs pt-1">
                      Book your consultation today and take the first step towards a healthier, more confident smile.
                    </p>
                  </div>

                </div>

                {/* Footer Notice Bar */}
                {!isExpanded && (
                  <div className="px-5 py-2.5 bg-stone-50 border-t border-stone-200/90 text-center flex items-center justify-between text-xs text-stone-500 font-sans">
                    <span>Direct MDS Consultation in K.Pudur, Madurai</span>
                    <button
                      type="button"
                      onClick={() => setIsExpanded(true)}
                      className="text-emerald-800 font-semibold hover:underline cursor-pointer"
                    >
                      Read full story expanded ↓
                    </button>
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
