import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { BeforeAfterStudio } from '../components/transformations/BeforeAfterStudio';

interface GalleryPageProps {
  onOpenAppointment: (treatmentTitle?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenAppointment }) => {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen">
      {/* 1. Page Header & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#061D15] to-[#0A3326] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs text-emerald-300/80 mb-4 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">Smile Transformation Gallery</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Verified Clinical Results
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
              Smile Transformation Studio
            </h1>
            <p className="mt-4 text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Real clinical before-and-after cases treated by Dr. Khalidh Khan (MDS) and specialist consultants. Explore transformations across Orthodontics, 3D Aligners, Implants, Endodontics, and Cosmetic Restorations.
            </p>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. Before/After Studio Component */}
      <section className="py-8">
        <BeforeAfterStudio onOpenAppointment={onOpenAppointment} />
      </section>

      {/* 3. Clinical Disclaimer & Consultation Banner */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-950/10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              Individualized Treatment Planning
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900">
              Want a Similar Smile Transformation?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Every smile is unique. Book a clinical consultation with Dr. Khalidh Khan to receive a 3D digital assessment and custom treatment timeline.
            </p>
          </div>
          
          <button
            type="button"
            onClick={() => onOpenAppointment()}
            className="px-8 py-3.5 rounded-xl bg-emerald-950 text-amber-300 hover:bg-emerald-900 font-bold text-sm transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Book Your Smile Assessment</span>
          </button>
        </div>
      </section>
    </div>
  );
};
