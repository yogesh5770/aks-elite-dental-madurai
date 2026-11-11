import React, { useState, useEffect } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, Stethoscope, Cpu, Building2, UserCheck } from 'lucide-react';
import { CLINIC_DATA, ClinicPhoto } from '../../data/clinicData';

export const ClinicGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const allPhotos = CLINIC_DATA.photos;

  const categories = [
    { id: 'all', label: `All Photos (${allPhotos.length})`, icon: Camera },
    { id: 'operatory', label: 'Operatory & Chairs', icon: Stethoscope },
    { id: 'tech', label: '3D Tech & Sterilization', icon: Cpu },
    { id: 'doctor', label: 'Doctor & Consultation', icon: UserCheck },
    { id: 'facade', label: 'Clinic Facade & Lounge', icon: Building2 }
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? allPhotos
    : allPhotos.filter(p => p.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedIdx(prev => prev === null ? null : (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIdx(prev => prev === null ? null : (prev + 1) % filteredPhotos.length);
      } else if (e.key === 'Escape') {
        setSelectedIdx(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, filteredPhotos.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === 0 ? filteredPhotos.length - 1 : selectedIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4EFEA] border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-sans font-semibold mb-3.5 border border-emerald-300 shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            <span>REAL CLINIC PHOTOGRAPHIC TOUR ({allPhotos.length} PHOTOS)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0F382C] tracking-tight leading-tight">
            INSIDE AK'S ELITE DENTAL CLINIC
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-sans max-w-2xl mx-auto leading-relaxed">
            Authentic photographs of our consultation suite, iTero 3D digital scanner, ergonomic operatory suites, Class-B sterilization unit, and executive waiting lounge in K.Pudur, Madurai.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedIdx(null);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-sans font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive 
                    ? 'bg-[#0F382C] text-amber-300 shadow-md border border-emerald-800' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Standardized Perfectly Aligned Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedIdx(idx)}
              className="rounded-3xl overflow-hidden bg-white border border-emerald-950/10 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              {/* Uniform 4:3 Aspect Container for Perfect Grid Row Alignment */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={photo.path}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-600"
                />

                {/* Subtle bottom gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Hover Expand Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-[#0F382C] text-amber-300 flex items-center justify-center shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-sans font-bold text-[#0F382C] uppercase tracking-wider shadow-sm border border-slate-100">
                    {photo.tag}
                  </span>
                </div>

                {/* Photo Number indicator */}
                <div className="absolute bottom-2.5 right-2.5">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono-code font-bold bg-black/70 text-amber-300 border border-amber-500/30 backdrop-blur-xs">
                    #{photo.id}
                  </span>
                </div>
              </div>

              {/* Caption with Fixed Height for Seamless Horizontal Lineup */}
              <div className="p-4 bg-white border-t border-slate-100 flex flex-col justify-center min-h-[72px]">
                <p className="text-xs font-semibold text-slate-800 font-sans leading-snug group-hover:text-emerald-950 transition-colors line-clamp-2">
                  {photo.caption}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Assurance Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-emerald-950/10 flex items-center gap-3 shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-600 font-sans">
            All photographs represent authentic clinic facilities, official Invisalign certifications, iTero 3D digital scanners, and Dr. Khalidh Khan, MDS at AK's Elite Dental Clinic in K.Pudur, Madurai.
          </p>
        </div>

      </div>

      {/* Lightbox Modal with Full-Resolution Uncropped View and Thumbnails Strip */}
      {selectedIdx !== null && filteredPhotos[selectedIdx] && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Top Bar with Info and Close */}
          <div className="w-full max-w-5xl flex items-center justify-between z-20 pt-2">
            <div>
              <span className="text-[11px] font-sans font-bold text-amber-300 uppercase tracking-wider block">
                Photo {selectedIdx + 1} of {filteredPhotos.length} • {filteredPhotos[selectedIdx].tag}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white font-sans mt-0.5 line-clamp-1">
                {filteredPhotos[selectedIdx].caption}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIdx(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image View with Prev/Next Controls */}
          <div 
            className="relative w-full max-w-4xl flex-1 flex items-center justify-center py-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 border border-slate-700 transition-all z-20 cursor-pointer shadow-xl"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 border border-slate-700 transition-all z-20 cursor-pointer shadow-xl"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* High-Resolution Uncropped Image */}
            <img
              src={filteredPhotos[selectedIdx].path}
              alt={filteredPhotos[selectedIdx].caption}
              className="max-w-full max-h-[72vh] object-contain rounded-2xl border border-slate-700 shadow-2xl bg-black/40"
            />
          </div>

          {/* Bottom Thumbnail Strip for Fast Navigation */}
          <div 
            className="w-full max-w-4xl flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredPhotos.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`relative w-14 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  selectedIdx === idx 
                    ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/20' 
                    : 'border-slate-700 opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={p.path} 
                  alt={p.caption} 
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>

        </div>
      )}

    </section>
  );
};

