import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Clock, Calendar, Navigation } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { LocationSection } from '../components/location/LocationSection';
import { AppointmentSection } from '../components/appointment/AppointmentSection';
import { CLINIC_DATA } from '../data/clinicData';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen">
      {/* 0. Page-Specific SEO Metadata (Rank #1 Keyword Mapped - Under 70 chars title & Under 150 chars description) */}
      <SEO
        title="Dental Clinic in Madurai Near Me | K.Pudur | AK'S Elite Dental"
        description="Visit AK'S Elite Dental Clinic in K.Pudur, Madurai near Surya Nagar. Top dental hospital for emergency care, aligners & root canals: +91 95387 23872."
        canonical="https://www.aksdentalclinic.in/contact"
        ogImage="https://www.aksdentalclinic.in/og/contact-og.jpg"
      />

      {/* 1. Page Header & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#061D15] to-[#0A3326] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-300/80 mb-4 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">Location & Contact</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              K.Pudur, Madurai
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
              Clinic Location & Appointments
            </h1>
            <p className="mt-4 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Conveniently located in Alagar Complex, 5th Meenakshi Amman Nagar Main Road, Suriya Nagar Extn, near Surya Nagar MedPlus, K.Pudur, Madurai.
            </p>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. Quick Direct Connect Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
            className="bg-white rounded-2xl p-5 border border-emerald-950/10 shadow-lg flex items-center gap-4 hover:border-emerald-600/40 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Call Direct Hotline</div>
              <div className="text-base font-bold text-slate-900">{CLINIC_DATA.contact.phoneDisplay}</div>
            </div>
          </a>

          <a
            href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent("Hello AKS Elite Dental Clinic, I would like to book a consultation.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-5 border border-emerald-950/10 shadow-lg flex items-center gap-4 hover:border-emerald-600/40 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Instant WhatsApp</div>
              <div className="text-base font-bold text-emerald-900">+91 95387 23872</div>
            </div>
          </a>

          <div className="bg-white rounded-2xl p-5 border border-emerald-950/10 shadow-lg flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Consulting Hours</div>
              <div className="text-sm font-bold text-slate-900">Mon – Sat: 9:30 AM – 9:00 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Location Section Component with Google Map */}
      <section className="py-8">
        <LocationSection />
      </section>

      {/* 4. Complete Appointment Booking Section */}
      <section className="py-8 bg-white border-t border-emerald-950/5">
        <AppointmentSection />
      </section>
    </div>
  );
};

