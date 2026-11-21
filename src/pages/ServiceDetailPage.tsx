import React, { useState } from 'react';
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
  Star,
  Check,
  Tag,
  BookOpen,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { getSEOServicePage, SEO_SERVICE_PAGES } from '../data/seoServicePagesData';
import { SERVICES_ARCHITECTURE_DATA } from '../data/servicesArchitectureData';
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
  
  // 1. Look up in SEO service pages data (contains the new ~1,300 word copy)
  const seoData = getSEOServicePage(activeSlug);
  
  // 2. Also look up in legacy architecture data if needed for fallback
  const archData = SERVICES_ARCHITECTURE_DATA[activeSlug] || (seoData ? SERVICES_ARCHITECTURE_DATA[seoData.id] : undefined);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);

  if (!seoData && !archData) {
    return <Navigate to="/" replace />;
  }

  // Unified data
  const pageTitle = seoData ? seoData.metaTitle : (archData?.seoTitle || '');
  const pageDesc = seoData ? seoData.metaDescription : (archData?.seoDescription || '');
  const pageCanonical = seoData ? seoData.canonical : (archData?.canonical || '');
  const pageH1 = seoData ? seoData.h1 : (archData?.name || '');
  const pageBadge = seoData ? seoData.badge : (archData?.badge || 'Specialist Care');
  const pageOgImage = seoData ? seoData.ogImage : (archData?.ogImage || 'https://www.aksdentalclinic.in/og/services-og.jpg');
  const sections = seoData?.sections || [];
  const faqs = seoData?.faqs || archData?.faqs || [];
  const primaryKw = seoData?.primaryKeyword || 'Dental Care in Madurai';
  const secondaryKws = seoData?.secondaryKeywords || [];
  const longTailKws = seoData?.longTailKeywords || [];

  // Related transformation case
  const caseId = seoData?.transformationCaseId || archData?.transformationCaseId;
  const relatedCase = caseId 
    ? CLINIC_DATA.transformationCases.find((t: any) => t.id === caseId)
    : null;

  // Other specialty pages for interlinking
  const allOtherSeoPages = Object.values(SEO_SERVICE_PAGES).filter(p => p.slug !== seoData?.slug);

  // Schema.org MedicalProcedure & FAQPage
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
            "name": pageH1,
            "item": pageCanonical
          }
        ]
      },
      {
        "@type": "MedicalProcedure",
        "name": pageH1,
        "description": pageDesc,
        "procedureType": "DentalSpecialty",
        "provider": {
          "@type": "Dentist",
          "name": "AK's Elite Dental Clinic and Orthodontic Centre",
          "telephone": "+919538723872",
          "url": "https://www.aksdentalclinic.in/",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plot No. 162/2A, Alagar Complex, Near Surya Nagar Extn, K.Pudur",
            "addressLocality": "Madurai",
            "postalCode": "625007",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
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
    <div className="w-full bg-[#FAF8F5] min-h-screen text-slate-900 font-sans">
      {/* 0. SEO Meta */}
      <SEO
        title={pageTitle}
        description={pageDesc}
        canonical={pageCanonical}
        ogImage={pageOgImage}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. Hero Header */}
      <section className="bg-gradient-to-b from-[#061D15] via-[#0A3326] to-[#041710] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-emerald-300/80 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">{pageH1}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Main Headings */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                {pageBadge}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
                {pageH1}
              </h1>

              <p className="text-base sm:text-lg text-emerald-100/90 font-medium leading-relaxed max-w-3xl">
                {sections[0]?.content || pageDesc}
              </p>

              {/* Doctor Credibility Badge */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-emerald-200/90 bg-emerald-950/70 border border-emerald-800/80 p-4 rounded-2xl w-fit shadow-md">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-emerald-950 font-extrabold flex items-center justify-center text-sm shrink-0 shadow-sm">
                  KK
                </div>
                <div>
                  <span className="font-bold text-white block text-sm">Supervised by Dr. Khalidh Khan (BDS, MDS Orthodontics)</span>
                  <span className="text-emerald-300/80">K.Pudur, Madurai • RGUHS Alumni • 10,000+ Cases Treated</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-300 font-bold ml-auto pl-3 border-l border-emerald-800">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm">4.9 ★</span>
                  <span className="text-[10px] text-emerald-300/70 font-normal">(105+ Reviews)</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => onOpenAppointment(pageH1)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-emerald-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_DATA.contact.whatsapp}?text=${encodeURIComponent(`Hello Dr. Khalidh Khan, I would like to consult regarding ${primaryKw} at AK'S Elite Dental Clinic in Madurai.`)}`}
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

            {/* Right Col: Quick Clinical Overview */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-[#0B2A1F] to-[#04150F] p-6 sm:p-7 rounded-2xl border border-emerald-800/80 shadow-2xl space-y-4">
                <div className="flex items-center gap-3 border-b border-emerald-800/60 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300 font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold font-serif text-white">Madurai Clinic Protocol</h2>
                    <span className="text-[11px] text-emerald-300/80">K.Pudur Surya Nagar</span>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-emerald-200/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Primary Focus:</strong> {primaryKw}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Sterilization:</strong> European Class-B vacuum autoclave protocol for 100% spore-free safety</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Diagnostics:</strong> Digital 3D scanning, HD RVG sensor x-rays & intraoral cameras</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Financing:</strong> 0% interest monthly installment plans available for all major treatments</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-emerald-800/60 text-[11px] text-amber-300/90 flex justify-between items-center font-medium">
                  <span>Mon-Sat: 9:30 AM - 9:00 PM</span>
                  <span>Sun: 10:30 AM - 2:00 PM</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. SEO Keywords Bar */}
      <section className="bg-emerald-950/30 border-b border-emerald-900/40 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-[11px] text-emerald-800 font-medium">
          <span className="font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5 mr-1">
            <Tag className="w-3.5 h-3.5 text-emerald-700" />
            Clinical Focus:
          </span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-950 font-bold border border-emerald-200">
            {primaryKw}
          </span>
          {secondaryKws.slice(0, 4).map((kw, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200/80 hidden sm:inline-block">
              {kw}
            </span>
          ))}
          {longTailKws.slice(0, 2).map((kw, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md bg-white text-slate-600 border border-slate-200/80 hidden md:inline-block">
              {kw}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Main Long-Form Clinical Content (10 Structured Headings ~1,350 Words) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Sticky Table of Contents (Desktop) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-emerald-900 font-bold text-sm">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>On This Page (Table of Contents)</span>
              </div>
              <nav className="space-y-1.5 text-xs">
                {sections.map((sec, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx}`}
                    onClick={() => setActiveSectionIndex(idx)}
                    className={`block py-1.5 px-3 rounded-lg transition-colors leading-snug ${
                      activeSectionIndex === idx 
                        ? 'bg-emerald-50 text-emerald-900 font-bold border-l-2 border-emerald-700' 
                        : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
                    }`}
                  >
                    {sec.heading}
                  </a>
                ))}
                <a
                  href="#faq-section"
                  className="block py-1.5 px-3 rounded-lg text-slate-600 hover:text-emerald-800 hover:bg-slate-50"
                >
                  Frequently Asked Questions
                </a>
              </nav>

              {/* Consultation Quick Card */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Need Personalized Advice?
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consult with Dr. Khalidh Khan (MDS) at our K.Pudur clinic.
                </p>
                <button
                  type="button"
                  onClick={() => onOpenAppointment(pageH1)}
                  className="w-full py-2.5 px-4 bg-emerald-900 hover:bg-emerald-800 text-amber-300 font-bold text-xs rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Right Column: Full Long-Form Content Articles */}
          <main className="lg:col-span-8 space-y-10">
            {sections.map((sec, idx) => (
              <article 
                key={idx}
                id={`section-${idx}`}
                className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200/90 shadow-sm scroll-mt-28 space-y-4 hover:border-emerald-700/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 leading-tight">
                    {sec.heading}
                  </h2>
                </div>

                <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                  <p>{sec.content}</p>
                </div>

                {/* Sub-callouts for clinical depth */}
                {idx === 0 && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3 text-xs text-emerald-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>Clinical Standard:</strong> Every patient receives a comprehensive digital photographic examination and computerized treatment roadmap before initiating care in K.Pudur, Madurai.
                    </span>
                  </div>
                )}
              </article>
            ))}

            {/* Case Study Showcase (If Available) */}
            {relatedCase && (
              <section className="bg-white rounded-2xl p-7 border border-slate-200 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                    Clinical Case Result in Madurai
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{relatedCase.timeframe}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  {relatedCase.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Before Treatment</span>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img 
                        src={relatedCase.beforeImage} 
                        alt={`${pageH1} Before Treatment at AK'S Elite Dental Madurai`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-slate-500 leading-tight pt-1">{relatedCase.beforeNotes}</p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">After Clinical Transformation</span>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-emerald-50 border border-emerald-300">
                      <img 
                        src={relatedCase.afterImage} 
                        alt={`${pageH1} After Clinical Result at AK'S Elite Dental Madurai`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-emerald-800 font-medium leading-tight pt-1">{relatedCase.afterNotes}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">Explore all verified clinical cases:</span>
                  <Link
                    to="/gallery"
                    className="text-xs text-emerald-700 font-bold hover:text-emerald-900 inline-flex items-center gap-1"
                  >
                    <span>View 12+ Cases in Smile Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </section>
            )}

            {/* 4. Frequently Asked Questions (5 Exact FAQs) */}
            <section id="faq-section" className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm space-y-6 scroll-mt-28">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Patient Guidance & Clarity
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-2">
                  Frequently Asked Questions About {pageH1}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Answers to the most common questions asked by patients at our Madurai practice.
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className="border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                      >
                        <span className="text-sm sm:text-base font-bold text-slate-900 font-serif">
                          {faq.q}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-emerald-700 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/30">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

          </main>

        </div>
      </section>

      {/* 5. Interlinking: Other Location-Targeted Specialties in Madurai */}
      <section className="bg-slate-100/60 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-800">Complete Dental Coverage</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
                Other Specialist Treatments at AK'S Elite Dental
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allOtherSeoPages.slice(0, 8).map((other) => (
              <Link
                key={other.slug}
                to={`/${other.slug}/`}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-700 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 block uppercase tracking-wider mb-1.5">
                    Madurai Treatment
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors font-serif leading-snug">
                    {other.h1}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {other.metaDescription}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-800 font-bold">
                  <span>Read details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Consultation Booking Strip */}
      <section className="bg-gradient-to-r from-[#061D15] via-[#0A3326] to-[#061D15] text-white py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            K.Pudur, Madurai • AK'S Elite Dental
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white">
            Schedule Your {pageH1} Assessment
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl mx-auto leading-relaxed">
            Personalized treatment roadmap, digital 3D scans, and expert consultation by Dr. Khalidh Khan (MDS).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              type="button"
              onClick={() => onOpenAppointment(pageH1)}
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-sm shadow-xl shadow-amber-400/20 transition-all flex items-center gap-2 cursor-pointer"
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
