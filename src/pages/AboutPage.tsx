import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Award, ShieldCheck, UserCheck, Calendar } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { DoctorSpotlight } from '../components/doctor/DoctorSpotlight';
import { AboutSection } from '../components/about/AboutSection';
import { WhyChooseUs } from '../components/why/WhyChooseUs';

interface AboutPageProps {
  onOpenAppointment: (treatmentTitle?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenAppointment }) => {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen">
      {/* 0. Page-Specific SEO Metadata (Under 70 chars title, Under 150 chars description, Self-canonical) */}
      <SEO
        title="Dr. Khalidh Khan (MDS Orthodontist) | AK'S Elite Dental Madurai"
        description="Meet Dr. Khalidh Khan (BDS, MDS Orthodontics) in K.Pudur, Madurai. iTero 3D intraoral scanner, Class-B sterilization, and personalized care."
        canonical="https://www.aksdentalclinic.in/about"
        ogImage="https://www.aksdentalclinic.in/clinic-photos/dr_khalidh_khan_suit.webp"
      />

      {/* 1. Page Header & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#061D15] to-[#0A3326] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-300/80 mb-4 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">About & Specialist Doctor</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              Chief Specialist Leadership
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
              Meet Dr. Khalidh Khan (MDS) & Clinical Team
            </h1>
            <p className="mt-4 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Committed to ethical, pain-free, and digitally accurate dental care in K.Pudur, Madurai. Equipped with the latest iTero 3D intraoral scanner and international sterilization standards.
            </p>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. Doctor Spotlight Component */}
      <section className="py-8">
        <DoctorSpotlight onOpenAppointment={onOpenAppointment} />
      </section>

      {/* 3. About Clinic & Hospital-grade Sterilization Protocols */}
      <section className="py-8">
        <AboutSection onOpenAppointment={() => onOpenAppointment()} />
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-8">
        <WhyChooseUs />
      </section>

      {/* 5. Consultation Booking Banner */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#051C14] rounded-3xl p-8 sm:p-12 text-center text-white border border-emerald-800/40 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
            Schedule a Private Consultation with Dr. Khalidh Khan
          </h2>
          <p className="mt-3 text-emerald-200/90 max-w-xl mx-auto text-sm sm:text-base">
            Experience gentle, transparent dental care in a private, unhurried consultation setting in K.Pudur, Madurai.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => onOpenAppointment()}
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

