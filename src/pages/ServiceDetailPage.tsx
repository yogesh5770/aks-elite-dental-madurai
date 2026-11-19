import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Phone, 
  Calendar, 
  MessageSquare, 
  ChevronDown, 
  HelpCircle,
  Award,
  Zap,
  Activity,
  Smile,
  Shield,
  HeartPulse,
  Baby,
  Star,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SERVICES_ARCHITECTURE_DATA, ServiceDetail } from '../data/servicesArchitectureData';
import { CLINIC_DATA } from '../data/clinicData';

interface ServiceDetailPageProps {
  onOpenAppointment: (treatmentTitle?: string) => void;
  serviceSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  onOpenAppointment,
  serviceSlug: propSlug 
}) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const activeSlug = propSlug || routeSlug || '';
  const service = SERVICES_ARCHITECTURE_DATA[activeSlug];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // If slug is not found in architecture data, return to services hub
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find related transformation case if any
  const relatedCase = service.transformationCaseId 
    ? CLINIC_DATA.transformationCases.find((t: any) => t.id === service.transformationCaseId)
    : null;

  // Other 8 services for internal linking silo
  const otherServices = Object.values(SERVICES_ARCHITECTURE_DATA).filter(s => s.slug !== service.slug);

  // Schema.org MedicalProcedure & FAQPage & Breadcrumbs
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.aksdentalclinic.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.aksdentalclinic.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.shortTitle,
            "item": service.canonical
          }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": service.name,
        "description": service.heroSummary,
        "procedureType": "Surgical / Non-Surgical Dental Treatment",
        "provider": {
          "@type": "Dentist",
          "name": "AK's Elite Dental Clinic and Orthodontic Centre",
          "telephone": "+919538723872",
          "url": "https://www.aksdentalclinic.in/",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Alagar Complex, Near Surya Nagar Extn, K.Pudur",
            "addressLocality": "Madurai",
            "postalCode": "625007",
            "addressCountry": "IN"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen">
      {/* 0. Dynamic SEO Metadata */}
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={service.canonical}
        ogImage={service.ogImage}
      />

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. Hero Banner with Dark Emerald & Gold Luxury Aesthetic */}
      <section className="bg-gradient-to-b from-[#061D15] via-[#0A3326] to-[#041710] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-emerald-300/80 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Treatments</Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">{service.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                {service.badge}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
                {service.name}
              </h1>

              <p className="text-base sm:text-lg text-amber-200/90 font-medium">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed max-w-3xl">
                {service.heroSummary}
              </p>

              {/* Doctor Credibility Badge */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-emerald-200/90 bg-emerald-950/60 border border-emerald-800/60 p-3.5 rounded-xl w-fit">
                <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-amber-300 text-xs shrink-0">
                  KK
                </div>
                <div>
                  <span className="font-semibold text-white block">Supervised by Dr. Khalidh Khan (BDS, MDS Orthodontics)</span>
                  <span className="text-emerald-300/80">K.Pudur, Madurai • 105+ 5-Star Google Reviews</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 font-bold ml-auto pl-2 border-l border-emerald-800">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>4.9★</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => onOpenAppointment(service.name)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent(`Hello Dr. Khalidh Khan, I would like to consult regarding ${service.shortTitle} at AK'S Elite Dental Clinic Madurai.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-white border border-emerald-700/80 font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>WhatsApp Doctor</span>
                </a>

                <a
                  href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
                  className="px-4 py-3.5 rounded-xl bg-transparent hover:bg-emerald-950 text-emerald-200 font-medium text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>{CLINIC_DATA.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Col: Feature Visual Card */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-[#0B2A1F] to-[#04150F] p-6 rounded-2xl border border-emerald-800/60 shadow-2xl relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center text-amber-300 shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white">
                    Madurai Clinical Guarantee
                  </h3>
                  <ul className="space-y-2.5 text-xs text-emerald-200/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Class-B European vacuum sterilized instruments for zero infection risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Advanced 3D digital diagnosis (iTero scanner & digital RVG x-rays)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Computerized local anesthesia for virtually painless treatments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Transparent fee structures with 0% interest monthly installment plans</span>
                    </li>
                  </ul>

                  <div className="pt-3 border-t border-emerald-800/80 flex items-center justify-between text-[11px] text-amber-300/90 font-medium">
                    <span>Mon - Sat: 9:30 AM - 9:00 PM</span>
                    <span>Sun: 10:30 AM - 2 PM</span>
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              </div>
            </div>

          </div>

        </div>

        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. Highlights Strip */}
      <section className="bg-emerald-950/40 border-b border-emerald-900/40 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-emerald-900 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Digital 3D Intraoral Scanning</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Hospital-Grade Sterilization</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Painless Rotary & Computer-Aided Tech</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Zero-Wait Scheduled Appointments</span>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Clinical Topics Breakdown (Page 3 of PDF) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Clinical Treatment Coverage
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-slate-900 mt-3">
            What Our {service.shortTitle} Department Covers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {service.clinicalIntro}
          </p>
        </div>

        {/* The Subtopic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.subtopics.map((sub, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 border border-emerald-900/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {sub.badge && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80 mb-4">
                    {sub.badge}
                  </span>
                )}
                <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-emerald-800 transition-colors mb-3">
                  {sub.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {sub.description}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 border-t border-slate-100 pt-4">
                  Clinical Indications & Scope:
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {sub.indications.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenAppointment(`${service.shortTitle}: ${sub.name}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-900 text-slate-700 hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book for this treatment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Treatment Roadmap & Step-by-Step Patient Journey */}
      <section className="bg-emerald-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-emerald-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Transparent Care Protocol
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-3">
              Your Treatment Journey at AK'S Elite Dental
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-emerald-200/80">
              Clear, structured, and predictable from your initial 3D scan to final transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.procedureSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-emerald-900/40 border border-emerald-800/60 p-6 rounded-2xl relative space-y-3"
              >
                <span className="text-3xl font-extrabold font-serif text-amber-400 block opacity-80">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-white font-serif">
                  {step.title}
                </h3>
                <p className="text-xs text-emerald-200/80 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenAppointment(service.name)}
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-sm shadow-xl shadow-amber-400/20 transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Initial Assessment</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Technology Spotlight & Case Study (If Available) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Advanced Equipment */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
                Equipment & Sterilization
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-3">
                Digital Precision & Safety Standards
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                We invest in international-grade dental diagnostic and treatment equipment so our patients receive gentle, world-class dental healthcare right here in K.Pudur, Madurai.
              </p>
            </div>

            <div className="space-y-4">
              {service.technology.map((tech, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 font-bold">
                    0{i+1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-serif">{tech.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                Key Benefits for Our Patients:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-900/90 font-medium">
                {service.benefits.map((b, bi) => (
                  <li key={bi} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Verified Case Showcase or Doctor Credentials */}
          <div className="lg:col-span-5">
            {relatedCase ? (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                    Verified Patient Result
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{relatedCase.timeframe}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-serif">
                  {relatedCase.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Before</span>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <img 
                        src={relatedCase.beforeImage} 
                        alt={`${service.shortTitle} Before Treatment`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight pt-1">{relatedCase.beforeNotes}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">After</span>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-emerald-50 border border-emerald-300">
                      <img 
                        src={relatedCase.afterImage} 
                        alt={`${service.shortTitle} After Treatment`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-[11px] text-emerald-800 font-medium leading-tight pt-1">{relatedCase.afterNotes}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">Want similar results?</span>
                  <Link
                    to="/gallery"
                    className="text-xs text-emerald-700 font-bold hover:text-emerald-900 inline-flex items-center gap-1"
                  >
                    <span>View 12+ Cases in Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-[#061D15] to-[#0A3326] text-white p-7 rounded-2xl border border-emerald-800 shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-400 text-emerald-950 font-bold flex items-center justify-center text-lg">
                    AK
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-serif text-white">AK'S Elite Dental Clinic</h3>
                    <p className="text-xs text-emerald-300">Dr. Khalidh Khan (BDS, MDS)</p>
                  </div>
                </div>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Equipped with modern dental operatory chairs, ultrasonic scalers, digital sensors, and dedicated sterilization suites in K.Pudur, Madurai.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenAppointment(service.name)}
                    className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Consultation</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 6. FAQ Accordion for Patients (Rich Snippet SEO) */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
              Patient Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-3">
              Frequently Asked Questions About {service.shortTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-serif">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-emerald-700 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Hub-and-Spoke Silo: Explore Other 8 Specialties */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-700">Explore Specialties</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
              Other Dental Specialties at AK'S Elite Dental
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-bold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1.5"
          >
            <span>View All 9 Disciplines Hub</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {otherServices.slice(0, 8).map((other) => (
            <Link
              key={other.slug}
              to={`/services/${other.slug}`}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-600 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-700 block uppercase tracking-wider mb-1">
                  Specialty
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors font-serif">
                  {other.shortTitle}
                </h3>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
                <span>Learn more</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Bottom Booking Banner */}
      <section className="bg-gradient-to-r from-[#061D15] via-[#0A3326] to-[#061D15] text-white py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            K.Pudur, Madurai Dental Centre
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white">
            Schedule Your Consultation for {service.shortTitle}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl mx-auto">
            Book an appointment with Dr. Khalidh Khan (MDS) at AK'S Elite Dental Clinic. Located near Surya Nagar Extn, K.Pudur, Madurai.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onOpenAppointment(service.name)}
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-sm shadow-xl shadow-amber-400/20 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
            <a
              href={`tel:${CLINIC_DATA.contact.phonePrimary}`}
              className="px-6 py-3.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white border border-emerald-700 text-sm font-semibold transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call +91 95387 23872</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
