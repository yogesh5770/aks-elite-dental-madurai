import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Star, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/hero/HeroSection';
import { DoctorSpotlight } from '../components/doctor/DoctorSpotlight';
import { ReviewsSection } from '../components/reviews/ReviewsSection';
import { ConversionCtaSection } from '../components/common/ConversionCtaSection';
import { CLINIC_DATA } from '../data/clinicData';

interface HomePageProps {
  onOpenAppointment: (treatmentTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAppointment }) => {
  return (
    <div className="w-full">
      {/* 0. Page-Specific SEO Metadata (Under 70 chars title, Under 150 chars description, Self-canonical) */}
      <SEO
        title="AK'S ELITE DENTAL | Best Dental Clinic in K.Pudur, Madurai"
        description="4.9★ rated dental clinic in K.Pudur, Madurai by Dr. Khalidh Khan (MDS). 3D clear aligners, painless root canals & implants. Call +91 95387 23872."
        canonical="https://www.aksdentalclinic.in/"
        ogImage="https://www.aksdentalclinic.in/hero-dental.jpg"
      />

      {/* 1. Hero Section */}
      <HeroSection onOpenAppointment={onOpenAppointment} />

      {/* 2. Trust Credentials Ribbon */}
      <section className="bg-[#051C14] text-white py-6 border-y border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">4.9 ★</span>
              <span className="text-xs sm:text-sm text-emerald-200/90 mt-1">105+ Verified Google Reviews</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-serif">MDS Specialist</span>
              <span className="text-xs sm:text-sm text-emerald-200/90 mt-1">Orthodontics & Dentofacial Care</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">iTero 3D</span>
              <span className="text-xs sm:text-sm text-emerald-200/90 mt-1">Digital Intraoral Scanning</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-serif">Class-B</span>
              <span className="text-xs sm:text-sm text-emerald-200/90 mt-1">Hospital-Grade Sterilization</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Specialties Showcase with Link to /services */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                Featured Clinical Care
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061D15] tracking-tight font-serif">
                Specialist Treatments in K.Pudur
              </h2>
              <p className="mt-2 text-slate-600 max-w-2xl text-sm sm:text-base">
                From 3D invisible aligners to single-sitting rotary root canals, explore our advanced clinical disciplines led by specialists.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-950 text-amber-300 hover:bg-emerald-900 font-bold text-sm transition-all shadow-md group shrink-0"
            >
              <span>Explore All 8 Specialties</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-amber-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Clear Aligners */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-emerald-600/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-105 transition-transform border border-emerald-200">
                  🦷
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100/60 text-emerald-800 text-[11px] font-semibold mb-2">
                  Specialist Orthodontics
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                  3D Clear Aligners & Invisible Braces
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Digitally planned smile alignment using iTero 3D intraoral scans. Wire-free, removable, and discreet for adults & teens.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-800">iTero 3D Scanned</span>
                <Link
                  to="/services"
                  className="text-xs font-bold text-emerald-950 hover:text-emerald-700 flex items-center gap-1 group-hover:underline"
                >
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Root Canal */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-emerald-600/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-105 transition-transform border border-amber-200">
                  ⚡
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100/60 text-amber-900 text-[11px] font-semibold mb-2">
                  Painless Rotary Care
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                  Single-Sitting Root Canal (RCT)
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Endodontic microscope and rotary technology eliminate toothache in a single gentle sitting, sealed with long-lasting ceramic crowns.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-800">Single Visit Relief</span>
                <Link
                  to="/services"
                  className="text-xs font-bold text-emerald-950 hover:text-emerald-700 flex items-center gap-1 group-hover:underline"
                >
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Dental Implants */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-emerald-600/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-105 transition-transform border border-emerald-200">
                  💎
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100/60 text-emerald-800 text-[11px] font-semibold mb-2">
                  Permanent Tooth Replacement
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                  Titanium Dental Implants
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Permanent biological tooth replacement with biocompatible titanium implants, restoring full chewing power and natural aesthetics.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-800">Lifetime Stability</span>
                <Link
                  to="/services"
                  className="text-xs font-bold text-emerald-950 hover:text-emerald-700 flex items-center gap-1 group-hover:underline"
                >
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Doctor Spotlight Preview */}
      <DoctorSpotlight onOpenAppointment={onOpenAppointment} />

      {/* 5. Smile Transformations Teaser with Link to /gallery */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-emerald-50/30 to-[#FAF8F5] border-y border-emerald-950/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#061D15] via-[#092B20] to-[#04150F] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Verified Clinical Transformations
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-white">
                Real Patient Smile Transformations
              </h2>
              <p className="mt-4 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Explore interactive before-and-after cases treated by Dr. Khalidh Khan across Orthodontics, Invisible Aligners, Cosmetic Bonding, Implants, and Rehabilitation.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-amber-400/20 group"
                >
                  <span>Open Interactive Smile Gallery</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenAppointment()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 font-semibold text-sm transition-all border border-emerald-600/40"
                >
                  Book My Smile Consultation
                </button>
              </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 6. Patient Reviews */}
      <ReviewsSection />

      {/* 7. Conversion CTA Section */}
      <ConversionCtaSection onOpenAppointment={() => onOpenAppointment()} />
    </div>
  );
};

