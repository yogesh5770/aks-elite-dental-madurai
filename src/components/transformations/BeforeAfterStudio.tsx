import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Sliders, 
  Zap, 
  ShieldCheck, 
  Smile, 
  Activity, 
  HeartHandshake,
  Award,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Eye,
  Layers,
  Split
} from 'lucide-react';
import { CLINIC_DATA, TransformationCase } from '../../data/clinicData';

interface BeforeAfterStudioProps {
  onOpenAppointment: (treatmentTitle?: string) => void;
}

export const BeforeAfterStudio: React.FC<BeforeAfterStudioProps> = ({ onOpenAppointment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'slider' | 'split' | 'sheet'>('slider');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [posterModalOpen, setPosterModalOpen] = useState<boolean>(false);

  const cases = CLINIC_DATA.transformationCases;

  const categories = [
    { id: 'all', label: `All Verified Cases (${cases.length})`, icon: Sparkles },
    { id: 'ortho', label: 'Orthodontics & Braces', icon: Smile },
    { id: 'cosmetic', label: 'Cosmetic Smile Design', icon: HeartHandshake },
    { id: 'gums', label: 'Ultrasonic Scaling', icon: Activity },
    { id: 'dentures', label: 'Complete Dentures', icon: ShieldCheck }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === selectedCategory);

  const currentCase: TransformationCase = filteredCases[activeCaseIndex] || filteredCases[0] || cases[0];

  const handleNextCase = () => {
    setActiveCaseIndex(prev => (prev + 1) % filteredCases.length);
  };

  const handlePrevCase = () => {
    setActiveCaseIndex(prev => (prev - 1 + filteredCases.length) % filteredCases.length);
  };

  const selectCaseDirectly = (caseId: string) => {
    const idx = filteredCases.findIndex(c => c.id === caseId);
    if (idx !== -1) {
      setActiveCaseIndex(idx);
    } else {
      setSelectedCategory('all');
      const allIdx = cases.findIndex(c => c.id === caseId);
      if (allIdx !== -1) setActiveCaseIndex(allIdx);
    }
  };

  return (
    <section id="transformations" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-white to-[#F4EFEA] border-b border-emerald-950/10 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-sans font-semibold mb-3.5 border border-emerald-300 shadow-2xs">
            <Sliders className="w-3.5 h-3.5 text-emerald-700" />
            <span>VERIFIED CLINICAL EVIDENCE & CASE OUTCOMES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#0F382C] tracking-tight leading-tight">
            PRE & POST TREATMENT <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-amber-700">
              CLINICAL TRANSFORMATIONS
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-sans max-w-2xl mx-auto leading-relaxed">
            Authentic clinical photography documented by <strong>Dr. Khalidh Khan (BDS, MDS)</strong> at AK's Elite Dental Clinic in K.Pudur, Madurai. Explore verified pre-treatment diagnosis versus completed post-treatment smile restorations.
          </p>
        </div>

        {/* Master 8-Discipline Blueprint Banner Callout */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F382C] via-[#144838] to-[#0d3126] text-white shadow-xl border border-emerald-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-code font-bold tracking-wider text-amber-300 uppercase">
                  OFFICIAL CLINICAL BLUEPRINT
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-900 border border-emerald-700 text-emerald-200">
                  8 Disciplines
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                Complete Dental Care Under One Roof
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
                From MDS-specialist 3D invisible orthodontics to single-visit motorized root canals, ultrasonic gum restorations, and full mouth dentures — every case follows rigorous hospital sterilization and painless protocols.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setPosterModalOpen(true)}
              className="w-full sm:w-auto py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-amber-300 hover:text-white border border-amber-300/40 text-xs font-bold font-sans flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-xs shadow-sm"
            >
              <Maximize2 className="w-4 h-4 text-amber-300" />
              <span>View Full 8-Service Blueprint</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenAppointment("General Consultation - All 8 Specialties")}
              className="w-full sm:w-auto py-3 px-5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold font-sans flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="w-full max-w-full flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar touch-pan-x">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveCaseIndex(0);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-sans font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive 
                    ? 'bg-[#0F382C] text-amber-300 shadow-md shadow-emerald-950/15 border border-emerald-800' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Case Spotlight: Large Interactive Visualizer */}
        {currentCase && (
          <div className="bg-white rounded-3xl border border-emerald-950/10 shadow-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Column: Visual Before/After Canvas (7 cols) */}
              <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                
                {/* Visual View Mode Controls Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 z-10">
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setViewMode('slider')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        viewMode === 'slider' 
                          ? 'bg-emerald-600 text-white shadow-xs' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Split className="w-3.5 h-3.5" />
                      <span>Interactive Slider</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('split')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        viewMode === 'split' 
                          ? 'bg-emerald-600 text-white shadow-xs' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Side-by-Side</span>
                    </button>
                    {currentCase.fullImage && (
                      <button
                        type="button"
                        onClick={() => setViewMode('sheet')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          viewMode === 'sheet' 
                            ? 'bg-emerald-600 text-white shadow-xs' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Clinical Card</span>
                      </button>
                    )}
                  </div>

                  <span className="text-[11px] font-mono-code font-bold text-amber-400 bg-amber-950/70 border border-amber-800/80 px-2.5 py-1 rounded-lg">
                    {currentCase.badge}
                  </span>
                </div>

                {/* Display Media Frame with Adaptive Aspect Ratio */}
                <div className={`relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 ${currentCase.category === 'dentures' ? 'aspect-[4/3] sm:aspect-[1/1]' : 'aspect-[16/10] sm:aspect-[16/9]'} select-none`}>
                  
                  {/* Mode 1: Interactive Slider */}
                  {viewMode === 'slider' && (
                    <div className="relative w-full h-full overflow-hidden group bg-slate-950 flex items-center justify-center">
                      
                      {/* After Image (Background) */}
                      <img 
                        src={currentCase.afterImage} 
                        alt={currentCase.afterLabel} 
                        className="absolute inset-0 w-full h-full object-contain object-center"
                      />

                      {/* Before Image (Clipped Foreground) */}
                      <div 
                        className="absolute inset-0 w-full h-full overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                      >
                        <img 
                          src={currentCase.beforeImage} 
                          alt={currentCase.beforeLabel} 
                          className="absolute inset-0 w-full h-full object-contain object-center"
                        />
                      </div>

                      {/* Divider Line & Handle */}
                      <div 
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] pointer-events-none z-20 flex items-center justify-center"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        <div className="w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center font-bold text-[10px] tracking-tight border-2 border-emerald-700 pointer-events-auto cursor-ew-resize">
                          ◄►
                        </div>
                      </div>

                      {/* Range Input for Accessible Dragging */}
                      <input 
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPosition}
                        onChange={(e) => setSliderPosition(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                        aria-label="Before and After transformation slider"
                      />

                    </div>
                  )}

                  {/* Mode 2: Side-by-Side Split View */}
                  {viewMode === 'split' && (
                    <div className="grid grid-cols-2 h-full gap-2 p-2 bg-slate-950">
                      {/* Left: Before */}
                      <div className="relative h-full overflow-hidden rounded-xl bg-slate-900 flex flex-col items-center justify-center">
                        <img 
                          src={currentCase.beforeImage} 
                          alt={currentCase.beforeLabel} 
                          className="w-full h-full object-contain object-center"
                        />
                      </div>

                      {/* Right: After */}
                      <div className="relative h-full overflow-hidden rounded-xl bg-slate-900 flex flex-col items-center justify-center">
                        <img 
                          src={currentCase.afterImage} 
                          alt={currentCase.afterLabel} 
                          className="w-full h-full object-contain object-center"
                        />
                      </div>
                    </div>
                  )}

                  {/* Mode 3: Full Clinical Sheet */}
                  {viewMode === 'sheet' && currentCase.fullImage && (
                    <div className="relative w-full h-full bg-slate-950 flex items-center justify-center p-2">
                      <img 
                        src={currentCase.fullImage} 
                        alt={currentCase.title} 
                        className="max-w-full max-h-full object-contain rounded-xl"
                      />
                    </div>
                  )}

                </div>


                {/* Bottom Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 text-xs text-slate-400">
                  <span className="font-mono-code">
                    Case {activeCaseIndex + 1} of {filteredCases.length} • {currentCase.specialty}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevCase}
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors cursor-pointer flex items-center gap-1"
                      title="Previous Case"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline text-xs">Prev</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNextCase}
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors cursor-pointer flex items-center gap-1"
                      title="Next Case"
                    >
                      <span className="hidden sm:inline text-xs">Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Case Diagnosis & Clinical Protocol Details (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
                
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-900 text-[11px] font-bold border border-emerald-200 mb-2.5">
                    <span>{currentCase.specialty}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F382C] leading-snug">
                    {currentCase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-emerald-800 font-semibold mt-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{currentCase.highlight}</span>
                  </p>
                </div>

                {/* Clinical Comparison Cards */}
                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80">
                    <span className="text-[10px] font-black uppercase tracking-wider text-rose-800 block mb-1">
                      Pre-Treatment Clinical Presentation:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {currentCase.beforeNotes}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 block mb-1">
                      Post-Treatment Resolution & Protocol:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {currentCase.afterNotes}
                    </p>
                  </div>
                </div>

                {/* Telemetry Metrics Strip */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Duration / Sittings</span>
                    <span className="text-xs font-bold text-slate-900 font-display block mt-0.5">{currentCase.sittings}</span>
                    <span className="text-[11px] text-slate-500 block">{currentCase.timeframe}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Clinical Protocol</span>
                    <span className="text-xs font-bold text-slate-900 font-display block mt-0.5">{currentCase.procedureType}</span>
                    <span className="text-[11px] text-emerald-700 font-semibold block">Class-B Sterilization</span>
                  </div>
                </div>

                {/* Direct Action Trigger */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenAppointment(currentCase.title)}
                    className="w-full py-4 rounded-2xl bg-[#0F382C] hover:bg-[#184D3E] text-amber-300 font-sans font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/15 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer border border-amber-400/30"
                  >
                    <span>Reserve Consultation for This Service</span>
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2 font-sans">
                    Personal evaluation by Dr. Khalidh Khan (MDS Orthodontist).
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Section Subhead: Gallery Grid of All Verified Cases */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F382C]">
              All Verified Clinical Cases ({cases.length})
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Click any clinical outcome below to launch it into the interactive visualizer above.
            </p>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
            Authentic Patient Cases
          </span>
        </div>

        {/* Responsive Grid of All Cases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {cases.map((c) => {
            const isCurrent = currentCase.id === c.id;
            return (
              <div 
                key={c.id} 
                onClick={() => selectCaseDirectly(c.id)}
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group ${
                  isCurrent 
                    ? 'border-emerald-600 shadow-xl ring-2 ring-emerald-500/30 scale-[1.01]' 
                    : 'border-slate-200/90 hover:border-emerald-500/50 shadow-sm hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Completely Clean Clinical Preview Container (No text covering image) */}
                  <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                    {c.fullImage ? (
                      <img 
                        src={c.fullImage} 
                        alt={c.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col h-full w-full gap-0.5">
                        <div className="relative flex-1 overflow-hidden">
                          <img 
                            src={c.beforeImage} 
                            alt={`${c.title} - Before treatment at AK'S Elite Dental Madurai`} 
                            loading="lazy"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="relative flex-1 overflow-hidden">
                          <img 
                            src={c.afterImage} 
                            alt={`${c.title} - After transformation at AK'S Elite Dental Madurai`} 
                            loading="lazy"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content Below Image */}
                  <div className="p-4 sm:p-5 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block truncate">
                        {c.specialty}
                      </span>
                      <span className="text-[9px] font-mono-code font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 shrink-0">
                        Case #{cases.findIndex(x => x.id === c.id) + 1}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold font-display text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                      {c.title}
                    </h4>

                    <div className="inline-block text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-300">
                      {c.badge}
                    </div>

                    <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                      {c.highlight}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-100">
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <Clock className="w-3 h-3 text-emerald-700" />
                        <span>{c.sittings}</span>
                      </span>
                      <span className="text-emerald-800 font-bold">
                        {c.timeframe}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-4 sm:p-5 pt-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      selectCaseDirectly(c.id);
                    }}
                    className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isCurrent 
                        ? 'bg-[#0F382C] text-amber-300 shadow-sm' 
                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200'
                    }`}
                  >
                    <span>{isCurrent ? 'Viewing in Visualizer' : 'Open in Visualizer'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Blueprint Poster Modal */}
      {posterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-slate-900 border border-emerald-800/60 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950 text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  AK
                </div>
                <div>
                  <h4 className="font-bold font-display text-sm text-white">
                    AK's Elite Dental Clinic — 8 Core Clinical Disciplines
                  </h4>
                  <span className="text-[11px] text-emerald-400 block">
                    Chief Dental Surgeon: Dr. Khalidh Khan (BDS, MDS)
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPosterModalOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-950">
              <img 
                src="/real-cases/aks_8_disciplines_poster.jpg" 
                alt="AK's Elite Dental Clinic 8 Core Clinical Disciplines Poster"
                className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-slate-800 shadow-2xl"
              />
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>All 8 disciplines offered with hospital-grade sterilization.</span>
              <button
                type="button"
                onClick={() => {
                  setPosterModalOpen(false);
                  onOpenAppointment();
                }}
                className="py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold font-sans transition-colors cursor-pointer"
              >
                Book Priority Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
