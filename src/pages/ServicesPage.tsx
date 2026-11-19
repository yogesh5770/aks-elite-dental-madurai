import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  Phone, 
  Calendar,
  Smile,
  Shield,
  Zap,
  Award,
  HeartPulse,
  Baby,
  Activity,
  CheckCircle2,
  Check
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { TreatmentsBento } from '../components/treatments/TreatmentsBento';
import { SymptomTriage } from '../components/quiz/SymptomTriage';
import { FAQSection } from '../components/common/FAQSection';
import { CLINIC_DATA } from '../data/clinicData';
import { SERVICES_ARCHITECTURE_DATA } from '../data/servicesArchitectureData';

interface ServicesPageProps {
  onOpenAppointment: (treatmentTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenAppointment }) => {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen">
      {/* 0. Page-Specific SEO Metadata (Rank #1 Keyword Mapped - Under 70 chars title & Under 150 chars description) */}
      <SEO
        title="Invisalign & Aligner Specialist in Madurai | AK'S Elite Dental"
        description="Top Invisalign specialist & orthodontist in Madurai. Transparent aligner treatment, braces clip cost, painless root canal & cleaning: 95387 23872."
        canonical="https://www.aksdentalclinic.in/services"
        ogImage="https://www.aksdentalclinic.in/og/services-og.jpg"
      />

      {/* 1. Page Header & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#061D15] to-[#0A3326] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-300/80 mb-4 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">Treatments & Specialties</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Specialist Dental Surgery & Orthodontics
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
              Specialist Treatments & Clinical Disciplines
            </h1>
            <p className="mt-4 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Every procedure at AK'S Elite Dental Clinic is executed using precision digital dentistry, hospital-grade Class-B sterilization, and personalized treatment plans in K.Pudur, Madurai.
            </p>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. 9 Clinical Specialty Departments (Hub-and-Spoke Navigation) */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Dedicated Clinical Departments
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900 mt-3">
            Explore Our 9 Specialty Dental Departments
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Click into any department below for comprehensive clinical treatment breakdowns, technology details, before-and-after cases, and transparent cost guidelines in K.Pudur, Madurai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(SERVICES_ARCHITECTURE_DATA).map((dept) => (
            <div
              key={dept.slug}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all hover:border-emerald-700/60 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                    {dept.shortTitle}
                  </span>
                  <span className="text-[11px] text-amber-600 font-semibold flex items-center gap-1">
                    ★ Specialist Care
                  </span>
                </div>

                <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                  <Link to={`/services/${dept.slug}`}>
                    {dept.name}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {dept.tagline}
                </p>

                <div className="space-y-1.5 border-t border-slate-100 pt-3 mb-4">
                  <span className="text-[11px] font-bold text-slate-700 block uppercase tracking-wider">
                    Key Procedures:
                  </span>
                  {dept.subtopics.map((sub, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{sub.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/services/${dept.slug}`}
                  className="text-xs font-bold text-emerald-800 group-hover:text-emerald-950 inline-flex items-center gap-1 hover:underline underline-offset-2"
                >
                  <span>Department Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenAppointment(dept.name)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-900 text-amber-300 hover:bg-emerald-800 font-semibold text-[11px] transition-colors"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Full Treatments Bento (Detailed Technical Cards) */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <TreatmentsBento onOpenAppointment={onOpenAppointment} />
      </section>

      {/* 3. Interactive Symptom & Treatment Triage */}
      <section className="py-12 bg-white border-y border-emerald-950/5">
        <SymptomTriage onOpenAppointment={onOpenAppointment} />
      </section>

      {/* 4. Pricing & Transparent Care Guarantee */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-emerald-800/40">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-amber-300">
              Transparent Treatment Planning & Consultation
            </h2>
            <p className="mt-3 text-emerald-100/80 text-sm sm:text-base leading-relaxed">
              We provide full diagnostic clarity, digital 3D scans, and written treatment estimates before initiating any procedure. No hidden costs.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-emerald-200">
              <span className="flex items-center gap-1.5">✓ 0% Interest EMI Available</span>
              <span className="flex items-center gap-1.5">✓ All Major Insurance/Cards Accepted</span>
              <span className="flex items-center gap-1.5">✓ Same-Day Emergency Relief</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenAppointment()}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
              className="px-6 py-3.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-white font-semibold text-sm transition-all border border-emerald-700/50 text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>{CLINIC_DATA.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions (SEO Content & E-E-A-T Signals) */}
      <section className="bg-white border-t border-emerald-950/5">
        <FAQSection className="py-16" />
      </section>
    </div>
  );
};

